define(function() {
    return function(controller) {
        var SchemeList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "SchemeList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SchemeList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SchemeList"), extendConfig({}, controller.args[2], "SchemeList"));
        SchemeList.setDefaultUnit(voltmx.flex.DP);
        var segSchemeList = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }, {
                "lblCIFNo": "CIF No",
                "lblCompanyName": "Company Name",
                "lblRegID": "Reg ID",
                "lblSchemeID": "Scheme ID",
                "lblSchemeName": "Scheme Name",
                "lblStatus": "Status"
            }],
            "groupCells": false,
            "id": "segSchemeList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "segTrans",
            "rowTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxSchemeList"
            }),
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxSchemeList": "flxSchemeList",
                "lblCIFNo": "lblCIFNo",
                "lblCompanyName": "lblCompanyName",
                "lblRegID": "lblRegID",
                "lblSchemeID": "lblSchemeID",
                "lblSchemeName": "lblSchemeName",
                "lblStatus": "lblStatus"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segSchemeList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSchemeList"), extendConfig({}, controller.args[2], "segSchemeList"));
        SchemeList.add(segSchemeList);
        SchemeList.compInstData = {}
        return SchemeList;
    }
})