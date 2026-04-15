define("flxRowSuspend", function() {
    return function(controller) {
        var flxRowSuspend = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "id": "flxRowSuspend",
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
        flxRowSuspend.setDefaultUnit(voltmx.flex.DP);
        var lblDateVal = new voltmx.ui.Label({
            "id": "lblDateVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Date",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCiFNoVal = new voltmx.ui.Label({
            "id": "lblCiFNoVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "CIF No",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblIDNoVal = new voltmx.ui.Label({
            "id": "lblIDNoVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "ID No",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCustomerNameVal = new voltmx.ui.Label({
            "id": "lblCustomerNameVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Customer Name",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblReasonVal = new voltmx.ui.Label({
            "id": "lblReasonVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Reason",
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var flxDelete = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "25dp",
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "45dp",
            "id": "flxDelete",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxTrans",
            "width": "5%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxDelete.setDefaultUnit(voltmx.flex.DP);
        var imgDelete = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgDelete",
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
        flxDelete.add(imgDelete);
        flxRowSuspend.add(lblDateVal, lblCiFNoVal, lblIDNoVal, lblCustomerNameVal, lblReasonVal, flxDelete);
        return flxRowSuspend;
    }
})