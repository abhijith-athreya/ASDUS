
 //CTA's//
 var lastviewed;
 var lastpopup;

 var clickStandard; 
 var clickFood; 
 var clickNature;
 var clickNight;
 var clickPassion;
 var clickRoots;
 var clickSnow;
 var clickUrban; 

 var popupFood; 
 var popupNature;
 var popupNight;
 var popupPassion;
 var popupRoots;
 var popupSnow;
 var popupUrban; 

 var popupVideoFood; 
 var popupVideoNature;
 var popupVideoNight;
 var popupVideoPassion;
 var popupVideoRoots;
 var popupVideoSnow;
 var popupVideoUrban; 

 var videoFood; 
 var videoNature;
 var videoNight;
 var videoPassion;
 var videoRoots;
 var videoSnow;
 var videoUrban; 

 if(countryCode == 'AU'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058641&cs=b45a053f41&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058705&cs=929c12c168&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058706&cs=1301ed7c43&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058751&cs=b461b43d0d&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058710&cs=c32d13312d&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058703&cs=ecdf96c9e5&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058704&cs=9c04066735&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058753&cs=9748047e0b&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539061867&cs=a115974151&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062754&cs=523e102848&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062755&cs=c998e6139f&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539061867&cs=a115974151&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062751&cs=7bbbb1c2b5&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062752&cs=72191cd81b&cb="+Math.floor(Math.random()*10000000000);
    popupUrban =  "//wetransfer-d.openx.net/w/1.0/ai?auid=539062757&cs=cda1c60bdb&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062595&cs=d08eb566e8&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062596&cs=8151dd1648&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062596&cs=8151dd1648&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539061866&cs=9b0ef0b515&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062593&cs=91b50ef560&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062594&cs=297a8814fa&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062598&cs=3af46ad397&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539061865&cs=4769c191b3&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062485&cs=c23bf42f32&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062486&cs=7d7cbffcdb&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062487&cs=cb9774ce47&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062488&cs=8b3d2d1489&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062489&cs=358fc99ee2&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062490&cs=69cd2569d6&cb="+Math.floor(Math.random()*10000000000);

}
if(countryCode == 'BR'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058659&cs=66f07f1d4d&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058773&cs=3a45c2edc0&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058772&cs=d1176e01c3&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058771&cs=67ab6dba5a&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058776&cs=5f5287cdc3&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058775&cs=e57a025d48&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058774&cs=ce416618f1&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058769&cs=f8e1956685&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062598&cs=3af46ad397&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062763&cs=4c622d482b&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062764&cs=178d0476bc&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062758&cs=ef1a0ffa4b&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062759&cs=69a8cb1791&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062760&cs=98a4a9669e&cb="+Math.floor(Math.random()*10000000000);
    popupUrban =  "//wetransfer-d.openx.net/w/1.0/ai?auid=539062765&cs=4750d98e14&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062607&cs=1bba2d95ee&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062608&cs=5d7f10a730&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062609&cs=65999d5772&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062603&cs=b6f225b170&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062604&cs=3a5dd0c349&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062605&cs=cfb2fa15b0&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062610&cs=6972fbacef&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062491&cs=cf0854698b&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062492&cs=b7c9aa6ce6&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062493&cs=c9c335f8b0&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062494&cs=3805ec8b95&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062495&cs=7fee49d6a3&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062496&cs=e8487e2009&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062502&cs=5279470865&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'CL'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058658&cs=933ab77692&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058765&cs=66936b10ab&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058764&cs=cfc6e9c49b&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058812&cs=b351b87248&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058768&cs=6a661ae101&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058767&cs=2c981a9b75&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058766&cs=0bd94945c8&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058811&cs=e30ae5760b&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062771&cs=10f2a11789&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062772&cs=d10658f796&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062773&cs=dd173fc783&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062767&cs=d7f41d9aee&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062768&cs=dabed48ebf&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062770&cs=411a591b1e&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062774&cs=a83aee0ac1&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062615&cs=cb4b4e1a61&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062616&cs=0ab35fea47&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062617&cs=fbf73f406a&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062611&cs=9c866ebffe&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062613&cs=9a9ac0f2ca&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062614&cs=1c11636d66&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062618&cs=a12a4c1c30&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062513&cs=6bb618c271&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062514&cs=8b9935bc9a&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062515&cs=1fe51476ef&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062516&cs=e55536c1f0&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062517&cs=287ffcbcbc&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062519&cs=6f9d13e5f6&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062520&cs=d147706930&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'CO'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058655&cs=c5a563c755&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058858&cs=cdc3681e28&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058857&cs=4edded2ee7&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058856&cs=e013c0f41e&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058861&cs=6ea736b095&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058860&cs=73f94ddbc8&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058859&cs=2020d75522&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058855&cs=9c584561e8&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062778&cs=d4d505c3d8&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062779&cs=62d9e49081&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062780&cs=fd4a9b4107&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062775&cs=f5cc8fa02c&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062776&cs=32ae683024&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062777&cs=928e1ecc22&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062781&cs=72522af842&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062622&cs=9ab14584ec&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062623&cs=e1e3c93776&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062624&cs=ce54c3ffd1&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062619&cs=c891c19861&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062620&cs=504174a1b9&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062621&cs=65c348496f&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062625&cs=1fa66cea3c&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062521&cs=1f87eee55a&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062522&cs=d463491627&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062523&cs=0505ea8d9d&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062524&cs=a7a3b81e05&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062525&cs=ccb2c4c85b&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062526&cs=6e431d607f&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062527&cs=d8e223e073&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'DE'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058654&cs=40b4c552e1&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058851&cs=98d0ed26c7&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058850&cs=d6546c9984&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058808&cs=a7b424e046&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058854&cs=87b98cada6&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058853&cs=30bfb7f6d1&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058852&cs=738fe5d7b2&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058807&cs=aadd2abb7b&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062785&cs=36a6c19e7d&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062786&cs=f780341993&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062787&cs=19451b19fe&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062782&cs=a89d58af93&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062783&cs=6a4e861dec&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062784&cs=7c65360081&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062788&cs=3c59fbe191&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062629&cs=f5b0f68041&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062630&cs=5cf01eb1e5&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062631&cs=75e94dc6c6&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062626&cs=97dbe59042&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062627&cs=57caaa40f7&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062628&cs=26310bd44a&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062632&cs=f9481abf08&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062528&cs=9e677dc66e&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062529&cs=524ed7c9e1&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062531&cs=8e089f6df4&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062532&cs=b45ada21d0&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062533&cs=92a1e8121e&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062534&cs=aa956a6a2d&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062535&cs=4aff1be2c5&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'ES'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058653&cs=574f048551&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058883&cs=c295aed6bb&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058882&cs=eabfccb165&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058880&cs=744b2b312c&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058891&cs=469be5baeb&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058890&cs=250359ed3f&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058886&cs=11ce607747&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058884&cs=22548cd1cd&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062792&cs=103671853f&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062793&cs=af2d9554fc&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062794&cs=c5d384b437&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062789&cs=3e3373610f&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062790&cs=0bcb48bff2&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062791&cs=8f37d8ef7e&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062795&cs=932a5569ef&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062636&cs=7a0e76ec7b&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062637&cs=b7711da385&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062638&cs=1ed1590d23&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062633&cs=c460571fd2&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062634&cs=db5d1f4f7d&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062635&cs=4af6ac7caf&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062639&cs=97cbe2a354&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062536&cs=64e055b2d1&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062537&cs=56093ebee9&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062538&cs=c8cb6fa8d2&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062539&cs=2246d5357a&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062540&cs=425a98be27&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062541&cs=091d4cd53d&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062542&cs=5ecd301d9f&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'FR'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058652&cs=8310770232&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058899&cs=a626d3b580&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058902&cs=d20912d843&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058903&cs=7b33722d3e&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058895&cs=7fd58848eb&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058897&cs=8bb46105e5&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058898&cs=f6ba84f600&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058904&cs=56e9f346f1&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062799&cs=501dbcc56a&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062800&cs=58632c2844&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062801&cs=b1fcd2bf8b&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062796&cs=7095bab6a7&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062797&cs=9384c0c3b3&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062798&cs=c147b9013e&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062802&cs=942d7ad3ad&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062643&cs=cb800b559d&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062644&cs=dc9dcd7133&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062644&cs=dc9dcd7133&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062640&cs=4636e44d12&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062641&cs=02ab3b7cbe&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062642&cs=2b6486bd4b&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062646&cs=61ad6fea91&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062543&cs=2cb59554b9&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062544&cs=1c06e5df6d&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062545&cs=efb7ae13ba&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062546&cs=fc266a4d1a&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062547&cs=95108f379d&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062548&cs=884c03c3b5&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062549&cs=68b31a6aa3&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'IT'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058651&cs=1f93684be4&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058871&cs=7b11f20966&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058873&cs=94b565a6e8&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058875&cs=b94317adb9&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058805&cs=b7e43f708b&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058881&cs=6dc9789483&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058885&cs=8e3ac32140&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058876&cs=e93f747ce0&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062806&cs=d3e9ef19fb&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062807&cs=c56f9954bf&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062808&cs=c418a87843&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062803&cs=5cce71ba50&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062804&cs=9d1d7bc2ab&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062805&cs=910e411bc4&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062809&cs=6ad9ea591d&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062650&cs=136a83aada&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062651&cs=ab1198678f&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062652&cs=4deb7a6685&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062647&cs=a4b6e32575&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062648&cs=fa9301b56a&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062649&cs=1be6654d9d&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062653&cs=80b516983d&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062550&cs=ba090030b0&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062551&cs=3066d3b7c1&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062552&cs=558d467cf6&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062553&cs=306c1afa75&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062554&cs=9f21398434&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062555&cs=ee6e89aa15&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062556&cs=75f9f86e30&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'MX'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058650&cs=c580bec836&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058749&cs=8aaa0842df&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058801&cs=b72380d532&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058802&cs=8908b359cb&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058761&cs=2fe811c016&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058707&cs=a3f7b95abc&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058763&cs=52a241d42f&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058803&cs=3e1d004c01&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062813&cs=442ed0ec92&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062814&cs=bf848f2072&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062815&cs=0b559ea812&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062810&cs=6006f754ff&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062811&cs=c6a532d615&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062812&cs=df09c7c64c&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062816&cs=2c333b12f7&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062657&cs=d9b51465ea&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062658&cs=e9adb065e8&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062659&cs=3fa9fb3420&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062654&cs=9ca7a68e25&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062655&cs=98a9a9ae09&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062656&cs=4e329966e8&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062660&cs=868c78e129&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062557&cs=a447629851&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062558&cs=36a293e694&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062559&cs=798c4d9302&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062560&cs=89cc2558b9&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062561&cs=f98eead941&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062562&cs=9ff81ccf37&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062563&cs=9fef99c480&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'NL'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058648&cs=60ffcad941&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058757&cs=60e8d312cf&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058758&cs=8d204436d0&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058759&cs=f074a1bccd&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058754&cs=ee56c2aa9f&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058755&cs=74c680b103&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058756&cs=1fe83689ca&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058760&cs=5f3dc598fa&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062821&cs=ba1c724997&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062822&cs=7b62b5dc22&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062823&cs=678fc1d1b0&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062818&cs=d2e3684307&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062819&cs=b4132ece47&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062820&cs=603fa82fa3&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062824&cs=bd5efb5427&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062664&cs=a216d0a99e&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062665&cs=8223b564c1&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062666&cs=45779d23d6&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062661&cs=57e4b7b121&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062662&cs=4300641cc3&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062663&cs=a4de9f4b9d&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062667&cs=3a484dd3ba&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062564&cs=6fc5d71bc4&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062565&cs=5165c415e1&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062566&cs=584dadb4a3&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062567&cs=c14f7d2588&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062568&cs=e5c0486fbf&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062569&cs=ac0fb26cf2&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062570&cs=8a4a24a554&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'PE'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058678&cs=4c76b0eebc&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058746&cs=d7f0052bbc&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058747&cs=edf3bc86fa&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058748&cs=8dc1577e40&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058743&cs=846fd21ddd&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058744&cs=798708db45&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058745&cs=14ad78043b&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058750&cs=36e159f683&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062835&cs=766a33b8e7&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062836&cs=efb342b4d6&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062837&cs=a3a94aa26c&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062828&cs=ddd4d6c1a1&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062830&cs=81136b4336&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062834&cs=c5af48c7cd&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062838&cs=5830299183&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062671&cs=0a45d48348&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062672&cs=458c1a3973&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062673&cs=cbcf079986&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062673&cs=cbcf079986&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062676&cs=77aafa4334&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062677&cs=e538daa982&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062681&cs=18287d2a49&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062571&cs=1702710b3f&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062572&cs=7ccc6d224f&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062573&cs=325436e90d&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062574&cs=059c26a5be&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062575&cs=3ced668edf&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062576&cs=2243a30a68&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062577&cs=d1a4d824b5&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'UK'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058677&cs=df5b95f4c9&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058735&cs=642e24b41d&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058737&cs=05610b8b05&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058738&cs=cbdbd80642&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058732&cs=53fbde4ca8&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058733&cs=74df84752c&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058734&cs=879f5aca3e&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058739&cs=9c09d307d7&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062857&cs=49a16cfc01&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062858&cs=5a69a143bb&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062859&cs=a93fdefef9&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062854&cs=845e9506eb&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062855&cs=1ceb74b5a6&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062856&cs=80e43ca183&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062860&cs=1be317aae5&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062678&cs=2f7cfc1d58&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062679&cs=cdf9069ce7&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062680&cs=27436b86dd&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062675&cs=f61fade538&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062675&cs=f61fade538&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062677&cs=a2fd659c7c&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062681&cs=cfc2ad231f&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062578&cs=309886bfba&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062579&cs=1edeb9f389&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062580&cs=008587d4fd&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062581&cs=4908792da9&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062582&cs=a27a794d40&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062583&cs=08251e1f8a&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062584&cs=1c8f1f4016&cb="+Math.floor(Math.random()*10000000000);
}
if(countryCode == 'US'){
    clickStandard = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058676&cs=67338c64df&cb="+Math.floor(Math.random()*10000000000);
    clickFood = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058722&cs=da7e759f8f&cb="+Math.floor(Math.random()*10000000000);
    clickNature = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058701&cs=ed6ee614ab&cb="+Math.floor(Math.random()*10000000000);
    clickNight = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058723&cs=0dd0cdcbb7&cb="+Math.floor(Math.random()*10000000000);
    clickPassion = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058699&cs=a4886c30b9&cb="+Math.floor(Math.random()*10000000000);
    clickRoots = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058719&cs=73e48ee8ae&cb="+Math.floor(Math.random()*10000000000);
    clickSnow = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058708&cs=079ade1b69&cb="+Math.floor(Math.random()*10000000000);
    clickUrban = "http://wetransfer-d.openx.net/w/1.0/ai?auid=539058724&cs=3f9e389a70&cb="+Math.floor(Math.random()*10000000000);

    popupFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062879&cs=9c83c45cbe&cb="+Math.floor(Math.random()*10000000000);
    popupNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062880&cs=0218b0de55&cb="+Math.floor(Math.random()*10000000000);
    popupNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062894&cs=9a159bac1b&cb="+Math.floor(Math.random()*10000000000);
    popupPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062876&cs=ed720d29d0&cb="+Math.floor(Math.random()*10000000000);
    popupRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062877&cs=f56659fbe8&cb="+Math.floor(Math.random()*10000000000);
    popupSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062878&cs=76d21e0213&cb="+Math.floor(Math.random()*10000000000);
    popupUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062896&cs=ad19950be2&cb="+Math.floor(Math.random()*10000000000);

    popupVideoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062685&cs=9b9f4efa84&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062686&cs=198a3f4450&cb="+Math.floor(Math.random()*10000000000);
    popupVideoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062687&cs=c7f4154367&cb="+Math.floor(Math.random()*10000000000);
    popupVideoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062682&cs=4ea01df925&cb="+Math.floor(Math.random()*10000000000);
    popupVideoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062683&cs=7f66d8a2a8&cb="+Math.floor(Math.random()*10000000000);
    popupVideoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062684&cs=910f753a0e&cb="+Math.floor(Math.random()*10000000000);
    popupVideoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062689&cs=74f9110bd6&cb="+Math.floor(Math.random()*10000000000);

    videoFood = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062586&cs=e2950adc86&cb="+Math.floor(Math.random()*10000000000);
    videoNature = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062587&cs=60dc0c33b4&cb="+Math.floor(Math.random()*10000000000);
    videoNight = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062588&cs=5e75f8f414&cb="+Math.floor(Math.random()*10000000000);
    videoPassion = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062589&cs=e92aedc144&cb="+Math.floor(Math.random()*10000000000);
    videoRoots = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062590&cs=f3b85c8618&cb="+Math.floor(Math.random()*10000000000);
    videoSnow = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062591&cs=4b149f202e&cb="+Math.floor(Math.random()*10000000000);
    videoUrban = "//wetransfer-d.openx.net/w/1.0/ai?auid=539062592&cs=cc702af392&cb="+Math.floor(Math.random()*10000000000);
}

var onClickStandardCTA =  function onClickStandardCTA() {
    if(lastpopup == 'passion'){window.open(clickPassion);}
    else if(lastpopup == 'roots'){window.open(clickRoots);}
    else if(lastpopup == 'food'){window.open(clickFood);}
    else if(lastpopup == 'night'){window.open(clickNight);}
    else if(lastpopup == 'urban'){window.open(clickUrban);}
    else if(lastpopup == 'nature'){window.open(clickNature);}
    else if(lastpopup == 'snow'){window.open(clickSnow);}
    else{
        if(lastviewed == 'v1_passion'){window.open(clickPassion);}
        else if(lastviewed == 'v2_nature'){window.open(clickNature);}
        else if(lastviewed == 'v3_snow'){window.open(clickSnow);}
        else if(lastviewed == 'v4_food'){window.open(clickFood);}
        else if(lastviewed == 'v5_roots'){window.open(clickRoots);}
        else if(lastviewed == 'v7_night'){window.open(clickNight);}
        else if(lastviewed == 'v6_urban'){window.open(clickUrban);}
        else{window.open(clickStandard);}
    }
}

function callfunction(popup){
    lastpopup = popup;
    var popupSource = new Image();

    if(popup == 'passion'){popupSource.src = popupPassion};
    if(popup == 'roots'){popupSource.src = popupRoots};
    if(popup == 'food'){popupSource.src = popupFood};
    if(popup == 'night'){popupSource.src = popupNight};
    if(popup == 'urban'){popupSource.src = popupUrban};
    if(popup == 'nature'){popupSource.src = popupNature};
    if(popup == 'snow'){popupSource.src = popupSnow};
}

function callfunctionPopupVideo(what){
    lastviewed = what;
    var popupVideoSource = new Image();

    if(what == 'v1_passion'){popupVideoSource.src = popupVideoPassion};
    if(what == 'v2_nature'){popupVideoSource.src = popupVideoNature};
    if(what == 'v3_snow'){popupVideoSource.src = popupVideoSnow};
    if(what == 'v4_food'){popupVideoSource.src = popupVideoFood};
    if(what == 'v5_roots'){popupVideoSource.src = popupVideoRoots};
    if(what == 'v7_night'){popupVideoSource.src = popupVideoNight};
    if(what == 'v6_urban'){popupVideoSource.src = popupVideoUrban};
}

function callfunctionVideo(what){
    lastviewed = what;
    var videoSource = new Image();

    if(what == 'v1_passion'){videoSource.src = videoPassion};
    if(what == 'v2_nature'){videoSource.src = videoNature};
    if(what == 'v3_snow'){videoSource.src = videoSnow};
    if(what == 'v4_food'){videoSource.src = videoFood};
    if(what == 'v5_roots'){videoSource.src = videoRoots};
    if(what == 'v7_night'){videoSource.src = videoNight};
    if(what == 'v6_urban'){videoSource.src = videoUrban};
}