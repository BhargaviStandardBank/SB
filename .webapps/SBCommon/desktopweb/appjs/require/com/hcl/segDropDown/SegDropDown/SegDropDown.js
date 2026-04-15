define(function() {
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
            "rowTemplate": "flxDropDown",
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