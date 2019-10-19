(function(){var f="analytics-page-view-data";var c=require("ac-analytics");var a=document.addEventListener?"addEventListener":"attachEvent";
var e=document.addEventListener?"":"on";var b={};var d;document[a](e+"readystatechange",function(){if(document.readyState==="complete"){d=document.getElementById(f);
if(d){try{d=d.innerHTML;d=JSON.parse(d);b.page={data:d}}catch(g){}}c.createBasicObserverSuite(b)
}})}());