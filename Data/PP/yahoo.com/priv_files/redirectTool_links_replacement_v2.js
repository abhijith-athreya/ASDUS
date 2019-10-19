(function () {
/* Grab Dom links*/
var mainContentDiv = document.getElementById('outer-wrapper');
if(typeof(mainContentDiv)=='object'){
  var pageLinks = mainContentDiv.getElementsByTagName('a');
}
 
/* Calls the verifying function and updates DOM. */
var getVal = function(key){
 var mappingKeys = Object.keys(redirectToolMappingsArr);
 if((mappingKeys) && (mappingKeys instanceof Array)){ 
  for(var mapKey in mappingKeys){
   if(mappingKeys[mapKey] == key){
    return redirectToolMappingsArr[mappingKeys[mapKey]];
   }
  }  
 }
}
 
if((typeof(redirectToolMappingsArr)=='object') && (Object.keys(redirectToolMappingsArr).length>0)){
 if((pageLinks)&&(typeof(pageLinks)=='object')){
   for(var policyLink in pageLinks) {
   var returnedLink = getVal(pageLinks[policyLink].href);
    if(returnedLink){
     var updatedVal = returnedLink;
     pageLinks[policyLink].href = returnedLink;
    }
   }
 }
}
})();