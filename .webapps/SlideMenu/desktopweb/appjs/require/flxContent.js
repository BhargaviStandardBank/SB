define("flxContent", function() {
    return function(controller) {
        var flxContent = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c895d4865b2744",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxContent.setDefaultUnit(voltmx.flex.DP);
        var flxRight = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "48%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxRight.setDefaultUnit(voltmx.flex.DP);
        var lblAppName = new voltmx.ui.Label({
            "id": "lblAppName",
            "isVisible": true,
            "left": "0",
            "skin": "defLabel",
            "text": "App1",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl2 = new voltmx.ui.Label({
            "id": "lbl2",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App  Data",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl3 = new voltmx.ui.Label({
            "id": "lbl3",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Details",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl4 = new voltmx.ui.Label({
            "id": "lbl4",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Publish",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRight.add(lblAppName, lbl2, lbl3, lbl4);
        var flxLeft = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "4%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "48%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxLeft.setDefaultUnit(voltmx.flex.DP);
        var CopylblAppName0g05b33d32f1146 = new voltmx.ui.Label({
            "id": "CopylblAppName0g05b33d32f1146",
            "isVisible": true,
            "left": "0",
            "skin": "defLabel",
            "text": "App1",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Copylbl0fd5cd534195346 = new voltmx.ui.Label({
            "id": "Copylbl0fd5cd534195346",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App  Data",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Copylbl0ee3b095a584e40 = new voltmx.ui.Label({
            "id": "Copylbl0ee3b095a584e40",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Details",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Copylbl0c6d2d67a25c347 = new voltmx.ui.Label({
            "id": "Copylbl0c6d2d67a25c347",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Publish",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLeft.add(CopylblAppName0g05b33d32f1146, Copylbl0fd5cd534195346, Copylbl0ee3b095a584e40, Copylbl0c6d2d67a25c347);
        flxContent.add(flxRight, flxLeft);
        return flxContent;
    }
})