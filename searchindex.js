Search.setIndex({docnames:["_api/reda","_api/reda.configs","_api/reda.containers","_api/reda.eis","_api/reda.exporters","_api/reda.importers","_api/reda.main","_api/reda.plotters","_api/reda.testing","_api/reda.utils","_examples/01_ERT/plot_syscal_dc","_examples/01_ERT/plot_syscal_ip","_examples/02_SIP04/plot_sip04","_examples/03_sEIT/plot_eit_fzj","_examples/03_sEIT/plot_radic_sip256c","_examples/index","about","api","data_containers","debugging","importers","index","installation","test_data"],envversion:53,filenames:["_api/reda.rst","_api/reda.configs.rst","_api/reda.containers.rst","_api/reda.eis.rst","_api/reda.exporters.rst","_api/reda.importers.rst","_api/reda.main.rst","_api/reda.plotters.rst","_api/reda.testing.rst","_api/reda.utils.rst","_examples/01_ERT/plot_syscal_dc.rst","_examples/01_ERT/plot_syscal_ip.rst","_examples/02_SIP04/plot_sip04.rst","_examples/03_sEIT/plot_eit_fzj.rst","_examples/03_sEIT/plot_radic_sip256c.rst","_examples/index.rst","about.rst","api.rst","data_containers.rst","debugging.rst","importers.rst","index.rst","installation.rst","test_data.rst"],objects:{"":{reda:[17,0,0,"-"]},"reda.configs":{configManager:[1,0,0,"-"]},"reda.configs.configManager":{ConfigManager:[1,1,1,""]},"reda.configs.configManager.ConfigManager":{add_to_configs:[1,2,1,""],clear_configs:[1,2,1,""],gen_all_current_dipoles:[1,2,1,""],gen_all_voltages_for_injections:[1,2,1,""],gen_configs_permutate:[1,2,1,""],gen_dipole_dipole:[1,2,1,""],gen_gradient:[1,2,1,""],gen_reciprocals:[1,2,1,""],gen_schlumberger:[1,2,1,""],gen_wenner:[1,2,1,""],load_configs:[1,2,1,""],load_crmod_config:[1,2,1,""],load_crmod_volt:[1,2,1,""],nr_of_configs:[1,3,1,""],remove_duplicates:[1,2,1,""],split_into_normal_and_reciprocal:[1,2,1,""],to_pg_scheme:[1,2,1,""],write_configs:[1,2,1,""],write_crmod_config:[1,2,1,""],write_crmod_volt:[1,2,1,""]},"reda.containers":{CR:[2,0,0,"-"],ERT:[2,0,0,"-"],SIP:[2,0,0,"-"],TDIP:[2,0,0,"-"],sEIT:[2,0,0,"-"]},"reda.containers.CR":{CR:[2,1,1,""]},"reda.containers.ERT":{ERT:[2,1,1,""],Exporters:[2,1,1,""],Importers:[2,1,1,""],ListHandler:[2,1,1,""],LogDataChanges:[2,1,1,""],LoggingClass:[2,1,1,""],append_doc_of:[2,4,1,""],prepend_doc_of:[2,4,1,""]},"reda.containers.ERT.ERT":{check_dataframe:[2,2,1,""],compute_K_analytical:[2,2,1,""],compute_reciprocal_errors:[2,2,1,""],filter:[2,2,1,""],sub_filter:[2,2,1,""],to_ip:[2,2,1,""]},"reda.containers.ERT.Exporters":{export_bert:[2,2,1,""],export_pygimli:[2,2,1,""]},"reda.containers.ERT.Importers":{import_bert:[2,2,1,""],import_pygimli:[2,2,1,""],import_syscal_bin:[2,2,1,""],import_syscal_txt:[2,2,1,""]},"reda.containers.ERT.ListHandler":{emit:[2,2,1,""]},"reda.containers.ERT.LoggingClass":{print_data_journal:[2,2,1,""],print_log:[2,2,1,""],setup_logger:[2,2,1,""]},"reda.containers.SIP":{SIP:[2,1,1,""],importers:[2,1,1,""]},"reda.containers.SIP.SIP":{check_dataframe:[2,2,1,""],reduce_duplicate_frequencies:[2,2,1,""]},"reda.containers.SIP.importers":{import_sip04:[2,2,1,""]},"reda.containers.TDIP":{TDIP:[2,1,1,""]},"reda.containers.TDIP.TDIP":{check_dataframe:[2,2,1,""],plot_decay_curve:[2,2,1,""],to_cr:[2,2,1,""]},"reda.containers.sEIT":{importers:[2,1,1,""],sEIT:[2,1,1,""]},"reda.containers.sEIT.importers":{import_eit_fzj:[2,2,1,""],import_sip256c:[2,2,1,""]},"reda.containers.sEIT.sEIT":{abmn:[2,3,1,""],check_dataframe:[2,2,1,""],query:[2,2,1,""],remove_frequencies:[2,2,1,""],subquery:[2,2,1,""]},"reda.eis":{convert:[3,0,0,"-"],plots:[3,0,0,"-"],test_convert:[3,0,0,"-"],units:[3,0,0,"-"]},"reda.eis.convert":{convert:[3,4,1,""],from_ccomplex:[3,4,1,""],from_cmag_cpha:[3,4,1,""],from_cre_cim:[3,4,1,""],from_cre_cmim:[3,4,1,""],from_lnrmag_rpha:[3,4,1,""],from_log10rmag_rpha:[3,4,1,""],from_rcomplex:[3,4,1,""],from_rmag_rpha:[3,4,1,""],from_rre_rim:[3,4,1,""],from_rre_rmim:[3,4,1,""],generic_magpha_to_reim:[3,4,1,""],split_data:[3,4,1,""],to_ccomplex:[3,4,1,""],to_cmag_cpha:[3,4,1,""],to_complex:[3,4,1,""],to_cre_cim:[3,4,1,""],to_cre_cmim:[3,4,1,""],to_lnrmag_rpha:[3,4,1,""],to_log10rmag_rpha:[3,4,1,""],to_rcomplex:[3,4,1,""],to_rmag_rpha:[3,4,1,""],to_rre_rim:[3,4,1,""],to_rre_rmim:[3,4,1,""]},"reda.eis.plots":{multi_sip_response:[3,1,1,""],sip_response:[3,1,1,""]},"reda.eis.plots.multi_sip_response":{add:[3,2,1,""],plot_cim:[3,2,1,""],plot_cre:[3,2,1,""],plot_rmag:[3,2,1,""],plot_rpha:[3,2,1,""],set_xlim:[3,2,1,""]},"reda.eis.plots.sip_response":{plot:[3,2,1,""],to_one_line:[3,2,1,""]},"reda.eis.test_convert":{TestClass_input_styles:[3,1,1,""],TestClass_test_converters:[3,1,1,""]},"reda.eis.test_convert.TestClass_input_styles":{precompute_values:[3,2,1,""],setup:[3,2,1,""],test_input_styles:[3,2,1,""]},"reda.eis.test_convert.TestClass_test_converters":{check_from_function:[3,2,1,""],check_to_function:[3,2,1,""],precompute_values:[3,2,1,""],setup:[3,2,1,""],teardown:[3,5,1,""],test_convert:[3,2,1,""],test_from_cmag_cpha:[3,2,1,""],test_from_cre_cim:[3,2,1,""],test_from_cre_cmim:[3,2,1,""],test_from_rmag_rpha:[3,2,1,""],test_from_rre_rim:[3,2,1,""],test_from_rre_rmim:[3,2,1,""],test_to_cmag_cpha:[3,2,1,""],test_to_cre_cim:[3,2,1,""],test_to_cre_mim:[3,2,1,""],test_to_rre_rim:[3,2,1,""]},"reda.eis.units":{get_label:[3,4,1,""]},"reda.exporters":{bert:[4,0,0,"-"],crtomo:[4,0,0,"-"],syscal:[4,0,0,"-"]},"reda.exporters.bert":{export_bert:[4,4,1,""]},"reda.exporters.crtomo":{save_block_to_crt:[4,4,1,""],write_files_to_directory:[4,4,1,""]},"reda.exporters.syscal":{syscal_save_to_config_txt:[4,4,1,""]},"reda.importers":{bert:[5,0,0,"-"],eit160:[5,0,0,"-"],eit40:[5,0,0,"-"],eit_fzj:[5,0,0,"-"],eit_version_2010:[5,0,0,"-"],eit_version_2013:[5,0,0,"-"],eit_version_2017:[5,0,0,"-"],eit_version_2018a:[5,0,0,"-"],geotom:[5,0,0,"-"],iris_syscal_pro:[5,0,0,"-"],radic_sip256c:[5,0,0,"-"],res2dinv:[5,0,0,"-"],sip04:[5,0,0,"-"]},"reda.importers.bert":{import_ohm:[5,4,1,""]},"reda.importers.eit160":{import_medusa_data:[5,4,1,""]},"reda.importers.eit40":{apply_correction_factors:[5,4,1,""],import_medusa_data:[5,4,1,""]},"reda.importers.eit_fzj":{apply_correction_factors:[5,4,1,""],compute_quadrupoles:[5,4,1,""],get_mnu0_data:[5,4,1,""]},"reda.importers.eit_version_2018a":{convert_electrode:[5,4,1,""]},"reda.importers.geotom":{add_file:[5,4,1,""]},"reda.importers.iris_syscal_pro":{import_bin:[5,4,1,""],import_txt:[5,4,1,""]},"reda.importers.radic_sip256c":{compute_quadrupoles:[5,4,1,""],parse_radic_file:[5,4,1,""],parse_reading:[5,4,1,""],write_crmod_file:[5,4,1,""]},"reda.importers.res2dinv":{add_dat_file:[5,4,1,""]},"reda.importers.sip04":{import_sip04_data:[5,4,1,""],import_sip04_data_all:[5,4,1,""]},"reda.main":{logger:[6,0,0,"-"],units:[6,0,0,"-"]},"reda.main.logger":{setup_logger:[6,4,1,""]},"reda.main.units":{get_label:[6,4,1,""]},"reda.plotters":{histograms:[7,0,0,"-"],plots2d:[7,0,0,"-"],pseudoplots:[7,0,0,"-"],time_series:[7,0,0,"-"]},"reda.plotters.histograms":{plot_histograms:[7,4,1,""],plot_histograms_extra_dims:[7,4,1,""],plot_histograms_it_extra_dims:[7,4,1,""]},"reda.plotters.plots2d":{matplot:[7,4,1,""],plot_pseudodepths:[7,4,1,""],plot_pseudosection:[7,4,1,""],plot_rawdataplot:[7,4,1,""]},"reda.plotters.pseudoplots":{plot_ps_extra:[7,4,1,""],plot_pseudosection_type2:[7,4,1,""],test_get_unique_identifiers:[7,4,1,""]},"reda.plotters.time_series":{plot_quadpole_evolution:[7,4,1,""]},"reda.testing":{containers:[8,0,0,"-"],test:[8,4,1,""]},"reda.utils":{data:[9,0,0,"-"],eit_fzj_utils:[9,0,0,"-"],filter_config_types:[9,0,0,"-"],fix_sign_with_K:[9,0,0,"-"],geom_fac_crtomo:[9,0,0,"-"],geometric_factors:[9,0,0,"-"],helper_functions:[9,0,0,"-"],mpl:[9,0,0,"-"],norrec:[9,0,0,"-"],pseudo_positions:[9,0,0,"-"]},"reda.utils.data":{download_data:[9,4,1,""]},"reda.utils.eit_fzj_utils":{compute_correction_factors:[9,4,1,""]},"reda.utils.filter_config_types":{filter:[9,4,1,""]},"reda.utils.fix_sign_with_K":{fix_sign_with_K:[9,4,1,""],test_fix_sign_with_K:[9,4,1,""]},"reda.utils.geom_fac_crtomo":{compute_K:[9,4,1,""],get_default_settings:[9,4,1,""]},"reda.utils.geometric_factors":{apply_K:[9,4,1,""],compute_K_analytical:[9,4,1,""],compute_K_numerical:[9,4,1,""]},"reda.utils.helper_functions":{opt_import:[9,4,1,""],search:[9,4,1,""],which:[9,4,1,""]},"reda.utils.mpl":{mpl_get_cb_bound_below_plot:[9,4,1,""],mpl_get_cb_bound_next_to_plot:[9,4,1,""],setup:[9,4,1,""]},"reda.utils.norrec":{assign_norrec_diffs:[9,4,1,""],assign_norrec_to_df:[9,4,1,""],average_repetitions:[9,4,1,""],compute_norrec_differences:[9,4,1,""],get_test_df:[9,4,1,""],get_test_df_advanced:[9,4,1,""],test2:[9,4,1,""],test_norrec_assignments1:[9,4,1,""]},"reda.utils.pseudo_positions":{get_xy_simple_dipole_dipole:[9,4,1,""]},reda:{configs:[1,0,0,"-"],containers:[2,0,0,"-"],eis:[3,0,0,"-"],exporters:[4,0,0,"-"],importers:[5,0,0,"-"],main:[6,0,0,"-"],plotters:[7,0,0,"-"],testing:[8,0,0,"-"],utils:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:classmethod"},terms:{"00000000e":3,"00116268j":3,"00164187j":3,"00231829j":3,"00327285j":3,"00461938j":3,"0065178j":3,"00919217j":3,"01295546j":3,"01824266j":3,"02565412j":3,"03601005j":3,"05015818j":12,"05041399j":3,"07031682j":3,"09755774j":3,"0x2aac7e48e828":13,"11859279j":12,"132345301j":12,"13433101j":3,"14733034j":12,"16227766e":3,"18297794j":3,"24543425j":3,"256c":16,"32210768j":3,"41005275j":3,"411957126j":12,"47746068j":12,"4th":16,"50083533j":3,"51828971j":3,"57965851j":3,"59248806j":3,"62341325e":3,"62835135j":3,"6331137j":3,"77827941e":3,"aur\u00e9li":2,"boolean":8,"case":[1,2,9,18],"class":[1,2,3,5,7,9,12,20],"default":[2,3,5,7,8,9,18],"export":[0,2,5,6,13,18,21],"float":[2,5,7,9],"function":[1,2,3,4,5,6,7,8,9,16,18,20,21],"import":[0,1,2,3,7,9,18,19,21],"int":[1,2,5,7],"j\u00fclich":5,"new":[7,9],"r\u00e4ker":2,"return":[1,2,3,5,6,7,8,9,11,18,19,20],"switch":[1,2,5,9],"true":[1,2,3,4,5,7,8,9,11,12,13,14],"try":[2,5,9],"while":[16,21],Axes:7,EIS:14,For:[1,2,7,9,17],IDs:9,NOT:9,RES:5,That:9,The:[1,2,3,5,7,9,13,14,16,18,21],USE:9,Use:[1,2,5,9],Used:7,Useful:9,Will:3,With:5,__name__:9,_examples_jupyt:15,_examples_python:15,_import_bin:[2,5],_plot:3,_std:5,abem:5,abm:5,abmn:[1,2,5,11,13],abmnr:2,abort:8,abov:[5,7],abs:1,absolut:[1,5],access:[2,13],accord:[2,5,9],account:[7,9],across:[16,18,21],act:5,actual:[2,7],add:[1,2,3,5],add_ax:9,add_dat_fil:5,add_fil:5,add_to_config:1,added:[1,2,9],addit:[3,4,8],admit:5,advanc:[16,21],affect:9,after:[1,2,3,5,9],again:2,aim:[16,21],all:[1,2,3,4,5,7,9,11,13,14,15,20],allow:[3,20],along:7,alreadi:1,also:[1,5,7,9,11,18],altern:19,alwai:[1,2,5],analysi:[16,21],analyz:[16,21],ander:2,ani:[7,9,16,18,19,21],anoth:[2,3],appar:[9,18],append_doc_of:2,appli:[2,5,9,13,16,21],applic:2,apply_correction_factor:5,apply_k:[9,10,11,13,14],appropri:5,arang:[1,7],arbitrarili:18,arctan2:5,area:7,arrai:[1,3,4,5,7,9],arrrai:9,artist:9,as3:5,ascii:4,aspect:9,assess:7,assign:[2,9,10,11,13,14],assign_norrec_diff:9,assign_norrec_to_df:[9,13],associ:18,assum:[2,5,7],attribut:[1,2],auken:2,author:2,automat:8,avail:[2,6,18,20],averag:[2,5,9],average_repetit:9,avoid:9,ax1:[7,9],ax2:7,axes:[7,9,13,14],axi:[3,7],back:[3,5],base:[1,2,3,9],becaus:5,becom:9,befor:[1,5,13],before_curr:1,below:[3,9],bert:[0,2,16],best:21,between:[1,2,5,7,9,16,21],bin:[2,5,11],binari:[5,9,20],binlei:2,biogeosci:[5,9],bit:14,bool:[1,2,3,5,7,9],both:[1,7],bridg:[16,21],bug:16,build:8,built:[5,20],cabl:[2,5],calcul:2,calibr:5,call:[1,5,9,18],can:[1,3,4,7,9,11,13,18,19,20],cannot:[7,9],capabl:21,caus:14,cb1:9,cb_po:9,cblabel:7,cbmax:7,cbmin:7,ccomplex:3,center:5,certain:7,chain:3,chang:[2,9],channel:5,chargeabl:18,check:[2,5],check_datafram:2,check_from_funct:3,check_meas_num:[2,5],check_to_funct:3,choic:5,choos:11,chosen:9,christiansen:2,cim:3,classmethod:3,clear_config:1,click:[10,11,12,13,14,17],clone:22,close:8,cmap:9,cmax:3,cmin:3,cni:5,cnu:5,code:[3,4,5,7,8,9,10,11,12,13,14,15,16,21],col:7,cole:2,color:[7,9],colorbar:[7,9],colorbarbas:9,colorcod:7,column:[1,2,4,5,6,7,9,11,13,14],com:22,command:9,common:[5,16,21],commonli:1,commun:[16,21],compar:[3,7],compat:[4,13,16,21],complex:[2,5,18],compris:3,comput:[2,5,9,13,14],compute_correction_factor:9,compute_k:9,compute_k_analyt:[2,9,10,11,13,14],compute_k_numer:9,compute_norrec_differ:9,compute_quadrupol:5,compute_reciprocal_error:2,conda:22,conduct:[3,9],config:[0,4,5,7,9,13],config_fil:5,configfil:[2,13],configmanag:0,configs_large_dipoles_norrec:13,configs_uniqu:1,configur:[1,2,4,5,7,9],consecut:[2,5],constant:2,constrain:2,construct:[5,13],contact:5,contactresist:5,contain:[0,1,3,5,6,7,9,10,12,13,14,19],contamin:2,content:9,context:2,contribut:21,conveni:6,convers:[2,3,5],convert:[0,1,2,5],convert_electrod:5,coordin:[7,9],copi:[2,9],copper:2,core:[12,13,19],corner:7,correct:[5,6,7,8,9],correction_fil:[2,5],correspond:[1,6,7],could:[2,5],count:[12,13,14],coverag:1,cpa:2,crconfig:1,cre:3,creat:[1,7,12,14],crmod:[1,4,9],crt_grid:7,crt_result:13,crtomo:[0,1,7,9,13,16],csv:[2,5],ctype:7,cumbersom:14,curat:[2,5,18],current:[1,2,5,7,18,21,22],curv:[2,11],cyan:7,dat:[1,9,13],data:[0,1,2,3,4,5,6,7,8,12,16,21],data_10hz:14,data_eit40_v_ez:13,data_emd_3p:5,data_emd_4p:5,data_filenam:5,data_md_raw:5,data_norm:[10,11],data_radic_256c:14,data_reciproc:[10,11],data_syscal_ert:10,data_syscal_ip:11,datacontainerert:1,datafram:[2,4,5,7,9,12,20],dataframegroupbi:13,dataobj:7,dataset:[2,5,7,9],datefram:9,datetim:[2,5],dc2dinvr:5,dd_merg:7,debug:[2,5],decai:[2,11],decay_curv:11,deem:[2,5],def:7,defin:[5,6,7],delet:[1,3],delta:5,denot:[2,5,9,13],depend:[9,22],deprec:19,depreci:9,deriv:18,descend:2,descript:[5,18],detail:5,detect:11,determin:[1,3,7,9,14],develop:[5,22],deviat:5,devic:[4,5,16,21],df_all:5,df_emd:5,df_new:9,dict:[3,5,7,9],dictionari:[3,5,7],diff_list:9,differ:[2,4,5,7,9],dimens:[3,7],dipdip_skip0_nor:14,dipdip_skip0_rec:14,dipol:[1,5,7,9],dir:9,directli:[2,7,9,13],directori:[4,5,9],disk:11,distanc:[1,2,5,7,9],do_not_satur:7,doc:19,docstr:[8,9],document:[8,16,19],doe:[5,7,11],doesnotexist:9,doi:[2,16],domain:[2,18],don:[2,5,7],done:9,down:[5,9],download:[2,5,9,10,11,12,13,14,15],download_data:[2,9],dpi:13,drake:2,dtype:[3,12],due:9,dummi:8,dump:11,duplic:[1,9],dure:[8,9],e213:2,e225:2,each:[1,2,5,7,9,13,16,18,20,21],edf:6,edfk:10,eis:[0,12,14],eis_plot:14,eit160:[0,15,16],eit40:[0,15,16],eit:[2,5],eit_data_mnu0:[5,13],eit_fzj:0,eit_fzj_util:0,eit_version_2010:0,eit_version_2013:0,eit_version_2017:0,eit_version_2018a:0,either:[3,9],elec:9,elec_fil:9,electr:[2,4,18],electrod:[1,2,4,5,7,9,10,11,14,18,20],electrode_posit:2,elem:9,elem_fil:9,element:9,els:11,emb:11,emd:5,emit:[2,19],emphasi:[16,21],enabl:[2,5,9],encount:21,end:[3,5],entri:[1,9],equat:[2,5,9],erro:2,error:[2,4,19],ert:[0,1,5,7],ertcontain:[2,7],ertcontainer_nr:7,ertobj:7,esben:2,etc:7,evalu:2,everyth:8,exact:2,exampl:[0,1,2,3,7,8,10,11,12,13,14,16,21],except:9,excit:5,exclud:1,execut:[9,13],exist:[1,9],exit:[8,11],exp:14,expect:[7,9],experiment:18,explan:[5,16],export_bert:[2,4],export_pygimli:2,extend:[2,5],extra:7,extra_dim:7,extract:[1,2,5],facil:2,facilit:6,factor:[2,3,5,9,13,14,18],fail:8,fairli:16,fals:[1,2,3,4,5,7,8,9],featur:16,feed:3,few:[7,9],fiandaca:2,fid:[2,11],field:2,fig:[2,3,7,9,12,13,14],figs_dict:7,figsiz:[13,14],figur:[2,3,7,11],file:[1,2,3,4,5,6,8,9,11,12,13,20,22],filenam:[1,2,3,4,5,11,12,13],filetyp:3,fill:1,filter:[2,9,13,14],filter_act:2,filter_config_typ:0,filter_queri:2,filter_skip:5,find:[2,9],finit:9,first:[1,2,3,5,7,9,18],fix:[9,14],fix_sign_with_k:[0,11,13,14],fixedloc:9,fixk:11,flat:[13,14],flatten:3,flavor:3,fmax:2,fmin:2,follow:[2,9,18,20],form:[1,16,21],format:[1,2,3,4,5,13,14,20],formula:3,fortran:3,forward:[2,16],found:9,four:[1,9,13],frame:[2,5,7,9,12],frame_on:9,frequenc:[2,3,5,7,12,13,14,18],from:[1,2,3,5,7,9,12,13,16,18,20,21,22],from_ccomplex:3,from_cmag_cpha:3,from_cre_cim:3,from_cre_cmim:3,from_lnrmag_rpha:3,from_log10rmag_rpha:3,from_rcomplex:3,from_rmag_rpha:3,from_rre_rim:3,from_rre_rmim:3,front:1,full:[1,2,5,9,10,11,12,13,14,17],fun:2,func:3,further:[2,5],futur:[14,18,19],futurewarn:19,fzj:[2,5,16],galleri:[10,11,12,13,14,15],gap:[16,21],gazoti:2,gen_all_current_dipol:1,gen_all_voltages_for_inject:1,gen_configs_permut:1,gen_dipole_dipol:1,gen_gradi:1,gen_reciproc:1,gen_schlumberg:1,gen_wenn:1,gener:[1,2,3,4,5,7,10,11,12,13,14,15],generic_magpha_to_reim:3,geo2011:2,geoelectr:[16,21],geom_fac_crtomo:0,geometr:[2,3,9,13,14,18],geometri:9,geometric_factor:[0,10,11,13,14],geomk:11,geophys:[2,16,21,22],geotom:0,get:21,get_default_set:9,get_group:[13,14],get_label:[3,6],get_mnu0_data:5,get_nam:2,get_test_df:[2,9],get_test_df_advanc:9,get_xy_simple_dipole_dipol:9,getattr:19,gianluca:2,git:22,github:22,given:[1,2,3,5,6,7,9,18,20],global:18,going:7,gradient:1,graphic:7,grid:7,ground:5,group:[2,4,7,14],groupbi:[13,14],grouper:13,hack:11,half:[1,2,9],handl:5,handler:2,hardcod:3,have:[1,21],help:16,helper:9,helper_funct:0,here:[1,2,3,5,9,10,11,12,13,14,17,19],herebi:7,highli:[16,21],hist_filtered_f_:13,hist_raw_f_:13,histogram:[0,10,13,14],hists_filt:13,hists_raw:13,hold:[1,3,7,9],home:19,homogen:[2,9],how:1,howev:[6,7],hspace:14,html:19,http:[2,19,22],human:[16,21],hundr:18,iab:10,idea:21,identifi:[5,6,9],ids:[1,2,10,11,13,14],ignor:[1,7],ignore_crossed_dipol:1,ii3:5,iloc:14,imag:18,imaginari:[3,5],imped:[2,3,5,18],implement:2,impli:[1,18],import_:20,import_bert:2,import_bin:5,import_eit_fzj:[2,13],import_medusa_data:5,import_ohm:5,import_pygimli:2,import_sip04:[2,12],import_sip04_data:5,import_sip04_data_al:5,import_sip256c:[2,14],import_syscal_bin:[2,11],import_syscal_txt:[2,10],import_txt:5,importconstruct:2,improv:14,includ:[1,3,7],increas:5,incred:14,increment:[1,5],index:[9,11,19],index_nor:[2,11],index_rec:[2,11],indic:[1,2,5,9],individu:[7,16,21],induc:[2,18],infer:[2,3,5,7,9],info:[2,9],inform:[2,5,9],inherit:2,initi:[3,13],inject:[1,2,5],injections_raw:1,inplac:2,input1:3,input2:3,input:[2,3,5],input_format:3,insid:2,instal:9,instanc:[1,7],instead:[1,7],instrument:[2,4,5],integ:5,intend:2,interest:[5,21],interfac:[16,18,21],intern:16,interpret:7,introduc:20,invers:[2,4,16,21],involv:1,ipynb:[10,11,12,13,14],ipython:11,iri:[2,4,5],iris_syscal_pro:0,iris_syscal_pro_binari:[2,5],irregular:9,is3:5,isdir:13,isfil:11,issu:16,item:[13,14],iter:7,itself:[2,5,6],jan:2,jet_r:9,journal:[16,21],jump:[2,5,11],jupyt:[10,11,12,13,14,15],just:7,keep:[2,16,21],keep_dir:9,kei:[2,5,6,7,9,10,13,14],kemna:[2,4,5,9],kerosen:2,keyerror:19,keys_diff:9,keys_mean:9,keyword:9,known:1,kwarg:[2,3,4,5,7],kx2:1,kx4:1,label:[3,6,7,9,19],labrecqu:2,laps:[16,21],larg:11,largest:5,last:3,later:2,latest:22,latex:[3,6,9],latter:[16,21],leakag:5,left:7,length:1,lib:19,librari:[16,21],licens:[16,21],lie:1,like:19,limit:[3,7],line:[7,13],linear:7,list:[1,2,3,7,9,19],listhandl:2,listlik:19,load:[1,5,7,11],load_config:1,load_crmod_config:1,load_crmod_volt:1,loc:[2,19],locat:9,log10:[7,14],log10plot:7,log:[2,16,21],log_list:2,logdatachang:2,logger:[0,2],loggingclass:2,look:[16,21],lot:[5,18],lower:[7,18],made:7,mag:3,magnitud:[1,3,5],main:[0,9,17],make:20,makedir:13,manag:[1,2,3,18,20],mani:1,mat:[2,5,12,13],mat_filenam:5,materi:3,mathml:3,matlab:5,matplot:7,matplotlib:[2,3,7,8,9],matter:11,max:[2,12,13,14],maximum:[2,5,7],mcf:5,mea:3,mean:[1,2,5,12,13,14,20],meaning:6,meant:2,measur:[1,2,3,4,5,7,9,13,16,18,21],measurements2:7,measuremnt:1,medusa:[2,5],merg:[1,7],mesh:9,meshgrid:7,mesur:18,metadata:18,method:[1,2,3,8],mid:1,mimic:9,min:[2,12,13,14],minim:18,minimum:7,minut:[13,14],misc:9,miss:19,mit:[16,21],mlnerallzatlont:2,mnu0:5,mod:9,model:[2,4,9],modul:[0,17,19,20],moment:[2,5,9,14],monitor:16,more:[1,2,5,7,9],most:2,mostli:16,mpl:[0,3],mpl_get_cb_bound_below_plot:9,mpl_get_cb_bound_next_to_plot:9,mrad:[5,18],multi_sip_respons:3,multipl:[2,3,20],multiplex:5,multipli:3,multitud:[16,21],must:[1,2,3,18,20],mweigand:19,na1:5,na2:5,name:[2,6,7,9,18,19],nan:1,natur:[2,5],nax4:1,ndarrai:[1,4,5,7,9],necessari:[5,9,20],need:[5,9],neg:[9,14],nelson:2,neumann:9,new_config:1,new_kei:19,next:[3,5,9],nice:3,nmu0:5,nni:5,nnx1:1,nnx4:1,nocb:7,noel:1,non:1,none:[1,2,3,5,7,8,9,20],nor:[4,11,13],nor_indic:1,norm:9,normal:[1,2,4,7,9,11,13],norrec:[0,2,4,11,13,14],nosetest:3,note:[2,5,7,9,11,18],notebook:[10,11,12,13,14,15],notimplementederror:2,nov:16,now:[2,13],nr_electrod:[1,7],nr_id:[2,11,14],nr_of_config:1,nr_of_electrod:1,nr_voltage_dipol:1,nrx1:1,nrx4:1,number:[1,2,5,7,10,11,14],numer:9,numpi:[1,3,4,5,7,9,14],nx2:1,nx4:[1,4,5,7,9],object:[1,2,3,7,9,11,13,20],observ:2,offer:[16,21],ohm:[2,5,9,18],oject:7,one:[1,3,5,7,11,13],one_spectrum:3,ones:1,onli:[1,2,3,5,7,9,11,17],only_same_dipole_length:1,only_typ:9,onlydoctest:8,open:[2,5,11,16,21],opt_import:9,option:[1,2,3,5,7,8,9,18,22],order:[9,19],org:[2,19,22],orient:9,other:[5,9],otherwis:[1,6,7,9],out:[1,5,10,11,12,13,14],outdir:9,outlin:9,output1:3,output2:3,output:[1,2,3,4,5,9],output_format:3,outsid:7,over:2,overal:7,overview:[3,17],overwrit:9,packag:[17,19],pad:1,pair:[9,13],panda:[2,5,7,9,12,13,19,20],paper:9,paramet:[1,2,3,4,5,7,8,9,11],parse_radic_fil:5,parse_read:5,part:[2,3,5,9],particular:[16,21],pass:[7,19],path:[1,2,5,9,11,13],pcolormesh:7,pdf:[3,7,9,12,13,14],permiss:[16,21],permut:1,pfile:11,pha:3,phase:[1,3,5,18],physic:6,pickl:11,pinpoint:19,pip:22,pipe:3,pipelin:5,place:2,platform:[16,21],pleas:21,plot:[0,2,6,7,9,10,11,12,13,14],plot_cim:3,plot_cr:3,plot_decay_curv:[2,11],plot_eit_fzj:13,plot_histogram:[7,10],plot_histograms_extra_dim:[7,13],plot_histograms_it_extra_dim:7,plot_kei:7,plot_ps_extra:7,plot_pseudodepth:7,plot_pseudosect:7,plot_pseudosection_type2:[7,13,14],plot_quadpole_evolut:7,plot_radic_sip256c:14,plot_rawdataplot:7,plot_rmag:3,plot_rpha:3,plot_sip04:12,plot_syscal_dc:10,plot_syscal_ip:11,plots2d:0,plotter:[0,10,13,14],plt:[7,9,13,14],plt_obj:9,pmax:3,pmin:3,png:[3,7,9,11,13],point:[1,2,5,9,11,13,20],polar:[2,18],pool:1,porphyri:2,posit:[1,2,5,7,9,19,20],possibl:[1,5,7,20],postprocess:5,potenti:[1,5,18],pprofil:11,precompute_valu:3,prepend_doc_of:2,present:2,prevent:11,previor:1,previous:9,print:[1,9,11,12,13],print_data_journ:2,print_log:2,print_stat:11,prioriti:2,pro:[2,4,5],problem:[19,21],process:[1,2,3,5,9,16,18,21],produc:[1,2,5,7],profil:11,program:[4,5,9],progress:[16,21],project:22,properli:5,properti:3,provid:[1,2,3,5,7,9,11,16,18,20,21],pseudo:[5,9],pseudo_posit:0,pseudodepth:7,pseudoplot:[0,13,14],pseudosect:[7,13,14],pseudosections_eit40:13,pseudosections_rad:14,ptype:3,purpos:[8,9],pybert:1,pydata:19,pygimli:[1,4,5],pylab:[9,13,14],pypi:22,pyplot:[7,9],python3:19,python:[9,10,11,12,13,14,15,16,21,22],quadpol:[1,7,18],quadpole_data:13,quadrant:5,quadrupol:[1,2,5,7,13],quadrupole_mod:5,queri:[2,13,14],question:5,quick:7,radic:[2,5,15,16],radic_sip256c:0,rais:[2,19],random:7,rang:7,ratio:9,raw:[7,13,14],rawdata:7,rcomplex:[3,12,14],rcparam:[3,9],read:[1,2,4,5,14],readabl:[16,21],reading_block:5,reading_config:5,real:[3,5,7],realiz:[16,21],rec:[4,11,14],rec_indic:1,reciproc:[1,2,3,4,5,7,9,10,11,13,14],recogn:2,record:2,red:7,reda:[10,11,12,13,14,17,18,20,22],redaex:13,redafixk:[13,14],redahist:13,redak:[13,14],reduce_duplicate_frequ:2,redund:5,refer:[5,9],regist:9,reindex:19,rel:1,relat:[5,6,7],releas:22,relev:5,remain:[9,13],remov:[1,2,3,9,11],remove_dupl:1,remove_frequ:[2,13],renam:[2,5],renumb:[10,11],repeat:9,repetit:5,report:16,repositori:9,reproduc:[16,21],request:[2,3],requir:[2,5,6,9,22],requiredfor:9,res2dinv:[0,16],res:14,research:5,resist:[2,3,5,9,18],resistor:5,respect:7,respons:3,restrict:7,result:[2,3,5,9],retain:20,return_3p:5,return_fig:[2,3,11,12,14],return_indic:1,rhizotron:9,rho:[3,9,14],rho_a:[9,10,13],rhoa:18,right:[7,9,14],rmag:3,robust:16,roll:7,root:2,row:[2,5,11,13,14],rpha:[3,5,9,12,13,14,18],rule:1,run:[3,5,8,13,14],same:[1,7],satur:7,save:[3,4,11],save_block_to_crt:4,savefig:[13,14],scheme:[1,2],schlumberg:[1,7,9],scientif:[16,21],script:[13,14],search:9,second:[1,5,13,14,18],section:[19,21],see:[3,5,9,19],seit:[0,13,14],select:[1,9],selection_mod:5,selector:5,self:[1,19],sensor:5,separ:[2,5,7,9,13],set:[1,2,3,4,5,6,7,9,16,18,21],set_nam:2,set_titl:[7,13,14],set_xlim:3,setup:[2,3,5,7,9,22],setup_logg:[2,6],shape:7,sharei:[13,14],sharex:[13,14],shift:[5,14],should:[5,9,16,20],show:[7,8,12],shown:17,shunt:5,shuntresist:5,sign:[9,14],similar:19,simpl:[9,20],simplefilt:19,simplifi:6,singl:5,sink_nod:9,sip04:[0,2,12],sip04_fs_01:2,sip04_fs_06:2,sip256c:[2,5,15],sip:[0,3,5,14,15,16],sip_data:[5,12],sip_dataa:2,sip_respons:[3,12,14],sipdata:5,site:19,sitegold:2,skip:[1,5,7],skipc:1,skipv:1,slightli:5,slow:[14,16],smaller:[2,5],smallest:[1,2,5],snippet:5,some:[3,9,20],someth:9,sometim:5,somewhat:14,soon:6,sorri:14,sort:[5,7,9,13],sort_valu:14,sound:1,sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21],space:[2,4,5,7,9,10,11,13,14],spatial:7,special:9,specif:[2,5],specifi:[2,3,9,11],spectra:[2,3,14],spectral:[2,18],spectrum:[2,3,12,14],spectrum_nor:14,spectrum_rec:14,sphinx:[10,11,12,13,14,15],split:[1,3],split_data:3,split_into_normal_and_reciproc:1,spread:[9,13],spreadsheet:[2,5],squeez:3,stabl:19,standard:[3,5],start:20,start_skip:1,state:2,statement:[2,9],std:[2,12,13,14],step:[1,5,7,16,21],stepc:1,steplength:1,stepv:1,still:14,store:[1,4,9,18],store_error:4,str:[2,9],string:[1,2,3,4,5,7,8,9],structur:5,style:[3,5],sub_filt:2,subclass:2,subdata:14,subdata_rec:14,submodul:[0,17],subplot:[7,9,13,14],subplots_adjust:[9,14],subqueri:[2,7],subsequ:[1,2,5,7,9,11],subset:2,suitabl:[3,9],sum:7,summari:[12,13,14],superposit:5,suppli:7,support:5,suppos:19,surfac:7,swap:9,symmetri:7,syscal:[0,2,5,15,16],syscal_save_to_config_txt:4,system:[2,5,9,16,21],tab:13,take:[1,2,7,9],taken:9,target:[8,18],tdip:[0,11],teardown:3,temp_1:5,temp_2:5,temperatur:5,tempfil:2,temporarydirectori:2,test2:9,test:[0,2,3,7,9,16,21],test_convert:0,test_fix_sign_with_k:9,test_from_cmag_cpha:3,test_from_cre_cim:3,test_from_cre_cmim:3,test_from_rmag_rpha:3,test_from_rre_rim:3,test_from_rre_rmim:3,test_get_unique_identifi:7,test_input_styl:3,test_norrec_assignments1:9,test_to_cmag_cpha:3,test_to_cre_cim:3,test_to_cre_mim:3,test_to_rre_rim:3,testclass_input_styl:3,testclass_test_convert:3,text:[2,5,13,16,20],than:[2,5,7],thei:[8,20],them:[2,6],therefor:7,thi:[1,2,3,5,6,7,9,11,13,14,18,19,20],think:5,third:5,those:[2,3,5,9],thousand:18,three:[2,3,5,20],threshold:7,through:3,thu:[1,3,9],ticker:9,tight_layout:[7,13],time:[2,5,7,11,13,14,16,18,21],time_seri:0,timestep:[2,5,7],tip:19,titl:3,to_ccomplex:3,to_cmag_cpha:3,to_complex:3,to_cr:2,to_cre_cim:3,to_cre_cmim:3,to_ip:2,to_lnrmag_rpha:3,to_log10rmag_rpha:3,to_one_lin:3,to_pg_schem:1,to_rcomplex:3,to_rmag_rpha:3,to_rre_rim:3,to_rre_rmim:3,todo:[2,5,14,18],tomograph:5,tomographi:[2,18],tool:7,top:14,topographi:[2,5,9,20],total:[1,13,14],touch:21,toward:[5,16],track:[16,21],transfer:5,transform:[5,9],treat:[2,5],triangl:7,true_conduct:9,tupl:7,two:[3,5,9],txt:[10,22],type:[2,3,7,9,12,16,18],ubonn:22,under:[9,16,21],unifi:[2,4,5,16,18,21],uniqu:1,unit:0,unix:9,unnecessari:3,untest:16,unzip:9,update_tick:9,upon:20,upper:7,ups:9,usag:20,use:[1,2,3,4,5,9,18,19,20],use_latex:9,used:[1,2,3,4,5,7,9,16,18,21],useful:18,uses:18,using:[2,3,5,9,13,21],usual:[1,2,3,5,6,7,18],util:[0,2,8,10,11,13,14],valu:[1,2,3,5,7,9,12,14,18],van:2,variabl:[9,18,20],varianc:5,variat:20,variou:[3,7,9,18,19],vaue:7,verbos:[2,5,8],version:[2,6,7,22],vertic:9,vest:2,via:5,vienna:16,virtualenv:19,visual:[7,16,21],vmax:9,vmin:9,vmn:[9,13],volt:1,voltag:[1,5,7],voorhi:2,vskip:1,vstack:1,vstep:1,wagner:16,wai:[2,6,9,21],want:[2,6],warn:[9,11],weigand:[5,9,16],welcom:16,well:[1,2,8],wenner:[1,7,9],were:[2,5,9],what:[2,9],whatev:2,when:[2,8],where:[1,2,5,19],which:[1,3,4,5,7,9,16,21],whole:9,window:8,work:[5,6,16,21],workshop:16,wrapper:2,write:[1,4,9],write_config:1,write_crmod_config:1,write_crmod_fil:5,write_crmod_volt:1,write_files_to_directori:[4,13],written:9,wspace:14,xlabel:7,xmax:3,xmin:3,xyz:1,yg1:5,yg2:5,ylabel:7,you:[2,7,9,11,19,21],your:21,zenodo:16,zero:1,zg3:5,zip:[13,14,15],zm_ab:5,zm_absstd:5,zm_m:5,zm_mab:5,zm_mim:5,zm_mphi:5,zm_mre:5,zm_phi:5,zm_phistd:5,zt3:5,zt_1:5,zt_2:5,zt_3:5},titles:["reda package","reda.configs package","reda.containers package","reda.eis package","reda.exporters package","reda.importers package","reda.main package","reda.plotters package","reda.testing package","reda.utils package","Importing Syscal ERT data","Importing Syscal IP data","SIP-04 Import","Importing EIT40/EIT160 data","Importing Radic SIP256c data","Examples","About","API documentation","Data Containers","Debugging reda","Data Importers","Welcome to the REDA documentation!","Installation","Test data"],titleterms:{"export":[4,16],"import":[5,10,11,12,13,14,15,16,20],about:16,api:17,bert:[4,5],citat:16,column:18,config:1,configmanag:1,contain:[2,8,15,18],contribut:16,convert:3,crtomo:4,data:[9,10,11,13,14,15,18,20,23],debug:19,develop:20,document:[17,21],eis:3,eit160:[5,13],eit40:[5,13],eit_fzj:5,eit_fzj_util:9,eit_version_2010:5,eit_version_2013:5,eit_version_2017:5,eit_version_2018a:5,elev:19,ert:[2,10,15,18],exampl:[9,15],except:19,filter_config_typ:9,fix_sign_with_k:9,geom_fac_crtomo:9,geometric_factor:9,geotom:5,helper_funct:9,histogram:7,imped:15,instal:22,intern:20,introduct:20,iris_syscal_pro:5,logger:6,main:6,modul:[1,2,3,4,5,6,7,8,9],mpl:9,norrec:9,packag:[0,1,2,3,4,5,6,7,8,9],plot:3,plots2d:7,plotter:7,pseudo_posit:9,pseudoplot:7,radic:14,radic_sip256c:5,reda:[0,1,2,3,4,5,6,7,8,9,16,19,21],requir:18,res2dinv:5,seit:[2,15,18],sip04:[5,15],sip256c:14,sip:[2,12,18],spectral:15,statu:16,structur:20,submodul:[1,2,3,4,5,6,7,8,9],subpackag:0,syscal:[4,10,11],tdip:[2,18],test:[8,23],test_convert:3,time_seri:7,unit:[3,6],usag:15,util:9,warn:19,welcom:21}})