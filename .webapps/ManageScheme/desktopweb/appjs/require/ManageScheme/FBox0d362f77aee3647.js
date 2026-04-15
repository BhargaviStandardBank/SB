define("ManageScheme/FBox0d362f77aee3647", function() {
    return function(controller) {
        FBox0d362f77aee3647 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "FBox0d362f77aee3647",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0d362f77aee3647.setDefaultUnit(voltmx.flex.DP);
        var lblMethod = new voltmx.ui.Label({
            "id": "lblMethod",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "12dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FBox0d362f77aee3647.add(lblMethod);
        return FBox0d362f77aee3647;
    }
})