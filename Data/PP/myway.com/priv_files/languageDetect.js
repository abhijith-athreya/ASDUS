function setUpLanguageBox(){

	var cobrandParam = getParameterByName('cobrand');

	var langBoxStr =	'<form id="menuForm" name="menuForm" >'+
		'<select class="langugebox" name="languageMenu" id="languageMenu" onchange="selectLanguage()" >'+
		'<option >Select language...</option>'+

		'<option value="http://eula.mindspark.com/privacypolicy/index.html?cobrand='+cobrandParam+'">English</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/fr/index.html?cobrand='+cobrandParam+'">Fran\u00E7ais</option> '+
		'<option value="http://eula.mindspark.com/privacypolicy/de/index.html?cobrand='+cobrandParam+'">Deutsch</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/sp/index.html?cobrand='+cobrandParam+'">Espa\u00F1ol</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/it/index.html?cobrand='+cobrandParam+'">Italiano</option> '+
		'<option value="http://eula.mindspark.com/privacypolicy/pt/index.html?cobrand='+cobrandParam+'">Portugu\u00EAs</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/cn/index.html?cobrand='+cobrandParam+'">\u4E2D\u6587</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/nl/index.html?cobrand='+cobrandParam+'">Nederlands</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/ja/index.html?cobrand='+cobrandParam+'">\u65E5\u672C\u8A9E</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/ko/index.html?cobrand='+cobrandParam+'">\uD55C\uAD6D\uC758</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/ar/index.html?cobrand='+cobrandParam+'">\u0627\u0644\u0639\u0631\u0628\u064A\u0629</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/ru/index.html?cobrand='+cobrandParam+'">P\u0443\u0441\u0441\u043A\u0438\u0439</option>'+
		'<option value="http://eula.mindspark.com/privacypolicy/vn/index.html?cobrand='+cobrandParam+'">tiếng Việt</option>'+


		'</select>'+
		'</form>';


	//alert("#menu div ="+$("#menu") )

	$("#menu").html(langBoxStr) ;





}

function selectLanguage() {
	var url = document.menuForm.languageMenu.options[document.menuForm.languageMenu.selectedIndex].value;
	window.open(url,"_self" );

}


var allProductsStr = "ALL";

//cobrands: "ButterflyField AUU","Elite Unzip BDG","Marine Aquarium Lite 0D", "MindDabble YX", "My Own Superhero Z9", "MyScrapNook 9N", "Premier Download Manager BE4", "Robot Boom 0E", "Safe PC Repair AW7", "SoundDabble GP", "Verified VPN BA4", "EasyPDFcombine BSB"
//"UnzipApp BXK", Dezipper BXL, GoUnzip BYI, DownloadManagerNow BYJ, DownloadManagerTool BYO, MergeDocsOnline BYS, EasyDocMerge BYU, Fun Custom Creations BYX
var cobrands = ["AUU","BDG","0D", "YX", "Z9", "9N", "BE4", "0E", "AW7", "GP", "BA4", "BSB", "BXK", "BXL", "BYI", "BYJ", "BYO", "BYS", "BYU", "BYX", "BPT"];

/*referrer - cobrand mapping*/
var referrers = ["www.butterflyfield.com", "www.eliteunzip.com", "www.marineaquariumfree.com", "www.minddabble.com", "www.myownsuperhero.com", "www.myscrapnook.com", "www.premierdownloadmanager.com", "www.robotboom.com", "www.safepcrepair.com", "www.sounddabble.com", "www.verifiedvpn.com", "free.easypdfcombine.com", "free.unzipapp.com", "dezipper.com", "free.gounzip.com", "free.downloadmanagernow.com", "free.downloadmanagertool.com", "free.mergedocsonline.com", "free.easydocmerge.com", "free.funcustomcreations.com", "www.dailyimageboard.com"];

function getParameterByName(name) {

	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	//results = regex.exec("http://eula.mindspark.com/ask/ex/index.html?cobrand=aaa");
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function EULA_redirect(){

	var cobrandParam = getParameterByName('cobrand');

	if (cobrandParam=='') {
		//if no cobrand is detected, first check for the referrer. If cannot be matched, show all
		//$( "*" ).show();

		var referrerParam = document.referrer ;

		if (referrerParam=='')
			$( "*" ).show();

		else{
			var match = false;
			for (var i=0; i<referrers.length; i++){
				if(referrerParam.indexOf(referrers[i]) > -1 && referrerParam.indexOf(referrers[i]) < 20) {
					var divStr = "."+cobrands[i];
					$(divStr).show();
					match = true;
				}
			}
			if (!match) {
				$( "*" ).show();
			}


		}

	}
	else {

		if(cobrandParam==allProductsStr)
			$( "*" ).show();

		for (var i=0; i<cobrands.length; i++){
			if( cobrandParam==cobrands[i]){
				var divStr = "."+cobrands[i];
				$(divStr).show();

			}
		}
	}
}

function doSetUp() {
	setUpLanguageBox();
	EULA_redirect();
}

$( document ).ready(function() {
	doSetUp();
});