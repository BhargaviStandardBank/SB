define(function() {
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