define("SuspendList/CopyFBox0d3d990ec800b4e", function() {
    return function(controller) {
        CopyFBox0d3d990ec800b4e = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0d3d990ec800b4e",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0d3d990ec800b4e.setDefaultUnit(voltmx.flex.DP);
        var lblType = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblType",
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
        CopyFBox0d3d990ec800b4e.add(lblType);
        return CopyFBox0d3d990ec800b4e;
    }
})