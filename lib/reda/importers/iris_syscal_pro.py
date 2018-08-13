# *-* coding: utf-8 *-*
"""Read binary data from the IRIS Instruments Syscal Pro system

TODO: Properly sort out handling of electrode positions and conversion to
electrode numbers.

"""
import struct
from io import StringIO

import pandas as pd
import numpy as np


def _convert_coords_to_abmn(data, **kwargs):
    """The syscal only stores positions for the electrodes.

    """
    print(data)
    x0 = kwargs.get(
        'x0',
        data.min().min()
    )
    electrode_spacing = kwargs.get('spacing', None)

    # try to determine from the data itself
    if electrode_spacing is None:
        electrode_positions = data.values
        electrode_spacing = np.abs(
            electrode_positions[:, 1:] - electrode_positions[:, 0:-1]
        ).min()

    data_new = pd.DataFrame()
    data_new['a'] = (data.iloc[:, 0] - x0) / electrode_spacing + 1
    data_new['b'] = (data.iloc[:, 1] - x0) / electrode_spacing + 1
    data_new['m'] = (data.iloc[:, 2] - x0) / electrode_spacing + 1
    data_new['n'] = (data.iloc[:, 3] - x0) / electrode_spacing + 1

    # convert to integers
    for col in (('a', 'b', 'm', 'n')):
        data_new[col] = data_new[col].astype(int)

    print('data_new', data_new)

    return data_new


def import_txt(filename, **kwargs):
    """Import Syscal measurements from a text file, exported as 'Spreadsheet'.

    Parameters
    ----------
    filename: string
        input filename
    x0: float, optional
        position of first electrode. If not given, then use the smallest
        x-position in the data as the first electrode.
    spacing: float
        electrode spacing. This is important if not all electrodes are used in
        a given measurement setup. If not given, then the smallest distance
        between electrodes is assumed to be the electrode spacing. Naturally,
        this requires measurements (or injections) with subsequent electrodes.
    reciprocals: int, optional
        if provided, then assume that this is a reciprocal measurements where
        only the electrode cables were switched. The provided number N is
        treated as the maximum electrode number, and denotations are renamed
        according to the equation :math:`X_n = N - (X_a - 1)`

    Returns
    -------
    data: :py:class:`pandas.DataFrame`
        Contains the measurement data
    electrodes: :py:class:`pandas.DataFrame`
        Contains electrode positions (None at the moment)
    topography: None
        No topography information is contained in the text files, so we always
        return None

    Notes
    -----

    * TODO: we could try to infer electrode spacing from the file itself

    """
    # read in text file into a buffer
    with open(filename, 'r') as fid:
        text = fid.read()
    strings_to_replace = {
        'Mixed / non conventional': 'Mixed/non-conventional',
        'Date': 'Date Time AM-PM',
    }
    for key in strings_to_replace.keys():
        text = text.replace(key, strings_to_replace[key])

    buffer = StringIO(text)

    # read data file
    data_raw = pd.read_csv(
        buffer,
        # sep='\t',
        delim_whitespace=True,
    )

    # clean up column names
    data_raw.columns = [x.strip() for x in data_raw.columns.tolist()]

    # generate electrode positions
    data = _convert_coords_to_abmn(
        data_raw[['Spa.1', 'Spa.2', 'Spa.3', 'Spa.4']],
        **kwargs
    )

    # [mV] / [mA]
    data['r'] = data_raw['Vp'] / data_raw['In']
    data['Vmn'] = data_raw['Vp']
    data['Iab'] = data_raw['In']

    # rename electrode denotations
    rec_max = kwargs.get('reciprocals', None)
    if rec_max is not None:
        print('renumbering electrode numbers')
        data[['a', 'b', 'm', 'n']] = rec_max + 1 - data[['a', 'b', 'm', 'n']]

    return data, None, None


def import_bin(filename, **kwargs):
    """Read a .bin file generated by the IRIS Instruments Syscal Pro System and
    return a curated dataframe for further processing. This dataframe contains
    only information currently deemed important. Use the function
    reda.importers.iris_syscal_pro_binary._import_bin to extract ALL
    information from a given .bin file.

    Parameters
    ----------
    filename: string
        Path to input filename

    Returns
    -------
    data: :py:class:`pandas.DataFrame`
        Contains the measurement data
    electrodes: :py:class:`pandas.DataFrame`
        Contains electrode positions (None at the moment)
    topography: None
        No topography information is contained in the text files, so we always
        return None

    """
    metadata, data_raw = _import_bin(filename)
    data = _convert_coords_to_abmn(
        data_raw[['x_a', 'x_b', 'x_m', 'x_n']],
        **kwargs
    )
    # [mV] / [mA]
    data['r'] = data_raw['vp'] / data_raw['Iab']
    data['Vmn'] = data_raw['vp']
    data['Iab'] = data_raw['Iab']

    data['mdelay'] = data_raw['mdelay']
    data['Tm'] = data_raw['Tm']
    data['Mx'] = data_raw['Mx']
    data['chargeability'] = data_raw['m']

    # rename electrode denotations
    rec_max = kwargs.get('reciprocals', None)
    if rec_max is not None:
        print('renumbering electrode numbers')
        data[['a', 'b', 'm', 'n']] = rec_max + 1 - data[['a', 'b', 'm', 'n']]

    # print(data)
    return data, None, None


def _import_bin(filename):
    """Read a .bin file generated by the IRIS Instruments Syscal Pro System

    Parameters
    ----------
    filename: string
        Path to input filename

    Returns
    -------
    metadata: dict
        General information on the measurement
    df: :py:class:`pandas.DataFrame`
        dataframe containing all measurement data

    """
    fid = open(filename, 'rb')

    def fget(fid, fmt, tsize):
        buffer = fid.read(tsize)
        result_raw = struct.unpack(fmt, buffer)
        if len(result_raw) == 1:
            return result_raw[0]
        else:
            return result_raw

    # determine overall size
    fid.seek(0, 2)
    total_size = fid.tell()
    # print('total size', total_size)

    # start from the beginning
    fid.seek(0)

    # read version
    buffer = fid.read(4)
    version = struct.unpack('I', buffer)
    # print('version', version)
    buffer = fid.read(1)
    typedesyscal = struct.unpack('c', buffer)[0]
    syscal_type = int.from_bytes(typedesyscal, 'big')
    # print('Syscal type: {}'.format(syscal_type))

    # comment
    buffer = fid.read(1024)
    comment_raw = struct.iter_unpack('c', buffer)
    comment = ''.join([x[0].decode('utf-8') for x in comment_raw])
    # print('comment', comment)

    metadata = {
        'version': version,
        'syscal_type': syscal_type,
        'comment': comment,

    }

    measurements = []
    # for each measurement
    counter = 0
    while(fid.tell() < total_size):
        # print('COUNTER', counter)
        buffer = fid.read(2)
        array_type = struct.unpack('h', buffer)
        array_type
        # print(array_type)
        # not used
        moretmeasure = fget(fid, 'h', 2)
        moretmeasure
        # print('moretmeasure', moretmeasure)
        # measurement time [ms]
        mtime = fget(fid, 'f', 4)
        # print('measurement time', mtime)
        # delay before IP measurements start [ms]
        mdelay = fget(fid, 'f', 4)
        # print('mdelay', mdelay)
        TypeCpXyz = fget(fid, 'h', 2)
        # our file format documentation always assumes this value to be == 1
        assert TypeCpXyz == 1
        # print('TypeCpXyz', TypeCpXyz)
        # ignore
        fget(fid, 'h', 2)
        # positions: a b m n [m]
        xpos = fget(fid, '4f', 16)
        # print('xpos', xpos)
        ypos = fget(fid, '4f', 16)
        # print('ypos', ypos)
        zpos = fget(fid, '4f', 16)
        # print('zpos', zpos)
        # self-potential [mV]
        sp = fget(fid, 'f', 4)
        # print('sp', sp)
        # measured voltage at voltage electrodes m and n [mV]
        vp = fget(fid, 'f', 4)
        # print('vp', vp)
        Iab = fget(fid, 'f', 4)
        # print('iab', Iab)
        rho = fget(fid, 'f', 4)
        # print('rho', rho)
        m = fget(fid, 'f', 4)
        # print('m', m)
        # standard deviation
        q = fget(fid, 'f', 4)
        # print('q', q)
        # timing windows
        Tm = fget(fid, '20f', 20 * 4)
        # print('Tm', Tm)
        # chargeabilities
        Mx = fget(fid, '20f', 20 * 4)
        # print('Mx', Mx)
        # this is 4 bytes used to store information on the measured channel
        # Channel + NbChannel
        buffer = fid.read(1)
        buffer_bin = bin(ord(buffer))[2:].rjust(8, '0')
        # print(buffer_bin)
        channel = int(buffer_bin[4:], 2)
        channelnb = int(buffer_bin[0:4], 2)
        # print('ChannelNB:', channelnb)
        # print('Channel:', channel)
        # 4 binaries + unused
        buffer = fid.read(1)
        buffer_bin = bin(ord(buffer))[2:].rjust(8, '0')
        # print(buffer_bin)
        overload = bool(int(buffer_bin[4]))
        channel_valid = bool(int(buffer_bin[5]))
        channel_sync = bool(int(buffer_bin[6]))
        gap_filler = bool(int(buffer_bin[7]))
        # print(overload, channel_valid, channel_sync, gap_filler)
        measurement_num = fget(fid, 'H', 2)
        # print('measurement_num', measurement_num)
        filename = fget(fid, '12s', 12)
        # print('filename', filename)
        latitude = fget(fid, 'f', 4)
        # print('lat', latitude)
        longitude = fget(fid, 'f', 4)
        # print('long', longitude)
        # number of stacks
        NbCren = fget(fid, 'f', 4)
        # print('Stacks', NbCren)
        # RS check
        RsChk = fget(fid, 'f', 4)
        # print('RsChk', RsChk)
        # absolute applied voltage
        vab = fget(fid, 'f', 4)
        # print('Vab', vab)
        # tx battery voltage [V]
        batTX = fget(fid, 'f', 4)
        # print('batTX', batTX)
        # rx battery voltage [V]
        batRX = fget(fid, 'f', 4)
        # print('batRX', batRX)
        temperature = fget(fid, 'f', 4)
        # print('Temp.', temperature)
        # TODO: date and time not analyzed
        b = struct.unpack('2f', fid.read(2 * 4))
        # print('b', b)
        b

        measurements.append({
            'version': version,
            'mtime': mtime,
            'x_a': xpos[0],
            'x_b': xpos[1],
            'x_m': xpos[2],
            'x_n': xpos[3],
            'y_a': ypos[0],
            'y_b': ypos[1],
            'y_m': ypos[2],
            'y_n': ypos[3],
            'z_a': zpos[0],
            'z_b': zpos[1],
            'z_m': zpos[2],
            'z_n': zpos[3],
            'mdelay': mdelay,
            'vp': vp,
            'q': q,
            'overload': overload,
            'channel_valid': channel_valid,
            'channel_sync': channel_sync,
            'gap_filler': gap_filler,
            'NbStacks': NbCren,
            'm': m,
            'Tm': Tm,
            'Mx': Mx,
            'nr': measurement_num,
            'vab': vab,
            'channel': channel,
            'sp': sp,
            'Iab': Iab,
            'rho': rho,
            'latitude': latitude,
            'longitude': longitude,
            'channelnb': channelnb,
            'RsCHk': RsChk,
            'batTX': batTX,
            'batRX': batRX,
            'temperature': temperature,
        })

        counter += 1
        if counter == 3:
            break

    # create a dataframe with all primary data
    df = pd.DataFrame(
        measurements
    )
    return metadata, df
