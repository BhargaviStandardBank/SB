define("flxDropDown", function() {
    return function(controller) {
        var flxDropDown = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "40dp",
            "id": "flxDropDown",
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
        flxDropDown.setDefaultUnit(voltmx.flex.DP);
        var lblDropDwn = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblDropDwn",
            "isVisible": true,
            "left": "1%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDropDown.add(lblDropDwn);
        return flxDropDown;
    }
})