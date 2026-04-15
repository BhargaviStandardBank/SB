define("SBCommon/flxAddSuspendRow", function() {
    return function(controller) {
        var flxAddSuspendRow = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "40dp",
            "id": "flxAddSuspendRow",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxAddSuspendRow.setDefaultUnit(voltmx.flex.DP);
        var lblAdd = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblAdd",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "13dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAddSuspendRow.add(lblAdd);
        return flxAddSuspendRow;
    }
})