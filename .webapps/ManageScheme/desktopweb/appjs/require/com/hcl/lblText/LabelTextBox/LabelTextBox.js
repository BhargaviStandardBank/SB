define(function() {
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