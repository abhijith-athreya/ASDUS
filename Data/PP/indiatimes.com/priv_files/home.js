var ga_run_flag = false;

if ( typeof(bn_page_label) != "undefined" ) {    

    var ga_run_flag = true;

    var _as_inter = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_OOP_Inter';
    var _as_ppd = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_PPD';

    var _as_big1 = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_Big1';
    var _as_big2 = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_Big2';
    var _as_big3 = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_Big3';

    var _as_innov = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_OOP_Innov';
    var _as_pop = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_OOP_Pop';
    var _as_shosh = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_OOP_Shosh';

    var _as_bad = '/7176/Indiatimes/Indiatimes_Home/Indiatimes_Home_Home/IT_HP_Bad';
}

if ( ga_run_flag == true ) {

    $(function () {
        googletag.cmd.push(function () {           

            showHeaderCode();
            
            showPPD('dfp_ppd');

            if ( _as_bad != undefined && $('#ad_bad').length ) {
                showBad('ad_bad');    
            }

            if ( $('#big1').length ) {
                showBig1('big1');
            }

            if ( $('#big2').length ) {
                showBig2('big2');
            }

            if ( $('#big3').length ) {
                showBig3('big3');
            }

            showFooterCode();
        });

    });
}