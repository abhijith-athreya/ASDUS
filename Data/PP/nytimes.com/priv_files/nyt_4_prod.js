!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(139),i=[t];i.push(n(141)),i.push(n(147)),i.push(n(150)),i.push(n(153)),i.push(n(155)),i.push(n(165)),i.push(n(169)),i.push(n(171)),i.push(n(174)),i.push(n(177)),i.push(n(181)),i.push(n(185)),i.push(n(188)),i.push(n(192)),i.push(n(196)),i.push(n(201)),i.push(n(203)),i.push(n(204)),i.push(n(206)),i.push(n(207)),i.push(n(210)),i.push(n(214)),i.push(n(217)),i.push(n(219)),i.push(n(220)),p.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1),r=n(16),a=n(19);n(64);var o=a.get("stores/directive"),s=n(67);if(!s.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var u,c=n(74),l=n(80),d=n(81),f={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Geo] US,[Cookie] abTest does NOT exist", "name": "[Geo] US or [Cookie] abTest does NOT exist", "bucketingStrategy": null, "variations": [{"id": "8470320532", "actions": [{"viewId": "8263601258", "changes": [{"dependencies": [], "type": "custom_code", "id": "CBA5DCC7-3F06-4C22-889C-D723162E14EC", "value": function($){var visitor = optimizely.get('visitor');
	if (visitor.location != undefined && (visitor.custom === undefined || visitor.custom['8442630948'] === undefined && visitor.custom['8442321393'] === undefined)) {
		console.log('evaluating function');
		var geo_macro, geo_micro;
		var country = visitor.location.country;
		var eurozone = ['AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'GR', 'VA', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'MC', 'NL', 'PL', 'PT', 'RO', 'SM', 'SK', 'SI', 'ES', 'SE', 'CH'];
		if (country === "US") {
			geo_macro = "US";
			switch (visitor.location.region) {
				case 'CA':
					geo_region = 'California';
					break;
				case 'NY':
					geo_region = 'New York';
					break;
			}
		} else {
			geo_macro = "INYT";
			if (country === 'GB') {
				geo_region = 'United Kingdom'
			} else if (country === 'CA') {
				geo_region = 'Canada';
			} else if (country === 'AU') {
				geo_region = 'Australia';
			} else if (country === 'DE') {
				geo_region = 'Germany';
			} else if (country === 'IN') {
				geo_region = 'India';
			} else if (eurozone.indexOf(country) !== -1) {
				geo_region = 'Eurozone';
			}
		}
		window["optimizely"].push({
			type: "user",
			attributes: {
				geo_macro: geo_macro,
				geo_region: geo_region
			}
		});
	};
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "7814230912", "8183220341"], "changes": null, "id": "8458725926", "integrationSettings": null}], "id": "8460385332", "weightDistributions": null, "name": "[Support] Geo Attribute Setting", "groupId": null, "commitId": "8466712104", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8458725926", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] fbpx does NOT exist,[WAT / Krux] All EDU: *all* segments except K12,[Cookie] abTest does NOT exist", "name": "Facebook Event Pixel: EDU", "bucketingStrategy": null, "variations": [{"id": "8463645112", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/68609c3723147a01e68838b045d5ee6aa607f8fc7396b6d243208aea6948e5cc.js", "dependencies": [], "id": "C0608E8B-4D65-483C-95EE-AAC0DECF4398"}]}], "name": "Facebook Event Pixel: EDU"}], "audienceIds": ["and", "8471930223", "6679643984", "8183220341"], "changes": null, "id": "8455666309", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] fbpx does NOT exist,[Cookie] abTest does NOT exist,[Bundle] G", "name": "Facebook Event Pixel: Bundle G (NYT Employees)", "bucketingStrategy": null, "variations": [{"id": "8459949885", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b30f8b7e6376979ca3ab8074c2357da836ba981506a4c64c9cfcc3e299b3763b.js", "dependencies": [], "id": "C0608E8B-4D65-483C-95EE-AAC0DECF4398"}]}], "name": "Facebook Event Pixel: G"}], "audienceIds": ["and", "8471930223", "8183220341", "8300495550"], "changes": null, "id": "8480490032", "integrationSettings": null}], "id": "8461617302", "weightDistributions": null, "name": "Facebook Event Pixels", "groupId": null, "commitId": "8476670997", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8455666309", "endOfRange": null}], [{"entityId": "8480490032", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["4128620616", "4129021553", "4137230627", "6252880791", "8179870018", "8185280121", "8187250053", "8309420148"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Landing Page restore", "bucketingStrategy": null, "variations": [{"id": "8286476954", "actions": [{"viewId": "6252880791", "changes": [{"name": "Landing Page", "config": {"multi": "false", "custom_js": "console.log('[TEST]: restore the page')", "framework_restore": "false", "nytID": "", "full_html": "", "extra_js": "", "click4": "", "click2": "", "click3": "", "css": "", "click1": ""}, "id": "665BB9A2-9ABE-442F-B557-75A8B011334F", "dependencies": [], "type": "widget", "widget_id": "lp"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "8282395857", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Dayparting] Welcome Killset for US Homepage,[Subscriber Type] Non-Subs", "name": "Nons | USGM Welcome Ad OFF / Killset | US Geo", "bucketingStrategy": null, "variations": [{"id": "8286643761", "actions": [{"viewId": "8179870018", "changes": [{"name": "Killset", "config": {}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16"}]}], "name": "Click \u2022\u2022\u2022 (at the top right)  >  Settings > Dayparting > View to change schedule"}], "audienceIds": ["and", "8183220341", "8340731813", "6992450319"], "changes": null, "id": "8289681526", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Cookie] abTest does NOT exist,[Krux] Logged-out Subs qxk0hzyjh", "name": "Subs: Logged-out | US Geo", "bucketingStrategy": null, "variations": [{"id": "8290558607", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/ce7e27bd563f5035ed180e06fa335ed73deabcff202a8776bd356a7fa47de36c.js", "dependencies": [], "id": "4D8F7AD2-B8E7-45A0-AF37-36F79F323580"}, {"src": "/actions/ce7e27bd563f5035ed180e06fa335ed73deabcff202a8776bd356a7fa47de36c.js", "dependencies": ["4D8F7AD2-B8E7-45A0-AF37-36F79F323580"], "id": "1F28F7EC-7AF9-4887-8A17-B178C8AEB501"}, {"src": "/actions/ce7e27bd563f5035ed180e06fa335ed73deabcff202a8776bd356a7fa47de36c.js", "dependencies": ["1F28F7EC-7AF9-4887-8A17-B178C8AEB501"], "id": "C05B7A38-F858-4E7E-A302-4E5924BE13FC"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/b8f7b89d5a7cee37c24b6901102243475ee582dcdad34843b9da71f870dfb3d4.js", "dependencies": [], "id": "BB5CBAB4-3D3D-4702-B4CE-EEBA93325B3D"}]}, {"viewId": "4137230627", "changes": [{"name": "Killset", "config": {"placement_name": "Interstitial"}, "id": "E781171B-9D03-4279-9267-EE8474C0EE92", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "id": "44CEA269-8F4C-4FDF-AA17-207FB94F6D12", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/8476d0ebec2b9d2600bc126f4d3090b07fd6277c2a9f61b9ff105000503579a2.js", "dependencies": [], "id": "24802A83-0A4C-4BAA-8B4F-B72DE4E06FAA"}]}, {"viewId": "8309420148", "changes": [{"dest": "http://www.nytimes.com/marketing/assets/optly/13064/nyt2017_loggedoutsub_mobilegateway_13064.html", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "DD78BBEA-4DA3-4632-A18F-B1FA5C829A94"}]}, {"viewId": "4129021553", "changes": [{"name": "Killset", "config": {"placement_name": "Bar 1"}, "id": "0FED52A7-66DD-4353-9B63-89430F5AA4B3", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "US Logged-out"}], "audienceIds": ["and", "7814230912", "8183220341", "8298793054"], "changes": null, "id": "8294022351", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Krux] Formers INYT rlijf3y9e,[Geo] WW ex US,[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Geo] NOT India", "name": "Nons | INYT Formers Winback | BAU Nonsale Grey (50% Off) | WW Geo", "bucketingStrategy": null, "variations": [{"id": "8287457955", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/45193199b9709a375965fb0ba2259ccae5b8f162707a1968c96cadce6ea9eb53.js", "dependencies": [], "id": "18261F60-AD1C-408B-9CC0-DC5D7A0081D1"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "B4331C2F-7AF3-4390-B45D-4A3040FB61BA"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/502d2fea88bdfeb00a3bbae72363e8fc0055eb2c9409e635ec8db8e994c23c3f.js", "dependencies": [], "id": "874CBC83-079E-4F71-BBB1-259E79004A3D"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/a2267084378111b4a6c7875253517384236b720da5528505818e8bc5e9d376a4.js", "dependencies": [], "id": "7D8DDBD6-9A92-4479-B48C-F68E2ED3E44A"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/afe981d9b59bde78379d5dd34bc75cfac8e536f86523fb1c5f27733abf7cba1b.js", "dependencies": [], "id": "EC92BE94-6FF7-4A2F-8489-173D4E6C2C63"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/28dce7eb57c730a31eb573885e8d8d9427659ab875e39b9dae45f468b4c63454.js", "dependencies": [], "id": "C5F9D3EA-617E-47AC-8C45-035F805D867E"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp8976K.html?campaignId=6LWJY", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "291B59E6-1E66-4C07-829E-B6C1AFDEB759"}]}], "name": "INYT Formers | Grey (50% Off) | WW Geo | 6LWJJ | 6LWJR | 6LWJL | 6LWJY | 6LY86 | 6LY7Y"}], "audienceIds": ["and", "8281592112", "7209740780", "6992450319", "8183220341", "8325672904"], "changes": null, "id": "8294240258", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "Meter views less than 2,[Geo] Australia,[Cookie] abTest does NOT exist,[WAT] Exclude All EDU segments", "name": "abTest_anchor_paywall_inyt_au_0217", "bucketingStrategy": null, "variations": [{"id": "8293746801", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/eab192c81459052adf6157e1a70f6302e8204e88ddb097db2f10732705bb7eea.js", "dependencies": [], "id": "4BDFD116-C2E3-4E2C-9C5C-B88DB4D45F71"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8287944678", "7798550316", "8183220341", "8413422098"], "changes": null, "id": "8294871134", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[WAT] K12", "name": "Nons | K12 | BAU | US, WW Geo | 2017/04/03", "bucketingStrategy": null, "variations": [{"id": "8299275162", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/59ae24e82584f91cd0a7732aed53c02a49783152173544db2be64e48b9b50baf.js", "dependencies": [], "id": "8C02AAC0-E81A-483A-8D55-56B4ECEED49C"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/10ee414cc029d277c1b1f5e5910e6c0ad0e160626ae836ba9a94496458dacf42.js", "dependencies": [], "id": "5B6E721B-7AC0-47A2-847F-145F8E5E04EB"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/e0c345a4914486b3cccb48891559f295744d2464418fd23fd983dc6cbffc4b23.js", "dependencies": [], "id": "C9D66968-FD16-410A-B201-5413AC580A8B"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/aba05e48e53db3d9712f5af0ad6b438bfefa1813e6977beb7b755edeb1657a95.js", "dependencies": [], "id": "A3A75FC8-9EAF-402F-925C-7328EA400C42"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/36f6bf5e2daab8ddc786f6fd0b1681fba9576945d9cd1fe35c593548d62a773f.js", "dependencies": [], "id": "DC432AA0-84DE-4BAC-8C02-E020742AC7D6"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a182f23674bc0d229cbd028b1e4a9d85e4e053eea0b183996e7e5499f2be667b.js", "dependencies": [], "id": "F55951F7-91A7-4EB4-83F6-155716AAC855"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/edu/lp8RU8U.html?campaignId=69JQJ", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "343BBF43-2E98-42C1-8240-959CD9733E23"}]}], "name": "K12 | BAU - Come Think w Us"}], "audienceIds": ["and", "6992450319", "8183220341", "7857642821"], "changes": null, "id": "8295790119", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] WW ex US,[Krux] Logged-out Subs qxk0hzyjh,[Cookie] abTest does NOT exist", "name": "Subs: Logged-out Intl. | WW ex US Geo", "bucketingStrategy": "impression", "variations": [{"id": "8297375129", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/7ab9c51705219e016943499ad2e097416271ed62116e1f2226f5f9d7f36e4f94.js", "dependencies": [], "id": "4D8F7AD2-B8E7-45A0-AF37-36F79F323580"}, {"src": "/actions/7ab9c51705219e016943499ad2e097416271ed62116e1f2226f5f9d7f36e4f94.js", "dependencies": ["4D8F7AD2-B8E7-45A0-AF37-36F79F323580"], "id": "1F28F7EC-7AF9-4887-8A17-B178C8AEB501"}, {"src": "/actions/7ab9c51705219e016943499ad2e097416271ed62116e1f2226f5f9d7f36e4f94.js", "dependencies": ["1F28F7EC-7AF9-4887-8A17-B178C8AEB501"], "id": "C05B7A38-F858-4E7E-A302-4E5924BE13FC"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/a6ce3da5454db02d3199d80135fb7fd970752397f27e0cef6a71840a627676a6.js", "dependencies": [], "id": "FAA77829-A811-4363-B8CF-C9532A578078"}]}, {"viewId": "4137230627", "changes": [{"name": "Killset", "config": {"placement_name": "Interstitial"}, "id": "11427226-229B-4623-8A16-6479E27D441D", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "id": "64F736D5-874F-488D-AB9C-93924A405D66", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8185280121", "changes": [{"name": "Killset", "config": {"placement_name": "Growl"}, "id": "826F83FC-0751-4C6E-8DCC-80917180A477", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}, {"viewId": "8309420148", "changes": [{"dest": "http://www.nytimes.com/marketing/assets/optly/13064/inyt2017_loggedoutsub_mobilegateway_13064.html", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "466A39A8-9E58-44F1-9B38-C5EDB08F8FC5"}]}, {"viewId": "4129021553", "changes": [{"name": "Killset", "config": {"placement_name": "Bar 1"}, "id": "5C711539-F423-4C13-82E4-5AA0A94B1123", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "INYT Logged-out"}], "audienceIds": ["and", "7209740780", "8298793054", "8183220341"], "changes": null, "id": "8299860425", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] mtrab AU Paywall Test,[Geo] Australia,[WAT] Exclude All EDU segments", "name": "abTest_other_paywall_inyt_au_0217", "bucketingStrategy": null, "variations": [{"id": "8299243032", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/1fba147fecabb574bd3f2e0a89b38f876297b0d3b4f8ce96bd7a9ef723e128e9.js", "dependencies": [], "id": "04B85032-7A4B-472E-A62E-E15555E8B9C0"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/cfb25a77a56555b1c50354b1d8bdd4bdf708a6582bdab747795320da78db48c8.js", "dependencies": [], "id": "2CB1B696-23B6-466E-9971-935D8B24AD1C"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/df41f24b455a2caf342ac18b7a291abf12b5010512e5240e9721906bad45c611.js", "dependencies": [], "id": "73142884-D2DA-4573-9A2A-4EB3379B7585"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/76147a17b1deb8c2c36464e3aa123c7e73ccdb611d4d666d48701ac7cbec5e20.js", "dependencies": [], "id": "E9E05FE5-0BA7-4B8B-8F97-0A2CF8D5BDEF"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/e68880078c23047d96ffcd2e2899c171d4f47a366bb1a8d958352a587505e6ee.js", "dependencies": [], "id": "5EEA1329-CAC3-417F-985D-E90468A00026"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/995408eca627cebf6302ceaf0c229cee3063eeaa834a537966cc05a2fd4a027a.js", "dependencies": [], "id": "8EC58FBE-0232-45EF-A608-58AC64ACA1CF"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8301334058", "7798550316", "8413422098"], "changes": null, "id": "8300151926", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Geo] India", "name": "Nons | INYT | BAU in Rupees | India only Geo", "bucketingStrategy": null, "variations": [{"id": "8298822064", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/14d7d8c8bf3347c8594c7179510daac39d58d9be5475bd39e6ee1709e437d142.js", "dependencies": [], "id": "A170FAA0-BC74-445D-8DEF-33D4BF79F1A6"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/afa6d92f5f0aacfe76e27e2b621f8eca9ea7b1d5b9785bbff55c0a2bb559700c.js", "dependencies": [], "id": "48311EEF-5E1F-49F1-A759-CB184174E785"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/91fb44e232823fcf8378b190e6a7d643706424b81c668e58b69ea69c371ab297.js", "dependencies": [], "id": "A75D1CE2-9866-4B94-AAAE-221D4142190E"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/7a702e2ebaf8b6393fa0883b2b7d5ff81091e852f144e4a17adae476032ebe8c.js", "dependencies": [], "id": "35073315-7319-445C-9EE3-CA6B62D575C1"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/fe776ceeb4622379e087caf74bbcef456d6b09a35efa4e43e0f134c9e130be5f.js", "dependencies": [], "id": "98D5206F-151C-43BF-AEB7-79347D01FE27"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/0c8a21018f39f47251de8981a049e77471a5ccaea65af010301562888a838388.js", "dependencies": [], "id": "3E00C3BA-97CA-46FC-9800-FD098A1A3B70"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp8J4QY.html?src=optind&campaignId=4KKUL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "83ABD426-D9CB-4F42-BA96-181B7266FBB2"}]}], "name": "INYT India 4KKUL"}], "audienceIds": ["and", "6992450319", "8183220341", "8248972263"], "changes": null, "id": "8301150742", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Page Targeting] Learning Network - All Articles/Pages,[Subscriber Type] Non-Subs", "name": "Nons | Learning Network | BAU | Any Geo", "bucketingStrategy": null, "variations": [{"id": "8307222151", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/7239d35a0fbc7e0aa306434c31870958950d715614a7242cea00e5f20c38f4f8.js", "dependencies": [], "id": "7F4007A8-A611-4332-A055-8EEEF8681418"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/8471215c5a5a02a2beb03014f5877b4c5e3fecbc2cdffa1c06042b13155c76fa.js", "dependencies": [], "id": "C5945546-1391-4B3E-A0B0-DCDCD144B219"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/f661329ff438b0ab51cffc36a892484e32b473ad295595048ee689af2747b0b7.js", "dependencies": [], "id": "A3A75FC8-9EAF-402F-925C-7328EA400C42"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/054d96a8a2450b12ed7823b34e4012dbebdef268702960922715c965b0495821.js", "dependencies": [], "id": "A556216C-4339-44C1-8A78-F519EE02143A"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/0f9ad6219b459ba3488f3ce60b688c733f23664d66526c0e5a0f96786f438e82.js", "dependencies": [], "id": "F67BB474-9D3F-470A-8567-3F5E5A88BD47"}]}], "name": "Learning Network | 69QLF_64JK8"}], "audienceIds": ["and", "8183220341", "8301992165", "6992450319"], "changes": null, "id": "8306482752", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[WAT] Newsletter - opted out / not opted in,[Subscriber Type] Subs ", "name": "Subs | Newsletter Opt-in | WAT", "bucketingStrategy": null, "variations": [{"id": "8305267918", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/12574c854ebeb9e022b457e8febe9d3ccac458d91dc315eaf75edde4b24f8627.js", "dependencies": [], "id": "24FA3526-A276-42AA-A7AD-0A40EA45AD4E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/5d199c8652418f53817fac755c3f62a0fd2f6017a4ebf4c22655e687221889d2.js", "dependencies": [], "id": "CB1C62EA-6474-4B29-AA33-FE43041D43AE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "US_Opt_in"}], "audienceIds": ["and", "8183220341", "8310130736", "6696333431"], "changes": null, "id": "8307281703", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist", "name": "USGM | Fallback/Default for Mobile Gateway (no audiences)", "bucketingStrategy": null, "variations": [{"id": "8315323938", "actions": [{"viewId": "4128620616", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?src=optfallback&mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "FE75AC76-37DC-430F-A031-40A49E8B34F9"}]}], "name": "Redirect to lp8HYKU"}], "audienceIds": ["or", "8183220341"], "changes": null, "id": "8311228072", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs Alt,[Subscriber Type] Non-Subs,[Geo] US,[AB] LiftOff,Desktop/Laptop only,[Cookie] abTest does NOT exist,[Capability] FTEX,[Krux] All Subscribers qxk0hzyjh", "name": "abTest_main_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8316622267", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/0a2c0ded0bcee563a7c6bd5a483695a2453642223ffefa2220e565d3ab571d6a.js", "dependencies": [], "id": "35293846-DD48-4940-91A4-CEFC637DED5E"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a1bb90e027ed94793c27f0716586d3e99dd2ca827fa7d28afdd758b07ab198d8.js", "dependencies": [], "id": "AC5E38EE-05AD-43B2-B9C2-B04F9E8DCB90"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/89c80a8493a6300bce7a3f760482893035188850b1d1f128aeda8784047ac283.js", "dependencies": [], "id": "21E6EE7C-4F52-4F6B-B041-B545E843F7BB"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/3392d2583479de27b9a0c3dde55cd87c949c48931df6392a4bb6486804824b50.js", "dependencies": [], "id": "C0B9194E-B0CC-4139-BCDB-4954735F125D"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/38bfafa86f79f99e76f27628098439b76fb9e3850076ee58f5a128fa188e3781.js", "dependencies": [], "id": "BD3CC66F-516F-430D-8BFF-838B3022E79E"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/4afb99079dbf13a3cb5aacf3adc5a26d7ba52839c895ef5e9f95322bbfd39121.js", "dependencies": [], "id": "D35C9DD5-6AF6-4B88-8674-153DF1444BAE"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8356764950", "6992450319", "7814230912", "8335242713", "8331680099", "8183220341", ["not", "8315260461"], ["not", "8214062166"]], "changes": null, "id": "8314135793", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Page Targeting] Arts and Tech Pages,[Cookie] abTest does NOT exist,[Subscriber Type] Non-Subs,[Krux] Spotify: NOT current sub, etc.,[Geo] US", "name": "Nons | USGM | Spotify: Arts, Tech sections | US Geo", "bucketingStrategy": null, "variations": [{"id": "8323725088", "actions": [{"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/28a5c69bc4244293875c311a57b3c1dca40319a302361e11f8fff3931b821f35.js", "dependencies": [], "id": "349D506A-1E57-475F-B102-EDD29471AF71"}]}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "Spotify $5 a week"}], "audienceIds": ["and", "8356272587", "8183220341", "6992450319", "8373445907", "7814230912"], "changes": null, "id": "8314903711", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Capability] FTEX,[Cookie] abTest does NOT exist", "name": "abTest_bar1_intrial_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8325430392", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/87265211cff85914b2dce520ca78b2e6503ace6f17d7d1b9d54c7c1352bdf7fc.js", "dependencies": [], "id": "2C4752BD-EFF0-472B-838A-3295C526CDDE"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/d7686d7b3d2238b9fadc167daaeb47d81710c2d7d70f0366be5bdc46c57cdf68.js", "dependencies": [], "id": "8DCFD141-F07A-42E4-8B84-8C10A5B7FBC3"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6696333431", "8315260461", "8183220341"], "changes": null, "id": "8320950185", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Capability] FTEX,[AB] LiftOff", "name": "abTest_posttrial_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8320500170", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/b8e45dd8856801f0bd3bfbcdca0f8ff0cca44f0a3671d97d01b3e2ee0cfb6600.js", "dependencies": [], "id": "11D5ECE0-593F-4A92-A368-0B143722BD4B"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/9d86686b6b0f5ec1293cd625525d9ae06fdc389cf010ac224a57feaeb3a0b5ed.js", "dependencies": [], "id": "7B9EA2AA-FA75-47B4-AA80-B44479C7B775"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/ddd156a395abbb3e6569d2cc243a1b1042e533b8e9038af74ba2bef49e277c19.js", "dependencies": [], "id": "734FF24F-2DA6-4DCA-B47A-4CAE53493C9C"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/16276ca823ae8fbdae733a88024102bbf862b7aef7b32cf8ce86b35c5298bd8f.js", "dependencies": [], "id": "614021AF-D9EF-435D-9F96-00ED273A8779"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/21d2de120af10b7b856aea359a4d4278f368309eba52ab725efd9e4080df02b7.js", "dependencies": [], "id": "B93D783C-8592-48F4-932C-66102D8A8055"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/1f342d3b6ea70c53523e2347affc8c8cc5c536d0391149ba385b2768fbab60b2.js", "dependencies": [], "id": "3D79AE78-F210-4E35-9C34-2E4D5CA6E914"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6992450319", "8315260461", "8335242713"], "changes": null, "id": "8325480191", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Cookie] ex mtrab AU Paywall Test ,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,INTL Price Test Phase II - April 2017 Targeted Audiences", "name": "abTest_meter_pricing_2_inyt_0417", "bucketingStrategy": null, "variations": [{"id": "8328931922", "actions": [{"viewId": "6252880791", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/30789526830224ecdf390c0d411e11ff64a20a3b7b95df5637403bab23c71928.js", "dependencies": [], "id": "242E4B39-C407-4A82-883B-2FF45875D82F"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/67020249083b94016e07c8475744359e2baf42e964ed1973dc35e7f39f2241b1.js", "dependencies": [], "id": "C870ACEB-CB5F-4400-A7EC-CF55ABEE581D"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/a16368f6069f44dfcee62314cb69c9d3fe5e348c0ce3e49a3b972174614d483e.js", "dependencies": [], "id": "228A994F-1694-4752-9848-9BB1EA16945C"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/514b2062b4e6d48b9ae1c5aee28bd4b4d365ac2c2b60163b542a01bf1e71d646.js", "dependencies": [], "id": "2E2FA792-8E5E-4037-B77B-FB98CA021376"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/e32e1ecc69db7b25d6ef24dc12eda2c6eae5955ceffa8390fa1dbad425101eff.js", "dependencies": [], "id": "8531FCC3-FD19-4B9C-ACFE-27B9EBA843DC"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/9eb2f2cd5f2a3b03d3a1ef8e4f7e209f94200003642e763177863fad20ddfe8c.js", "dependencies": [], "id": "2D5820C5-3FFA-4CFE-A260-C16257ECB271"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8183220341", "8355611617", "6992450319", "8413422098", "8329145104"], "changes": null, "id": "8325906517", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[page] - Lift Off Project LPs (lp8W3WH, lp8QXR6, lp8U8QY, lp8F7Q8),[Subscriber Type] Non-Subs,[Subscriber Type] Non-Subs Alt", "name": "abTest_lp_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8334330510", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/e40ec265901c611114451260f96e64fa97c2ff58d1fd03d0e257728a0826b463.js", "dependencies": [], "id": "EC0B3DE1-9C16-4898-9C00-F722E2D45191"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "8316027593", "6992450319", "8356764950"], "changes": null, "id": "8327971049", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Dayparting] INYT Welcome Killset,[Subscriber Type] Non-Subs", "name": "Nons | INYT Welcome Ad OFF  / Killset | WW Geo | Only for SALE PERIODS", "bucketingStrategy": null, "variations": [{"id": "8316935751", "actions": [{"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "Click \u2022\u2022\u2022 (at the top right)  >  Settings > Dayparting > View to change schedule"}], "audienceIds": ["and", "8183220341", "8331673235", "6992450319"], "changes": null, "id": "8328272359", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "INTL Price Test Phase II - April 2017 Targeted Audiences,[Cookie] abTest does NOT exist,[Cookie] ex mtrab AU Paywall Test ,[Subscriber Type] Non-Subs,INTL Price Test Phase II - April 2017 - Test Targeted LPs", "name": "abTest_lp_pricing_2_inyt_0417", "bucketingStrategy": null, "variations": [{"id": "8346630286", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/60fe091bcf913bfa71d831c20ab6c067a7996c909318c65e20b12a9ef554e8ef.js", "dependencies": [], "id": "8EC9A1B8-EF60-469A-B759-A102B59B2343"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8329145104", "8183220341", "8355611617", "6992450319", "8335142559"], "changes": null, "id": "8340021736", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "abTest = meter2_iframe", "name": "dev_test_meter2_iFrame", "bucketingStrategy": null, "variations": [{"id": "8347435546", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/d5159c30f8f5e2ad2e605628465fb56000f02bee458971b151e3ecf23f8e0104.js", "dependencies": [], "id": "23F8391D-17AD-45AD-99F8-BE28B91ADE3D"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/de462942ef4d0d2b9601a8cdb91f6dac6bc644153c014e6d9708a351879bd55d.js", "dependencies": [], "id": "5C3CDA05-FC15-4C74-A69B-15E0C775249F"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/6f9036ce1939f00f8b1ababe4b928803919bbef034daa9470283fb2d71c62dd4.js", "dependencies": [], "id": "C1502AA7-729A-48AA-B261-93B9F6763C36"}, {"src": "/actions/6f9036ce1939f00f8b1ababe4b928803919bbef034daa9470283fb2d71c62dd4.js", "dependencies": ["C1502AA7-729A-48AA-B261-93B9F6763C36"], "id": "5F59AC0C-C82D-4110-BC9F-34A0B5A2D2E0"}]}], "name": "Variation #1"}], "audienceIds": ["or", "8349680476"], "changes": null, "id": "8348435276", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] HD_Grace,[Dayparting 10] Wednesdays, Thursdays only,[Cookie] GraceViewed does not exist,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist", "name": "Subs | HD In-grace - WAT | Interstitials", "bucketingStrategy": null, "variations": [{"id": "8345314011", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/0f9c700fce62f8efb45e1684cbe1c38f0d4782e7625692767c95cd38efa22d6a.js", "dependencies": [], "id": "F5915F24-4135-46C5-867E-5B50A25C8018"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/dbb7f6f1d40879a697271ed70cb3299a7f36eadd6e3ada60f6b9abe94b4e96ab.js", "dependencies": [], "id": "65B1E198-CF0B-48C4-BD3D-8C3B50B3DC8A"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": [{"src": "/actions/5b89533e04a8ae0b786125c30d0414ef5b17f11e87cf112dbfbb1cbcc4845f1d.js", "dependencies": [], "id": "D1049982-9AE1-4062-A0F4-787D1254FD27"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/3e779fb3d62582d9810086b9104574919cc24a4a48db7594abb6e5608bd3651a.js", "dependencies": [], "id": "469B3B4A-01F4-416E-83DC-AB9D26F1DDA2"}]}], "name": "Subs | HD In-grace | Welcome, Anchor | 6QKLR"}], "audienceIds": ["and", "7877803306", "8350622915", "8354152464", "6696333431", "8183220341"], "changes": null, "id": "8349521001", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] HD_Grace,[Dayparting 10] Wednesdays, Thursdays only,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist", "name": "Subs | HD In-grace - WAT | Bar1 only (no cookie check)", "bucketingStrategy": null, "variations": [{"id": "8347071348", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/3c14b7cced73b1584b290b729724025f49e59c9906442892f9d9e8944028a82b.js", "dependencies": [], "id": "8B9162A3-A2E8-41D1-A8B3-E3B95B42DED2"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | HD In-grace | Bar1 | 6QKLW"}], "audienceIds": ["and", "7877803306", "8350622915", "6696333431", "8183220341"], "changes": null, "id": "8350705198", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] B2B w ADBLOCK flag,[Cookie] abTest does NOT exist", "name": "Killset: B2B site license w Adblock", "bucketingStrategy": null, "variations": [{"id": "8356674833", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/a5dcb28ba75e4a6466dfc379e7e325088e49fe8b886d3b2f0644b48bdfcf5a9e.js", "dependencies": [], "id": "44E5FD21-E612-4419-A826-5E60649D0AC0"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/920aca03b880210a401f4a4c088f125e442b4b9fdfc39d25013ef391593d695e.js", "dependencies": [], "id": "E2CCFEA7-3E4E-48E9-B52B-B23552366EF6"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/b1fb1020f05ffb4652ad872ca8c9814e25b20130e788f3ae373205a2eff63534.js", "dependencies": [], "id": "A03BDD55-8288-456B-889F-EF945CD2DD62"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/b49af5f0d22df841c235fe2ebb10ff24576c1113dfcb3195138b041c46e40436.js", "dependencies": [], "id": "88EC4AC0-2BD2-448F-9D5D-02A35A171848"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/58dc351ca6651c6c46b7766ce10e00ede1f3251dbda044eb8df48c9b7828be14.js", "dependencies": [], "id": "872E74E2-498F-4D93-9866-DC79EEB0BE75"}]}, {"viewId": "8187250053", "changes": []}], "name": "Killset: B2B Corp Site Licenses"}], "audienceIds": ["and", "8380850399", "8183220341"], "changes": null, "id": "8352043770", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Bundle] Digi Subs in Grace,[Cookie] abTest does NOT exist", "name": "Subs | Digi In-grace | Bar1 only | May 2017 (no cookie check)", "bucketingStrategy": null, "variations": [{"id": "8390621064", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/60c023fce3dcad5b73f9f56a3e9a6d452c0aa4ff7c04293f56e64e25889fedae.js", "dependencies": [], "id": "8B9162A3-A2E8-41D1-A8B3-E3B95B42DED2"}]}, {"viewId": "8309420148", "changes": [{"src": "/actions/5b89533e04a8ae0b786125c30d0414ef5b17f11e87cf112dbfbb1cbcc4845f1d.js", "dependencies": [], "id": "D1049982-9AE1-4062-A0F4-787D1254FD27"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/3e779fb3d62582d9810086b9104574919cc24a4a48db7594abb6e5608bd3651a.js", "dependencies": [], "id": "469B3B4A-01F4-416E-83DC-AB9D26F1DDA2"}]}], "name": "Subs | Digi In-grace | Bar1 | 666LW"}], "audienceIds": ["and", "8379916476", "8183220341"], "changes": null, "id": "8376098187", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Krux] Spotify: Inclusions (LP, Step 1, Raw Users),[Cookie] abTest does NOT exist,[Krux] Spotify: NOT current sub, etc.,[Geo] US", "name": "Nons | USGM | Spotify: Targeting Krux (high propensity) | US Geo", "bucketingStrategy": null, "variations": [{"id": "8381100198", "actions": [{"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/28a5c69bc4244293875c311a57b3c1dca40319a302361e11f8fff3931b821f35.js", "dependencies": [], "id": "349D506A-1E57-475F-B102-EDD29471AF71"}]}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8309420148", "changes": []}], "name": "Spotify $5 a week"}], "audienceIds": ["and", "6992450319", "8332580255", "8183220341", "8373445907", "7814230912"], "changes": null, "id": "8380743665", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8381202806", "endOfRange": 5000}, {"entityId": "8392220302", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,abTest= lp_spotify_gbb_0617 (recycle)", "name": "abTest_lp_spotify_gbb_0617", "bucketingStrategy": null, "variations": [{"id": "8381202806", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/ee4e0db99887b8f79de73dddfdc7ceb6f1a7ba9744a9ae86085f3f87db21b0de.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/f15a6d879c7b9370d946ac8c35555dce1df8e13ad2b926b3748ecee3b591fb17.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8J36Y.html?campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/2fb247727a4d430ec410cc29523389cd4fa98f12263b21e501e72cf74b14aa8c.js", "dependencies": [], "id": "D21294F9-6393-4E35-B4DF-3AC016BEF85B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/cc82b36f0eedc4931507e9a6786667c00a97e2ff71679b119164b1f3fe8d3112.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/17d5383515a428189e5a5d6008afa0651930e199eb6e580810ee20ebce96d1b5.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}], "name": "Control BAU BoC"}, {"id": "8392220302", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/68c581a0cf99ff76d026e3fcbed44762ef24e02b3897c1b31e97f3cf118dd761.js", "dependencies": [], "id": "25DC5C78-2D09-4F3B-981A-7D84810D3C43"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/423c370769985607a1e98c5c82a80ec4a29d0a1b92662243cac5c96aadc3814d.js", "dependencies": [], "id": "5E56DAB0-E622-483A-B23B-CAD26E269ED1"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6992450319", "8322614311"], "changes": null, "id": "8381313107", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Bundle] Digi Subs in Grace,[Cookie] GraceViewed does not exist,[Cookie] abTest does NOT exist", "name": "Subs | Digi In-grace | Interstitials | May 2017", "bucketingStrategy": null, "variations": [{"id": "8388432711", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/e01db1e9c3f1eb96593b8ee84388474a19ef49c0c29affc5e8e953e50a0e9aad.js", "dependencies": [], "id": "C8EA3E99-0E0B-4A00-AA69-C12829DFDFE1"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/242aaa3a2a52199f000eab2711fe732d6d6432f6b363dd8b829911e8005e3da2.js", "dependencies": [], "id": "791732C1-BB4D-4694-912B-B74071A90CAC"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | Digi In-grace | Welcome, Anchor | 666R8"}], "audienceIds": ["and", "8379916476", "8354152464", "8183220341"], "changes": null, "id": "8385456763", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT / Krux] All EDU: *all* segments except K12,[Cookie] abTest does NOT exist", "name": "Nons | EDU | BAU | June Journalists | US Geo | 2017/06/01", "bucketingStrategy": null, "variations": [{"id": "8402718047", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/32690eac048649a6ed9eff268c4e605a6e254ef1e99ee063d975d8ba565033d4.js", "dependencies": [], "id": "CD95D456-E144-4A6C-9972-25E4EB9535E9"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/e1a393cf5127012b224db6ef0bd471204f885d8eaeea8803258062333184a844.js", "dependencies": [], "id": "349D506A-1E57-475F-B102-EDD29471AF71"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/e545dde9dda01c0c92250b6e362c92f4f98a2b429df98c8cbde70ebf8f59cb06.js", "dependencies": [], "id": "8F57DB25-3369-424C-9732-2DAEF77B775F"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/b9c843bc7ecd7eeaa5fbe1a5e51ec15eaae0022fe7991bb79077c31007b68e34.js", "dependencies": [], "id": "9520BC6B-91B4-4F3C-BE70-0E5AFA2D73F8"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/cd0b04159299353e1f6340520c15302dbb7b533322b8331b343de1fcb1593c66.js", "dependencies": [], "id": "8EF8D657-24B0-43D4-AA49-F08774C8ECD6"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/0d6e4803c7fe816af5e0c6b73248124f24c7f45a1a298af7c036feb85a283b7c.js", "dependencies": [], "id": "8AF5D5E5-5667-4A16-90A7-04D6908124B2"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/edu/lp8R4RH.html?mktgrfr=gw_mob&campaignId=6UHF8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "71D46556-C35A-4638-855A-41736CC686D9"}]}], "name": "Journalists on the ground 50% EDU 6Q8Y8 | 6Q8YF | 6Q8YJ | 6Q8YL | 6Q8YR | 6Q8YW | 6Q8YY | 6Q946"}], "audienceIds": ["and", "7814230912", "6992450319", "6679643984", "8183220341"], "changes": null, "id": "8400924480", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] WW ex India, US,[Cookie] abTest does NOT exist", "name": "Nons | INYT | BAU | Truth - 50% Off June | WW ex India Geo", "bucketingStrategy": null, "variations": [{"id": "8405003949", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/f510d04bb6345402f2b06d12b785a620ac4856f20843daf2999c48b6e44a5d25.js", "dependencies": [], "id": "A170FAA0-BC74-445D-8DEF-33D4BF79F1A6"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/2f48324fd8eb95fa0da25a45fdb4a3d169b93d3835355d34c9e2e36d5465acc2.js", "dependencies": [], "id": "48311EEF-5E1F-49F1-A759-CB184174E785"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/6526951952b52a38b33afe87baf3d1eba253084ed7cc703712fb02ad15785fd1.js", "dependencies": [], "id": "A75D1CE2-9866-4B94-AAAE-221D4142190E"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/18b77e69784a56396d2d951079031a88a16d210574fd59e598732fc3be00aeeb.js", "dependencies": [], "id": "35073315-7319-445C-9EE3-CA6B62D575C1"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/cfc765d5c48bd0dba77693e84a00c04ba00937145d4af827816dc30ddcf5e71b.js", "dependencies": [], "id": "98D5206F-151C-43BF-AEB7-79347D01FE27"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/05bf25fdfd41d384385986a682bafe7e0788f430908e5b316a7ece5defe0b76f.js", "dependencies": [], "id": "2A76A807-EF62-4764-9B3D-099548C519D3"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp87JWF.html?src=optINYT&campaignId=4KKUL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "3C341035-4F72-4C23-AF31-58D82ED9C6AA"}]}], "name": "INYT Truth 50% 4LFJR 67FHY 4KKUL"}], "audienceIds": ["and", "6992450319", "8302021295", "8183220341"], "changes": null, "id": "8411153709", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT / Krux] All EDU: *all* segments except K12,[Geo] WW ex US,[Cookie] abTest does NOT exist", "name": "Nons | INTL EDU | BAU | June Journalists | WW Geo | 2017-06-01", "bucketingStrategy": null, "variations": [{"id": "8406072687", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/d2d90753406fe40e161ba38231c49dea170f74f78227305084a48aaecbf6be60.js", "dependencies": [], "id": "CD95D456-E144-4A6C-9972-25E4EB9535E9"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/1b087703a2574b0f2ec99ba112052adefb9bfce707412651986106430db55484.js", "dependencies": [], "id": "349D506A-1E57-475F-B102-EDD29471AF71"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/c53a6b42720445697c8168192bd05b62312c3c132fdb644e8ae44c418f473bbf.js", "dependencies": [], "id": "8F57DB25-3369-424C-9732-2DAEF77B775F"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/c2571c5afd740ea0099610591b3033ab04ced12c03209cb28d1e19acda0e1809.js", "dependencies": [], "id": "9520BC6B-91B4-4F3C-BE70-0E5AFA2D73F8"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/5a2a4d00b383c3b50cf505fd95ee66492320e97c0eef64127be0a5a7143c9a96.js", "dependencies": [], "id": "8EF8D657-24B0-43D4-AA49-F08774C8ECD6"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/56e09b5425ac3f24b7abd086dd66b994622f387a3ff02805b2aaf6dad258a995.js", "dependencies": [], "id": "8AF5D5E5-5667-4A16-90A7-04D6908124B2"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/edu/lp8LXQ6.html?mktgrfr=gw_mob&campaignId=6RQR8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "FC1E2E71-0FF0-4871-987A-BA3067A2D433"}]}], "name": "CRS-16112 Journalists $1/wk INTL EDU 6Q69R, 6Q69W, 6Q69Y, 6Q6F6, 6Q6F8, 6Q6FF, 6Q6FJ, 6Q6FL"}], "audienceIds": ["and", "6992450319", "6679643984", "7209740780", "8183220341"], "changes": null, "id": "8411196239", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8400015286", "endOfRange": 5000}, {"entityId": "8423451480", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Krux] All Formers (Digi and HD)", "name": "Nons | USGM | Formers Winback | BAU Nonsale BOC/Journalists | US Geo | 2017-06-07", "bucketingStrategy": null, "variations": [{"id": "8400015286", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/9ac3880513324484ee7183b3e964a8fbd4529c45d445952da515b1afbc5c7120.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/758474c79cf775f8029f3a0320d7400bfb8b07f1826112fb3489f00688071295.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp874QY.html?campaignId=6UQFW", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/1098e9387b328d0ae2d846eaf01f7714cd6793f4978bdb1900ec869fa9feb212.js", "dependencies": [], "id": "37DBF9B0-988B-4AD4-8AAF-1642A82FBD44"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a5a7a7533418260217b0ad33e66c951d6ed04a0e61d50687b8cbd22d7c0894b6.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/4ed697ee9ac72fefb14c6396a3113c7afdb0aa0fb8b459209f93f29f854fadee.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/0b56613aa75e39c193ba0cc7038f692ef6be82bf618881691a0fc87d379764af.js", "dependencies": [], "id": "51E2A707-2BE3-496A-B27B-1DF1BBB36CDE"}]}], "name": "Journalists - 6UQ8L 6UQ8R 6UQ8W 6UQ8Y 6UQ96 6UQ98 6UQ9F 6UQ9J 6UQ9L 6UQHF 6UQ9R 6UQ9W 6UQ9Y 6UQF6 6UQF8 6UQFJ 6UQFL 6UQFR 6UQFW"}, {"id": "8423451480", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/bb49cf8fb844ad16089f017a16bc8d6a00a06f1c33801655ac5f26d810426a02.js", "dependencies": [], "id": "EE6B197A-DF68-45DA-B6F5-905AC89DF3EB"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/42e3ee7005279a2f7d736cd5f6347ad057047cedd262b9e984698038a57cd9ff.js", "dependencies": [], "id": "39BC1F84-3555-4EE2-8D5B-7BD4D99B9177"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/e5eab33930061c6006212c90b7483bd50768db4573bb4ea94e1defdee5711c26.js", "dependencies": [], "id": "54E854DE-E6CC-461B-A140-11D21DC063B4"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/a3b83c03b67dab00ae566afa650aead1403d807bee031d3987ed2ed26c2396fe.js", "dependencies": [], "id": "ADC10B89-4EFB-4EC8-A8DC-A9F13A33C291"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/e1cf794c765ccf6dc20a4e9524fc1fd0f22ff14a482a6bda9c2db78a55acf335.js", "dependencies": [], "id": "100BECD4-DEB6-48C2-91D3-10ECFC18A8E7"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/ca417f2d782dc409818bb947a98c322b62425bab22fecc786b97e9da1ed8c5c5.js", "dependencies": [], "id": "BE43A842-F59E-443A-9B84-BC527E2D4554"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp867LW.html?campaignId=6UQ8J", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "4F7EEDAB-0B48-4C4B-B3F4-C6F14CCDEF14"}]}], "name": "BoC 40% off for one year -6UQ68 | 6UQ6F | 6UQ8J"}], "audienceIds": ["and", "7814230912", "6992450319", "8183220341", "8421381989"], "changes": null, "id": "8413171281", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8407657111", "endOfRange": 5000}, {"entityId": "8409792046", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] - abTest = wm_open_access_usgm_0617", "name": "abTest_wm_open_access_usgm_0617", "bucketingStrategy": null, "variations": [{"id": "8407657111", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/8fcfc46850dc9abae1a2eba076f9dab5eb29908707ff21166a3beff78840f00e.js", "dependencies": [], "id": "5700AE54-8BC1-4506-ADA2-AF3EFABC40CC"}, {"src": "/actions/8fcfc46850dc9abae1a2eba076f9dab5eb29908707ff21166a3beff78840f00e.js", "dependencies": ["5700AE54-8BC1-4506-ADA2-AF3EFABC40CC"], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/d1b7f8b4fd78a920ad73bea5da53c9648a0e2512fa4e5f24c8d1ed07781a9647.js", "dependencies": [], "id": "CCE5F495-5BF4-4315-A69C-1E320F6AA1D2"}, {"src": "/actions/d1b7f8b4fd78a920ad73bea5da53c9648a0e2512fa4e5f24c8d1ed07781a9647.js", "dependencies": ["CCE5F495-5BF4-4315-A69C-1E320F6AA1D2"], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8J36Y.html?campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/8c6e651bb5e42e598ebb65e726f66e20bd7a76e09decd2ca93d0160979e4393a.js", "dependencies": [], "id": "2A281E32-02AD-45D7-A122-F6A623F9C647"}, {"src": "/actions/8c6e651bb5e42e598ebb65e726f66e20bd7a76e09decd2ca93d0160979e4393a.js", "dependencies": ["2A281E32-02AD-45D7-A122-F6A623F9C647"], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/26cb471ab486a720a9fe610712b6d2623de6df5d7366b1704cdae24c3416ba76.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/cb4da8f8c875b642c8d62bced8fdf410e68519486850045f08b7133a8cdfaf2a.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}], "name": "Control -One Subscription. Endless Discovery. BoC - 6KY7W | 6KY86 | 6KY88 | 6KY8F | 6KY8J | 6KY66 | 6KY68 | 6KY6F | 6KY6J | 6KY8L | 6KY8R | 6KY8W | 6KY96 | 6KY98 | 6KYF6 | 6KYF8 | 6KYFF | 6L7Q6 | 6U9QW | 6U9QY | 6U9R6 | 6U9R8"}, {"id": "8409792046", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/fa10c4ba80b64891fc7c015345a5dfccfb2c840dfa5902d7d9c4d16b14ec8c82.js", "dependencies": [], "id": "6E64C3F1-14CE-4499-B021-1CAB563B0202"}, {"src": "/actions/fa10c4ba80b64891fc7c015345a5dfccfb2c840dfa5902d7d9c4d16b14ec8c82.js", "dependencies": ["6E64C3F1-14CE-4499-B021-1CAB563B0202"], "id": "7F56FC22-B4E7-4C2C-BBB0-7B1FC3145EE5"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/0e6962d51a7f57e5dfecbebbdcf2c20d3b5ee53e66307ee757e1ee2716ab2cbb.js", "dependencies": [], "id": "6C7AD271-663D-48C8-8065-BE80D16716E7"}, {"src": "/actions/0e6962d51a7f57e5dfecbebbdcf2c20d3b5ee53e66307ee757e1ee2716ab2cbb.js", "dependencies": ["6C7AD271-663D-48C8-8065-BE80D16716E7"], "id": "D7B3622D-7E19-4162-B31E-E0AFB9A8DA0C"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/40ae40fa092383b8a93491326679015c685449e2eacd6d6bf12c0f8eba241537.js", "dependencies": [], "id": "18AB6BA1-3BDB-464A-A4F0-B49E7F09BDF8"}, {"src": "/actions/40ae40fa092383b8a93491326679015c685449e2eacd6d6bf12c0f8eba241537.js", "dependencies": ["18AB6BA1-3BDB-464A-A4F0-B49E7F09BDF8"], "id": "94530293-104C-4C7B-B788-0A6366F8E5BE"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/b62cb09bef24ae6f6d1044512fb3401b56ba3443f9f2ae7faa5cc30b1eeffb4b.js", "dependencies": [], "id": "42C9A3CB-B2CB-42A5-BCC2-E61DB8DEC9DF"}, {"src": "/actions/b62cb09bef24ae6f6d1044512fb3401b56ba3443f9f2ae7faa5cc30b1eeffb4b.js", "dependencies": ["42C9A3CB-B2CB-42A5-BCC2-E61DB8DEC9DF"], "id": "0C24C8F3-346C-42A8-880C-1992ED89BBC8"}]}, {"viewId": "8187250053", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6992450319", "8384840906"], "changes": null, "id": "8413400123", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Keyword] Vi_Demo_DJP", "name": "TESTING | USGM | June BAU BoC | Live Demos for Project Vi | ad-keywords=Vi_Demo_DJP", "bucketingStrategy": null, "variations": [{"id": "8429260806", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/f6a49620040404e095f01e16874eed1c7816cc1803e783b6428b2df09150828b.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/4ce094b0b9e8500ca6b4416fabf98971c3257bcb8d3a65d8f1d6b84400a27fcb.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8J36Y.html?campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/48d87ef82f544e423cdf525c7b0f83d24d1e67d92774b796ad1f83d1cdacbe62.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/2bd8bce1974948e70dd4ef6a67ded72bdf666fd02ca8c6d022d87778431bdf20.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/ff9f130e054b94eb808f784b5865119bb8bed27da0a29ca2968e775adf467c62.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}], "name": "Blue Breadth of Coverage - Launched 2017-06-08 DJP"}], "audienceIds": ["and", "8426551260"], "changes": null, "id": "8414275912", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] welcomeViewed does not exist,[WAT} JKR", "name": "Subs | Welcome Messaging for New JKR Subs | Interstitials | 2017-06-09", "bucketingStrategy": null, "variations": [{"id": "8426652157", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/b25eefacdb1f37374502ba1fb71fab889cc72680c5c74405f5e8e16c49406f96.js", "dependencies": [], "id": "C8EA3E99-0E0B-4A00-AA69-C12829DFDFE1"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/b331a7c0bb9d9037dac1270d2a475c87df0111c4707e3569568e5893e47eddff.js", "dependencies": [], "id": "791732C1-BB4D-4694-912B-B74071A90CAC"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "MARO-64 Subs | Welcome, JKR | WelcomeAd, AnchorAd"}], "audienceIds": ["and", "8428263414", "8412826208"], "changes": null, "id": "8427173595", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8430091262", "endOfRange": 3334}, {"entityId": "8440030322", "endOfRange": 6667}, {"entityId": "8441470350", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[Whole Meter + Landing Page] 8HYKU,[Cookie] abTest does NOT exist", "name": "abtest_lp_scribd_cooking_bundle_0617", "bucketingStrategy": null, "variations": [{"id": "8430091262", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/aa8bd5ebc6ddbbcae64eef0f7761cf404a81fcef6123d4a30cce0c3006e5d0da.js", "dependencies": [], "id": "C739C2E8-DCCF-41A1-8CF1-3ACDA3C1C7F8"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/38c3dd5808a43d0f86f798b22824f7de1feb46373bb397ba4fbbcc1d6302079c.js", "dependencies": [], "id": "EF3DAC0F-66B1-429B-959D-BA2A4210A492"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/6e7ae64948eb2fe7dd45ab0d1ad15f6305fae523cff47599edaa20301330bbcf.js", "dependencies": [], "id": "98883464-0C39-4101-B701-D2C19B2DA375"}]}], "name": "Control"}, {"id": "8440030322", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/33c91566ced1b89df9bb702814b5c7e2abfdf7ae294d0cc375b936b71dc53c28.js", "dependencies": [], "id": "AFC704A3-CB1F-4CDD-9CE6-C1FC815A5BC6"}, {"src": "/actions/33c91566ced1b89df9bb702814b5c7e2abfdf7ae294d0cc375b936b71dc53c28.js", "dependencies": ["AFC704A3-CB1F-4CDD-9CE6-C1FC815A5BC6"], "id": "EF4507A4-0547-451F-8B0E-873ED68DFF30"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/d541c68ab2f8272fd2acc6170e5ffbf251fabfd328bd2415a475477b8c9938ca.js", "dependencies": [], "id": "F2DE17E2-CC75-4C45-91B9-E4AFEFB08D21"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a31d30b4e3ce236ef985c827c285ce9ed6e5e0d9d8f8d6e58cb06306816fbc00.js", "dependencies": [], "id": "66A4553F-C18D-4902-BCAF-BD7A80F39F3D"}]}], "name": "Variation #1"}, {"id": "8441470350", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/12e84eb3915602e5375b65c85d7dd4ab566e1b19f6fba8c64cfa661f5cde7741.js", "dependencies": [], "id": "A7E3F160-5287-4277-9786-74D796573BED"}, {"src": "/actions/12e84eb3915602e5375b65c85d7dd4ab566e1b19f6fba8c64cfa661f5cde7741.js", "dependencies": ["A7E3F160-5287-4277-9786-74D796573BED"], "id": "9B926A7D-6B78-4BD8-B8C5-D059F9EB1A73"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/3dba4bb782803bc7b3037aea75313fc6f597f4de83ce24c41c8b7118e6da1232.js", "dependencies": [], "id": "BCA46DA4-51A8-468F-B8B6-D0B3AA1A2CE9"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/3e5bee5a3d1f3172d9c205e56705b6867120e697bfaf2852b9aa42cf64bf45cc.js", "dependencies": [], "id": "5F8E4AD2-8B89-4C76-96A0-8A1760D47EF5"}]}], "name": "Variation #2"}, {"id": "8444270589", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/e7610842cc4a4b62cc8554288f9a72fd139343f4e9fd30806efb639bb1ec9da3.js", "dependencies": [], "id": "322881CF-EA55-47E9-B05D-E2E1D99B236A"}, {"src": "/actions/e7610842cc4a4b62cc8554288f9a72fd139343f4e9fd30806efb639bb1ec9da3.js", "dependencies": ["322881CF-EA55-47E9-B05D-E2E1D99B236A"], "id": "E54D58B6-8972-462E-BB7D-2BEF7D8ED52D"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/7e7e9aa23e2b73ede4253af0406b2a0107cefce2a6a6ec8fe95dfde9bf621496.js", "dependencies": [], "id": "3E54DC64-E8D3-4EC3-8106-348945997BA5"}, {"src": "/actions/7e7e9aa23e2b73ede4253af0406b2a0107cefce2a6a6ec8fe95dfde9bf621496.js", "dependencies": ["3E54DC64-E8D3-4EC3-8106-348945997BA5"], "id": "8619C2C4-C4C3-4BE0-9633-DD51F7979B38"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/80df0efde1d8ddc494d28f40681dda2c5fd24e4596dedc1ea79027dcfdc4b0d6.js", "dependencies": [], "id": "5A5095E3-85A7-47CE-9B95-F025E664F473"}, {"src": "/actions/80df0efde1d8ddc494d28f40681dda2c5fd24e4596dedc1ea79027dcfdc4b0d6.js", "dependencies": ["5A5095E3-85A7-47CE-9B95-F025E664F473"], "id": "CABE829A-4D75-4316-8C56-0FD86E2754B6"}]}], "name": "Variation #3"}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "8438541808", "8183220341"], "changes": null, "id": "8433611239", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "Meter views less than 2,[Geo] Australia,[WAT] Exclude All EDU segments,[Cookie] abTest=paywall_inyt_au_0217", "name": "abTest_anchor_paywall_inyt_au_0217_rollout_QA", "bucketingStrategy": null, "variations": [{"id": "8446468446", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/e589b846c9877655b32771988783a160de690f10633d12069fd40c0df890dda2.js", "dependencies": [], "id": "4BDFD116-C2E3-4E2C-9C5C-B88DB4D45F71"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8287944678", "7798550316", "8413422098", "8452510015"], "changes": null, "id": "8445157318", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,abTest=defaultbau", "name": "USGM | Fallback/Default for Desktop | Growl | Gateway", "bucketingStrategy": null, "variations": [{"id": "8441710363", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/0b4e28d395a42bb7ef96d6d1471904e7408af03890f2f6e76d17a599638fcb70.js", "dependencies": [], "id": "3B1F776E-EF16-4D6C-A1AD-2A7C8EB16BD9"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/5b7ebf9e5933bcc1979604c22486434832c696df9bbd74c807985eedb62ef1a8.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}], "name": "One Subscription. Endless Discovery. BoC - growl, gateway"}], "audienceIds": ["and", "7814230912", "6992450319", "8405565879"], "changes": null, "id": "8447590384", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist", "name": "Nons | USGM | July BAU (GW - 30% off) | 2017-07-05", "bucketingStrategy": null, "variations": [{"id": "8441851098", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/85b4ad9a6850702be4b9640dd41f7d6b43e475e6c1480179a781d8f413d7f242.js", "dependencies": [], "id": "389265F5-4F81-4963-AF39-104C0F4B2CB9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/b7f4bc6773d857a5a455cbd04131b5a9e663229484539e4725ec082a25548bb3.js", "dependencies": [], "id": "96664DCC-3546-4917-9265-C6D2D51FD889"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/9688c6fa50f7e3849331784f3b8fe7a2ec5e315d94ed27b908cfd600a4964ce8.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/dc5a37818ba8b7f2b2c93b7487a9001e442b838be6a4710651297f1a2903f2c4.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/caaf838d94f7cf90bfcc32452ff1247ffe1155dd869a367748e7cf58a1c4e71f.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}], "name": "Journalists that look beyond face value. - 67LXL 67LWJ 67LWR 6KY7W 6KY86 6KY88 6KY8F 6KY8J 6KY66 6KY68 6KY6F 6KY6J 6KY8L 6KY8R 6KY8W 6KY96 6KY98 6KYF6 6KYF8 6KYFF 6L7Q6"}], "audienceIds": ["and", "7814230912", "6992450319", "8183220341"], "changes": null, "id": "8448553144", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Subscriber Type] Subs ,[Geo] WW ex US", "name": "Subs | All Bar1s | WW Geo - 2017-06-26", "bucketingStrategy": "impression", "variations": [{"id": "8442656776", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/5af7b55999ad5fd06b494d54a35e776baedd669abea7aea6853d39bd42f112ae.js", "dependencies": [], "id": "990AB303-9B21-4172-8859-34F0FE74AE17"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Bar1 | Crossword (UPDATE: asset was trafficked in Interstitial slot until 7/13/17)"}], "audienceIds": ["and", "8183220341", "6696333431", "7209740780"], "changes": null, "id": "8448605360", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,abTest=inyt_july1", "name": "Nons | INYT | July \"Why campaign\" | WW Europe ONLY ex US Geo | 2017-07-06 Testing", "bucketingStrategy": null, "variations": [{"id": "8457740636", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/0e0e7522caede389e4622815a25fbaaa0812f36352e64ca8349a62f6ae0decce.js", "dependencies": [], "id": "D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"}, {"src": "/actions/0e0e7522caede389e4622815a25fbaaa0812f36352e64ca8349a62f6ae0decce.js", "dependencies": ["D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/67d1ced626bf7268a83118a57e3b05b3f9776c7fca30a5abf5718de312a8c08f.js", "dependencies": [], "id": "695FE12F-5874-451B-8DBE-F396019E0B0B"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "260CF357-14A2-4A5E-A7BE-CD09F682D3DB", "value": function($){// 051817 Gateway - Meter 2.0~208123
// May Journalist Sale 2017
(function (global) {
    "use strict";

    var $;

    // -----------------------------------------
    // ------      Select NYT4/NYT5       ------

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp');
        var nytApps = { 'nyt-v5': true, 'blogs': true };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }

    if (isNyt5()) {
        require(['foundation/main'], function () {
            $ = require('jquery/nyt');
            run($);
        });
    } else {
        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        run($);
    }

    var gatewayData = {


        campaignId: [{
            selector: '.tab--ada',
            params: {
                campaignId: '6RRFR'
            }
        }, {
            selector: '.tab--insider',
            params: {
                campaignId: '6RRFW'
            }
        }, {
            selector: '.tab--hd',
            params: {
                campaignId: '6RRFY'
            }
        }, {
            selector: '#more-subscription-options, #faq-learn-more',
            params: {
                campaignId: '6RRH6'
            }
        }]
    };

    function run($) {

        var userLoggedIn;
        var userInfo = window.NYToptly.userInfo;

        // --new - detecting if user is logged in

        if (userInfo.regi_id === 0) {
            userLoggedIn = false;
        }
        else {
            userLoggedIn = true;
            $('html').addClass('user-logged-in');
        }

        //

        // --new - Optimizely targeting meter~208123
        var meterCount = window.NYToptly.audience("meter_views");
        // --

        var appendToHref = function (codes) {            
            var i;
            var links = document.querySelectorAll('gatewayCreative a');              

            var updateLink = function () {
                this.href = this.href.replace("campaignId=", "campaignId=" + codes[i].params.campaignId);
            };
            if (typeof codes !== 'object' || typeof codes.length === 'undefined') {
                throw new Error('Parameter should be an array');
            }
            for (i = 0; i < codes.length; i++) {
                $(codes[i].selector).each(updateLink);
            }
        };

        $('body').addClass('noScroll');

        var campaignIdData = gatewayData.campaignId;

        var container = $('.meter-asset-wrapper');


        var loginWrapper = $('.login-wrapper');
        var headerTitle = $('.header-title');
        var loginWrapperLink = loginWrapper.find('a');
        var closeX = $('.closeAsset');
        var wholeHeader = $('.inter-header');
        var botBundlesHeader = $('.bot-bundles-section--header');
        var downButton = $('.down-button');
        var scrollCntnr = $('.scroll-container');
        var scrollToMarker = $('#scroll-to');
        var scrollToHeader = $('#header_section');

        var topScrollOffset = $(window).height() / 11;

        $(window).resize(function () {
            topScrollOffset = $(window).height() / 11;
        });

        $(function () {
            $('a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('.scroll-container').animate({
                            scrollTop: target.offset().top - topScrollOffset
                        }, 200);
                        return false;
                    }
                }
            });
        });

        var scrolled = false;
        var scrollContainer = $('.scroll-container');        

        scrollContainer.scroll(function () {

            function setScrollClass() {
                $('.inter-header').css('background-color','#000');                
            }

            function removedScrollClass() {
                $('.inter-header').css('background-color','initial');                
            }


            if (scrollContainer.scrollTop() > 0 && scrolled === false ) {
                scrolled = true;
                setScrollClass();
            } else if (scrollContainer.scrollTop() === 0) {
                scrolled = false;
                removedScrollClass();
            }
        });

        // Remove click handlers
        $(".bundle_tab").off("click");

        // appendToHref(campaignIdData);

        container.show();
    }

})(window);
}}, {"src": "/actions/49261b652fa2982c843b6d4a2c5a2875340229f74712f6dbf17df08c46ca3786.js", "dependencies": ["260CF357-14A2-4A5E-A7BE-CD09F682D3DB"], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/1fc728756779794e5cd45bb0379a277b3e224798898551346042804032a63028.js", "dependencies": [], "id": "3CAC369F-B4BC-4525-835D-B764690EE38C"}, {"src": "/actions/1fc728756779794e5cd45bb0379a277b3e224798898551346042804032a63028.js", "dependencies": ["3CAC369F-B4BC-4525-835D-B764690EE38C"], "id": "F43ED3F2-ACB1-4E0F-9223-5F36C6C153D6"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/237c4e4e2e0f23674a9241cc70d978acc897b1b4be6e303847b8ac5459334b73.js", "dependencies": [], "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB"}, {"src": "/actions/237c4e4e2e0f23674a9241cc70d978acc897b1b4be6e303847b8ac5459334b73.js", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8XKUR.html?campaignId=6RRH8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}], "name": "Nons | WELCOME AD  | 6W696"}], "audienceIds": ["and", "6992450319", "8461310777"], "changes": null, "id": "8454751051", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest=anchortest", "name": "anchor TESTING", "bucketingStrategy": null, "variations": [{"id": "8455786592", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/6baef23d94cf1a919a1f13326f3f4e17c715d6ac317ff9cf9e8a97fc6565551c.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/544f048d69b9704e880d2a09868150ea195d8c47ac0fe3dd0377e71b95884fb5.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp874QY.html?campaignId=6UQFW", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/1ea1414cee79e1600fd48a65d23bc20a958a6ac506be004219d9b2bbf04a69ec.js", "dependencies": [], "id": "37DBF9B0-988B-4AD4-8AAF-1642A82FBD44"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a5a7a7533418260217b0ad33e66c951d6ed04a0e61d50687b8cbd22d7c0894b6.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/4ed697ee9ac72fefb14c6396a3113c7afdb0aa0fb8b459209f93f29f854fadee.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/fc25cec4c3ba58f86eaf34bd7a1314ead4075b598c3f6262227b26529ecb11a2.js", "dependencies": [], "id": "51E2A707-2BE3-496A-B27B-1DF1BBB36CDE"}]}], "name": "Journalists - 6UQ8L 6UQ8R 6UQ8W 6UQ8Y 6UQ96 6UQ98 6UQ9F 6UQ9J 6UQ9L 6UQHF 6UQ9R 6UQ9W 6UQ9Y 6UQF6 6UQF8 6UQFJ 6UQFL 6UQFR 6UQFW"}], "audienceIds": ["and", "7814230912", "6992450319", "8396871406"], "changes": null, "id": "8457897738", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,abTest=inyt_july1", "name": "Nons | INYT | July \"Why campaign\" | WW ex US, EUR Geo | 2017-07-06 Testing", "bucketingStrategy": null, "variations": [{"id": "8460851009", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/2c6b2a0ea8db70a4dbbc4a7b87254e38c48c7bd1fb338fb9d93b1c608b8cccb5.js", "dependencies": [], "id": "D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"}, {"src": "/actions/2c6b2a0ea8db70a4dbbc4a7b87254e38c48c7bd1fb338fb9d93b1c608b8cccb5.js", "dependencies": ["D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/ccd56deee8ffc7d4efd3f43302813734c20cdcb374876a96cfa6ce9951d8bc14.js", "dependencies": [], "id": "695FE12F-5874-451B-8DBE-F396019E0B0B"}, {"src": "/actions/ccd56deee8ffc7d4efd3f43302813734c20cdcb374876a96cfa6ce9951d8bc14.js", "dependencies": ["695FE12F-5874-451B-8DBE-F396019E0B0B"], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "260CF357-14A2-4A5E-A7BE-CD09F682D3DB", "value": function($){// 051817 Gateway - Meter 2.0~208123
// May Journalist Sale 2017
(function (global) {
    "use strict";

    var $;

    // -----------------------------------------
    // ------      Select NYT4/NYT5       ------

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp');
        var nytApps = { 'nyt-v5': true, 'blogs': true };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }

    if (isNyt5()) {
        require(['foundation/main'], function () {
            $ = require('jquery/nyt');
            run($);
        });
    } else {
        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        run($);
    }

    var gatewayData = {


        campaignId: [{
            selector: '.tab--ada',
            params: {
                campaignId: '6RRFR'
            }
        }, {
            selector: '.tab--insider',
            params: {
                campaignId: '6RRFW'
            }
        }, {
            selector: '.tab--hd',
            params: {
                campaignId: '6RRFY'
            }
        }, {
            selector: '#more-subscription-options, #faq-learn-more',
            params: {
                campaignId: '6RRH6'
            }
        }]
    };

    function run($) {

        var userLoggedIn;
        var userInfo = window.NYToptly.userInfo;

        // --new - detecting if user is logged in

        if (userInfo.regi_id === 0) {
            userLoggedIn = false;
        }
        else {
            userLoggedIn = true;
            $('html').addClass('user-logged-in');
        }

        //

        // --new - Optimizely targeting meter~208123
        var meterCount = window.NYToptly.audience("meter_views");
        // --

        var appendToHref = function (codes) {            
            var i;
            var links = document.querySelectorAll('gatewayCreative a');              

            var updateLink = function () {
                this.href = this.href.replace("campaignId=", "campaignId=" + codes[i].params.campaignId);
            };
            if (typeof codes !== 'object' || typeof codes.length === 'undefined') {
                throw new Error('Parameter should be an array');
            }
            for (i = 0; i < codes.length; i++) {
                $(codes[i].selector).each(updateLink);
            }
        };

        $('body').addClass('noScroll');

        var campaignIdData = gatewayData.campaignId;

        var container = $('.meter-asset-wrapper');


        var loginWrapper = $('.login-wrapper');
        var headerTitle = $('.header-title');
        var loginWrapperLink = loginWrapper.find('a');
        var closeX = $('.closeAsset');
        var wholeHeader = $('.inter-header');
        var botBundlesHeader = $('.bot-bundles-section--header');
        var downButton = $('.down-button');
        var scrollCntnr = $('.scroll-container');
        var scrollToMarker = $('#scroll-to');
        var scrollToHeader = $('#header_section');

        var topScrollOffset = $(window).height() / 11;

        $(window).resize(function () {
            topScrollOffset = $(window).height() / 11;
        });

        $(function () {
            $('a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('.scroll-container').animate({
                            scrollTop: target.offset().top - topScrollOffset
                        }, 200);
                        return false;
                    }
                }
            });
        });

        var scrolled = false;
        var scrollContainer = $('.scroll-container');        

        scrollContainer.scroll(function () {

            function setScrollClass() {
                $('.inter-header').css('background-color','#000');                
            }

            function removedScrollClass() {
                $('.inter-header').css('background-color','initial');                
            }


            if (scrollContainer.scrollTop() > 0 && scrolled === false ) {
                scrolled = true;
                setScrollClass();
            } else if (scrollContainer.scrollTop() === 0) {
                scrolled = false;
                removedScrollClass();
            }
        });

        // Remove click handlers
        $(".bundle_tab").off("click");

        // appendToHref(campaignIdData);

        container.show();
    }

})(window);
}}, {"src": "/actions/0b1f64fa3fa6bb8ce8c288c5ce4c62c198b1de9952124a15196b5e774d9960b6.js", "dependencies": ["260CF357-14A2-4A5E-A7BE-CD09F682D3DB"], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/471f649eddb9399af23dd36c0afd5f6ca32eee1bce3e4432a3c80cd2dd035652.js", "dependencies": [], "id": "3CAC369F-B4BC-4525-835D-B764690EE38C"}, {"src": "/actions/471f649eddb9399af23dd36c0afd5f6ca32eee1bce3e4432a3c80cd2dd035652.js", "dependencies": ["3CAC369F-B4BC-4525-835D-B764690EE38C"], "id": "F43ED3F2-ACB1-4E0F-9223-5F36C6C153D6"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/6ff4bfb681ae213da5a532260459f026ade64dbb6cb88143fd9855972bc2de00.js", "dependencies": [], "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB"}, {"src": "/actions/6ff4bfb681ae213da5a532260459f026ade64dbb6cb88143fd9855972bc2de00.js", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8XKUR.html?campaignId=6RRH8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}], "name": "Nons | WELCOME AD  | 6W7QR"}], "audienceIds": ["and", "6992450319", "8461310777"], "changes": null, "id": "8463230295", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8461408459", "endOfRange": 5000}, {"entityId": "8478670042", "endOfRange": 7500}, {"entityId": "8473941857", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist", "name": "Subs | All Bar1s | US Geo - 2017-07-11", "bucketingStrategy": "impression", "variations": [{"id": "8461408459", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/528725f17021136c805c898b5b54517757daa0d41396a74bbc5c25314dc1d797.js", "dependencies": [], "id": "BCEB7048-22BE-4CFF-BFA3-0CD85E187BBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Bar1 | Crossword: Puzzle over\u2026"}, {"id": "8478670042", "actions": [{"viewId": "4129021553", "changes": [{"name": "Bar1", "config": {"custom_js": "", "nytID": "Subs_Bar1", "full_html": "<!--0717_Gifting Bar1(Dark Grey) OPTLY -->\n<span class=\"adxInfo mktInfo\" style=\"display:none;\">\n    campaign: bar1_subs_USGM_GIFTING, July 2017\n    creative: Bar1, \n    source: optimizely, RTF\n</span>\n<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n        <ul class=\"user-subscriptions-menu\">\n            <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\"><a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" data-content-collection=\"\" data-content-placement=\"1\" style=\"display:none\">GIVE THE TIMES</a>\n            <div id=\"hovercard\" class=\"font-smoothing\">\n            <a id=\"nyt-button-sub\" href=\"%%CLICKTHRU2%%\" target=\"_blank\">\n                    <div id=\"bar1-body\">                        \n                       <image id=\"Tstore_bar1-logo\" width=\"180\" height=\"28\"  src=\"https://cdn.optimizely.com/img/3013110282/372b34bb60b14287bdc22474edc2340f.png\" alt=\"The New York Times\" border=\"0\"></image>\n                       <!--Placeholder for NYT logo <svg id=\"MayrefreshNonsubBar1-logo\" width=\"152\" height=\"26\" aria-label=\"The New York Times\">\n                            <image width=\"100%\" height=\"100%\" xlink:href=\"https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64-wht.svg\" src=\"//cdn.optimizely.com/img/3013110282/b5568a31e87c4256984a4754cb1072dc.png\" alt=\"The New York Times\" border=\"0\"></image>\n                        </svg>-->\n                  <div id=\"bar1-hed\">\n                             Informed. Insightful. <br> \n                             In the know.<br> \n                        </div>\n                  <div id=\"bar1-pico1\">Give a thoughful gift &#8212; a digital subscription to<br>\n                             The New York Times. Gift it today for 50% off.\n                  </div>\n                        <div id=\"bar1-cta\">GIVE</div>                \n                    </div>\n                </div></a>\n            </li>\n        </ul>\n    </div>\n    <a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">SUBSCRIBE NOW</a>", "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_meter_count_v2.js", "click4": "4", "click2": "https://www.nytimes.com/subscriptions/Multiproduct/lp8R34X.html?campaignId=6RHWW", "click3": "3", "css": "/* July 11 2017 */\n@import url(https://a1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.sub_small_hide {\n  display: none;\n}\n\n.NYT5Style .masthead-tools {\n  padding-right: 0;\n}\n\n.NYT5Style .masthead-tools #bar1-3panel {\n  display: inline;\n  vertical-align: top;\n  background-image: none;\n}\n\n#bar1-3panel {\n  border: 0;\n  position: relative;\n}\n\n#bar1-nyt5wrapper {\n  opacity: 0;\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n  -moz-box-sizing: border-box;\n  background-color: #6288A5;\n  border: 1px solid #4D7B9F;\n  border-radius: 3px;\n  color: #fff !important;\n  display: inline-block;\n  font-size: 1em;\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  padding: 7px 10px 6px;\n  text-transform: none;\n  text-decoration: none;\n}\n\n#bar1-3panel > a:hover {\n  background-color: #6288A5;\n  border: 1px solid #265E8B;\n  text-decoration: none;\n}\n\n.NYT4 #bar1-3panel {\n  display: none;\n}\n\n#hovercard {\n  width: 450px;\n  height: 330px;\n  max-width: 450px;\n  display: none;\n  margin-left: -360px;\n  z-index: 1000000152;\n  border: 0;\n  position: absolute;\n  left: 50%;\n  top: 30px;\n  text-align: left;\n  -webkit-box-shadow: 0 0 5px #888;\n  box-shadow: 0 0 5px #888;\n  white-space: normal;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  background-color: #333333;\n}\n\n#bar1-hed {\n  position: absolute;\n  top: 102px;\n  left: 38px;\n  font-family: cheltenham-normal-300, sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 41px;\n  line-height: 41px;\n  letter-spacing: -.05px;\n  color: #ffffff;\n  text-align: left;\n  width: 350px;\n}\n\n\n#bar1-pico1 {\n  position: absolute;\n  top: 194px;\n  left: 38px;\n  font-family: franklin-normal-500, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: -.55px;\n  text-align: left;\n  color: #cccccc;\n}  \n\n#Tstore_bar1-logo {\n  position: absolute;\n  top: 43px;\n  left: 38px;\n}\n\n#bar1-cta {\n  position: absolute;\n  bottom: 42px;\n  left: 38px;\n  font-family: franklin-normal-700, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  width: 56px;\n  height: 32px;\n  margin: 0 auto;\n  background: #ffffff;\n  font-size: 11px;\n  line-height: 31px;\n  padding: 0;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px;\n  color: #000000;\n}\n\n#bar1-cta a {\n  display: block;\n  height: 100%;\n  cursor: pointer;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  border: 0px;\n  padding-top: 9px;\n  padding-left: 0 !important;\n}\n\n#hovercard:after {\n  bottom: 100%;\n  left: 350px;\n  border: solid transparent;\n  content: \" \";\n  width: 0;\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #d7e67d;\n  border-width: 8px;\n  margin: 0;\n}\n\n#bar1-offer-msg {\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  position: absolute;\n  top: 270px;\n  left: 40px !important;\n  width: 150px;\n  height: 30px;\n  font-size: 11px;\n  line-height: 15px;\n  padding: 0;\n  text-decoration: none;\n  color: #363636;\n}\n\n.hover-subhead {\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: #333;\n  margin: 1px 0 0;\n  width: 170px;\n  position: absolute;\n  top: 10px;\n}\n\n#hovercard h3 a,\n#hovercard p a {\n  color: #000 !important;\n  text-decoration: none;\n  display: block;\n}\n\na.nyt-button-actions {\n  background: #f7f7f5;\n  color: #58595b !important;\n  width: 126px;\n  border-radius: 3px;\n  border: 1px solid #ccc !important;\n  text-transform: uppercase;\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 15px;\n  text-align: center;\n  padding: 6px 0;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 194px;\n  text-decoration: none !important;\n}\n\n#hovercard a.nyt-button-actions:hover {\n  background: #3c6791;\n  color: #fff !important;\n  text-decoration: none !important;\n}\n\n#hovercard a.nyt-button-actions.highlightButton:link,\n#hovercard a.nyt-button-actions.highlightButton:visited {\n  color: #fff !important;\n  background: #3c6791;\n  text-decoration: none !important;\n}\n\na.split-all-button {\n  background: #f3f3f4;\n  width: 345px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 30px;\n  margin: 0;\n  border: 1px solid #CCC;\n  text-align: center;\n  vertical-align: middle;\n}\n\n#hovercard a.split-all-button:hover {\n  background: #73afff;\n  color: #004276 !important;\n  text-decoration: underline !important;\n}\n\n.NYT5Style #hovercard {\n  top: 26px;\n}\n\n.ad.bar1-ad a.bar1-introtext,\n#memberTools .bar1-introtext,\n.masthead-tools a.bar1-introtext {\n  text-decoration: none;\n  color: #666;\n}\n\n.masthead-tools a.bar1-introtext {\n  position: relative;\n  margin-top: 2px;\n}\n\n.bar1-introtext {\n  padding-right: 5px;\n}\n\n.ad.bar1-ad .user-subscriptions-menu li a {\n  padding-left: 0;\n  border-left: 0;\n}\n\n#hovercard::after {\n  bottom: 100%;\n  left: 350px;\n  border: solid transparent;\n  content: \" \";\n  width: 0;\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #333333;\n  border-width: 8px;\n  margin: 0;\n}\n\n/* Chrome-only */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .NYT5Style #hovercard {\n    left: 50%;\n    top: 29px;\n  }\n  .NYT5Style #hovercard:before {\n    top: -14px;\n  }\n}\n\n/* Responsive\n@media screen and (max-width: 734px) {  \n    #bar1-3panel {\n        display: none\n    }\n    .ad.bar1-ad .user-subscriptions-group {\n        display: block\n    }\n} */\n/* Not on interactives */\n#interactiveABC #bar1-3panel {\n  display: none;\n}\n\n.viewport-medium .masthead.masthead-theme-standard.in-content.fixed-nav-subscribe .bar1-ad #nyt-button-sub {\n  background-color: transparent;\n  border-right: none;\n  text-transform: none;\n}\n\n/*# sourceMappingURL=bar1.css.map */\n\n", "click1": "https://www.nytimes.com/subscriptions/Multiproduct/lp8R34X.html?campaignId=6RHWW"}, "id": "2E89AA64-4C06-4C46-95B7-E21796A77018", "dependencies": [], "type": "widget", "widget_id": "bar1poc2_staging"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "4137230627", "changes": []}], "name": "Bar1 | Dark Grey  (6RHWW)"}, {"id": "8473941857", "actions": [{"viewId": "4129021553", "changes": [{"name": "Bar1", "config": {"custom_js": "", "nytID": "FILL_IN", "full_html": "<!--0717 T Store Bar1 OPTLY (Light grey) -->\n<span class=\"adxInfo mktInfo\" style=\"display:none;\">\n    campaign: Subs_bar1_USGM_GIFTING, July 2017\n    creative: Bar1, \n    source: optimizely, RTF\n</span>\n<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n        <ul class=\"user-subscriptions-menu\">\n            <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\"><a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" data-content-collection=\"\" data-content-placement=\"1\" style=\"display:none\">GIVE THE TIMES</a>\n            <div id=\"hovercard\" class=\"font-smoothing\">\n            <a id=\"nyt-button-sub\" href=\"%%CLICKTHRU2%%\" target=\"_blank\">\n                    <div id=\"bar1-body\">                        \n                       <image id=\"Tstore_bar1-logo\" width=\"180\" height=\"28\"  src=\"https://cdn.optimizely.com/img/3013110282/71f7479a4ec74347b773bed3c848c860.png\" alt=\"The New York Times\" border=\"0\"></image>\n                       <!--Placeholder for NYT logo <svg id=\"MayrefreshNonsubBar1-logo\" width=\"152\" height=\"26\" aria-label=\"The New York Times\">\n                            <image width=\"100%\" height=\"100%\" xlink:href=\"https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64-wht.svg\" src=\"//cdn.optimizely.com/img/3013110282/b5568a31e87c4256984a4754cb1072dc.png\" alt=\"The New York Times\" border=\"0\"></image>\n                        </svg>-->\n                  <div id=\"bar1-hed\">\n                             Informed. Insightful. <br> \n                             In the know.<br> \n                        </div>\n                  <div id=\"bar1-pico1\">Give a thoughful gift &#8212; a digital subscription to<br>\n                             The New York Times. Gift it today for 50% off.\n                  </div>\n                        <div id=\"bar1-cta\">GIVE</div>                \n                    </div>\n                </div></a>\n            </li>\n        </ul>\n    </div>\n    <a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">SUBSCRIBE NOW</a>", "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_meter_count_v2.js", "click4": "4", "click2": "https://www.nytimes.com/subscriptions/Multiproduct/lp8R34X.html?campaignId=6RHWR", "click3": "3", "css": "/* July 11a 2017 Light Grey*/\n@import url(https://a1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.sub_small_hide {\n  display: none;\n}\n\n.NYT5Style .masthead-tools {\n  padding-right: 0;\n}\n\n.NYT5Style .masthead-tools #bar1-3panel {\n  display: inline;\n  vertical-align: top;\n  background-image: none;\n}\n\n#bar1-3panel {\n  border: 0;\n  position: relative;\n}\n\n#bar1-nyt5wrapper {\n  opacity: 0;\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n  -moz-box-sizing: border-box;\n  background-color: #6288A5;\n  border: 1px solid #4D7B9F;\n  border-radius: 3px;\n  color: #fff !important;\n  display: inline-block;\n  font-size: 1em;\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  padding: 7px 10px 6px;\n  text-transform: none;\n  text-decoration: none;\n}\n\n#bar1-3panel > a:hover {\n  background-color: #6288A5;\n  border: 1px solid #265E8B;\n  text-decoration: none;\n}\n\n.NYT4 #bar1-3panel {\n  display: none;\n}\n\n#hovercard {\n  width: 450px;\n  height: 330px;\n  max-width: 450px;\n  display: none;\n  margin-left: -360px;\n  z-index: 1000000152;\n  border: 0;\n  position: absolute;\n  left: 50%;\n  top: 30px;\n  text-align: left;\n  -webkit-box-shadow: 0 0 5px #888;\n  box-shadow: 0 0 5px #888;\n  white-space: normal;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  background-color: #cccccc;\n}\n\n#bar1-hed {\n  position: absolute;\n  top: 102px;\n  left: 38px;\n  font-family: cheltenham-normal-300, sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 41px;\n  line-height: 41px;\n  letter-spacing: -.05px;\n  color: #000000;\n  text-align: left;\n  width: 350px;\n}\n\n\n#bar1-pico1 {\n  position: absolute;\n  top: 193px;\n  left: 38px;\n  font-family: franklin-normal-500, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: -.55px;\n  text-align: left;\n  color: #000000;\n}  \n\n#Tstore_bar1-logo {\n  position: absolute;\n  top: 43px;\n  left: 38px;\n}\n\n#bar1-cta {\n  position: absolute;\n  bottom: 42px;\n  left: 38px;\n  font-family: franklin-normal-700, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  width: 56px;\n  height: 32px;\n  margin: 0 auto;\n  background: #000000;\n  font-size: 11px;\n  line-height: 31px;\n  padding: 0;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px;\n  color: #ffffff;\n}\n\n#bar1-cta a {\n  display: block;\n  height: 100%;\n  cursor: pointer;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  border: 0px;\n  padding-top: 9px;\n  padding-left: 0 !important;\n}\n\n#hovercard:after {\n  bottom: 100%;\n  left: 350px;\n  border: solid transparent;\n  content: \" \";\n  width: 0;\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #d7e67d;\n  border-width: 8px;\n  margin: 0;\n}\n\n#bar1-offer-msg {\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  position: absolute;\n  top: 270px;\n  left: 40px !important;\n  width: 150px;\n  height: 30px;\n  font-size: 11px;\n  line-height: 15px;\n  padding: 0;\n  text-decoration: none;\n  color: #363636;\n}\n\n.hover-subhead {\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 13px;\n  color: #333;\n  margin: 1px 0 0;\n  width: 170px;\n  position: absolute;\n  top: 10px;\n}\n\n#hovercard h3 a,\n#hovercard p a {\n  color: #000 !important;\n  text-decoration: none;\n  display: block;\n}\n\na.nyt-button-actions {\n  background: #f7f7f5;\n  color: #58595b !important;\n  width: 126px;\n  border-radius: 3px;\n  border: 1px solid #ccc !important;\n  text-transform: uppercase;\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 15px;\n  text-align: center;\n  padding: 6px 0;\n  cursor: pointer;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 194px;\n  text-decoration: none !important;\n}\n\n#hovercard a.nyt-button-actions:hover {\n  background: #3c6791;\n  color: #fff !important;\n  text-decoration: none !important;\n}\n\n#hovercard a.nyt-button-actions.highlightButton:link,\n#hovercard a.nyt-button-actions.highlightButton:visited {\n  color: #fff !important;\n  background: #3c6791;\n  text-decoration: none !important;\n}\n\na.split-all-button {\n  background: #f3f3f4;\n  width: 345px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  font-family: nyt-franklin, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 30px;\n  margin: 0;\n  border: 1px solid #CCC;\n  text-align: center;\n  vertical-align: middle;\n}\n\n#hovercard a.split-all-button:hover {\n  background: #73afff;\n  color: #004276 !important;\n  text-decoration: underline !important;\n}\n\n.NYT5Style #hovercard {\n  top: 26px;\n}\n\n.ad.bar1-ad a.bar1-introtext,\n#memberTools .bar1-introtext,\n.masthead-tools a.bar1-introtext {\n  text-decoration: none;\n  color: #666;\n}\n\n.masthead-tools a.bar1-introtext {\n  position: relative;\n  margin-top: 2px;\n}\n\n.bar1-introtext {\n  padding-right: 5px;\n}\n\n.ad.bar1-ad .user-subscriptions-menu li a {\n  padding-left: 0;\n  border-left: 0;\n}\n\n#hovercard::after {\n  bottom: 100%;\n  left: 350px;\n  border: solid transparent;\n  content: \" \";\n  width: 0;\n  height: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #cccccc;\n  border-width: 8px;\n  margin: 0;\n}\n\n/* Chrome-only */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .NYT5Style #hovercard {\n    left: 50%;\n    top: 29px;\n  }\n  .NYT5Style #hovercard:before {\n    top: -14px;\n  }\n}\n\n/* Responsive\n@media screen and (max-width: 734px) {  \n    #bar1-3panel {\n        display: none\n    }\n    .ad.bar1-ad .user-subscriptions-group {\n        display: block\n    }\n} */\n/* Not on interactives */\n#interactiveABC #bar1-3panel {\n  display: none;\n}\n\n.viewport-medium .masthead.masthead-theme-standard.in-content.fixed-nav-subscribe .bar1-ad #nyt-button-sub {\n  background-color: transparent;\n  border-right: none;\n  text-transform: none;\n}\n\n/*# sourceMappingURL=bar1.css.map */\n\n", "click1": "https://www.nytimes.com/subscriptions/Multiproduct/lp8R34X.html?campaignId=6RHWR"}, "id": "7A6D2CCE-4B05-418A-9939-64B8366F2497", "dependencies": [], "type": "widget", "widget_id": "bar1poc2_staging"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "4137230627", "changes": []}], "name": "Bar1 | Light Grey (6RHWR)"}], "audienceIds": ["and", "7814230912", "6696333431", "8183220341"], "changes": null, "id": "8465804203", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,abTest=julysaleaus", "name": "Nons | Australia | July Sale | 2017-07-19 | TESTING", "bucketingStrategy": null, "variations": [{"id": "8480262963", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/c69d45c1fb70748f2162b8377c4592baaa0aa018fcc1e49fd591279707cd1447.js", "dependencies": [], "id": "D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"}, {"src": "/actions/c69d45c1fb70748f2162b8377c4592baaa0aa018fcc1e49fd591279707cd1447.js", "dependencies": ["D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/b59ebd80cdbfcfc5dee0f5b3ac34f4195e81f86f4721c45b01cac28e3b758463.js", "dependencies": [], "id": "695FE12F-5874-451B-8DBE-F396019E0B0B"}, {"src": "/actions/b59ebd80cdbfcfc5dee0f5b3ac34f4195e81f86f4721c45b01cac28e3b758463.js", "dependencies": ["695FE12F-5874-451B-8DBE-F396019E0B0B"], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "260CF357-14A2-4A5E-A7BE-CD09F682D3DB", "value": function($){// 062917 - Gateway - US_OneDaySale_July2017

(function (global) {
    "use strict";

    var $ = window.optimizely.get('jquery');
    var userLoggedIn;
    var userInfo = window.NYToptly.userInfo;
    var meterCount = window.NYToptly.audience("meter_views");
    var utils = window.optimizely.get('utils');

    $('body').addClass('noScroll');

    // --new - detecting if user is logged in

    if (userInfo.regi_id === 0) {
        userLoggedIn = false;
    }
    else {
        userLoggedIn = true;
        $('html').addClass('user-logged-in');
    }


    // Set click on full bundle tab
    var enableBundleClick = function() {

        $('.bundle_prod').addClass('ctaEnabled').on("click", function () {

            var thisLink = $(this).find("a.cta.active_cta").attr("href");
            window.location.href = thisLink;

        });
    };

    utils.waitForElement('.container__creative').then(function() {
        enableBundleClick();
    });

})(window);
}}, {"src": "/actions/0cacc70b0c6fbc3dcc36a1d3365087cac2c10f8d6c4b4934299d9df83624b6b7.js", "dependencies": ["260CF357-14A2-4A5E-A7BE-CD09F682D3DB"], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/51738f138ed15036aa23e872f2394a784e92ea4bc9646c991391d74e614800b6.js", "dependencies": [], "id": "F43ED3F2-ACB1-4E0F-9223-5F36C6C153D6"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/79c5edb05932daf596f055c2adbc181b1fa4ad07740f63ed49e24c8b8f127da6.js", "dependencies": [], "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB"}, {"src": "/actions/79c5edb05932daf596f055c2adbc181b1fa4ad07740f63ed49e24c8b8f127da6.js", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8J787.html?campaignId=6RRH8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}], "name": "Nons | On the ground in 150+ countries. Including yours. | 6WLUF 6WLUJ 6WLUL 6WLUR 6WLUW 6WLWJ 6WLWL 6WLWR 6WLWW 6WLWW 6WLWY 6WLX6"}], "audienceIds": ["and", "6992450319", "7814230912", "8418685646"], "changes": null, "id": "8475731106", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "abTest=tstore", "name": "Nons | USGM | Tstore Launch  | 2017-07-01 Testing", "bucketingStrategy": null, "variations": [{"id": "8466471257", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/d327d403b8f1a753bd4a0c46e6cf29aace649ced1907e7552315a2da7985b1ad.js", "dependencies": [], "id": "D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/67d1ced626bf7268a83118a57e3b05b3f9776c7fca30a5abf5718de312a8c08f.js", "dependencies": [], "id": "695FE12F-5874-451B-8DBE-F396019E0B0B"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "260CF357-14A2-4A5E-A7BE-CD09F682D3DB", "value": function($){// 051817 Gateway - Meter 2.0~208123
// May Journalist Sale 2017
(function (global) {
    "use strict";

    var $;

    // -----------------------------------------
    // ------      Select NYT4/NYT5       ------

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp');
        var nytApps = { 'nyt-v5': true, 'blogs': true };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }

    if (isNyt5()) {
        require(['foundation/main'], function () {
            $ = require('jquery/nyt');
            run($);
        });
    } else {
        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        run($);
    }

    var gatewayData = {


        campaignId: [{
            selector: '.tab--ada',
            params: {
                campaignId: '6RRFR'
            }
        }, {
            selector: '.tab--insider',
            params: {
                campaignId: '6RRFW'
            }
        }, {
            selector: '.tab--hd',
            params: {
                campaignId: '6RRFY'
            }
        }, {
            selector: '#more-subscription-options, #faq-learn-more',
            params: {
                campaignId: '6RRH6'
            }
        }]
    };

    function run($) {

        var userLoggedIn;
        var userInfo = window.NYToptly.userInfo;

        // --new - detecting if user is logged in

        if (userInfo.regi_id === 0) {
            userLoggedIn = false;
        }
        else {
            userLoggedIn = true;
            $('html').addClass('user-logged-in');
        }

        //

        // --new - Optimizely targeting meter~208123
        var meterCount = window.NYToptly.audience("meter_views");
        // --

        var appendToHref = function (codes) {            
            var i;
            var links = document.querySelectorAll('gatewayCreative a');              

            var updateLink = function () {
                this.href = this.href.replace("campaignId=", "campaignId=" + codes[i].params.campaignId);
            };
            if (typeof codes !== 'object' || typeof codes.length === 'undefined') {
                throw new Error('Parameter should be an array');
            }
            for (i = 0; i < codes.length; i++) {
                $(codes[i].selector).each(updateLink);
            }
        };

        $('body').addClass('noScroll');

        var campaignIdData = gatewayData.campaignId;

        var container = $('.meter-asset-wrapper');


        var loginWrapper = $('.login-wrapper');
        var headerTitle = $('.header-title');
        var loginWrapperLink = loginWrapper.find('a');
        var closeX = $('.closeAsset');
        var wholeHeader = $('.inter-header');
        var botBundlesHeader = $('.bot-bundles-section--header');
        var downButton = $('.down-button');
        var scrollCntnr = $('.scroll-container');
        var scrollToMarker = $('#scroll-to');
        var scrollToHeader = $('#header_section');

        var topScrollOffset = $(window).height() / 11;

        $(window).resize(function () {
            topScrollOffset = $(window).height() / 11;
        });

        $(function () {
            $('a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('.scroll-container').animate({
                            scrollTop: target.offset().top - topScrollOffset
                        }, 200);
                        return false;
                    }
                }
            });
        });

        var scrolled = false;
        var scrollContainer = $('.scroll-container');        

        scrollContainer.scroll(function () {

            function setScrollClass() {
                $('.inter-header').css('background-color','#000');                
            }

            function removedScrollClass() {
                $('.inter-header').css('background-color','initial');                
            }


            if (scrollContainer.scrollTop() > 0 && scrolled === false ) {
                scrolled = true;
                setScrollClass();
            } else if (scrollContainer.scrollTop() === 0) {
                scrolled = false;
                removedScrollClass();
            }
        });

        // Remove click handlers
        $(".bundle_tab").off("click");

        // appendToHref(campaignIdData);

        container.show();
    }

})(window);
}}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/d5298911f3886ab86ca810da33892fae96f56e10094aaad8a8e441bf45ead29e.js", "dependencies": [], "id": "3CAC369F-B4BC-4525-835D-B764690EE38C"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/94d82433e10f29bd73617705f7a8bc106b83bcc59edb87a0ce2ed805029eaffb.js", "dependencies": [], "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB"}, {"src": "/actions/94d82433e10f29bd73617705f7a8bc106b83bcc59edb87a0ce2ed805029eaffb.js", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8XKUR.html?campaignId=6RRH8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Anchor Ad", "config": {"anchor_meter": ["1"], "anchor_ad_impression_cap": 3, "campaignId": "", "custom_js": "", "click2": "", "nytID": " ", "full_html": "<!--   07.12 July T store Anchor Ad OPTLY~RTF-->\n<span class=\"adxInfo mktInfo\" style=\"display:none;\">\n    campaign: Nons | July T store 2017 | July 2017, \n    creative: Anchor, \n    source: optimizely, RTF\n</span>\n        <div id=\"anchor-container\" class=\"nytdGrowlUIContainer font-smoothing\" style=\"opacity: 1; bottom: -147px;\">\n\t\t<div id=\"anchor-ad\" class=\"main\">\n\n        <div id=\"anchor-close\" style=\"visibility: visible;\">\n\t\t<a href=\"javascript:;\" class=\"nytdGrowlNotifyCross\" title=\"Close\"></a>\n       \t</div>\n\n       <div id=\"anchor-header\">        \n<!--Placeholder for text <div id=\"anchor-intro\"></div>-->\n<!--  //added 07/05/2017 anchor-container-img -->\n\n\t   \t\t\t<div id=\"anchor-container-img\"><span> <img src=\"https://cdn.optimizely.com/img/3013110282/3aca8bb11fd7463d8dc9d8fc0a9f9f23.png\" alt=\"T_store_logo\"/></span> </div>\n\n<!--Killed subscriber link...not needed \n\n      <div id=\"anchor-login\" >ALREADY A SUBSCRIBER? <a href=\"https://myaccount.nytimes.com/auth/login\" class=\"sitewideLogInModal login-modal-trigger\">LOG IN</a>.</div>-->\n</div>\n\n    <a href=\"%%CLICKTHRU1%%\" target=\"_blank\">        \n\n    <div id=\"anchor-body\">            \n\t<a href=\"%%CLICKTHRU1%%\" target=\"_blank\">\n    <image id=\"anchor-logo1\" width=\"333\" height=\"101\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"  src=\"https://cdn.optimizely.com/img/3013110282/0d7b1986840544b69a7995263dca7081.png\" alt=\"The New York Times\" border=\"0\"></image></a>\n    \n    \n     <!--<div id=\"anchor-headline\">\n      Take a few weeks to explore the world.<br> Compliments of The New York Times.<br>                \n      </div>-->\n<a href=\"%%CLICKTHRU1%%\" target=\"_blank\">\n\t<div id=\"divider\"></div>\n    <div id=\"anchor-subhed\" class=\"hideelement\">10% off your first purchase with the<br>discount code:<span> WELCOME10</span></div>\n\t<div id=\"anchor_cta\" class=\"hideelement\">\n\t<div id=\"anchor_cta-btn\">SHOP NOW</div>\n    </div>    \n\t</div>\n\n </a>\n\n</div>\n\n</div>", "extra_js_4": "", "extra_js_3": "", "extra_js_2": "", "anchor_ad_session_hours": 1, "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/anchor/testing/anchored_v5_112916.js", "click4": "", "anchor_ad_session_cap": 1, "anchor_ad_cap_days": 365, "click3": "", "css": "/* July 14 B 2017 . */\n@import url(https://a1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n#anchor-container {\n    position: fixed;\n    margin: 0 auto; \n    padding: 0;\n    width: 100%;\n    height: 192px;\n    bottom: 0;\n  \tz-index: 1000000140;\n  \topacity: 0;\n}\n.hideelement\n{\ndisplay:none;\t\n\t\n}\n\n#anchor-container-img {\n    position: absolute;\n    top: 10px;\n    left: 370px;\n    width: 280px;\n}\n\n#anchor-ad {\n  height: 192px;\n  position: relative;\n  margin: 0 auto; \n  border: 1px solid #ccc;\n  -webkit-border-radius: 5px 5px 0 0;\n  -moz-border-radius: 5px 5px 0 0;\n  border-radius: 5px 5px 0 0;\n  font-family: franklin-normal-700, sans-serif;\n  -webkit-box-shadow: 0 0 7px #d7d7d7;\n  -moz-box-shadow: 0 0 7px #d7d7d7;\n  box-shadow: 0 0 7px #d7d7d7;\n  background-color: #a7c7e4;\n}\n#anchor-header {\n  height: 44px;\n  background-color:#a7c7e4;  \n}\n#anchor-intro {\n  position: absolute;\n  top: 10px;\n  left: 30px;\n  width: 80%;  \n}\n    \n#anchor-intro a {\n    color: #fff;\n    font-family: franklin-normal-500, \"Helvetica Neue\", arial, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 19px;\n}\n\n#anchor-login {\n  position: absolute;\n  top: 16px;\n  right: 35px;\n  width: 40%;\n  font-size: 12px;\n  color: #fff;\n  text-align: right;\n  display: none;\n}\n    \n#anchor-headline {\n    position: absolute;\n    top: 66px;\n    left: 30px;\n    text-align: left;\n    font-size: 21px;  \n    line-height: 24px;\n    color: #fff;\n    font-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;        \n}\n    \n#anchor-headline1{\n    position: absolute;\n    top: 24px;\n    left: 1px;\n    text-align: left;\n\tfont-family: franklin-normal-500, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n\tfont-size: 21px !important;  \n    line-height: 24px;\n    color: #dcf534;\n    \n}\n\n#anchor-subhed{\n    position: absolute;\n    top: 46px;\n    left: 645px;\n\twidth: 290px;\n    text-align: left;\n\tfont-family: franklin-normal-500, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n\tfont-size: 18px !important;  \n    line-height: 26px;\n    color: #000000;\n    \n}\n\n#anchor-subhed span{\n    font-family: franklin-normal-600, sans-serif;\n    font-style: normal;\n    font-weight: 600;\n\t\n}\n\n\n#anchor-close {\n    position: absolute;\n    left: 99%;\n    top: -12px;\n    width: 27px;\n    height: 27px;\n    z-index: 1000000143;\n    background: url('https://static01.nyt.com/video/static-timesvideo/img/sprite_map_nonretina.png') -200px -6px no-repeat;\n}\n#anchor-close a {\n  display: block;\n  height: 100%;\n}\n\n\n\n#anchor-logo1 {\n  position: absolute;\n  left: 103px;\n  bottom: 46px;\n}\n\n#divider  {\n   position: absolute;\n   left: 540px;\n   border-left: solid #8da9c3 1px;\n   height: 116px;\n}\n#anchor_cta {\n    position: absolute;\n    bottom: 37px;\n\tright: 386px;\n\tborder: solid;\n\tborder-radius: 4px;\n  border-width: 2px;\n\ttext-transform: uppercase;\n}\n#anchor_cta-btn {\n  background-color: #a7c7e4;\n  font-size: 12px;\n  text-align: center;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  width: 88px;  \n  font-family: franklin-normal-700, sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  color: #ffffff;\n  display: inline-block;\n  line-height: 28px;\n  height: 30px;\n  left: 625px;\n  bottom: 66px;\n}\n\n#anchor-container a {\n   color: #fff;\n   text-decoration: none;\n}\n\n#anchor_cta-btn:hover {\n  opacity: 0.8;\n}\n  #anchor_cta-btn a {\n    display:block;\n    height: 100%;\n    color: #fff;\n    text-decoration: none;\n    padding: 9px 0;\n  }\n#anchor-copy p#anchor_cta-link {\n  display: inline-block;\n  width: 130px;\n  margin-left: 8px;\n}\n  #anchor_cta-link a {\n    color: #fff;\n    font-size: 14px;\n  }\n  #anchor_cta-link a:hover {\n    text-decoration: underline;\n  }\n#anchor-container .show_login {\n  display: block !important;\n}\n\n/* Rules for mobile */\n/*\n@media screen and (max-width: 1171px) {\n}\n*/\n@media screen  and (max-width: 1036px) {\n    #anchor-intro a {\n        font-size: .95em;\n    }\n}\n@media screen and (max-width: 975px) {  \n  #anchor-intro span {\n    display: none;\n  }\n}\n@media screen and (max-width: 760px) {\n  #anchor-close {\n    left: 98%;\n  }\n}\n\n/* Smaller than 780px wide */\n@media screen and (max-width: 780px) {\n  #anchor {\n    width: 720px;\n  }\n}\n@media screen and (max-width: 736px) { /*Use Bar1 as guide*/\n  #anchor-container {\n    display: none !important;\n  }\n  }\n\n\n\n", "click1": "https://store.nytimes.com/?utm_source=nytimes&utm_medium=house-ad&utm_term=450x330_launch_brandnewstore&utm_content=bau-us&utm_campaign=6-23-2017"}, "id": "8061AC7A-AB7A-4BF3-8EF4-6F534B132FE1", "dependencies": [], "type": "widget", "widget_id": "anchorad_poc2"}]}], "name": "Nons | bar1 | anchor"}], "audienceIds": ["and", "8454812373"], "changes": null, "id": "8464271854", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,abTest=julysale,[WAT] Exclude All EDU segments", "name": "Nons | USGM | July Sale | US Geo | 2017-07-17 | TESTING", "bucketingStrategy": null, "variations": [{"id": "8468571688", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/0a06e5548dc9f50a9762378506567c3f18e44b57c0eeefccfadc6dfb31fa12a9.js", "dependencies": [], "id": "D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"}, {"src": "/actions/0a06e5548dc9f50a9762378506567c3f18e44b57c0eeefccfadc6dfb31fa12a9.js", "dependencies": ["D4FA80F2-5507-4BFC-A0F8-DE3E9F302EF7"], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/c963f7502e12582a6a8bb30ecfb864aa09e4c167786840dc38fb5b0f09ffb248.js", "dependencies": [], "id": "695FE12F-5874-451B-8DBE-F396019E0B0B"}, {"src": "/actions/c963f7502e12582a6a8bb30ecfb864aa09e4c167786840dc38fb5b0f09ffb248.js", "dependencies": ["695FE12F-5874-451B-8DBE-F396019E0B0B"], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "260CF357-14A2-4A5E-A7BE-CD09F682D3DB", "value": function($){// 062917 - Gateway - US_OneDaySale_July2017

(function (global) {
    "use strict";

    var $ = window.optimizely.get('jquery');
    var userLoggedIn;
    var userInfo = window.NYToptly.userInfo;
    var meterCount = window.NYToptly.audience("meter_views");
    var utils = window.optimizely.get('utils');

    $('body').addClass('noScroll');

    // --new - detecting if user is logged in

    if (userInfo.regi_id === 0) {
        userLoggedIn = false;
    }
    else {
        userLoggedIn = true;
        $('html').addClass('user-logged-in');
    }


    // Set click on full bundle tab
    var enableBundleClick = function() {

        $('.bundle_prod').addClass('ctaEnabled').on("click", function () {

            var thisLink = $(this).find("a.cta.active_cta").attr("href");
            window.location.href = thisLink;

        });
    };

    utils.waitForElement('.container__creative').then(function() {
        enableBundleClick();
    });

})(window);
}}, {"src": "/actions/5bd3fa8b92973a43f83c5342672061d845286e385a1a7adadcc5b930c6f2c31b.js", "dependencies": ["260CF357-14A2-4A5E-A7BE-CD09F682D3DB"], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/54ae5479e45c5ddac1d786decdab445bd458b7b0be1e06bec5c78b732cc676fa.js", "dependencies": [], "id": "F43ED3F2-ACB1-4E0F-9223-5F36C6C153D6"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/fa871c91e58abbf1c88d7f7072293a71f43cfb4109684ca61c294b6cdc9bc55e.js", "dependencies": [], "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB"}, {"src": "/actions/fa871c91e58abbf1c88d7f7072293a71f43cfb4109684ca61c294b6cdc9bc55e.js", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8XKUR.html?campaignId=6URJJ", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}], "name": "Come for the investigative reporting. Stay for the travel destinations | 6URF8 6URFF 6URFJ 6URFL 6URFR 6URFW 6URFY 6URH6 6URH6 6URH6 6URH6 6WK8L 6WK8L 6WK8L 6WK8R 6WK8W 6WK8W 6WK8W 6WK8Y 6WK96 6WK96 6WK96 6WK98 6URH8 6URHF 6URHJ 6URHL 6URHR 6URHW 6URHY 6URJ6 6URJ8 6URJ8 6URJF 6WK9F 6WK9F 6WK9F 6WK9J 6WK9L 6WK9L 6WK9L 6WK9R 6WK9W 6WK9W 6WK9W 6WK9Y 6URJJ"}], "audienceIds": ["and", "6992450319", "7814230912", "8408862662", "8413422098"], "changes": null, "id": "8461264919", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest=mtr2cln", "name": "meter 2.0 cleanup | TESTING", "bucketingStrategy": null, "variations": [{"id": "8442006318", "actions": [{"viewId": "4137230627", "changes": [{"dependencies": [], "type": "custom_code", "id": "5E4BFBE9-E1CE-44F5-A9F6-D9425E075EE9", "value": function($){// 061917 - Interstitial - lp_scribd_cooking_bundle_0617

(function (global) {
    "use strict";

    var $ = window.optimizely.get('jquery');
    var userLoggedIn;
    var userInfo = window.NYToptly.userInfo;
    var meterCount = window.NYToptly.audience("meter_views");
    var utils = window.optimizely.get('utils');

    $('body').addClass('noScroll');

    // --new - detecting if user is logged in

    if (userInfo.regi_id === 0) {
        userLoggedIn = false;
    }
    else {
        userLoggedIn = true;
        $('html').addClass('user-logged-in');
    }

    // Close Modal

    var initClose = function () {
        $('body').on('click', '.nytdGrowlNotifyCross', function () {
            // $('#Interstitial_optly').fadeOut('slow');
            $('#Interstitial_optly').hide();
            $('body').removeClass('noScroll');
        });
    };

    initClose();

    // Set click on full bundle tab
    var enableBundleClick = function() {

        $('.bundle_prod').addClass('ctaEnabled').on("click", function () {

            var thisLink = $(this).find("a.cta.active_cta").attr("href");
            window.location.href = thisLink;

        });
    };

    utils.waitForElement('.container__creative').then(function() {
        enableBundleClick();
    });






    // ET allocation

    var state = window.optimizely.get("state"),
        experimentID = "8433611239";

    var runWhenReady = function (testFunction, inFunction, mlsecs, reps) {
        setTimeout(function z() {
            if (testFunction()) {
                inFunction();
            }
            else if (--reps) {
                setTimeout(z, mlsecs);
            }
        }, mlsecs);
    };

    var locationUrl = window.location.href;
    var event = {
        name: 'abtest',
        data: {
            priority: '',
            expId: experimentID,
            testName: 'abTest_lp_scribd_cooking_bundle_0617',
            module: 'Interstitial',
            UIDplatform: 'Optimizely',
            globalUID: 'Optimizely',
            treatment: 'x',
            subject: 'adx-ab-allocation',
            action: 'allocation',
            url: locationUrl },
        type: ''
    };


    if (state.getVariationMap()[experimentID]) {
        var currentVariation = state.getVariationMap()[experimentID];
        event.data.treatment = String(currentVariation.index);
    }


    runWhenReady(function () {
        return 'TAGX' in window;
    }, function () { // Fire ET Allocation
        TAGX.EventProxy.trigger(event.name, event.data, event.type);
        // console.log('Event sent: ' + JSON.stringify(event));
    }, 1000, 10);


})(window);
}}, {"src": "/actions/29507c1cce6e10f7af9860c95268b4809ac873a7f58815e01cd812714e311f84.js", "dependencies": ["5E4BFBE9-E1CE-44F5-A9F6-D9425E075EE9"], "id": "5EC47A18-B355-4DB6-B85B-B04D7B901C6B"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "B5D0DCFD-A8F2-480C-BE37-207D5631525D", "value": function($){// 061917 - Gateway - lp_scribd_cooking_bundle_0617

(function (global) {
    "use strict";

    var $ = window.optimizely.get('jquery');
    var userLoggedIn;
    var userInfo = window.NYToptly.userInfo;
    var meterCount = window.NYToptly.audience("meter_views");
    var utils = window.optimizely.get('utils');

    $('body').addClass('noScroll');

    // --new - detecting if user is logged in

    if (userInfo.regi_id === 0) {
        userLoggedIn = false;
    }
    else {
        userLoggedIn = true;
        $('html').addClass('user-logged-in');
    }


    // Set click on full bundle tab
    var enableBundleClick = function() {

        $('.bundle_prod').addClass('ctaEnabled').on("click", function () {

            var thisLink = $(this).find("a.cta.active_cta").attr("href");
            window.location.href = thisLink;

        });
    };

    utils.waitForElement('.container__creative').then(function() {
        enableBundleClick();
    });





    // ----------   ET allocation

    var state = window.optimizely.get("state"),
        experimentID = "8433611239";

    var runWhenReady = function (testFunction, inFunction, mlsecs, reps) {
        setTimeout(function z() {
            if (testFunction()) {
                inFunction();
            }
            else if (--reps) {
                setTimeout(z, mlsecs);
            }
        }, mlsecs);
    };

    var locationUrl = window.location.href;
    var event = {
        name: 'abtest',
        data: {
            priority: '',
            expId: experimentID,
            testName: 'abTest_lp_scribd_cooking_bundle_0617',
            module: 'Gateway',
            UIDplatform: 'Optimizely',
            globalUID: 'Optimizely',
            treatment: 'x',
            subject: 'adx-ab-allocation',
            action: 'allocation',
            url: locationUrl },
        type: ''
    };


    if (state.getVariationMap()[experimentID]) {
        var currentVariation = state.getVariationMap()[experimentID];
        event.data.treatment = String(currentVariation.index);
    }


    runWhenReady(function () {
        return 'TAGX' in window;
    }, function () { // Fire ET Allocation
        TAGX.EventProxy.trigger(event.name, event.data, event.type);
        // console.log('Event sent: ' + JSON.stringify(event));
    }, 1000, 10);


})(window);
}}, {"src": "/actions/1124e2692c1f352cd0733f7cdd0861ab7e07cc8dfc7a5c6b33b8714b3a848eac.js", "dependencies": ["B5D0DCFD-A8F2-480C-BE37-207D5631525D"], "id": "EB649FD8-120B-48C8-8B4B-6D4AA343D674"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/19758a303c3af26f8988058251cdfaba87ab18b136ce2473f2f5ceceb5bf3898.js", "dependencies": [], "id": "97B47C29-ED50-49D9-B761-EAE42110BBA4"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6992450319", "8399810343"], "changes": null, "id": "8456142254", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] India,abTest=july_edu2a", "name": "Nons | EDU | July Sale  | US Geo | 2017-07-19 | Test (RTF)", "bucketingStrategy": null, "variations": [{"id": "8477040337", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/7f91d6562018993a932006b76e9f65efc467d073291c1832d90a27fc55b08cae.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/07b6e6ca8390b75c56e0a4f3b14acfd5e2d54ef5b946dbe6d00919dbd7ec5b37.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp874QY.html?campaignId=6UQFW", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/ddb64734d9fb824fcd0365d7fa87f8ca5474bf315ca7e9502004e269fc0d8429.js", "dependencies": [], "id": "37DBF9B0-988B-4AD4-8AAF-1642A82FBD44"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/dca537b2624ee372078a323c4229a01cd831541d07abb051e4a97a6d87256459.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/ba0c36cd447ef7fb4dc669497354f748f29cbb5a35bdbf7e7e930bd384b77287.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/1364902722eef06d6d82f0dcf99d46efad71193e4fbb98b145179f75116be4eb.js", "dependencies": [], "id": "51E2A707-2BE3-496A-B27B-1DF1BBB36CDE"}]}], "name": "July Sale 6URF8 | 6URFF | 6URFJ | 6URFL | 6URFR | 6URFW | 6URFY | 6URH6 | 6URH6 | 6URH6"}], "audienceIds": ["and", "8248972263", "8468167069"], "changes": null, "id": "8472102133", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] abTest=julysalerow,[WAT] Exclude All EDU segments,[Geo] WW ex India, US,[Geo] NOT Australia", "name": "Nons | INYT | July Sale | WW Geo ex India, Australia | 2017-07-19 | TESTING", "bucketingStrategy": null, "variations": [{"id": "8478100016", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/f1c77e6aabe127e5dce35caae2e994d4702bc2af1d0d505e8cc0065d87eafeea.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/7ddc9fefb76a51c8e9689c9241d0b0715c5aa059fb2dfc4f52fcfa7b0b9feff5.js", "dependencies": [], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/d7223372d5f92232cbf11cde4f04ea4d78be33171613ebfffc05eb2b5491a7c2.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/ad4d1f4693bf50b898881efea88a14cbfc5f864034176384306266689ea978ff.js", "dependencies": [], "id": "F43ED3F2-ACB1-4E0F-9223-5F36C6C153D6"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/631a52864013f10337425394687f29e3031f050423de484a032ebbc35702e674.js", "dependencies": [], "id": "956D62A4-E735-45EA-83D4-38ED934CE7FB"}, {"src": "/actions/631a52864013f10337425394687f29e3031f050423de484a032ebbc35702e674.js", "dependencies": ["956D62A4-E735-45EA-83D4-38ED934CE7FB"], "id": "6A103FEE-D53F-43BC-A751-9EBDCD015282"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp8U87X.html?campaignId=6UW4J", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}], "name": "Come for the investigative reporting. Stay for the travel destinations 60% | 6UUYF 6UUYJ 6UUYL 6UUYR 6UUYL 6UUYR 6UUYR 6UUYW 6UUYW 6UUYR 6UUYR 6UUYY 6UW46 6UW4F 6UW4F 6UW4J"}], "audienceIds": ["and", "6992450319", "8378297139", "8413422098", "8302021295", "8303070362"], "changes": null, "id": "8476950055", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "abTest=july_edu2a", "name": "Nons | EDU | July Sale  | WW Geo | 2017-07-19 | Test (RTF)", "bucketingStrategy": null, "variations": [{"id": "8486503168", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/646f97ed034266e0d6457453010b3b888bec51ec69b5af9008044d2401132218.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/bb250b7dc7157d9dde0681ebb65ebb454163c3d634f8fdd133c742b32d919e0e.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "http://www.nytimes.com/subscriptions/inyt/edu/lp89K3Q.html?campaignId=6UUX6", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/a30ce389db0856df0eb5ae1147ad1b2d156d0c19fc9e0eb95d8a77e0c8f59b14.js", "dependencies": [], "id": "37DBF9B0-988B-4AD4-8AAF-1642A82FBD44"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/f49ac6bb9c8df2e2e2bcf8950c8dcf7ef2f801d417ab42577d2d1c4b771f74ba.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/9c67288def2941493cfa93e58c3877d9f70b6761643dc7b6c0340282d042d95d.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/08eb409ed3a9beae7724d47da7545b17d40a42610767dffc73741b2403b8d787.js", "dependencies": [], "id": "51E2A707-2BE3-496A-B27B-1DF1BBB36CDE"}]}], "name": "July Sale (INTL EDU) 6UUW6 | 6UUW8 | 6UUWF | 6UUWJ | 6UUWL | 6UUWR | 6UUWW | 6UUWY | 6UUX6"}], "audienceIds": ["and", "8468167069"], "changes": null, "id": "8482544274", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8468156282", "endOfRange": 2500}, {"entityId": "8461637211", "endOfRange": 5000}, {"entityId": "8468394852", "endOfRange": 7500}, {"entityId": "8469511486", "endOfRange": 10000}], "audienceName": "[Cookie] abTest Cookie - lp_july_sale_design_0717,Whole Meter + lp8XKUR - lp_july_sale_design_0717,[Subscriber Type] Non-Subs,[Geo] US,[WAT] Exclude All EDU segments,Desktop/Laptop only", "name": "abTest_lp_july_sale_design_0717", "bucketingStrategy": null, "variations": [{"id": "8468156282", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/b0e5056dedcdbfc4f202eec6b4ad2e54f779e36be7ee675f23d1aa704ec6603a.js", "dependencies": [], "id": "CDFC6A10-6565-42EE-BF64-228D9CE5B231"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/60395575fa3a9c9d16f1dcfd40b5b04c92ec667d4f451b2088c8236cd280afea.js", "dependencies": [], "id": "55D11638-9B6C-449B-BB5E-AC9452CA18D6"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/06ff08e8576e5c49fdb294806b4ff93262fd136c6a1ea7281a313a4456351cd5.js", "dependencies": [], "id": "5EC81D02-8795-4ECA-BE7A-5CD0D62E90E4"}]}], "name": "Control"}, {"id": "8461637211", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/992a5cc0a481b0ba0fae043efba82ca212a67776f1e253087b1d80abf675f301.js", "dependencies": [], "id": "C2603023-562D-49A7-9565-048B87DF4D8D"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/e6c29dea65c64476f7b63c20a00dd254fad904e6d9c8aa0011c512e7a1e41abf.js", "dependencies": [], "id": "DC0948DE-DF7B-4264-87BA-D990E09DDC3A"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/cb6d7b2260ad4af7599f6a5fdc888a222247584fa8080226a686ffd1561a72ac.js", "dependencies": [], "id": "9F31E5A9-3B66-435E-BE52-5BA04F1B9CF9"}, {"src": "/actions/cb6d7b2260ad4af7599f6a5fdc888a222247584fa8080226a686ffd1561a72ac.js", "dependencies": ["9F31E5A9-3B66-435E-BE52-5BA04F1B9CF9"], "id": "4BAA42B7-0B2C-433C-9B71-D29DDF039AB3"}]}], "name": "Variation #1"}, {"id": "8468394852", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "6252880791", "changes": [{"src": "/actions/c64f9bb3c72cfed2926fb87bb7142228589fffdf10a9065d4eb69496de12607f.js", "dependencies": [], "id": "21B9B637-555E-4AF8-84F6-E54D5620EF9A"}, {"src": "/actions/c64f9bb3c72cfed2926fb87bb7142228589fffdf10a9065d4eb69496de12607f.js", "dependencies": ["21B9B637-555E-4AF8-84F6-E54D5620EF9A"], "id": "A1C64F9C-6570-4B94-9CA3-76B639EB5E1A"}]}], "name": "Variation #2"}, {"id": "8469511486", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "6252880791", "changes": [{"src": "/actions/d3ca19caead685b3dad38cd1465778bd3d1a79917cfb98f731e073d48304bb11.js", "dependencies": [], "id": "5F185CE2-9E62-47B3-81FE-A5F3F39FA4F4"}, {"src": "/actions/d3ca19caead685b3dad38cd1465778bd3d1a79917cfb98f731e073d48304bb11.js", "dependencies": ["5F185CE2-9E62-47B3-81FE-A5F3F39FA4F4"], "id": "1AAB260F-0ED6-448C-BAA5-114DF7011511"}]}], "name": "Variation #3"}], "audienceIds": ["and", "8377114830", "8316160614", "6992450319", "7814230912", "8413422098", "8331680099"], "changes": null, "id": "8458786276", "integrationSettings": null}], "id": "8284715063", "weightDistributions": null, "name": "* Digital Media Ad Ops (Traffic / Rich Media)", "groupId": null, "commitId": "8489335721", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8476950055", "endOfRange": null}], [{"entityId": "8461264919", "endOfRange": null}], [{"entityId": "8475731106", "endOfRange": null}], [{"entityId": "8456142254", "endOfRange": null}], [{"entityId": "8414275912", "endOfRange": null}], [{"entityId": "8350705198", "endOfRange": null}, {"entityId": "8349521001", "endOfRange": null}, {"entityId": "8376098187", "endOfRange": null}, {"entityId": "8385456763", "endOfRange": null}, {"entityId": "8427173595", "endOfRange": null}], [{"entityId": "8289681526", "endOfRange": null}, {"entityId": "8328272359", "endOfRange": null}, {"entityId": "8352043770", "endOfRange": null}], [{"entityId": "8314135793", "endOfRange": null}, {"entityId": "8325480191", "endOfRange": null}, {"entityId": "8320950185", "endOfRange": null}], [{"entityId": "8464271854", "endOfRange": null}, {"entityId": "8294871134", "endOfRange": null}, {"entityId": "8300151926", "endOfRange": null}], [{"entityId": "8325906517", "endOfRange": null}], [{"entityId": "8340021736", "endOfRange": null}], [{"entityId": "8327971049", "endOfRange": null}], [{"entityId": "8458786276", "endOfRange": null}, {"entityId": "8433611239", "endOfRange": null}], [{"entityId": "8413400123", "endOfRange": null}], [{"entityId": "8299860425", "endOfRange": null}, {"entityId": "8294022351", "endOfRange": null}, {"entityId": "8307281703", "endOfRange": null}], [{"entityId": "8465804203", "endOfRange": null}, {"entityId": "8448605360", "endOfRange": null}], [{"entityId": "8400924480", "endOfRange": null}, {"entityId": "8411196239", "endOfRange": null}, {"entityId": "8295790119", "endOfRange": null}], [{"entityId": "8301150742", "endOfRange": null}], [{"entityId": "8294240258", "endOfRange": null}, {"entityId": "8411153709", "endOfRange": null}], [{"entityId": "8306482752", "endOfRange": null}], [{"entityId": "8413171281", "endOfRange": null}], [{"entityId": "8380743665", "endOfRange": null}, {"entityId": "8314903711", "endOfRange": null}], [{"entityId": "8448553144", "endOfRange": null}], [{"entityId": "8282395857", "endOfRange": null}], [{"entityId": "8311228072", "endOfRange": null}], [{"entityId": "8348435276", "endOfRange": null}], [{"entityId": "8381313107", "endOfRange": null}], [{"entityId": "8447590384", "endOfRange": null}], [{"entityId": "8445157318", "endOfRange": null}], [{"entityId": "8454751051", "endOfRange": null}], [{"entityId": "8463230295", "endOfRange": null}], [{"entityId": "8457897738", "endOfRange": null}], [{"entityId": "8472102133", "endOfRange": null}], [{"entityId": "8482544274", "endOfRange": null}]], "offerConsistency": true}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Antlers at Vail", "name": "Antlers at Vail", "bucketingStrategy": null, "variations": [{"id": "8278370960", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/533f5283c11fb83990591ab00b8f22a99f5c0d9edd8abfee7f3e0356b769882d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8275464348"], "changes": null, "id": "8261075815", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Goldsmiths Univ London", "name": "Goldsmiths University London", "bucketingStrategy": null, "variations": [{"id": "8278400161", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/00da75de97cf0cef13540c89a44307e42acbd326eb77f252ff1fe9de9c61af75.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8269256599"], "changes": null, "id": "8267122938", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] National Library of the Czech Republic", "name": "National Library of the Czech Republic", "bucketingStrategy": null, "variations": [{"id": "8275531699", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/018a04c7b773e76b07488a85cdc16d5e6a7cac9cb27d6d80a3576fe3773ec669.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8252297528"], "changes": null, "id": "8279370590", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Big Sky Resort", "name": "Big Sky Resort", "bucketingStrategy": null, "variations": [{"id": "8293961037", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/dc616ff43d320623482aeb8b0637823137a89dd0a018fde3fdf545ed279c2482.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8273176592"], "changes": null, "id": "8290607071", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] KLNF,[Cookie] abTest does NOT exist", "name": "KLNF Libraries", "bucketingStrategy": null, "variations": [{"id": "8292451117", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/add03b4e6f15809c224700e514bfb43a93c68af6b26305d8a7c31ca6b8f1ee47.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8279371394", "8183220341"], "changes": null, "id": "8290734084", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Conrad Chicago", "name": "Conrad Chicago", "bucketingStrategy": null, "variations": [{"id": "8297414811", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/d93c011636e330fcbdae1ee33693b9d2aa4d4bf4c29be2876251a32f8c8212d3.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8269873343"], "changes": null, "id": "8292962304", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Vancouver Public Library", "name": "Vancouver Public Library", "bucketingStrategy": null, "variations": [{"id": "8297780473", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/2d6ba079e394a8630c326519242ae9fad402c4dddc2050f97fe3df407e0fb465.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8278311314"], "changes": null, "id": "8293001188", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Union Hotel", "name": "Union Hotel", "bucketingStrategy": null, "variations": [{"id": "8298711682", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/0cda1838eb31a0ae963f6efe1bdcc2296bb54c5b6727ab6be18b37ef6ce0edb7.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8295712999"], "changes": null, "id": "8295513989", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Sewickley Public Library", "name": "Sewickley Public Library", "bucketingStrategy": null, "variations": [{"id": "8299451611", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/faa86aecc2ac962a642f611d7bfda4f72f5577afdc551502af40825d753571b3.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8277156228"], "changes": null, "id": "8296840679", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Wythe Hotel", "name": "Wythe Hotel", "bucketingStrategy": null, "variations": [{"id": "8287119419", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/0db9158be3b03385c16453f0bb11bd19536dfd5d25b9898276fd19848bccde4e.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8266808565"], "changes": null, "id": "8301320877", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Life Hotel", "name": "Life Hotel", "bucketingStrategy": null, "variations": [{"id": "8322167001", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/4802e09635d42f3a7f6837bcc9affaef89126e3b2ac4524ebb465ed214edd50d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8330140946"], "changes": null, "id": "8316104482", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Ottawa Public Library", "name": "Ottawa Public Library", "bucketingStrategy": null, "variations": [{"id": "8319003874", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/d13e18aae279eeb8469e96f419db0b7b8124a6169c7fad94221294d105e5db27.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8325581970"], "changes": null, "id": "8325631400", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Homewood Suites Seattle Convention Center", "name": "Homewood Suites Seattle Convention Center", "bucketingStrategy": null, "variations": [{"id": "8346030197", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/ac13db9e0fdb54453e927459e9249df8e60c30f7049e5310d299eede7ce63c23.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8354161151"], "changes": null, "id": "8342062730", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Access is provided by Singapore American Club", "name": "Singapore American Club", "bucketingStrategy": null, "variations": [{"id": "8342445642", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/5c6f2f3bbef7b39f3e9702523da11d782856531a48e35424fc572d56ccaa6f97.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8346021039"], "changes": null, "id": "8342884979", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Condor Hotel", "name": "The Condor Hotel", "bucketingStrategy": null, "variations": [{"id": "8475052028", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/6064784226cf394dfda5507182a98fa12b296dbdd9e4ad87f86fbf7e744d3225.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8472101818"], "changes": null, "id": "8482800763", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Anatolia College/American College of Thessaloniki", "name": "Anatolia College/American College of Thessaloniki", "bucketingStrategy": null, "variations": [{"id": "8484301108", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/ef173c676e5b1ed4659031e9c485299f9c3f0fda8e4a369e05d1c7b67b5b2fb1.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8480010926"], "changes": null, "id": "8484670567", "integrationSettings": null}], "id": "8273730456", "weightDistributions": null, "name": "B2B Personalization Headers", "groupId": null, "commitId": "8478002565", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8261075815", "endOfRange": null}, {"entityId": "8290607071", "endOfRange": null}, {"entityId": "8482800763", "endOfRange": null}, {"entityId": "8292962304", "endOfRange": null}, {"entityId": "8267122938", "endOfRange": null}, {"entityId": "8342062730", "endOfRange": null}, {"entityId": "8290734084", "endOfRange": null}, {"entityId": "8316104482", "endOfRange": null}, {"entityId": "8279370590", "endOfRange": null}, {"entityId": "8325631400", "endOfRange": null}, {"entityId": "8296840679", "endOfRange": null}, {"entityId": "8342884979", "endOfRange": null}, {"entityId": "8295513989", "endOfRange": null}, {"entityId": "8293001188", "endOfRange": null}, {"entityId": "8301320877", "endOfRange": null}], [{"entityId": "8484670567", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": [{"entityId": "8415113676", "endOfRange": 10000}], "audienceName": "[Page Targeting] Exclude the Homepage,liftOff_survey,[Cookie] liftoffSurveyViewed does NOT exist,[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only", "name": "Project Liftoff Survey - 2017-06-27", "bucketingStrategy": null, "variations": [{"id": "8415113676", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/510cecae01dd5c2cb0ca2e2fe0f4b4ffedc51b06511f620aeb95c3e9e77b6190.js", "dependencies": [], "id": "F978BF0D-43FD-465C-8E70-237C482EE050"}]}], "name": "MARO-43 Project Liftoff"}, {"id": "8414764968", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8456760649", "8447233094", "8362962560", "8404891843", "8485734812"], "changes": null, "id": "8420722932", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8481944325", "endOfRange": 7000}, {"entityId": "8477052755", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Cookie] abTest does NOT exist,[Geo] US,[Page Targeting] Exclude the Homepage,[Page Targeting] nytimes.com domain only", "name": "Future of Features, v5 | US Geo | 2017-07-17 - 2017-07-24 | Relaunched; bumped up from 50% to 70%", "bucketingStrategy": null, "variations": [{"id": "8481944325", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/9828421d6c2f35219d7a4463172d17eb8df364fe9e0100ca881b7d49508627f2.js", "dependencies": [], "id": "16948C70-243E-4304-93F3-0A12EAD6D873"}]}], "name": "MARO-65 Future of Features"}, {"id": "8477052755", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8183220341", "7814230912", "8456760649", "8485734812"], "changes": null, "id": "8479004998", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8476101775", "endOfRange": 9900}, {"entityId": "8481041188", "endOfRange": 10000}], "audienceName": "[Geo] US,[Cookie] abTest does NOT exist,[Cookie] survey_triggered does NOT exist,[Cookie] XvOpt does not exist,[Page Targeting] Exclude the Homepage,[Page Targeting] nytimes.com domain only", "name": "Brand Tracker Q3 rev2 | US Geo | 2017-07-13 - 2017-09-30 | Revised from 2% to 1%", "bucketingStrategy": null, "variations": [{"id": "8476101775", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}, {"id": "8481041188", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/285d9d9965855cbb16a22d3ec8e19679204ceb8a112451a0379ac3d1db7dc8b2.js", "dependencies": [], "id": "BFF83186-F07B-4C2F-9068-28E116E23CC0"}]}], "name": "MARO-61 Brand Tracker US (continuation, without coinflip / AdX) | 5%"}], "audienceIds": ["and", "7814230912", "8183220341", "8404891843", "8325342424", "8456760649", "8485734812"], "changes": null, "id": "8484421815", "integrationSettings": null}], "id": "8267114681", "weightDistributions": null, "name": "Surveys for Audience Insights", "groupId": null, "commitId": "8483353903", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8484421815", "endOfRange": null}, {"entityId": "8479004998", "endOfRange": null}, {"entityId": "8420722932", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "Optly New Debug Campaign", "name": "Optly New Debug Campaign", "bucketingStrategy": null, "variations": [{"id": "8439111514", "actions": [{"viewId": "8263601258", "changes": [{"dependencies": [], "type": "custom_code", "id": "D2E0A345-3068-48D0-B4A8-5D73D23966FA", "value": function($){if(document.cookie.indexOf('optly_new_debug') > -1){
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
var have_priority = false;
var have_audiences = false;
var experiments = {};
var priorities = {};
var pages = {};
var priority_number = {};
var opt_data;
var logCampaignDecision = function(event) {
	if (have_priority === false) {
		opt_data = optimizely.get('data');
		experiments = opt_data.experiments;
		priorities = opt_data.campaigns[8284715063].decisionMetadata.experimentPriorities;
		for (i = 0; i < priorities.length; i++) {
			for (y = 0; y < priorities[i].length; y++) {
				var experience_id = priorities[i][y].entityId;
				var variations = opt_data.experiments[experience_id].variations;
				for (z = 0; z < variations.length; z++) {
					var this_variation = variations[z];
					var actions = this_variation.actions;
					var changed_pages = [];
					for (n = 0; n < actions.length; n++) {
						if (actions[n].changes.length > 0) {
							changed_pages.push(opt_data.pages[actions[n].pageId].name);
						}
					}
				}
				var pages_object = {
					pages: changed_pages
				};
				var experience_name = experiments[experience_id].name;
				priority_number[experience_id] = i + 1;
				console.log(i + 1, experience_name, pages_object, experiments[experience_id].audienceName);
				pages = opt_data.pages;
				have_priority = true;
			}
		}
	}
	if (event.data.campaign.id != "8284715063") {
		if (event.data.decision.experimentId === null) {
			console.log("No eligible experience for: " + event.data.campaign.name);
		} else {
			console.log("Experience:", opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", opt_data.variations[event.data.decision.variationId].name);
		}
	} else {
		if(!have_audiences){
		var checkTraffickingAudiences = function(d_t_aud) {
			var opt_data = opt_data || optimizely.get('data');
			var traffickingData = opt_data.campaigns[8284715063] ? opt_data.campaigns[8284715063] : false;
			if (traffickingData) {
				var audience_array = [];
				var experiments = traffickingData.experiments;
				for (y = 0; y < experiments.length; y++) {
					var audiences = experiments[y].audienceIds;
					if (audiences != undefined) {
						for (i = 0; i < audiences.length; i++) {
							if (parseInt(audiences[i]) && audience_array.indexOf(audiences[i]) === -1) {
								audience_array.push(audiences[i]);
							}
						}
					}
				}
				var tempArray;
				var returnAudienceNames = function(array){
					tempArray = [];
					for(w = 0; w< array.length; w++){
						tempArray.push(opt_data.audiences[array[w]].name);
					}
					return tempArray;
				};
				var matchers = returnAudienceNames(d_t_aud);
				var failers = returnAudienceNames(audience_array.diff(d_t_aud));
				console.log('Matches: ', matchers);
				console.log('Fails: ', failers);
			}
		};
		checkTraffickingAudiences(event.data.decisionTicket.audienceIds);
		have_audiences = true;
		}	
		if (event.data.decision.experimentId === null) {
			console.log("No eligible experience for: " + opt_data.pages[event.data.decisionTicket.pageId].name);
		} else {
			console.log("For Page: " + pages[event.data.decisionTicket.pageId].name);
			console.log("Experience:", opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", opt_data.variations[event.data.decision.variationId].name);
			console.log("Priority Level: ", priority_number[event.data.decision.experimentId]);
		}

	}
};
window.optimizely = window.optimizely || [];
window["optimizely"].push({
	type: "addListener",
	filter: {
		type: "lifecycle",
		name: "campaignDecided" 
	},
	// Add the campaignDecided function as a handler.
	handler: logCampaignDecision
});
}
}}]}], "name": "Variation #1"}], "audienceIds": ["8441471525"], "changes": null, "id": "8441991317", "integrationSettings": null}], "id": "8446292810", "weightDistributions": null, "name": "[Support] Test New Logging", "groupId": null, "commitId": "8455716016", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8441991317", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}], "groups": [], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "exact"}, {"type": "url", "value": "www.nytimes.com", "match": "exact"}]]], "name": "[Mktg Asset] Anchor Ad", "tags": [], "activationType": "manual", "apiName": "AnchorAd", "id": "4128620616"}, {"category": "other", "staticConditions": null, "name": "[Mktg Asset] Bar1", "tags": [], "activationType": "manual", "apiName": "Bar1", "id": "4129021553"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "exact"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "[Mktg Asset] Interstitial", "tags": [], "activationType": "manual", "apiName": "Interstitial", "id": "4137230627"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.dev.nytimes.com/subscription", "match": "substring"}]], "name": "Landing Pages (All) - Manual", "tags": [], "activationType": "manual", "apiName": "landing_pages", "id": "6252880791"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}]], "name": "[Mktg Asset] Welcome Ad on Homepage", "tags": [], "activationType": "manual", "apiName": "WelcomeAd", "id": "8179870018"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "[Mktg Asset] Growl", "tags": [], "activationType": "manual", "apiName": "Growl", "id": "8185280121"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "[Mktg Asset] Gateway", "tags": [], "activationType": "manual", "apiName": "Gateway", "id": "8187250053"}, {"category": "other", "staticConditions": null, "name": "ROS (Global - All Snippets)", "tags": [], "apiName": "staging_ros_global__all_snippets", "id": "8263601258"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/subscriptions/Multiproduct/mobilegateway/index.html", "match": "substring"}]], "name": "[Mktg Asset] Mobile Gateway page", "tags": [], "activationType": "manual", "apiName": "mobile_gateway_page", "id": "8309420148"}], "snippetId": "8235041264", "dimensions": [{"segmentId": "4306880011", "id": "4263057003", "apiName": "application_name", "name": "Application Name"}, {"segmentId": "4303553323", "id": "4295554453", "apiName": "source_app", "name": "Source App"}, {"segmentId": "4299911629", "id": "4300961559", "apiName": "oc", "name": "OC"}, {"segmentId": "4296810049", "id": "4306870008", "apiName": "campaign_id", "name": "Campaign ID"}, {"segmentId": null, "id": "8024450760", "apiName": "campaign_code", "name": "Campaign Code"}, {"segmentId": null, "id": "8194503722", "apiName": "cur_page", "name": "Current Page"}, {"segmentId": null, "id": "8259011849", "apiName": "subscription_type", "name": "Subscription Type"}, {"segmentId": null, "id": "8266141332", "apiName": "subscription_mode", "name": "Subscription Mode"}, {"segmentId": null, "id": "8412620746", "apiName": "user_type", "name": "User Type"}, {"segmentId": null, "id": "8412720818", "apiName": "pass_trafficking", "name": "Bucketed Into trafficking experience"}, {"segmentId": null, "id": "8441661383", "apiName": "geo_country", "name": "Country"}, {"segmentId": null, "id": "8442321393", "apiName": "geo_region", "name": "Country or Region of Interest"}, {"segmentId": null, "id": "8442630948", "apiName": "geo_macro", "name": "US vs. INYT"}, {"segmentId": null, "id": "8468288802", "apiName": "agent_id", "name": "Agent ID"}, {"segmentId": null, "id": "8468480580", "apiName": "cig_segment", "name": "CIG Segment"}], "projectJS": function(){(function(){/**
* A/B Testing
*/
(function() {
    var getCookie = function(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : null;
    };

    window.NYTD = window.NYTD || {};
    window.NYTD.optimizely = window.NYTD.optimizely || {};
    window.NYTD.optimizely.userEperiments = JSON.parse(getCookie('optimizelyBuckets'));
})();
//Wait for Origin Sync on Thank you URLs to ensure proper attribution

if(window.location.href.indexOf('/get-started/thank-you') > -1){
  console.log("[Optly] WaitForOriginSync executing");
window.optimizely = window.optimizely || [];
  window.optimizely.push({
  "type": "waitForOriginSync",
  "canonicalOrigins": ["nytimes.com", "query.nytimes.com","myaccount.nytimes.com"]
});
}
})();(function(){var checkUrl = function(string) {
    return window.location.href.indexOf(string) > -1;
};
if(document.cookie.indexOf('optly_debug') > -1 || !(document.cookie.indexOf('optly_sandbox')>-1 || window.location.search.indexOf('optly_sandbox')>-1) && checkUrl('.nytimes.com') && !checkUrl('.app.html') && !checkUrl('.embedded.html') && ((!(screen.width < 768)) || checkUrl('/subscription'))){
if(window.NYToptly === undefined) {
  window.NYToptly = (function() {
        "use strict";
    var opt_console = {};
    opt_console.log = function(a,b){if(document.cookie.indexOf('optly_debug')>-1){console.log(a,b);}};
    window.optly_events = {start:true,targeting:null,gateway:null};
    window.optimizely = window.optimizely || [];

    //placements are each ad unit on the page
    //placements are only activated on pagegroups with the correct page type
    var placements = [
      {
        name: "Bar1",
        page: "Bar1",
        pageTypes: ["article","homepage","oak","section front","sectionfront","games-crosswords","blogs-posting","blogs-summary","topic"],
        metaTags: [],
        selector: "#Bar1"
      },
      {
        name: "AnchorAd",
        page: "AnchorAd",
        pageTypes: ["article","oak"],
        metaTags: [],
        selector: "#Anchor_optly"
      },
      {
        name: "Interstitial",
        page: "Interstitial",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"],
        metaTags: [],
        selector: "#Interstitial_optly"
      },
      //Remove Landing Page from placement Activation mapping and add Meter-dependent assets
      {
        name: "Growl",
        page: "Growl",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"],
        metaTags: [],
        selector: "#Growl_optly"
      },
      {
        name: "WelcomeAd",
        page: "WelcomeAd",
        pageTypes: ["homepage"],
        metaTags: [],
        selector: "#WelcomeAd_optly"
      },
      {
        name: "Gateway",
        page: "Gateway",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","blogs-posting"],
        metaTags: [],
        selector: "#Gateway_optly"
      },
      {
        name: "LP",
        page: "landing_pages",
        pageTypes: ["lp"],
        metaTags: [],
        selector: "#container"
      }
      ],
      userInfo, pt, optutils, init = false;
      var meter_pages = ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"];

    var initialize = function() {
      init = true;
      opt_console.log("[OptimizelyNYT] ProjectJS start");
      pt = Getters.getPageType();
      optutils = window.optimizely.get("utils");
			if(document.cookie.indexOf('optly_debug') > -1){
      Utils.initLogging();
      }
      Utils.removeClass();
      Utils.debug();
      opt_console.log("[OptimizelyNYT] detected page type: '" + pt + "'");

      // TODO: unified position management
      var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        opt_console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
      if(meter_pages.indexOf(pt)>-1){
        optutils.waitForElement("body").then(function(){
          appendDiv('Growl_optly');
          appendDiv('Gateway_optly');
          appendDiv('Anchor_optly');
          appendDiv('Interstitial_optly');
        });
      }
      if (pt === "homepage") {
        optutils.waitForElement("body").then(function() {
          appendDiv('WelcomeAd_optly');
        });
      }
      if(pt === "lp"){
        optutils.waitForElement("body").then(function(){
          appendDiv("LP_optly");
        });
      }
      if(pt==="section front"){
        optutils.waitForElement(".masthead-tools").then(function(){
        var newLi = document.createElement("li");
        newLi.setAttribute('id',"Bar1");
        var masthead = document.querySelector('.masthead-tools');
        masthead.insertBefore(newLi,masthead.firstChild);
        });
      }
      //POC III Solution for adding elements to the page
      //Temporary Interstitial Removal for IE
      var utils_optim = optimizely.get('utils');
      utils_optim.waitForElement('#growl-optout').then(function(){
        var growl_optout = document.getElementById('growl-optout');
        growl_optout.onclick = function(){
          var interstitial_optly = document.getElementById('Interstitial_optly');
          interstitial_optly.parentNode.removeChild(interstitial_optly);  
        };});
      utils_optim.waitForElement('#growl-skipthis').then(function(){
        var growl_optout = document.getElementById('growl-skipthis');
        growl_optout.onclick = function(){
          var interstitial_optly = document.getElementById('Interstitial_optly');
          interstitial_optly.parentNode.removeChild(interstitial_optly);  
        };});
      opt_console.log("[OptimizelyNYT] Fetching NYT user data: ");
      NytContext.getContext(function (error, context) {
        if (!error) {
          // activate
          window.NYToptly.userInfo = context;
          userInfo = context;
          window.optly_events.targeting = context;
          window.optimizely.push({"type":"user","attributes":{"agentId":window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id}});
          opt_console.log("[OptimizelyNYT] User Data: ", userInfo);
          //Activate mobilegateway page when necessary
          if(window.location.href.indexOf('mobilegateway')>-1){
          View.action('ACTIVATE_PAGE','mobile_gateway_page');
          }
          View.action("ACTIVATE_VIEWS");
        } else {
          opt_console.log("[OptimizelyNYT] Error:", error);
        }
      });

    };

    var Getters = {

      // @return {string}.toLowerCase()
      getPageType: function() {
        // update to account for LP page type
        var checkPath = function(string){
          return window.location.pathname.indexOf(string) > -1;
        };
        var checkDomain = function(string){
          return window.location.hostname.indexOf(string) > -1;
        };
        var checkContent = function(element){
          return element && element.getAttribute("content");
        };
        var pt = document.querySelector("meta[name=PT]") || null;
        var sa = document.querySelector("meta[name=sourceApp]") || null;
        if(checkContent(sa) === "times-journeys"){
          return sa;
        }
        if(checkContent(sa) === "nytv"){
          return "video";
        }
        if(checkContent(sa) === "nyt-v5" && checkContent(pt) === "Multimedia"){
          return "multimedia";
        }
        if(checkContent(pt) === "Topic" || (checkContent(pt)==="collection" && checkContent(sa) === "nyt-v5")){
          return "topic";
        }
        if(checkContent(sa) === "games-crosswords"){
          return "games-crosswords";
        }
        if(checkContent(pt) === "Blogs" && window.location.pathname === "/"){
          return "blogs-summary";
        }
        if(checkContent(pt) === "Blogs"){
          return "blogs-posting";
        }
        if(checkPath("blogs/directory")){
          return "blogs-sf";
        }
        if(checkPath('/classifieds')){
          return "classifieds";
        }
        if(checkDomain("myaccount")){
          return "myaccount";
        }
        if(checkPath('/subscription')){
          return "lp";
        }
        if(checkPath('international-contact/international-contact')){
          return "contact";
        }
        //Automatically return Homepage, Article, Section Front, Search and Imageslideshow Types
        if(pt) {
          pt = document.querySelector("meta[name=PT]").getAttribute("content").toLowerCase();
          return pt;
        }
        else {
          return "none";
        }

      },

      getUserType: function() {
        if (!userInfo) {
          return "anon";
        }
        switch (userInfo.user_type) {
        case "sub":
        case "regi":
          return userInfo.user_type;
        default:
          return "anon";
        }
      },
      getUsername: function() {
        if(userInfo.name) {
          return userInfo.name;
        }
        return "";
      },
      getBundleSubscriptions: function() {
        var bundles = [];
        if(userInfo && userInfo.bundle_subscriptions) {
          bundles = userInfo.bundle_subscriptions.map(function(x){ return x.bundle; }).filter(Boolean);
        }
        return bundles;
      },

      getWatSegment: function() {
        return userInfo.wat;
      },

      getIpSegments: function() {
        return userInfo.ip_segments;
      },

      getMeter: function() {
        return userInfo.meter_count;
      },

      hitPaywall: function(){
        return userInfo.hitPaywall;
      },

      meterCounted: function(){
        return userInfo.counted;
      },

      hasBundle: function(name) {
        var bundles = this.getBundleSubscriptions();
        return (bundles.indexOf(name) > -1);
      },
      getUserInfoObj:function(){
        return userInfo;
      },

      getInfoLoaded: function() {
        if (userInfo !== null) {
          return true;
        } else {
          return false;
        }
      },
      getSourceApp: function() {
        var sourceApp = document.querySelector("meta[name=sourceApp]");
        if(sourceApp) {
          return sourceApp.getAttribute("content").toLowerCase();
        }
      },
      getCountryText: function(html){
        var re = /%%COUNTRY%%/g;
        var returnHTML = html;
        if (window.NYToptly.getQueryParameter("location")){
          returnHTML = returnHTML.replace(re, window.NYToptly.getQueryParameter("location"));
        } else if(window.optimizely.data.visitor && window.optimizely.data.visitor.location != undefined) {
          returnHTML = returnHTML.replace(re, window.optimizely.data.visitor.location.country);
        } else {
          returnHTML = returnHTML.replace(re, "US");
        }
        return returnHTML;
      },
      getUserRequestInfo: function(){
        var origin = window.location.protocol + "//" + window.location.hostname;
        switch(origin){
          case "https://www.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          case "https://www.stg.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.stg.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          case "https://www.dev.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.dev.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          default:
            return {
                    request:"jsonp",
                    url:"https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp?callback="
                    };
        } 
      }
    };

    /*var user_api_domain = "https://www.nytimes.com";
    if(window.location.href.indexOf('stg.nytimes.com') > -1){
      user_api_domain = "https://www.stg.nytimes.com";
    }
    else if(window.location.href.indexOf('dev.nytimes.com') > -1){
      user_api_domain = window.location.protocol + "//" + window.location.hostname;
    }*/
    var user_api_domain = window.location.protocol + "//" + window.location.hostname;
    var Config = {
      USER_INFO_API: user_api_domain + "/svc/web-products/userinfo-v3.json",
      CIG_IP_SEG_API: "https://cigsvc.nytimes.com/r1/jp/ip_seg_v2.rep"
    };


    var Utils = {
      initLogging: function() {
                    var g, h, i, j, k, n, w;
                    Array.prototype.diff = function(a) {
                        return this.filter(function(i) {
                            return a.indexOf(i) < 0;
                        });
                    };
                    var log_have_priority = false;
                    var log_have_audiences = false;
                    var log_experiments = {};
                    var log_priorities = {};
                    var log_pages = {};
                    var priority_number = {};
                    var log_opt_data;
                    var logCampaignDecision = function(event) {
                        if (log_have_priority === false) {
                            log_opt_data = optimizely.get('data');
                            log_experiments = log_opt_data.experiments;
                            log_priorities = log_opt_data.campaigns[8284715063].decisionMetadata.experimentPriorities;
                            for (i = 0; i < log_priorities.length; i++) {
                                for (g = 0; g < log_priorities[i].length; g++) {
                                    var experience_id = log_priorities[i][g].entityId;
                                    var variations = log_opt_data.experiments[experience_id].variations;
                                    for (h = 0; h < variations.length; h++) {
                                        var this_variation = variations[h];
                                        var actions = this_variation.actions;
                                        var changed_pages = [];
                                        for (n = 0; n < actions.length; n++) {
                                            if (actions[n].changes.length > 0) {
                                                changed_pages.push(log_opt_data.pages[actions[n].pageId].name);
                                            }
                                        }
                                    }
                                    var pages_object = {
                                        pages: changed_pages
                                    };
                                    var experience_name = log_experiments[experience_id].name;
                                    priority_number[experience_id] = i + 1;
                                    console.log(i + 1, experience_name, pages_object, log_experiments[experience_id].audienceName);
                                    log_pages = log_opt_data.pages;
                                    log_have_priority = true;
                                }
                            }
                        }
                        if (event.data.campaign.id != "8284715063") {
                            if (event.data.decision.experimentId === null) {
                                console.log("No eligible experience for: " + event.data.campaign.name);
                            } else {
                                console.log("Experience:", log_opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", log_opt_data.variations[event.data.decision.variationId].name);
                            }
                        } else {
                            if (!log_have_audiences) {
                                var checkTraffickingAudiences = function(d_t_aud) {
                                    var log_opt_data = log_opt_data || optimizely.get('data');
                                    var traffickingData = log_opt_data.campaigns[8284715063] ? log_opt_data.campaigns[8284715063] : false;
                                    if (traffickingData) {
                                        var audience_array = [];
                                        var experiments = traffickingData.experiments;
                                        for (j = 0; j < experiments.length; j++) {
                                            var audiences = experiments[j].audienceIds;
                                            if (audiences != undefined) {
                                                for (k = 0; k < audiences.length; k++) {
                                                    if (parseInt(audiences[k]) && audience_array.indexOf(audiences[k]) === -1) {
                                                        audience_array.push(audiences[k]);
                                                    }
                                                }
                                            }
                                        }
                                        var tempArray;
                                        var returnAudienceNames = function(array) {
                                            tempArray = [];
                                            for (w = 0; w < array.length; w++) {
                                                tempArray.push(log_opt_data.audiences[array[w]].name);
                                            }
                                            return tempArray;
                                        };
                                        var matchers = returnAudienceNames(d_t_aud);
                                        var failers = returnAudienceNames(audience_array.diff(d_t_aud));
                                        console.log('Matches: ', matchers);
                                        console.log('Fails: ', failers);
                                    }
                                };
                                checkTraffickingAudiences(event.data.decisionTicket.audienceIds);
                                log_have_audiences = true;
                            }
                            if (event.data.decision.pageId === "6252880791" && event.data.decision.experimentId === null) {
                                window.optly_events.lp_test = false;
                            } else if (event.data.decision.pageId === "6252880791") {
                                window.optly_events.lp_test = true;
                            }
                            if (event.data.decision.experimentId === null) {
                                console.log("No eligible experience for: " + log_opt_data.pages[event.data.decisionTicket.pageId].name);

                            } else {
                                console.log("For Page: " + log_pages[event.data.decisionTicket.pageId].name);
                                console.log("Experience:", log_opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", log_opt_data.variations[event.data.decision.variationId].name);
                                console.log("Priority Level: ", priority_number[event.data.decision.experimentId]);
                            }

                        }
                    };
                    window.optimizely = window.optimizely || [];
                    window["optimizely"].push({
                        type: "addListener",
                        filter: {
                            type: "lifecycle",
                            name: "campaignDecided"
                        },
                        // Add the campaignDecided function as a handler.
                        handler: logCampaignDecision
                    });
                },

      removeClass: function() {
        HTMLElement.prototype.removeClass = function(remove) {
          var newClassName = "";
          var i;
          var classes = this.className.split(" ");
          for(i = 0; i < classes.length; i++) {
            if(classes[i] !== remove) {
              newClassName += classes[i] + " ";
            }
          }
          this.className = newClassName;
        };
      },

      getParameterByName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      },

      getCookie: function(a, b) {
        b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
        return b ? b.pop() : "";
      },

      setCookie: function(c_name,value,exdays,c_domain) {
        c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
      },

      setExpiration: function(cookieLife) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
        return  expr.toGMTString();
      },

      loadScript: function(url, callback) {
       if(typeof url === 'string'){
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
      }
      },

      encodeEntities: function (value) {
        var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

        var NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;

        return value.
          replace(/&/g, "&amp;").
          replace(SURROGATE_PAIR_REGEXP, function (value) {
            var hi = value.charCodeAt(0);
            var low = value.charCodeAt(1);
            return "&#" + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ";";
          }).
          replace(NON_ALPHANUMERIC_REGEXP, function (value) {
            return "&#" + value.charCodeAt(0) + ";";
          }).
          replace(/</g, "&lt;").
          replace(/>/g, "&gt;");
      },

      hiddenPre: document.createElement("pre"),

      /**
       * decodes all entities into regular string
       * @param value
       * @returns {string} A string with decoded entities.
       */
      decodeEntities: function (value) {
        var hiddenPre = this.hiddenPre;

        if (!value) {
          return "";
        }

        hiddenPre.innerHTML = value.replace(/</g, "&lt;");
        // innerText depends on styling as it doesn't display hidden elements.
        // Therefore, it's better to use textContent not to cause unnecessary reflows.
        return hiddenPre.textContent;
      },

      debug: function() {
        if(localStorage.getItem("nytest")) {
          debugger;
        }
      }
    };

    // TODO: use lightweight HTTP lib
    var AJAX = {
      jsonp: function(urlWithCallback, callbackName, callback) {
        var script = document.createElement("script");
        script.src = urlWithCallback + "" + callbackName;
        window[callbackName] = function(data) {
          callback(null, data);
          delete window[callbackName];
        };
        document.head.appendChild(script);
      },

      get: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send(null);

        xhr.onreadystatechange = function() {
          var DONE = 4; // readyState 4 means the request is done.
          var OK = 200; // status 200 is a successful return.

          if (xhr.readyState === DONE) {

            if (xhr.status === OK) {
              callback(null, xhr.responseText);
            } else {
              callback(xhr.status, null);
              opt_console.log("[OptimizelyNYT] Error: " + xhr.status); // An error occurred during the request.
            }
          }
        };
      }
    };

    var NytContext = {
      getContext: function (callback) {
        var that = this;
        var context = {
          regi_id: undefined, // NYT user ID (identifies regi, sub)
          agent_id: undefined, // NYT Agent ID (identifies browser)
          user_type: undefined, // anon, regi, sub
          ip_segments: [], // does IP belongs to edu range?
          wat: "", // CIG "segment", i.e. EDU, K12, K12_ACTIVE_SUBS
          meter_count: undefined, // Current Meter from Meter Service
          counted: undefined, 
          hitPaywall: false,
          name: undefined,
          bundle_subscriptions: []
        };

        // simulating async.parallel
        //MTR.js does not get called on Home Page, should I change the expected Callbacks accordingly or make the common callback call?
        //Remove gateway parameter check
        var expectedCallbacks = 2;
        var pt = Getters.getPageType();
        if(meter_pages.indexOf(pt)>-1){
          var expectedCallbacks = 3;
        }
        var commonCallback = function () {
          expectedCallbacks--;
          if (expectedCallbacks === 0) {
            callback(null, context);
          }
        };

        this._getUserInfo(function (error, userInfo) {

          if (!error) {
            context.regi_id = parseInt(userInfo.id, 10);
            context.agent_id = Utils.getCookie("nyt-a");
            context.user_type = that._getUserType(userInfo);
            context.wat = userInfo.demographics.wat;
            context.name = userInfo.name;
            context.bundle_subscriptions = userInfo.demographics.bundle_subscriptions && userInfo.demographics.bundle_subscriptions ? userInfo.demographics.bundle_subscriptions : undefined;
            context.full_object = userInfo;
          }
          commonCallback();
        });

        this._getCigIPStatus(function (error, cigObj) {
          if (!error) {
            context.cigObj = cigObj;
          }
          commonCallback();
        });

        this._getMeterService(function (optly_meter_obj) {
          context.meter_count = optly_meter_obj.meter_count;
          context.hitPaywall = optly_meter_obj.hit_paywall;
          context.counted = optly_meter_obj.counted;
          commonCallback();
        });
      },

      _getUserType: function (userInfo) {
        if (JSON.stringify(userInfo.subscription).match(/HD|MM|MSD|MTD|TPR/)) {
          return "sub";
        }

        if (parseInt(userInfo.id, 10)) {
          return "regi";
        }

        return "anon";
      },

      _isLoggedIn: function () {
        return Utils.getCookie("nyt-d") ? true : false;
      },

      _getUserInfo: function (callback) {

        // this will be overridden based on AJAX response
        var payload = {
          "meta": {},
          "data": {
            "id": "0",
            "name": "",
            "subscription": [],
            "demographics": {}
          }
        };

        var domElement = document.getElementById("user-info-data");
        var isDataAvailableOnPage = false;
        if (domElement) {
          try {
            payload = JSON.parse(domElement.innerHTML);
            isDataAvailableOnPage = true;
            opt_console.log("[OptimizelyNYT] UserInfo is available on the page, no need to fetch");
            opt_console.log("[OptimizelyNYT] User Data: ", payload);
          } catch (error) {
            isDataAvailableOnPage = false;
            opt_console.log("[OptimizelyNYT] Error: Unable to parse UserInfo JSON");
          } finally {
            if (isDataAvailableOnPage) {
              callback(null, payload.data); // sync
              return; // exiting
            }
          }
        }
        if(window.location.origin === "https://myaccount.stg.nytimes.com"||window.location.origin === "https://myaccount.nytimes.com"){
          callback(null, payload.data);
          return;
        }
        var request_info_object = Getters.getUserRequestInfo();
        if(request_info_object.request === "get"){
          AJAX.get(request_info_object.url, function (error, response) {
						payload = {};
						payload.data = null;
            if (!error) {
              try {
                payload = typeof response === "object" ? response : window.JSON.parse(response);
              } catch (error) {
                opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
                // using default empty values
              }
            }
            callback(error, payload.data);

          });
        }
        else{
          AJAX.jsonp("https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp?callback=", 'userInfoCallback', function (error, response) {
					payload = {};
					payload.data = null;
          if (!error) {
            try {
              payload = typeof response === "object" ? response : window.JSON.parse(response);
            } catch (error) {
              opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
              // using default empty values
            }
          }
          callback(error, payload.data);

        });
        }
      },

      //TODO: support EDU & CORP
      _getCigIPStatus: function (callback) {
        var cigObj = {edu:{},b2b:{}};
        var edu_cookie_content = Utils.getCookie('edu_cig_opt');
        var b2b_cookie_content = Utils.getCookie('b2b_cig_opt');
        if(edu_cookie_content && b2b_cookie_content){
          cigObj.edu = JSON.parse(decodeURIComponent(edu_cookie_content));
          cigObj.b2b = JSON.parse(decodeURIComponent(b2b_cookie_content));
          callback(null, cigObj);
          return;
        }
        var apiUrl = Config.CIG_IP_SEG_API + "?";
        var testIp = Utils.getParameterByName("test_ip") || Utils.getParameterByName("testIp");
        if (testIp) {
          apiUrl += "test_ip=" + Utils.encodeEntities(testIp) + "&";
        }
        apiUrl += "jsoncallback=";
        AJAX.jsonp(apiUrl, "callback", function (error, response) {
          // this will be overridden based on AJAX response

          var data = {
            segments: [{
              c: {
                corp: "no"
              },
              e: {
                edu: "no"
              }
            }]
          };
          if (!error) {
            try {
              data = typeof response === "object" ? response.payload : window.JSON.parse(response).payload;
            } catch (error) {
              opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
              // using default empty values
            }
            var EDUsegments = data.segments[0].e;
            var CORPsegments = data.segments[0].c;
            if(!edu_cookie_content){
              if((cigObj.edu.isEduUser = EDUsegments.edu !== "no")){
                cigObj.edu.nickName = EDUsegments.nick_name ?  EDUsegments.nick_name : undefined;
                Utils.setCookie('edu_cig_opt',JSON.stringify(cigObj.edu),90,'.nytimes.com');
              }
              else{
                Utils.setCookie('edu_cig_opt',JSON.stringify(cigObj.edu),'.nytimes.com');
              }              
            }
            else{
              cigObj.edu = JSON.parse(decodeURIComponent(edu_cookie_content));
            }
            if(!b2b_cookie_content){
              if((cigObj.b2b.isCorpUser = CORPsegments.corp !== "no")){
                cigObj.b2b.orgName = CORPsegments.org_name ? CORPsegments.org_name : undefined;
                cigObj.b2b.orgType = CORPsegments.type ? CORPsegments.type : undefined;
                Utils.setCookie('b2b_cig_opt',JSON.stringify(cigObj.b2b),30,'.nytimes.com');
               }
               else{
                Utils.setCookie('b2b_cig_opt',JSON.stringify(cigObj.b2b),'.nytimes.com');
               }
            }
            else{
              cigObj.b2b = JSON.parse(decodeURIComponent(b2b_cookie_content));
            }
          }
          callback(error, cigObj);

        });
      },

      _getMeterService: function (callback) {
        var optly_meter_obj = {
          "meter_count": 0,
          "hit_paywall": false,
          "counted" : false
        };
        var pt = Getters.getPageType();
        if(meter_pages.indexOf(pt)>-1){
          //Poll for 
         var optutils = optimizely.get('utils');
          var cancelPolling = optutils.poll(
          function(){
          if(typeof window.require === 'function'){
            opt_console.log('Found require');

             window.require(['foundation/main'],function(){
            window.require(['auth/mtr','jquery/nyt'], function(mtr,$){
              mtr.meterReady.done(function(){
              optly_meter_obj.meter_count = mtr.getMeterPagesCount();
                opt_console.log("Deferred meter count is", optly_meter_obj.meter_count);
              optly_meter_obj.hit_paywall = mtr.hitPaywall;
                opt_console.log("Deferred hit paywall is ", optly_meter_obj.hit_paywall);
              optly_meter_obj.counted = mtr.counted;
                callback(optly_meter_obj);
              });
            window.optly_meter = mtr.getMeterPagesCount();
            opt_console.log("Old Optly Meter is " + optly_meter);
            },
            function(err){
              opt_console.log(err);
              callback(optly_meter_obj);
            });
               });


            cancelPolling();
          }else{
            opt_console.log('Polling for Require');
          }
          },50);   
        }
    }};

    var View = {
      action: function(event, payload) {

        switch (event) {
        case "ACTIVATE_PAGE":
          window["optimizely"].push({
            type: "page",
            pageName: payload
          });
          break;

        case "LOAD_WIDGET_PLACEMENT":
            //Widget loaded will handle all widgets
            //widgets include fallthrough, killset, normal async, a/b test
          placements.forEach(function(element) {
            if(element.name == payload.name && element.kill !== true && element.activated !== true && ((payload.multi == "true")? element.multi === payload.codename : true) && (element.pageTypes.indexOf(Getters.getPageType()) > -1 || element.metaTags.indexOf(Getters.getSourceApp()) > -1)) {
              opt_console.log("[OptimizelyNYT] ", event.toUpperCase(), payload);
              element.html = payload.html;
              element.css = payload.css;
              element.selector = payload.selector;
              element.script = payload.script;
              element.script_2 = payload.script_2;
              element.script_3 = payload.script_3;
              element.script_4 = payload.script_4;
              element.activated = true;
              element.callback = payload.callback;
              optutils.waitForElement(element.selector).then(function() {
                document.querySelector(element.selector).innerHTML = element.html;
                document.querySelector(element.selector).setAttribute('class',
                document.querySelector(element.selector).getAttribute('class') + " optly");
                Utils.loadScript(element.script);
                if(element.script_2 != ""){Utils.loadScript(element.script_2);};
                if(element.script_3 != ""){Utils.loadScript(element.script_3);};
                if(element.script_4 != ""){Utils.loadScript(element.script_4);};
                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = element.css;
                document.getElementsByTagName("head")[0].appendChild(style);
                if(element.callback) {
                  element.callback();
                }
              });
            }
          });
          break;
        case "ACTIVATE_VIEWS":
          placements.forEach(function(element) {
            if(element.page && (element.pageTypes.indexOf(Getters.getPageType()) > -1 || element.metaTags.indexOf(Getters.getSourceApp()) > -1)) {
              View.action("ACTIVATE_PAGE", element.page);
            }
          });
          break;
        }
      }
    };

    //TODO set these as attributes rather than returning variables
    /* exported Targeting */
    var Targeting = {
      getAudience: function(type) {
        switch(type) {
        case "user":
          return Getters.getUserType();
        case "bundles":
          return Getters.getBundleSubscriptions();
        case "seg_wat":
          return Getters.getWatSegment();
        case "seg_ip":
          return Getters.getIpSegments();
        case "meter_views":
          return Getters.getMeter();
        case "hit_paywall":
          return Getters.hitPaywall();
        case "counted":
          return Getters.meterCounted();
        }
      }
    };

    return {
      initialize: initialize,
      active: init,
      audience: Targeting.getAudience,
      getPageType: Getters.getPageType,
      getName: Getters.getUsername,
      loadScript: Utils.loadScript,
      setCookie: Utils.setCookie,
      viewAction: View.action,
      debugView: View,
      activateExperiment: Targeting.activateMulti,
      passThrough: Targeting.passThrough,
      userInfo: userInfo,
      getQueryParameter: Utils.getParameterByName,
      ajax: AJAX.get,
      getCountryText: Getters.getCountryText,
      initLogging: Utils.initLogging
    };
  })();

  window.optimizely = window.optimizely || [];

  window.optimizely.push({
    type: "addListener",
    filter: {
      type: "lifecycle",
      name: "initialized"
    },
    handler: function() {
      if(window.NYToptly.active !== true) {
        window.NYToptly.initialize();
      }
    }
  });
  }
}
if(window.location.href.indexOf("/get-started/thank-you") > -1){
    window.optimizely = window.optimizely || []; 
    window.optimizely.push({
    type: "user",
    attributes: {
        subscription_mode: SERVER_SIDE_DATA.mode,
        subscription_type: SERVER_SIDE_DATA.purchase_info.purchase_details.bundleName
    }
});}
})();
}, "namespace": "a3013110282", "listTargetingCookies": [], "dcpKeyfieldLocators": [{"dcp_datasource_id": "4300326370", "is_optimizely": true, "type": "uid", "name": ""}], "dcpServiceId": "4295653407", "audiences": [{"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|EduCWA/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_ip\") == \"edu\"", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "", "type": "cookies", "name": "isEDU", "match": "exists"}], ["or", {"value": "pox3vefah", "type": "vendor.krux", "name": "audiences", "match": null}], ["or", {"value": "rqtap0lsn", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "6679643984", "name": "[WAT / Krux] All EDU: *all* segments except K12"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') == \"sub\"", "type": "code", "name": null, "match": null}], ["or", {"value": "qxk0hzyjh", "type": "vendor.krux", "name": "audiences", "match": null}], ["or", {"value": "true", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "6696333431", "name": "[Subscriber Type] Subs "}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') !== \"sub\"", "type": "code", "name": null, "match": null}]]], "id": "6992450319", "name": "[Subscriber Type] Non-Subs"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]], ["or", ["not", ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}]]], ["or", ["not", ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], ["or", ["not", ["or", {"value": "United States of America", "type": "query", "name": "location", "match": "exact"}]]]], "id": "7209740780", "name": "[Geo] WW ex US"}, {"conditions": ["and", ["or", ["or", {"value": "AU", "type": "location", "name": null, "match": null}], ["or", {"value": "Australia", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "Aus", "type": "query", "name": "Location", "match": "exact"}]]], "id": "7798550316", "name": "[Geo] Australia"}, {"conditions": ["and", ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}], ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], "id": "7814230912", "name": "[Geo] US"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/K12/) !== null", "type": "code", "name": null, "match": null}]]], "id": "7857642821", "name": "[WAT] K12"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/HD_Grace/) !== null", "type": "code", "name": null, "match": null}]]], "id": "7877803306", "name": "[WAT] HD_Grace"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "migration2017", "type": "cookies", "name": "abTest", "match": "exists"}]]]], "id": "8183220341", "name": "[Cookie] abTest does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "qxk0hzyjh", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8214062166", "name": "[Krux] All Subscribers qxk0hzyjh"}, {"conditions": ["and", ["or", ["or", {"value": "IN", "type": "location", "name": null, "match": null}]]], "id": "8248972263", "name": "[Geo] India"}, {"conditions": ["and", ["or", ["or", {"value": "National Library of the Czech Republic", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8252297528", "name": "[B2B] National Library of the Czech Republic"}, {"conditions": ["and", ["or", ["or", {"value": "Wythe Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8266808565", "name": "[B2B] Wythe Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Goldsmiths Univ London", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8269256599", "name": "[B2B] Goldsmiths Univ London"}, {"conditions": ["and", ["or", ["or", {"value": "Conrad Chicago", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8269873343", "name": "[B2B] Conrad Chicago"}, {"conditions": ["and", ["or", ["or", {"value": "Big Sky Resort", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8273176592", "name": "[B2B] Big Sky Resort"}, {"conditions": ["and", ["or", ["or", {"value": "Antlers at Vail", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8275464348", "name": "[B2B] Antlers at Vail"}, {"conditions": ["and", ["or", ["or", {"value": "Sewickley Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8277156228", "name": "[B2B] Sewickley Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Vancouver Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8278311314", "name": "[B2B] Vancouver Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "KLNF", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8279371394", "name": "[B2B] KLNF"}, {"conditions": ["and", ["or", ["or", {"value": "rlijf3y9e", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8281592112", "name": "[Krux] Formers INYT rlijf3y9e"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('meter_views') < 2", "type": "code", "name": null, "match": null}]]], "id": "8287944678", "name": "Meter views less than 2"}, {"conditions": ["and", ["or", ["or", {"value": "Union Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8295712999", "name": "[B2B] Union Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "qxk0hzyjh", "type": "vendor.krux", "name": "audiences", "match": null}]], ["or", ["or", {"value": "window.NYToptly.audience('user') == \"anon\"", "type": "code", "name": null, "match": null}]]], "id": "8298793054", "name": "[Krux] Logged-out Subs qxk0hzyjh"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('G') !== -1", "type": "code", "name": null, "match": null}]]], "id": "8300495550", "name": "[Bundle] G"}, {"conditions": ["and", ["or", ["or", {"value": "au_test_2017", "type": "cookies", "name": "mtrab", "match": "substring"}]]], "id": "8301334058", "name": "[Cookie] mtrab AU Paywall Test"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('section/learning') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "learning", "type": "query", "name": "contentCollection", "match": "exact"}]]], "id": "8301992165", "name": "[Page Targeting] Learning Network - All Articles/Pages"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "IN", "type": "location", "name": null, "match": null}, {"value": "US", "type": "location", "name": null, "match": null}]]]], "id": "8302021295", "name": "[Geo] WW ex India, US"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "AU", "type": "location", "name": null, "match": null}]]]], "id": "8303070362", "name": "[Geo] NOT Australia"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/SUBS_NOT_OPT_IN/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/SUBS_OPT_OUT/) !== null", "type": "code", "name": null, "match": null}]]], "id": "8310130736", "name": "[WAT] Newsletter - opted out / not opted in"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.userInfo.full_object.subscription.indexOf(\"FTEX\") !== -1", "type": "code", "name": null, "match": null}]]], "id": "8315260461", "name": "[Capability] FTEX"}, {"conditions": ["and", ["or", ["or", {"value": "(document.location.href.indexOf('lp8W3WH') > -1 || document.location.href.indexOf('lp8QXR6') > -1 || document.location.href.indexOf('lp8U8QY') > -1 || document.location.href.indexOf('lp8F7Q8') > -1)", "type": "code", "name": null, "match": null}]]], "id": "8316027593", "name": "[page] - Lift Off Project LPs (lp8W3WH, lp8QXR6, lp8U8QY, lp8F7Q8)"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('lp8XKUR.html')>-1;", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('/subscription') === -1", "type": "code", "name": null, "match": null}]]], "id": "8316160614", "name": "Whole Meter + lp8XKUR - lp_july_sale_design_0717"}, {"conditions": ["and", ["or", ["or", {"value": "lp_spotify_gbb_0617", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8322614311", "name": "abTest= lp_spotify_gbb_0617 (recycle)"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "opt", "type": "cookies", "name": "XvOpt", "match": "exists"}]]]], "id": "8325342424", "name": "[Cookie] XvOpt does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "Ottawa Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8325581970", "name": "[B2B] Ottawa Public Library"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "IN", "type": "location", "name": null, "match": null}]]]], "id": "8325672904", "name": "[Geo] NOT India"}, {"conditions": ["and", ["or", ["or", {"value": "|||EU", "type": "location", "name": null, "match": null}, {"value": "GB", "type": "location", "name": null, "match": null}, {"value": "CA", "type": "location", "name": null, "match": null}], ["or", {"value": "AU", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "CA", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "EU", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "GB", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "AU", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "GB", "type": "cookies", "name": "abTestLocation", "match": "exact"}], ["or", {"value": "EU", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "8329145104", "name": "INTL Price Test Phase II - April 2017 Targeted Audiences"}, {"conditions": ["and", ["or", ["or", {"value": "Life Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8330140946", "name": "[B2B] Life Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_tuesday", "type": "time_and_day", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]]], "id": "8331673235", "name": "[Dayparting] INYT Welcome Killset"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "8331680099", "name": "Desktop/Laptop only"}, {"conditions": ["and", ["or", ["or", {"value": "ri396gtth", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "ri385d5j9", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "ri3s1no6w", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8332580255", "name": "[Krux] Spotify: Inclusions (LP, Step 1, Raw Users)"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('lp89YH4.html') > -1", "type": "code", "name": null, "match": null}]]], "id": "8335142559", "name": "INTL Price Test Phase II - April 2017 - Test Targeted LPs"}, {"conditions": ["and", ["or", ["or", {"value": "document.getElementsByTagName('html')[0].getAttribute('data-nyt-ab').match(/\\bLiftoff\\b/) !== null", "type": "code", "name": null, "match": null}]]], "id": "8335242713", "name": "[AB] LiftOff"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_tuesday,wednesday,thursday", "type": "time_and_day", "name": null, "match": null}]], ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]], "id": "8340731813", "name": "[Dayparting] Welcome Killset for US Homepage"}, {"conditions": ["and", ["or", ["or", {"value": "Singapore American Club", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8346021039", "name": "[B2B] Access is provided by Singapore American Club"}, {"conditions": ["and", ["or", ["or", {"value": "meter2_iframe", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8349680476", "name": "abTest = meter2_iframe"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_wednesday,thursday", "type": "time_and_day", "name": null, "match": null}]]], "id": "8350622915", "name": "[Dayparting 10] Wednesdays, Thursdays only"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "GraceViewed", "match": "exists"}]]]], "id": "8354152464", "name": "[Cookie] GraceViewed does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "Homewood Suites Seattle Convention Center", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8354161151", "name": "[B2B] Homewood Suites Seattle Convention Center"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "au_test_2017", "type": "cookies", "name": "mtrab", "match": "exact"}]]]], "id": "8355611617", "name": "[Cookie] ex mtrab AU Paywall Test "}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('arts') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('technology') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('movies') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('books') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('theater') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('bits') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('playlist') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('music') > -1", "type": "code", "name": null, "match": null}]]], "id": "8356272587", "name": "[Page Targeting] Arts and Tech Pages"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') !== \"sub\"", "type": "code", "name": null, "match": null}]]], "id": "8356764950", "name": "[Subscriber Type] Non-Subs Alt"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "liftoffSurveyViewed", "type": "cookies", "name": "abTest", "match": "exact"}]]]], "id": "8362962560", "name": "[Cookie] liftoffSurveyViewed does NOT exist"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "qxk0hzyjh", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "ri3888kli", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "ri39f72pi", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "ri39twc4w", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "ri39w7ayx", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "rp5p1ue2r", "type": "vendor.krux", "name": "audiences", "match": null}]]]], "id": "8373445907", "name": "[Krux] Spotify: NOT current sub, etc."}, {"conditions": ["and", ["or", ["or", {"value": "lp_july_sale_design_0717", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8377114830", "name": "[Cookie] abTest Cookie - lp_july_sale_design_0717"}, {"conditions": ["and", ["or", ["or", {"value": "julysalerow", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8378297139", "name": "[Cookie] abTest=julysalerow"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('A') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('A_PLUS') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('B') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('B_PLUS') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('D') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('F') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('S') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('X') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_ACQ') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_RET') !== -1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.userInfo.full_object.demographics.bundle_subscriptions[0].in_grace", "type": "code", "name": null, "match": null}]]], "id": "8379916476", "name": "[Bundle] Digi Subs in Grace"}, {"conditions": ["and", ["or", ["or", {"value": "ADBLOCK", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "q3vfitxb0", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8380850399", "name": "[Cookie] B2B w ADBLOCK flag"}, {"conditions": ["and", ["or", ["or", {"value": "wm_open_access_usgm_0617", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8384840906", "name": "[Cookie] - abTest = wm_open_access_usgm_0617"}, {"conditions": ["and", ["or", ["or", {"value": "anchortest", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8396871406", "name": "[Cookie] abTest=anchortest"}, {"conditions": ["and", ["or", ["or", {"value": "mtr2cln", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8399810343", "name": "[Cookie] abTest=mtr2cln"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "survey_triggered", "match": "exists"}]]]], "id": "8404891843", "name": "[Cookie] survey_triggered does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "defaultbau", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8405565879", "name": "abTest=defaultbau"}, {"conditions": ["and", ["or", ["or", {"value": "julysale", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8408862662", "name": "abTest=julysale"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/JKR/) !== null", "type": "code", "name": null, "match": null}]]], "id": "8412826208", "name": "[WAT} JKR"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\") === undefined || window.NYToptly.audience(\"seg_wat\").match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|K12|EduCWA/) === null ", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.audience(\"seg_ip\") !== \"edu\"", "type": "code", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}]]], ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "isEDU", "match": "exists"}]]]], "id": "8413422098", "name": "[WAT] Exclude All EDU segments"}, {"conditions": ["and", ["or", ["or", {"value": "julysaleaus", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8418685646", "name": "abTest=julysaleaus"}, {"conditions": ["and", ["or", ["or", {"value": "qudtfoenz", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "qudtarl0q", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8421381989", "name": "[Krux] All Formers (Digi and HD)"}, {"conditions": ["and", ["or", ["or", {"value": "Vi_Demo_DJP", "type": "query", "name": "ad-keywords", "match": "exact"}]]], "id": "8426551260", "name": "[Keyword] Vi_Demo_DJP"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "welcomeViewed", "match": "exists"}]]]], "id": "8428263414", "name": "[Cookie] welcomeViewed does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('8HYKU') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('/subscription') === -1", "type": "code", "name": null, "match": null}]]], "id": "8438541808", "name": "[Whole Meter + Landing Page] 8HYKU"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "optly_new_debug", "match": "exact"}]]], "id": "8441471525", "name": "Optly New Debug Campaign"}, {"conditions": ["and", ["or", ["or", {"value": "(function() {\n    if (document.getElementsByTagName('html')[0].getAttribute('data-nyt-ab').match(/\\bLiftoff\\b/) === null) {\n        return false;\n    }\n\n    var ret = false;\n    var d = new Date()\n    var day = d.getUTCDate();\n    var month = d.getUTCMonth() + 1;\n    var yr  = d.getUTCFullYear();\n    var endOfLastMonth = new Date(yr + \"-\" + month + \"-1\").valueOf() \n\n    if (month === 0) { month = 11; yr -= 1; }\n    else { month -= 1; }\n    var startOfLastMonth = new Date(yr + \"-\" + month + \"-1\").valueOf() \n\n    var gwViews = optimizely.get('behavior').query( {\n            \"version\": \"0.2\",\n            \"filter\": [\n                {\"field\":[\"name\"], \"value\": \"gateway_impression\" },\n                {\"field\":[\"time\"], \"value\": endOfLastMonth, \"comparator\": \"gte\" },\n                {\"field\":[\"time\"], \"value\": startOfLastMonth, \"comparator\": \"lte\"}\n            ]\n        }\n    )\n\n\tgwViews = gwViews.filter(function(obj) {\n\t\treturn obj.tags && obj.tags.codename && obj.tags.codename === \"ft_meter_liftoff_0417\";\n\t});\n\n    if(gwViews) { ret = true; }\n    return ret;\n})();\n\n", "type": "code", "name": null, "match": null}]]], "id": "8447233094", "name": "liftOff_survey"}, {"conditions": ["and", ["or", ["or", {"value": "paywall_inyt_au_0217", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8452510015", "name": "[Cookie] abTest=paywall_inyt_au_0217"}, {"conditions": ["and", ["or", ["or", {"value": "tstore", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8454812373", "name": "abTest=tstore"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.getPageType().toLowerCase() !== \"homepage\"", "type": "code", "name": null, "match": null}]]], "id": "8456760649", "name": "[Page Targeting] Exclude the Homepage"}, {"conditions": ["and", ["or", ["or", {"value": "inyt_july1", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8461310777", "name": "abTest=inyt_july1"}, {"conditions": ["and", ["or", ["or", {"value": "july_edu2a", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8468167069", "name": "abTest=july_edu2a"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "fbpx", "match": "exists"}]]]], "id": "8471930223", "name": "[Cookie] fbpx does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "The Condor Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8472101818", "name": "[B2B] Condor Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Anatolia College/American College of Thessaloniki", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8480010926", "name": "[B2B] Anatolia College/American College of Thessaloniki"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('nytimes.com/') > -1", "type": "code", "name": null, "match": null}]]], "id": "8485734812", "name": "[Page Targeting] nytimes.com domain only"}], "integrationSettings": [{"krux_namespace": "", "functions": {
  fetchData: function() {
    var MAX_RETRY = 5;
    var WAIT_TIME = 500;
    var retryCount = 0;

    var wrapper = function() {
      var segmentName = window.optimizely && window.optimizely.getAccountId && window.optimizely.getAccountId() && 'o_' + window.optimizely.getAccountId() + '_segments';
      var dataAvailable = segmentName && window.Krux && window.Krux[segmentName];
      if (dataAvailable) {
        var data = {};
        data['audiences'] = window.Krux[segmentName];
        window['optimizely'].push(['storeThirdPartyData', 'krux', data]);
      } else if (retryCount < MAX_RETRY) {
        retryCount++;
        window.setTimeout(wrapper, WAIT_TIME);
      }

    };
    window.setTimeout(wrapper, WAIT_TIME);
  }
}
, "dataFetchMethod": "custom_javascript", "id": "krux"}], "anonymizeIP": false, "projectId": "8235041264", "visitorAttributes": [], "accountId": "3013110282", "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: 'anchorad_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "anchorad_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":"a"},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner) {
   document.querySelector("#Anchor").innerHTML = widget.full_html;
   var style = document.createElement("style");
   style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
} else {
   widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
   var widgetObj = {
       name: "AnchorAd",
       html: widget.full_html,
       multi: widget.multi,
       css: widget.css,
       codename: widget.nytID,
       script: widget.extra_js,
       script_2: widget.extra_js_2,
       script_3: widget.extra_js_3,
       script_4: widget.extra_js_4,
       callback: function() {
           var id = widget.nytID,
               js = widget.custom_js,
         			 campaign_id = widget.campaignId;
        	 var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;	
           console.log("[OptimizelyNYT] AnchorAd Impression ID:" + widget.nytID), window.optimizely.push({
               type: "event",
               eventName: "anchorad_impression",
               tags: {
                   codename: id,
                 	 agentId: agent_id
               }
           }), document.querySelectorAll("#Anchor a").forEach(function(a) {
             if(a.href.indexOf('/subscription') > -1){
               a.onclick = function() {
                   console.log("[OptimizelyNYT] AnchorAd Click ID:" + id), window.optimizely.push({
                       type: "event",
                       eventName: "anchorad_clicked",
                       tags: {
                           codename: id,
                           campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                         	 agentId: agent_id
                       }
                   })
               }
             }
           }), "" !== js && eval(js);
       },
       selector: "#Anchor"
   };
var behavior = optimizely.get('behavior');
var anchor_query = function(hours){
var impressions = behavior.query({"version": "0.2",
"filter":[              
    {
      "field":["name"],
      "value":"anchorad_impression"
    },
    {
      "field":["age"],
      "comparator": "lt",
      "value": hours*60*60*1000
    },
    {
      "field":["tags","codename"],
      "value":widget.nytID
    }],
"reduce":{
"aggregator":"count"
}
});
 return impressions;
};
if(widget.anchor_meter.indexOf('Sub') > -1){
  console.log('Anchor Detects Sub Experience');
  var anchor_ad_session_impressions = anchor_query(widget.anchor_ad_session_hours);
  var anchor_ad_lifetime_impressions = anchor_query(widget.anchor_ad_cap_days*24);
  if(anchor_ad_session_impressions < widget.anchor_ad_session_cap && anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
		console.log("Session Impressions:" + anchor_ad_session_impressions + " was less than " + widget.anchor_ad_session_cap);
    console.log("Lifetime Impressions:" + anchor_ad_lifetime_impressions + " was less than " + widget.anchor_ad_impression_cap);
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
  else{
    if(anchor_ad_session_impressions < widget.anchor_ad_session_cap){
   console.log("Session Impressions: " + anchor_ad_session_impressions + " was greater than or equal to session cap of " + widget.anchor_ad_session_cap);
  }
    if(anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
    console.log("Lifetime Impressions: " + anchor_ad_lifetime_impressions + " was greater than or equal to lifetime cap of " + widget.anchor_ad_impression_cap);
    }}
}
else if(window.NYToptly.audience('counted') && widget.anchor_meter.indexOf(window.NYToptly.audience("meter_views").toString())>-1){
  	console.log('Pass Meter');
     window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
}
else{
    console.log('Anchor already viewed in past, ', widget.anchor_days,' Days');
    console.log('Meter Counted is ',window.NYToptly.audience('counted'));
    console.log('Failed Anchor Meter');
    console.log('Anchor set to appear at Meter ' + widget.anchor_meter);
    console.log('Current Meter at ' + window.NYToptly.audience("meter_views"));
}
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "anchorad_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":"a"},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'bar1poc2_staging',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "bar1poc2_staging";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
    document.querySelector("#Bar1").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "Bar1",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
          	var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            "" !== js && eval(js), console.log("[OptimizelyNYT] Bar1 Impression ID:" + id), window.optimizely.push({
                type: "event",
                eventName: "bar1_impression",
                tags: {
                    codename: id,
                  	agentId: agent_id
                }
            }), document.querySelectorAll("#Bar1 a").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Bar1 Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "bar1_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                          	agentId: agent_id
                        }
                    })
                }.bind(void 0, id)
            });
            var bar1_hover_triggered = false;
            document.querySelector('#Bar1').onmouseover = function() {
                if (!bar1_hover_triggered) {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "bar1_hover",
                        tags: {
                          	agentId: agent_id
                        }
                    });
                    bar1_hover_triggered = true
                }
            }
        },
        selector: "#Bar1"
    };
    if (document.querySelector('#Bar1') && !window.NYToptly.getQueryParameter('gwt')) {
        (function() {
            if (typeof window.CustomEvent === "function") return false;

            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
        var bar1event = new CustomEvent('bar1rendered', {
            detail: undefined
        });
        document.dispatchEvent(bar1event);
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    } else {
        console.log('Bar 1 container not present')
    }
    setTimeout(function() {
        window.NYToptly.loadScript("https://static01.nyt.com/marketing/ADX/bar1/bar1_meter_count_v2.js", null);
        console.log('attempting load')
    }, 6000);
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "bar1poc2_staging";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'interstitial_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "interstitial_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"interstitial_meter","default_value":"6"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  	var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
    appendDiv('Interstitial_optly');
    document.querySelector("#Interstitial_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "Interstitial",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
      	script_2: widget.extra_js_2,
      	script_3: widget.extra_js_3,
      	script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
          			var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            console.log("[OptimizelyNYT] Interstitial Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "interstitial_impression",
                tags: {
                    codename: id,
                  	agentId: agent_id
                }
            }), "" !== js && eval(js), document.querySelectorAll("#Interstitial_optly a").forEach(function(a) {
              if(a.href.indexOf('/subscription') > -1 ){
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Interstitial Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "interstitial_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                          	agentId: agent_id
                        }
                    });
                }
                }
                });
          var close_buttons = [];
          close_buttons.push(document.getElementById('growl-optout'));
          close_buttons.push(document.getElementById('growl-skipthis'));
          close_buttons.forEach(function(element){
						element.onclick = function(){
            var interstitial_optly = document.getElementById('Interstitial_optly');
            interstitial_optly.parentNode.removeChild(interstitial_optly);	
          }}
          )
        },
        selector: "#Interstitial_optly"
    };
    if (window.NYToptly.audience('counted') && window.NYToptly.audience('meter_views').toString() === widget.interstitial_meter || document.cookie.indexOf('preview_interstitial')> -1) {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
      	/*if(window.location.href.indexOf('stg.nytimes.com') > -1){
        window.nytAnalytics.MeterTrigger({"name": "interstitial"});
        }*/
    } else {
      	console.log('Meter Counted is ',window.NYToptly.audience('counted'));
        console.log('Interstitial Fail Meter');
      	console.log('Interstitial Meter set to ', widget.interstitial_meter);
      	console.log('Current User Meter ', window.NYToptly.audience('meter_views').toString());
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "interstitial_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"interstitial_meter","default_value":"6"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'killset_pocII',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "killset_pocII";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"placement_name","default_value":"Growl"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var optly_killset = true;
console.log('Killset applied to ' + widget.placement_name);
var killed_selector;
switch(widget.placement_name){
	case "Growl":
		killed_selector = "#Growl_optly";
		break;
	case "Interstitial":
		killed_selector = "#Interstitial_optly";
		break;
  case "Anchor Ad":
    killed_selector = "#Anchor_optly";
    break;
}
if(killed_selector){
var newDiv = document.createElement("div");
newDiv.setAttribute('class',"optly_killset " + widget.placement_name);
var killed_element = document.querySelector(killed_selector);
killed_element.insertBefore(newDiv,killed_element.firstChild);}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "killset_pocII";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"placement_name","default_value":"Growl"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: 'abchannelpass_staging',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-widget-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"abchannelpass\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("widget.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "abchannelpass_staging";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"no_placement","default_value":[]}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-abchannelpass_staging';
widget._styleTag.innerHTML = '.abchannelpass { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        window.NYToptly.viewAction('LOAD_WIDGET_PASS_PLACEMENT', widget.no_placement);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "abchannelpass_staging";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"no_placement","default_value":[]}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-abchannelpass_staging');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'lp',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "lp";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"framework_restore","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (optimizely.state && optimizely.state.directives && optimizely.state.directives.isEditor) {
    document.querySelector("#LP_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);
    var widgetObj = {
        name: "LP",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        script: widget.extra_js,
        codename: widget.nytID,
        selector: "#LP_optly",
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
            console.log("[OptimizelyNYT - Landing Page Ext.] LP Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "lp_impression",
                tags: {
                    id: id
                }
            }), document.querySelectorAll("body [data-cta]").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT - Landing Page Ext.] LP Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "lp_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
                        }
                    })
                }
            }), "" !== widget.custom_js && eval(js)
        }
    };
    window.location.href.indexOf("subscription") > -1 && window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj)
}
if (widget.framework_restore !== 'true') {
  var utils = optimizely.get('utils');
	utils.waitForElement('.exo_loading').then(function(){
        console.log("[OptimizelyNYT - Landing Page Ext.] Remove Spinner");
    	document.querySelector('.exo_loading').classList.remove('exo_loading');
    });
  	utils.waitForElement('body > #container, #outterwrapper.shell, #shell, #container, body > .wrapper, body > .page').then(function(){
        console.log("[OptimizelyNYT - Landing Page Ext.] Show Page");
    	document.querySelector('body > #container, #outterwrapper.shell, #shell, #container, body > .wrapper, body > .page').style.visibility = 'visible';
  });
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "lp";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"framework_restore","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'test_extension_search',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"test_extension_search\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "test_extension_search";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"p_m","default_value":"Match Found"},{"name":"n_m","default_value":"Match not found."},{"name":"click_go","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-test_extension_search';
widget._styleTag.innerHTML = '.test_extension_search { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        	$(document).ready(function(){
	window.optimizely = window.optimizely || [];
	
	

                   
  $('head').append('<style>' + extension.css + '</style>');
var utils = window.optimizely.get('utils');
utils.waitForElement('#yourSearch button').then(function() {
  console.log("in");
  $('#yourSearch button').bind('click',function(){
  	var url = window.location;
  	var hash = url.hash;
    console.log('click');
  	if(hash){
      console.log(hash);
  		var queryString = (hash.split('#/')[1]).split('/')[0];
   		var mockData = ["john", "paul", "george", "ringo"];
  		if(mockData.indexOf(queryString) !== -1){
 				$('.cColumn').html(extension.p_m); 	
  		}else{
    		$('.cColumn').html(extension.n_m);
  		}
  	}
  
  });
  
});
  
    window.optimizely.push([
                        'trackEvent','click'
                    ]);               

  });
	
 


      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "test_extension_search";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"p_m","default_value":"Match Found"},{"name":"n_m","default_value":"Match not found."},{"name":"click_go","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-test_extension_search');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'Growlpoc_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "Growlpoc_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":""},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner) {
     	var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
    appendDiv('Gateway_optly');
   document.querySelector('#Gateway_optly').innerHTML=widget.full_html;
 var style = document.createElement("style");
 style.type = "text/css";
 style.innerHTML = widget.css;
 document.getElementsByTagName("head")[0].appendChild(style);
  if(typeof(window.NYToptly) !== "undefined") { window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);}
  if(widget.custom_js !== "") {
    eval(widget.custom_js);
  }
} else {
  
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

  var widgetObj = {
    name: 'Gateway',
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.extra_js,
    script_2: widget.extra_js_2,
    script_3: widget.extra_js_3,
    script_4: widget.extra_js_4,
    callback: function() {
      var id = widget.nytID;
      var js = widget.custom_js;
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
      if(js !== "") {
      	eval(js);
      }
      console.log("[OptimizelyNYT] gateway Impression ID:" + id);
      window['optimizely'].push({
        type: "event",
        eventName: "gateway_impression",
        tags: {
         codename: id,
         agentId: agent_id
        }
			});
      document.querySelectorAll('#gw-bg .gw-clickable,#cta-extended').forEach(function(node) {
        node.onclick = function() { 
          console.log("[OptimizelyNYT] gateway Click ID:" + id);
          window['optimizely'].push({
            type: "event",
            eventName: "gateway_clicked",
            tags: {
             codename: id,
             campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
         		 agentId: agent_id
            }
          });
        };
      });
    },
    selector: "#gatewayUnit"
  };
  if(window.location.search.indexOf('gwt=pay') > -1){
  window.NYToptly.viewAction('LOAD_WIDGET_PLACEMENT', widgetObj);
    window.optly_events.gateway = true;
    var element = document.getElementById("gateway_hider");
		element.parentNode.removeChild(element);
  }
  else{
    window.optly_events.gateway = false;
  console.log('No Gateway Parameter');
  }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "Growlpoc_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":""},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();

      },
    });

PluginManager.registerWidget({
      widgetId: 'growl_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "growl_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":"5"},{"name":"growl_meter_2","default_value":"9"},{"name":"growl_meter_3","default_value":"10"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
  appendDiv('Growl_optly');
 document.querySelector('#Growl_optly').innerHTML = widget.full_html;
 var style = document.createElement("style");
 style.type = "text/css";
 style.innerHTML = widget.css;
 document.getElementsByTagName("head")[0].appendChild(style);
 window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
  if(widget.custom_js !== "") {
    eval(widget.custom_js);
  }
} else {
  
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

  var widgetObj = {
    name: 'Growl',
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.extra_js,
    script_2: widget.extra_js_2,
    script_3: widget.extra_js_3,
    script_4: widget.extra_js_4,
    callback: function() {
      var id = widget.nytID;
      var js = widget.custom_js;
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
      if(js !== "") {
      	eval(js);
      }
      console.log("[OptimizelyNYT] growl Impression ID:" + id);
      window['optimizely'].push({
        type: "event",
        eventName: "growl_impression",
        tags: {
         codename: id,
         agentId: agent_id
        }
			});
      document.querySelectorAll('#Growl_optly a').forEach(function(node) {
        if(node.href.indexOf('/subscription') > -1){
        node.onclick = function() { 
          console.log("[OptimizelyNYT] growl Click ID:" + id);
          window['optimizely'].push({
            type: "event",
            eventName: "growl_clicked",
            tags: {
             codename: id,
             campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
        		 agentId: agent_id
            }
          });
        };
      }
      });
      var opt_close = document.querySelector('#growl-close');
      opt_close.onclick = function(){
					var opt_growl = document.getElementById('Growl_optly');
					opt_growl.parentNode.removeChild(opt_growl);
					};
    },
    selector: "#Growl_optly"
  };
 var meter_count_string = window.NYToptly.audience("meter_views").toString();
 var debugFlag = (window.location.search.indexOf("debug=1") > -1);
  if((window.NYToptly.audience('counted') || debugFlag) && 
     ( meter_count_string === widget.growl_meter || 
	   meter_count_string === widget.growl_meter_2 || 
	   meter_count_string === widget.growl_meter_3
	 )
  ){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
  }
  else{
  var child_div = document.createElement("div");
  document.querySelector('#Growl_optly').appendChild(child_div);
  console.log('Meter Counted is ',window.NYToptly.audience('counted'));
  console.log('Growl Fail Meters');
  console.log('Current Growl Meters at ');
  }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "growl_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":"5"},{"name":"growl_meter_2","default_value":"9"},{"name":"growl_meter_3","default_value":"10"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'WelcomeAd',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "WelcomeAd";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  	var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      }
    appendDiv('WelcomeAd_optly');
    document.querySelector("#WelcomeAd_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "WelcomeAd",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
      	script_2: widget.extra_js_2,
      	script_3: widget.extra_js_3,
      	script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
          	var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            console.log("[OptimizelyNYT] Welcome Ad Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "welcomead_impression",
                tags: {
                    codename: id,
                  	agentId: agent_id
                }
            }), "" !== js && eval(js), document.querySelectorAll("#WelcomeAd_optly a#cta-extended").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Interstitial Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "welcomead_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                          	agentID: agent_id
                        }
                    });
                }
            });
         var opt_close = document.querySelector('#instl_close');
          opt_close.onclick = function(){
					var opt_welcome_ad = document.getElementById('WelcomeAd_optly');
					opt_welcome_ad.parentNode.removeChild(opt_welcome_ad)
					};
        },
        selector: "#WelcomeAd_optly"
    };
  		var behavior = optimizely.get('behavior');
  		var welcome_query = function(hours){
        var impressions = behavior.query({"version": "0.2",
				"filter":[              {
				"field":["name"],
			  "value":"welcomead_impression"
				},{
          "field":["age"],
			 "comparator": "lt",
             "value": hours*60*60*1000
        },{
                  "field":["tags","codename"],
                     "value":widget.nytID
                                         }],
				"reduce":{
				"aggregator":"count"
				}
				});
         return impressions;
      }
  		var welcome_ads_small_cap = welcome_query(widget.session_cap_hours);
  		var welcome_ads_long_cap = welcome_query(24*widget.freq_cap_days);
			if(welcome_ads_small_cap < widget.session_cap){
        console.log(welcome_ads_small_cap + " was less than session cap of " + widget.session_cap)
      }
  		if(widget.freq_cap_number != "" && widget.freq_cap_days != ""){
        if(welcome_ads_small_cap < widget.session_cap && welcome_ads_long_cap < widget.freq_cap_number){
        	window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        }
        else{
        console.log("Failed Frequency Cap ",welcome_ads_long_cap, widget.freq_cap_number);
        }
      }
  	else if(welcome_ads_small_cap < widget.session_cap){window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);}
  else{
  console.log('Welcome Ad already shown');
  }

}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "WelcomeAd";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'New_Header',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"New_Header\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "New_Header";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-New_Header';
widget._styleTag.innerHTML = '.New_Header { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
    
if(null != document.querySelector("#b2bpers-container")){ 
    var newDiv = document.createElement("div");
    newDiv.setAttribute('id',id);
    document.body.appendChild(newDiv);
    console.log("[OptimizelyNYT] "+ id + " div inserted");
      
    appendDiv('header_ribbon');
    document.querySelector("#b2bpers-container_optly").innerHTML = widget.full_html;
} else {
	document.querySelector("#b2bpers-container").innerHTML = widget.full_html;

}
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "New_Header";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-New_Header');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'cancel_subscription',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"cancel_subscription\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "cancel_subscription";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-cancel_subscription';
widget._styleTag.innerHTML = '.cancel_subscription { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        $(function() {
$('body').prepend(extension.$html);
  $( '<div id="black_ribbon"></div>' ).insertBefore( $("body"));
document.querySelector("#black_ribbon").innerHTML = widget.full_html;
  var style = document.createElement("style");
  style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
  $("#closeButtonImg").click(function(){
$(".innerPopup").css("display","none");
});
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "cancel_subscription";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-cancel_subscription');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'black_header',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"black_header\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "black_header";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-black_header';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);#extension-css,#masthead,#navigation,.has-ribbon #ribbon{margin-top:38px!important}.font-smoothing{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#b2bpers-container{position:fixed;width:100%;top:0;left:0;z-index:1000000140}#b2bpers-ad{position:absolute;background-color:#000;text-align:center;font-size:14px;color:#fff;font-family:franklin-normal-700,sans-serif;font-weight:700;right:6px;top:-1px;width:100%;padding:10px 0}#b2bpers-ad a{color:#fff;text-decoration:underline}.app-collection .shell{padding-top:90px}.NYT5Style #shell{padding-top:30px}@media screen and (max-width:768px){#b2bpers-container{display:none!important}}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        $(function() {
$('body').prepend(extension.$html);
//  $( '<div id="b2bpers-container" class="font-smoothing"><div id="b2bpers-ad"></div></div>' ).insertBefore( "#masthead-cap " );
  $( ".black_header" ).append( "<div id=\"b2bpers-container\" class=\"font-smoothing\"><div id=\"b2bpers-ad\"></div></div>");
  document.querySelector("#b2bpers-ad").innerHTML = widget.full_html;
  var style = document.createElement("style");
  style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
	window['optimizely'].push({
  type: "event",
  eventName: "fixedheader_impression"
}); 
  document.querySelector("#b2bpers-ad").onclick = function(){
		window['optimizely'].push({
  type: "event",
  eventName: "fixedheader_click"
});}
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "black_header";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-black_header');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'growl_meter_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "growl_meter_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["2"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner || 
     window.location != window.parent.location && 
	 window.location.search.indexOf('optimizely_editor') > -1) {
	var appendDiv = function(id){
	var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
	};
	appendDiv('Growl_optly');
 
	document.querySelector('#Growl_optly').innerHTML = widget.full_html;
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = widget.css;
	document.getElementsByTagName("head")[0].appendChild(style);
	window.NYToptly.loadScript(widget.extra_js), 
	window.NYToptly.loadScript(widget.extra_js_2), 
	window.NYToptly.loadScript(widget.extra_js_3), 
	window.NYToptly.loadScript(widget.extra_js_4), 
	eval(widget.custom_js);
	  
	if(widget.custom_js !== "") {
		eval(widget.custom_js);
	}
} else {
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

	var widgetObj = {
		name: 'Growl',
		html: widget.full_html,
		css: widget.css,
		multi: widget.multi,
		codename: widget.nytID,
		script: widget.extra_js,
		script_2: widget.extra_js_2,
		script_3: widget.extra_js_3,
		script_4: widget.extra_js_4,
		callback: function() {
			var id = widget.nytID;
			var js = widget.custom_js;
			if(js !== "") {
				eval(js);
			}
			console.log("[OptimizelyNYT] growl Impression ID:" + id);
			window['optimizely'].push({
				type: "event",
				eventName: "growl_impression",
				tags: { codename: id }
			});
			document.querySelectorAll('#Growl_optly a').forEach(function(node) {
				if(node.href.indexOf('subscriptions') > -1){
					node.onclick = function() { 
						console.log("[OptimizelyNYT] growl Click ID:" + id);
						window['optimizely'].push({
							type: "event",
							eventName: "growl_clicked",
							tags: {
								codename: id,
								campaignId: window.NYToptly.getQueryParameter('campaignId', node.href)
							}
						});
					};
				}
			});
			var opt_close = document.querySelector('#growl-close');
			opt_close.onclick = function(){
				var opt_growl = document.getElementById('Growl_optly');
				opt_growl.parentNode.removeChild(opt_growl);
			};
		},
		selector: "#Growl_optly"
	};
	var meter_count_string = window.NYToptly.audience("meter_views").toString();
console.log("Line 80: " + typeof(meter_count_string));
console.log(widget.growl_meter);
console.log(widget);  
console.log(meter_count_string);
console.log("Line 83: " + $.inArray(meter_count_string, widget.growl_meter));
	if($.inArray(meter_count_string, widget.growl_meter) > 0) {
		console.log("Line 85: " + meter_count_string);   
		window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
	}
console.log("Line 87");

  
  /*
	if(meter_count_string === widget.growl_meter||
	   meter_count_string === widget.growl_meter_2 || 
	   meter_count_string === widget.growl_meter_3){
		window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
	}
	else{
		console.log('Growl Fail Meters');
		console.log('Current Growl Meters at ');
	}
*/
}


      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "growl_meter_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["2"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'universalGrowl',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "universalGrowl";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["9"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner || 
     window.location != window.parent.location && 
	 window.location.search.indexOf('optimizely_editor') > -1) {
	var appendDiv = function(id){
	var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
	};
	appendDiv('Growl_optly');
 
	document.querySelector('#Growl_optly').innerHTML = widget.full_html;
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = widget.css;
	document.getElementsByTagName("head")[0].appendChild(style);
	window.NYToptly.loadScript(widget.extra_js), 
	window.NYToptly.loadScript(widget.extra_js_2), 
	window.NYToptly.loadScript(widget.extra_js_3), 
	window.NYToptly.loadScript(widget.extra_js_4), 
	eval(widget.custom_js);
	  
	if(widget.custom_js !== "") {
		eval(widget.custom_js);
	}
} else {
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

	var widgetObj = {
		name: 'Growl',
		html: widget.full_html,
		css: widget.css,
		multi: widget.multi,
		codename: widget.nytID,
		script: widget.extra_js,
		script_2: widget.extra_js_2,
		script_3: widget.extra_js_3,
		script_4: widget.extra_js_4,
		callback: function() {
			var id = widget.nytID;
			var js = widget.custom_js;
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
			if(js !== "") {
				eval(js);
			}
			console.log("[OptimizelyNYT] growl Impression ID:" + id);
			window['optimizely'].push({
				type: "event",
				eventName: "growl_impression",
				tags: { 
          codename: id,
          agentId: agent_id    
              }
			});
			document.querySelectorAll('#Growl_optly a').forEach(function(node) {
				if(node.href.indexOf('subscriptions') > -1){
					node.onclick = function() { 
						console.log("[OptimizelyNYT] growl Click ID:" + id);
						window['optimizely'].push({
							type: "event",
							eventName: "growl_clicked",
							tags: {
								codename: id,
								campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                agentId: agent_id
							}
						});
					};
				}
			});
			var opt_close = document.querySelector('#growl-close');
			opt_close.onclick = function(){
				var opt_growl = document.getElementById('Growl_optly');
				opt_growl.parentNode.removeChild(opt_growl);
			};
		},
		selector: "#Growl_optly"
	};
  
	var meter_count_string = window.NYToptly.audience("meter_views").toString();
	var debugFlag = (window.location.search.indexOf("debug=1") > -1);
    if((window.NYToptly.audience('counted') || debugFlag) && 
       (widget.growl_meter.indexOf(meter_count_string) !== -1)
    ){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
	else{
		console.log('Meter Counted is ',window.NYToptly.audience('counted'));
		console.log('Growl Fail Meters');
		console.log('Current Growl Meters at ');
	}
}



      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "universalGrowl";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["9"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'survey',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"survey_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "survey";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-survey';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);/* EXTENSION CSS*/.font-smoothing {  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        console.log(widget.htmlFileName);
require(['foundation/main'], function () {
  require(['foundation/models/user-data'], function (userData) {

        var rmid = /RMID=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var agentId = /nyt-a=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var w = 1366;
        var h = 768;
        if (document.all || document.layers) {
            w = screen.availWidth;
            h = screen.availHeight;
        }
        var popW = 650;
        var popH = 350;
        var topPos = (h - popH) / 2;
        var leftPos = (w - popW) / 2;

        window.open('http://www.nytimes.com/marketing/surveys/' + widget.htmlFileName + '.html?rgi=' + userData.id + '&RMID=' + rmid + '&AgentID=' + agentId,'survey','scrollbars=no,width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);
  });
});
NYToptly.setCookie('survey_triggered',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "survey_triggered"
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "survey";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-survey');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'bar1_test',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "bar1_test";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  
    document.querySelector("#Bar1").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "Bar1 test",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
            "" !== js && eval(js), console.log("[OptimizelyNYT] Bar1 Impression ID:" + id), window.optimizely.push({
                type: "event",
                eventName: "bar1_impression",
                tags: {
                    codename: id
                }
            }), document.querySelectorAll("#Bar1 a").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Bar1 Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "bar1_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
                        }
                    })
                }.bind(void 0, id)
            })
        },
        selector: "#Bar1"
    };
  
  	if(document.querySelector('#Bar1')){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
      console.log(getExtensionInfo());
    }
  	else{
      console.log('Bar 1 container not present')
    }
  
  setTimeout(function(){    	 window.NYToptly.loadScript("https://static01.nyt.com/marketing/ADX/bar1/bar1_meter_count_v2.js", null);   
  console.log('attempting load');  
  },6000);
}

function getExtensionInfo() {
  
  var data = window.optimizely.get('data'),
      state = window.optimizely.get('state'),
      activeExperiencesIds = state.getActiveExperimentIds(),
      activeExperiences = [],
      campaign = state.getCampaignStates({"isActive": true}),
      experience;
      //variation = state.getCampaignStateLists({isActive:true})[0].variation;
  
  activeExperiencesIds.forEach(function(id, index) {
		activeExperiences[index] = data.experiments[id];
	});
  
  activeExperiences.forEach(function(exp) {
		var expStr = JSON.stringify(exp);
		if (expStr.indexOf(widget.$instance) > 0) {
			experience = exp;
			return false;
		}
	});
  
  console.log(campaign);
  console.log(experience);
  
  return {
    experience: {
      	id:   experience.id,
        name: experience.name
    },
    codename: widget.nytID,
    extension: {
        id:       widget.$id,
        instance: widget.$instance,
        name:     widgetObj.name
    }
  }  
}  
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "bar1_test";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'universalGrowl_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "universalGrowl_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["5","9","10"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"persistent","default_value":"true"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner ||
    window.location != window.parent.location &&
    window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
    };
    appendDiv('Growl_optly');

    document.querySelector('#Growl_optly').innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.css;
    document.getElementsByTagName("head")[0].appendChild(style);
    window.NYToptly.loadScript(widget.extra_js),
        window.NYToptly.loadScript(widget.extra_js_2),
        window.NYToptly.loadScript(widget.extra_js_3),
        window.NYToptly.loadScript(widget.extra_js_4),
        eval(widget.custom_js);

    if(widget.custom_js !== "") {
        eval(widget.custom_js);
    }
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);

    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    var widgetObj = {
        name: 'Growl',
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID;
            var js = widget.custom_js;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            if(js !== "") {
                eval(js);
            }
            console.log("[OptimizelyNYT] growl Impression ID:" + id);
            window['optimizely'].push({
                type: "event",
                eventName: "growl_impression",
                tags: { 
                  codename: id,
                  agentId: agent_id
                      }
            });
            document.querySelectorAll('#Growl_optly a').forEach(function(node) {
                if(node.href.indexOf('subscriptions') > -1){
                    node.onclick = function() {
                        console.log("[OptimizelyNYT] growl Click ID:" + id);
                        window['optimizely'].push({
                            type: "event",
                            eventName: "growl_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                                                agentId: agent_id
                            }
                        });
                    };
                }
            });
            var opt_close = document.querySelector('#growl-close');
            opt_close.onclick = function(){
                var opt_growl = document.getElementById('Growl_optly');
                opt_growl.parentNode.removeChild(opt_growl);
            };
        },
        selector: "#Growl_optly"
    };

    var meter_count_string = window.NYToptly.audience("meter_views").toString();
    var debugFlag = (window.location.search.indexOf("debug=1") > -1);

    if ( (window.NYToptly.audience('counted') || debugFlag || widget.persistent === 'true') && (widget.growl_meter.indexOf(meter_count_string) !== -1))
    {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
    else{
        console.log('Meter Counted is ',window.NYToptly.audience('counted'));
        console.log('Growl Fail Meters');
        console.log('Current Growl Meters at ');
    }
}



      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "universalGrowl_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["5","9","10"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"persistent","default_value":"true"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8452060431',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"survey_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8452060431";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8452060431';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);/* EXTENSION CSS*/.font-smoothing {  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        
console.log(widget.htmlFileName);
require(['foundation/main'], function () {
  require(['foundation/models/user-data'], function (userData) {
        var rmid = /RMID=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var agentId = /nyt-a=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var variableNum;
        var abraAlloc = document.querySelector('html').dataset.nytAb.match(/\bLiftoff=([0-9][0-9]*)\b/);
        if(abraAlloc) {
            variationNum = abraAlloc && abraAlloc[1] || 0;    
        }
        else {
            var qs = window.location.search.match(/liftoffSurveyTest=\d*/);
            variationNum = qs[0].split('=')[1];    
        }
        var offer = ['subscription', 'free trial'][variationNum % 2];
        var w = 1366;
        var h = 768;
        if (document.all || document.layers) {
            w = screen.availWidth;
            h = screen.availHeight;
        }
        var popW = 650;
        var popH = 350;
        var topPos = (h - popH) / 2;
        var leftPos = (w - popW) / 2;

        window.open('http://www.nytimes.com/marketing/surveys/' + widget.htmlFileName + '.html?rgi=' + userData.id + '&RMID=' + rmid + '&AgentID=' + agentId + '&var=' + variationNum + '&offer=' + offer,'survey','scrollbars=no,width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);
  });
});
NYToptly.setCookie('survey_triggered',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "survey_triggered"
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8452060431";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8452060431');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8473813042',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"fbpx_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8473813042";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"subBundle","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1594297750840102');
fbq('track', 'PageView');
// Sample call to track custom event
fbq('trackCustom', 'IPMatch', {
    sub_bundle: widget.subBundle
});

NYToptly.setCookie('fbpx',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "fbpx"
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8473813042";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"subBundle","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });
}], "events": [{"category": "other", "name": "Anchor Ad Click", "eventType": "custom", "viewId": null, "apiName": "anchorad_clicked", "id": "4244163679", "eventFilter": null}, {"category": "other", "name": "Bar1 Impression", "eventType": "custom", "viewId": null, "apiName": "bar1_impression", "id": "4257451236", "eventFilter": null}, {"category": "other", "name": "Interstitial Impression", "eventType": "custom", "viewId": null, "apiName": "interstitial_impression", "id": "4262390306", "eventFilter": null}, {"category": "subscribe", "name": "Subscription Thank You", "eventType": "custom", "viewId": null, "apiName": "ThankYou", "id": "6185880525", "eventFilter": null}, {"category": "other", "name": "Interstitial Click", "eventType": "custom", "viewId": null, "apiName": "interstitial_clicked", "id": "6635720631", "eventFilter": null}, {"category": "other", "name": "Anchor Ad Impression", "eventType": "custom", "viewId": null, "apiName": "anchorad_impression", "id": "6665300304", "eventFilter": null}, {"category": "other", "name": "Bar1 Click", "eventType": "custom", "viewId": null, "apiName": "bar1_clicked", "id": "6676210483", "eventFilter": null}, {"category": "other", "name": "Landing Page Impression", "eventType": "custom", "viewId": null, "apiName": "lp_impression", "id": "7130120046", "eventFilter": null}, {"category": "other", "name": "Landing Page Click", "eventType": "custom", "viewId": null, "apiName": "lp_clicked", "id": "7135420210", "eventFilter": null}, {"category": "other", "name": "click", "eventType": "custom", "viewId": null, "apiName": "track_click_mkt", "id": "7738870432", "eventFilter": null}, {"category": "other", "name": "Aus", "eventType": "custom", "viewId": null, "apiName": "Loc_Aus", "id": "7800901200", "eventFilter": null}, {"category": "other", "name": "Gateway Click", "eventType": "custom", "viewId": null, "apiName": "gateway_clicked", "id": "8021672682", "eventFilter": null}, {"category": "other", "name": "click", "eventType": "custom", "viewId": null, "apiName": "track_click", "id": "8156616896", "eventFilter": null}, {"category": "other", "name": "Growl Click", "eventType": "custom", "viewId": null, "apiName": "growl_clicked", "id": "8166094704", "eventFilter": null}, {"category": "other", "name": "Growl Impression", "eventType": "custom", "viewId": null, "apiName": "growl_impression", "id": "8177050248", "eventFilter": null}, {"category": "other", "name": "Welcome Ad Click", "eventType": "custom", "viewId": null, "apiName": "welcomead_clicked", "id": "8198940606", "eventFilter": null}, {"category": "other", "name": "Welcome Ad Impression", "eventType": "custom", "viewId": null, "apiName": "welcomead_impression", "id": "8198950760", "eventFilter": null}, {"category": "other", "name": "Click Event for #nyt-button-sub", "eventType": "click", "viewId": "4129021553", "apiName": "click_event_for_nytbuttonsub", "id": "8203284969", "eventFilter": {"filterType": "target_selector", "selector": "#nyt-button-sub"}}, {"category": "other", "name": "Fixed Header Impression", "eventType": "custom", "viewId": null, "apiName": "fixedheader_impression", "id": "8318590987", "eventFilter": null}, {"category": "other", "name": "Gateway Impression", "eventType": "custom", "viewId": null, "apiName": "gateway_impression", "id": "8319291120", "eventFilter": null}, {"category": "other", "name": "Fixed Header Click", "eventType": "custom", "viewId": null, "apiName": "fixedheader_click", "id": "8324440398", "eventFilter": null}, {"category": "other", "name": "Survey Impression", "eventType": "custom", "viewId": null, "apiName": "survey_triggered", "id": "8334446569", "eventFilter": null}, {"category": "other", "name": "Bar1 Hover", "eventType": "custom", "viewId": null, "apiName": "bar1_hover", "id": "8385210067", "eventFilter": null}, {"category": "other", "name": "Facebook Pixel Impression", "eventType": "custom", "viewId": null, "apiName": "fbpx", "id": "8475641186", "eventFilter": null}], "revision": "23793"},p=n(82);if(c.populateDirectiveData(),o.clientHasAlreadyInitialized())return void r.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(o.shouldBailForDesktopApp())return void r.log("Main / Disabling because of desktop app.");if(o.shouldLoadInnie())d.registerFunction("getProjectId",(function(){return f.projectId})),l.addScriptAsync("https://app.optimizely.com/js/innie.js"),r.log("Main / Disabling in favor of the editor client.");else if(o.shouldLoadPreview()){var g;g=o.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],g.push({type:"load",data:f}),r.log("Main / Disabling in favor of the preview client."),n(138).setupPreviewGlobal(),n(138).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:f}),o.isSlave()||(d.registerFunction("getProjectId",(function(){return f.projectId})),l.addScriptSync("https://optimizely.s3.amazonaws.com/public/3013110282/s/nyt_4_prod/preview.js"))}else if(o.shouldBootstrapDataForPreview()){d.registerFunction("initializeOptimizelyPreview",e);var h=o.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:d.getFunction("getProjectId")();u=t(o.getProjectToken(),h,o.getPreviewLayerIds()),l.addScriptSync(u),n(138).setupPreviewGlobal(),l.addScriptAsync("/dist/js/preview_ui.js")}else o.shouldBootstrapDataForEditor()?(d.registerFunction("initializeOptimizelyPreview",e),l.addScriptAsync(window.optimizely_editor_data_endpoint)):o.shouldInitialize()&&e(f);i.timeEnd("block")}try{i()}catch(e){try{n(136).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(){return o.getGlobal("performance")}var r=n(2),a=n(8),o=n(9),s=n(10),u=n(12).create,c="optimizely:",l=t.Error=u("PerformanceError");t.time=function(e){var t=i();if(t&&t.mark){var n=c+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}},t.timeEnd=function(e){var t=i();if(t&&t.mark){var n=c+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new l("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",d=c+u;t.measure(d,n+"Begin",n+"End");var f=o[0].startTime-a[0].startTime;r.dispatch(s.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*f)/1e3}})}},t.now=function(){var e=i();return e?e.now():a.now()}}),(function(e,t,n){var i=n(3);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.e={},this.t={},this.i=0,this.a=[],this.u=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(4),o=n(5);i.prototype.registerStores=function(e){o.forOwn(e,function(e,t){this.e[t]=new a(t,this,e)}.bind(this))},i.prototype.getStore=function(e){return this.e[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,o.each(this.a,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.e,(function(n){n.l(e,t)})),o.each(this.u,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.e,function(e,t){e.hasChanges()&&this.t[t]&&(e.resetChange(),o.each(this.t[t],(function(t){t(e)})))}.bind(this))},i.prototype.reset=function(){this.t={},o.forOwn(this.e,(function(e,t){e.d()}))},i.prototype.getState=function(){var e={};return o.forOwn(this.e,(function(t,n){e[n]=t.f()})),e},i.prototype.onPreAction=function(e){var t=this.a;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.u;return t.push(e),r(t,e)},i.prototype.g=function(e,t){this.t[e]||(this.t[e]=[]),this.t[e].push(t);var n=this.t[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.h=e,this.I=t,this.T=0,this.S=!1,this.A={},r.extend(this,n),this.b={},this.initialize&&this.initialize()}var r=n(5);i.prototype.l=function(e,t){var n=this.A[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.f=function(){return r.cloneDeep(this.b)},i.prototype.on=function(e,t){this.A[e]=t.bind(this)},i.prototype.observe=function(e){return this.I.g(this.h,e)},i.prototype.emitChange=function(){this.S=!0,this.T++},i.prototype.hasChanges=function(){return this.S},i.prototype.resetChange=function(){this.S=!1},i.prototype.getStateId=function(){return this.T},i.prototype.d=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(6)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function g(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function m(e){return e&&e.Object===Object?e:null}function _(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return gi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function T(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Ln:t,e>-1&&e%1==0&&e<t}function S(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(zt(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.w=e,this.D=[],this.R=!!t}function R(){}function N(e,t){return O(e,t)&&delete e[t]}function C(e,t){if($i){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function O(e,t){return $i?e[t]!==An:Di.call(e,t)}function x(e,t,n){e[t]=$i&&n===An?Rn:n}function P(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function L(){this.N={hash:new R,map:Yi?new Yi:[],string:new R}}function k(e){var t=this.N;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Yi?t.map.delete(e):W(t.map,e)}function F(e){var t=this.N;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Yi?t.map.get(e):$(t.map,e)}function V(e){var t=this.N;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Yi?t.map.has(e):X(t.map,e)}function M(e,t){var n=this.N;return Ze(e)?x("string"==typeof e?n.string:n.hash,e,t):Yi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.N=new P;++t<n;)this.push(e[t])}function G(e,t){var n=e.N;if(Ze(t)){var i=n.N,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function B(e){var t=this.N;if(Ze(e)){var n=t.N,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function j(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function z(){this.N={array:[],map:null}}function H(e){var t=this.N,n=t.array;return n?W(n,e):t.map.delete(e)}function q(e){var t=this.N,n=t.array;return n?$(n,e):t.map.get(e)}function Y(e){var t=this.N,n=t.array;return n?X(n,e):t.map.has(e)}function K(e,t){var n=this.N,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new P(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():ji.call(e,n,1),!0}function $(e,t){var n=Q(e,t);return n<0?An:e[n][1]}function X(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(Ct(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Ct(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||Ct(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Ct(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!jt(e))return e;var u=dr(e);if(u){if(s=$e(e),!t)return De(e,s)}else{var c=We(e),l=c==Gn||c==Bn;if(fr(e))return Ce(e,t);if(c==Hn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=Xe(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new j);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return jt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Ee(t,h(n))),i?(a=s,u=!1):t.length>=wn&&(a=G,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var g=d;g--;)if(t[g]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Lt(o)&&(n||dr(o)||xt(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Gt(e[t])}))}function ge(e,t,n,i,r){return e===t||(null==e||null==t||!jt(e)&&!zt(t)?e!==e&&t!==t:he(e,t,ge,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Fn,c=Fn;o||(u=Ci.call(e),u=u==kn?Hn:u),s||(c=Ci.call(t),c=c==kn?Hn:c);var l=u==Hn&&!I(e),d=c==Hn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var g=o||Qt(e)?He(e,t,n,i,r,a):qe(e,t,u,n,i,r,a);return a.pop(),g}if(!(r&xn)){var h=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(h||v){var g=n(h?e.value():e,v?t.value():t,i,r,a);return a.pop(),g}}if(!f)return!1;var g=Ye(e,t,n,i,r,a);return a.pop(),g}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?ye:be)(e)}function me(e){return Hi(Object(e))}function _e(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Pt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&ge(e[r],n[r],An,On|xn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),jt(o))r||(r=new j),Te(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Te(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Lt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||xt(u)?xt(s)?l=tn(s):!jt(s)||i&&Gt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o.delete(u),ee(e,n,l)}function Se(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ne(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Ce(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Oe(e){var t=new e.constructor(e.byteLength);return new Fi(t).set(new Fi(e)),t}function xe(e){return yt(A(e),i,new e.constructor)}function Pe(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Le(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Fe(e,t){var n=t?Oe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ve(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Pt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function je(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return jt(i)?i:n}}function ze(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Si&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Nn,o=je(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&xn,u=r&On,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],g=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==g&&!n(p,g,i,r,a)){d=!1;break}}return d}function qe(e,t,n,i,r,a,o){switch(n){case Vn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case zn:return e!=+e?t!=+t:e==+t;case qn:case Kn:return e==t+""}return!1}function Ye(e,t,n,i,r,a){var o=r&xn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,g=o;++d<u;){f=s[d];var h,v=e[f],m=t[f];if(!(h===An?v===m||n(v,m,i,r,a):h)){p=!1;break}g||(g="constructor"==f)}if(p&&!g){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function Ke(e,t){var n=e[t];return qt(n)?n:An}function We(e){return Ci.call(e)}function $e(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Xe(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case Xn:return Oe(e);case Vn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Fe(e,n);case jn:return xe(e);case zn:case Kn:return new i(e);case qn:return Pe(e);case Yn:return Le(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Bt(t)&&(dr(e)||Xt(e)||xt(e))?g(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.w,e.R);return t.D=De(e.D),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Pn):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?qi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.R=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ne(this.w,this.D)}function gt(e,t,n){return t=n?An:t,ue(e,ve(t))}function ht(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function mt(e,t){return tr(e,ie(t))}function _t(e,t,n,i){e=Pt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=qi(r+n,0)),Xt(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function yt(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Pt(e)?e:sn(e),e.length)}function Tt(e,t,n){return t=n?An:t,Re(e,ve(t))}function St(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return _(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=qi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=qi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return jt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Nt(e){return re(e,!0,!0)}function Ct(e,t){return e===t||e!==e&&t!==t}function Ot(e,t){return e>t}function xt(e){return Lt(e)&&Di.call(e,"callee")&&(!Bi.call(e,"callee")||Ci.call(e)==kn)}function Pt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Lt(e){return zt(e)&&Pt(e)}function kt(e){return e===!0||e===!1||zt(e)&&Ci.call(e)==Vn}function Ft(e){return zt(e)&&Ci.call(e)==Mn}function Vt(e){if(Pt(e)&&(dr(e)||Xt(e)||Gt(e.splice)||xt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return ge(e,t)}function Ut(e){return"number"==typeof e&&zi(e)}function Gt(e){var t=jt(e)?Ci.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ln}function jt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function zt(e){return!!e&&"object"==typeof e}function Ht(e){return Kt(e)&&e!=+e}function qt(e){return null!=e&&(Gt(e)?xi.test(wi.call(e)):zt(e)&&(I(e)?xi:li).test(e))}function Yt(e){return null===e}function Kt(e){return"number"==typeof e||zt(e)&&Ci.call(e)==zn}function Wt(e){if(!zt(e)||Ci.call(e)!=Hn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ni}function $t(e){return jt(e)&&Ci.call(e)==qn}function Xt(e){return"string"==typeof e||!dr(e)&&zt(e)&&Ci.call(e)==Kn}function Qt(e){return zt(e)&&Bt(e.length)&&!!fi[Ci.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Pt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Pt(e))return me(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||T(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=_e(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||T(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Gt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function gn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function hn(e){return function(){return e}}function vn(e){return e}function mn(e){return ye(hr({},e))}function _n(e,t,n){var i=sn(t),r=pe(t,i);null!=n||jt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(jt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.R;if(a||t){var n=e(this.w),r=n.D=De(this.D);return r.push({func:i,args:arguments,thisArg:e}),n.R=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function En(){return Si._===this&&(Si._=Oi),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Tn(e){return e&&e.length?c(e,vn,Ot):An}function Sn(e){return e&&e.length?c(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Nn=1,Cn=32,On=1,xn=2,Pn=1/0,Ln=9007199254740991,kn="[object Arguments]",Fn="[object Array]",Vn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",jn="[object Map]",zn="[object Number]",Hn="[object Object]",qn="[object RegExp]",Yn="[object Set]",Kn="[object String]",Wn="[object Symbol]",$n="[object WeakMap]",Xn="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Fn]=fi[Xn]=fi[Vn]=fi[Mn]=fi[Un]=fi[Gn]=fi[jn]=fi[zn]=fi[Hn]=fi[qn]=fi[Yn]=fi[Kn]=fi[$n]=!1;var pi={};pi[kn]=pi[Fn]=pi[Xn]=pi[Vn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[jn]=pi[zn]=pi[Hn]=pi[qn]=pi[Yn]=pi[Kn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Gn]=pi[$n]=!1;var gi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={function:!0,object:!0},vi=hi[typeof t]&&t&&!t.nodeType?t:An,mi=hi[typeof e]&&e&&!e.nodeType?e:An,_i=mi&&mi.exports===vi?vi:An,Ei=m(vi&&mi&&"object"==typeof n&&n),yi=m(hi[typeof self]&&self),Ii=m(hi[typeof window]&&window),Ti=m(hi[typeof this]&&this),Si=Ei||Ii!==(Ti&&Ti.window)&&Ii||yi||Ti||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Ni=wi.call(Object),Ci=bi.toString,Oi=Si._,xi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Pi=_i?Si.Buffer:An,Li=Si.Reflect,ki=Si.Symbol,Fi=Si.Uint8Array,Vi=Li?Li.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=bi.propertyIsEnumerable,ji=Ai.splice,zi=Si.isFinite,Hi=Object.keys,qi=Math.max,Yi=Ke(Si,"Map"),Ki=Ke(Si,"Set"),Wi=Ke(Si,"WeakMap"),$i=Ke(Object,"create"),Xi=Yi?wi.call(Yi):"",Qi=Ki?wi.call(Ki):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Ge(fe),nr=Be();Vi&&!Bi.call({valueOf:1},"valueOf")&&(_e=function(e){return S(Vi(e))});var ir=Ve,rr=be("length"),ar=Ui||function(){return[]};(Yi&&We(new Yi)!=jn||Ki&&We(new Ki)!=Yn||Wi&&We(new Wi)!=$n)&&(We=function(e){var t=Ci.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case Xi:return jn;case Qi:return Yn;case Ji:return $n}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return ze(e,Nn|Cn,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,gr(t)||0,n)})),lr=Dt((function(e,t){return ze(e,Cn,An,t)})),dr=Array.isArray,fr=Pi?function(e){return e instanceof Pi}:hn(!1),pr=Number,gr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),mr=Ue((function(e,t,n,i){Ve(t,un(t),e,i)})),_r=Dt((function(e){return e.push(An,Z),mr.apply(An,e)})),Er=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Se(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Se(e,le(t,1))})),Tr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=$i?$i(null):bi,P.prototype.clear=L,P.prototype.delete=k,P.prototype.get=F,P.prototype.has=V,P.prototype.set=M,U.prototype.push=B,j.prototype.clear=z,j.prototype.delete=H,j.prototype.get=q,j.prototype.has=Y,j.prototype.set=K,w.assign=hr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=_r,w.defer=ur,w.delay=cr,w.filter=ht,w.flatten=rt,w.flattenDeep=at,w.iteratee=Tr,w.keys=sn,w.map=Et,w.mapValues=cn,w.matches=mn,w.merge=Er,w.mixin=_n,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=St,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,_n(w,w),w.clone=Rt,w.cloneDeep=Nt,w.escape=gn,w.every=gt,w.find=vt,w.findIndex=it,w.forEach=mt,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=_t,w.indexOf=st,w.isArguments=xt,w.isArray=dr,w.isBoolean=kt,w.isDate=Ft,w.isEmpty=Vt,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Gt,w.isNaN=Ht,w.isNull=Yt,w.isNumber=Kt,w.isObject=jt,w.isRegExp=$t,w.isString=Xt,w.isUndefined=Jt,w.last=ut,w.max=Tn,w.min=Sn,w.noConflict=En,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=Tt,w.uniqueId=In,w.each=mt,w.first=ot,_n(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.R?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,vi&&mi&&(_i&&((mi.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(7)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t){t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)}}),(function(e,t,n){var i=n(11);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,RECORD_LAYER_DECISION_TICKET:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,ADD_PREPARED_CHANGE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,SET_PERFORMANCE_DATA:null,SET_RESOURCE_TIMING_DATA:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(13),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(14)(),a=n(15);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(5),a=n(17),o=n(8),s=n(2),u=n(10),c=n(18);i.prototype.C=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.O(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.C()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};s.dispatch(u.LOG,n)},i.prototype.flush=function(){var e=n(19),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,function(e){this.x(e.logLevel,e.logMessage,!0)}.bind(this));
},i.prototype.x=function(e,t,n){var i,o=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:i=console.error;break;case a.LogLevel.WARN:i=console.warn;break;case a.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.C()&&!this.shouldLog(o)||(r.isArray(t)&&r.isString(t[0])&&(t=this.P(t)),this.storeLog(e,t)),i&&this.shouldLog(o)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.x(a.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.x(a.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.P([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(a.LogLevel.INFO,e)},i.prototype.warn=function(){this.x(a.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.x(a.LogLevel.ERROR,[this.L(),e]),this.x(a.LogLevel.INFO,[e.stack])):this.x(a.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.x("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.x("GROUPEND",[].slice.call(arguments))},i.prototype.P=function(e){var t=this.L().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.L=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.O=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),!r.isUndefined(a.LogLevel[e]))?a.LogLevel[e]:null},e.exports=new i}),(function(e,t,n){var i=n(11);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4,ALL:5},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes=i({immediate:null,manual:null,callback:null,polling:null}),t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(5);t.stringify=function(){return i(function(){return JSON.stringify.apply(null,this)}.bind(arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(5),r=n(2),a=n(20),o=a.create(),s={action_data:n(21),async_request:n(23),audience_data:n(24),change_data:n(25),cleanup:n(26),cookie_options:n(27),event_data:n(28),event_emitter:n(29),dimension_data:n(30),directive:n(31),global:n(32),global_state:n(33),integration_settings:n(34),layer:n(35),layer_data:n(36),log:n(37),observed_redirect:n(38),pending_events:n(39),performance:n(40),plugins:n(41),prepared_change:n(42),provider_status:n(43),pending_redirect:n(44),rum:n(45),sandbox:n(46),session:n(47),tracker_optimizely:n(49),ua_data:n(50),view:n(51),view_data:n(52),visitor:n(53),visitor_attribute_entity:n(54),visitor_events:n(55),visitor_events_manager:n(61),visitor_id:n(62),xdomain:n(63)};r.registerStores(s),i.forOwn(s,(function(e,t){o.register("stores/"+t,r.getStore(t))})),e.exports=o}),(function(e,t,n){function i(){this.k={}}var r=n(5);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.k[e])throw new Error("Module already registered for: "+e);this.k[e]=t},i.prototype.get=function(e){return this.k[e]},i.prototype.getModuleKeys=function(){var e=this.k;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,this.get.bind(this));return i.apply(null,a)},i.prototype.reset=function(){this.k={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.F)},F:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.b[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.b[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.b[u]=n}))}))}))})),this.emitChange())},get:function(e){return a.safeReference(this.b[e])},getByChangeId:function(e){return i.find(this.b,{changeSet:[{id:e}]})},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.b,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.b,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.b,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.b))}}}),(function(e,t,n){var i=n(5),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){var i=n(10);e.exports={initialize:function(){this.b={},this.on(i.REGISTER_ASYNC_DEFERRED,this.V),this.on(i.RESOLVE_DEFERRED,this.M),this.on(i.REJECT_DEFERRED,this.U),this.on(i.ACTIVATE,this.G)},getRequest:function(e){return this.b[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},G:function(){this.b={},this.emitChange()},V:function(e){this.b[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},M:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},U:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,function(e){a.deepFreeze(e),this.b[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.b))},getAudiencesMap:function(){return a.safeReference(this.b)},get:function(e){return a.safeReference(this.b[e])},getAudienceName:function(e){var t=i.find(i.values(this.b),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={},this.on(r.ADD_CHANGE,this.B),this.on(r.DATA_LOADED,this.F)},getChange:function(e){return this.b[e]},F:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,this.B.bind(this))},B:function(e){var t=e.id,n=this.getChange(t),r=n?i.extend(i.cloneDeep(n),e):e;a.deepFreeze(r),this.b[t]=r,this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(17);e.exports={initialize:function(){this.b={},i.each(a.Lifecycle,function(e){this.b[e]=[]}.bind(this)),this.on(r.ADD_CLEANUP_FN,this.j),this.on(r.CLEAR_CLEANUP_FN,this.z)},getCleanupFns:function(e){return i.cloneDeep(this.b[e])},j:function(e){this.b[e.lifecycle].push(e.cleanupFn),this.emitChange()},z:function(e){var t=this.b[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.b[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(10),r=31536e4;e.exports={initialize:function(){this.b={currentDomain:null,defaultAgeSeconds:r},this.on(i.SET_COOKIE_DOMAIN,this.H),this.on(i.SET_COOKIE_AGE,this.q)},getCurrentDomain:function(){return this.b.currentDomain},getDefaultAgeInSeconds:function(){return this.b.defaultAgeSeconds},H:function(e){this.b.currentDomain=e,this.emitChange()},q:function(e){this.b.defaultAgeSeconds=e,this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.b))},getEventsMap:function(){return a.safeReference(this.b)},get:function(e){return a.safeReference(this.b[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.b),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.b,{pageId:e}))},F:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.b[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(5),a=n(10),o="|";e.exports={initialize:function(){this.b={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.Y),this.on(a.REMOVE_EMITTER_HANDLER,this.K)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,function(e){var t=i(e),n=this.b.handlers[t];n&&(a=a.concat(n))}.bind(this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},Y:function(e){var t=i(e.filter);this.b.handlers[t]||(this.b.handlers[t]=[]),this.b.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},K:function(e){var t=!1,n=e.token;r.forOwn(this.b.handlers,(function(e,i){r.each(e,(function(i,r){i.token===n&&(t=!0,e.splice(r,1))}))})),t&&this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.F)},F:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,function(e){a.deepFreeze(e),this.b[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.b))},getById:function(e){return a.safeReference(this.b[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.b),{apiName:e}))}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.W)},getAll:function(){return i.cloneDeep(this.b)},isDisabled:function(){return this.b.disabled},isEditor:function(){return this.b.isEditor},clientHasAlreadyInitialized:function(){return this.b.alreadyInitialized},getForceAudienceIds:function(){return this.b.forceAudienceIds},getForceVariationIds:function(){return this.b.forceVariationIds},getPreviewLayerIds:function(){return this.b.previewLayerIds},getProjectToken:function(){return this.b.projectToken},getForceTracking:function(){return this.b.forceTracking},shouldActivate:function(){return!this.b.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.b.isPreview},shouldBootstrapDataForEditor:function(){return this.b.isEditor},shouldInitialize:function(){return!(this.shouldOptOut()||this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.b.isPreview||this.b.isLegacyPreview||!this.getProjectToken()||this.b.isEditor)},shouldBailForDesktopApp:function(){return!this.b.isEditor&&this.b.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.b.isSlave&&!this.b.isEditor&&this.b.isRunningInV2Editor},shouldOptOut:function(){return this.b.shouldOptOut},shouldSendTrackingData:function(){return!this.b.trackingDisabled&&(!!this.b.forceTracking||!this.b.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.b.isSlave},isRunningInDesktopApp:function(){return this.b.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.b.isRunningInV2Editor},W:function(e){i.extend(this.b,e),this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={holdback:0,isGlobalHoldback:null,listTargetingCookies:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[]},this.on(r.DATA_LOADED,this.X),this.on(r.ACTIVATE,this.Q),this.on(r.RECORD_GLOBAL_DECISION,this.J)},getRevision:function(){return this.b.revision},getGlobalHoldbackThreshold:function(){return this.b.holdback},getProjectId:function(){return this.b.projectId},getSnippetId:function(){return this.b.snippetId},getAccountId:function(){return this.b.accountId},getNamespace:function(){return this.b.namespace},getActivationId:function(){return this.b.activationId},getAnonymizeIP:function(){return this.b.anonymizeIP},isGlobalHoldback:function(){return!!this.b.isGlobalHoldback},getListTargetingCookieNames:function(){return this.b.listTargetingCookies.slice()},getDCPServiceId:function(){return this.b.dcpServiceId},getDCPKeyfieldLocators:function(){return this.b.dcpKeyfieldLocators},getRecommenderServices:function(){return this.b.recommenderServices},getProjectJS:function(){return this.b.projectJS},getPlugins:function(){return this.b.plugins},Q:function(e){this.b.activationId=e.activationId,this.b.isGlobalHoldback=null},J:function(e){var t=e.isGlobalHoldback;if(null!==this.b.isGlobalHoldback&&this.b.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.b.isGlobalHoldback=t,this.emitChange()},X:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingCookies","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS"]);if(0!==i.keys(t).length){var n={listTargetingCookies:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.b,n,t),this.emitChange()}}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.Z)},getEffectiveReferrer:function(){return this.b.effectiveReferrer},getEffectiveVariationId:function(){return this.b.effectiveVariationId},Z:function(e){i.isUndefined(e.effectiveReferrer)||(this.b.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.b.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.F),this.on(r.SET_INTEGRATION_SETTINGS,this.ee)},F:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,function(e){this.b[e.id]=e}.bind(this)),this.emitChange())},ee:function(e){var t=this.b[e.id];t?i.extend(t,e):this.b[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.b))},get:function(e){return i.cloneDeep(this.b[e])},getReference:function(e){return this.b[e]}}}),(function(e,t,n){var i=n(5),r=n(16),a=n(10),o="*";e.exports={initialize:function(){this.b={},this.on(a.LOAD_PERSISTED_LAYER_STATES,this.te),this.on(a.RECORD_LAYER_DECISION,this.ne),this.on(a.RECORD_LAYER_DECISION_EVENT_ID,this.re),this.on(a.ACTION_EXECUTED,this.ae)},getLayerState:function(e,t){if(this.b[e]){var n=this.b[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.b)i.forEach(this.b[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},te:function(e){e.merge||(this.b={}),i.each(e.layerStates,function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.b[t];if(i.isUndefined(r))this.b[t]={},this.b[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.b[t][n]=e)}}.bind(this)),this.emitChange()},ae:function(e){var t=e.layerId,n=e.pageId;if(!this.b[t])return void r.warn("No Campaign registered for action executed",e);var i;this.b[t][n]?i=this.b[t][n]:this.b[t][o]&&(i=this.b[t][o]),i&&(i.actionTriggered=!0,i.actionSessionId=e.sessionId,i.actionActivationId=e.activationId,i.actionTimestamp=e.timestamp),this.emitChange()},ne:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decisionTicketTimestamp:e.timestamp,decision:e.decision,decisionSessionId:e.sessionId,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null,actionTriggered:!1,actionSessionId:null,actionActivationId:null,actionTimestamp:null},n=this.b[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.b[e.layerId]=n,this.emitChange()},re:function(e){var t=e.layerId,n=e.pageId||o;return this.b[t]?this.b[t][n]?(this.b[t][n].decisionEventId=e.decisionId,void this.emitChange()):void r.warn("Not recording decision event: Layer state not found for view",n):void r.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.F)},F:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||"single_experiment"===e.policy?("single_experiment"===e.policy,1):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.b.variations[e.id]=e})),t.b.experiments[n.id]=n})),a.deepFreeze(e),t.b.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.b.layers))},getCampaignsMap:function(){return a.safeReference(this.b.layers)},getExperimentsMap:function(){return a.safeReference(this.b.experiments)},getVariationsMap:function(){return a.safeReference(this.b.variations)},getCount:function(){return i.keys(this.b.layers).length},getAllByPageId:function(e){return a.safeReference(i.filter(i.values(this.b.layers),(function(t){return i.includes(t.pageIds,e)})))},get:function(e){return a.safeReference(this.b.layers[e])},getLayerByExperimentId:function(e){var t=i.values(this.b.layers),n=i.find(t,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(n)},getExperimentByVariationId:function(e){var t,n=i.values(this.b.layers);return i.some(n,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t,n){var i=n(10);e.exports={initialize:function(){this.b={logs:[]},this.on(i.LOG,this.oe)},getLogs:function(){return this.b.logs},oe:function(e){this.b.logs.push(e),this.emitChange()},f:function(){return this.b.logs.slice()}}}),(function(e,t,n){var i=n(10),r=n(22);e.exports={initialize:function(){this.b={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.se),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.ue)},get:function(){return r.safeReference(this.b.data)},hasTracked:function(){return this.b.hasTracked},se:function(e){r.deepFreeze(e),this.b.data=e,this.b.hasTracked=!1,this.emitChange()},ue:function(){this.b.hasTracked=!0}}}),(function(e,t,n){var i=n(5),r=n(10),a=1e3;e.exports={initialize:function(){this.b={},this.on(r.SET_PENDING_EVENT,this.ce),this.on(r.REMOVE_PENDING_EVENT,this.le),this.on(r.LOAD_PENDING_EVENTS,this.de)},getEvents:function(){return this.b},ce:function(e){i.keys(this.b).length>=a&&this.fe();var t=e.id,n=e.retryCount;this.b[t]&&this.b[t].retryCount===n||(this.b[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},le:function(e){delete this.b[e.id],this.emitChange()},de:function(e){this.b=e.events,this.fe(),this.emitChange()},fe:function(){for(var e=i.sortBy(this.b,"timeStamp"),t=0;t<=e.length-a;t++)delete this.b[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(17);e.exports={initialize:function(){this.b={},this.b[a.PerformanceData.performance_marks]={},this.b[a.PerformanceData.resource_timing]=[],this.on(r.SET_PERFORMANCE_DATA,this.pe),this.on(r.SET_PERFORMANCE_MARKS_DATA,this.ge),this.on(r.SET_RESOURCE_TIMING_DATA,this.he)},pe:function(e){i.extend(this.b,e.data),this.emitChange()},ge:function(e){i.isUndefined(this.b[a.PerformanceData.performance_marks][e.name])&&(this.b[a.PerformanceData.performance_marks][e.name]=[]),this.b[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},he:function(e){this.b[a.PerformanceData.resource_timing].push(e.data),this.emitChange()},get:function(){return i.cloneDeep(this.b)},getMarks:function(){return i.mapValues(this.b[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,function(e,t){var n=this.b[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}.bind(this),{})}}}),(function(e,t,n){var i=n(10),r=n(17),a=n(5),o=n(16);e.exports={initialize:function(){this.b=a.mapValues(r.PluginTypes,(function(){return{}})),this.on(i.REGISTER_PLUGIN,this.ve)},ve:function(e){var t=e.type,n=e.name,i=e.plugin;if(!(t&&n&&i))throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.b[t])throw new Error("Invalid plugin type specified: "+t);this.b[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.b[e])return this.b[e];throw new Error("Invalid plugin type: "+e)}return this.b},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(10);e.exports={initialize:function(){this.b={},this.on(i.ADD_PREPARED_CHANGE,this.me)},getPreparedChange:function(e){return this.b[e]},me:function(e){var t=e.id;this.b[t]=e,this.emitChange()}}}),(function(e,t,n){var i=n(10);e.exports={initialize:function(){this.b={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this._e)},getPendingAttributeValue:function(e){if(this.b[e])return this.b[e].pending},_e:function(e){this.b[e.key]={pending:e.pending},this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.se)},isExpectingRedirect:function(){return i.isString(this.b.layerId)},getLayerId:function(){return this.b.layerId},se:function(e){this.isExpectingRedirect()||(this.b.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={inRumSample:!1,id:null,src:null,RumHost:null,data:{}},this.on(r.SET_RUM_DATA,this.pe)},pe:function(e){i.merge(this.b,e),this.emitChange()},getSampleRum:function(){return this.b.inRumSample},getRumId:function(){return this.b.id},getRumHost:function(){return this.b.RumHost},getRumData:function(){return i.cloneDeep(this.b.data)},getScriptSrc:function(){return this.b.src}}}),(function(e,t,n){var i=n(10);e.exports={initialize:function(){this.b={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Ee)},Ee:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.b.natives=e.sandboxedFunctions,this.b.initialized=!0,this.emitChange()},getAll:function(){return this.b.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.b.natives[e]||null},isInitialized:function(){return this.b.initialized}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(8),o=n(48),s=18e5;e.exports={initialize:function(){this.b={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.ye),this.on(r.LOAD_SESSION_STATE,this.Ie)},getState:function(){return i.cloneDeep(this.b)},getSessionId:function(){return this.b.sessionId},Ie:function(e){this.b.sessionId=e.sessionId,this.b.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},ye:function(){var e=a.now(),t=this.b.lastSessionTimestamp;(!this.b.sessionId||e-t>s)&&(this.b.sessionId=o.generate()),this.b.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(10),r=n(5);e.exports={initialize:function(){this.G(),this.on(i.FINALIZE_BATCH_SNAPSHOT,this.Te),this.on(i.REGISTER_TRACKER_VISITOR,this.Se),this.on(i.REGISTER_TRACKER_EVENT,this.Ae),this.on(i.REGISTER_TRACKER_DECISION,this.be),this.on(i.RESET_TRACKER_EVENTS,this.we),this.on(i.RESET_TRACKER_STORE,this.G),this.on(i.SET_TRACKER_POLLING,this.De),this.on(i.SET_TRACKER_BATCHING,this.Re),this.on(i.SET_TRACKER_SEND_EVENTS,this.Ne),this.on(i.SET_TRACKER_PERSISTABLE_STATE,this.Ce),this.on(i.SET_TRACKER_DIRTY,this.Oe)},getPersistableState:function(){return this.b.isDirty?this.hasEventsToSend()?{data:this.b.data,decisions:this.b.decisions,decisionEvents:this.b.decisionEvents}:{}:null},Ce:function(e){this.b.data=e.data||{},this.b.decisions=e.decisions||[],this.b.decisionEvents=e.decisionEvents||[],this.emitChange()},Oe:function(e){this.b.isDirty=e,this.emitChange()},Ae:function(e){var t=this.xe();!r.isEmpty(t.snapshots)&&r.isEmpty(this.b.decisionEvents)||this.Pe(),this.Le().events.push(e.event),this.Oe(!0)},be:function(e){this.b.decisions.push(e.decision),this.b.decisionEvents.push(e.decisionEvent),this.Oe(!0)},Se:function(e){r.isEmpty(this.b.data)&&(this.b.data=e.data),this.b.data.visitors.push(e.visitor),this.b.decisions=e.decisions,this.b.decisionEvents=[],this.Oe(!0)},G:function(){this.b={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1},this.emitChange()},we:function(){var e=this.xe();this.b.data.visitors=[e],e.snapshots=[],this.Oe(!0)},De:function(e){this.b.polling=e,this.emitChange()},Re:function(e){this.b.shouldBatch=e,this.emitChange()},Ne:function(e){this.b.canSend=e,this.emitChange()},getEventBatch:function(){return r.cloneDeep(this.b.data)},ke:function(){return this.b.decisionEvents.slice()},Fe:function(){this.b.decisionEvents=[]},Ve:function(){return this.b.decisions.slice()},isPolling:function(){return this.b.polling},shouldBatch:function(){return this.b.shouldBatch},Le:function(){return r.last(this.xe().snapshots)},xe:function(){return r.last(this.b.data.visitors)},Pe:function(){var e=this.ke(),t=this.xe();t.snapshots.push({decisions:this.Ve(),events:e}),this.Fe()},Te:function(){this.b.decisionEvents.length>0&&this.Pe(),this.Oe(!0)},hasEventsToSend:function(){return!(r.isEmpty(this.b.data)||r.isEmpty(this.xe().snapshots)&&r.isEmpty(this.b.decisionEvents))},canSend:function(){return this.b.canSend}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={},this.on(r.SET_UA_DATA,this.F)},F:function(e){i.isEmpty(this.b)&&(this.b=e.data)},get:function(){return i.cloneDeep(this.b)}}}),(function(e,t,n){var i=n(5),r=n(16),a=n(10),o={globalTags:{},viewStates:{}};e.exports={initialize:function(){this.b=i.cloneDeep(o),this.on(a.REGISTER_VIEWS,this.Me),this.on(a.SET_VIEW_ACTIVE_STATE,this.Ue),this.on(a.UPDATE_PARSED_VIEW_METADATA,this.Ge),this.on(a.UPDATE_USER_SUPPLIED_METADATA,this.Be),this.on(a.TRACK_VIEW_ACTIVATED_EVENT,this.je),this.on(a.SET_GLOBAL_TAGS,this.ze),this.on(a.ACTIVATE,this.He)},getAll:function(){var e={};for(var t in this.b.viewStates)e[t]=this.getViewState(t);return e},getViewState:function(e){var t=i.cloneDeep(this.b.viewStates[e]),n=this.b.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.b.viewStates[e]?this.b.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.b.viewStates,function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}.bind(this),[])},isViewActive:function(e){var t=this.b.viewStates[e];return t||r.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.b.globalTags)},He:function(){var e=i.cloneDeep(o);i.isEmpty(this.b.globalTags)||(e.globalTags=this.b.globalTags),this.b=e,this.emitChange()},Me:function(e){i.each(e.views,function(e){var t=e.id;this.b.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}.bind(this)),this.emitChange()},Ue:function(e){var t=e.view.id;if(!this.b.viewStates[t])throw new Error("No view exists with id "+t);this.b.viewStates[t].isActive=e.isActive,e.isActive?this.b.viewStates[t].activatedTimestamp=e.timestamp:(this.b.viewStates[t].parsedMetadata={},this.b.viewStates[t].userSuppliedMetadata={}),this.emitChange()},Ge:function(e){var t=e.pageId;if(!this.b.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.b.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},Be:function(e){var t=e.pageId;if(!this.b.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.b.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},je:function(e){var t=e.pageId;this.b.viewStates[t]&&(this.b.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},ze:function(e){i.extend(this.b.globalTags,e),this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10),a=n(22);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.F)},getAll:function(){return a.safeReference(i.values(this.b))},getPagesMap:function(){return a.safeReference(this.b)},get:function(e){return a.safeReference(this.b[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.b),{apiName:e}))},F:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,function(e){a.deepFreeze(e),this.b[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.qe),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Ye)},getVisitorProfile:function(){return this.b.profile},getVisitorProfileMetadata:function(){return this.b.metadata},getAttribute:function(e,t){var n=this.b.profile;return t&&(n=n[t]||{}),i.cloneDeep(n[e])},getAttributeMetadata:function(e){return i.cloneDeep(this.b.metadata[e])},Ye:function(e){this.b.profile=e.profile,this.b.metadata=e.metadata,this.emitChange()},qe:function(e){var t,n;i.each(e.attributes,function(e){t=this.b.profile,n=this.b.metadata,e.type&&(t=this.b.profile[e.type]=this.b.profile[e.type]||{}),t[e.key]=e.value,e.metadata&&i.forOwn(e.metadata,function(t,i){
e.type&&(n=this.b.metadata[e.type]=this.b.metadata[e.type]||{}),n[e.key]=n[e.key]||{},n[e.key][i]=t}.bind(this))}.bind(this)),this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={},this.on(r.DATA_LOADED,this.Ke)},getCustomBehavioralAttributes:function(){return i.filter(this.b,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.b);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.b[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},Ke:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,function(e){this.b[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=(n(5),n(10));n(56).Event;e.exports={initialize:function(){this.b={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.F),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.We),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.$e)},getEvents:function(){return this.b.events},getForeignEvents:function(){return this.b.foreignEvents},getForeignEventQueues:function(){return this.b.foreignEventQueues},F:function(e){this.b.events=e,this.emitChange()},We:function(e){this.b.foreignEvents[e.key]=e.value},$e:function(e){this.b.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n)}var a=n(5),o=n(57),s=n(58),u=n(60).getFieldValue;t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=s.hashToHex(s.toByteString(this.digest()),s.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=u(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID];var i=u(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS}}),(function(e,t,n){var i=n(59).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(5);t.getFieldValue=function(e,t){if(i.isArray(t)){for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n}}}),(function(e,t,n){var i=n(10);e.exports={initialize:function(){this.b={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.Xe)},getBaseMap:function(){return this.b.baseMap},getEventQueue:function(){return this.b.eventQueue},getLastEvent:function(){return this.b.lastEvent},getCleared:function(){return this.b.cleared},getInitialized:function(){return this.b.initialized},Xe:function(e){this.b[e.key]=e.value}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={randomId:null,UUID:null,variationIdMap:{},preferredLayerMap:{}},this.on(r.SET_VISITOR_ID,this.F),this.on(r.UPDATE_VARIATION_ID_MAP,this.Qe),this.on(r.MERGE_VARIATION_ID_MAP,this.Je),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.Ze),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.et)},getBucketingId:function(){return this.getUUID()||this.getRandomId()},getRandomId:function(){return this.b.randomId},getUUID:function(){return this.b.UUID},getVariationIdMap:function(){return i.cloneDeep(this.b.variationIdMap)},Qe:function(e){var t=this.b.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.b.variationIdMap[e.layerId]=n,this.emitChange())},Je:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.merge(n,t),this.b.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.b.preferredLayerMap)},getPreferredLayerId:function(e){return this.b.preferredLayerMap[e]},Ze:function(e){this.b.preferredLayerMap[e.groupId]!==e.layerId&&(this.b.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},et:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.merge(n,t),this.b.preferredLayerMap=n,this.emitChange()},F:function(e){i.extend(this.b,e),this.emitChange()}}}),(function(e,t,n){var i=n(5),r=n(10);e.exports={initialize:function(){this.b={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.tt),this.on(r.XDOMAIN_ADD_FRAME,this.nt),this.on(r.XDOMAIN_SET_MESSAGE,this.it),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.rt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.at),this.on(r.XDOMAIN_SET_DISABLED,this.ot)},getMessages:function(){return i.cloneDeep(this.b.messages)},getNextMessageId:function(){return this.b.messages.length},getMessageById:function(e){return this.b.messages[e]},getSubscribers:function(){return this.b.subscribers},getFrames:function(){return this.b.frames},getNextFrameId:function(){return this.b.frames.length},getDefaultFrame:function(){return this.b.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.b.canonicalOrigins)},isDisabled:function(){return this.b.disabled},tt:function(e){this.b.defaultFrame=e},nt:function(e){this.b.frames.push(e)},it:function(e){this.b.messages[e.messageId]=e.message},rt:function(e){this.b.subscribers.push(e.subscriber)},at:function(e){this.b.canonicalOrigins=e.canonicalOrigins},ot:function(e){this.b.disabled=e.disabled}}}),(function(e,t,n){var i=n(19);i.register("env/jquery",n(65))}),(function(e,t,n){n(9);e.exports=n(66)}),(function(e,t,n){var i,r;/** @license
	 * jQuery JavaScript Library v1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-23T17:34Z
	 */
!(function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!=typeof window?window:this,(function(n,a){function o(e){var t="length"in e&&e.length,n=K.type(e);return"function"!==n&&!K.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function s(e,t,n){if(K.isFunction(t))return K.grep(e,(function(e,i){return!!t.call(e,i,e)!==n}));if(t.nodeType)return K.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(te.test(t))return K.filter(t,e,n);t=K.filter(t,e)}return K.grep(e,(function(e){return K.inArray(e,t)>=0!==n}))}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e){var t=ce[e]={};return K.each(e.match(ue)||[],(function(e,n){t[n]=!0})),t}function l(){ie.addEventListener?(ie.removeEventListener("DOMContentLoaded",d,!1),n.removeEventListener("load",d,!1)):(ie.detachEvent("onreadystatechange",d),n.detachEvent("onload",d))}function d(){(ie.addEventListener||"load"===event.type||"complete"===ie.readyState)&&(l(),K.ready())}function f(e,t,n){if(void 0===n&&1===e.nodeType){var i="data-"+t.replace(ge,"-$1").toLowerCase();if(n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:pe.test(n)?K.parseJSON(n):n)}catch(e){}K.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!K.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function g(e,t,n,i){if(K.acceptData(e)){var r,a,o=K.expando,s=e.nodeType,u=s?K.cache:e,c=s?e[o]:e[o]&&o;if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)return c||(c=s?e[o]=V.pop()||K.guid++:o),u[c]||(u[c]=s?{}:{toJSON:K.noop}),"object"!=typeof t&&"function"!=typeof t||(i?u[c]=K.extend(u[c],t):u[c].data=K.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==n&&(a[K.camelCase(t)]=n),"string"==typeof t?(r=a[t],null==r&&(r=a[K.camelCase(t)])):r=a,r}}function h(e,t,n){if(K.acceptData(e)){var i,r,a=e.nodeType,o=a?K.cache:e,s=a?e[K.expando]:K.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){K.isArray(t)?t=t.concat(K.map(t,K.camelCase)):t in i?t=[t]:(t=K.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!p(i):!K.isEmptyObject(i))return}(n||(delete o[s].data,p(o[s])))&&(a?K.cleanData([e],!0):q.deleteExpando||o!=o.window?delete o[s]:o[s]=null)}}}function v(){return!0}function m(){return!1}function _(){try{return ie.activeElement}catch(e){}}function E(e){var t=be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,i,r=0,a=typeof e.getElementsByTagName!==fe?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==fe?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||K.nodeName(i,t)?a.push(i):K.merge(a,y(i,t));return void 0===t||t&&K.nodeName(e,t)?K.merge([e],a):a}function I(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function S(e){return e.type=(null!==K.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=Fe.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n,i=0;null!=(n=e[i]);i++)K._data(n,"globalEval",!t||K._data(t[i],"globalEval"))}function w(e,t){if(1===t.nodeType&&K.hasData(e)){var n,i,r,a=K._data(e),o=K._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)K.event.add(t,n,s[n][i])}o.data&&(o.data=K.extend({},o.data))}}function D(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!q.noCloneEvent&&t[K.expando]){r=K._data(t);for(i in r.events)K.removeEvent(t,i,r.handle);t.removeAttribute(K.expando)}"script"===n&&t.text!==e.text?(S(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),q.html5Clone&&e.innerHTML&&!K.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function R(e,t){var i,r=K(t.createElement(e)).appendTo(t.body),a=n.getDefaultComputedStyle&&(i=n.getDefaultComputedStyle(r[0]))?i.display:K.css(r[0],"display");return r.detach(),a}function N(e){var t=ie,n=He[e];return n||(n=R(e,t),"none"!==n&&n||(Be=(Be||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Be[0].contentWindow||Be[0].contentDocument).document,t.write(),t.close(),n=R(e,t),Be.detach()),He[e]=n),n}function C(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function O(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=tt.length;r--;)if(t=tt[r]+n,t in e)return t;return i}function x(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=K._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&me(i)&&(a[o]=K._data(i,"olddisplay",N(i.nodeName)))):(r=me(i),(n&&"none"!==n||!r)&&K._data(i,"olddisplay",r?n:K.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function P(e,t,n){var i=Qe.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function L(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=K.css(e,n+ve[a],!0,r)),i?("content"===n&&(o-=K.css(e,"padding"+ve[a],!0,r)),"margin"!==n&&(o-=K.css(e,"border"+ve[a]+"Width",!0,r))):(o+=K.css(e,"padding"+ve[a],!0,r),"padding"!==n&&(o+=K.css(e,"border"+ve[a]+"Width",!0,r)));return o}function k(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=je(e),o=q.boxSizing&&"border-box"===K.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=ze(e,t,a),(r<0||null==r)&&(r=e.style[t]),Ye.test(r))return r;i=o&&(q.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+L(e,t,n||(o?"border":"content"),i,a)+"px"}function F(e,t,n,i){var r;if(K.isArray(t))K.each(t,(function(t,r){n||pt.test(e)?i(e,r):F(e+"["+("object"==typeof r?t:"")+"]",r,n,i)}));else if(n||"object"!==K.type(t))i(e,t);else for(r in t)F(e+"["+r+"]",t[r],n,i)}var V=[],M=V.slice,U=V.concat,G=V.push,B=V.indexOf,j={},z=j.toString,H=j.hasOwnProperty,q={},Y="1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions",K=function(e,t){return new K.fn.init(e,t)},W=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,$=/^-ms-/,X=/-([\da-z])/gi,Q=function(e,t){return t.toUpperCase()};K.fn=K.prototype={jquery:Y,constructor:K,selector:"",length:0,toArray:function(){return M.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:M.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(M.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:G,sort:V.sort,splice:V.splice},K.extend=K.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),"object"==typeof o||K.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(i in r)e=o[i],n=r[i],o!==n&&(c&&n&&(K.isPlainObject(n)||(t=K.isArray(n)))?(t?(t=!1,a=e&&K.isArray(e)?e:[]):a=e&&K.isPlainObject(e)?e:{},o[i]=K.extend(c,a,n)):void 0!==n&&(o[i]=n));return o},K.extend({expando:"jQuery"+(Y+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray||function(e){return"array"===K.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==K.type(e)||e.nodeType||K.isWindow(e))return!1;try{if(e.constructor&&!H.call(e,"constructor")&&!H.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(q.ownLast)for(t in e)return H.call(e,t);for(t in e);return void 0===t||H.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?j[z.call(e)]||"object":typeof e},globalEval:function(e){e&&K.trim(e)&&(n.execScript||function(e){n.eval.call(n,e)})(e)},camelCase:function(e){return e.replace($,"ms-").replace(X,Q)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,a=e.length,s=o(e);if(n){if(s)for(;r<a&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;r<a&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(W,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?K.merge(n,"string"==typeof e?[e]:e):G.call(n,e)),n},inArray:function(e,t,n){var i;if(t){if(B)return B.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r},map:function(e,t,n){var i,r=0,a=e.length,s=o(e),u=[];if(s)for(;r<a;r++)i=t(e[r],r,n),null!=i&&u.push(i);else for(r in e)i=t(e[r],r,n),null!=i&&u.push(i);return U.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(r=e[t],t=e,e=r),K.isFunction(e))return n=M.call(arguments,2),i=function(){return e.apply(t||this,n.concat(M.call(arguments)))},i.guid=e.guid=e.guid||K.guid++,i},now:function(){return+new Date},support:q}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){j["[object "+t+"]"]=t.toLowerCase()}));var J=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
(function(e){function t(e,t,n,i){var r,a,o,s,u,c,d,p,g,h;if((t?t.ownerDocument||t:G)!==x&&O(t),t=t||x,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!i&&L){if(11!==s&&(r=_e.exec(e)))if(o=r[1]){if(9===s){if(a=t.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&M(t,a)&&a.id===o)return n.push(a),n}else{if(r[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=r[3])&&I.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(I.qsa&&(!k||!k.test(e))){if(p=d=U,g=t,h=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=b(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+f(c[u]);g=Ee.test(e)&&l(t.parentNode)||t,h=c.join(",")}if(h)try{return J.apply(n,g.querySelectorAll(h)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return D(e.replace(ue,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[U]=!0,e}function r(e){var t=x.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=e.length;i--;)T.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i((function(t){return t=+t,i((function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=j++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c=[B,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[U]||(t[U]={}),(s=u[i])&&s[0]===B&&s[1]===a)return c[2]=s[2];if(u[i]=c,c[2]=e(t,n,o))return!0}}}function g(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function h(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function m(e,t,n,r,a,o){return r&&!r[U]&&(r=m(r)),a&&!a[U]&&(a=m(a,o)),i((function(i,o,s,u){var c,l,d,f=[],p=[],g=o.length,m=i||h(t||"*",s.nodeType?[s]:s,[]),_=!e||!i&&t?m:v(m,f,e,s,u),E=n?a||(i?e:g||r)?[]:o:_;if(n&&n(_,E,s,u),r)for(c=v(E,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(E[p[l]]=!(_[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=E.length;l--;)(d=E[l])&&c.push(_[l]=d);a(null,E=[],c,u)}for(l=E.length;l--;)(d=E[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else E=v(E===o?E.splice(g,E.length):E),a?a(null,o,E,u):J.apply(o,E)}))}function _(e){for(var t,n,i,r=e.length,a=T.relative[e[0].type],o=a||T.relative[" "],s=a?1:0,u=p((function(e){return e===t}),o,!0),c=p((function(e){return ee(t,e)>-1}),o,!0),l=[function(e,n,i){var r=!a&&(i||n!==R)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=T.relative[e[s].type])l=[p(g(l),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[U]){for(i=++s;i<r&&!T.relative[e[i].type];i++);return m(s>1&&g(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<i&&_(e.slice(s,i)),i<r&&_(e=e.slice(i)),i<r&&f(e))}l.push(n)}return g(l)}function E(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,g="0",h=i&&[],m=[],_=R,E=i||a&&T.find.TAG("*",c),y=B+=null==_?1:Math.random()||.1,I=E.length;for(c&&(R=o!==x&&o);g!==I&&null!=(l=E[g]);g++){if(a&&l){for(d=0;f=e[d++];)if(f(l,o,s)){u.push(l);break}c&&(B=y)}r&&((l=!f&&l)&&p--,i&&h.push(l))}if(p+=g,r&&g!==p){for(d=0;f=n[d++];)f(h,m,o,s);if(i){if(p>0)for(;g--;)h[g]||m[g]||(m[g]=X.call(u));m=v(m)}J.apply(u,m),c&&!i&&m.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(B=y,R=_),h};return r?i(o):o}var y,I,T,S,A,b,w,D,R,N,C,O,x,P,L,k,F,V,M,U="sizzle"+1*new Date,G=e.document,B=0,j=0,z=n(),H=n(),q=n(),Y=function(e,t){return e===t&&(C=!0),0},K=1<<31,W={}.hasOwnProperty,$=[],X=$.pop,Q=$.push,J=$.push,Z=$.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),ae="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),ge={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,_e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ee=/[+~]/,ye=/'|\\/g,Ie=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Se=function(){O()};try{J.apply($=Z.call(G.childNodes),G.childNodes),$[G.childNodes.length].nodeType}catch(e){J={apply:$.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}I=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:G;return i!==x&&9===i.nodeType&&i.documentElement?(x=i,P=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Se,!1):n.attachEvent&&n.attachEvent("onunload",Se)),L=!A(i),I.attributes=r((function(e){return e.className="i",!e.getAttribute("className")})),I.getElementsByTagName=r((function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length})),I.getElementsByClassName=me.test(i.getElementsByClassName),I.getById=r((function(e){return P.appendChild(e).id=U,!i.getElementsByName||!i.getElementsByName(U).length})),I.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(Ie,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(Ie,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=I.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):I.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a},T.find.CLASS=I.getElementsByClassName&&function(e,t){if(L)return t.getElementsByClassName(e)},F=[],k=[],(I.qsa=me.test(i.querySelectorAll))&&(r((function(e){P.appendChild(e).innerHTML="<a id='"+U+"'></a><select id='"+U+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+U+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+U+"+*").length||k.push(".#.+[+~]")})),r((function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")}))),(I.matchesSelector=me.test(V=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&r((function(e){I.disconnectedMatch=V.call(e,"div"),V.call(e,"[s!='']:x"),F.push("!=",oe)})),k=k.length&&new RegExp(k.join("|")),F=F.length&&new RegExp(F.join("|")),t=me.test(P.compareDocumentPosition),M=t||me.test(P.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Y=t?function(e,t){if(e===t)return C=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!I.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===G&&M(G,e)?-1:t===i||t.ownerDocument===G&&M(G,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return C=!0,0;var n,r=0,a=e.parentNode,s=t.parentNode,u=[e],c=[t];if(!a||!s)return e===i?-1:t===i?1:a?-1:s?1:N?ee(N,e)-ee(N,t):0;if(a===s)return o(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;return r?o(u[r],c[r]):u[r]===G?-1:c[r]===G?1:0},i):x},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==x&&O(e),n=n.replace(de,"='$1']"),I.matchesSelector&&L&&(!F||!F.test(n))&&(!k||!k.test(n)))try{var i=V.call(e,n);if(i||I.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,x,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==x&&O(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==x&&O(e);var n=T.attrHandle[t.toLowerCase()],i=n&&W.call(T.attrHandle,t.toLowerCase())?n(e,t,!L):void 0;return void 0!==i?i:I.attributes||!L?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(C=!I.detectDuplicates,N=!I.sortStable&&e.slice(0),e.sort(Y),C){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return N=null,e},S=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=S(t);return n},T=t.selectors={cacheLength:50,createPseudo:i,match:ge,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ie,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(Ie,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ge.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=b(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ie,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,(function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,i){return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,g,h=a!==o?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),_=!u&&!s;if(v){if(a){for(;h;){for(d=t;d=d[h];)if(s?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1;g=h="only"===e&&!g&&"nextSibling"}return!0}if(g=[o?v.firstChild:v.lastChild],o&&_){for(l=v[U]||(v[U]={}),c=l[e]||[],p=c[0]===B&&c[1],f=c[0]===B&&c[2],d=p&&v.childNodes[p];d=++p&&d&&d[h]||(f=p=0)||g.pop();)if(1===d.nodeType&&++f&&d===t){l[e]=[B,p,f];break}}else if(_&&(c=(t[U]||(t[U]={}))[e])&&c[0]===B)f=c[1];else for(;(d=++p&&d&&d[h]||(f=p=0)||g.pop())&&((s?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++f||(_&&((d[U]||(d[U]={}))[e]=[B,f]),d!==t)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(e,n){var r,a=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[U]?a(n):a.length>1?(r=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?i((function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])})):function(e){return a(e,0,r)}):a}},pseudos:{not:i((function(e){var t=[],n=[],r=w(e.replace(ue,"$1"));return r[U]?i((function(e,t,n,i){for(var a,o=r(e,null,i,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))})):function(e,i,a){return t[0]=e,r(t,null,a,n),t[0]=null,!n.pop()}})),has:i((function(e){return function(n){return t(e,n).length>0}})),contains:i((function(e){return e=e.replace(Ie,Te),function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}})),lang:i((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ie,Te).toLowerCase(),function(t){var n;do if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===P},focus:function(e){return e===x.activeElement&&(!x.hasFocus||x.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:c((function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e})),gt:c((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},T.pseudos.nth=T.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[y]=s(y);for(y in{submit:!0,reset:!0})T.pseudos[y]=u(y);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,b=t.tokenize=function(e,n){var i,r,a,o,s,u,c,l=H[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=T.preFilter;s;){i&&!(r=ce.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),a.push({value:i,type:r[0].replace(ue," ")}),s=s.slice(i.length));for(o in T.filter)!(r=ge[o].exec(s))||c[o]&&!(r=c[o](r))||(i=r.shift(),a.push({value:i,type:o,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):H(e,u).slice(0)},w=t.compile=function(e,t){var n,i=[],r=[],a=q[e+" "];if(!a){for(t||(t=b(e)),n=t.length;n--;)a=_(t[n]),a[U]?i.push(a):r.push(a);a=q(e,E(r,i)),a.selector=e}return a},D=t.select=function(e,t,n,i){var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&b(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&I.getById&&9===t.nodeType&&L&&T.relative[a[1].type]){if(t=(T.find.ID(o.matches[0].replace(Ie,Te),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=ge.needsContext.test(e)?0:a.length;r--&&(o=a[r],!T.relative[s=o.type]);)if((u=T.find[s])&&(i=u(o.matches[0].replace(Ie,Te),Ee.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return J.apply(n,i),n;break}}return(c||w(e,d))(i,t,!L,n,Ee.test(e)&&l(t.parentNode)||t),n},I.sortStable=U.split("").sort(Y).join("")===U,I.detectDuplicates=!!C,O(),I.sortDetached=r((function(e){return 1&e.compareDocumentPosition(x.createElement("div"))})),r((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||a("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),I.attributes&&r((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||a("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),r((function(e){return null==e.getAttribute("disabled")}))||a(te,(function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),t})(n);K.find=J,K.expr=J.selectors,K.expr[":"]=K.expr.pseudos,K.unique=J.uniqueSort,K.text=J.getText,K.isXMLDoc=J.isXML,K.contains=J.contains;var Z=K.expr.match.needsContext,ee=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,te=/^.[^:#\[\.,]*$/;K.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?K.find.matchesSelector(i,e)?[i]:[]:K.find.matches(e,K.grep(t,(function(e){return 1===e.nodeType})))},K.fn.extend({find:function(e){var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(K(e).filter((function(){for(t=0;t<r;t++)if(K.contains(i[t],this))return!0})));for(t=0;t<r;t++)K.find(e,i[t],n);return n=this.pushStack(r>1?K.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&Z.test(e)?K(e):e||[],!1).length}});var ne,ie=n.document,re=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ae=K.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:re.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ne).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ie,!0)),ee.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(i=ie.getElementById(n[2]),i&&i.parentNode){if(i.id!==n[2])return ne.find(e);this.length=1,this[0]=i}return this.context=ie,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof ne.ready?ne.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))};ae.prototype=K.fn,ne=K(ie);var oe=/^(?:parents|prev(?:Until|All))/,se={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,n){for(var i=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!K(r).is(n));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),K.fn.extend({has:function(e){var t,n=K(e,this),i=n.length;return this.filter((function(){for(t=0;t<i;t++)if(K.contains(this,n[t]))return!0}))},closest:function(e,t){for(var n,i=0,r=this.length,a=[],o=Z.test(e)||"string"!=typeof e?K(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?K.unique(a):a)},index:function(e){return e?"string"==typeof e?K.inArray(this[0],K(e)):K.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return K.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:K.merge([],e.childNodes)}},(function(e,t){K.fn[e]=function(n,i){var r=K.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=K.filter(i,r)),this.length>1&&(se[e]||(r=K.unique(r)),oe.test(e)&&(r=r.reverse())),this.pushStack(r)}}));var ue=/\S+/g,ce={};K.Callbacks=function(e){e="string"==typeof e?ce[e]||c(e):K.extend({},e);var t,n,i,r,a,o,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,i=!0,a=o||0,o=0,r=s.length,t=!0;s&&a<r;a++)if(s[a].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:d.disable())},d={add:function(){if(s){var i=s.length;!(function t(n){K.each(n,(function(n,i){var r=K.type(i);"function"===r?e.unique&&d.has(i)||s.push(i):i&&i.length&&"string"!==r&&t(i)}))})(arguments),t?r=s.length:n&&(o=i,l(n))}return this},remove:function(){return s&&K.each(arguments,(function(e,n){for(var i;(i=K.inArray(n,s,i))>-1;)s.splice(i,1),t&&(i<=r&&r--,i<=a&&a--)})),this},has:function(e){return e?K.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],r=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||i&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred((function(n){K.each(t,(function(t,a){var o=K.isFunction(e[t])&&e[t];r[a[1]]((function(){var e=o&&o.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?K.extend(e,i):i}},r={};return i.pipe=i.then,K.each(t,(function(e,a){var o=a[2],s=a[3];i[a[1]]=o.add,s&&o.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},r[a[0]+"With"]=o.fireWith})),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,a=M.call(arguments),o=a.length,s=1!==o||e&&K.isFunction(e.promise)?o:0,u=1===s?e:K.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?M.call(arguments):r,i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)a[r]&&K.isFunction(a[r].promise)?a[r].promise().done(c(r,i,a)).fail(u.reject).progress(c(r,n,t)):--s;return s||u.resolveWith(i,a),u.promise()}});var le;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){if(e===!0?!--K.readyWait:!K.isReady){if(!ie.body)return setTimeout(K.ready);K.isReady=!0,e!==!0&&--K.readyWait>0||(le.resolveWith(ie,[K]),K.fn.triggerHandler&&(K(ie).triggerHandler("ready"),K(ie).off("ready")))}}}),K.ready.promise=function(e){if(!le)if(le=K.Deferred(),"complete"===ie.readyState)setTimeout(K.ready);else if(ie.addEventListener)ie.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("load",d,!1);else{ie.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var t=!1;try{t=null==n.frameElement&&ie.documentElement}catch(e){}t&&t.doScroll&&!(function e(){if(!K.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}l(),K.ready()}})()}return le.promise(e)};var de,fe="undefined";for(de in K(q))break;q.ownLast="0"!==de,q.inlineBlockNeedsLayout=!1,K((function(){var e,t,n,i;n=ie.getElementsByTagName("body")[0],n&&n.style&&(t=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==fe&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",q.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))})),(function(){var e=ie.createElement("div");if(null==q.deleteExpando){q.deleteExpando=!0;try{delete e.test}catch(e){q.deleteExpando=!1}}e=null})(),K.acceptData=function(e){var t=K.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)};var pe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ge=/([A-Z])/g;K.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?K.cache[e[K.expando]]:e[K.expando],!!e&&!p(e)},data:function(e,t,n){return g(e,t,n)},removeData:function(e,t){return h(e,t)},_data:function(e,t,n){return g(e,t,n,!0)},_removeData:function(e,t){return h(e,t,!0)}}),K.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=K.data(a),1===a.nodeType&&!K._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=K.camelCase(i.slice(5)),f(a,i,r[i])));K._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each((function(){K.data(this,e)})):arguments.length>1?this.each((function(){K.data(this,e,t)})):a?f(a,e,K.data(a,e)):void 0},removeData:function(e){return this.each((function(){K.removeData(this,e)}))}}),K.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=K._data(e,t),n&&(!i||K.isArray(n)?i=K._data(e,t,K.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),i=n.length,r=n.shift(),a=K._queueHooks(e,t),o=function(){K.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K._data(e,n)||K._data(e,n,{empty:K.Callbacks("once memory").add((function(){K._removeData(e,t+"queue"),K._removeData(e,n)}))})}}),K.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each((function(){var n=K.queue(this,e,t);K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){K.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=K.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=K._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var he=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ve=["Top","Right","Bottom","Left"],me=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},_e=K.access=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===K.type(n)){r=!0;for(s in n)K.access(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,K.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(K(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Ee=/^(?:checkbox|radio)$/i;!(function(){var e=ie.createElement("input"),t=ie.createElement("div"),n=ie.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",q.leadingWhitespace=3===t.firstChild.nodeType,q.tbody=!t.getElementsByTagName("tbody").length,q.htmlSerialize=!!t.getElementsByTagName("link").length,q.html5Clone="<:nav></:nav>"!==ie.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),q.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,q.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){q.noCloneEvent=!1})),t.cloneNode(!0).click()),null==q.deleteExpando){q.deleteExpando=!0;try{delete t.test}catch(e){q.deleteExpando=!1}}})(),(function(){var e,t,i=ie.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(q[e+"Bubbles"]=t in n)||(i.setAttribute(t,"t"),q[e+"Bubbles"]=i.attributes[t].expando===!1);i=null})();var ye=/^(?:input|select|textarea)$/i,Ie=/^key/,Te=/^(?:mouse|pointer|contextmenu)|click/,Se=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/;K.event={global:{},add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,g,h,v=K._data(e);if(v){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=K.guid++),(o=v.events)||(o=v.events={}),(l=v.handle)||(l=v.handle=function(e){return typeof K===fe||e&&K.event.triggered===e.type?void 0:K.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(ue)||[""],s=t.length;s--;)a=Ae.exec(t[s])||[],p=h=a[1],g=(a[2]||"").split(".").sort(),p&&(c=K.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=K.event.special[p]||{},d=K.extend({type:p,origType:h,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&K.expr.match.needsContext.test(r),namespace:g.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,g,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),K.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,g,h,v=K.hasData(e)&&K._data(e);if(v&&(l=v.events)){for(t=(t||"").match(ue)||[""],c=t.length;c--;)if(s=Ae.exec(t[c])||[],p=h=s[1],g=(s[2]||"").split(".").sort(),p){for(d=K.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=f.length;a--;)o=f[a],!r&&h!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));
u&&!f.length&&(d.teardown&&d.teardown.call(e,g,v.handle)!==!1||K.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)K.event.remove(e,p+t[c],n,i,!0);K.isEmptyObject(l)&&(delete v.handle,K._removeData(e,"events"))}},trigger:function(e,t,i,r){var a,o,s,u,c,l,d,f=[i||ie],p=H.call(e,"type")?e.type:e,g=H.call(e,"namespace")?e.namespace.split("."):[];if(s=l=i=i||ie,3!==i.nodeType&&8!==i.nodeType&&!Se.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(g=p.split("."),p=g.shift(),g.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[K.expando]?e:new K.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=g.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:K.makeArray(t,[e]),c=K.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,t)!==!1)){if(!r&&!c.noBubble&&!K.isWindow(i)){for(u=c.delegateType||p,Se.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||ie)&&f.push(l.defaultView||l.parentWindow||n)}for(d=0;(s=f[d++])&&!e.isPropagationStopped();)e.type=d>1?u:c.bindType||p,a=(K._data(s,"events")||{})[e.type]&&K._data(s,"handle"),a&&a.apply(s,t),a=o&&s[o],a&&a.apply&&K.acceptData(s)&&(e.result=a.apply(s,t),e.result===!1&&e.preventDefault());if(e.type=p,!r&&!e.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),t)===!1)&&K.acceptData(i)&&o&&i[p]&&!K.isWindow(i)){l=i[o],l&&(i[o]=null),K.event.triggered=p;try{i[p]()}catch(e){}K.event.triggered=void 0,l&&(i[o]=l)}return e.result}},dispatch:function(e){e=K.event.fix(e);var t,n,i,r,a,o=[],s=M.call(arguments),u=(K._data(this,"events")||{})[e.type]||[],c=K.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=K.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,a=0;(i=r.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,n=((K.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],a=0;a<s;a++)i=t[a],n=i.selector+" ",void 0===r[n]&&(r[n]=i.needsContext?K(n,this).index(u)>=0:K.find(n,this,null,[u]).length),r[n]&&r.push(i);r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[K.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Te.test(r)?this.mouseHooks:Ie.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new K.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||ie),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||ie,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==_()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(K.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?K.event.trigger(r,null,t):K.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=ie.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var i="on"+t;e.detachEvent&&(typeof e[i]===fe&&(e[i]=null),e.detachEvent(i,n))},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:m):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||K.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),q.submitBubbles||(K.event.special.submit={setup:function(){return!K.nodeName(this,"form")&&void K.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=K.nodeName(t,"input")||K.nodeName(t,"button")?t.form:void 0;n&&!K._data(n,"submitBubbles")&&(K.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),K._data(n,"submitBubbles",!0))}))},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&K.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!K.nodeName(this,"form")&&void K.event.remove(this,"._submit")}}),q.changeBubbles||(K.event.special.change={setup:function(){return ye.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(K.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),K.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),K.event.simulate("change",this,e,!0)}))),!1):void K.event.add(this,"beforeactivate._change",(function(e){var t=e.target;ye.test(t.nodeName)&&!K._data(t,"changeBubbles")&&(K.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||K.event.simulate("change",this.parentNode,e,!0)})),K._data(t,"changeBubbles",!0))}))},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return K.event.remove(this,"._change"),!ye.test(this.nodeName)}}),q.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=K._data(i,t);r||i.addEventListener(e,n,!0),K._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=K._data(i,t)-1;r?K._data(i,t,r):(i.removeEventListener(e,n,!0),K._removeData(i,t))}}})),K.fn.extend({on:function(e,t,n,i,r){var a,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=m;else if(!i)return this;return 1===r&&(o=i,i=function(e){return K().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=K.guid++)),this.each((function(){K.event.add(this,e,i,n,t)}))},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=m),this.each((function(){K.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){K.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return K.event.trigger(e,t,n,!0)}});var be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",we=/ jQuery\d+="(?:null|\d+)"/g,De=new RegExp("<(?:"+be+")[\\s/>]","i"),Re=/^\s+/,Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ce=/<([\w:]+)/,Oe=/<tbody/i,xe=/<|&#?\w+;/,Pe=/<(?:script|style|link)/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^$|\/(?:java|ecma)script/i,Fe=/^true\/(.*)/,Ve=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:q.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ue=E(ie),Ge=Ue.appendChild(ie.createElement("div"));Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,K.extend({clone:function(e,t,n){var i,r,a,o,s,u=K.contains(e.ownerDocument,e);if(q.html5Clone||K.isXMLDoc(e)||!De.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(Ge.innerHTML=e.outerHTML,Ge.removeChild(a=Ge.firstChild)),!(q.noCloneEvent&&q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(i=y(a),s=y(e),o=0;null!=(r=s[o]);++o)i[o]&&D(r,i[o]);if(t)if(n)for(s=s||y(e),i=i||y(a),o=0;null!=(r=s[o]);o++)w(r,i[o]);else w(e,a);return i=y(a,"script"),i.length>0&&b(i,!u&&y(e,"script")),i=s=r=null,a},buildFragment:function(e,t,n,i){for(var r,a,o,s,u,c,l,d=e.length,f=E(t),p=[],g=0;g<d;g++)if(a=e[g],a||0===a)if("object"===K.type(a))K.merge(p,a.nodeType?[a]:a);else if(xe.test(a)){for(s=s||f.appendChild(t.createElement("div")),u=(Ce.exec(a)||["",""])[1].toLowerCase(),l=Me[u]||Me._default,s.innerHTML=l[1]+a.replace(Ne,"<$1></$2>")+l[2],r=l[0];r--;)s=s.lastChild;if(!q.leadingWhitespace&&Re.test(a)&&p.push(t.createTextNode(Re.exec(a)[0])),!q.tbody)for(a="table"!==u||Oe.test(a)?"<table>"!==l[1]||Oe.test(a)?0:s:s.firstChild,r=a&&a.childNodes.length;r--;)K.nodeName(c=a.childNodes[r],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(K.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(a));for(s&&f.removeChild(s),q.appendChecked||K.grep(y(p,"input"),I),g=0;a=p[g++];)if((!i||K.inArray(a,i)===-1)&&(o=K.contains(a.ownerDocument,a),s=y(f.appendChild(a),"script"),o&&b(s),n))for(r=0;a=s[r++];)ke.test(a.type||"")&&n.push(a);return s=null,f},cleanData:function(e,t){for(var n,i,r,a,o=0,s=K.expando,u=K.cache,c=q.deleteExpando,l=K.event.special;null!=(n=e[o]);o++)if((t||K.acceptData(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?K.event.remove(n,i):K.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c?delete n[s]:typeof n.removeAttribute!==fe?n.removeAttribute(s):n[s]=null,V.push(r))}}}),K.fn.extend({text:function(e){return _e(this,(function(e){return void 0===e?K.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ie).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,i=e?K.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||K.cleanData(y(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&K.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&K.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return K.clone(this,e,t)}))},html:function(e){return _e(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(we,""):void 0;if("string"==typeof e&&!Pe.test(e)&&(q.htmlSerialize||!De.test(e))&&(q.leadingWhitespace||!Re.test(e))&&!Me[(Ce.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ne,"<$1></$2>");try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,(function(t){e=this.parentNode,K.cleanData(y(this)),e&&e.replaceChild(t,this)})),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=U.apply([],e);var n,i,r,a,o,s,u=0,c=this.length,l=this,d=c-1,f=e[0],p=K.isFunction(f);if(p||c>1&&"string"==typeof f&&!q.checkClone&&Le.test(f))return this.each((function(n){var i=l.eq(n);p&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)}));if(c&&(s=K.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(a=K.map(y(s,"script"),S),r=a.length;u<c;u++)i=s,u!==d&&(i=K.clone(i,!0,!0),r&&K.merge(a,y(i,"script"))),t.call(this[u],i,u);if(r)for(o=a[a.length-1].ownerDocument,K.map(a,A),u=0;u<r;u++)i=a[u],ke.test(i.type||"")&&!K._data(i,"globalEval")&&K.contains(o,i)&&(i.src?K._evalUrl&&K._evalUrl(i.src):K.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Ve,"")));s=n=null}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){K.fn[e]=function(e){for(var n,i=0,r=[],a=K(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),K(a[i])[t](n),G.apply(r,n.get());return this.pushStack(r)}}));var Be,je,ze,He={},qe=/^margin/,Ye=new RegExp("^("+he+")(?!px)[a-z%]+$","i"),Ke=/^(top|right|bottom|left)$/;n.getComputedStyle?(je=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||K.contains(e.ownerDocument,e)||(o=K.style(e,t)),Ye.test(o)&&qe.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a)),void 0===o?o:o+""}):ie.documentElement.currentStyle&&(je=function(e){return e.currentStyle},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),Ye.test(o)&&!Ke.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"}),(function(){function e(){var e,t,i,r;t=ie.getElementsByTagName("body")[0],t&&t.style&&(e=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a=o=!1,u=!0,n.getComputedStyle&&(a="1%"!==(n.getComputedStyle(e,null)||{}).top,o="4px"===(n.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(ie.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(i))}var t,i,r,a,o,s,u;t=ie.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=r&&r.style,i&&(i.cssText="float:left;opacity:.5",q.opacity="0.5"===i.opacity,q.cssFloat=!!i.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",q.clearCloneStyle="content-box"===t.style.backgroundClip,q.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,K.extend(q,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==o&&e(),o},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){return null==u&&e(),u}}))})(),K.swap=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r};var We=/alpha\([^)]*\)/i,$e=/opacity\s*=\s*([^)]*)/,Xe=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+he+")(.*)$","i"),Je=new RegExp("^([+-])=("+he+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"},tt=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:q.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=K.camelCase(t),u=e.style;if(t=K.cssProps[s]||(K.cssProps[s]=O(u,s)),o=K.cssHooks[t]||K.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=Je.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(K.css(e,t)),a="number"),null!=n&&n===n&&("number"!==a||K.cssNumber[s]||(n+="px"),q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=K.camelCase(t);return t=K.cssProps[s]||(K.cssProps[s]=O(e.style,s)),o=K.cssHooks[t]||K.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=ze(e,t,i)),"normal"===a&&t in et&&(a=et[t]),""===n||n?(r=parseFloat(a),n===!0||K.isNumeric(r)?r||0:a):a}}),K.each(["height","width"],(function(e,t){K.cssHooks[t]={get:function(e,n,i){if(n)return Xe.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Ze,(function(){return k(e,t,i)})):k(e,t,i)},set:function(e,n,i){var r=i&&je(e);return P(e,n,i?L(e,t,i,q.boxSizing&&"border-box"===K.css(e,"boxSizing",!1,r),r):0)}}})),q.opacity||(K.cssHooks.opacity={get:function(e,t){return $e.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=K.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===K.trim(a.replace(We,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=We.test(a)?a.replace(We,r):a+" "+r)}}),K.cssHooks.marginRight=C(q.reliableMarginRight,(function(e,t){if(t)return K.swap(e,{display:"inline-block"},ze,[e,"marginRight"])})),K.each({margin:"",padding:"",border:"Width"},(function(e,t){K.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ve[i]+t]=a[i]||a[i-2]||a[0];return r}},qe.test(e)||(K.cssHooks[e+t].set=P)})),K.fn.extend({css:function(e,t){return _e(this,(function(e,t,n){var i,r,a={},o=0;if(K.isArray(t)){for(i=je(e),r=t.length;o<r;o++)a[t[o]]=K.css(e,t[o],!1,i);return a}return void 0!==n?K.style(e,t,n):K.css(e,t)}),e,t,arguments.length>1)},show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){me(this)?K(this).show():K(this).hide()}))}}),K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}}))},(function(){var e,t,n,i,r;t=ie.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=t.getElementsByTagName("a")[0],n=ie.createElement("select"),r=n.appendChild(ie.createElement("option")),e=t.getElementsByTagName("input")[0],i.style.cssText="top:1px",q.getSetAttribute="t"!==t.className,q.style=/top/.test(i.getAttribute("style")),q.hrefNormalized="/a"===i.getAttribute("href"),q.checkOn=!!e.value,q.optSelected=r.selected,q.enctype=!!ie.createElement("form").enctype,n.disabled=!0,q.optDisabled=!r.disabled,e=ie.createElement("input"),e.setAttribute("value",""),q.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),q.radioValue="t"===e.value})();var nt=/\r/g;K.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=K.isFunction(e),this.each((function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,K(this).val()):e,null==r?r="":"number"==typeof r?r+="":K.isArray(r)&&(r=K.map(r,(function(e){return null==e?"":e+""}))),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}));if(r)return t=K.valHooks[r.type]||K.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(nt,""):null==n?"":n)}}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(q.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=K.makeArray(t),o=r.length;o--;)if(i=r[o],K.inArray(K.valHooks.option.get(i),a)>=0)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),K.each(["radio","checkbox"],(function(){K.valHooks[this]={set:function(e,t){if(K.isArray(t))return e.checked=K.inArray(K(e).val(),t)>=0}},q.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var it,rt,at=K.expr.attrHandle,ot=/^(?:checked|selected)$/i,st=q.getSetAttribute,ut=q.input;K.fn.extend({attr:function(e,t){return _e(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){K.removeAttr(this,e)}))}}),K.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===fe?K.prop(e,t,n):(1===a&&K.isXMLDoc(e)||(t=t.toLowerCase(),i=K.attrHooks[t]||(K.expr.match.bool.test(t)?rt:it)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=K.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(ue);if(a&&1===e.nodeType)for(;n=a[r++];)i=K.propFix[n]||n,K.expr.match.bool.test(n)?ut&&st||!ot.test(n)?e[i]=!1:e[K.camelCase("default-"+n)]=e[i]=!1:K.attr(e,n,""),e.removeAttribute(st?n:i)},attrHooks:{type:{set:function(e,t){if(!q.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rt={set:function(e,t,n){return t===!1?K.removeAttr(e,n):ut&&st||!ot.test(n)?e.setAttribute(!st&&K.propFix[n]||n,n):e[K.camelCase("default-"+n)]=e[n]=!0,n}},K.each(K.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=at[t]||K.find.attr;at[t]=ut&&st||!ot.test(t)?function(e,t,i){var r,a;return i||(a=at[t],at[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,at[t]=a),r}:function(e,t,n){if(!n)return e[K.camelCase("default-"+t)]?t.toLowerCase():null}})),ut&&st||(K.attrHooks.value={set:function(e,t,n){return K.nodeName(e,"input")?void(e.defaultValue=t):it&&it.set(e,t,n)}}),st||(it={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},at.id=at.name=at.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},K.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:it.set},K.attrHooks.contenteditable={set:function(e,t,n){it.set(e,""!==t&&t,n)}},K.each(["width","height"],(function(e,t){K.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),q.style||(K.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var ct=/^(?:input|select|textarea|button|object)$/i,lt=/^(?:a|area)$/i;K.fn.extend({prop:function(e,t){return _e(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return e=K.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),K.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var i,r,a,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return a=1!==o||!K.isXMLDoc(e),a&&(t=K.propFix[t]||t,r=K.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=K.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||lt.test(e.nodeName)&&e.href?0:-1}}}}),q.hrefNormalized||K.each(["href","src"],(function(e,t){K.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),q.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){K.propFix[this.toLowerCase()]=this})),q.enctype||(K.propFix.enctype="encoding");var dt=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c="string"==typeof e&&e;if(K.isFunction(e))return this.each((function(t){K(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):" ")){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o=K.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c=0===arguments.length||"string"==typeof e&&e;if(K.isFunction(e))return this.each((function(t){K(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):"")){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");o=e?K.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):K.isFunction(e)?this.each((function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var t,i=0,r=K(this),a=e.match(ue)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==fe&&"boolean"!==n||(this.className&&K._data(this,"__className__",this.className),this.className=this.className||e===!1?"":K._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(dt," ").indexOf(t)>=0)return!0;return!1}}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),K.fn.extend({wrapAll:function(e){if(K.isFunction(e))return this.each((function(t){K(this).wrapAll(e.call(this,t))}));if(this[0]){var t=K(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return K.isFunction(e)?this.each((function(t){K(this).wrapInner(e.call(this,t))})):this.each((function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=K.isFunction(e);return this.each((function(n){K(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)})).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!q.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||K.css(e,"display"))},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var ft=/%20/g,pt=/\[\]$/,gt=/\r?\n/g,ht=/^(?:submit|button|image|reset|file)$/i,vt=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var n,i=[],r=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,(function(){r(this.name,this.value)}));else for(n in e)F(n,e[n],t,r);return i.join("&").replace(ft,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&vt.test(this.nodeName)&&!ht.test(e)&&(this.checked||!Ee.test(e))})).map((function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,(function(e){return{name:t.name,value:e.replace(gt,"\r\n")}})):{name:t.name,value:n.replace(gt,"\r\n")}})).get()}}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ie;var i=ee.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=K.buildFragment([e],t,r),r&&r.length&&K(r).remove(),K.merge([],i.childNodes))},i=[],r=function(){return K}.apply(t,i),!(void 0!==r&&(e.exports=r));var mt=n.jQuery,_t=n.$;return K.noConflict=function(e){return n.$===K&&(n.$=_t),e&&n.jQuery===K&&(n.jQuery=mt),K},typeof a===fe&&(n.jQuery=n.$=K),K}))}),(function(e,t,n){var i=n(5),r=n(10),a=n(2),o=n(68).Promise,s=n(16),u=n(8),c=n(72),l=n(18),d=3;t.isCORSSupported=function(){var e=c.get("XMLHttpRequest");return"withCredentials"in new e;
},t.request=function(e){return e=i.extend({method:"GET",async:!0},e),new o(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=c.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=l.stringify(e.data)),o.open(e.method,e.url,e.async),e.contentType&&o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,c,l){if(!n)return o.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return o.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(c)&&(c=0);var f={id:n,timeStamp:u.now(),data:e,retryCount:c};return a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Sending event ",n),t.request(e).then((function(e){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),s.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-c," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){e.exports=n(69)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){$=e}function o(e){X=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<K;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}K=0}function p(){try{var e=n(71);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function g(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];X((function(){return x(a,r,e,i._result)}))})():R(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ue.error=e,ue}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){X((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function T(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function S(e,t,n){t.constructor===e.constructor&&n===g&&t.constructor.resolve===h?T(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,m()):e(n)?S(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),N(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&X(N,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,X(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&X(N,e)}function N(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?x(n,i,r,a):r(a);e._subscribers.length=0}}function C(){this.error=null}function O(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function x(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=O(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,_())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function P(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function L(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function F(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),Y(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function M(e){return new F(this,e).promise}function U(e){var t=this;return new t(Y(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(v);return D(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(e){this[re]=L(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&B(),this instanceof z?P(this,e):j())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z}var q=void 0;q=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Y=q,K=0,W=void 0,$=void 0,X=function(e,t){ne[K]=e,ne[K+1]=t,K+=2,2===K&&($?$(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new C,ce=new C,le=0;return F.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},F.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=E(e);if(r===g&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===z){var a=new n(v);S(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},F.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},F.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},z.all=M,z.race=U,z.resolve=h,z.reject=G,z._setScheduler=a,z._setAsap=o,z._asap=X,z.prototype={constructor:z,then:g,catch:function(e){return this.then(null,e)}},z.polyfill=H,z.Promise=z,z}))}).call(t,n(70),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?g=p.concat(g):v=-1,g.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,h=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,g=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new u(e,t)),1!==g.length||h||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(5),r=n(8),a=n(17),o=n(73),s=n(2),u=n(10),c=n(16),l=n(19),d=l.get("stores/sandbox"),f=n(9);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+r.now(),t=o.createElement("iframe");t.name=e,t.style.display="none",o.appendToHead(t);var n=t.contentWindow,l=t.contentDocument;l.write("<script></script>"),l.close();var d=i.mapValues(a.SandboxedFunctions,(function(e){return n[e]}));s.dispatch(u.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){c.warn("Unable to create a sandbox: ",e)}}}),(function(e,t){function n(){return"loading"===t.getReadyState()}t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!n())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return document.head.appendChild(e)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){function i(){var e=Boolean(_.result(window.optimizely,"initialized"));T.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){var e=D.getUserAgent()||"";if(!_.isString(e))return void E.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(_.includes(e,t))return E.warn("Directive / Matches bot:",t),!0};_.some(t,n)&&(E.log("Directive / Disabling tracking"),T.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function a(){var e=S.get(A.COOKIES.OPT_OUT),n=N.getQueryParamValue(C.OPT_OUT);e?n===e||"true"!==n&&"false"!==n?T.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):t.setOptOut("true"===n):"true"===n&&t.setOptOut(!0)}function o(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var n=0;n<t.length;n++)if("true"===N.getQueryParamValue(t[n])){E.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}T.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function s(){T.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function u(){var e=N.getQueryParamValue(C.LEGACY_PREVIEW);e&&E.log("Directive / Is legacy preview mode"),T.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function c(){T.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function l(){T.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function d(){var e=D.getGlobal("optlyDesktop"),t=!(!e||_.isUndefined(e.p13nInner));t&&E.log("Directive / Is running in desktop app editor"),T.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function f(){var e="true"===N.getQueryParamValue(C.EDITOR_V2);e&&E.log("Directive / Is running in editor"),T.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function p(){var e=S.get(A.COOKIES.TOKEN)||null,t=N.getQueryParamValue(C.TOKEN)||e;T.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function g(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=N.getQueryParamValue(C.FORCE_AUDIENCES);if(n)t=n.split(",");else if(e)try{var i=R.parse(e);t=i.forceAudienceIds}catch(t){var r=new w("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&E.warn("Directive / Force parameters disabled - ignoring force audience IDs.")}function h(){var e=S.get(A.COOKIES.PREVIEW),t=[],n=N.getQueryParamValue(C.FORCE_VARIATIONS);if(n)t=n.split(",");else if(e)try{var i=R.parse(e);t=i.forceVariationIds}catch(t){var r=new w("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&E.warn("Directive / Force parameters disabled - ignoring force variation IDs.")}function v(){var e=N.getQueryParamValue(C.FORCE_TRACKING);e&&T.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function m(){var e="OFF",t=N.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&E.setLogMatch(n[1])}E.setLogLevel(e)}var _=n(5),E=n(16),y=n(10),I=n(75),T=n(2),S=n(77),A=n(17),b=n(12).create,w=t.JSONParseError=b("JSONParseError"),D=n(9),R=n(18),N=n(78),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){m(),r(),i(),a(),o(),c(),s(),u(),l(),d(),f(),p(),g(),h(),v()},t.setOptOut=function(e){e?(E.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",null,!0)):S.remove(A.COOKIES.OPT_OUT),T.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(76);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(5),r=n(48),a=n(2),o=n(10),s=n(19),u=n(16),c=n(75),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),a.dispatch(o.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){a.dispatch(o.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){u.warn("Error in event emitter handler",e,r),!n&&i.emitErrors&&c.emitError(r,null,t)}}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,d=o.length-1;d>=0;d--)if(s.unshift(o[d]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return c.dispatch(l.SET_COOKIE_DOMAIN,u),u}var r=n(5),a=n(8),o=n(73),s=n(9),u=n(12).create,c=n(2),l=n(10),d=n(19),f=d.get("stores/cookie_options"),p=t.SetError=u("CookieSetError"),g=t.MismatchError=u("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,s,u;n=o.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],s=i.indexOf("="),s>0&&(u=t.safeDecodeURIComponent(i.substring(0,s)),void 0===c[u])){var l=i.substring(s+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,u,c){u=r.extend({encodeValue:!0},u),c!==!1&&(c=!0);var l=[];if(r.isUndefined(u.domain)){var d=f.getCurrentDomain();d||(d=i(s.getLocation(),!0)),u.domain=d}if(u.domain&&l.push("domain="+u.domain),r.isUndefined(u.path)&&(u.path="/"),u.path&&l.push("path="+u.path),r.isUndefined(u.expires)){var h=r.isUndefined(u.maxAge)?f.getDefaultAgeInSeconds():u.maxAge;u.expires=new Date(a.now()+1e3*h)}if(r.isUndefined(u.expires)||l.push("expires="+u.expires.toUTCString()),u.secure&&l.push("secure"),l=l.join(";"),o.setCookie(e+"="+(u.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=u.encodeValue,m=t.get(e,v);if(m!==n){if(!m)throw new p('Failed to set cookie "'+e+'"');throw new g('Expected "'+n+'" for "'+e+'", got "'+m+'"')}}},t.remove=function(e,n){t.set(e,null,r.extend({},n,{expires:new Date(0)}),!1)};var h=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(9),r=n(79);t.getLanguage=function(){return i.getNavigatorLanguage()},t.getQueryParams=r.getQueryParams,t.getQueryParamValue=r.getQueryParamValue,t.getUrl=function(){return i.getHref()}}),(function(e,t,n){var i=n(5),r=n(9);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(73),r=n(16),a=n(67);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);if(i.write('<script id="'+o+'" src="'+e+'"></script>'),!i.querySelector("#"+o))throw new Error("Document.write failed to append script");n&&n()}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var s=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:s}).catch((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){var i=n(9),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){function i(){var e=null;A.isNumber(e)&&0===de.getCount()?(H.log("Activating after delay of",e,"ms because no Experiments are running"),D.dispatch(z.SET_RUM_DATA,{data:{activateDfd:!0}}),setTimeout(R.emitActivateEvent,e)):R.emitActivateEvent()}function r(e){Te.handleError(e.data.error,e.data.metadata)}function a(){A.isArray(window.optimizely)&&(window.optimizely=A.filter(window.optimizely,(function(e){var t=!0;return!Ie.push(e,t)})))}function o(e,t){try{var n=P.parse(t);q.setItem(e,n)}catch(n){var i=new F("Failed to syncRemoteKeyToLocal with value "+t+" (key "+e+")"),r={originalMessage:n.message};N.emitInternalError(i,r)}}function s(e){return A.each(e,(function(e,t){o(t,e)})),e}function u(){var e=pe.getAccountId(),t="https://a3013110282.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";Y.subscribe(o);var i=Y.fetchAll().then((function(e){var t=ye.getCanonicalOrigins();if(t){var n=Y.getXDomainUserId(e,t);n&&(H.log("Syncing cross-origin visitor randomId:",n),C.persistVisitorId({randomId:n}))}return e})).then(s);return w.all([Y.load(t,n),i.then((function(){C.loadForeignData()})).then((function(){H.log("Loaded visitor data from foreign origins"),R.emitOriginsSyncedEvent()}),(function(e){H.debug("Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),H.debug("Enqueuing sync to happen after visitorId set."),D.dispatch(z.ADD_CLEANUP_FN,{lifecycle:K.Lifecycle.postVisitorProfileLoad,cleanupFn:R.emitOriginsSyncedEvent})}))])}function c(e){var t=ce.getVisitorProfile();return C.populateEagerVisitorData(e,t)}function l(e,t,n){e=e||[];var i=le.getAllPlugins(K.PluginTypes.visitorProfileProviders),r=pe.getGlobalHoldbackThreshold(),a=ce.getVisitorProfile();C.populateLazyVisitorData(i,a);var o=_e.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=ce.getVisitorProfile();if(t){var c=_e.getVariationIdMap();s=c[t.id]}var l;n&&(l=n.id);var d={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,pageId:l,layer:t};return U.createTicket(d)}function d(e){var t=de.getAllByPageId(e.id),n=me.getForceVariationIds(),i=me.getForceAudienceIds(),r={individual:t};H.log("Deciding Campaigns/Experiments for Page",B.description(e));var a=A.map(r.individual,O.description).join(", ");H.log("Campaigns/Experiments not in Groups (by Campaign id):",a);var o=[],s=A.map(r.individual,A.partial(f,n,i,e)),u=o.concat(s);return w.all(u).then((function(t){var n=A.filter(t,(function(e){return!!e}));return H.log("All Campaigns/Experiments for Page (by Campaign id)",B.description(e),"resolved:",A.map(n,O.description).join(", ")),n}))}function f(e,t,n,i){return new w(function(r,a){try{v(i,e,t,n,(function(a){p(i,e,t,n,a),r(i)}))}catch(e){H.error("Error getting decision for Campaign: "+O.description(i),e),a(e)}})}function p(e,t,n,i,r){var a=O.description(e);H.log("Activating Campaign",a,"on Page",B.description(i));var o=y(e,r,t,n),s=!(!t.length&&!n.length),u=T(e,o,s)||[],c=S(u,i);if(g(c,e,o,i),j.trackDecisionEvent(o,r),o.error)throw o.error;return U.isInCohort(o)?void h(c,e,o,i):void H.log("Not activating Campaign: "+O.description(e)+"; not in the cohort because:",o.reason)}function g(e,t,n,i){var r=O.description(t);H.log("Preparing actions",e,"for Campaign",r,"on Page",B.description(i)),A.forEach(e,x.prepareAction)}function h(e,t,n,i){var r=O.description(t);return H.log("Executing actions",e,"for Campaign",r,"on Page",B.description(i)),w.all(A.map(e,(function(e){return x.executePreparedAction(e).then(A.partial(R.emitActionAppliedEvent,e))}))).then((function(){H.log("All page actions for",n,"applied:",e),R.emitActionsForDecisionAppliedEvent(n,e)})).catch((function(e){H.warn("Error evaluating page actions for decision",n,"because:",e)}))}function v(e,t,n,i,r){if(t.length||n.length)return void r(l([],void 0,i));var a=O.relatedAudienceIds(e),o=A.reduce(a,(function(e,t){var n=fe.get(t);return n&&e.push(n),e}),[]);E(o,O.getActivationTimeout(e),(function(){var t=l(o,e,i);m(t,o,e),r(t)}))}function m(e,t,n){var i=A.map(e.audienceIds,fe.get.bind(fe)),r=A.filter(t,(function(t){return!A.includes(e.audienceIds,t.id)}));H.log("When deciding Campaign",O.description(n),"visitor is in audiences:",_(i),"and not in audiences:",_(r))}function _(e){var t=[];return A.each(e,(function(e){t.push(e.name,e)})),t}function E(e,t,n){var i={},r=le.getAllPlugins(K.PluginTypes.audienceMatchers);A.each(e,(function(e){var t=$.requiredAudienceFields(e,r);A.each(t,(function(e){i[e]=!0}))}));var a=A.reduce(i,(function(e,t,n){if(A.isUndefined(C.getAttribute(n))){var i=C.getPendingAttributeValue(n);A.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=X.firstToResolve(A.map(a,(function(t){return w.resolve(t).then((function(){var t=ce.getVisitorProfile(),n=A.map(e,(function(e){return $.isInAudience(t,e,r)}));if(A.some(n,A.isUndefined))throw new Error("Some audience is undefined")}))})));w.race([o,new w(function(e,n){setTimeout(n,t)})]).then((function(){H.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){H.log("Activating Campaign after timeout on Audiences",e),n()}))}function y(e,t,n,i){var r,a=O.description(e);return n.length?r=U.getDummyLayerDecision(e,n):(i.length&&(H.log("Applying force audienceIds:",i,"to Campaign",a),t=A.cloneDeep(t),t.audienceIds=i),r=U.decideLayer(e,t)),H.log("Recording decision for Campaign",a,t,"->",r),O.recordLayerDecision(e.id,t,r),r.variationId&&r.experimentId&&(C.updateVariationIdMap(e.id,r.experimentId,r.variationId),C.persistVariationId()),R.emitLayerDecided({layer:e,decisionTicket:t,decision:r}),r}function I(e){var t=se.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();D.dispatch(z.CLEAR_CLEANUP_FN,{lifecycle:e})}}function T(e,t,n){var i=O.description(e),r="NOT applying changes for Campaign";if(!n&&pe.isGlobalHoldback())return H.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return H.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return H.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(ge.getLayerActions(t.layerId)||[],ge.getExperimentActions(t.experimentId)||[],ge.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return H.log("Got Actions for Campaign:",i,a),a}function S(e,t){return A.filter(e,(function(e){return A.isUndefined(e.pageId)||e.pageId===t.id}))}var A=n(5),b=n(48),w=n(68).Promise,D=n(2),R=n(83),N=n(75),C=n(86),O=n(94),x=(n(95),n(96)),P=n(18),L=n(101),k=n(12).create,F=t.JSONParseError=k("JSONParseError"),V=t.ActivationCodeError=k("ActivationCodeError"),M=t.ProjectJSError=k("ProjectJSError"),U=n(102),G=n(108),B=n(109),j=n(114),z=n(10),H=n(16),q=n(87).LocalStorage,Y=n(93),K=n(17),W=n(76),$=n(107),X=n(120),Q=n(84),J=n(121),Z=n(73),ee=n(77),te=n(119),ne=n(98),ie=n(122),re=n(118),ae=n(19),oe=ae.get("stores/layer"),se=ae.get("stores/cleanup"),ue=ae.get("stores/session"),ce=ae.get("stores/visitor"),le=ae.get("stores/plugins"),de=ae.get("stores/layer_data"),fe=ae.get("stores/audience_data"),pe=ae.get("stores/global"),ge=ae.get("stores/action_data"),he=ae.get("stores/view_data"),ve=ae.get("stores/view"),me=ae.get("stores/directive"),_e=ae.get("stores/visitor_id"),Ee=ae.get("stores/pending_events"),ye=ae.get("stores/xdomain"),Ie=(ae.get("stores/group_data"),n(123)),Te=n(136),Se=n(137),Ae=1e3,be=1e3,we=t;t.initialize=function(e){if(Se.initialize(),W.on({filter:{type:"error"},handler:r}),D.dispatch(z.DATA_LOADED,{data:e.clientData}),H.log("Initialized with DATA:",e.clientData),a(),me.isDisabled()||me.shouldOptOut())return void H.log("Controller / Is disabled");var n=!1,o=ee.get(K.COOKIES.REDIRECT);if(o){var s=o.match(/^(\d+)\|(.*)/);if(s){H.debug("Found legacy redirect data:",o);var c=s[1],l=s[2];D.dispatch(z.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),n=!0}}var d=pe.getProjectJS();if(A.isFunction(d))try{L.apply(d)}catch(e){H.error("Error while executing projectJS: ",e),N.emitError(new M(e))}A.each(e.plugins||[],(function(e){try{e(G)}catch(e){N.emitInternalError(e)}})),A.each(pe.getPlugins()||[],(function(e){try{L.apply(e,[G])}catch(e){N.emitError(e)}})),n||re.load(),ce.observe(C.persistVisitorProfile),oe.observe(C.persistLayerStates),ue.observe(C.persistSessionState),Ee.observe(ie.persistPendingEvents),W.on({filter:{type:"lifecycle",name:"viewActivated"},handler:t.onViewActivated}),t.initializeApi();var f=ie.getPendingEvents();if(f&&(D.dispatch(z.LOAD_PENDING_EVENTS,{events:f}),ie.retryPendingEvents(f)),W.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),R.emitInitializedEvent(),!me.shouldActivate())return w.resolve();var p=[],g=u();if(ye.getCanonicalOrigins()){var h=te.makeTimeoutPromise(be),v=w.race([g,h]).catch((function(e){H.error("Failed to initialize xDomain storage: ",e)})).then(i);p.push(v)}else p.push(g),i();return w.all(p)},t.activate=function(){try{var e=[];H.log("Activated client"),A.forEach(ve.getActiveViewStates(),(function(e){B.deactivate(he.get(e.id))})),I(K.Lifecycle.preActivate),D.dispatch(z.ACTIVATE,{activationId:b.generate()}),B.registerViews(he.getAll()),C.setId(C.getIdFromCookies()),e.push(j.trackPostRedirectDecisionEvent()),D.dispatch(z.MERGE_VARIATION_ID_MAP,{variationIdMap:C.getVariationIdMap()}),C.persistVariationId(),I(K.Lifecycle.postVisitorProfileLoad),e.push(c(le.getAllPlugins(K.PluginTypes.visitorProfileProviders)).then((function(){H.log("Populated visitor profile")})));var t=l(),n=U.decideGlobal(t);H.log("Made global decision",t,"->",n),D.dispatch(z.RECORD_GLOBAL_DECISION,n);var i=j.trackClientActivation();return i?H.log("Tracked activation event",i):H.log("Not tracking activation event"),we.setUpViewActivation(),I(K.Lifecycle.postViewsActivated),I(K.Lifecycle.postActivate),R.emitActivatedEvent(),w.all(e).then((function(){W.emit({type:Q.TYPES.LIFECYCLE,name:"activateDeferredDone"}),H.log("All immediate effects of activation resolved")}),N.emitError)}catch(e){N.emitError(e)}},we.setUpViewActivation=function(){var e=he.getAll();A.each(e,(function(e){e.activationType?e.activationType===K.ViewActivationTypes.callback?(H.debug("Setting up conditional activation for Page",B.description(e)),we.activateViewOnCallback(e)):e.activationType===K.ViewActivationTypes.polling&&(H.debug("Setting up polling activation for Page",B.description(e)),J.pollFor(A.partial(L.apply,e.activationCode),null,A.partial(ne.isTimedOut,Date.now())).then((function(){B.activate(e)})).catch((function(t){H.warn("Failed to activate view ",e,t)}))):B.activate(e)}))},we.activateViewOnCallback=function(e){var t=function(t){var n=A.extend({},t,{pageName:e.apiName,type:"page"});Ie.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return ve.isViewActive(e.id)}});try{L.apply(e.activationCode,[t,n])}catch(t){var i=new V("("+t.toString()+") in activationCode for "+B.description(e));N.emitError(i,{originalError:t,userError:!0})}},t.onViewActivated=function(e){var t=e.data.view;try{if(!_e.getBucketingId())throw new Error("View activated with no visitorId set");var n,i=d(t).catch(N.emitError),r=function(){B.parseViewTags(t);var e=j.trackViewActivation(t);e?H.log("Tracked activation for Page",B.description(t),e):H.log("Not Tracking activation for Page",B.description(t))};return n=Z.isReady()?w.resolve(r()):J.pollFor(Z.isReady,Ae).then(r),w.all([i,n])}catch(e){N.emitError(e)}},t.initializeApi=function(){var e={get:Ie.get,push:Ie.push},t=window.optimizely;A.isArray(t)&&A.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.decideAndExecuteLayerASAP=f}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"];return r.extend({},e,{changeSet:r.map(e.changeSet,(function(e){return r.pick(e,t)}))})}var r=n(5),a=n(19),o=a.get("stores/audience_data"),s=n(76),u=n(84),c=n(85);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=c.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=c.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:u.TYPES.ACTION,name:"applied",data:{type:e.type,changes:i(e).changeSet,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId}};s.emit(t)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:{actions:r.map(t,i),decision:e}};s.emit(n)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t,n){var i=n(5);t.translateDecisionToCampaignDecision=function(e){return r(i.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return t.campaign=e.data.layer,t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),
t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}};var r=function(e,t){var n=i.omit(e,i.keys(t));return i.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){function i(e,t){function n(e,n){var i;t.attributionType&&(i=A.now()),I.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i,r=t.provides;if(!t.isSticky||y.isUndefined(e[r]))try{var a=T.evaluate(t.getter);y.isFunction(a)&&(a=a((function(){return e[r]}),(function(e){return n(r,e)}))),y.isUndefined(a)||(t.isAsync?(i=a.then((function(e){n(r,e)}),(function(e){O.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),I.dispatch(R.SET_VISITOR_ATTRIBUTE_PENDING,{key:r,pending:i})):n(r,a))}catch(e){O.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return i}}function r(e){var t=c(e),n=S.getItem(t);if(!n){var i=l(e);n=S.getItem(i),s(e,n)}return n}function a(e){var t=[];return y.each(e,(function(e){y.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function o(e){var t=V.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return y.each(S.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:S.getItem(e)};n.push(a)}})),n}function s(e,t){var n=c(e),i=l(e);S.setItem(n,t),S.removeItem(i)}function u(e,t){try{var i=c(e);try{S.removeItem(l(e)),S.setItem(i,t)}catch(e){throw O.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(93).setItem(i,t)}catch(e){O.warn("Unable to persist visitor data:",e.message)}}function c(e){var n=V.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function l(e){var t=V.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function d(e,t){if(p(e,c(x.EVENT_QUEUE)))I.dispatch(R.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:C.deserialize(t)});else if(p(e,c(x.EVENTS)))I.dispatch(R.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:C.deserialize(t)});else if(p(e,c(x.LAYER_STATES)))I.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:t,merge:!0});else if(p(e,c(x.VARIATION_MAP)))I.dispatch(R.MERGE_VARIATION_ID_MAP,{variationIdMap:t});else if(p(e,c(x.VISITOR_PROFILE))){var n=["custom"],i=t;y.each(n,(function(e){var t=k.getPlugin(w.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=f(i,e,t.attributionType);if(!y.isEmpty(n)){var r=[];y.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:i,value:t,type:e,metadata:a};r.push(o)})),I.dispatch(R.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else O.debug("Attribute type",e,"not used by any audiences")}))}}function f(e,t,n){var i=M.getAttribute(t),r=M.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(y.isEmpty(i))return{data:a,metadata:o};var s={};return y.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===w.AttributionTypes.FIRST_TOUCH&&i>=a||n===w.AttributionTypes.LAST_TOUCH&&a>=i||y.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function p(e,t){return e.indexOf(t)>0}function g(){var e=M.getVisitorProfile(),t=M.getVisitorProfileMetadata(),n=k.getAllPlugins(w.PluginTypes.visitorProfileProviders);if(n){var i=y.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=y.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function h(e,t){N.initializeStore(e,t)}function v(e){I.dispatch(R.LOAD_PERSISTED_LAYER_STATES,{layerStates:y.filter(e,(function(e){return!!e.decision}))})}function m(e){e=y.extend({lastSessionTimestamp:0,sessionId:null},e),I.dispatch(R.LOAD_SESSION_STATE,e)}function _(){return"oeu"+A.now()+"r"+Math.random()}function E(e){var t,n,i=k.getAllPlugins(w.PluginTypes.visitorProfileProviders),r=y.filter(i,(function(e){return y.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=y.reduce(t,(function(e,t,n){var i=t,a=y.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),I.dispatch(R.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}var y=n(5),I=n(2),T=n(19),S=n(87).LocalStorage,A=n(8),b=n(77),w=n(17),D=n(68).Promise,R=n(10),N=n(89),C=n(90),O=n(16),x=n(17).VisitorStorageKeys,P=T.get("stores/global"),L=T.get("stores/layer"),k=T.get("stores/plugins"),F=T.get("stores/session"),V=T.get("stores/visitor_id"),M=T.get("stores/visitor"),U=T.get("stores/provider_status");t.getIdFromCookies=function(){var e,t=b.get(w.COOKIES.VISITOR_ID);return t||(t=_()),{randomId:t,UUID:e}},t.setId=function(e){var n=V.getBucketingId();if(I.dispatch(R.SET_VISITOR_ID,e),V.getBucketingId()!==n){t.loadData();try{t.persistVisitorId(e)}catch(e){if(O.error("Visitor / Unable to persist visitorId, disabling tracking"),I.dispatch(R.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof b.MismatchError)throw O.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}}t.refreshSession()},t.getVariationIdMap=function(){return r(x.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){I.dispatch(R.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationId=function(){var e=V.getVariationIdMap();u(x.VARIATION_MAP,e)},t.persistTrackerOptimizelyData=function(e){u(x.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){I.dispatch(R.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=y.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=y.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=y.partial(i,t),r=y(e).filter({isAsync:!0}).map(n).filter().value();return y.forEach(y.filter(e,(function(e){return!e.isAsync})),n),r.length>0?D.all(r):D.resolve()},t.loadData=function(){h(r(x.EVENTS)||[],r(x.EVENT_QUEUE)||[]);var e=o(x.LAYER_STATES);v(a(e)),m(r(x.SESSION_STATE)||{}),E(r(x.VISITOR_PROFILE)||{}),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){u(x.EVENTS,e)},t.persistBehaviorEventQueue=function(e){u(x.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=L.getLayerStates(t.getNamespace());e=y.map(e,(function(e){return y.omit(e,"namespace")})),u(x.LAYER_STATES,e)},t.persistSessionState=function(){u(x.SESSION_STATE,F.getState())},t.persistVisitorProfile=function(){u(x.VISITOR_PROFILE,g())},t.getUserIdFromKey=function(e,n){var i;return y.includes(e,n)&&y.includes(e,"_")&&y.includes(e,"$$")&&y.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.persistVisitorId=function(e){y.isUndefined(e.UUID)?e.randomId&&b.set(w.COOKIES.VISITOR_ID,e.randomId):null===e.UUID?b.remove(w.COOKIES.VISITOR_UUID):b.set(w.COOKIES.VISITOR_UUID,e.UUID)},t.getAttribute=function(e){return M.getAttribute(e)},t.getPendingAttributeValue=function(e){return U.getPendingAttributeValue(e)},t.loadForeignData=function(){y.each(S.keys(),(function(e){var t=S.getItem(e);t&&d(e,t)}))},t.getNamespace=function(){return P.getNamespace()},t.removeLegacySessionStateCookies=function(){var e=b.getAll();y.forEach(y.keys(e),(function(e){0===e.indexOf(w.COOKIES.SESSION_STATE+"$$")&&b.remove(e)}))}}),(function(e,t,n){var i,r="optimizely_data",a=n(88),o=n(9),s=n(75),u=n(12).create,c=t.Error=u("StorageError"),l=o.getGlobal("localStorage");l?i=a.create(l,r):(s.emitError(new c("Failed to initialize localStorage")),i=a.mockStorage),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.st=e,this.ut=t}var r=n(5),a=n(16),o=n(18),s="$$";i.prototype.ct=function(e){return[this.ut,e].join(s)},i.prototype.dt=function(e){return e.replace(this.ut+s,"")},i.prototype.setItem=function(e,t){try{this.st.setItem(this.ct(e),o.stringify(t))}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.st.removeItem(this.ct(e))},i.prototype.getItem=function(e){try{return o.parse(this.st.getItem(this.ct(e)))}catch(e){}return null},i.prototype.keys=function(){var e=r.keys(this.st);return r.map(e,this.dt.bind(this))},i.prototype.allKeys=function(){return r.keys(this.st)},i.prototype.allValues=function(){return r.values(this.st)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){var i=n(90);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){_.dispatch(y.SET_VISITOR_EVENTS,e)}function r(e){_.dispatch(y.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){_.dispatch(y.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){_.dispatch(y.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){_.dispatch(y.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){_.dispatch(y.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return!0}function l(){return C.getEvents()}function d(){return O.getBaseMap()}function f(){return O.getEventQueue()}function p(){return O.getLastEvent()}function g(){return O.getCleared()}function h(){return O.getInitialized()}function v(){return i(l().concat(f())),a([]),l().length>P&&(i(l().slice(-P)),!0)}var m=n(5),_=n(2),E=n(16),y=n(10),I=n(91),T=n(86),S=n(8),A=t,b=n(56).EventBase,w=n(56).Event,D=n(57),R=n(92),N=n(19),C=N.get("stores/visitor_events"),O=N.get("stores/visitor_events_manager"),x={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},P=1e3;t.initialize=function(e,t){if(!c())return void A.ft();if(!h()){A.pt(e,t);var n=l();n.length>0&&o(n[n.length-1]);var i=f();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){if(!c())return void A.ft();E.debug("Behavior store: adding event",e);var t=A.ht(e);o(t),a(f().concat(t)),A.vt(f())},t.getEvents=function(){return c()?(f().length>0&&(v()&&R.sessionize(l()),A.mt(l()),A.vt(f())),l()):(A.ft(),[])},A.pt=function(e,t){A._t(e,t)&&(A.mt(l()),A.vt(f())),R.sessionize(l())},A._t=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return x.EVENTBASE in r?(i(A.Et(e)),a(A.Et(t))):(n=!0,i(A.yt(e)),a(A.yt(t))),f().length>0&&(v(),n=!0),i(A._updateBaseMapAndMaybeDedupe(l())),A._migrateEventBasesAndUpdateStore()&&(n=!0),n},A.yt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=A.It(i);t[n]=new w(r,i[D.FIELDS.TIME])}return t},A._migrateEventBasesAndUpdateStore=function(){var e=!1,t=A.Tt();return R.applyMigrations(t)&&(e=!0,r({}),i(A._updateBaseMapAndMaybeDedupe(l())),a(A._updateBaseMapAndMaybeDedupe(f()))),e},A.St=function(){return S.now()},A.ht=function(e){var t,n=e.name,i=e.type||"default",r=e.category||I.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new b(n,i,r,a,t);o=A.At(o);var s=A.St(),u=new w(o,s,-1);return R.updateSessionId(p(),u),u},A._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=A.At(e[t].eventBase);return e},A.mt=function(e){var t=A.bt(e);T.persistBehaviorEvents(t)},A.vt=function(e){var t=A.bt(e);T.persistBehaviorEventQueue(t)},A.ft=function(){g()||(i([]),a([]),A.mt(l()),A.vt(f()),r({}),o(null),s(!0))},A.At=function(e){var t=e.hash(),n=d(),i=n[t];if(m.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},A.Tt=function(){var e=[],t=d();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},A.bt=function(e){for(var t=function(e){var t={};t[D.FIELDS.NAME]=e.getValueOrDefault([D.FIELDS.NAME]),t[D.FIELDS.TYPE]=e.getValueOrDefault([D.FIELDS.TYPE]);var n=e.getValueOrDefault([D.FIELDS.CATEGORY]);m.isUndefined(n)||(t[D.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([D.FIELDS.REVENUE]);m.isUndefined(i)||(t[D.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([D.FIELDS.OPTIONS]);return m.isUndefined(r)||(t[D.FIELDS.OPTIONS]=r),t},n=x,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[D.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[D.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},A.It=function(e,t){var n=new b(e[D.FIELDS.NAME],e[D.FIELDS.TYPE],e[D.FIELDS.CATEGORY],e[D.FIELDS.OPTIONS],e[D.FIELDS.REVENUE]);return m.isUndefined(t)||n.setHash(t),n},A.Et=function(e){for(var t=x,n=[],i=0;i<e.length;i++)for(var r=e[i],a=A.It(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new w(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return A.Et(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(R.sessionSortPredicate),R.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<u}function r(e,t){var n;n=i(e,t)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):t.getValueOrDefault([s.FIELDS.TIME]),t.setFieldValue(s.FIELDS.SESSION_ID,n)}var a=n(56).Event,o=n(56).EventBase,s=n(57),u=18e5;t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_ID]),u=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?u-36e5:n,i="number"!=typeof i?n:i,e=new a(new o("",""),n,i),r(e,t)},t.sessionize=function(e){var t=e.length;if(0!==t){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var n=1;n<t;n++)r(e[n-1],e[n])}},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){function i(e){var t;if(!o.find(E.getFrames(),{origin:e.origin}))return void _.debug("XDomain","No frame found for origin: "+e.origin);try{t=v.parse(e.data)}catch(t){return void _.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)u.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0}),g.emitInternalError(new y("Xdomain Error: "+t.response.toString()));else if("SYNC"===t.type)o.each(E.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=E.getMessageById(t.id);if(!n){if(_.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=E.getNextMessageId();t.id>=i?g.emitInternalError(new y("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?g.emitInternalError(new y("Message ID is < 0: "+t.id)):g.emitInternalError(new y("No stored message found for message ID: "+t.id))}else g.emitInternalError(new y("Message ID is not a number: "+t.id.toString()));return}n.resolver(t.response),u.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=E.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:E.getNextMessageId()}),resolver:n};t?E.isDisabled()||a(i,t):u.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;u.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(v.stringify(n),t.origin)}var o=n(5),s=n(68).Promise,u=n(2),c=n(10),l=n(19),d=n(73),f=n(9),p=n(8),g=n(75),h=n(86),v=n(18),m=n(12).create,_=n(16),E=l.get("stores/xdomain"),y=t.Error=m("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:v.stringify(t)},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){u.dispatch(c.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=d.createElement("iframe");i.src=e+t,d.appendToHead(i),i.onload=function(){var r={id:E.getNextFrameId(),target:i.contentWindow,origin:e,path:t};u.dispatch(c.XDOMAIN_ADD_FRAME,r),n(r)}})},t.loadCanonicalOrigins=function(e){u.dispatch(c.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=h.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),_.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){return f.addEventListener("message",i),t.loadIframe(e,n).then((function(e){u.dispatch(c.XDOMAIN_SET_DEFAULT_FRAME,e),E.isDisabled()||o.each(E.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(5),r=n(19),a=n(2),o=n(8),s=n(10),u=r.get("stores/global"),c=r.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return a.dispatch(s.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:o.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(5);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(e,t,n){function i(e,t){var n={id:e.id,changeApplier:E.create(e,t)};o.dispatch(s.ADD_PREPARED_CHANGE,n)}function r(e,t,n){if(a.includes(n,t))return void u.error("Change with id "+t+" has circular dependencies: "+n.concat(t));if(!e[t]){var o=h.getChange(t);if(!o){var s="Change with id "+t+" is absent";return n.length&&(s+=" but listed as a dependency for "+n[n.length-1]),void u.warn(s)}e[t]=new c(function(s){var l=a.map(o.dependencies||[],(function(i){return r(e,i,n.concat([t]))}));if(o.src){var g="change_"+o.src,m=f.makeAsyncRequest(g,(function(){return p.addScriptAsync("https://cdn.optimizely.com/public/3013110282/data"+o.src,(function(){f.resolveRequest(g)}))})).then((function(){o=h.getChange(o.id),i(o,d.now())}));l.push(m)}c.all(l).then((function(){u.debug("Action / Applying change:",o);var e=d.now(),n=v.getPreparedChange(t);return n.changeApplier.apply().then((function(t){return u.debug("Action / Applied change for the first time in "+(d.now()-e)+"ms:",o),t})).then(s)})).catch((function(e){u.error("Action / Failed to apply change:",o,e),s()}))})}return e[t]}var a=n(5),o=n(2),s=n(10),u=n(16),c=n(68).Promise,l=n(19),d=n(8),f=n(97),p=n(80),d=n(8),g=l.get("stores/global"),h=l.get("stores/change_data"),v=l.get("stores/prepared_change"),m=l.get("stores/session"),_=n(98),E=n(100);_.initialize(),t.prepareAction=function(e){u.debug("Action / Preparing:",e),o.dispatch(s.ACTION_EXECUTED,{sessionId:m.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:d.now(),activationId:g.getActivationId()});var t=d.now();a.forEach(e.changeSet,(function(n){var r=a.extend({},n,{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId});r.src?o.dispatch(s.ADD_CHANGE,r):(o.dispatch(s.ADD_CHANGE,r),i(h.getChange(r.id),t))}))},t.executePreparedAction=function(e){u.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(e){return r(t,e.id,[])}));return c.all(n).then((function(){u.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(68).Promise,r=n(2),a=n(10),o=n(19),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new i(function(e,t){o=e,u=t});return r.dispatch(a.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(a.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(a.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(99),a=n(19).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){var i=n(69).Promise,r=n(8),a=n(19),o=a.get("stores/plugins"),s=n(17),u=n(16);t.create=function(e,t){var n={identifier:e.id,startTime:t||r.now()};try{var a=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!a)throw new Error("Unrecognized change type "+e.type);return new a(e,n)}catch(e){u.error("Change applier was never properly constructed:",e);var c={apply:function(){return i.reject(e)}};return c}}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(13),Logger=__webpack_require__(16),di=__webpack_require__(19),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){function i(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function r(e){var t=v.getPlugin(c.PluginTypes.deciders,e);if(o.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function a(e,t){var n=v.getAllPlugins(c.PluginTypes.audienceMatchers);return o.reduce(t,(function(t,i){return f.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var o=n(5),s=n(103),u=n(104),c=n(17),l=n(16),d=n(75),f=n(107),p=n(105).DecisionError,g=n(94),h=(n(95),n(19)),v=h.get("stores/plugins"),m=h.get("stores/global"),_=h.get("stores/layer_data"),E="single_experiment";t.createTicket=function(e){var t;if(e.layer){var n=!1,i=r(e.layer.policy);o.isFunction(i.includePageIdInDecisionTicket)?n=i.includePageIdInDecisionTicket(e.layer):i.includePageIdInDecisionTicket===!0&&(n=!0),n&&(t=e.pageId)}var s={bucketingId:e.bucketingId,audienceIds:a(e.visitorProfile,e.audiences),globalHoldback:e.globalHoldback,preferredVariationMap:e.preferredVariationMap,activationId:m.getActivationId(),pageId:t};return s},t.decideGlobal=function(e){var t=s.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideLayer=function(e,t){l.debug("Deciding: ",e,t);var n,i,a=r(e.policy),c={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:s.isHoldback(t.bucketingId,e)};if(o.isEmpty(e.experiments))throw new p("No experiments in layer.");try{if(a.decideLayer){l.debug("Decision / Using decider's custom decideLayer.");var f=a.decideLayer(e,t);n=f.experiment,i=f.variation}else l.debug("Decision / Using default decideLayer behavior."),n=a.selectExperiment(e,t.audienceIds,t.bucketingId),i=u.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof p?c.reason=e.message:c.error=e}return c.experimentId=n?n.id:null,c.variationId=i?i.id:null,c.error&&(c.error.name="DecisionEngineError",d.emitError(c.error)),c},t.getDummyLayerDecision=function(e,t){var n,r=i(e,t);return r?(l.log("Decision / Applying force variation:",r.variationId,"to Campaign",g.description(e)),n={layerId:e.id,variationId:r.variationId,experimentId:r.experimentId,isLayerHoldback:!1,reason:"force"}):(l.log("No variation matches ids:",t,"in Campaign",g.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=_.get(e.layerId);return!(t.policy===E&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(58),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(5),r=n(103),a=n(105).DecisionError,o=n(106),s=n(16),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||o.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,o,c){if(!e.variations||0===e.variations.length)throw new a('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new a('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=o;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new a('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new a("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+i+'" with args',c.stringify(r));try{n=d[i](r,t),u.debug("Condition / Result:",n)}finally{u.groupEnd()}return n}return n=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",n),n}var s=n(5),u=n(16),c=n(18),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){function i(e,t){var n={};return o.each(e,(function(e){if(o.isArray(e))o.extend(n,i(e,t));else if(o.isObject(e)){var r=t[e.type];r&&o.each(r.fieldsNeeded,(function(e){n[e]=!0}))}})),n}function r(e,t){return function(n){var i=n.type,r=t[i];if(!r)throw new Error("Audience / No matcher found for type="+i);if(r.fieldsNeeded)for(var a,s,c=0;c<r.fieldsNeeded.length;c++)if(a=r.fieldsNeeded[c],s=e[a],o.isUndefined(s))return void u.debug("Audience / Required field",a,"for type",i,"has no value");u.debug("Matching condition:",n,"to values:",e);var l=r.match(e,n);if(!o.isUndefined(l))return!!l}}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(5),s=n(106),u=n(16);t.isInAudience=function(e,t,n){var i=r(e,n);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,i)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFields=function(e,t){return o.keys(i(e.conditions,t))}}),(function(e,t,n){var i=n(5),r=n(76),a=n(2),o=n(19),s=n(10),u=n(17);t.registerApiModule=function(e,t){i.isArray(t)&&(t=o.evaluate(t)),a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=o.get(e);n||o.register(e,t)},t.registerVisitorProfileProvider=function(e){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?o.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var a;a=i.isString(e.matcher)?o.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return a(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=o.evaluate(e));var t=r.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=r.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){a.dispatch(s.REGISTER_PLUGIN,{type:u.PluginTypes.eventImplementations,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==s.CUSTOM){var n=h.getPlugin(o.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):l.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(5),a=n(19),o=n(17),s=n(110),u=n(2),c=n(8),l=n(16),d=n(10),f=n(106),p=n(83),g=n(111),h=a.get("stores/plugins"),v=a.get("stores/view"),m=a.get("stores/view_data"),_=a.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=g.getTagValue(t)}catch(e){e instanceof g.Error?l.warn("Page / Ignoring unparseable tag",t,e):l.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(h.getAllPlugins(o.PluginTypes.viewProviders),(function(t){e[t.provides]=a.evaluate(t.getter)})),e},t.registerViews=function(e){u.dispatch(d.REGISTER_VIEWS,{views:e})},t.activate=function(e,n){var r=v.getViewState(e.id);if(r.isActive)return void l.log("Not activating Page, already active ",t.description(e));
var a=t.createViewTicket();if(!t.hasValidStaticConditions(e,a))return void l.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions);t.setViewActiveState(e,!0),l.log("Activated Page",t.description(e)),t.parseViewTags(e),n&&t.setUserSuppliedViewTags(e.id,n),p.emitViewActivated({view:e,metadata:n});var o=_.getByPageId(e.id);i(o,!0)},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void l.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),l.log("Deactivated Page",t.description(e));var r=_.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){u.dispatch(d.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:c.now(),isActive:t})},t.setGlobalTags=function(e){u.dispatch(d.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){u.dispatch(d.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){u.dispatch(d.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=h.getAllPlugins(o.PluginTypes.viewMatchers);l.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),l.debug("Matching to current value:",t);var i=f.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return l.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(17).PluginTypes,r=n(19),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(112),t.Error=n(113).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(12).create;t.Error=i("TagError")}),(function(e,t,n){function i(e,t,n,i,r){var a=K.get(t.layerId),o=V.description(a),s=c(e,t,n),u=l(s,t.isLayerHoldback,i),d=$.isExpectingRedirect(),f=$.getLayerId();d&&f===a.id?(G.persist(s,r),b.log("Relaying decision for redirect Campaign",o,s),_(L.TrackLayerDecisionTimingFlags.preRedirectPolicy,[L.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],u),b.log("Called trackLayerDecision for redirect Campaign",o,u)):(_(L.TrackLayerDecisionTimingFlags.nonRedirectPolicy,[L.NonRedirectPolicies.TRACK_IMMEDIATELY],u),b.log("Called trackLayerDecision for non-redirect Campaign",o,u))}function r(e,t,n,i,r){var a=K.get(t.layerId),o=V.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),b.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:X.getVisitorProfile(),layerStates:Y.getLayerStates()}),i=J.getByApiName(e),r=i&&i.pageId?g(i):H.getActiveViewTags(),a=y.extend({},r,t),o=i&&i.category?i.category:k.OTHER;return y.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:X.getVisitorProfile(),layerStates:Y.getLayerStates()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:H.getActiveViewStates(),visitorProfile:X.getVisitorProfile(),layerStates:Y.getLayerStates()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:k.OTHER,r=g(e);return y.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:X.getVisitorProfile(),layerStates:Y.getLayerStates()});return y.extend(e,{eventTags:{}})}function c(e,t,n){var i=K.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=y.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=U.getReferrer()||C.getReferrer(),l={sessionId:z.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decisionId:e,activationId:j.getActivationId(),namespace:j.getNamespace(),timestamp:R.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:j.getAccountId(),projectId:j.getProjectId(),revision:String(j.getRevision()),clientVersion:N.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,clientEngine:N.ENGINE,anonymizeIP:y.isNull(j.getAnonymizeIP())?void 0:j.getAnonymizeIP(),userFeatures:h(n)});return i}function d(e,t,n,i){return{decisionId:e,timestamp:R.now(),revision:j.getRevision(),clientEngine:N.ENGINE,clientVersion:N.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:z.getSessionId(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decision:t,decisionTicket:n,userFeatures:h(i)}}function f(e){var t={eventId:A.generate(),timestamp:R.now(),revision:j.getRevision(),clientEngine:N.ENGINE,clientVersion:N.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:z.getSessionId(),isGlobalHoldback:j.isGlobalHoldback(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return t}function p(e){var t=H.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function g(e){var t={};return e.pageId?p(e.pageId):t}function h(e){var t=q.getAllPlugins(P.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){b.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=m(e,n);b.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),b.debug("Calling each with data: ",t),y.each(i,(function(e){try{b.debug("Calling plugin: "+e.name),e.hookFn(t),b.debug("Called plugin: "+e.name)}catch(e){b.error(e)}}))}function m(e,t){var n=[];return y.each(q.getAllPlugins(P.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){b.error(e)}})),n}function _(e,t,n){var i=E(e,t);b.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),b.debug("Calling each with data: ",n),y.each(i,(function(e){try{b.debug("Calling plugin: "+e.name),e.hookFn(n),b.debug("Called plugin: "+e.name)}catch(e){b.error(e)}}))}function E(e,t){var n=[];return y.each(q.getAllPlugins(P.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(5),I=n(2),T=n(10),S=n(75),A=n(48),b=n(16),w=n(19),D=n(89),R=n(8),N=n(115),C=n(73),O=n(76),x=n(84),P=n(17),L=n(116),k=n(91),F=n(110),V=n(94),M=n(68).Promise,U=n(117),G=n(118),B=n(119),j=w.get("stores/global"),z=w.get("stores/session"),H=w.get("stores/view"),q=w.get("stores/plugins"),Y=w.get("stores/layer"),K=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),$=w.get("stores/pending_redirect"),X=w.get("stores/visitor"),Q=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee=null,te=!0,ne=1e3;t.trackClientActivation=function(){if(Q.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:F.CUSTOM,category:n.eventCategory,tags:y.omit(n.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:F.CUSTOM,tags:y.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return D.addEvent(r),v("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=K.get(e.layerId),a=V.description(n);if(!Q.shouldSendTrackingData())return void b.log("Analytics / Not tracking decision for Campaign",a);var o=A.generate();I.dispatch(T.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:o});var s=X.getVisitorProfile();ee?(i(o,e,t,s,ee),r(o,e,t,s,!0)):r(o,e,t,s,!1)},t.trackPostRedirectDecisionEvent=function(){if(!Q.shouldSendTrackingData())return M.resolve();if(W.hasTracked())return M.resolve();var e=W.get();if(!e)return M.resolve();var t=X.getVisitorProfile(),n=l(e,!1,t);if(_(L.TrackLayerDecisionTimingFlags.postRedirectPolicy,[L.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var i=new M(function(e,t){var n=O.on({filter:{type:x.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),O.off(n)}})}),r=B.makeTimeoutPromise(ne);return M.race([i,r]).then((function(){b.log("Calling trackers after successful sync")}),(function(e){b.warn("Calling trackers after failed sync:",e)})).then((function(){t=X.getVisitorProfile(),n=l(e,!1,t),_(L.TrackLayerDecisionTimingFlags.postRedirectPolicy,[L.PostRedirectPolicies.TRACK_AFTER_SYNC],n),I.dispatch(T.REGISTER_TRACKED_REDIRECT_DATA)})).catch((function(e){b.error("Error when calling trackers after sync:",e)}))}return _(L.TrackLayerDecisionTimingFlags.postRedirectPolicy,[L.PostRedirectPolicies.TRACK_AFTER_SYNC],n),I.dispatch(T.REGISTER_TRACKED_REDIRECT_DATA),M.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return D.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e){var t=H.getViewState(e.id);if(!t.isActive)return void b.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:F.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:F.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData()?(D.addEvent(i),I.dispatch(T.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t,n){t.VERSION="0.64.0",t.ENGINE="js"}),(function(e,t,n){var i=n(11);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(5),r=n(19),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){function i(){var e=f.get(g.COOKIES.REDIRECT,!1);if(e){d.log("Relay / Found redirect cookie:",e);var t=r(e),n=f.get(g.COOKIES.VISITOR_ID);t.visitorId=u.isString(n)?n:null;return t}}function r(e){var t={},n=e.split("&");return u.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void d.warn("Relay / Skipping invalid segment:",e);var i=f.safeDecodeURIComponent(n[0]),r=y[i];if(!r&&(r=u.find(_,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+m)})),!r))return void d.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+m.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||u.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||u.identity)(a),t[r.name]=a}catch(t){return d.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function a(e,t){var n=null;if(e){var i=v.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&u.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){d.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function o(e,t){var n=null,i=v.getPlugin(g.PluginTypes.analyticsTrackers,t);if(i&&u.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){d.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function s(e){var t=e.pageId||void 0;c.dispatch(l.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorUUID||e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),c.dispatch(l.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),c.dispatch(l.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var u=n(5),c=n(2),l=n(10),d=n(16),f=n(77),p=n(75),g=n(17),h=(n(116),n(19)),v=h.get("stores/plugins"),m=".",_=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return u.map(e,encodeURIComponent).join(",")},encodeValueString:u.identity,decodeValueString:u.identity,valueFromValueString:function(e){return u.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"visitorUUID",relayName:"uuid",isNullable:!0},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:a,valueFromValueString:o,isNullable:!0}],E={},y={};u.forEach(_,(function(e){E[e.name]=e,y[e.relayName]=e})),t.persist=function(e,t){d.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=i()),e){var t=[];return u.forEach(_,(function(n){(u.isNull(e[n.name])||u.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void d.error("Relay / Observed redirect data with missing fields:",t):(c.dispatch(l.LOAD_REDIRECT_DATA,e),c.dispatch(l.ADD_CLEANUP_FN,{lifecycle:g.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){s(e)}}),e)}}}),(function(e,t,n){var i=n(68).Promise;t.makeTimeoutPromise=function(e){return new i(function(t,n){setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){var i=n(68).Promise,r=n(5);t.firstToResolve=function(e){return new i(function(t){r.each(e,(function(e){i.resolve(e).then(t).catch()}))})}}),(function(e,t,n){var i=n(5),r=n(68).Promise,a=100,o=50;t.pollFor=function(e,t,n){var s,u;return i.isFunction(n)?u=n:(s=n||a,u=function(){return s--,s<-1}),t=t||o,new r(function(n,i){!(function r(){var a;if(!u()){try{var o=e();if(o)return n(o)}catch(e){a=e}return setTimeout(r,t)}i(a||new Error("Poll timed out"))})()})}}),(function(e,t,n){var i=n(5),r=n(87).LocalStorage,a=n(16),o=n(67),s=n(17),u=n(75),c=n(19),l=c.get("stores/pending_events"),d=s.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=l.getEvents();r.setItem(d,e),n(93).setItem(d,e)}catch(e){a.warn("PendingEvents / Unable to set localStorage key, error was: ",e),u.emitInternalError(e)}},t.getPendingEvents=function(){return r.getItem(d)},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){o.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||a.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(5),r=n(16),a=n(124),o=n(19),s=o.get("stores/plugins"),u=n(17),c=[n(133),n(134),n(135)],l=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(c[s]&&(a=c[s][n]),t&&l.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o)}catch(e){r.error(e)}return!0},t.get=function(e){var t=a[e];return t?(i.isArray(t)&&(t=o.evaluate(t)),t):(t=s.getPlugin(u.PluginTypes.apiModules,e))?t:void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(a.policy===l&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var d,f;return(d=o.find(a.experiments,{id:u}))?(f=o.find(d.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],d=e.getLayerStates();s.policy===l&&(d=o.filter(d,(function(e){var n=t.get(e.layerId);return n&&n.policy===l})));var f=o.map(d,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=c.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(f,r):f;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(5),s=n(115),u=n(125),c=n(117),l="single_experiment";t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/global",function(e,t,n,i,r,a){var o={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:n.getCampaignsMap(),pages:i.getPagesMap(),experiments:n.getExperimentsMap(),variations:n.getVariationsMap(),projectId:a.getProjectId(),snippetId:a.getSnippetId(),accountId:a.getAccountId(),dcpServiceId:a.getDCPServiceId(),revision:a.getRevision(),clientVersion:s.VERSION};return o}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId(),UUID:e.getUUID()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,d,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,d,i,{includeOfferConsistency:!1,policy:l}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return d.isGlobalHoldback()},getActivationId:function(){return d.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=c.getExperimentAndVariation();return e&&(e.referrer=c.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:s.experiment,variation:s.variation};return r.layer.policy!==l&&o.extend(c,{campaign:s.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(126).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(132)}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(e.policy!==v||!r){var s=e.policy!==v&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];e.policy!==v&&(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var g=u.reduce(p,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),m=h*l.length,_=g+m;if(s&&(_+=f.length),_>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-_,y=d.length,I=[],T=d.length-1;T>=0;T--){var S=d[T],A=Math.min(S.length,Math.floor(E/y));E-=A,y--,I.unshift(S.substring(0,A))}var b=u.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),g=d.names,h=d.idStrings,m=u.reduce(h,(function(e,t){return e+t.length}),0);if(m+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=a-m-c-s.length,E={};E.variation=Math.min(g.variation.length,Math.floor(_/3)),_-=E.variation,E.experiment=Math.min(g.experiment.length,Math.floor(_/2)),_-=E.experiment,E.layer=_;var y={};u.each(g,(function(e,t){y[t]=e.substring(0,E[t])}));var I=[];return e.policy!==v&&I.push(y.layer+h.layer),I=I.concat([y.experiment+h.experiment,y.variation+h.variation,s]),I.join(l)}var u=n(5),c=n(19),l=":",d="everyone_else",f="holdback",p="treatment",g="",h=n(16),v="single_experiment";t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||g,experiment:t.name||g,variation:n.name||g};if(o&&(s=u.mapValues(s,i)),s.experiment===g&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=g),e===g)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(68).Promise,r=n(127).observeSelector,a=n(130).waitForElement,o=n(131).waitUntil,s=n(128).poll;t.create=function(){return{observeSelector:r,poll:s,Promise:i,waitForElement:a,waitUntil:o}}}),(function(e,t,n){function i(){if(t.shouldUseMutationObserver()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},n=d.getDocumentElement(),i=new MutationObserver(function(){this.disconnect(),l.each(l.keys(h),a),this.observe(n,e)});return function(t){var r=h[t];i.observe(n,e),r.cancelObservation=function(){delete h[t],l.isEmpty(h)&&i.disconnect()}}}return function(e){var t=p.poll(l.partial(a,e));h[e].cancelObservation=function(){t(),delete h[e]}}}function r(e){var t=h[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(h[e]){if(o(h[e]))return 0===h[e].matchedCount&&l.isFunction(h[e].options.onTimeout)&&h[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(h[e].selector);t.length&&(l.each(t,(function(t){t.wt&&t.wt[e]||h[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;h[e]&&h[e].callbackQueue.length;){var t=h[e].callbackQueue.shift();if(u(t,e),h[e].matchedCount=h[e].matchedCount+1,h[e].callback(t),h[e].options.once)return void r(e)}}function u(e,t){e.wt||(e.wt={}),e.wt[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(5),d=n(73),f=n(48).generate,p=n(128),g={once:!1,onTimeout:null,timeout:null},h={},v=function(e){(v=i())(e)};t.shouldUseMutationObserver=function(){return!1},t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=f();return n=l.merge({},g,n||{}),h[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},v(i),setTimeout(a.bind(null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){u[e]&&a.each(u[e].callbacks,(function(e){e.call(null)}))}function r(e,t){u[t]&&u[t].callbacks[e]&&(delete u[t].callbacks[e],a.some(u[t].callbacks)||(clearInterval(u[t].id),delete u[t]))}var a=n(5),o=n(48).generate,s=n(129).DEFAULT_INTERVAL,u={};t.poll=function(e,t){a.isNumber(t)||(t=s),u[t]||(u[t]={callbacks:{},id:setInterval(a.partial(i,t),t)});var n=o();return u[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(u,(function(e,t){clearInterval(e.id),delete u[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(68).Promise,r=n(127).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(68).Promise,r=n(128).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(76);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n.revenue))throw new Error("tracker","Revenue value",n.revenue,"not a number.");t=Number(n.revenue),delete n.revenue}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(5),o=n(134);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(5),r=n(10),a=n(17),o=n(123),s=n(124),u=n(114),c=n(97),l=n(74),d=n(76),f=n(2),p=n(16),g=n(108),h=n(109),v=n(86),m=n(83),_=n(93),E=n(18),y=n(8),I=n(19),T=I.get("stores/dimension_data"),S=I.get("stores/view_data"),A=I.get("stores/visitor_id"),b=I.get("stores/layer_data"),w=I.get("stores/directive"),D=86400,R=90;t.event=function(e){h.updateAllViewTags();var t=function(){var t=u.trackCustomEvent(e.eventName,e.tags);t?p.log("API / Tracking custom event:",e.eventName,e.tags):p.log("API / Not tracking custom event:",e.eventName)};A.getBucketingId()?t():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postActivate,cleanupFn:t})},
t.page=function(e){var t=S.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?h.activate(t,e.tags):(h.deactivate(t),p.log("API / Deactivated Page",h.description(t)))};A.getBucketingId()?i():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){h.setGlobalTags(e.tags)},t.user=function(e){i.each(e,(function(e,t){"attributes"===t&&(p.log("API / Setting visitor attributes:",e),i.each(e,(function(e,t){var n,i=t,o="custom",s=T.getById(t)||T.getByApiName(t);s&&(i=s.id,n=s.segmentId||s.id);var u=function(){f.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:i,value:{id:n,value:e},type:o,metadata:{lastModified:y.now()}}]})};A.getBucketingId()?u():f.dispatch(r.ADD_CLEANUP_FN,{lifecycle:a.Lifecycle.postVisitorProfileLoad,cleanupFn:u})})))}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;l.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<R&&(p.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",R,", setting to minimum."),t=R),p.log("API / Setting cookie age to",t,"days."),f.dispatch(r.SET_COOKIE_AGE,t*D)},t.cookieDomain=function(e){p.log("API / Setting cookie domain to",e.cookieDomain),f.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);p.log("API / Disabling tracking"),f.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else p.log("API / Disabling everything"),f.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),p.setLogMatcher(n),p.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(s[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');g.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;c.makeAsyncRequest(t),c.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0,d.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");d.off(e.token)},t.load=function(e){f.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");f.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=b.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=b.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);v.updateVariationIdMap(r,e.experimentId,a),A.getBucketingId()&&v.persistVariationId()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+E.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),_.loadCanonicalOrigins(e.canonicalOrigins)},t.activate=function(){w.shouldActivate()?m.emitActivateEvent():p.debug("Not activating.")},t.sendEvents=function(){m.emitSendEvents()},t.holdEvents=function(){m.emitHoldEvents()}}),(function(e,t){}),(function(e,t,n){var i=n(5),r=n(115),a=n(8),o=n(67),s=n(16),u=n(19),c=n(12).BaseError,l=u.get("stores/global"),d="https://errors.client.optimizely.com";t.handleError=function(e,t){var n=e.name||"Error",u=e.message,f=e.stack||null;e instanceof c&&(u instanceof Error?(u=u.message,f=e.message.stack):f=null);var p={timestamp:a.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:l.getAccountId(),projectId:l.getProjectId(),errorClass:n,message:u,stacktrace:f};t&&(p.metadata=i.reduce(t,(function(e,t,n){return i.isObject(t)||e.push({key:n,value:String(t)}),e}),[])),s.error("Logging error",p),o.request({url:d+"/log",method:"POST",data:p,contentType:"application/json"}).then((function(e){s.log("Error Monitor / Logged error with response: ",e)}),(function(e){s.error("Failed to log error, response was: ",e)}))}}),(function(e,t,n){function i(e){return d.isEmpty(e)?p.resolve():h.request({url:N,method:"POST",data:e}).catch((function(e){_.error("Failed to collect rum data :",e)}))}function r(){var e=y.getCurrentScript();if(e)return e.src}function a(){var e={id:D.getRumId(),v:"1.0",account:b.getAccountId(),project:b.getSnippetId()||b.getProjectId(),snippet:b.getSnippetId(),revision:b.getRevision(),clientVersion:"0.64.0",hasSlave:!1,wxhr:!0},t=w.getBucketingId();t&&(e.user=t);try{e.numBehaviorEvents=v.getEvents().length}catch(e){_.debug("Unable to get behavior events for RUM:",e)}d.extend(e,o(),c()),m.dispatch(S.SET_RUM_DATA,{data:e})}function o(){var e=E.getGlobal("performance");if(e){var t,n=D.getScriptSrc();try{if(n){_.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;_.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=d.find(a,(function(e){return r.test(e.name)}))}if(t)return d.mapValues(T.ResourceTimingAttributes,(function(e,n){return Math.round(t[n]||0)}))}catch(e){return}}}function s(){try{return!y.querySelector("body")}catch(e){return null}}function u(){try{E.getGlobal("requestAnimationFrame")((function(){var e=D.getRumData().timebase;m.dispatch(S.SET_RUM_DATA,{data:{render:g.now()-(e||0)}})}))}catch(e){return}}function c(){return R.getDurationsFor(d.values(T.RUMPerformanceTimingAttributes))}function l(){var e={numKeys:I.allKeys().length,sizeKeys:I.allKeys().toString().length,sizeValues:I.allValues().toString().length},t=E.getGlobal("performance"),n=t?t.timing:{},r=R.getMarks()||{},a={id:D.getRumId(),lsMetrics:e,navigationTimings:n,userTimings:r};i(a)}var d=n(5),f=n(48),p=n(68).Promise,g=n(8),h=n(67),v=n(89),m=n(2),_=n(16),E=n(9),y=n(73),I=n(87).LocalStorage,T=n(17),S=n(10),A=n(19),b=A.get("stores/global"),w=A.get("stores/visitor_id"),D=A.get("stores/rum"),R=A.get("stores/performance"),N="https://rum.optimizely.com/rum",C=3e3,O=.003;t.initialize=function(){var e=f.generate().replace(/-/g,"");if(m.dispatch(S.SET_RUM_DATA,{id:e,RumHost:N,inRumSample:Math.random()<O,src:r()}),D.getSampleRum()){var t={id:e,sync:s(),timebase:g.now(),sampleRate:O};m.dispatch(S.SET_RUM_DATA,{data:t}),u(),setTimeout((function(){a();var e=D.getRumData();return e=d.pickBy(e,(function(e){return!d.isUndefined(e)})),i(e)}),C),E.addEventListener("load",l)}}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){u.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),u.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(5),o=n(84),s=n(9),u=n(76),c=n(19),l=c.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=s.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){s.getGlobal(d)||s.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(140))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(142)),e.registerAudienceMatcher("behavior",n(144))}}),(function(e,t,n){var i=n(143);e.exports={provides:"events",isTransient:!0,getter:["stores/visitor_events",function(e){return i.getEvents(e)}]}}),(function(e,t,n){var i=n(5),r=n(90);t.getEvents=function(e){var t=r.getEvents(),n=[].concat.apply([],i.values(e.getForeignEvents())),a=[].concat.apply([],i.values(e.getForeignEventQueues()));return r.mergeAllEvents([t,n,a])}}),(function(e,t,n){var i=n(5),r=n(145),a=n(146),o=n(18);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=o.parse(t.value);return n=i.isUndefined(s.version)?[s]:r.buildFromSpecV0_1(s),i.every(n,(function(t){return a.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i.limit=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),c=s.groupField(r);return d.extend(i,{select:[{field:c}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return d.extend(i,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(d.isUndefined(e))throw new Error("rule is undefined");if(!d.isObject(e))throw new Error("rule is not an Object");"0.2"!==e.version&&t.push('version: not "0.2"'),e.filter&&(d.isArray(e.filter)?d.each(e.filter,(function(e,n){var i=s.validateFieldKeyPathV0_2(e.field,s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e.comparator,e.value);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e.sort&&(e.reduce&&e.reduce.aggregator&&"nth"!==e.reduce.aggregator&&t.push("sort: superfluous because we can apply aggregator "+f.stringify(e.reduce.aggregator)+" to unsorted items"),d.isArray(e.sort)?d.each(e.sort,(function(e,r){var a=s.validateFieldKeyPathV0_2(e.field,s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e.field&&"frequency"===e.field[0]?n.push(e):i.push(e);var u=o(e.direction);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e.pick&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e.pick){e.reduce&&"count"===e.reduce.aggregator&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e.pick.field);r&&t.push("pick: "+r)}if(e.reduce){var a=e.reduce.aggregator,u="aggregator "+(f.stringify(a)||String(a)),c=e.reduce.n,l="index "+(f.stringify(c)||String(c));d.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),d.includes(["sum","avg","max","min"],a)&&(e.pick||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!d.isNumber(c)||isNaN(c)||parseInt(c,10)!==c||c<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+u+")"),e.sort||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):d.isUndefined(c)||t.push("reduce: "+l+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(f.stringify(e)||String(e));if(!d.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u={FIELDS:n(57).FIELDS,FIELDS_V0_2:n(57).FIELDS_V0_2},c=n(146),l=n(16),d=n(5),f=n(18);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(e,t)]},s.groupField=function(e){return d.isString(e)&&(e=[e]),e=e||c.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),d.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return d.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:e[0]||+new Date(0)},{value:e[1]||+new Date}]}:(l.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",DEFAULT_BEHAVIOR:"default_behavior",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return d.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||d.includes(d.values(u.FIELDS),e)||(n=[u.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+f.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else l.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&d.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+f.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:d.map(e.filter||[],(function(e){return"age"===e.field[0]?s.relativeTimeComparison(e.comparator||"eq",e.value/s.MILLIS_IN_A_DAY):s.fieldComparison(e.comparator||"eq",s.convertFieldKeyPathFromSpecV0_2(e.field),e.value)}))}};if(e.reduce&&"count"===e.reduce.aggregator)return d.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e.sort&&(d.each(e.sort,(function(e){d.includes(["ascending","descending"],e.direction)&&(d.includes(["time","age"],e.field[0])&&i.push(e),"frequency"===e.field[0]&&n.push(e))})),i.length&&!n.length&&(t.orderBy=d.filter(d.map(i,(function(e){return"time"===e.field[0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e.direction?"ASC":"DESC"}:"age"===e.field[0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e.direction?"DESC":"ASC"}:void 0}))))),e.pick&&e.pick.field){var r=s.convertFieldKeyPathFromSpecV0_2(e.pick.field);if(e.reduce&&d.includes(["avg","max","min","sum"],e.reduce.aggregator))return d.extend(t,{aggregate:[{op:e.reduce.aggregator,args:[{field:r}]}],select:[{field:[c.generateAlias(e.reduce.aggregator,r)]}]});t=n.length?d.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0].direction?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):d.extend(t,{select:[{field:r}]})}if(e.reduce&&"nth"===e.reduce.aggregator){var o=e.reduce.n;if(d.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return d.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(f.stringify(e)||String(e));if(!d.isArray(e)||!d.every(e,d.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=d.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),d.includes(r,e[0])?n+" is not supported here":d.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(f.stringify(e)||String(e)),i="value "+(f.stringify(t)||String(t));if(!d.isString(e)&&!d.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!d.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!d.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(d.isArray(t)&&2===t.length&&d.isNumber(t[0])&&d.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(d.isString(t)||d.isArray(t)&&2===t.length&&d.isString(t[0])&&d.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!d.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(5),r=n(17),a=n(16),o=a.log.bind(a),s=n(8),u=n(60).getFieldValue,c=n(18),l=t;l.getValueOrDefault=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);var i=u(e,t);return"undefined"==typeof i&&(i=n),i},l.maybeTrimLowerCase=function(e){return"string"==typeof e?e.trim().toLowerCase():e},l.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},l.DEFAULT_FIELD=["*"],l.booleanOperators={eq:function(e){var t=i.map(e,l.maybeTrimLowerCase);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},in:function(e){var t=i.map(e[1]||[],l.maybeTrimLowerCase);return i.includes(t,l.maybeTrimLowerCase(e[0]))},between:function(e){return e[1]<=e[0]&&e[0]<=e[2]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},l.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},l.aggregateOperators={sum:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i},avg:function(e,t){if(0===t.length)return 0;for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i/t.length},max:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.NEGATIVE_INFINITY,r=0;r<t.length;r++)i=Math.max(i,l.getValueOrDefault(t[r],n,Number.NEGATIVE_INFINITY));return i},min:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.POSITIVE_INFINITY,r=0;r<t.length;r++)i=Math.min(i,l.getValueOrDefault(t[r],n,Number.POSITIVE_INFINITY));return i},count:function(e,t){return t.length}},l.functions={now:function(){return s.now()}},l.getScalarOperator=function(e){return e in l.booleanOperators?l.booleanOperators[e]:e in l.arithmeticOperators?l.arithmeticOperators[e]:null},l.operate=function(e,t){if(t.hasOwnProperty("value"))return t.value;if(t.hasOwnProperty("field"))return l.getValueOrDefault(e,t.field);if(t.hasOwnProperty("eval"))return t.eval in l.functions?l.functions[t.eval]():void a.error("Rules","Unknown function: "+t.eval);if(!t.op)return void a.error("Rules","No operator specified: "+c.stringify(t));var n=l.getScalarOperator(t.op);if(!n)return void a.error("Rules","Unknown operator: "+t.op);var r=i.partial(l.operate,e),o=t.args||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},l.groupBy=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e.field})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l.getValueOrDefault(o,f),g=f.join(".");u[g]=p,s.push(encodeURIComponent(g)+"="+encodeURIComponent(c.stringify(p)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:u,events:[]}),n[h].events.push(o)}return n},l.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")},l.aggregate=function(e,t){var n={};return i.each(t,(function(t,i){n[i]={};for(var r=0;r<e.length;r++){var o=e[r],s=o.op;if(s in l.aggregateOperators){var u=(o.args&&o.args[0]||{}).field||l.DEFAULT_FIELD,c=l.generateAlias(s,u),d=l.aggregateOperators[s]([u],t.events);n[i][c]=d}else a.error("Rules","Unknown aggregate operator "+s)}})),n},l.project=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},l.orderBy=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r.direction||"ASC",o="ASC"===a?1:-1,s=r.field,u=l.getValueOrDefault(t,s,0),c=l.getValueOrDefault(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)},l.rewrite=function(e){function t(e,o){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(o&&e.op in l.aggregateOperators){var s=(e.args&&e.args[0]||{}).field||l.DEFAULT_FIELD,u=l.generateAlias(e.op,s);return u in r||(n.push({op:e.op,args:e.args}),r[u]=!0),{field:[u]}}for(var c=[],d=e.args||[],f=0;f<d.length;f++)c[f]=t(d[f],o);return{op:e.op,args:c}}var n=[],r={},o={};e.hasOwnProperty(l.clause.WHERE)&&(o[l.clause.WHERE]=t(e[l.clause.WHERE],!1)),e.hasOwnProperty(l.clause.HAVING)&&(o[l.clause.HAVING]=t(e[l.clause.HAVING],!0)),(e.hasOwnProperty(l.clause.AGGREGATE)||n.length>0)&&(o[l.clause.AGGREGATE]=(e[l.clause.AGGREGATE]||[]).concat(n));for(var s=[l.clause.GROUP_BY,l.clause.ORDER_BY,l.clause.SELECT,l.clause.OFFSET,l.clause.LIMIT],u=0;u<s.length;u++)e.hasOwnProperty(s[u])&&(o[s[u]]=e[s[u]]);return e.hasOwnProperty(l.clause.FROM)&&(o[l.clause.FROM]=l.rewrite(e[l.clause.FROM])),o},l.verify=function(e,t){t=t||0;var n=[];if(e.hasOwnProperty(l.clause.WHERE)?e[l.clause.WHERE].op?e[l.clause.WHERE].op in l.booleanOperators||n.push("Non-boolean WHERE clause operator"):n.push("Missing WHERE clause operator"):n.push("Missing WHERE clause"),e.hasOwnProperty(l.clause.HAVING)&&(e[l.clause.HAVING].op?e[l.clause.HAVING].op in l.booleanOperators||n.push("Non-boolean HAVING clause operator"):n.push("Missing HAVING clause operator")),e.hasOwnProperty(l.clause.GROUP_BY)&&!e.hasOwnProperty(l.clause.AGGREGATE)&&n.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(l.clause.SELECT)){var r=e[l.clause.SELECT];if(i.isArray(r))for(var a=0;a<r.length;a++)r[a].op&&r[a].op in l.aggregateOperators&&n.push('In SELECT clause, aggregate operator "'+r[a].op+'" specified in selector at index '+a);else n.push("SELECT clause must be an array")}if(e.hasOwnProperty(l.clause.OFFSET)){var o=e[l.clause.OFFSET];(!i.isNumber(o)||Number(o)<0||Number(o)!==Math.floor(Number(o)))&&n.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(l.clause.LIMIT)){var s=e[l.clause.LIMIT];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&n.push("LIMIT must be a non-negative integer")}return t>0&&(n=i.map(n,(function(e){return"Sub-rule "+t+": "+e}))),e.hasOwnProperty(l.clause.FROM)&&(n=n.concat(l.verify(e[l.clause.FROM],t+1))),n},l.select=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return l.operate(t,e)}))}))},l.executeRecursively=function(e,t){var n=t;if(e.hasOwnProperty(l.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[l.clause.FROM]),n=l.executeRecursively(e[l.clause.FROM],n),a.debug("Results after FROM:",n)),a.debug("Evaluating WHERE clause:",e[l.clause.WHERE]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.WHERE])})),a.debug("Results after WHERE:",n),e.hasOwnProperty(l.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[l.clause.AGGREGATE]);var r=l.groupBy(e[l.clause.GROUP_BY],n),o=l.aggregate(e[l.clause.AGGREGATE],r);n=l.project(r,o),a.debug("Results after AGGREGATE:",n)}e.hasOwnProperty(l.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[l.clause.HAVING]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.HAVING])})),a.debug("Results after HAVING:",n)),e.hasOwnProperty(l.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[l.clause.ORDER_BY]),n=l.orderBy(e[l.clause.ORDER_BY],n),a.debug("Results after ORDER_BY:",n));var s=0;e.hasOwnProperty(l.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[l.clause.OFFSET]),s=Number(e[l.clause.OFFSET]));var u;return e.hasOwnProperty(l.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[l.clause.LIMIT]),u=s+Number(e[l.clause.LIMIT])),(s>0||!i.isUndefined(u))&&(n=n.slice(s,u),a.debug("Results after OFFSET/LIMIT:",n)),e.hasOwnProperty(l.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[l.clause.SELECT]),n=l.select(e[l.clause.SELECT],n),a.debug("Results after SELECT:",n)),n},l.execute=function(e,t){e=l.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",t);var n=l.verify(e);if(n.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+n.join("\n"));var i=l.executeRecursively(e,t);return a.debug("Rule result:",i),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),i},l.isSatisfied=function(e,t){try{return l.execute(e,t).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(148))}}),(function(e,t,n){var i=n(149),r=n(143),a=n(145),o=n(5),s=n(18);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity","stores/visitor_events","stores/visitor",function(e,t,n){var u=e.getProjectId(),c=o.filter(o.map(t.getCustomBehavioralAttributes(u),(function(e){try{return{id:e.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(s.parse(e.rule_json))}}catch(e){return}}))),l=r.getEvents(n);return i.evaluate(c,l)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*u.MILLIS_IN_A_DAY;n-=n%u.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(16),o={FIELDS:n(57).FIELDS},s=n(146),u=n(145);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var u=0;u<e.length;u++)o[e[u].id]=e[u].defaultValue;return o}var c=i(n),l=r(n,60);for(u=0;u<e.length;u++){var d=e[u],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=s.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(151)),e.registerAudienceMatcher("first_session",n(152))}}),(function(e,t,n){var i=n(5),r=n(143),a=n(60).getFieldValue,o=n(57);e.exports={provides:"first_session",shouldTrack:!0,getter:["stores/visitor_events",function(e){var t=r.getEvents(e);if(t&&t.length>0){var n=a(t[0],[o.FIELDS.SESSION_ID]);return i.every(t,(function(e){return e[o.FIELDS.SESSION_ID]===n}))}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(154))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(5),l=n(143),d=n(145),f=n(146);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(156)),e.registerVisitorProfileProvider(n(161)),e.registerVisitorProfileProvider(n(162)),e.registerAudienceMatcher("browser_version",n(163))}}),(function(e,t,n){var i=n(157);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(5),r=n(9),a=n(158),o=n(2),s=n(19),u=n(10),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=a.parseUA(r.getUserAgent()),
o.dispatch(u.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){var i=n(159),r=n(5);t.parseUA=function(e){var t=new i(e),n=t.getBrowser(),r=t.getOS(),c=t.getDevice(),l=s(c),d=u(r.name),f=o(c.type,l,d);return{browser:{id:a(n.name),version:n.version},platform:{id:d,version:r.version},device:{id:l,type:c.type||(f?"mobile":"desktop"),isMobile:f}}};var a=function(e){if(e=(e||"").toLowerCase(),e in c)return e;var t=function(t){return t.toLowerCase()===e};for(var n in c)if(r.some(c[n]||[],t))return n;return"unknown"},o=function(e,t,n){if(r.includes(["mobile","tablet"],e))return!0;if(t&&"unknown"!==t)for(var i in l)if(t===l[i])return!0;var a=["android","blackberry","ios","windows phone"];return!!r.includes(a,n)},s=function(e){return e.model in l?l[e.model]:e.type||"unknown"},u=function(e){return(e||"unknown").toLowerCase()},c={gc:["Chrome","chromium","silk","yandex","maxthon"],edge:["Edge"],ie:["Internet Explorer","iemobile"],ff:["Firefox","iceweasel"],opera:["Opera","opera mini","opera tablet"],safari:["Safari","mobile safari","webkit"],ucbrowser:["UC Browser"]},l={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.12",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",g="model",h="name",v="type",m="vendor",_="version",E="architecture",y="console",I="mobile",T="tablet",S="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(){for(var e,t,n,i,r,o,s,u=0,f=arguments;u<f.length&&!o;){var p=f[u],g=f[u+1];if(typeof e===l){e={};for(i in g)g.hasOwnProperty(i)&&(r=g[i],typeof r===d?e[r[0]]=a:e[r]=a)}for(t=n=0;t<p.length&&!o;)if(o=p[t++].exec(this.getUA()))for(i=0;i<g.length;i++)s=o[++n],r=g[i],typeof r===d&&r.length>0?2==r.length?typeof r[1]==c?e[r[0]]=r[1].call(this,s):e[r[0]]=r[1]:3==r.length?typeof r[1]!==c||r[1].exec&&r[1].test?e[r[0]]=s?s.replace(r[1],r[2]):a:e[r[0]]=s?r[1].call(this,s,r[2]):a:4==r.length&&(e[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):a):e[r]=s?s:a;u+=2}return e},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,_],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],_],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],_],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[h,_],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],_],[/(edge)\/((\d+)?[\w\.]+)/i],[h,_],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],_],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],_],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[_,[h,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],_],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[_,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[h,_],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],_],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],_],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],_],[/;fbav\/([\w\.]+);/i],[_,[h,"Facebook"]],[/fxios\/([\w\.-]+)/i],[_,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[_,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[_,h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[_,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,_],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],_],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[g,m,[v,T]],[/applecoremedia\/[\w\.]+ \((ipad)/],[g,[m,"Apple"],[v,T]],[/(apple\s{0,1}tv)/i],[[g,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,g,[v,T]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[g,[m,"Amazon"],[v,T]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[g,D.str,R.device.amazon.model],[m,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[g,m,[v,I]],[/\((ip[honed|\s\w*]+);/i],[g,[m,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,g,[v,I]],[/\(bb10;\s(\w+)/i],[g,[m,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[g,[m,"Asus"],[v,T]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[g,"Xperia Tablet"],[v,T]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[m,"Sony"],[g,"Xperia Phone"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,g,[v,y]],[/android.+;\s(shield)\sbuild/i],[g,[m,"Nvidia"],[v,y]],[/(playstation\s[34portablevi]+)/i],[g,[m,"Sony"],[v,y]],[/(sprint\s(\w+))/i],[[m,D.str,R.device.sprint.vendor],[g,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,g,[v,T]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[g,/_/g," "],[v,I]],[/(nexus\s9)/i],[g,[m,"HTC"],[v,T]],[/(nexus\s6p)/i],[g,[m,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,g,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[g,[m,"Microsoft"],[v,y]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[m,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[g,[m,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[g,[m,"Motorola"],[v,T]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,w.trim],[g,w.trim],[v,S]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[m,"Samsung"],[v,S]],[/\(dtv[\);].+(aquos)/i],[g,[m,"Sharp"],[v,S]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],g,[v,T]],[/smart-tv.+(samsung)/i],[m,[v,S],g],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],g,[v,I]],[/sie-(\w+)*/i],[g,[m,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],g,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[g,[m,"Acer"],[v,T]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],g,[v,T]],[/(lg) netcast\.tv/i],[m,g,[v,S]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[g,[m,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[g,[m,"Lenovo"],[v,T]],[/linux;.+((jolla));/i],[m,g,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[m,g,[v,A]],[/android.+;\s(glass)\s\d/i],[g,[m,"Google"],[v,A]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[g,/_/g," "],[m,"Xiaomi"],[v,I]],[/android.+a000(1)\s+build/i],[g,[m,"OnePlus"],[v,I]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],m,g]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[_,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,_],[/rv\:([\w\.]+).*(gecko)/i],[_,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,_],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[_,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[_,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],_],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,_],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],_],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],_],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,_],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],_],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],_],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,_],[/(haiku)\s(\w+)/i],[h,_],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[h,"iOS"],[_,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[_,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,_]]},C=function(e,t){if(!(this instanceof C))return new C(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(N,t):N;return this.getBrowser=function(){var e=D.rgx.apply(this,i.browser);return e.major=w.major(e.version),e},this.getCPU=function(){return D.rgx.apply(this,i.cpu)},this.getDevice=function(){return D.rgx.apply(this,i.device)},this.getEngine=function(){return D.rgx.apply(this,i.engine)},this.getOS=function(){return D.rgx.apply(this,i.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};C.VERSION=o,C.BROWSER={NAME:h,MAJOR:p,VERSION:_},C.CPU={ARCHITECTURE:E},C.DEVICE={MODEL:g,VENDOR:m,TYPE:v,CONSOLE:y,MOBILE:I,SMARTTV:S,TABLET:T,WEARABLE:A,EMBEDDED:b},C.ENGINE={NAME:h,VERSION:_},C.OS={NAME:h,VERSION:_},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=C),t.UAParser=C):"function"===c&&n(160)?(i=function(){return C}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r.UAParser=C;var O=r.jQuery||r.Zepto;if(typeof O!==l){var x=new C;O.ua=x.getResult(),O.ua.get=function(){return x.getUA()},O.ua.set=function(e){x.setUA(e);var t=x.getResult();for(var n in t)O.ua[n]=t[n]}}})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(164).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(5);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(166)),e.registerAudienceMatcher("campaign",n(167))}}),(function(e,t,n){var i=n(78);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(168);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){var i=n(5);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(170))}}),(function(e,t,n){var i=n(5),r=n(101);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(172)),e.registerAudienceMatcher("cookies",n(173))}}),(function(e,t,n){var i=n(77);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(168);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(175));var t=n(176);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(5),r=n(16),a=n(17),o=n(19),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:a.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var a=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,a={id:u.segmentId||u.id,value:t.value}):c||r.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=a,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(5),r=n(168);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(178)),e.registerVisitorProfileProvider(n(179)),e.registerAudienceMatcher("device",n(180))}}),(function(e,t,n){var i=n(157);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.id?e.id:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(182)),e.registerAudienceMatcher("location",n(184))}}),(function(e,t,n){var i=n(183);e.exports={provides:"location",shouldTrack:!0,isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}}),(function(e,t,n){function i(){a.addScriptAsync(s)}var r=n(97),a=n(80),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t){t.fieldsNeeded=["location"],t.match=function(e,t){if(!e.hasOwnProperty("location"))return!1;var n=e.location,i=t.value,r=i.split("|"),a=(r[0]||"").trim(),o=(r[1]||"").trim(),s=(r[2]||"").trim(),u=(r[3]||"").trim();switch(r.length){case 1:if(n.country===a)return!0;break;case 2:if(n.region===o&&n.country===a)return!0;break;case 3:if(n.city===s&&(n.region===o||""===o)&&n.country===a)return!0;break;case 4:if(n.continent===u)return!0}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(186)),e.registerAudienceMatcher("query",n(187))}}),(function(e,t,n){var i=n(78);e.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}}),(function(e,t,n){var i=n(5),r=n(168);t.fieldsNeeded=["queryParams"],t.match=function(e,t){var n=i.find(e.queryParams,(function(e){return e[0]===t.name}));return r.hasMatch(t.value,t.match,n?n[1]:null)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(189)),e.registerAudienceMatcher("referrer",n(190))}}),(function(e,t,n){var i=n(73),r=n(117);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(191);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("&"),i=[];return s.each(n,(function(e){0!==e.indexOf(c)&&i.push(e)})),t[1]=i.join("&"),t.join("?")}return e}var s=n(5);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(193)),e.registerAudienceMatcher("source_type",n(195))}}),(function(e,t,n){var i=n(73),r=n(194),a=n(78),o=n(117),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(a.getQueryParamValue("utm_source")||a.getQueryParamValue("gclid")||a.getQueryParamValue("otm_source"))return"campaign";for(var e=o.getReferrer()||i.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&r.getDomain(e)!==r.getDomain(a.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.getDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(168);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(197)),e.registerVisitorProfileProvider(n(198)),e.registerAudienceMatcher("time_and_day",n(199))}}),(function(e,t,n){var i=n(8);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(200);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(5),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){function i(e){return"kx"+e+"_segs_partner"}function r(e,t){try{return e.getGlobal("localStorage")&&e.getGlobal("localStorage").getItem(t)||e.getGlobal("localStorage").getItem(u)}catch(e){o.warn("Error reading from local storage for "+c,":",e)}}var a=n(5),o=n(16),s=n(9),u="kxsegs_partner",c="krux",l={provider:{getter:["stores/integration_settings",function(e){var t=e.get(c)&&e.get(c).krux_namespace,n=u;t&&(n=i(t));var o=r(s,n);if(a.isString(o))return{audiences:o.split(",")}}]},matcher:n(202),vendor:c};e.exports=function(e){e.registerAudiencePlugin(l)}}),(function(e,t,n){var i=n(5),r=n(168),a=n(60).getFieldValue;e.exports=function(e,t){var n=a(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(r.hasMatch,t.value,t.match)):r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){function i(e,t){if(t.sVariableReference)return t.sVariableReference||null;var n=t.sVariable?t.sVariable:f;return e.getGlobal(n)}function r(e){var t=["events","linkTrackEvents","linkTrackVars"];a.each(t,(function(t){a.isString(e[t])||(e[t]="")}))}var a=n(5),o=n(16),s=n(121),u=n(117),c=n(9),l=n(116),d=n(18),f="s",p=255,g="o",h="adobe_analytics",v="optimizelyLayerEvent",m="OptimizelyLayerDecision",_=n(125),E=n(19),y=E.get("stores/integration_settings"),I=["stores/layer_data",function(e){return function(t){var n=t.decision.layerId,i=t.decision.experimentId,r=t.decision.isLayerHoldback,s=t.decision.variationId,u=e.get(n),c=a.find(u.experiments,{id:i});if(c){var l=c.integrationSettings||u.integrationSettings||{},d=l[h];if(d){var f=a.find(c.variations,{id:s});if(f){var g=_.generateAnalyticsString(u,c,f,r,p,!0);if(g)return S(g,d).catch((function(e){o.warn("Tracker for",h,"failed:",e)}))}}}}}],T=function(e){var t=e.integrationSettings;if(t&&t[h]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},a=e.isLayerHoldback,s=_.generateAnalyticsString(n,i,r,a,p,!0);if(s)return S(s,t[h]).catch((function(e){o.warn("Tracker for",h,"failed:",e)}))}},S=function(e,t){var n,o=50,l=200;return s.pollFor((function(){var e=y.getReference(h);return n=a.extend({},e,t),i(c,n)}),l,o).then((function(t){var i,o,s=n.site_catalyst_eVar||null,c=n.site_catalyst_prop||null;s&&(i="eVar"+s),c&&(o="prop"+c),r(t);var l=t.linkTrackVars.split(",");i&&(e=e.substring(0,p),t[i]=e,l.indexOf(i)===-1&&l.push(i)),o&&(t[o]=e,l.indexOf(o)===-1&&l.push(o));var d=u.getReferrer();if(d&&(t.referrer=d),t.linkTrackVars.indexOf("events")===-1&&l.push("events"),t.linkTrackVars=a.filter(l).join(","),t.linkTrackEvents.indexOf(v)===-1){var f=t.linkTrackEvents.split(",");f.push(v),t.linkTrackEvents=a.filter(f).join(",")}if(t.events.indexOf(v)===-1){var h=t.events.split(",");h.push(v),t.events=a.filter(h).join(",")}t.tl(!0,g,m)}))},A={preRedirectPolicy:l.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:l.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:l.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:I,trackLayerDecision:T,serializeSettings:d.stringify,deserializeSettings:d.parse};e.exports=function(e){e.registerAnalyticsTracker("adobe_analytics",A)}}),(function(e,t,n){e.exports=function(e){e.registerAnalyticsTracker("avro",n(205))}}),(function(e,t,n){function i(e){var t=E.omit(e,j),n=E.pick(e,j),i=[],r=[];return E.forOwn(t,(function(e,t){var n=h({type:R,name:t,value:e});n&&i.push(n)})),E.forOwn(n,(function(e,t){try{e=m(e),r.push({name:t,value:e})}catch(e){y.emitError(new B("Bad value for eventMetrics["+t+"]: "+e.message))}})),{eventFeatures:i,eventMetrics:r}}function r(e,t){var n=u(e,t),r=i(e.eventTags);return r.eventFeatures.push(h({type:D,name:"",value:e.viewCategory})),E.extend(n,r,{eventEntityId:e.pageId,eventType:N,eventName:e.pageId})}function a(e,t,n){var i=u(e,t),r=e.event.pageId,a=[],o=[];if(a.push(h({type:b,name:"selector",value:e.selector})),a.push(h({type:b,name:"view_id",value:e.event.pageId})),r){var s=n.getActivationEventId(e.event.pageId);s&&o.push({eventId:n.getActivationEventId(e.event.pageId),relationship:z.VIEW_ACTIVATED})}return E.forOwn(e.eventTags,(function(e,t){var n=h({type:R,name:t,value:e},L);n&&a.push(n)})),E.extend(i,{eventEntityId:e.event.id,eventType:e.event.category,eventName:e.event.apiName,eventFeatures:a,relatedEvents:o})}function o(e,t){var n=u(e,t),r=i(e.eventTags);return E.extend(n,r,{eventEntityId:e.eventEntityId,eventType:e.eventCategory,eventName:e.eventApiName})}function s(e,t){var n=u(e,t);return n.layerStates=[],E.extend(n,{eventType:O,eventName:C})}function u(e,t){var n=f(e.userFeatures),i=p(e.activeViewStates,t),r=d(e.layerStates),a=E.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{eventId:e.eventId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,eventFeatures:[],eventMetrics:[],relatedEvents:[],layerStates:r,userFeatures:n,activeViews:i,isGlobalHoldback:e.isGlobalHoldback}}function c(e){var t=E.map(e.decisionTicketAudienceIds,(function(e){return{id:e}})),n=f(e.userFeatures);return{decisionId:e.decisionId,anonymizeIP:e.anonymizeIP,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:e.layerId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,decisionTicket:{audiences:t,bucketingId:e.visitorUUID||e.visitorId},decision:g(e),userFeatures:n,isGlobalHoldback:!1}}function l(e){var t=e.decisionTicket,n=e.decision,i=E.map(t.audienceIds,(function(e){return{id:e}})),r=f(e.userFeatures),a=E.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{decisionId:e.decisionId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:n.layerId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:G.getRandomId(),visitorUUID:G.getUUID(),decisionTicket:{audiences:i,bucketingId:t.bucketingId},decision:g(n),userFeatures:r,isGlobalHoldback:U.isGlobalHoldback()}}function d(e){return E.map(e,(function(e){var t=null,n=e.decisionTicket;if(n){var i=E.map(n.audienceIds,(function(e){return{id:e}}));t={audiences:i,bucketingId:n.bucketingId}}return{layerId:e.layerId,revision:e.revision,decisionTicket:t,decision:g(e.decision),decisionActivationId:e.decisionActivationId,decisionSessionId:e.decisionSessionId,decisionEventId:e.decisionEventId,decisionTimestamp:e.decisionTimestamp,actionTriggered:e.actionTriggered,actionSessionId:e.actionSessionId,actionActivationId:e.actionActivationId,actionTimestamp:e.actionTimestamp}}))}function f(e){return E.reduce(e,(function(e,t){try{v(t.value),e.push(E.pick(t,["id","type","name","shouldIndex","value"]))}catch(e){L.warn("Error evaluating user feature",t,e)}return e}),[])}function p(e,t){return E.map(e,(function(e){var n=[];try{var i=t.get(e.id);n.push(h({type:D,name:"",value:i.category}))}catch(t){L.error("Unable to find Page category for Page with id",e.id)}return E.forOwn(e.metadata,(function(e,t){var i=h({type:w,name:t,value:e},L);i&&n.push(i)})),{viewId:e.id,activatedTimestamp:e.activatedTimestamp,viewFeatures:n}}))}function g(e){return E.pick(e,["experimentId","variationId","isLayerHoldback"])}function h(e){var t=E.extend({id:null,shouldIndex:!0},e);try{v(e.value)}catch(t){return void L.error("Error evaluating feature:",e,t)}return t}function v(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=k.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function m(e){if(null==e)throw new Error("Metric value is null");if(!E.isNumber(e))throw new Error("Metric value is not numeric");return Math.floor(e)}function _(e){return x?P:e}var E=n(5),y=n(75),I=n(116),T="https://logx.optimizely.com",S=T+"/log/decision",A=T+"/log/event",b="event",w="view_tag",D="view_category",R="tags",N="view_activated",C="client_activation",O="client_activation",x=!1,P="AUTO",L=n(16),k=n(18),F=n(67),V=n(12).create,M=n(19),U=M.get("stores/global"),G=M.get("stores/visitor_id"),B=t.Error=V("AvroError"),j=["revenue","quantity"],z={VIEW_ACTIVATED:"view_activation"};t.preRedirectPolicy=I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,t.postRedirectPolicy=I.PostRedirectPolicies.TRACK_AFTER_SYNC,t.nonRedirectPolicy=I.NonRedirectPolicies.TRACK_IMMEDIATELY,t.trackLayerDecision=function(e){var t=c(e);F.retryableRequest({url:S,method:"POST",data:t},t.decisionId)},t.onLayerDecision=[function(){return function(e){var t=l(e);F.retryableRequest({url:S,method:"POST",data:t},t.decisionId)}}],t.onPageActivated=["stores/view_data",function(e){return function(t){var n=r(t,e,L);F.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onClientActivation=["stores/view_data",function(e){return function(t){var n=s(t,e,L);F.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onCustomEvent=["stores/view_data",function(e){return function(t){var n=o(t,e);F.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onClickEvent=["stores/view_data","stores/view",function(e,t){return function(n){var i=a(n,e,t);F.retryableRequest({url:A,method:"POST",data:i},i.eventId)}}]}),(function(e,t,n){var i=n(5),r=n(16),a=n(121),o=n(117),s=n(9),u=n(116),c=n(18),l="google_classic_analytics",d="Optimizely",f="_gaq",p=128,g=p-d.length,h=n(125),v=["stores/layer_data",function(e){return function(t){var n=t.decision.experimentId,a=t.decision.variationId,o=t.decision.isLayerHoldback,s=e.get(t.decision.layerId),u=i.find(s.experiments,{id:n});if(u){var c=u.integrationSettings||s.integrationSettings||{},d=c[l];if(d){var f=i.find(u.variations,{id:a});if(f){var p=h.generateAnalyticsString(s,u,f,o,g,!0);if(p)return _(p,d).catch((function(e){r.warn("Tracker for",l,"failed:",e)}))}}}}}],m=function(e){var t=e.integrationSettings;if(t&&t[l]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},a={id:e.variationId,name:e.variationName},o=e.isLayerHoldback,s=h.generateAnalyticsString(n,i,a,o,g,!0);if(s)return _(s,t[l]).catch((function(e){r.warn("Tracker for",l,"failed:",e)}))}},_=function(e,t){var n=50,u=200;return a.pollFor((function(){var e=s.getGlobal(f);if(e&&!i.isArray(e))return e;
}),u,n).then((function(n){var i=null,a=null,s=!0,u=t.google_analytics_tracker,c=u?u+".":"",l=parseInt(t.google_analytics_slot,10);if(isNaN(l))return void r.warn('Google Analytics custom variable slot cannot be parsed to an integer: "',t.google_analytics_slot,'".  No data can be sent to Google Analytics.');var f=o.getReferrer();f&&n.push([c+"_setReferrerOverride",f]),n.push([c+"_setCustomVar",l,d,e],[c+"_trackEvent","Optimizely","Assigned to Campaign",i,a,s])}))},E={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:v,trackLayerDecision:m,serializeSettings:c.stringify,deserializeSettings:c.parse};e.exports=function(e){e.registerAnalyticsTracker("google_classic_analytics",E)}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(208)),e.registerViewMatcher("url",n(209))}}),(function(e,t,n){var i=n(78);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(191);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(211),a=n(114),o=n(16),s=n(109);e.exports=function(e){var t=new r(function(e){s.updateAllViewTags();var t=a.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=function(e){a.forEach(this.events,function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){c.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}.bind(this))}.bind(this)}function r(e,t,n){for(var i=e.target,r=0;i;){var o;try{o=s(i,t)}catch(o){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:o.message,eventId:n.id};return c.emitError(new l("Unable to evaluate match for element"),u),!1}if(o)return!0;i=i.parentElement,r++}return!1}var a=n(5),o=n(12).create,s=n(212),u=n(73),c=n(75),l=t.Error=o("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(213)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(5),a=n(215),o=n(216),s=n(101);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(5),r=n(68).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(11);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e,t){if(this.change=e,this.config=t,this.reasonShouldNotRedirect=this._checkForReasonNotToRedirect(),!this.reasonShouldNotRedirect){if(!r.isString(this.change.dest)&&!r.isFunction(this.change.dest))throw new Error("Redirect destination is not a string or function:",this.change.dest);if(r.isFunction(this.change.dest)&&(this.change.dest=this.change.dest(),!r.isString(this.change.dest)))throw new Error("Redirect destination function did not evaluate to a string");o.dispatch(s.ANNOUNCE_PENDING_REDIRECT,{layerId:this.change.layerId})}}var r=n(5),a=n(68).Promise,o=n(2),s=n(10),u=n(17),c=n(73),l=n(9),d=n(77),f=n(16),p=n(218),g=n(216),h=n(19),v=h.get("stores/action_data"),m=null;i.prototype.apply=function(){if(this.reasonShouldNotRedirect)return f.warn("Redirect change is not being applied because: "+this.reasonShouldNotRedirect),a.resolve(g.changeState.IGNORED);if(this.reasonInvalid)return f.error("Redirect change cannot be applied because:",this.reasonInvalid),a.reject(this.reasonInvalid);try{this.Dt(this.Rt())}catch(e){return a.reject(e)}return a.resolve(g.changeState.APPLIED)},i.prototype.Rt=function(){var e=p.create(this.change.dest);if(this.change.preserveParameters){var t=l.getLocation().search;t&&(e.search?e.search+="&"+t.substr(1):e.search=t)}return e.toString()},i.prototype.Nt=function(){var e=c.createElement("style");e.setAttribute("type","text/css"),e.innerHTML="body{display:none;visibility:hidden;}",c.appendToHead(e)},i.prototype.Dt=function(e){if(!m){var t,n=v.getByChangeId(this.config.identifier);n&&(t=n.variationId);var i=(t||"unknown variation")+"|"+c.getReferrer();f.debug("Change / Redirect / Setting redirect data:",i),d.set(u.COOKIES.REDIRECT,i,{maxAge:5})}var r=!this.change.hasOwnProperty("hidePage")||this.change.hidePage;r&&this.Nt(),l.setLocation(e)},i.prototype._checkForReasonNotToRedirect=function(){var e=d.get(u.COOKIES.REDIRECT);if(!this.change.allowAdditionalRedirect&&!r.isUndefined(e))return"Page was already redirected."},e.exports=function(e){e.registerChangeApplier(g.changeType.REDIRECT,i)}}),(function(e,t,n){var i=n(5);t.create=function(e){if(i.isEmpty(e))return null;var t=document.createElement("a");return t.href=e,t}}),(function(e,t,n){function i(e,t){this.change=r.extend({},e),this.identifier=t.identifier}var r=n(5),a=n(132),o=n(216),s=n(215),u="showWidget";i.prototype.apply=function(){return a.emit({type:u,name:this.change.widget_id,data:this.change}),s().resolve(o.changeState.APPLIED)},e.exports=function(e){e.registerChangeApplier(o.changeType.WIDGET,i)}}),(function(e,t,n){function i(e,t,n,i){var l,d=e.decisionMetadata.experimentPriorities[i],f=function(n,i){var r=s.getExperimentById(e,i.entityId);return s.isValidExperiment(t,r)&&n.push(i.entityId),n},p=o.reduce(d,f,[]);if(!o.isEmpty(p)){var g,h=o.filter(d,{endOfRange:null});if(h&&h.length===d.length)g=r(p);else{if(0!==h.length)throw new c("You must specify weights for all or none of the experiments in each priority layer.");g=a(p,d)}if(l=u.chooseWeightedCandidate(n,e.id,g)){var v=s.getExperimentById(e,l);if(v)return v}}}function r(e){for(var t=[],n=Math.round(1e4/e.length),i=0;i<e.length;i++)t.push({entityId:e[i],endOfRange:n*(i+1)});return t[t.length-1].endOfRange=1e4,t}function a(e,t){for(var n=[],i=[],r=0,a=0;a<t.length;a++){var s=0;e.indexOf(t[a].entityId)>=0&&(s=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r+=s,i.push({entityId:t[a].entityId,points:s}))}if(o.isEmpty(n))for(var u=0,c=0;c<i.length;c++){var l=Math.round(1e4*i[c].points/r)+u;n.push({entityId:i[c].entityId,endOfRange:l}),u=l}return n[n.length-1].endOfRange=1e4,n}var o=n(5),s=n(104),u=n(103),c=n(105).DecisionError,l="equal_priority",d={decideLayer:function(e,t){if(!e.decisionMetadata||!e.decisionMetadata.experimentPriorities)throw new c("No decisionMetadata.experimentPriorities on layer.");for(var n=e.decisionMetadata.experimentPriorities.length,r=0;r<n;r++){var a=i(e,t.audienceIds,t.bucketingId,r);if(a){var o=s.selectVariation(a,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!e.decisionMetadata.offerConsistency||s.hasVariationActionsOnView(o,t.pageId))return{experiment:a,variation:o}}}throw new c("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(e){return!(!e.decisionMetadata||!e.decisionMetadata.offerConsistency)}};e.exports=function(e){e.registerDecider(l,d)}})]);