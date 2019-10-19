/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(a)
}else{if(typeof exports==="object"){module.exports=a()
}else{var c=window.Cookies;
var b=window.Cookies=a();
b.noConflict=function(){window.Cookies=c;
return b
}
}}}(function(){function b(){var f=0;
var c={};
for(;
f<arguments.length;
f++){var d=arguments[f];
for(var e in d){c[e]=d[e]
}}return c
}function a(d){function c(o,n,k){var r;
if(arguments.length>1){k=b({path:"/"},c.defaults,k);
if(typeof k.expires==="number"){var h=new Date();
h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);
k.expires=h
}try{r=JSON.stringify(n);
if(/^[\{\[]/.test(r)){n=r
}}catch(m){}if(!d.write){n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)
}else{n=d.write(n,o)
}o=encodeURIComponent(String(o));
o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);
o=o.replace(/[\(\)]/g,escape);
return(document.cookie=[o,"=",n,k.expires&&"; expires="+k.expires.toUTCString(),k.path&&"; path="+k.path,k.domain&&"; domain="+k.domain,k.secure?"; secure":""].join(""))
}if(!o){r={}
}var q=document.cookie?document.cookie.split("; "):[];
var p=/(%[0-9A-Z]{2})+/g;
var l=0;
for(;
l<q.length;
l++){var j=q[l].split("=");
var f=j[0].replace(p,decodeURIComponent);
var g=j.slice(1).join("=");
if(g.charAt(0)==='"'){g=g.slice(1,-1)
}try{g=d.read?d.read(g,f):d(g,f)||g.replace(p,decodeURIComponent);
if(this.json){try{g=JSON.parse(g)
}catch(m){}}if(o===f){r=g;
break
}if(!o){r[f]=g
}}catch(m){}}return r
}c.get=c.set=c;
c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))
};
c.defaults={};
c.remove=function(f,e){c(f,"",b(e,{expires:-1}))
};
c.withConverter=a;
return c
}return a(function(){})
}));
(function(f){var g="lang-preference";
var n="eu_cn";
var d=365;
var j="1";
var i=/[a-z]{2,3}/g;
var c="https://support.twitter.com/articles/20170514";
var q="https://support.twitter.com/articles/20174632";
var o='<div class="comp-wrapper eu-cookie-alert active"><div class="comp-container"><div class="status-icon"><i class="icon-navigation_close_mobile" aria-hidden="true"></i></div><div class="message">###MESSAGE###</div></div></div>';
var m=["AT","BE","BG","CY","CZ","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","UK","IS","NO","LI","CH"];
var b={ar:'باستخدام خدمات تويتر فإنك توافق على<x id="START_LINK"/>إستخدامنا للكوكيز<x id="END_LINK"/> و <x id="START_LINK"/>نقل البيانات <x id="END_LINK"/> خارج الإتحاد الأوروبي. نحن وشركاؤنا نعمل على الصعيد العالمي ونستخدم الكوكيز، بما في ذلك التحليلات، التخصيص، والإعلانات.',da:'Ved at bruge Twitters tjenester accepterer du vores <x id="START_LINK"/>brug af cookies<x id="END_LINK"/> og <x id="START_LINK"/>dataoverførsel<x id="END_LINK"/> uden for EU. Vi og vores partnere opererer globalt og bruger cookies, herunder til statistik, personliggørelse og annoncer.',de:'Durch die Nutzung der Dienste von Twitter erklärst Du Dich mit unserer <x id="START_LINK"/>Nutzung von Cookies<x id="END_LINK"/> und der <x id="START_LINK"/>Datenübermittlung<x id="END_LINK"/> außerhalb der EU einverstanden. Wir und unsere Partner arbeiten global zusammen und nutzen Cookies für Analytics, Personalisierung und Werbeanzeigen.',es:'Al usar los servicios de Twitter aceptas nuestra <x id="START_LINK"/>Política de Cookies<x id="END_LINK"/> y de <x id="START_LINK"/>Transferencia de Datos<x id="END_LINK"/> fuera de la UE. Nosotros y nuestros socios operamos a nivel global y usamos cookies para análisis, personalización y anuncios entre otras cosas.',en:'By using Twitter’s services you agree to our <x id="START_LINK"/>Cookies Use<x id="END_LINK"/> and <x id="START_LINK"/>Data Transfer<x id="END_LINK"/> outside the EU. We and our partners operate globally and use cookies, including for analytics, personalisation, and ads.',fi:'Käyttämällä Twitterin palveluita hyväksyt <x id="START_LINK"/>evästeiden käytön<x id="END_LINK"/> ja <x id="START_LINK"/>tietojen siirtämisen<x id="END_LINK"/> EU:n ulkopuolelle. Toimimme yhteistyökumppaneidemme kanssa kansainvälisesti ja käytämme evästeitä muun muassa tilastoihin, mukauttamiseen ja mainoksiin.',fil:'Sa paggamit ng mga serbisyo ng Twitter, sumasang-ayon ka sa aming <x id="START_LINK"/>Paggamit ng Cookies<x id="END_LINK"/> at <x id="START_LINK"/>Paglipat ng Data<x id="END_LINK"/> sa labas ng EU. Kami at ang aming mga kasosyo ay pandaigdig na nangangasiwa at gumagamit ng cookies, kabilang ang para sa analytics, personalisasyon at mga ad.',fr:'En utilisant les services de Twitter, vous acceptez notre <x id="START_LINK"/>Utilisation des Cookies<x id="END_LINK"/> et le <x id="START_LINK"/>Transfert de Données<x id="END_LINK"/> en dehors de l&#39;UE. Nous et nos partenaires opérons mondialement et utilisons des cookies, y compris pour des statistiques, de la personnalisation et des publicités.',he:'על־ידי שימוש בשירותים של טוויטר אתה מסכים ל<x id="START_LINK"/>שימוש שלנו בעוגיות<x id="END_LINK"/> ו<x id="START_LINK"/>להעברת המידע<x id="END_LINK"/> מחוץ לאיחוד האירופי. אנחנו והשותפים שלנו פועלים בכל העולם ומשתמשים בעוגיות, בכללן לניתוח, התאמה אישית ופרסומות.',hi:'Twitter की सेवाओं का उपयोग करके आप हमारे <x id="START_LINK"/>कुकीज़ के उपयोग<x id="END_LINK"/> और यूरोपीय संघ के बाहर <x id="START_LINK"/>डेटा ट्रांसफर<x id="END_LINK"/> से सहमत होते हैं. हम और हमारे सहभागी विश्व स्तर पर संचालित करते हैं और कुकी का उपयोग करते हैं, जिस में एनालिटिक्स, पर्सनलाइजेशन, और विज्ञापनों के लिए समावेश होता है.',hu:'A Twitter szolgáltatásainak használatával elfogadod a <x id="START_LINK"/>cookie-k (sütik) használatát<x id="END_LINK"/> és az EU-n kívülre történő <x id="START_LINK"/>adattovábbítást<x id="END_LINK"/>. Partnereinkkel együttműködve a világ minden részén cookie-kat (sütiket) használunk, beleértve azok analitikai, személyre szabott megjelenítés céljából történő és reklámcélú felhasználását is.',id:'Dengan menggunakan layanan Twitter, Anda menyetujui <x id="START_LINK"/>Penggunaan Kuki<x id="END_LINK"/> dan <x id="START_LINK"/>Transfer Data<x id="END_LINK"/> kami di luar wilayah Uni Eropa. Kami dan mitra kami beroperasi secara global dan menggunakan kuki, termasuk untuk analitika, personalisasi, dan iklan.',it:'Utilizzando i servizi di Twitter accetti il nostro <x id="START_LINK"/>Utilizzo dei cookie<x id="END_LINK"/> e il <x id="START_LINK"/>Trasferimento dati<x id="END_LINK"/> al di fuori dell&#39UE. Noi e i nostri partner operiamo globalmente e utilizziamo i cookie anche per statistiche, personalizzazioni e annunci.',ja:'Twitterのサービスを利用すると、<x id="START_LINK"/>Cookieの使用<x id="END_LINK"/>およびEU外への<x id="START_LINK"/>データ転送<x id="END_LINK"/>に同意したことになります。Twitterとそのパートナーは、アナリティクス、カスタマイズおよび広告目的も含めて、世界中でサービスを提供し、Cookieを使用します。',ko:'트위터 서비스를 이용할 경우 귀하는 트위터의 <x id="START_LINK"/>쿠키 사용<x id="END_LINK"/> 및 EU 외부로의 <x id="START_LINK"/>데이터 전송<x id="END_LINK"/>에 동의하게 됩니다. 트위터와 파트너들은 전 세계에서 서비스를 제공하고 애널리틱스, 개인화 및 광고를 위해 쿠키를 사용합니다.',ms:'Dengan menggunakan khidmat Twitter anda bersetuju dengan <x id="START_LINK"/>Penggunaan Kuki<x id="END_LINK"/>dan <x id="START_LINK"/>Pemindahan Data<x id="END_LINK"/> kami di luar EU. Kami dan rakan niaga kami beroperasi secara global dan menggunakan kuki, termasuk untuk analisis, personalisasi dan iklan.',nl:'Door de services van Twitter te gebruiken, ga je akkoord met ons beleid voor <x id="START_LINK"/>cookiegebruik<x id="END_LINK"/> en <x id="START_LINK"/>gegevensoverdracht<x id="END_LINK"/> buiten de EU. Wij en onze partners zijn wereldwijd actief en gebruiken cookies, onder andere voor analyses, personalisatie en advertenties.',no:'By using Twitter’s services you agree to our <x id="START_LINK"/>Informasjonskapsler<x id="END_LINK"/> og <x id="START_LINK"/>Dataoverføring<x id="END_LINK"/>utenfor EU. Vi og våre partnere opererer på et globalt nivå og bruker informasjonskapsler til analyser, personlig tilpasning og reklame.',pl:'Korzystanie z usług Twittera oznacza, że wyrażasz zgodę na <x id="START_LINK"/>korzystanie przez nas z plików cookie<x id="END_LINK"/> i <x id="START_LINK"/>przesyłanie danych<x id="END_LINK"/> poza Unię Europejską. Firma Twitter i jej partnerzy działają globalnie i wykorzystują pliki cookie do analiz, personalizacji treści i wyświetlania reklam.',pt:'Ao utilizar os serviços do Twitter você concorda com nosso <x id="START_LINK"/>Uso de Cookies<x id="END_LINK"/> e <x id="START_LINK"/>Transferência de Dados<x id="END_LINK"/> fora da UE. Nós e nossos parceiros operamos globalmente e usamos cookies, inclusive para estatísticas, personalização, e publicidade.',ru:'Используя сервисы Твиттера, вы соглашаетесь с <x id="START_LINK"/>Политикой использования файлов cookie<x id="END_LINK"/> и <x id="START_LINK"/>Передачей данных<x id="END_LINK"/> за пределы стран ЕС. Мы и наши партнеры работаем в мировом масштабе и используем файлы cookie, необходимые в том числе для аналитики, персонализации и рекламы.',sv:'Používaním služieb Twitteru vyjadrujete svoj súhlas s našimi podmienkami <x id="START_LINK"/>používania súborov cookie<x id="END_LINK"/> a <x id="START_LINK"/>prenosu údajov<x id="END_LINK"/> mimo EÚ. My aj naši partneri pôsobíme celosvetovo a súbory cookie používame na analýzu, prispôsobenie obsahu a reklamu.',th:'การใช้งานทวิตเตอร์ คือการยืนยันว่าคุณยอมรับ <x id="START_LINK"/>การใช้คุกกี้<x id="END_LINK"/> และ <x id="START_LINK"/>การโอนถ่ายข้อมูล<x id="END_LINK"/> ภายนอกสหภาพยุโรปของเรา เราและคู่ค้าของเราให้บริการทั่วโลกและใช้คุกกี้ในการวิเคราะห์ ปรับแต่งส่วนบุคคล และการโฆษณา',tr:'Twitter hizmetlerini kullanarak <x id="START_LINK"/>Çerez Kullanımı&#39;mızı<x id="END_LINK"/> ve AB dışında<x id="START_LINK"/>Veri Transfer&#39;imizi<x id="END_LINK"/> kabul etmiş olursun.Biz ve iş ortaklarımız küresel ölçekte çalışırken, istatistikler, kişiselleştirmeler ve reklamlar dahil olmak üzere çeşitli amaçlarla çerezler kullanırız.',zh:'如果使用 Twitter 的服務，即表示你同意我們的 <x id="START_LINK"/>Cookie 使用政策<x id="END_LINK"/>及歐盟以外的<x id="START_LINK"/>資料傳輸<x id="END_LINK"/>。我們和合作夥伴會在全球的營運上使用 Cookie，包括用於分析、個人化及廣告。'};
var l=Cookies.get(n);
var h=Cookies.get(g);
var e;
var r="US";
var p=document.getElementsByClassName("signed-in_dropdown");
var s=document.getElementsByClassName("login-container");
function a(){if(s.length>0){r=s[0].dataset.geoCountryCode
}if((l===undefined||l==="")&&m.indexOf(r)!==-1){if(h!==undefined&&h!==""){k(h);
return
}if(p.length>0){e=p[0].dataset.profileLanguage;
if(e!==undefined&&e!==""){k(e);
return
}}if(s.length>0&&s[0].dataset.browserLanguage!==undefined){var t=s[0].dataset.browserLanguage.match(i);
if(t.length>0){k(t[0]);
return
}}if(s.length>0){k("en")
}}}function k(x){if(x===undefined||x===""){x="en"
}var w=b[x];
if(w===undefined||w===""){w=b.en
}f("#page-wrapper").append(o.replace("###MESSAGE###",w).replace('<x id="START_LINK"/>','<a href="'+c+'" target="_blank">').replace('<x id="END_LINK"/>',"</a>").replace('<x id="START_LINK"/>','<a href="'+q+'" target="_blank">').replace('<x id="END_LINK"/>',"</a>"));
Cookies.set(n,j,{expires:d});
var u=document.getElementsByClassName("eu-cookie-alert");
var t=u[0].getElementsByClassName("status-icon");
if(u.length>0){t[0].addEventListener("click",function(y){y.preventDefault();
v()
},false)
}function v(){var y=u[0].classList.contains("active");
if(y){u[0].classList.remove("active")
}}}a()
})(jQuery);