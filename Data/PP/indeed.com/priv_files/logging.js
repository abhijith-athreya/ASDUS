function getOptimizelyGroups() {
    if (window['optimizely'] && window['optimizely']['data']['state']['variationNamesMap']) {
        var optimizelyExperimentIds = [];
        var optimizelyVariationNames = [];
        for (k in window['optimizely']['data']['state']['variationNamesMap']) {
            optimizelyExperimentIds.push(k);
            optimizelyVariationNames.push(window['optimizely']['data']['state']['variationNamesMap'][k]);
        }
        return {
            "experimentIds": optimizelyExperimentIds.join(','),
            "variationNames": optimizelyVariationNames.join(',')
        };
    } else {
        return null;
    }
}

function logLoad(baseUrl, tk) {
    var optimizelyGroups = getOptimizelyGroups();
    if (tk && document.images) {
        var logUrl = baseUrl + '?a=thJsv&tk=' + tk;
        if (optimizelyGroups) {
            logUrl += '&optExpIds=' + encodeURIComponent(optimizelyGroups['experimentIds']);
            logUrl += '&optVarNames=' + encodeURIComponent(optimizelyGroups['variationNames']);
        }
        (new Image()).src = logUrl;
    }
}

window.onload = function(){
    logLoad(window.rpcLogUrl, window.tk);
}