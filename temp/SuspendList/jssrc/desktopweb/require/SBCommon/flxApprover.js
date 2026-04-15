define("SBCommon/flxApprover", function() {
    return function(controller) {
        var flxApprover = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "40dp",
            "id": "flxApprover",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
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
        flxApprover.setDefaultUnit(voltmx.flex.DP);
        var lblEmployeeNo = new voltmx.ui.Label({
            "id": "lblEmployeeNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblName = new voltmx.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblEmail = new voltmx.ui.Label({
            "id": "lblEmail",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblMobileNo = new voltmx.ui.Label({
            "id": "lblMobileNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var flxEdit = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "25dp",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "9dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxEdit.setDefaultUnit(voltmx.flex.DP);
        var imgEdit = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgEdit",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        flxEdit.add(imgEdit);
        var flxDelete = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "25dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "9dp",
            "width": "25dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxDelete.setDefaultUnit(voltmx.flex.DP);
        var imgDelete = new voltmx.ui.Image2({
            "height": "100%",
            "id": "imgDelete",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_delete.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDelete.add(imgDelete);
        flxApprover.add(lblEmployeeNo, lblName, lblEmail, lblMobileNo, flxEdit, flxDelete);
        return flxApprover;
    }
})