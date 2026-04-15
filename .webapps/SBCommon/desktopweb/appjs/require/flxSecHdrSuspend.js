define("flxSecHdrSuspend", function() {
    return function(controller) {
        var flxSecHdrSuspend = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxBGEDF5FF",
            "height": "45dp",
            "id": "flxSecHdrSuspend",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGEDF5FF",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxSecHdrSuspend.setDefaultUnit(voltmx.flex.DP);
        var lblDate = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblDate",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "Date",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCIFNo = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblCIFNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "CIF No",
            "top": "7dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblIDNo = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblIDNo",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "ID No",
            "top": "7dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCustomerName = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblCustomerName",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "Customer Name",
            "top": "7dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblReason = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblReason",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHeading4Bold",
            "text": "Reason",
            "top": "7dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSecHdrSuspend.add(lblDate, lblCIFNo, lblIDNo, lblCustomerName, lblReason);
        return flxSecHdrSuspend;
    }
})