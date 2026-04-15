define(function() {
    return function(controller) {
        var SuspenEntryHdr = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "slFFocusbox",
            "height": "40dp",
            "id": "SuspenEntryHdr",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGEDF5FF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SuspenEntryHdr"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SuspenEntryHdr"), extendConfig({}, controller.args[2], "SuspenEntryHdr"));
        SuspenEntryHdr.setDefaultUnit(voltmx.flex.DP);
        var lblCIFNO = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCIFNO",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblHeading4Bold",
            "text": "CIF No",
            "width": "17%",
            "zIndex": 1
        }, controller.args[0], "lblCIFNO"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCIFNO"), extendConfig({}, controller.args[2], "lblCIFNO"));
        var lblIdNo = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblIdNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblHeading4Bold",
            "text": "ID No",
            "top": "9dp",
            "width": "17%",
            "zIndex": 1
        }, controller.args[0], "lblIdNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblIdNo"), extendConfig({}, controller.args[2], "lblIdNo"));
        var lblCustomerName = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblCustomerName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblHeading4Bold",
            "text": "Customer Name",
            "top": "9dp",
            "width": "17%",
            "zIndex": 1
        }, controller.args[0], "lblCustomerName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCustomerName"), extendConfig({}, controller.args[2], "lblCustomerName"));
        var lblReason = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblReason",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblHeading4Bold",
            "text": "Reason",
            "top": "9dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "lblReason"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReason"), extendConfig({}, controller.args[2], "lblReason"));
        SuspenEntryHdr.add(lblCIFNO, lblIdNo, lblCustomerName, lblReason);
        SuspenEntryHdr.compInstData = {}
        return SuspenEntryHdr;
    }
})