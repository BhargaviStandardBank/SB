define(function() {
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