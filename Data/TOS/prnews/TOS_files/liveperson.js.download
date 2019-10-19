 var lpTag = lpTag || {}; lpTag.vars = lpTag.vars  || []; lpTag.dbs = lpTag.dbs || [];
    lpTag.section = 'default'; 

    // ======================= VARIABLES ===================================
    // A LivePerson variable can be defined in one of three different scopes:
    // 'page' - exists on the current page only
    // 'session' - exists for the current visitor session
    // 'visitor' - persists between browser sessions
	
    // ----------------- 1: Sending when the page loads --------------------
    // Variables are JavaScript objects that are passed in an array
    // Each object must contain: scope, name, value
    // Values should be strings
	
    var arrLPvars = [ 
	
        // 'unit' is required in most deployments
        { scope:'page', name:'unit', value:'PRN' } //Replace value with other unit values outlined in email
        // You can add as many other variables as you need
    ];
    lpTag.vars.push(arrLPvars);

    // ======================= DYNAMIC BUTTONS ============================
    // Define a default dynamic button on the page, specifying the following parameters
    //   name: the name of the dynamic button in the LivePerson Admin Console
    //   pid: the id of the div that the button will be injected into
   // lpTag.dbs.push({ name:'chat-sales-english-default', pid:'lpButtonDiv' });
