MpElDs={'hola.metropcs.com':'es','www.metropcs.com':'en','metropcs.com':'en'};
if(!new RegExp('MP_LANG='+MpElDs[location.host]).test(document.cookie)){
    MpElD='//hola.metropcs.com';
	MpL=navigator.browserLanguage;
	if(!MpL)MpL=navigator.language;
    document.write(decodeURIComponent("%3Cscript src='")+MpElD+"/mpel.js?href="+encodeURIComponent(location.href)+"&ref="+encodeURIComponent(document.referrer)+"&lang="+MpL+"' type='text/javascript'"+decodeURIComponent("%3E%3C/script%3E"));
}