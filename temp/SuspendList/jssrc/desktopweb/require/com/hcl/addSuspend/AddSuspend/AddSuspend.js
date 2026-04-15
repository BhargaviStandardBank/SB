define(function() {
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