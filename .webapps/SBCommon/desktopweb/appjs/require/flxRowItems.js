define("flxRowItems", function() {
    return function(controller) {
        var flxRowItems = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40px",
            "id": "flxRowItems",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxRowItems.setDefaultUnit(voltmx.flex.DP);
        var lblMenuItem = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblMenuItem",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLblWhiteFormLevel",
            "text": "Label",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRowItems.add(lblMenuItem);
        return flxRowItems;
    }
})