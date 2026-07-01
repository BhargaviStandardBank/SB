define("ManageScheme/FBox0g93c8aed110e4b", function() {
    return function(controller) {
        FBox0g93c8aed110e4b = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "FBox0g93c8aed110e4b",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0g93c8aed110e4b.setDefaultUnit(voltmx.flex.DP);
        var fxlSegScheme = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "fxlSegScheme",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        fxlSegScheme.setDefaultUnit(voltmx.flex.DP);
        var lblSchemeCode = new voltmx.ui.Label({
            "id": "lblSchemeCode",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "16dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSchemeDes = new voltmx.ui.Label({
            "id": "lblSchemeDes",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "16dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        fxlSegScheme.add(lblSchemeCode, lblSchemeDes);
        FBox0g93c8aed110e4b.add(fxlSegScheme);
        return FBox0g93c8aed110e4b;
    }
})