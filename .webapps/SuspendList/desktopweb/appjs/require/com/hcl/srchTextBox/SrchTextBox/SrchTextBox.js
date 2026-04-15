define(function() {
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