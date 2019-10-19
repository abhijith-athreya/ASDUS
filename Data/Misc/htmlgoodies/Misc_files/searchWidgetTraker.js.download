var SearchWidgetTracker = (function(window, _, undefined) {
    var pvt = {
        prefix: '',
        safe: {},
        init: function() {
            if (_.isUndefined(window.DCSext)) {
                window.DCSext = {};
            }
            return pub;
        }
    };
    var pub = {
        page_load: ['page_load', 0],
        form_elem_change: ['form_element_value_change', 28],
        form_submit: ['form_submit', 29],
        form_submit_without_consent: ['form_submit_without_consent', 29],
        form_skip: ['form_skip', 22],
        singlequestion_step: ['form_step', 22],
        link_click: ['link_click', 22],
        dtsp_click: ['dtsp_click', 22],
        target_impression: ['target_impression', 50],
        button_click: ['button_click', 22],
        image_click: ['image_click', 22],
        prefix: function(value) {
            if (_.isUndefined(value)) {
                return pvt.prefix;
            }
            pvt.prefix = value.toLowerCase().replace(/_$/, '') + '_';
            return pub;
        },
        save: function(key, value) {
            if (_.isUndefined(key)) {
                return pvt.safe;
            }
            if (value == '') {
                return pub;
            }
            pvt.safe[key] = value;
            return pub;
        },
        log: function track(type, data, widgetPosition,elementValue) {
            var obj = _.extend({}, pub.save()),
                dl = type[1], page_name = window.location.pathname;
            if (!_.isUndefined(page_name)) {
                obj.page = page_name;
            }
            if (typeof widgetPosition != 'undefined') {
                obj.sl_widget_position = widgetPosition;
            }
            obj.eventType = type[0];

            if (typeof data != 'undefined') {
                obj.widget_element = data;
            }
            if (typeof elementValue != 'undefined') {
                obj.element_value = elementValue;
            }

            if ($('meta[name=DCSext\\.qse_b2b_env]').length > 0) {
                var envvalue = $('meta[name=DCSext\\.qse_b2b_env]').attr("content");
                if (envvalue)
                    obj.env = envvalue;
            }
            else
            {
                obj.env = 'PROD';
            }
            var str = 'dcsMultiTrack("WT.dl","' + dl + '", ',
                prefix = 'DCSext.qse_b2b_' + pub.prefix();
            _.each(obj, function(v, k) {
                str += '"' + prefix + k + '","' + v + '", ';
            });
            str = str.substring(0, str.lastIndexOf(',')) + ')';
            if(!obj.eventType) {
            	return self;
            } 
            if (typeof console != 'undefined' && console.log) {
                console.log(str);
            }
            if (_.isUndefined(window.DCSext) || _.isUndefined(window.dcsMultiTrack)) {
                return self;
            }
            window.DCSext = {};
            setTimeout(function() {
                eval(str);
            }, 0);
            return true;
        }
    };
    return pvt.init();
})(window, _);