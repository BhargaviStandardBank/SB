define(function() {
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