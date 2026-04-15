define("flxRow", function() {
    return function(controller) {
        var flxRow = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRow",
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
        flxRow.setDefaultUnit(voltmx.flex.DP);
        var lblAcctType = new voltmx.ui.Label({
            "id": "lblAcctType",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblAccNo = new voltmx.ui.Label({
            "id": "lblAccNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblBRI = new voltmx.ui.Label({
            "id": "lblBRI",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "2%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblOutstandingBal = new voltmx.ui.Label({
            "id": "lblOutstandingBal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblInstalment = new voltmx.ui.Label({
            "id": "lblInstalment",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblArrearsExcess = new voltmx.ui.Label({
            "id": "lblArrearsExcess",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblAmountDue = new voltmx.ui.Label({
            "id": "lblAmountDue",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblOrgLoanAmt = new voltmx.ui.Label({
            "id": "lblOrgLoanAmt",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "6%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblOrgLimit = new voltmx.ui.Label({
            "id": "lblOrgLimit",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "label",
            "top": "0dp",
            "width": "5.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCurrentLimit = new voltmx.ui.Label({
            "id": "lblCurrentLimit",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblInterestRate = new voltmx.ui.Label({
            "id": "lblInterestRate",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblOriginationDate = new voltmx.ui.Label({
            "id": "lblOriginationDate",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblOriginalTerm = new voltmx.ui.Label({
            "id": "lblOriginalTerm",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRemTerm = new voltmx.ui.Label({
            "id": "lblRemTerm",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "5%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        flxRow.add(lblAcctType, lblAccNo, lblBRI, lblOutstandingBal, lblInstalment, lblArrearsExcess, lblAmountDue, lblOrgLoanAmt, lblOrgLimit, lblCurrentLimit, lblInterestRate, lblOriginationDate, lblOriginalTerm, lblRemTerm);
        return flxRow;
    }
})