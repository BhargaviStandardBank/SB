define(function() {
    return function(controller) {
        var segHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "sknFlxBGEDF5FF",
            "height": "40dp",
            "id": "segHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGEDF5FF",
            "top": "16dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "segHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "segHeader"), extendConfig({}, controller.args[2], "segHeader"));
        segHeader.setDefaultUnit(voltmx.flex.DP);
        var flxDate = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxDate",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxDate"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDate"), extendConfig({}, controller.args[2], "flxDate"));
        flxDate.setDefaultUnit(voltmx.flex.DP);
        var lblDate = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "Date",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDate"), extendConfig({}, controller.args[2], "lblDate"));
        var imgFilter = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgFilter",
            "isVisible": true,
            "left": "2dp",
            "skin": "slImage",
            "src": "filter_list.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgFilter"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFilter"), extendConfig({}, controller.args[2], "imgFilter"));
        flxDate.add(lblDate, imgFilter);
        var flxCIFNo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxCIFNo",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxCIFNo"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCIFNo"), extendConfig({}, controller.args[2], "flxCIFNo"));
        flxCIFNo.setDefaultUnit(voltmx.flex.DP);
        var lblCIFNo = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCIFNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "CIF No",
            "top": "9dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCIFNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCIFNo"), extendConfig({}, controller.args[2], "lblCIFNo"));
        var CopyimgFilter0c8663a5ec8e44b = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "CopyimgFilter0c8663a5ec8e44b",
            "isVisible": false,
            "left": "2dp",
            "skin": "slImage",
            "src": "filter_list.png",
            "top": "5dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "CopyimgFilter0c8663a5ec8e44b"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgFilter0c8663a5ec8e44b"), extendConfig({}, controller.args[2], "CopyimgFilter0c8663a5ec8e44b"));
        flxCIFNo.add(lblCIFNo, CopyimgFilter0c8663a5ec8e44b);
        var flxIDNo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxIDNo",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxIDNo"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxIDNo"), extendConfig({}, controller.args[2], "flxIDNo"));
        flxIDNo.setDefaultUnit(voltmx.flex.DP);
        var lblIDNo = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblIDNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "ID No",
            "top": "9dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblIDNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblIDNo"), extendConfig({}, controller.args[2], "lblIDNo"));
        var CopyimgFilter0j5cb0cec18c843 = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "CopyimgFilter0j5cb0cec18c843",
            "isVisible": false,
            "left": "2dp",
            "skin": "slImage",
            "src": "filter_list.png",
            "top": "5dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "CopyimgFilter0j5cb0cec18c843"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgFilter0j5cb0cec18c843"), extendConfig({}, controller.args[2], "CopyimgFilter0j5cb0cec18c843"));
        flxIDNo.add(lblIDNo, CopyimgFilter0j5cb0cec18c843);
        var flxCustomerName = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxCustomerName",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxCustomerName"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCustomerName"), extendConfig({}, controller.args[2], "flxCustomerName"));
        flxCustomerName.setDefaultUnit(voltmx.flex.DP);
        var lblCustomerName = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCustomerName",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "Customer Name",
            "top": "9dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCustomerName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomerName"), extendConfig({}, controller.args[2], "lblCustomerName"));
        var CopyimgFilter0fd5bbd1bf1db45 = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "CopyimgFilter0fd5bbd1bf1db45",
            "isVisible": false,
            "left": "2dp",
            "skin": "slImage",
            "src": "filter_list.png",
            "top": "5dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "CopyimgFilter0fd5bbd1bf1db45"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgFilter0fd5bbd1bf1db45"), extendConfig({}, controller.args[2], "CopyimgFilter0fd5bbd1bf1db45"));
        flxCustomerName.add(lblCustomerName, CopyimgFilter0fd5bbd1bf1db45);
        var flxReason = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "flxReason",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "30%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxReason"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxReason"), extendConfig({}, controller.args[2], "flxReason"));
        flxReason.setDefaultUnit(voltmx.flex.DP);
        var lblReason = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReason",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "Reason",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReason"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReason"), extendConfig({}, controller.args[2], "lblReason"));
        var CopyimgFilter0ec0a3683dce84e = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "CopyimgFilter0ec0a3683dce84e",
            "isVisible": false,
            "left": "2dp",
            "skin": "slImage",
            "src": "filter_list.png",
            "top": "5dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "CopyimgFilter0ec0a3683dce84e"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgFilter0ec0a3683dce84e"), extendConfig({}, controller.args[2], "CopyimgFilter0ec0a3683dce84e"));
        flxReason.add(lblReason, CopyimgFilter0ec0a3683dce84e);
        segHeader.add(flxDate, flxCIFNo, flxIDNo, flxCustomerName, flxReason);
        segHeader.compInstData = {}
        return segHeader;
    }
})