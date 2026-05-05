define(function() {
    return function(controller) {
        var SuspensionEntries = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "SuspensionEntries",
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
        }, controller.args[0], "SuspensionEntries"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SuspensionEntries"), extendConfig({}, controller.args[2], "SuspensionEntries"));
        SuspensionEntries.setDefaultUnit(voltmx.flex.DP);
        var segSuspendEntry = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "icon_delete.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segSuspendEntry",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "sknSegRowFocus",
            "rowSkin": "sknSegRow",
            "rowTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxSuspensionEntry"
            }),
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "f6f6f600",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDelete": "flxDelete",
                "flxSuspensionEntry": "flxSuspensionEntry",
                "imgDelet": "imgDelet",
                "lblCIFNo": "lblCIFNo",
                "lblCustomerName": "lblCustomerName",
                "lblIDNo": "lblIDNo",
                "lblReason": "lblReason"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segSuspendEntry"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSuspendEntry"), extendConfig({}, controller.args[2], "segSuspendEntry"));
        SuspensionEntries.add(segSuspendEntry);
        SuspensionEntries.compInstData = {}
        return SuspensionEntries;
    }
})