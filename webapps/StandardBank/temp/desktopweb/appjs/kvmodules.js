define('applicationController',{
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.hc.segApprover.SegApproverScheme", {
            "viewName": "SegApproverScheme",
            "controllerName": "SegApproverSchemeController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hc.segApprover",
            "classname": "SegApproverScheme",
            "name": "com.hc.segApprover.SegApproverScheme"
        });
        voltmx.mvc.registry.add("com.hcl.SuspensionEntries.SuspensionEntries", {
            "viewName": "SuspensionEntries",
            "controllerName": "SuspensionEntriesController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.SuspensionEntries",
            "classname": "SuspensionEntries",
            "name": "com.hcl.SuspensionEntries.SuspensionEntries"
        });
        voltmx.mvc.registry.add("com.hcl.addSuspend.AddSuspend", {
            "viewName": "AddSuspend",
            "controllerName": "AddSuspendController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.addSuspend",
            "classname": "AddSuspend",
            "name": "com.hcl.addSuspend.AddSuspend"
        });
        voltmx.mvc.registry.add("com.hcl.dropDown.DropDown", {
            "viewName": "DropDown",
            "controllerName": "DropDownController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.dropDown",
            "classname": "DropDown",
            "name": "com.hcl.dropDown.DropDown"
        });
        voltmx.mvc.registry.add("com.hcl.hdr.FormHeader", {
            "viewName": "FormHeader",
            "controllerName": "FormHeaderController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.hdr",
            "classname": "FormHeader",
            "name": "com.hcl.hdr.FormHeader"
        });
        voltmx.mvc.registry.add("com.hcl.labelField.LabelsField", {
            "viewName": "LabelsField",
            "controllerName": "LabelsFieldController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.labelField",
            "classname": "LabelsField",
            "name": "com.hcl.labelField.LabelsField"
        });
        voltmx.mvc.registry.add("com.hcl.lblList.LabelList", {
            "viewName": "LabelList",
            "controllerName": "LabelListController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.lblList",
            "classname": "LabelList",
            "name": "com.hcl.lblList.LabelList"
        });
        voltmx.mvc.registry.add("com.hcl.lblText.LabelTextBox", {
            "viewName": "LabelTextBox",
            "controllerName": "LabelTextBoxController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.lblText",
            "classname": "LabelTextBox",
            "name": "com.hcl.lblText.LabelTextBox"
        });
        voltmx.mvc.registry.add("com.hcl.lblTextArea.LabelTextArea", {
            "viewName": "LabelTextArea",
            "controllerName": "LabelTextAreaController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.lblTextArea",
            "classname": "LabelTextArea",
            "name": "com.hcl.lblTextArea.LabelTextArea"
        });
        voltmx.mvc.registry.add("com.hcl.listData.ListBoxData", {
            "viewName": "ListBoxData",
            "controllerName": "ListBoxDataController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.listData",
            "classname": "ListBoxData",
            "name": "com.hcl.listData.ListBoxData"
        });
        voltmx.mvc.registry.add("com.hcl.menu.SideMenu", {
            "viewName": "SideMenu",
            "controllerName": "SideMenuController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.menu",
            "classname": "SideMenu",
            "name": "com.hcl.menu.SideMenu"
        });
        voltmx.mvc.registry.add("com.hcl.popup.AlertUp", {
            "viewName": "AlertUp",
            "controllerName": "AlertUpController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.popup",
            "classname": "AlertUp",
            "name": "com.hcl.popup.AlertUp"
        });
        voltmx.mvc.registry.add("com.hcl.schemeList.SchemeList", {
            "viewName": "SchemeList",
            "controllerName": "SchemeListController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.schemeList",
            "classname": "SchemeList",
            "name": "com.hcl.schemeList.SchemeList"
        });
        voltmx.mvc.registry.add("com.hcl.segDropDown.SegDropDown", {
            "viewName": "SegDropDown",
            "controllerName": "SegDropDownController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.segDropDown",
            "classname": "SegDropDown",
            "name": "com.hcl.segDropDown.SegDropDown"
        });
        voltmx.mvc.registry.add("com.hcl.segHdr.segHeader", {
            "viewName": "segHeader",
            "controllerName": "segHeaderController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.segHdr",
            "classname": "segHeader",
            "name": "com.hcl.segHdr.segHeader"
        });
        voltmx.mvc.registry.add("com.hcl.segSuspend.SegSuspendList", {
            "viewName": "SegSuspendList",
            "controllerName": "SegSuspendListController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.segSuspend",
            "classname": "SegSuspendList",
            "name": "com.hcl.segSuspend.SegSuspendList"
        });
        voltmx.mvc.registry.add("com.hcl.srchTextBox.SrchTextBox", {
            "viewName": "SrchTextBox",
            "controllerName": "SrchTextBoxController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.srchTextBox",
            "classname": "SrchTextBox",
            "name": "com.hcl.srchTextBox.SrchTextBox"
        });
        voltmx.mvc.registry.add("com.hcl.subHdr.SubHdr", {
            "viewName": "SubHdr",
            "controllerName": "SubHdrController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.subHdr",
            "classname": "SubHdr",
            "name": "com.hcl.subHdr.SubHdr"
        });
        voltmx.mvc.registry.add("com.hcl.suspenEntryHdr.SuspenEntryHdr", {
            "viewName": "SuspenEntryHdr",
            "controllerName": "SuspenEntryHdrController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.hcl.suspenEntryHdr",
            "classname": "SuspenEntryHdr",
            "name": "com.hcl.suspenEntryHdr.SuspenEntryHdr"
        });
        voltmx.mvc.registry.add("com.riskrating.chart.RiskRateChart", {
            "viewName": "RiskRateChart",
            "controllerName": "RiskRateChartController",
            "appName": "SBCommon"
        });
        voltmx.application.registerMaster({
            "namespace": "com.riskrating.chart",
            "classname": "RiskRateChart",
            "name": "com.riskrating.chart.RiskRateChart"
        });
        voltmx.mvc.registry.add("com.konymp.halfdonutup", {
            "viewName": "halfdonutup",
            "controllerName": "halfdonutupController",
            "appName": "Customer360"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "halfdonutup",
            "name": "com.konymp.halfdonutup"
        });
        voltmx.mvc.registry.add("com.konymp.linechart", {
            "viewName": "linechart",
            "controllerName": "linechartController",
            "appName": "Customer360"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "linechart",
            "name": "com.konymp.linechart"
        });
        voltmx.mvc.registry.add("com.konymp.Login", {
            "viewName": "Login",
            "controllerName": "LoginController",
            "appName": "StandardBank"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "Login",
            "name": "com.konymp.Login"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxApprover", {
            "viewName": "flxApprover",
            "controllerName": "flxApproverController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxDropDown", {
            "viewName": "flxDropDown",
            "controllerName": "flxDropDownController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxSchemeList", {
            "viewName": "flxSchemeList",
            "controllerName": "flxSchemeListController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxRowSuspend", {
            "viewName": "flxRowSuspend",
            "controllerName": "flxRowSuspendController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxSuspensionEntry", {
            "viewName": "flxSuspensionEntry",
            "controllerName": "flxSuspensionEntryController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxSecHdrSuspend", {
            "viewName": "flxSecHdrSuspend",
            "controllerName": "flxSecHdrSuspendController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxRow", {
            "viewName": "flxRow",
            "controllerName": "flxRowController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxRowItems", {
            "viewName": "flxRowItems",
            "controllerName": "flxRowItemsController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxSegSecHdr", {
            "viewName": "flxSegSecHdr",
            "controllerName": "flxSegSecHdrController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController",
            "appName": "Customer360"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController",
            "appName": "Customer360"
        });
        voltmx.mvc.registry.add("CopyFBox0ec887391a0be42", {
            "viewName": "CopyFBox0ec887391a0be42",
            "controllerName": "CopyFBox0ec887391a0be42Controller",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController",
            "appName": "StandardBank"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController",
            "appName": "StandardBank"
        });
        voltmx.mvc.registry.add("frmHome", {
            "viewName": "frmHome",
            "controllerName": "frmHomeController",
            "appName": "SBCommon"
        });
        voltmx.mvc.registry.add("frmAddScheme", {
            "viewName": "frmAddScheme",
            "controllerName": "frmAddSchemeController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmRemoveScheme", {
            "viewName": "frmRemoveScheme",
            "controllerName": "frmRemoveSchemeController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmSchHisDetails", {
            "viewName": "frmSchHisDetails",
            "controllerName": "frmSchHisDetailsController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmSchemeApprover", {
            "viewName": "frmSchemeApprover",
            "controllerName": "frmSchemeApproverController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmSchemeDetails", {
            "viewName": "frmSchemeDetails",
            "controllerName": "frmSchemeDetailsController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmSchemeList", {
            "viewName": "frmSchemeList",
            "controllerName": "frmSchemeListController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmSchemeReqHistory", {
            "viewName": "frmSchemeReqHistory",
            "controllerName": "frmSchemeReqHistoryController",
            "appName": "ManageScheme"
        });
        voltmx.mvc.registry.add("frmCustomer", {
            "viewName": "frmCustomer",
            "controllerName": "frmCustomerController",
            "appName": "Customer360"
        });
        voltmx.mvc.registry.add("frmAddSuspend", {
            "viewName": "frmAddSuspend",
            "controllerName": "frmAddSuspendController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("frmApprovers", {
            "viewName": "frmApprovers",
            "controllerName": "frmApproversController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("frmRemoveSuspend", {
            "viewName": "frmRemoveSuspend",
            "controllerName": "frmRemoveSuspendController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("frmRequestHistory", {
            "viewName": "frmRequestHistory",
            "controllerName": "frmRequestHistoryController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("frmSusHistoryDetails", {
            "viewName": "frmSusHistoryDetails",
            "controllerName": "frmSusHistoryDetailsController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("frmSuspendList", {
            "viewName": "frmSuspendList",
            "controllerName": "frmSuspendListController",
            "appName": "SuspendList"
        });
        voltmx.mvc.registry.add("frmLogin", {
            "viewName": "frmLogin",
            "controllerName": "frmLoginController",
            "appName": "StandardBank"
        });
        voltmx.mvc.registry.add("frmSBHome", {
            "viewName": "frmSBHome",
            "controllerName": "frmSBHomeController",
            "appName": "StandardBank"
        });
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation({
            "friendlyName": "frmLogin",
            "appName": "StandardBank"
        }).navigate();
    }
});

define("com/hc/segApprover/SegApproverScheme/userSegApproverSchemeController", [],function() {
    return {};
});
define("com/hc/segApprover/SegApproverScheme/SegApproverSchemeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hc/segApprover/SegApproverScheme/SegApproverSchemeController", ["com/hc/segApprover/SegApproverScheme/userSegApproverSchemeController", "com/hc/segApprover/SegApproverScheme/SegApproverSchemeControllerActions"], function() {
    var controller = require("com/hc/segApprover/SegApproverScheme/userSegApproverSchemeController");
    var actions = require("com/hc/segApprover/SegApproverScheme/SegApproverSchemeControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hc/segApprover/SegApproverScheme/SegApproverScheme',[],function() {
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
;
define("com/hcl/SuspensionEntries/SuspensionEntries/userSuspensionEntriesController", [],function() {
    return {};
});
define("com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesController", ["com/hcl/SuspensionEntries/SuspensionEntries/userSuspensionEntriesController", "com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesControllerActions"], function() {
    var controller = require("com/hcl/SuspensionEntries/SuspensionEntries/userSuspensionEntriesController");
    var actions = require("com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntries',[],function() {
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
;
define("com/hcl/addSuspend/AddSuspend/userAddSuspendController", [],function() {
    return {};
});
define("com/hcl/addSuspend/AddSuspend/AddSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/addSuspend/AddSuspend/AddSuspendController", ["com/hcl/addSuspend/AddSuspend/userAddSuspendController", "com/hcl/addSuspend/AddSuspend/AddSuspendControllerActions"], function() {
    var controller = require("com/hcl/addSuspend/AddSuspend/userAddSuspendController");
    var actions = require("com/hcl/addSuspend/AddSuspend/AddSuspendControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/addSuspend/AddSuspend/AddSuspend',[],function() {
    return function(controller) {
        var AddSuspend = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "slFFocusbox",
            "id": "AddSuspend",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "AddSuspend"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "AddSuspend"), extendConfig({}, controller.args[2], "AddSuspend"));
        AddSuspend.setDefaultUnit(voltmx.flex.DP);
        var lblAddList = new voltmx.ui.Label(extendConfig({
            "id": "lblAddList",
            "isVisible": true,
            "left": "24dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "16dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddList"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddList"), extendConfig({}, controller.args[2], "lblAddList"));
        var flxAddSource = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "40dp",
            "id": "flxAddSource",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "sknFlxTextBox",
            "top": "25dp",
            "width": "96%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxAddSource"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAddSource"), extendConfig({}, controller.args[2], "flxAddSource"));
        flxAddSource.setDefaultUnit(voltmx.flex.DP);
        var lblAddSource = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblAddSource",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "3dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAddSource"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [16, 0, 0, 0],
            "paddingInPixel": true
        }, controller.args[1], "lblAddSource"), extendConfig({}, controller.args[2], "lblAddSource"));
        var imgDropDwn = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgDropDwn",
            "isVisible": true,
            "right": "15dp",
            "skin": "slImage",
            "src": "icon_dropdwn.png",
            "top": "0",
            "width": "35dp"
        }, controller.args[0], "imgDropDwn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDropDwn"), extendConfig({}, controller.args[2], "imgDropDwn"));
        flxAddSource.add(lblAddSource, imgDropDwn);
        var flxAddContainer = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxAddContainer",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "60dp",
            "width": "96%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxAddContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxAddContainer"), extendConfig({}, controller.args[2], "flxAddContainer"));
        flxAddContainer.setDefaultUnit(voltmx.flex.DP);
        var segAdd = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblAdd": "Label"
            }],
            "groupCells": false,
            "id": "segAdd",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAddSuspendRow": "flxAddSuspendRow",
                "lblAdd": "lblAdd"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segAdd"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segAdd"), extendConfig({}, controller.args[2], "segAdd"));
        flxAddContainer.add(segAdd);
        AddSuspend.add(lblAddList, flxAddSource, flxAddContainer);
        AddSuspend.compInstData = {}
        return AddSuspend;
    }
})
;
define("com/hcl/dropDown/DropDown/userDropDownController", [],function() {
    return {};
});
define("com/hcl/dropDown/DropDown/DropDownControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/dropDown/DropDown/DropDownController", ["com/hcl/dropDown/DropDown/userDropDownController", "com/hcl/dropDown/DropDown/DropDownControllerActions"], function() {
    var controller = require("com/hcl/dropDown/DropDown/userDropDownController");
    var actions = require("com/hcl/dropDown/DropDown/DropDownControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/dropDown/DropDown/DropDown',[],function() {
    return function(controller) {
        var DropDown = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100dp",
            "id": "DropDown",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "DropDown"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "DropDown"), extendConfig({}, controller.args[2], "DropDown"));
        DropDown.setDefaultUnit(voltmx.flex.DP);
        var lblDropDownVal = new voltmx.ui.Label(extendConfig({
            "height": "16dp",
            "id": "lblDropDownVal",
            "isVisible": true,
            "left": "24dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDropDownVal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDropDownVal"), extendConfig({}, controller.args[2], "lblDropDownVal"));
        var flxDropDown = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxTextBox",
            "height": "50dp",
            "id": "flxDropDown",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "24dp",
            "isModalContainer": false,
            "right": "24dp",
            "skin": "sknFlxTextBox",
            "top": "0dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxDropDown"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDropDown"), extendConfig({}, controller.args[2], "flxDropDown"));
        flxDropDown.setDefaultUnit(voltmx.flex.DP);
        var lblDropDwn = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDropDwn",
            "isVisible": true,
            "left": "12dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "16dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDropDwn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDropDwn"), extendConfig({}, controller.args[2], "lblDropDwn"));
        var imgDropDwn = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgDropDwn",
            "isVisible": true,
            "right": "40dp",
            "skin": "slImage",
            "src": "icon_dropdwn.png",
            "top": "28dp",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgDropDwn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDropDwn"), extendConfig({}, controller.args[2], "imgDropDwn"));
        var flxSegDropDown = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxSegDropDown",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxTextBox",
            "top": "51dp",
            "zIndex": 4,
            "appName": "SBCommon"
        }, controller.args[0], "flxSegDropDown"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSegDropDown"), extendConfig({}, controller.args[2], "flxSegDropDown"));
        flxSegDropDown.setDefaultUnit(voltmx.flex.DP);
        var segDropDown = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }, {
                "lblDropDwn": "Label"
            }],
            "groupCells": false,
            "id": "segDropDown",
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
                "friendlyName": "flxDropDown"
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
                "flxDropDown": "flxDropDown",
                "lblDropDwn": "lblDropDwn"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segDropDown"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDropDown"), extendConfig({}, controller.args[2], "segDropDown"));
        flxSegDropDown.add(segDropDown);
        flxDropDown.add(lblDropDwn, imgDropDwn, flxSegDropDown);
        DropDown.add(lblDropDownVal, flxDropDown);
        DropDown.compInstData = {}
        return DropDown;
    }
})
;
define("com/hcl/hdr/FormHeader/userFormHeaderController", [],function() {
    return {};
});
define("com/hcl/hdr/FormHeader/FormHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/hdr/FormHeader/FormHeaderController", ["com/hcl/hdr/FormHeader/userFormHeaderController", "com/hcl/hdr/FormHeader/FormHeaderControllerActions"], function() {
    var controller = require("com/hcl/hdr/FormHeader/userFormHeaderController");
    var actions = require("com/hcl/hdr/FormHeader/FormHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/hdr/FormHeader/FormHeader',[],function() {
    return function(controller) {
        var FormHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "sknFlxTrans",
            "height": "8%",
            "id": "FormHeader",
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
        }, controller.args[0], "FormHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FormHeader"), extendConfig({}, controller.args[2], "FormHeader"));
        FormHeader.setDefaultUnit(voltmx.flex.DP);
        var lblHdr = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHdr",
            "isVisible": true,
            "left": "24dp",
            "skin": "sknLblHeading2",
            "text": "Label",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHdr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHdr"), extendConfig({}, controller.args[2], "lblHdr"));
        FormHeader.add(lblHdr);
        FormHeader.compInstData = {}
        return FormHeader;
    }
})
;
define("com/hcl/labelField/LabelsField/userLabelsFieldController", [],function() {
    return {};
});
define("com/hcl/labelField/LabelsField/LabelsFieldControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/labelField/LabelsField/LabelsFieldController", ["com/hcl/labelField/LabelsField/userLabelsFieldController", "com/hcl/labelField/LabelsField/LabelsFieldControllerActions"], function() {
    var controller = require("com/hcl/labelField/LabelsField/userLabelsFieldController");
    var actions = require("com/hcl/labelField/LabelsField/LabelsFieldControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/labelField/LabelsField/LabelsField',[],function() {
    return function(controller) {
        var LabelsField = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "LabelsField",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "LabelsField"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "LabelsField"), extendConfig({}, controller.args[2], "LabelsField"));
        LabelsField.setDefaultUnit(voltmx.flex.DP);
        var lblDetail = new voltmx.ui.Label(extendConfig({
            "id": "lblDetail",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetail"), extendConfig({}, controller.args[2], "lblDetail"));
        var lblDetailValue = new voltmx.ui.Label(extendConfig({
            "id": "lblDetailValue",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblHeading4Bold",
            "text": "Label",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDetailValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetailValue"), extendConfig({}, controller.args[2], "lblDetailValue"));
        LabelsField.add(lblDetail, lblDetailValue);
        LabelsField.compInstData = {}
        return LabelsField;
    }
})
;
define("com/hcl/lblList/LabelList/userLabelListController", [],function() {
    return {};
});
define("com/hcl/lblList/LabelList/LabelListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/lblList/LabelList/LabelListController", ["com/hcl/lblList/LabelList/userLabelListController", "com/hcl/lblList/LabelList/LabelListControllerActions"], function() {
    var controller = require("com/hcl/lblList/LabelList/userLabelListController");
    var actions = require("com/hcl/lblList/LabelList/LabelListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/lblList/LabelList/LabelList',[],function() {
    return function(controller) {
        var LabelList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "LabelList",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "LabelList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "LabelList"), extendConfig({}, controller.args[2], "LabelList"));
        LabelList.setDefaultUnit(voltmx.flex.DP);
        var lblDetail = new voltmx.ui.Label(extendConfig({
            "id": "lblDetail",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDetail"), extendConfig({}, controller.args[2], "lblDetail"));
        var flxList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTextBox",
            "top": "4dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxList"), extendConfig({}, controller.args[2], "flxList"));
        flxList.setDefaultUnit(voltmx.flex.DP);
        var listData = new voltmx.ui.ListBox(extendConfig({
            "focusSkin": "defListBoxFocus",
            "id": "listData",
            "isVisible": true,
            "left": "0dp",
            "masterData": [
                ["lb1", "Placeholder One"],
                ["lb2", "Placeholder Two"],
                ["lb3", "Placeholder Three"]
            ],
            "skin": "sknListTrans",
            "top": "0dp",
            "width": "98%",
            "zIndex": 1
        }, controller.args[0], "listData"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [16, 0, 0, 0],
            "paddingInPixel": true
        }, controller.args[1], "listData"), extendConfig({
            "multiSelect": false
        }, controller.args[2], "listData"));
        var flxDropDwnList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxDropDwnList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "sknFlxImagList",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxDropDwnList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDropDwnList"), extendConfig({}, controller.args[2], "flxDropDwnList"));
        flxDropDwnList.setDefaultUnit(voltmx.flex.DP);
        var imgDropDwn = new voltmx.ui.Image2(extendConfig({
            "height": "35dp",
            "id": "imgDropDwn",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_dropdwn.png",
            "top": "4dp",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgDropDwn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDropDwn"), extendConfig({}, controller.args[2], "imgDropDwn"));
        flxDropDwnList.add(imgDropDwn);
        flxList.add(listData, flxDropDwnList);
        LabelList.add(lblDetail, flxList);
        LabelList.compInstData = {}
        return LabelList;
    }
})
;
define("com/hcl/lblText/LabelTextBox/userLabelTextBoxController", [],function() {
    return {};
});
define("com/hcl/lblText/LabelTextBox/LabelTextBoxControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/lblText/LabelTextBox/LabelTextBoxController", ["com/hcl/lblText/LabelTextBox/userLabelTextBoxController", "com/hcl/lblText/LabelTextBox/LabelTextBoxControllerActions"], function() {
    var controller = require("com/hcl/lblText/LabelTextBox/userLabelTextBoxController");
    var actions = require("com/hcl/lblText/LabelTextBox/LabelTextBoxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/lblText/LabelTextBox/LabelTextBox',[],function() {
    return function(controller) {
        var LabelTextBox = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "LabelTextBox",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "LabelTextBox"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "LabelTextBox"), extendConfig({}, controller.args[2], "LabelTextBox"));
        LabelTextBox.setDefaultUnit(voltmx.flex.DP);
        var lblText = new voltmx.ui.Label(extendConfig({
            "id": "lblText",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText"), extendConfig({}, controller.args[2], "lblText"));
        var txtBox = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "40dp",
            "id": "txtBox",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "placeholder": "sfdfg",
            "secureTextEntry": false,
            "skin": "sknTxtBxf6f8fa",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "txtBox"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [16, 3, 1, 3],
            "paddingInPixel": true
        }, controller.args[1], "txtBox"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "sknPlaceHdr"
        }, controller.args[2], "txtBox"));
        LabelTextBox.add(lblText, txtBox);
        LabelTextBox.compInstData = {}
        return LabelTextBox;
    }
})
;
define("com/hcl/lblTextArea/LabelTextArea/userLabelTextAreaController", [],function() {
    return {};
});
define("com/hcl/lblTextArea/LabelTextArea/LabelTextAreaControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/lblTextArea/LabelTextArea/LabelTextAreaController", ["com/hcl/lblTextArea/LabelTextArea/userLabelTextAreaController", "com/hcl/lblTextArea/LabelTextArea/LabelTextAreaControllerActions"], function() {
    var controller = require("com/hcl/lblTextArea/LabelTextArea/userLabelTextAreaController");
    var actions = require("com/hcl/lblTextArea/LabelTextArea/LabelTextAreaControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/lblTextArea/LabelTextArea/LabelTextArea',[],function() {
    return function(controller) {
        var LabelTextArea = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "LabelTextArea",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "LabelTextArea"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "LabelTextArea"), extendConfig({}, controller.args[2], "LabelTextArea"));
        LabelTextArea.setDefaultUnit(voltmx.flex.DP);
        var lblText = new voltmx.ui.Label(extendConfig({
            "id": "lblText",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblText"), extendConfig({}, controller.args[2], "lblText"));
        var FlexContainer0e91e04f1e8e74a = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "80dp",
            "id": "FlexContainer0e91e04f1e8e74a",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "FlexContainer0e91e04f1e8e74a"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexContainer0e91e04f1e8e74a"), extendConfig({}, controller.args[2], "FlexContainer0e91e04f1e8e74a"));
        FlexContainer0e91e04f1e8e74a.setDefaultUnit(voltmx.flex.DP);
        var txtArea = new voltmx.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "focusSkin": "sknTxtArea",
            "height": "100%",
            "id": "txtArea",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "numberOfVisibleLines": 3,
            "placeholder": "Placeholder",
            "skin": "sknTxtArea",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtArea"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [10, 10, 10, 10],
            "paddingInPixel": true
        }, controller.args[1], "txtArea"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "sknTxtAraPlaceHdr"
        }, controller.args[2], "txtArea"));
        FlexContainer0e91e04f1e8e74a.add(txtArea);
        LabelTextArea.add(lblText, FlexContainer0e91e04f1e8e74a);
        LabelTextArea.compInstData = {}
        return LabelTextArea;
    }
})
;
define("com/hcl/listData/ListBoxData/userListBoxDataController", [],function() {
    return {};
});
define("com/hcl/listData/ListBoxData/ListBoxDataControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/listData/ListBoxData/ListBoxDataController", ["com/hcl/listData/ListBoxData/userListBoxDataController", "com/hcl/listData/ListBoxData/ListBoxDataControllerActions"], function() {
    var controller = require("com/hcl/listData/ListBoxData/userListBoxDataController");
    var actions = require("com/hcl/listData/ListBoxData/ListBoxDataControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/listData/ListBoxData/ListBoxData',[],function() {
    return function(controller) {
        var ListBoxData = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "ListBoxData",
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
        }, controller.args[0], "ListBoxData"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ListBoxData"), extendConfig({}, controller.args[2], "ListBoxData"));
        ListBoxData.setDefaultUnit(voltmx.flex.DP);
        var lblListName = new voltmx.ui.Label(extendConfig({
            "id": "lblListName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "16dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblListName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblListName"), extendConfig({}, controller.args[2], "lblListName"));
        ListBoxData.add(lblListName);
        ListBoxData.compInstData = {}
        return ListBoxData;
    }
})
;
define("com/hcl/menu/SideMenu/userSideMenuController", [],function() {
    return {
        CONFIG: {
            MIN_WIDTH: "60dp",
            MAX_WIDTH: "200dp",
            ANIMATION_DURATION: 0.25
        },
        masterData: [{
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Simple Light Touch(SLT)",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "Loan Eligibility",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmSuspendList"
                    }
                }, {
                    lblMenuItem: "Scored Offer View(PPB)",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmRequestHistory"
                    }
                }, {
                    lblMenuItem: "Scored Offer View(BCB)",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmAddSuspend"
                    }
                }, {
                    lblMenuItem: "Offer Manger",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmRemoveSuspend"
                    }
                }, {
                    lblMenuItem: "Scoring API",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmApprovers"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Complex Lending",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "Originate Application",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmSuspendList"
                    }
                }, ]
            }, {
                header: {
                    imgIcon: "icon_view.png",
                    lblSectionTitle: "Customer 360",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "View Customer Info",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "View Application",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Financial Spreading & Risk Rating",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "Spread Financials",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "Rate Counterparty",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "View BBRS Ratings",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "BBRS Insights",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Queue Manager",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "POR Queues",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "Branch (all)",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "RWAE (all)",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "RWAE my queue",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Suspend List",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "Suspend List",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmSuspendList"
                    }
                }, {
                    lblMenuItem: "Request History",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmRequestHistory"
                    }
                }, {
                    lblMenuItem: "Add Suspend",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmAddSuspend"
                    }
                }, {
                    lblMenuItem: "Remove Suspend",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmRemoveSuspend"
                    }
                }, {
                    lblMenuItem: "Approvers",
                    formID: {
                        "appName": "SuspendList",
                        "friendlyName": "frmApprovers"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_manage.png",
                    lblSectionTitle: "Scheme Maintenance",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "Scheme List",
                    formID: {
                        "appName": "ManageScheme",
                        "friendlyName": "frmSchemeList"
                    }
                }, {
                    lblMenuItem: "Request History",
                    formID: {
                        "appName": "ManageScheme",
                        "friendlyName": "frmSchemeReqHistory"
                    }
                }, {
                    lblMenuItem: "Add Scheme",
                    formID: {
                        "appName": "ManageScheme",
                        "friendlyName": "frmAddScheme"
                    }
                }, {
                    lblMenuItem: "Remove Scheme",
                    formID: {
                        "appName": "ManageScheme",
                        "friendlyName": "frmRemoveScheme"
                    }
                }, {
                    lblMenuItem: "Approvers",
                    formID: {
                        "appName": "ManageScheme",
                        "friendlyName": "frmSchemeApprover"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Reporting / Dashboard",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "SLT Dashboard",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "CAMS Dashboard",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }]
            }, {
                header: {
                    imgIcon: "icon_suspend.png",
                    lblSectionTitle: "Credit Solution Engineering",
                    isExpanded: false
                },
                rows: [{
                    lblMenuItem: "Demand Planning App",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }, {
                    lblMenuItem: "Dev Ops Board",
                    formID: {
                        "appName": "Customer360",
                        "friendlyName": "frmCustomer"
                    }
                }]
            }
            //       {
            //         header: { imgIcon: "icon_suspend.png",lblSectionTitle: "Home", isExpanded: false,
            //                  formID: { "appName": "StandardBank", "friendlyName": "frmSBHome" }
            //                 },
            //       },
        ],
        constructor: function() {
            this.view.flxUserDetails.isVisible = false;
            this.view.preShow = this.invokePreShow.bind(this);
            this.view.segMenu.onRowClick = this.onRowItemClick.bind(this);
            this.view.flxSideMenu.width = '60dp';
            this.view.flxSideMenu.onHover = (widgetRef, context) => {
                    if (context.eventType === "enter") {
                        this.expandSidebar1();
                    } else if (context.eventType === "leave") {
                        this.collapseSidebar(); // Assuming you have a collapse function
                    }
                }
                //this.view.flxSegMenu.onHover = this.handleMenuHover.bind(this);
        },
        expandSidebar1: function() {
            var animConfig = {
                duration: 0.3,
                fillMode: voltmx.anim.FILL_MODE_FORWARDS
            };
            // Animate Side Menu
            this.view.flxSideMenu.animate(voltmx.ui.createAnimation({
                100: {
                    width: "250dp"
                }
            }), animConfig, {});
            // Animate Main Content
            //     this.view.flxMainContent.animate(
            //         voltmx.ui.createAnimation({ 100: { left: "250dp" } }), 
            //         animConfig, 
            //         {}
            //     );
            this.isCollapsed = false;
            this.view.flxUserDetails.isVisible = true;
            //this._updateMenuToIconAndText();
        },
        collapseSidebar: function() {
            var anim = voltmx.ui.createAnimation({
                100: {
                    width: "60dp"
                }
            });
            this.view.flxSideMenu.animate(anim, {
                duration: 0.3,
                fillMode: voltmx.anim.FILL_MODE_FORWARDS
            }, {});
            //     this.view.flxMainContent.animate(
            //       voltmx.ui.createAnimation({
            //         100: { left: "70dp" }
            //       }),
            //       { duration: 0.3 },
            //       {}
            //     );
            this.isCollapsed = true;
            this.view.flxUserDetails.isVisible = false;
            //this._updateMenuToIconOnly();
        },
        invokePreShow: function() {
            try {
                this.view.segMenu.widgetDataMap = {
                    lblSectionTitle: "lblSectionTitle",
                    imgIcon: "imgIcon",
                    lblMenuItem: "lblMenuItem",
                    flxSegSecHdr: "flxSegSecHdr"
                };
                // this.view.flxSegMenu.width = this.CONFIG.MIN_WIDTH;
                // Check if we are currently on the Home Form
                const currentForm = voltmx.application.getCurrentForm().id;
                // ES6 Ternary: If landing on Home, collapse all; otherwise, keep current state
                currentForm === "frmSBHome" ? this.collapseAllSections() : this.refreshMenu();
            } catch (e) {
                throw new Error(`Menu Initialization Failed: ${e.message}`);
            }
        },
        /**
         * Resets all sections to a collapsed state
         */
        collapseAllSections: function() {
            // ES6 Spread/forEach logic for immutability and performance
            this.masterData.forEach(section => {
                section.header.isExpanded = false;
            });
            this.refreshMenu();
        },
        handleMenuHover: function(widget, context) {
            // context.eventType provides "enter" or "leave"
            if (context.eventType === constants.ONHOVER_MOUSE_ENTER) {
                this.animateMenu(this.CONFIG.MAX_WIDTH);
            } else if (context.eventType === constants.ONHOVER_MOUSE_LEAVE) {
                this.animateMenu(this.CONFIG.MIN_WIDTH);
                // Optional: Collapse any open accordion sections when mouse leaves
                this.collapseAllSections();
            }
        },
        animateMenu: function(targetWidth) {
            this.view.flxSideMenu.animate(voltmx.ui.createAnimation({
                "100": {
                    "width": targetWidth,
                    "stepConfig": {
                        "timingFunction": constants.ANIMATION_SERIES_EASE_IN_OUT
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": constants.ANIMATION_DIRECTION_FORWARDS,
                "duration": this.CONFIG.ANIMATION_DURATION
            }, {
                "animationEnd": function() {}
            });
        },
        refreshMenu: function() {
            const segmentData = this.masterData.map((section, index) => {
                const headerObj = {
                    lblSectionTitle: section.header.lblSectionTitle,
                    imgIcon: {
                        src: section.header.imgIcon
                    },
                    flxSegSecHdr: {
                        onClick: () => this.onSectionClicked(index)
                    }
                };
                const displayRows = section.header.isExpanded ? section.rows : [];
                return [headerObj, displayRows];
            });
            this.view.segMenu.setData(segmentData);
            // Layout Batching Performance: Ensures UI doesn't flicker during expand/collapse
            this.view.forceLayout();
        },
        onSectionClicked: function(sectionIndex) {
            const section = this.masterData[sectionIndex];
            // 1. Check if the clicked section is "Home"
            if (section.header.lblSectionTitle === "Home") {
                try {
                    const nav = new voltmx.mvc.Navigation(section.header.formID);
                    nav.navigate();
                    return; // Exit function so it doesn't try to expand
                } catch (e) {
                    voltmx.print("Home Navigation Failed: " + e.message);
                }
            }
            // 2. Normal Accordion Logic for other sections
            const currentState = section.header.isExpanded;
            this.masterData.forEach(item => {
                item.header.isExpanded = false;
            });
            section.header.isExpanded = !currentState;
            this.refreshMenu();
        },
        onRowItemClick: function() {
            const selectedItem = this.view.segMenu.selectedRowItems[0];
            if (selectedItem && selectedItem.formID) {
                // Return Promise to handle navigation asynchronously if needed
                return new Promise((resolve, reject) => {
                    try {
                        const nav = new voltmx.mvc.Navigation(selectedItem.formID);
                        nav.navigate();
                        resolve();
                    } catch (e) {
                        // Throwing exception instead of print for better debugging
                        reject(new Error("Navigation failed: " + e.message));
                    }
                });
            }
        }
    };
});
define("com/hcl/menu/SideMenu/SideMenuControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/menu/SideMenu/SideMenuController", ["com/hcl/menu/SideMenu/userSideMenuController", "com/hcl/menu/SideMenu/SideMenuControllerActions"], function() {
    var controller = require("com/hcl/menu/SideMenu/userSideMenuController");
    var actions = require("com/hcl/menu/SideMenu/SideMenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/menu/SideMenu/SideMenu',[],function() {
    return function(controller) {
        var SideMenu = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "100%",
            "id": "SideMenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 10,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SideMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SideMenu"), extendConfig({}, controller.args[2], "SideMenu"));
        SideMenu.setDefaultUnit(voltmx.flex.DP);
        var flxSideMenu = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSideMenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhiteBrd",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 10,
            "appName": "SBCommon"
        }, controller.args[0], "flxSideMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSideMenu"), extendConfig({}, controller.args[2], "flxSideMenu"));
        flxSideMenu.setDefaultUnit(voltmx.flex.DP);
        var flxLogo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "8%",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "250dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxLogo"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogo"), extendConfig({}, controller.args[2], "flxLogo"));
        flxLogo.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "60dp",
            "id": "imgLogo",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "sblogo.png",
            "width": "60dp",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        var Label0cff1e13b3a6943 = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "60dp",
            "id": "Label0cff1e13b3a6943",
            "isVisible": true,
            "left": "30dp",
            "right": "0dp",
            "skin": "sknLblHeading2",
            "text": "Standard Bank",
            "zIndex": 1
        }, controller.args[0], "Label0cff1e13b3a6943"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Label0cff1e13b3a6943"), extendConfig({}, controller.args[2], "Label0cff1e13b3a6943"));
        flxLogo.add(imgLogo, Label0cff1e13b3a6943);
        var flxSegMenu = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "64dp",
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxSegMenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
            "skin": "sknFlxSrcTrans",
            "top": "120dp",
            "verticalScrollIndicator": true,
            "width": "250dp",
            "zIndex": 1
        }, controller.args[0], "flxSegMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSegMenu"), extendConfig({}, controller.args[2], "flxSegMenu"));
        flxSegMenu.setDefaultUnit(voltmx.flex.DP);
        var segMenu = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [
                [{
                        "imgIcon": "imagedrag.png",
                        "lblMenuItem": "Suspend List",
                        "lblSectionTitle": "Label"
                    },
                    [{
                        "lblMenuItem": "Master Suspend List"
                    }, {
                        "lblMenuItem": "Request List"
                    }, {
                        "lblMenuItem": "Approve List"
                    }]
                ],
                [{
                        "imgIcon": "imagedrag.png",
                        "lblMenuItem": "Customer 360",
                        "lblSectionTitle": "Label"
                    },
                    [{
                        "lblMenuItem": "Customer Data"
                    }]
                ]
            ],
            "groupCells": false,
            "id": "segMenu",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowSkin": "segTrans",
            "rowTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxRowItems"
            }),
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "sectionHeaderTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxSegSecHdr"
            }),
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "FlexGroup0a043cf8cc66045": "FlexGroup0a043cf8cc66045",
                "flxLine": "flxLine",
                "flxRowItems": "flxRowItems",
                "flxSegSecHdr": "flxSegSecHdr",
                "imgIcon": "imgIcon",
                "lblMenuItem": "lblMenuItem",
                "lblSectionTitle": "lblSectionTitle"
            },
            "width": "250dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segMenu"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMenu"), extendConfig({}, controller.args[2], "segMenu"));
        flxSegMenu.add(segMenu);
        var filxHome = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "70dp",
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "64dp",
            "id": "filxHome",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "width": "250dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "filxHome"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "filxHome"), extendConfig({}, controller.args[2], "filxHome"));
        filxHome.setDefaultUnit(voltmx.flex.DP);
        var lblHome = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHome",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblHeading5",
            "text": "Home",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHome"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHome"), extendConfig({}, controller.args[2], "lblHome"));
        var CopyimgLogout0d29fe4496d0f49 = new voltmx.ui.Image2(extendConfig({
            "centerX": "85%",
            "centerY": "50%",
            "height": "35dp",
            "id": "CopyimgLogout0d29fe4496d0f49",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_logout.png",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "CopyimgLogout0d29fe4496d0f49"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgLogout0d29fe4496d0f49"), extendConfig({}, controller.args[2], "CopyimgLogout0d29fe4496d0f49"));
        filxHome.add(lblHome, CopyimgLogout0d29fe4496d0f49);
        var flxUserDetails = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "64dp",
            "id": "flxUserDetails",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "width": "250dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxUserDetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxUserDetails"), extendConfig({}, controller.args[2], "flxUserDetails"));
        flxUserDetails.setDefaultUnit(voltmx.flex.DP);
        var lblUserName = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblUserName",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblHeading5",
            "text": "User Name",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({}, controller.args[2], "lblUserName"));
        var imgLogout = new voltmx.ui.Image2(extendConfig({
            "centerX": "85%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgLogout",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_logout.png",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgLogout"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogout"), extendConfig({}, controller.args[2], "imgLogout"));
        flxUserDetails.add(lblUserName, imgLogout);
        flxSideMenu.add(flxLogo, flxSegMenu, filxHome, flxUserDetails);
        SideMenu.add(flxSideMenu);
        SideMenu.compInstData = {}
        return SideMenu;
    }
})
;
define("com/hcl/popup/AlertUp/userAlertUpController", [],function() {
    return {};
});
define("com/hcl/popup/AlertUp/AlertUpControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/popup/AlertUp/AlertUpController", ["com/hcl/popup/AlertUp/userAlertUpController", "com/hcl/popup/AlertUp/AlertUpControllerActions"], function() {
    var controller = require("com/hcl/popup/AlertUp/userAlertUpController");
    var actions = require("com/hcl/popup/AlertUp/AlertUpControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/popup/AlertUp/AlertUp',[],function() {
    return function(controller) {
        var AlertUp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "isMaster": true,
            "id": "AlertUp",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxWhiteBrd",
            "width": "400dp",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "AlertUp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "AlertUp"), extendConfig({}, controller.args[2], "AlertUp"));
        AlertUp.setDefaultUnit(voltmx.flex.DP);
        var imgAlert = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "65dp",
            "id": "imgAlert",
            "isVisible": true,
            "left": "596dp",
            "skin": "slImage",
            "src": "icon_alertcheck.png",
            "top": "32dp",
            "width": "65dp",
            "zIndex": 1
        }, controller.args[0], "imgAlert"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAlert"), extendConfig({}, controller.args[2], "imgAlert"));
        var lblAlertHdr = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAlertHdr",
            "isVisible": true,
            "left": "650dp",
            "skin": "sknLblHeading2",
            "text": "Are you sure?",
            "top": "32dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAlertHdr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAlertHdr"), extendConfig({}, controller.args[2], "lblAlertHdr"));
        var lblAlertMessg = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAlertMessg",
            "isVisible": true,
            "left": "646dp",
            "skin": "sknLblHeading5",
            "text": "Are you sure you want to exist the session?",
            "top": "32dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAlertMessg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAlertMessg"), extendConfig({}, controller.args[2], "lblAlertMessg"));
        var lblAlertMsg2 = new voltmx.ui.Label(extendConfig({
            "bottom": "32dp",
            "centerX": "50%",
            "id": "lblAlertMsg2",
            "isVisible": true,
            "skin": "sknLblHeading5",
            "text": "All entries added will be discarded.",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAlertMsg2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAlertMsg2"), extendConfig({}, controller.args[2], "lblAlertMsg2"));
        var flxBtnsExist = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "32dp",
            "centerX": "50%",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxBtnsExist",
            "isVisible": false,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "width": "300dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxBtnsExist"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxBtnsExist"), extendConfig({}, controller.args[2], "flxBtnsExist"));
        flxBtnsExist.setDefaultUnit(voltmx.flex.DP);
        var btnCancel = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnGrey",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknBtnGrey",
            "text": "CANCEL",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [24, 4, 24, 4],
            "paddingInPixel": true
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        var btnExist = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnBlue",
            "height": "100%",
            "id": "btnExist",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknBtnBlue",
            "text": "EXIT SESSION",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnExist"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [24, 4, 24, 4],
            "paddingInPixel": true
        }, controller.args[1], "btnExist"), extendConfig({}, controller.args[2], "btnExist"));
        flxBtnsExist.add(btnCancel, btnExist);
        var flxRequestHistory = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "32dp",
            "centerX": "50%",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRequestHistory",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "300dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxRequestHistory"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRequestHistory"), extendConfig({}, controller.args[2], "flxRequestHistory"));
        flxRequestHistory.setDefaultUnit(voltmx.flex.DP);
        var btnRequestHistory = new voltmx.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnBlue",
            "height": "100%",
            "id": "btnRequestHistory",
            "isVisible": true,
            "skin": "sknBtnBlue",
            "text": "VIEW REQUEST HISTORY",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnRequestHistory"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [24, 4, 24, 4],
            "paddingInPixel": true
        }, controller.args[1], "btnRequestHistory"), extendConfig({}, controller.args[2], "btnRequestHistory"));
        flxRequestHistory.add(btnRequestHistory);
        AlertUp.add(imgAlert, lblAlertHdr, lblAlertMessg, lblAlertMsg2, flxBtnsExist, flxRequestHistory);
        AlertUp.compInstData = {}
        return AlertUp;
    }
})
;
define("com/hcl/schemeList/SchemeList/userSchemeListController", [],function() {
    return {};
});
define("com/hcl/schemeList/SchemeList/SchemeListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/schemeList/SchemeList/SchemeListController", ["com/hcl/schemeList/SchemeList/userSchemeListController", "com/hcl/schemeList/SchemeList/SchemeListControllerActions"], function() {
    var controller = require("com/hcl/schemeList/SchemeList/userSchemeListController");
    var actions = require("com/hcl/schemeList/SchemeList/SchemeListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/schemeList/SchemeList/SchemeList',[],function() {
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
;
define("com/hcl/segDropDown/SegDropDown/userSegDropDownController", [],function() {
    return {};
});
define("com/hcl/segDropDown/SegDropDown/SegDropDownControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/segDropDown/SegDropDown/SegDropDownController", ["com/hcl/segDropDown/SegDropDown/userSegDropDownController", "com/hcl/segDropDown/SegDropDown/SegDropDownControllerActions"], function() {
    var controller = require("com/hcl/segDropDown/SegDropDown/userSegDropDownController");
    var actions = require("com/hcl/segDropDown/SegDropDown/SegDropDownControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/segDropDown/SegDropDown/SegDropDown',[],function() {
    return function(controller) {
        var SegDropDown = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "sknFlxTextBox",
            "id": "SegDropDown",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTextBox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SegDropDown"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SegDropDown"), extendConfig({}, controller.args[2], "SegDropDown"));
        SegDropDown.setDefaultUnit(voltmx.flex.DP);
        var segDropDwn = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblDropDwn": "View All"
            }, {
                "lblDropDwn": "View Approved"
            }, {
                "lblDropDwn": "View Pending"
            }, {
                "lblDropDwn": "View Rejected"
            }],
            "groupCells": false,
            "id": "segDropDwn",
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
                "friendlyName": "flxDropDown"
            }),
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": 0,
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxDropDown": "flxDropDown",
                "lblDropDwn": "lblDropDwn"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segDropDwn"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segDropDwn"), extendConfig({}, controller.args[2], "segDropDwn"));
        SegDropDown.add(segDropDwn);
        SegDropDown.compInstData = {}
        return SegDropDown;
    }
})
;
define("com/hcl/segHdr/segHeader/usersegHeaderController", [],function() {
    return {};
});
define("com/hcl/segHdr/segHeader/segHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/segHdr/segHeader/segHeaderController", ["com/hcl/segHdr/segHeader/usersegHeaderController", "com/hcl/segHdr/segHeader/segHeaderControllerActions"], function() {
    var controller = require("com/hcl/segHdr/segHeader/usersegHeaderController");
    var actions = require("com/hcl/segHdr/segHeader/segHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/segHdr/segHeader/segHeader',[],function() {
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
;
define("com/hcl/segSuspend/SegSuspendList/userSegSuspendListController", [],function() {
    return {};
});
define("com/hcl/segSuspend/SegSuspendList/SegSuspendListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/segSuspend/SegSuspendList/SegSuspendListController", ["com/hcl/segSuspend/SegSuspendList/userSegSuspendListController", "com/hcl/segSuspend/SegSuspendList/SegSuspendListControllerActions"], function() {
    var controller = require("com/hcl/segSuspend/SegSuspendList/userSegSuspendListController");
    var actions = require("com/hcl/segSuspend/SegSuspendList/SegSuspendListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/segSuspend/SegSuspendList/SegSuspendList',[],function() {
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
;
define("com/hcl/srchTextBox/SrchTextBox/userSrchTextBoxController", [],function() {
    return {};
});
define("com/hcl/srchTextBox/SrchTextBox/SrchTextBoxControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/srchTextBox/SrchTextBox/SrchTextBoxController", ["com/hcl/srchTextBox/SrchTextBox/userSrchTextBoxController", "com/hcl/srchTextBox/SrchTextBox/SrchTextBoxControllerActions"], function() {
    var controller = require("com/hcl/srchTextBox/SrchTextBox/userSrchTextBoxController");
    var actions = require("com/hcl/srchTextBox/SrchTextBox/SrchTextBoxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/srchTextBox/SrchTextBox/SrchTextBox',[],function() {
    return function(controller) {
        var SrchTextBox = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "slFFocusbox",
            "height": "7%",
            "id": "SrchTextBox",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "16dp",
            "isModalContainer": false,
            "skin": "sknFlxTextBox",
            "top": "16dp",
            "width": "97%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SrchTextBox"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SrchTextBox"), extendConfig({}, controller.args[2], "SrchTextBox"));
        SrchTextBox.setDefaultUnit(voltmx.flex.DP);
        var txtSrch = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "height": "100%",
            "id": "txtSrch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "placeholder": "Placeholder",
            "secureTextEntry": false,
            "skin": "sknTxtBxTrans",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "txtSrch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtSrch"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "sknTxtBxTrans"
        }, controller.args[2], "txtSrch"));
        var imgSrch = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgSrch",
            "isVisible": true,
            "right": "10dp",
            "skin": "slImage",
            "src": "icon_srch.png",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgSrch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSrch"), extendConfig({}, controller.args[2], "imgSrch"));
        SrchTextBox.add(txtSrch, imgSrch);
        SrchTextBox.compInstData = {}
        return SrchTextBox;
    }
})
;
define("com/hcl/subHdr/SubHdr/userSubHdrController", [],function() {
    return {};
});
define("com/hcl/subHdr/SubHdr/SubHdrControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/subHdr/SubHdr/SubHdrController", ["com/hcl/subHdr/SubHdr/userSubHdrController", "com/hcl/subHdr/SubHdr/SubHdrControllerActions"], function() {
    var controller = require("com/hcl/subHdr/SubHdr/userSubHdrController");
    var actions = require("com/hcl/subHdr/SubHdr/SubHdrControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/subHdr/SubHdr/SubHdr',[],function() {
    return function(controller) {
        var SubHdr = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "45dp",
            "id": "SubHdr",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxTrans",
            "top": "8dp",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SubHdr"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SubHdr"), extendConfig({}, controller.args[2], "SubHdr"));
        SubHdr.setDefaultUnit(voltmx.flex.DP);
        var lblSubHdr = new voltmx.ui.Label(extendConfig({
            "centerY": "45%",
            "id": "lblSubHdr",
            "isVisible": true,
            "left": "24dp",
            "skin": "sknLblHeading4Bold",
            "text": "Label",
            "top": "4dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSubHdr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubHdr"), extendConfig({}, controller.args[2], "lblSubHdr"));
        var flxSeperator = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhiteBdr",
            "top": "43dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxSeperator"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(voltmx.flex.DP);
        flxSeperator.add();
        SubHdr.add(lblSubHdr, flxSeperator);
        SubHdr.compInstData = {}
        return SubHdr;
    }
})
;
define("com/hcl/suspenEntryHdr/SuspenEntryHdr/userSuspenEntryHdrController", [],function() {
    return {};
});
define("com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrController", ["com/hcl/suspenEntryHdr/SuspenEntryHdr/userSuspenEntryHdrController", "com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrControllerActions"], function() {
    var controller = require("com/hcl/suspenEntryHdr/SuspenEntryHdr/userSuspenEntryHdrController");
    var actions = require("com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdr',[],function() {
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
;
define("com/riskrating/chart/RiskRateChart/userRiskRateChartController", [],function() {
    return {};
});
define("com/riskrating/chart/RiskRateChart/RiskRateChartControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/riskrating/chart/RiskRateChart/RiskRateChartController", ["com/riskrating/chart/RiskRateChart/userRiskRateChartController", "com/riskrating/chart/RiskRateChart/RiskRateChartControllerActions"], function() {
    var controller = require("com/riskrating/chart/RiskRateChart/userRiskRateChartController");
    var actions = require("com/riskrating/chart/RiskRateChart/RiskRateChartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/riskrating/chart/RiskRateChart/RiskRateChart',[],function() {
    return function(controller) {
        var RiskRateChart = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "slFFocusbox",
            "height": "340dp",
            "id": "RiskRateChart",
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
        }, controller.args[0], "RiskRateChart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "RiskRateChart"), extendConfig({}, controller.args[2], "RiskRateChart"));
        RiskRateChart.setDefaultUnit(voltmx.flex.DP);
        var FlexGroup0f364368a6aa841 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "FlexGroup0f364368a6aa841",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "500dp",
            "appName": "SBCommon"
        }, controller.args[0], "FlexGroup0f364368a6aa841"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexGroup0f364368a6aa841"), extendConfig({}, controller.args[2], "FlexGroup0f364368a6aa841"));
        FlexGroup0f364368a6aa841.setDefaultUnit(voltmx.flex.DP);
        var imgChart = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgChart",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_rating.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgChart"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgChart"), extendConfig({}, controller.args[2], "imgChart"));
        var lblSubStandard = new voltmx.ui.Label(extendConfig({
            "centerX": "13%",
            "centerY": "70%",
            "id": "lblSubStandard",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Sub Standard",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblSubStandard"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubStandard"), extendConfig({}, controller.args[2], "lblSubStandard"));
        var lblVeryHigh = new voltmx.ui.Label(extendConfig({
            "centerX": "26%",
            "centerY": "42%",
            "id": "lblVeryHigh",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Very High",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblVeryHigh"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVeryHigh"), extendConfig({}, controller.args[2], "lblVeryHigh"));
        var lblHigh = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "28%",
            "id": "lblHigh",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "High",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "lblHigh"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHigh"), extendConfig({}, controller.args[2], "lblHigh"));
        var lblMedium = new voltmx.ui.Label(extendConfig({
            "centerX": "73%",
            "centerY": "42%",
            "id": "lblMedium",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Medium",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblMedium"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMedium"), extendConfig({}, controller.args[2], "lblMedium"));
        var lblLow = new voltmx.ui.Label(extendConfig({
            "centerX": "87%",
            "centerY": "71%",
            "id": "lblLow",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Low",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblLow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLow"), extendConfig({}, controller.args[2], "lblLow"));
        var flxPin = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "84%",
            "clipBounds": false,
            "height": "60dp",
            "id": "flxPin",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxPin"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPin"), extendConfig({}, controller.args[2], "flxPin"));
        flxPin.setDefaultUnit(voltmx.flex.DP);
        var imgPin = new voltmx.ui.Image2(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "120dp",
            "id": "imgPin",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_pin.png",
            "width": "26dp",
            "zIndex": 1
        }, controller.args[0], "imgPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPin"), extendConfig({}, controller.args[2], "imgPin"));
        flxPin.add(imgPin);
        FlexGroup0f364368a6aa841.add(imgChart, lblSubStandard, lblVeryHigh, lblHigh, lblMedium, lblLow, flxPin);
        RiskRateChart.add(FlexGroup0f364368a6aa841);
        RiskRateChart.compInstData = {}
        return RiskRateChart;
    }
})
;
define('com/konymp/halfdonutup/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "adadc24660954136a4ef439b6b2c409b",
                    "assetName": "com.konymp.halfdonutup",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "100dcb25991c439f913d254d1c244313",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});

/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/halfdonutup/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});

/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Doughnut Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates doughnut chart by taking the data as input
 */
define("com/konymp/halfdonutup/userhalfdonutupController", ['com/konymp/halfdonutup/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/halfdonutup/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Half Donut Up Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "halfdonutup" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _titleFontSize: 12,
                _titleFontColor: "#000000",
                _enableLegend: true,
                _legendFontSize: 10,
                _legendFontColor: "#000000",
                _bgColor: "#ffffff",
                _enableChartAnimation: true
            };
            this._data = [];
            this._chartTitle = "";
            this._enableStaticPreview = true;
            chart_hDonutUp_defined_global = function(state) {
                if (state === 'ready') {
                    this.myPostShow();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering data Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._data = val.data;
                konymp.logger.trace("----------Exiting data Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "Title Font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableLegend", function(val) {
                konymp.logger.trace("----------Entering enableLegend Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableLegend = val;
                konymp.logger.trace("----------Exiting enableLegend Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontSize", function(val) {
                konymp.logger.trace("----------Entering legendFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._legendFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Legend font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting legendFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontColor", function(val) {
                konymp.logger.trace("----------Entering legendFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._legendFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLegendFontColorCode",
                            "message": "Legend Font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLegendFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting legendFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering bgColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgroundColorCode",
                            "message": "Background color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgroundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting bgColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.gaugeUpBrowser.onPageFinished = this.myPostShow.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createDonutChart         
         * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of doughnut chart
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createDonutChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (dataSet === undefined) {
                    if (this._data.length < 0) throw {
                        Error: 'No Data',
                        message: "no data assigned for chart"
                    };
                    else dataSet = this._data;
                }
                var data = dataSet.map(function(obj) {
                    return Number(obj.Value || obj.value);
                });
                var labels = dataSet.map(function(obj) {
                    return obj.label;
                });
                var colors = dataSet.map(function(obj) {
                    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
                    if (obj.colorCode === null || obj.colorCode === "" || (!regColorcode.test(obj.colorCode))) {
                        throw {
                            error: "wrong dataType",
                            message: "wrong colorCode for data " + JSON.stringify(obj.colorCode)
                        };
                    }
                    return obj.colorCode;
                });
                if (this.validateAllParams(this._chartTitle, data, labels, colors)) {
                    this.view.gaugeUpBrowser.evaluateJavaScript('var x = new konymp.charts.gaugeUp();x.Generate_GaugeUpChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(data) + ',' + JSON.stringify(colors) + ',' + JSON.stringify(this._chartProperties) + ');');
                }
                this.view.forceLayout();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.error === "wrong dataType") {
                    throw exception;
                }
            }
        },
        /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
        _validationData: function(data, type) {
            konymp.logger.trace("----------Entering _validationData Function---------", konymp.logger.FUNCTION_ENTRY);
            if (type === 'array') {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return Array.isArray(data);
            } else if (typeof data === type) {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return true;
            } else {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return false;
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @param {String} title 
         * @param {js array} data 
         * @param {js array} labels 
         * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
         */
        validateAllParams: function(title, data, labels, colors) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            if (!this._validationData(title, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for title " + title
                };
            }
            if (!this._validationData(data, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for data " + JSON.stringify(data)
                };
            }
            if (!this._validationData(labels, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for labels " + JSON.stringify(labels)
                };
            }
            if (!this._validationData(colors, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for bgColor " + JSON.stringify(colors)
                };
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        /**
         * @function
         *@description: called to create using data
         */
        myPostShow: function() {
            try {
                if (this._enableStaticPreview === true) {
                    this.createChart(this._data);
                    return;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        }
    };
});
define("com/konymp/halfdonutup/halfdonutupControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/halfdonutup/halfdonutupController", ["com/konymp/halfdonutup/userhalfdonutupController", "com/konymp/halfdonutup/halfdonutupControllerActions"], function() {
    var controller = require("com/konymp/halfdonutup/userhalfdonutupController");
    var actions = require("com/konymp/halfdonutup/halfdonutupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/halfdonutup/halfdonutup',[],function() {
    return function(controller) {
        var halfdonutup = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "halfdonutup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknslFbox5",
            "top": "0dp",
            "width": "100%",
            "appName": "Customer360"
        }, controller.args[0], "halfdonutup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "halfdonutup"), extendConfig({}, controller.args[2], "halfdonutup"));
        halfdonutup.setDefaultUnit(voltmx.flex.DP);
        var gaugeUpBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "gaugeUpBrowser",
            "isVisible": true,
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "Chart_halfDonutUp/halfDonutUp.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "gaugeUpBrowser"), extendConfig({}, controller.args[1], "gaugeUpBrowser"), extendConfig({}, controller.args[2], "gaugeUpBrowser"));
        halfdonutup.add(gaugeUpBrowser);
        return halfdonutup;
    }
})
;
define('com/konymp/halfdonutup/halfdonutupConfig',[],function() {
    return {
        "properties": [{
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableLegend",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});

define('com/konymp/linechart/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "b6f81f4c0dfb41aea20c2c0deb34e15f",
                    "assetName": "com.konymp.linechart",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "u06986058ef24b329da7b2ab680ed831",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});

/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/linechart/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});

/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Line Chart UDW
 * @author: Tejaswini Tubati and Sumeet Bartha
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates line chart by taking the required parameters as input
 */
define("com/konymp/linechart/userlinechartController", ['com/konymp/linechart/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/linechart/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Line Chart Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "linechart" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _lineColor: "#1B9ED9",
                _lowValue: "0",
                _highValue: "40",
                _bgColor: "#FFFFFF",
                _enableChartAnimation: true,
                _enableStaticPreview: true,
                _xAxisTitle: "",
                _yAxisTitle: "",
                _enableGrid: true,
                _enableGridAnimation: true,
                _titleFontSize: "12",
                _titleFontColor: "#000000"
            };
            this._chartTitle = "";
            this._chartData = [];
            chart_lineChart_defined_global = function(state) {
                if (state === 'ready') {
                    this.showGridChart();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor ---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lineColor", function(val) {
                konymp.logger.trace("----------Entering lineColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._lineColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLineColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLineColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting lineColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "xAxisTitle", function(val) {
                konymp.logger.trace("----------Entering xAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._xAxisTitle = val;
                konymp.logger.trace("----------Exiting xAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "yAxisTitle", function(val) {
                konymp.logger.trace("----------Entering yAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._yAxisTitle = val;
                konymp.logger.trace("----------Exiting yAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title Font Size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering backgroundColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgoundColorCode",
                            "message": "The color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgoundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting backgroundColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGrid", function(val) {
                konymp.logger.trace("----------Entering enableGrid Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGrid = val;
                konymp.logger.trace("----------Exiting enableGrid Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGridAnimation", function(val) {
                konymp.logger.trace("----------Entering enableGridAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableGridAnimation = val;
                konymp.logger.trace("----------Exiting enableGridAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "lowValue", function(val) {
                konymp.logger.trace("----------Entering lowValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._lowValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting lowValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "highValue", function(val) {
                konymp.logger.trace("----------Entering highValue Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._highValue = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Low/High value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting highValue Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering chartData Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartData = val.data;
                konymp.logger.trace("----------Exiting chartData Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.lineChartBrowser.onPageFinished = this.showGridChart.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createChart
         * @access exposed to user
         * @param {JSON} dataSet
         * @description: generates line chart by taking the data and the other params as input
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var labels, series, data;
                if (dataSet !== null && dataSet !== undefined && dataSet !== "" && dataSet.length !== 0) {
                    labels = dataSet.map(function(obj) {
                        return obj.lblName;
                    });
                    series = dataSet.map(function(obj) {
                        return Number(obj.dataVal);
                    });
                } else if (this._chartData !== null && this._chartData !== undefined && this._chartData !== "" && this._chartData.length !== 0) {
                    data = this._chartData;
                    labels = data.map(function(obj) {
                        return obj.lblName;
                    });
                    series = data.map(function(obj) {
                        return Number(obj.dataVal);
                    });
                } else {
                    throw {
                        "Error": "noData",
                        "message": "Data not passed to chart"
                    };
                }
                series = [series];
                if (this.validateAllParams(this._chartTitle, labels, series, this._chartProperties)) {
                    var x = this.view.lineChartBrowser.evaluateJavaScript('var chartObj = new konymp.charts.lineChart(); chartObj.drawLineChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(series) + ',' + JSON.stringify(this._chartProperties) + ');');
                    this.view.forceLayout();
                    konymp.logger.trace("----------Exiting createChart Function---------", konymp.logger.FUNCTION_EXIT);
                    return true;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.Error === "noData") {
                    throw (exception);
                }
            }
        },
        /**
         * @function validateData
         * @private
         * @param {String/Array/JSON} data
         * @param {String(datatype)} type
         * @description: validates the data param based on the corresponding type param
         */
        validateData: function(data, type) {
            konymp.logger.trace("----------Entering validateData Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (type === 'array') {
                    konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                    return Array.isArray(data);
                } else if (typeof data === type) {
                    konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                    return true;
                } else {
                    konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
                    return false;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @params {String} title, color, xAxisTitle, yAxisTitle
         * @params {JS Array} labels, series 
         * @description: invokes the validation of all params and returns a true only if all are validated
         */
        validateAllParams: function(title, labels, series, properties) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (!this.validateData(title, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for title " + JSON.stringify(title)
                    };
                }
                if (!this.validateData(labels, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong datatype for labels " + JSON.stringify(labels)
                    };
                }
                if (!this.validateData(series, 'array')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong datatype for series " + JSON.stringify(series)
                    };
                }
                if (!this.validateData(properties._lineColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for lineColor " + JSON.stringify(properties._lineColor)
                    };
                }
                if (!this.validateData(properties._xAxisTitle, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for xAxisTitle " + JSON.stringify(properties._xAxisTitle)
                    };
                }
                if (!this.validateData(properties._yAxisTitle, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for yAxisTitle " + JSON.stringify(properties._yAxisTitle)
                    };
                }
                if (!this.validateData(properties._titleFontColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for titleFontColor " + JSON.stringify(properties._titleFontColor)
                    };
                }
                if (!this.validateData(properties._titleFontSize, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for titleFontSize " + JSON.stringify(properties._titleFontSize)
                    };
                }
                if (!this.validateData(properties._bgColor, 'string')) {
                    throw {
                        "Error": "Invalid Datatype",
                        "message": "Wrong dataType for backgroundColor " + JSON.stringify(properties._bgColor)
                    };
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.Error === "Invalid Datatype") {
                    throw (exception);
                }
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        /**
         * @function showGridChart
         * @param dataSet 
         * @description creates the chart with the data in the data grid on browser load
         */
        showGridChart: function() {
            try {
                if (this._chartProperties._enableStaticPreview && this._chartData.length !== 0) {
                    this.createChart(this._chartData);
                } else {
                    throw {
                        "Error": "NoData",
                        "message": "No data in data grid"
                    };
                }
            } catch (exception) {
                if (exception.Error === "NoData") {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                }
            }
        }
    };
});
define("com/konymp/linechart/linechartControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/linechart/linechartController", ["com/konymp/linechart/userlinechartController", "com/konymp/linechart/linechartControllerActions"], function() {
    var controller = require("com/konymp/linechart/userlinechartController");
    var actions = require("com/konymp/linechart/linechartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/linechart/linechart',[],function() {
    return function(controller) {
        var linechart = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "linechart",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "Customer360"
        }, controller.args[0], "linechart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "linechart"), extendConfig({}, controller.args[2], "linechart"));
        linechart.setDefaultUnit(voltmx.flex.DP);
        var lineChartBrowser = new voltmx.ui.Browser(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "lineChartBrowser",
            "isVisible": true,
            "left": 0,
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "chartist_line/lineChartist.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lineChartBrowser"), extendConfig({}, controller.args[1], "lineChartBrowser"), extendConfig({}, controller.args[2], "lineChartBrowser"));
        linechart.add(lineChartBrowser);
        linechart.compInstData = {}
        return linechart;
    }
})
;
define('com/konymp/linechart/linechartConfig',[],function() {
    return {
        "properties": [{
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableGrid",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "xAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "yAxisTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lowValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableGridAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "highValue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "lineColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});

define("com/konymp/Login/userLoginController", [],function() {
    constants.DEFAULT_MINIMUM_CHAR_LENGTH = 8;
    constants.USERNAME_VALIDATION_MESSAGE = "Username too small!";
    constants.PASSWORD_VALIDATION_MESSAGE = "Password too small!";
    constants.USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password are too small";
    constants.EMPTY_USERNAME_VALIDATION_MESSAGE = "Username cannot be empty";
    constants.EMPTY_PASSWORD_VALIDATION_MESSAGE = "Password cannot be empty";
    constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password cannot be empty";
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(basicConfig, layoutConfig, pspConfig) {
            this._usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._passwordMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._usernameValidationMsg = constants.USERNAME_VALIDATION_MESSAGE;
            this._passwordValidationMsg = constants.PASSWORD_VALIDATION_MESSAGE;
        },
        /**
         * @function validateUsername
         * @description Validates username entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validateUsername: function() {
            try {
                if (parseInt(this._usernameMinimumChar) > this.getUsername().length) {
                    this.view.txtUserName.text = this.getUsername();
                    this.view.lblError.text = constants.USERNAME_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function validatePassword
         * @description Validates password entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validatePassword: function() {
            try {
                if (parseInt(this._passwordMinimumChar) > this.getPassword().length) {
                    this.view.txtPassword.text = this.getPassword();
                    this.view.lblError.text = constants.PASSWORD_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**  
         * @function validateUsernameAndPassword
         * @description validates empty username and password
         * @private
         * @return {boolean} true/false
         */
        validateUsernameAndPassword: function() {
            var isUsernameEmpty = !this.getUsername().length;
            var isPasswordEmpty = !this.getPassword().length;
            var errorText = null;
            if (isUsernameEmpty && isPasswordEmpty) {
                errorText = constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE;
            } else if (isUsernameEmpty) {
                errorText = constants.EMPTY_USERNAME_VALIDATION_MESSAGE;
            } else if (isPasswordEmpty) {
                errorText = constants.EMPTY_PASSWORD_VALIDATION_MESSAGE;
            }
            if (!errorText) {
                var isUsernameSmall = parseInt(this._usernameMinimumChar) > this.getUsername().length;
                var isPasswordSmall = parseInt(this._passwordMinimumChar) > this.getPassword().length;
                if (isUsernameSmall && isPasswordSmall) {
                    errorText = constants.USERNAME_PASSWORD_VALIDATION_MESSAGE;
                } else if (isUsernameSmall) {
                    errorText = constants.USERNAME_VALIDATION_MESSAGE;
                } else if (isPasswordSmall) {
                    errorText = constants.PASSWORD_VALIDATION_MESSAGE;
                }
            }
            if (errorText) {
                this.view.lblError.text = errorText;
                this.view.flxError.isVisible = true;
                this.view.flxError.forceLayout();
            } else {
                this.view.flxError.isVisible = false;
            }
        },
        /**
         * @function getUsername
         * @description Returns username entered by the user
         * @public
         * @return {string} username
         */
        getUsername: function() {
            var uname = (this.view.txtUserName.text).trim();
            return uname;
        },
        /**
         * @function getPassword
         * @description Returns password entered by the user
         * @public
         * @return {string} password
         */
        getPassword: function() {
            var pwd = (this.view.txtPassword.text).trim();
            return pwd;
        }
    };
});
define("com/konymp/Login/LoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cf166461bc0e488b92059122e3011eb8: function AS_Button_cf166461bc0e488b92059122e3011eb8(eventobject) {
        var self = this;
        return self.validateUsernameAndPassword.call(this);
    },
    AS_Image_f64bf2c9f2904919aaff16a06464da4a: function AS_Image_f64bf2c9f2904919aaff16a06464da4a(eventobject, x, y) {
        var self = this;
        self.view.flxError.isVisible = false;
    },
    AS_FlexContainer_a461bc68fcc24df8a0fe7960ddf3558b: function AS_FlexContainer_a461bc68fcc24df8a0fe7960ddf3558b(eventobject) {
        var self = this;
        this.view.imgCHeckBox.isVisible = !this.view.imgCHeckBox.isVisible;
    },
    AS_TextField_jba7c698e7824c7693379fd6f73f080e: function AS_TextField_jba7c698e7824c7693379fd6f73f080e(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    AS_TextField_b7c2c666d6a34331ad159e529d370183: function AS_TextField_b7c2c666d6a34331ad159e529d370183(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    }
});
define("com/konymp/Login/LoginController", ["com/konymp/Login/userLoginController", "com/konymp/Login/LoginControllerActions"], function() {
    var controller = require("com/konymp/Login/userLoginController");
    var actions = require("com/konymp/Login/LoginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/Login/Login',[],function() {
    return function(controller) {
        var Login = new voltmx.ui.FlexContainer(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "500dp",
            "id": "Login",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyFLXFFFFFF1",
            "width": "500dp",
            "appName": "StandardBank"
        }, controller.args[0], "Login"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Login"), extendConfig({}, controller.args[2], "Login"));
        Login.setDefaultUnit(voltmx.flex.DP);
        var lblTopShadow = new voltmx.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblTopShadow",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyLBLTOPSHADOW",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTopShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTopShadow"), extendConfig({}, controller.args[2], "lblTopShadow"));
        var lblLeftShadow = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblLeftShadow",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyCopydefLabel4",
            "textStyle": {},
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "lblLeftShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeftShadow"), extendConfig({}, controller.args[2], "lblLeftShadow"));
        var lblBottomShadow = new voltmx.ui.Label(extendConfig({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblBottomShadow",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyCopydefLabel2",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblBottomShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomShadow"), extendConfig({}, controller.args[2], "lblBottomShadow"));
        var lblRightShadow = new voltmx.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblRightShadow",
            "isVisible": true,
            "right": "0dp",
            "skin": "CopyCopyCopydefLabel4",
            "textStyle": {},
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "lblRightShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRightShadow"), extendConfig({}, controller.args[2], "lblRightShadow"));
        var flxLoginWrapper = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "id": "flxLoginWrapper",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "1dp",
            "isModalContainer": false,
            "right": "1dp",
            "skin": "CopyCopyslFbox0b27090e10e6f4c",
            "top": "1dp",
            "zIndex": 1,
            "appName": "StandardBank"
        }, controller.args[0], "flxLoginWrapper"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLoginWrapper"), extendConfig({}, controller.args[2], "flxLoginWrapper"));
        flxLoginWrapper.setDefaultUnit(voltmx.flex.DP);
        var flxError = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "flxError",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f1ec1bba91f14a",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "StandardBank"
        }, controller.args[0], "flxError"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(voltmx.flex.DP);
        var imgClose = new voltmx.ui.Image2(extendConfig({
            "centerX": "10%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_Image_f64bf2c9f2904919aaff16a06464da4a,
            "skin": "slImage",
            "src": "closeicon_4.png",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        var lblError = new voltmx.ui.Label(extendConfig({
            "centerX": "55%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblError",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0h1461925391e41",
            "text": "Incorrect Username/Password",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({}, controller.args[2], "lblError"));
        flxError.add(imgClose, lblError);
        var lblUserName = new voltmx.ui.Label(extendConfig({
            "id": "lblUserName",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyLBL0e133e7b084af41",
            "text": "Username",
            "textStyle": {},
            "top": "100dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({}, controller.args[2], "lblUserName"));
        var txtUserName = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopydefTextBoxFocus",
            "height": "40dp",
            "id": "txtUserName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "77dp",
            "onDone": controller.AS_TextField_b7c2c666d6a34331ad159e529d370183,
            "placeholder": "Username",
            "secureTextEntry": false,
            "skin": "CopyTXT",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "7dp",
            "width": "346dp",
            "zIndex": 1
        }, controller.args[0], "txtUserName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtUserName"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyTXT1"
        }, controller.args[2], "txtUserName"));
        var lblPassword = new voltmx.ui.Label(extendConfig({
            "id": "lblPassword",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyLBL0e133e7b084af41",
            "text": "Password",
            "textStyle": {},
            "top": "15dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPassword"), extendConfig({}, controller.args[2], "lblPassword"));
        var txtPassword = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopydefTextBoxFocus",
            "height": "40dp",
            "id": "txtPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "77dp",
            "onDone": controller.AS_TextField_jba7c698e7824c7693379fd6f73f080e,
            "placeholder": "Password",
            "secureTextEntry": true,
            "skin": "CopyTXT",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "7dp",
            "width": "346dp",
            "zIndex": 1
        }, controller.args[0], "txtPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyTXT1"
        }, controller.args[2], "txtPassword"));
        var lblRememberMe = new voltmx.ui.Label(extendConfig({
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyCopyCopydefLabel3",
            "text": "Remember Me",
            "textStyle": {},
            "top": "15dp",
            "width": "99dp",
            "zIndex": 1
        }, controller.args[0], "lblRememberMe"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMe"), extendConfig({}, controller.args[2], "lblRememberMe"));
        var flxCheck = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxCheck",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "183dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a461bc68fcc24df8a0fe7960ddf3558b,
            "skin": "CopyCopyslFbox0h4d4da20a38d49",
            "top": "-19dp",
            "width": "20dp",
            "zIndex": 1,
            "appName": "StandardBank"
        }, controller.args[0], "flxCheck"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCheck"), extendConfig({}, controller.args[2], "flxCheck"));
        flxCheck.setDefaultUnit(voltmx.flex.DP);
        var imgCHeckBox = new voltmx.ui.Image2(extendConfig({
            "centerX": "48%",
            "centerY": "50%",
            "height": "12dp",
            "id": "imgCHeckBox",
            "isVisible": true,
            "skin": "slImage",
            "src": "tick_1.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgCHeckBox"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCHeckBox"), extendConfig({}, controller.args[2], "imgCHeckBox"));
        flxCheck.add(imgCHeckBox);
        var btnCantLogin = new voltmx.ui.Button(extendConfig({
            "bottom": "5dp",
            "focusSkin": "CopyButtonLinkFocusSkin",
            "height": "25dp",
            "id": "btnCantLogin",
            "isVisible": true,
            "right": "77dp",
            "skin": "CopyButtonLinkNormalSkin",
            "text": "Can't Login?",
            "top": "-22dp",
            "width": "85dp",
            "zIndex": 1
        }, controller.args[0], "btnCantLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCantLogin"), extendConfig({
            "hoverSkin": "CopyButtonLinkFocusSkin"
        }, controller.args[2], "btnCantLogin"));
        var ButtonLogin = new voltmx.ui.Button(extendConfig({
            "focusSkin": "CopyButtonSkinActive",
            "height": "40dp",
            "id": "ButtonLogin",
            "isVisible": true,
            "left": "77dp",
            "onClick": controller.AS_Button_cf166461bc0e488b92059122e3011eb8,
            "skin": "CopyButtonSkinNormal",
            "text": "Login",
            "top": "15dp",
            "width": "346dp",
            "zIndex": 1
        }, controller.args[0], "ButtonLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ButtonLogin"), extendConfig({
            "hoverSkin": "CopyButtonSkinActive"
        }, controller.args[2], "ButtonLogin"));
        var btnOpenNewAcnt = new voltmx.ui.Button(extendConfig({
            "focusSkin": "CopyButtonLinkFocusSkin",
            "height": "25dp",
            "id": "btnOpenNewAcnt",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyButtonLinkNormalSkin",
            "text": "Open New Account",
            "top": "15dp",
            "width": "128dp",
            "zIndex": 1
        }, controller.args[0], "btnOpenNewAcnt"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOpenNewAcnt"), extendConfig({
            "hoverSkin": "CopyButtonLinkFocusSkin"
        }, controller.args[2], "btnOpenNewAcnt"));
        var btnEnrol = new voltmx.ui.Button(extendConfig({
            "bottom": "5dp",
            "focusSkin": "CopyButtonLinkFocusSkin",
            "height": "25dp",
            "id": "btnEnrol",
            "isVisible": true,
            "right": "77dp",
            "skin": "CopyButtonLinkNormalSkin",
            "text": "Enroll",
            "top": "-25dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "btnEnrol"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEnrol"), extendConfig({
            "hoverSkin": "CopyButtonLinkFocusSkin"
        }, controller.args[2], "btnEnrol"));
        flxLoginWrapper.add(flxError, lblUserName, txtUserName, lblPassword, txtPassword, lblRememberMe, flxCheck, btnCantLogin, ButtonLogin, btnOpenNewAcnt, btnEnrol);
        Login.add(lblTopShadow, lblLeftShadow, lblBottomShadow, lblRightShadow, flxLoginWrapper);
        return Login;
    }
})
;
define("SBCommon/flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
})
;
define("SBCommon/flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
})
;
define("SBCommon/flxApprover", [],function() {
    return function(controller) {
        var flxApprover = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "flxApprover",
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
            "height": "25dp",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
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
            "src": "icon_alertcheck.png",
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
            "height": "25dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
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
;
define("SBCommon/flxDropDown", [],function() {
    return function(controller) {
        var flxDropDown = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "40dp",
            "id": "flxDropDown",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
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
        flxDropDown.setDefaultUnit(voltmx.flex.DP);
        var lblDropDwn = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblDropDwn",
            "isVisible": true,
            "left": "1%",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDropDown.add(lblDropDwn);
        return flxDropDown;
    }
})
;
define("SBCommon/flxSchemeList", [],function() {
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
;
define("SBCommon/flxRowSuspend", [],function() {
    return function(controller) {
        var flxRowSuspend = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "id": "flxRowSuspend",
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
        flxRowSuspend.setDefaultUnit(voltmx.flex.DP);
        var lblDateVal = new voltmx.ui.Label({
            "id": "lblDateVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Date",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCiFNoVal = new voltmx.ui.Label({
            "id": "lblCiFNoVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "CIF No",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblIDNoVal = new voltmx.ui.Label({
            "id": "lblIDNoVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "ID No",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCustomerNameVal = new voltmx.ui.Label({
            "id": "lblCustomerNameVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Customer Name",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblReasonVal = new voltmx.ui.Label({
            "id": "lblReasonVal",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Reason",
            "width": "25%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var flxDelete = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "25dp",
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "45dp",
            "id": "flxDelete",
            "isVisible": false,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxTrans",
            "width": "5%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxDelete.setDefaultUnit(voltmx.flex.DP);
        var imgDelete = new voltmx.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgDelete",
            "isVisible": true,
            "skin": "slImage",
            "src": "icon_delete.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDelete.add(imgDelete);
        flxRowSuspend.add(lblDateVal, lblCiFNoVal, lblIDNoVal, lblCustomerNameVal, lblReasonVal, flxDelete);
        return flxRowSuspend;
    }
})
;
define("SBCommon/flxSuspensionEntry", [],function() {
    return function(controller) {
        var flxSuspensionEntry = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "id": "flxSuspensionEntry",
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
        flxSuspensionEntry.setDefaultUnit(voltmx.flex.DP);
        var lblCIFNo = new voltmx.ui.Label({
            "id": "lblCIFNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "CIF No",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblIDNo = new voltmx.ui.Label({
            "id": "lblIDNo",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "ID No",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblCustomerName = new voltmx.ui.Label({
            "id": "lblCustomerName",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Customer Name",
            "top": "0dp",
            "width": "17%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var lblReason = new voltmx.ui.Label({
            "id": "lblReason",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblFormLevel",
            "text": "Reason",
            "top": "0dp",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, {});
        var flxDelete = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "8dp",
            "width": "5%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxDelete.setDefaultUnit(voltmx.flex.DP);
        var imgDelet = new voltmx.ui.Image2({
            "centerX": "50%",
            "height": "30dp",
            "id": "imgDelet",
            "isVisible": true,
            "skin": "slImage",
            "src": "icon_delete.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDelete.add(imgDelet);
        flxSuspensionEntry.add(lblCIFNo, lblIDNo, lblCustomerName, lblReason, flxDelete);
        return flxSuspensionEntry;
    }
})
;
define("SBCommon/flxSecHdrSuspend", [],function() {
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
;
define("SBCommon/flxRow", [],function() {
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
;
define("SBCommon/flxRowItems", [],function() {
    return function(controller) {
        var flxRowItems = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40px",
            "id": "flxRowItems",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxRow",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxRowItems.setDefaultUnit(voltmx.flex.DP);
        var lblMenuItem = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblMenuItem",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRowItems.add(lblMenuItem);
        return flxRowItems;
    }
})
;
define("SBCommon/flxSegSecHdr", [],function() {
    return function(controller) {
        var flxSegSecHdr = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40px",
            "id": "flxSegSecHdr",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
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
        flxSegSecHdr.setDefaultUnit(voltmx.flex.DP);
        var FlexGroup0a043cf8cc66045 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "100%",
            "id": "FlexGroup0a043cf8cc66045",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        FlexGroup0a043cf8cc66045.setDefaultUnit(voltmx.flex.DP);
        var imgIcon = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "1%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSectionTitle = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSectionTitle",
            "isVisible": true,
            "left": "1%",
            "skin": "sknLblHeading5",
            "text": "Label",
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexGroup0a043cf8cc66045.add(imgIcon, lblSectionTitle);
        var flxLine = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxLine",
            "height": "1%",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxLine",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxLine.setDefaultUnit(voltmx.flex.DP);
        flxLine.add();
        flxSegSecHdr.add(FlexGroup0a043cf8cc66045, flxLine);
        return flxSegSecHdr;
    }
})
;
define("ManageScheme/CopyFBox0g0122a027e2e45", [],function() {
    return function(controller) {
        CopyFBox0g0122a027e2e45 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "CopyFBox0g0122a027e2e45",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0g0122a027e2e45.setDefaultUnit(voltmx.flex.DP);
        var lblMethod = new voltmx.ui.Label({
            "id": "lblMethod",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "12dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0g0122a027e2e45.add(lblMethod);
        return CopyFBox0g0122a027e2e45;
    }
})
;
define("ManageScheme/FBox0d362f77aee3647", [],function() {
    return function(controller) {
        FBox0d362f77aee3647 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40dp",
            "id": "FBox0d362f77aee3647",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0d362f77aee3647.setDefaultUnit(voltmx.flex.DP);
        var lblMethod = new voltmx.ui.Label({
            "id": "lblMethod",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "12dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FBox0d362f77aee3647.add(lblMethod);
        return FBox0d362f77aee3647;
    }
})
;
define("ManageScheme/flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
})
;
define("ManageScheme/flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "ManageScheme"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
})
;
define("Customer360/flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "Customer360"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
})
;
define("Customer360/flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "Customer360"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
})
;
define("SuspendList/CopyFBox0a97028e0935b46", [],function() {
    return function(controller) {
        CopyFBox0a97028e0935b46 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0a97028e0935b46",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0a97028e0935b46.setDefaultUnit(voltmx.flex.DP);
        var lblCriteria = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblCriteria",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0a97028e0935b46.add(lblCriteria);
        return CopyFBox0a97028e0935b46;
    }
})
;
define("SuspendList/CopyFBox0b0f2be1354c748", [],function() {
    return function(controller) {
        CopyFBox0b0f2be1354c748 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0b0f2be1354c748",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0b0f2be1354c748.setDefaultUnit(voltmx.flex.DP);
        var lblType = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblType",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0b0f2be1354c748.add(lblType);
        return CopyFBox0b0f2be1354c748;
    }
})
;
define("SuspendList/CopyFBox0d3d990ec800b4e", [],function() {
    return function(controller) {
        CopyFBox0d3d990ec800b4e = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0d3d990ec800b4e",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0d3d990ec800b4e.setDefaultUnit(voltmx.flex.DP);
        var lblType = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblType",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0d3d990ec800b4e.add(lblType);
        return CopyFBox0d3d990ec800b4e;
    }
})
;
define("SuspendList/CopyFBox0d55305060deb43", [],function() {
    return function(controller) {
        CopyFBox0d55305060deb43 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0d55305060deb43",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0d55305060deb43.setDefaultUnit(voltmx.flex.DP);
        var lblCriteria = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblCriteria",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0d55305060deb43.add(lblCriteria);
        return CopyFBox0d55305060deb43;
    }
})
;
define("SuspendList/CopyFBox0ec887391a0be42", [],function() {
    return function(controller) {
        var CopyFBox0ec887391a0be42 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0ec887391a0be42",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0ec887391a0be42.setDefaultUnit(voltmx.flex.DP);
        var lblSource = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSource",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0ec887391a0be42.add(lblSource);
        return CopyFBox0ec887391a0be42;
    }
})
;
define("SuspendList/CopyFBox0e4f6c0b85bd540", [],function() {
    return function(controller) {
        CopyFBox0e4f6c0b85bd540 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "CopyFBox0e4f6c0b85bd540",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        CopyFBox0e4f6c0b85bd540.setDefaultUnit(voltmx.flex.DP);
        var lblSource = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSource",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFBox0e4f6c0b85bd540.add(lblSource);
        return CopyFBox0e4f6c0b85bd540;
    }
})
;
define("SuspendList/FBox0d0966f03c9db44", [],function() {
    return function(controller) {
        FBox0d0966f03c9db44 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "45dp",
            "id": "FBox0d0966f03c9db44",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0d0966f03c9db44.setDefaultUnit(voltmx.flex.DP);
        var lblSource = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSource",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FBox0d0966f03c9db44.add(lblSource);
        return FBox0d0966f03c9db44;
    }
})
;
define("SuspendList/flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
})
;
define("SuspendList/flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "SuspendList"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
})
;
define("StandardBank/flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "StandardBank"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
})
;
define("StandardBank/flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "StandardBank"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
})
;
define("SBCommon/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("SBCommon/flxSampleRowTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSampleRowTemplateController", ["SBCommon/userflxSampleRowTemplateController", "SBCommon/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("SBCommon/userflxSampleRowTemplateController");
    var controllerActions = ["SBCommon/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("SBCommon/flxSectionHeaderTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSectionHeaderTemplateController", ["SBCommon/userflxSectionHeaderTemplateController", "SBCommon/flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("SBCommon/userflxSectionHeaderTemplateController");
    var controllerActions = ["SBCommon/flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxApproverController", {
    //Type your controller code here 
});
define("SBCommon/flxApproverControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxApproverController", ["SBCommon/userflxApproverController", "SBCommon/flxApproverControllerActions"], function() {
    var controller = require("SBCommon/userflxApproverController");
    var controllerActions = ["SBCommon/flxApproverControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxDropDownController", {
    //Type your controller code here 
});
define("SBCommon/flxDropDownControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxDropDownController", ["SBCommon/userflxDropDownController", "SBCommon/flxDropDownControllerActions"], function() {
    var controller = require("SBCommon/userflxDropDownController");
    var controllerActions = ["SBCommon/flxDropDownControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxSchemeListController", {
    //Type your controller code here 
});
define("SBCommon/flxSchemeListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSchemeListController", ["SBCommon/userflxSchemeListController", "SBCommon/flxSchemeListControllerActions"], function() {
    var controller = require("SBCommon/userflxSchemeListController");
    var controllerActions = ["SBCommon/flxSchemeListControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxRowSuspendController", {
    //Type your controller code here 
});
define("SBCommon/flxRowSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxRowSuspendController", ["SBCommon/userflxRowSuspendController", "SBCommon/flxRowSuspendControllerActions"], function() {
    var controller = require("SBCommon/userflxRowSuspendController");
    var controllerActions = ["SBCommon/flxRowSuspendControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxSuspensionEntryController", {
    //Type your controller code here 
});
define("SBCommon/flxSuspensionEntryControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSuspensionEntryController", ["SBCommon/userflxSuspensionEntryController", "SBCommon/flxSuspensionEntryControllerActions"], function() {
    var controller = require("SBCommon/userflxSuspensionEntryController");
    var controllerActions = ["SBCommon/flxSuspensionEntryControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxSecHdrSuspendController", {
    //Type your controller code here 
});
define("SBCommon/flxSecHdrSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSecHdrSuspendController", ["SBCommon/userflxSecHdrSuspendController", "SBCommon/flxSecHdrSuspendControllerActions"], function() {
    var controller = require("SBCommon/userflxSecHdrSuspendController");
    var controllerActions = ["SBCommon/flxSecHdrSuspendControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxRowController", {
    //Type your controller code here 
});
define("SBCommon/flxRowControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxRowController", ["SBCommon/userflxRowController", "SBCommon/flxRowControllerActions"], function() {
    var controller = require("SBCommon/userflxRowController");
    var controllerActions = ["SBCommon/flxRowControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxRowItemsController", {
    //Type your controller code here 
});
define("SBCommon/flxRowItemsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxRowItemsController", ["SBCommon/userflxRowItemsController", "SBCommon/flxRowItemsControllerActions"], function() {
    var controller = require("SBCommon/userflxRowItemsController");
    var controllerActions = ["SBCommon/flxRowItemsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/userflxSegSecHdrController", {
    //Type your controller code here 
});
define("SBCommon/flxSegSecHdrControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSegSecHdrController", ["SBCommon/userflxSegSecHdrController", "SBCommon/flxSegSecHdrControllerActions"], function() {
    var controller = require("SBCommon/userflxSegSecHdrController");
    var controllerActions = ["SBCommon/flxSegSecHdrControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("ManageScheme/userCopyFBox0g0122a027e2e45Controller", {
    //Type your controller code here 
});
define("ManageScheme/CopyFBox0g0122a027e2e45ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/CopyFBox0g0122a027e2e45Controller", ["ManageScheme/userCopyFBox0g0122a027e2e45Controller", "ManageScheme/CopyFBox0g0122a027e2e45ControllerActions"], function() {
    var controller = require("ManageScheme/userCopyFBox0g0122a027e2e45Controller");
    var controllerActions = ["ManageScheme/CopyFBox0g0122a027e2e45ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("ManageScheme/userFBox0d362f77aee3647Controller", {
    //Type your controller code here 
});
define("ManageScheme/FBox0d362f77aee3647ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/FBox0d362f77aee3647Controller", ["ManageScheme/userFBox0d362f77aee3647Controller", "ManageScheme/FBox0d362f77aee3647ControllerActions"], function() {
    var controller = require("ManageScheme/userFBox0d362f77aee3647Controller");
    var controllerActions = ["ManageScheme/FBox0d362f77aee3647ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("ManageScheme/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("ManageScheme/flxSampleRowTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/flxSampleRowTemplateController", ["ManageScheme/userflxSampleRowTemplateController", "ManageScheme/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("ManageScheme/userflxSampleRowTemplateController");
    var controllerActions = ["ManageScheme/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("ManageScheme/userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("ManageScheme/flxSectionHeaderTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/flxSectionHeaderTemplateController", ["ManageScheme/userflxSectionHeaderTemplateController", "ManageScheme/flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("ManageScheme/userflxSectionHeaderTemplateController");
    var controllerActions = ["ManageScheme/flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("Customer360/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("Customer360/flxSampleRowTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Customer360/flxSampleRowTemplateController", ["Customer360/userflxSampleRowTemplateController", "Customer360/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("Customer360/userflxSampleRowTemplateController");
    var controllerActions = ["Customer360/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("Customer360/userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("Customer360/flxSectionHeaderTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Customer360/flxSectionHeaderTemplateController", ["Customer360/userflxSectionHeaderTemplateController", "Customer360/flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("Customer360/userflxSectionHeaderTemplateController");
    var controllerActions = ["Customer360/flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userCopyFBox0a97028e0935b46Controller", {
    //Type your controller code here 
});
define("SuspendList/CopyFBox0a97028e0935b46ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/CopyFBox0a97028e0935b46Controller", ["SuspendList/userCopyFBox0a97028e0935b46Controller", "SuspendList/CopyFBox0a97028e0935b46ControllerActions"], function() {
    var controller = require("SuspendList/userCopyFBox0a97028e0935b46Controller");
    var controllerActions = ["SuspendList/CopyFBox0a97028e0935b46ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userCopyFBox0b0f2be1354c748Controller", {
    //Type your controller code here 
});
define("SuspendList/CopyFBox0b0f2be1354c748ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/CopyFBox0b0f2be1354c748Controller", ["SuspendList/userCopyFBox0b0f2be1354c748Controller", "SuspendList/CopyFBox0b0f2be1354c748ControllerActions"], function() {
    var controller = require("SuspendList/userCopyFBox0b0f2be1354c748Controller");
    var controllerActions = ["SuspendList/CopyFBox0b0f2be1354c748ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userCopyFBox0d3d990ec800b4eController", {
    //Type your controller code here 
});
define("SuspendList/CopyFBox0d3d990ec800b4eControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/CopyFBox0d3d990ec800b4eController", ["SuspendList/userCopyFBox0d3d990ec800b4eController", "SuspendList/CopyFBox0d3d990ec800b4eControllerActions"], function() {
    var controller = require("SuspendList/userCopyFBox0d3d990ec800b4eController");
    var controllerActions = ["SuspendList/CopyFBox0d3d990ec800b4eControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userCopyFBox0d55305060deb43Controller", {
    //Type your controller code here 
});
define("SuspendList/CopyFBox0d55305060deb43ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/CopyFBox0d55305060deb43Controller", ["SuspendList/userCopyFBox0d55305060deb43Controller", "SuspendList/CopyFBox0d55305060deb43ControllerActions"], function() {
    var controller = require("SuspendList/userCopyFBox0d55305060deb43Controller");
    var controllerActions = ["SuspendList/CopyFBox0d55305060deb43ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userCopyFBox0ec887391a0be42Controller", {
    //Type your controller code here 
});
define("SuspendList/CopyFBox0ec887391a0be42ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/CopyFBox0ec887391a0be42Controller", ["SuspendList/userCopyFBox0ec887391a0be42Controller", "SuspendList/CopyFBox0ec887391a0be42ControllerActions"], function() {
    var controller = require("SuspendList/userCopyFBox0ec887391a0be42Controller");
    var controllerActions = ["SuspendList/CopyFBox0ec887391a0be42ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userCopyFBox0e4f6c0b85bd540Controller", {
    //Type your controller code here 
});
define("SuspendList/CopyFBox0e4f6c0b85bd540ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/CopyFBox0e4f6c0b85bd540Controller", ["SuspendList/userCopyFBox0e4f6c0b85bd540Controller", "SuspendList/CopyFBox0e4f6c0b85bd540ControllerActions"], function() {
    var controller = require("SuspendList/userCopyFBox0e4f6c0b85bd540Controller");
    var controllerActions = ["SuspendList/CopyFBox0e4f6c0b85bd540ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userFBox0d0966f03c9db44Controller", {
    //Type your controller code here 
});
define("SuspendList/FBox0d0966f03c9db44ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/FBox0d0966f03c9db44Controller", ["SuspendList/userFBox0d0966f03c9db44Controller", "SuspendList/FBox0d0966f03c9db44ControllerActions"], function() {
    var controller = require("SuspendList/userFBox0d0966f03c9db44Controller");
    var controllerActions = ["SuspendList/FBox0d0966f03c9db44ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("SuspendList/flxSampleRowTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/flxSampleRowTemplateController", ["SuspendList/userflxSampleRowTemplateController", "SuspendList/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("SuspendList/userflxSampleRowTemplateController");
    var controllerActions = ["SuspendList/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SuspendList/userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("SuspendList/flxSectionHeaderTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/flxSectionHeaderTemplateController", ["SuspendList/userflxSectionHeaderTemplateController", "SuspendList/flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("SuspendList/userflxSectionHeaderTemplateController");
    var controllerActions = ["SuspendList/flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("StandardBank/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("StandardBank/flxSampleRowTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("StandardBank/flxSampleRowTemplateController", ["StandardBank/userflxSampleRowTemplateController", "StandardBank/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("StandardBank/userflxSampleRowTemplateController");
    var controllerActions = ["StandardBank/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("StandardBank/userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("StandardBank/flxSectionHeaderTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("StandardBank/flxSectionHeaderTemplateController", ["StandardBank/userflxSectionHeaderTemplateController", "StandardBank/flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("StandardBank/userflxSectionHeaderTemplateController");
    var controllerActions = ["StandardBank/flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("SBCommon/navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});

define("SBCommon/navigation/NavigationController", {
    //Add your navigation controller code here.
});

define("ManageScheme/navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});

define("ManageScheme/navigation/NavigationController", {
    //Add your navigation controller code here.
});

define("Customer360/navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});

define("Customer360/navigation/NavigationController", {
    //Add your navigation controller code here.
});

define("SuspendList/navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});

define("SuspendList/navigation/NavigationController", {
    //Add your navigation controller code here.
});

define("StandardBank/navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});

define("StandardBank/navigation/NavigationController", {
    //Add your navigation controller code here.
});

require(['applicationController','com/hc/segApprover/SegApproverScheme/SegApproverSchemeController','com/hc/segApprover/SegApproverScheme/SegApproverScheme','com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesController','com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntries','com/hcl/addSuspend/AddSuspend/AddSuspendController','com/hcl/addSuspend/AddSuspend/AddSuspend','com/hcl/dropDown/DropDown/DropDownController','com/hcl/dropDown/DropDown/DropDown','com/hcl/hdr/FormHeader/FormHeaderController','com/hcl/hdr/FormHeader/FormHeader','com/hcl/labelField/LabelsField/LabelsFieldController','com/hcl/labelField/LabelsField/LabelsField','com/hcl/lblList/LabelList/LabelListController','com/hcl/lblList/LabelList/LabelList','com/hcl/lblText/LabelTextBox/LabelTextBoxController','com/hcl/lblText/LabelTextBox/LabelTextBox','com/hcl/lblTextArea/LabelTextArea/LabelTextAreaController','com/hcl/lblTextArea/LabelTextArea/LabelTextArea','com/hcl/listData/ListBoxData/ListBoxDataController','com/hcl/listData/ListBoxData/ListBoxData','com/hcl/menu/SideMenu/SideMenuController','com/hcl/menu/SideMenu/SideMenu','com/hcl/popup/AlertUp/AlertUpController','com/hcl/popup/AlertUp/AlertUp','com/hcl/schemeList/SchemeList/SchemeListController','com/hcl/schemeList/SchemeList/SchemeList','com/hcl/segDropDown/SegDropDown/SegDropDownController','com/hcl/segDropDown/SegDropDown/SegDropDown','com/hcl/segHdr/segHeader/segHeaderController','com/hcl/segHdr/segHeader/segHeader','com/hcl/segSuspend/SegSuspendList/SegSuspendListController','com/hcl/segSuspend/SegSuspendList/SegSuspendList','com/hcl/srchTextBox/SrchTextBox/SrchTextBoxController','com/hcl/srchTextBox/SrchTextBox/SrchTextBox','com/hcl/subHdr/SubHdr/SubHdrController','com/hcl/subHdr/SubHdr/SubHdr','com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrController','com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdr','com/riskrating/chart/RiskRateChart/RiskRateChartController','com/riskrating/chart/RiskRateChart/RiskRateChart','com/konymp/halfdonutup/analytics','com/konymp/halfdonutup/konyLogger','com/konymp/halfdonutup/halfdonutupController','com/konymp/halfdonutup/halfdonutup','com/konymp/halfdonutup/halfdonutupConfig','com/konymp/linechart/analytics','com/konymp/linechart/konyLogger','com/konymp/linechart/linechartController','com/konymp/linechart/linechart','com/konymp/linechart/linechartConfig','com/konymp/Login/LoginController','com/konymp/Login/Login','SBCommon/flxSampleRowTemplate','SBCommon/flxSectionHeaderTemplate','SBCommon/flxApprover','SBCommon/flxDropDown','SBCommon/flxSchemeList','SBCommon/flxRowSuspend','SBCommon/flxSuspensionEntry','SBCommon/flxSecHdrSuspend','SBCommon/flxRow','SBCommon/flxRowItems','SBCommon/flxSegSecHdr','ManageScheme/CopyFBox0g0122a027e2e45','ManageScheme/FBox0d362f77aee3647','ManageScheme/flxSampleRowTemplate','ManageScheme/flxSectionHeaderTemplate','Customer360/flxSampleRowTemplate','Customer360/flxSectionHeaderTemplate','SuspendList/CopyFBox0a97028e0935b46','SuspendList/CopyFBox0b0f2be1354c748','SuspendList/CopyFBox0d3d990ec800b4e','SuspendList/CopyFBox0d55305060deb43','SuspendList/CopyFBox0ec887391a0be42','SuspendList/CopyFBox0e4f6c0b85bd540','SuspendList/FBox0d0966f03c9db44','SuspendList/flxSampleRowTemplate','SuspendList/flxSectionHeaderTemplate','StandardBank/flxSampleRowTemplate','StandardBank/flxSectionHeaderTemplate','SBCommon/flxSampleRowTemplateController','SBCommon/flxSectionHeaderTemplateController','SBCommon/flxApproverController','SBCommon/flxDropDownController','SBCommon/flxSchemeListController','SBCommon/flxRowSuspendController','SBCommon/flxSuspensionEntryController','SBCommon/flxSecHdrSuspendController','SBCommon/flxRowController','SBCommon/flxRowItemsController','SBCommon/flxSegSecHdrController','ManageScheme/CopyFBox0g0122a027e2e45Controller','ManageScheme/FBox0d362f77aee3647Controller','ManageScheme/flxSampleRowTemplateController','ManageScheme/flxSectionHeaderTemplateController','Customer360/flxSampleRowTemplateController','Customer360/flxSectionHeaderTemplateController','SuspendList/CopyFBox0a97028e0935b46Controller','SuspendList/CopyFBox0b0f2be1354c748Controller','SuspendList/CopyFBox0d3d990ec800b4eController','SuspendList/CopyFBox0d55305060deb43Controller','SuspendList/CopyFBox0ec887391a0be42Controller','SuspendList/CopyFBox0e4f6c0b85bd540Controller','SuspendList/FBox0d0966f03c9db44Controller','SuspendList/flxSampleRowTemplateController','SuspendList/flxSectionHeaderTemplateController','StandardBank/flxSampleRowTemplateController','StandardBank/flxSectionHeaderTemplateController','SBCommon/navigation/NavigationModel','SBCommon/navigation/NavigationController','ManageScheme/navigation/NavigationModel','ManageScheme/navigation/NavigationController','Customer360/navigation/NavigationModel','Customer360/navigation/NavigationController','SuspendList/navigation/NavigationModel','SuspendList/navigation/NavigationController','StandardBank/navigation/NavigationModel','StandardBank/navigation/NavigationController'], function(){});

define("sparequirefileslist", function(){});

