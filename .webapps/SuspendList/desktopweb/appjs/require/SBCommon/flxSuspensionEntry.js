define("SBCommon/flxSuspensionEntry", function() {
    return function(controller) {
        var flxSuspensionEntry = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "id": "flxSuspensionEntry",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
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
        flxSuspensionEntry.setDefaultUnit(voltmx.flex.DP);
        var lblCIFNo = new voltmx.ui.Label({
            "id": "lblCIFNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "CIF No",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblIDNo = new voltmx.ui.Label({
            "id": "lblIDNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "ID No",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCustomerName = new voltmx.ui.Label({
            "id": "lblCustomerName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Customer Name",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblReason = new voltmx.ui.Label({
            "id": "lblReason",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Reason",
            "top": "0dp",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var flxDelete = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "id": "flxDelete",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "8dp",
            "width": "5%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxDelete.setDefaultUnit(voltmx.flex.DP);
        var imgDelet = new voltmx.ui.Image2({
            "centerX": "50%",
            "height": "30dp",
            "id": "imgDelet",
            "isVisible": true,
            "skin": "slImage",
            "src": "icon_delete.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDelete.add(imgDelet);
        flxSuspensionEntry.add(lblCIFNo, lblIDNo, lblCustomerName, lblReason, flxDelete);
        return flxSuspensionEntry;
    }
})