define(function() {
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