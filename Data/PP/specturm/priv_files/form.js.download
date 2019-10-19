/*
 * Copyright 1997-2010 Day Management AG
 * Barfuesserplatz 6, 4001 Basel, Switzerland
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Day Management AG, ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license agreement you entered into
 * with Day.
 */
/**
 * Utility functions for forms components.
 */
function cq5forms_isArray(obj) {
	return typeof obj.length == 'number' && obj.item;
}

function cq5forms_showMsg(fid, field, msg, index) {
    var f = document.forms[fid].elements[field];
    alert(msg);
    if ( cq5forms_isArray(f) ) {
    	if ( !index) index = 0;
    	f[index].focus();
    } else {
    	f.focus()
    }
}
function cq5forms_isEmpty(obj) {
    if (obj === undefined) {
        // don't trigger validation messages on hidden fields (as in show/hide, not type=hidden)
        return false;
    }
    var empty = true;
    if ( cq5forms_isArray(obj)) {
        for(i=0;i<obj.length;i++) {
            if (obj[i].type == "radio" || obj[i].type == "checkbox" ) {
                if (obj[i].checked) {empty = false;}
            } else if (obj[i].localName == "option") {
                if (obj[i].selected) {empty = false;}
            } else {
                if (obj[i].value.length>0) { empty = false;}
            }
        }
    } else {
        if (obj.type == "radio" || obj.type == "checkbox" ) {
            if (obj.checked) {empty = false;}
        } else {
            if (obj.value.length>0) { empty = false;}
        }
    }
    return empty;
}
function cq5forms_regcheck(obj, pattern) {
    var result=false;
    var t = pattern.exec(obj);
    if (t) {
        var len = obj.length;
        var pattlen = t[0].length;
        result = (pattlen == len);
    }
    return result;
}

/**
 * Check the MultiResource checkbox if the value of the according field changes.
 * @param {Event} evt The event
 * @param {String} name The name of the mr checkbox
 * @param {boolean} force Force to check the mr checkbox
 */
function cq5forms_multiResourceChange(evt, name, force) {
    if (!force) {
        if (!evt) evt = window.event;
        if (evt.keyCode < 48 && evt.keyCode != 8 && evt.keyCode != 46) {
            //skip control keys, allow backspace and delete
            return;
        }
    }
    try {
        document.getElementById(name).checked = true;
    }
    catch (e) {}
}

