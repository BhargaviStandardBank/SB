define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var btn1 = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btn1",
                "isVisible": true,
                "left": "532dp",
                "skin": "defBtnNormal",
                "text": "Buttonasd",
                "top": "215dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "70dp",
                "zIndex": 1,
                "appName": "sampleAnimation"
            }, {
                "paddingInPixel": false
            }, {});
            flxLeft.setDefaultUnit(voltmx.flex.DP);
            var Label0ed0c6418b82e48 = new voltmx.ui.Label({
                "id": "Label0ed0c6418b82e48",
                "isVisible": true,
                "left": "16dp",
                "skin": "defLabel",
                "text": "asdcsdsdfsdf",
                "top": "660dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLeft.add(Label0ed0c6418b82e48);
            this.compInstData = {}
            this.add(btn1, flxLeft);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "sampleAnimation",
            "info": {
                "kuid": "a1f6670ba74642f8b1fcd5b7973a0abf"
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