define(function() {
    return function(controller) {
        var SegSuspendList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "SegSuspendList",
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
        }, controller.args[0], "SegSuspendList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SegSuspendList"), extendConfig({}, controller.args[2], "SegSuspendList"));
        SegSuspendList.setDefaultUnit(voltmx.flex.DP);
        var segSuspend = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "data": [{
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }, {
                "imgDelete": "icon_delete.png",
                "lblCiFNoVal": "23280545",
                "lblCustomerNameVal": "Zuri Nkosi",
                "lblDateVal": "DD/MM/YYYY",
                "lblIDNoVal": "111235",
                "lblReasonVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }],
            "groupCells": false,
            "height": "100%",
            "id": "segSuspend",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "segTrans",
            "rowSkin": "segTrans",
            "rowTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxRowSuspend"
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
                "flxRowSuspend": "flxRowSuspend",
                "imgDelete": "imgDelete",
                "lblCiFNoVal": "lblCiFNoVal",
                "lblCustomerNameVal": "lblCustomerNameVal",
                "lblDateVal": "lblDateVal",
                "lblIDNoVal": "lblIDNoVal",
                "lblReasonVal": "lblReasonVal"
            },
            "widgetSkin": "sknSegRow",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segSuspend"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSuspend"), extendConfig({}, controller.args[2], "segSuspend"));
        SegSuspendList.add(segSuspend);
        SegSuspendList.compInstData = {}
        return SegSuspendList;
    }
})