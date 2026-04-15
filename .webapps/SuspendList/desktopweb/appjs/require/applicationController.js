define({
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