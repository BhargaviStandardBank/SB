define("flxSchemeList", function() {
    return function(controller) {
        var flxSchemeList = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxSchemeList",
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
        flxSchemeList.setDefaultUnit(voltmx.flex.DP);
        var lblSchemeID = new voltmx.ui.Label({
            "id": "lblSchemeID",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Scheme ID",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblSchemeName = new voltmx.ui.Label({
            "id": "lblSchemeName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Scheme Name",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCIFNo = new voltmx.ui.Label({
            "id": "lblCIFNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "CIF No",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCompanyName = new voltmx.ui.Label({
            "id": "lblCompanyName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Company Name",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblRegID = new voltmx.ui.Label({
            "id": "lblRegID",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Reg ID",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblStatus = new voltmx.ui.Label({
            "id": "lblStatus",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Status",
            "top": "0dp",
            "width": "13%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        flxSchemeList.add(lblSchemeID, lblSchemeName, lblCIFNo, lblCompanyName, lblRegID, lblStatus);
        return flxSchemeList;
    }
})