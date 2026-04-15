define("SuspendList/CopyFBox0a97028e0935b46", function() {
    return function(controller) {
        CopyFBox0a97028e0935b46 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0a97028e0935b46",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0a97028e0935b46.setDefaultUnit(voltmx.flex.DP);
        var lblCriteria = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblCriteria",
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
        CopyFBox0a97028e0935b46.add(lblCriteria);
        return CopyFBox0a97028e0935b46;
    }
})