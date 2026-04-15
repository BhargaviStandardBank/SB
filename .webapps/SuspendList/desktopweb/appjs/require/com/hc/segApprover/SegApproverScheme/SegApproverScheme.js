define(function() {
    return function(controller) {
        var SegApproverScheme = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "SegApproverScheme",
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
        }, controller.args[0], "SegApproverScheme"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SegApproverScheme"), extendConfig({}, controller.args[2], "SegApproverScheme"));
        SegApproverScheme.setDefaultUnit(voltmx.flex.DP);
        var segApprover = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }, {
                "imgDelete": "icon_delete.png",
                "imgEdit": "imagedrag.png",
                "lblEmail": "Label",
                "lblEmployeeNo": "Label",
                "lblMobileNo": "Label",
                "lblName": "Label"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segApprover",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "segTrans",
            "rowTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxApprover"
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
                "flxApprover": "flxApprover",
                "flxDelete": "flxDelete",
                "flxEdit": "flxEdit",
                "imgDelete": "imgDelete",
                "imgEdit": "imgEdit",
                "lblEmail": "lblEmail",
                "lblEmployeeNo": "lblEmployeeNo",
                "lblMobileNo": "lblMobileNo",
                "lblName": "lblName"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segApprover"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segApprover"), extendConfig({}, controller.args[2], "segApprover"));
        SegApproverScheme.add(segApprover);
        return SegApproverScheme;
    }
})