define("SuspendList/CopyFBox0e4f6c0b85bd540", function() {
    return function(controller) {
        CopyFBox0e4f6c0b85bd540 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0e4f6c0b85bd540",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0e4f6c0b85bd540.setDefaultUnit(voltmx.flex.DP);
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
        CopyFBox0e4f6c0b85bd540.add(lblSource);
        return CopyFBox0e4f6c0b85bd540;
    }
})