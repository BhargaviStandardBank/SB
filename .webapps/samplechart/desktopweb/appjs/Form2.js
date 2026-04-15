define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0h72222341ce049 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "FlexContainer0h72222341ce049",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "samplechart"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0h72222341ce049.setDefaultUnit(voltmx.flex.DP);
            var brwGauge = new voltmx.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "htmlString": "Browser",
                "id": "brwGauge",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0h72222341ce049.add(brwGauge);
            this.compInstData = {}
            this.add(FlexContainer0h72222341ce049);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "samplechart",
            "info": {
                "kuid": "d897ec7f3f864b6e9b9d5efc593355e6"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});