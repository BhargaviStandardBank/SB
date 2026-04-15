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
        voltmx.mvc.registry.add("flxAddSuspendRow", {
            "viewName": "flxAddSuspendRow",
            "controllerName": "flxAddSuspendRowController",
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
        voltmx.mvc.registry.add("frmHome", {
            "viewName": "frmHome",
            "controllerName": "frmHomeController",
            "appName": "SBCommon"
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
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation({
            "friendlyName": "frmAddSuspend",
            "appName": "SuspendList"
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
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
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
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [{
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }, {
                "imgDelet": "imagedrag.png",
                "lblCIFNo": "CIF No",
                "lblCustomerName": "Customer Name",
                "lblIDNo": "ID No",
                "lblReason": "Reason"
            }],
            "groupCells": false,
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
            "rowTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxAddSuspendRow"
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
            "focusSkin": "sknFlxTrans",
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
            "top": "3dp",
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
        masterData: [{
            header: {
                lblSectionTitle: "Master Suspend List",
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
                formID: "frmScoredOffer"
            }]
        }, {
            header: {
                lblSectionTitle: "Manage Scheme",
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
                lblSectionTitle: "Customer 360",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Customer Info",
                formID: {
                    "appName": "Customer360",
                    "friendlyName": "frmCustomer"
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
        }],
        constructor: function() {
            this.view.preShow = this.invokePreShow.bind(this);
            this.view.segMenu.onRowClick = this.onRowItemClick.bind(this);
        },
        invokePreShow: function() {
            try {
                this.view.segMenu.widgetDataMap = {
                    lblSectionTitle: "lblSectionTitle",
                    lblMenuItem: "lblMenuItem",
                    flxSegSecHdr: "flxSegSecHdr"
                };
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
        refreshMenu: function() {
            const segmentData = this.masterData.map((section, index) => {
                const headerObj = {
                    lblSectionTitle: section.header.lblSectionTitle,
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
            const currentState = this.masterData[sectionIndex].header.isExpanded;
            // Logic: Collapse others (Accordion style)
            this.masterData.forEach(item => {
                item.header.isExpanded = false;
            });
            this.masterData[sectionIndex].header.isExpanded = !currentState;
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
            "focusSkin": "sknFlxTrans",
            "height": "100%",
            "id": "SideMenu",
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
        }, controller.args[0], "SideMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SideMenu"), extendConfig({}, controller.args[2], "SideMenu"));
        SideMenu.setDefaultUnit(voltmx.flex.DP);
        var flxLogo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "120dp",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxLogo"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogo"), extendConfig({}, controller.args[2], "flxLogo"));
        flxLogo.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100dp",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "slImage",
            "src": "sblogo.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        flxLogo.add(imgLogo);
        var flxSegMenu = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "64dp",
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "focusSkin": "sknFlxSrcTrans",
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
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSegMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSegMenu"), extendConfig({}, controller.args[2], "flxSegMenu"));
        flxSegMenu.setDefaultUnit(voltmx.flex.DP);
        var segMenu = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [
                [{
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
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
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
                "flxLine": "flxLine",
                "flxRowItems": "flxRowItems",
                "flxSegSecHdr": "flxSegSecHdr",
                "lblMenuItem": "lblMenuItem",
                "lblSectionTitle": "lblSectionTitle"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segMenu"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMenu"), extendConfig({}, controller.args[2], "segMenu"));
        flxSegMenu.add(segMenu);
        var flxUserDetails = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "64dp",
            "id": "flxUserDetails",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "width": "100%",
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
        SideMenu.add(flxLogo, flxSegMenu, flxUserDetails);
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
            "skin": "sknFlxWhiteBrd",
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
define("SBCommon/flxAddSuspendRow", [],function() {
    return function(controller) {
        var flxAddSuspendRow = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "40dp",
            "id": "flxAddSuspendRow",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxAddSuspendRow.setDefaultUnit(voltmx.flex.DP);
        var lblAdd = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblAdd",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknLblFormLevel",
            "text": "Label",
            "top": "13dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAddSuspendRow.add(lblAdd);
        return flxAddSuspendRow;
    }
})
;
define("SBCommon/flxApprover", [],function() {
    return function(controller) {
        var flxApprover = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "40dp",
            "id": "flxApprover",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "focusSkin": "slFFocusbox",
            "height": "25dp",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "src": "imagedrag.png",
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
            "focusSkin": "slFFocusbox",
            "height": "25dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
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
            "isVisible": false,
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
            "width": "8%",
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
            "width": "7%",
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
            "width": "3%",
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
            "width": "8%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "width": "7%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "width": "9%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "width": "7.10%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "width": "8%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "width": "7.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
            "width": "7.40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
        flxRow.add(lblAcctType, lblAccNo, lblBRI, lblOutstandingBal, lblInstalment, lblArrearsExcess, lblAmountDue, lblOrgLoanAmt, lblOrgLimit, lblCurrentLimit, lblInterestRate);
        return flxRow;
    }
})
;
define("SBCommon/flxRowItems", [],function() {
    return function(controller) {
        var flxRowItems = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxRowFocus",
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
            "left": "4%",
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
            "focusSkin": "sknFlxBGEDF5FF",
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
        var lblSectionTitle = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSectionTitle",
            "isVisible": true,
            "left": "4%",
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
        var flxLine = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "29%",
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
        flxSegSecHdr.add(lblSectionTitle, flxLine);
        return flxSegSecHdr;
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

define("SBCommon/userflxAddSuspendRowController", {
    //Type your controller code here 
});
define("SBCommon/flxAddSuspendRowControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxAddSuspendRowController", ["SBCommon/userflxAddSuspendRowController", "SBCommon/flxAddSuspendRowControllerActions"], function() {
    var controller = require("SBCommon/userflxAddSuspendRowController");
    var controllerActions = ["SBCommon/flxAddSuspendRowControllerActions"];
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

define("SBCommon/navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});

define("SBCommon/navigation/NavigationController", {
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

require(['applicationController','com/hc/segApprover/SegApproverScheme/SegApproverSchemeController','com/hc/segApprover/SegApproverScheme/SegApproverScheme','com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesController','com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntries','com/hcl/addSuspend/AddSuspend/AddSuspendController','com/hcl/addSuspend/AddSuspend/AddSuspend','com/hcl/dropDown/DropDown/DropDownController','com/hcl/dropDown/DropDown/DropDown','com/hcl/hdr/FormHeader/FormHeaderController','com/hcl/hdr/FormHeader/FormHeader','com/hcl/labelField/LabelsField/LabelsFieldController','com/hcl/labelField/LabelsField/LabelsField','com/hcl/lblList/LabelList/LabelListController','com/hcl/lblList/LabelList/LabelList','com/hcl/lblText/LabelTextBox/LabelTextBoxController','com/hcl/lblText/LabelTextBox/LabelTextBox','com/hcl/listData/ListBoxData/ListBoxDataController','com/hcl/listData/ListBoxData/ListBoxData','com/hcl/menu/SideMenu/SideMenuController','com/hcl/menu/SideMenu/SideMenu','com/hcl/popup/AlertUp/AlertUpController','com/hcl/popup/AlertUp/AlertUp','com/hcl/schemeList/SchemeList/SchemeListController','com/hcl/schemeList/SchemeList/SchemeList','com/hcl/segDropDown/SegDropDown/SegDropDownController','com/hcl/segDropDown/SegDropDown/SegDropDown','com/hcl/segHdr/segHeader/segHeaderController','com/hcl/segHdr/segHeader/segHeader','com/hcl/segSuspend/SegSuspendList/SegSuspendListController','com/hcl/segSuspend/SegSuspendList/SegSuspendList','com/hcl/srchTextBox/SrchTextBox/SrchTextBoxController','com/hcl/srchTextBox/SrchTextBox/SrchTextBox','com/hcl/subHdr/SubHdr/SubHdrController','com/hcl/subHdr/SubHdr/SubHdr','com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrController','com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdr','SBCommon/flxSampleRowTemplate','SBCommon/flxSectionHeaderTemplate','SBCommon/flxAddSuspendRow','SBCommon/flxApprover','SBCommon/flxDropDown','SBCommon/flxSchemeList','SBCommon/flxRowSuspend','SBCommon/flxSuspensionEntry','SBCommon/flxSecHdrSuspend','SBCommon/flxRow','SBCommon/flxRowItems','SBCommon/flxSegSecHdr','SuspendList/CopyFBox0a97028e0935b46','SuspendList/CopyFBox0b0f2be1354c748','SuspendList/CopyFBox0d3d990ec800b4e','SuspendList/CopyFBox0d55305060deb43','SuspendList/CopyFBox0ec887391a0be42','SuspendList/CopyFBox0e4f6c0b85bd540','SuspendList/FBox0d0966f03c9db44','SuspendList/flxSampleRowTemplate','SuspendList/flxSectionHeaderTemplate','SBCommon/flxSampleRowTemplateController','SBCommon/flxSectionHeaderTemplateController','SBCommon/flxAddSuspendRowController','SBCommon/flxApproverController','SBCommon/flxDropDownController','SBCommon/flxSchemeListController','SBCommon/flxRowSuspendController','SBCommon/flxSuspensionEntryController','SBCommon/flxSecHdrSuspendController','SBCommon/flxRowController','SBCommon/flxRowItemsController','SBCommon/flxSegSecHdrController','SuspendList/CopyFBox0a97028e0935b46Controller','SuspendList/CopyFBox0b0f2be1354c748Controller','SuspendList/CopyFBox0d3d990ec800b4eController','SuspendList/CopyFBox0d55305060deb43Controller','SuspendList/CopyFBox0ec887391a0be42Controller','SuspendList/CopyFBox0e4f6c0b85bd540Controller','SuspendList/FBox0d0966f03c9db44Controller','SuspendList/flxSampleRowTemplateController','SuspendList/flxSectionHeaderTemplateController','SBCommon/navigation/NavigationModel','SBCommon/navigation/NavigationController','SuspendList/navigation/NavigationModel','SuspendList/navigation/NavigationController'], function(){});

define("sparequirefileslist", function(){});

