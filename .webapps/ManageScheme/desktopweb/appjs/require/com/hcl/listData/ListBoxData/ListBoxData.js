define(function() {
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