var cx_targetElement = 'cXTargetEl_' + Math.random();
var cx_templateElement = 'cXTemplateEl_' + Math.random();

document.write('' +
    '<div id="' + cx_targetElement + '" style="margin: 0; padding: 0; border: 0;"></div>\n' +
    '<div id="' + cx_templateElement + '" style="display: none;"><!--\%\n' +
    '    var adSpace = data.searchResult.spaces[0];\n' +
    '    for (var i = 0; adSpace && i < adSpace.ads.length; i++) {\n' +
    '        var ad = adSpace.ads[i];\n' +
    '        if (ad.creative.type.indexOf("ThirdPartyCreativeFeature") > -1) {\n' +
    '            document.write(ad.creative.thirdPartyAdCode);\n' +
    '        } else {\n' +
    '            cX.defaultAdRenderer(adSpace, ad);\n' +
    '        }\n' +
    '    }\%-->\n' +
    '</div>\n');

cX.insertAdSpace({
    templateElementId: cx_templateElement,
    targetElementId: cx_targetElement,
    synchronous: true
});
