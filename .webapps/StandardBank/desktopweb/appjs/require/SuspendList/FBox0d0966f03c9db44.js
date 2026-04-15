define("SuspendList/FBox0d0966f03c9db44", function() {
    return function(controller) {
        FBox0d0966f03c9db44 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "FBox0d0966f03c9db44",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0d0966f03c9db44.setDefaultUnit(voltmx.flex.DP);
        var lblSource = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSource",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FBox0d0966f03c9db44.add(lblSource);
        return FBox0d0966f03c9db44;
    }
})