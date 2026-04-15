define(function() {
    return function(controller) {
        var RiskRateChart = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "slFFocusbox",
            "height": "340dp",
            "id": "RiskRateChart",
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
            "appName": "Speedometer"
        }, controller.args[0], "RiskRateChart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "RiskRateChart"), extendConfig({}, controller.args[2], "RiskRateChart"));
        RiskRateChart.setDefaultUnit(voltmx.flex.DP);
        var flxMain = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerX": "50%",
            "clipBounds": false,
            "height": "112.75%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "460dp",
            "appName": "Speedometer"
        }, controller.args[0], "flxMain"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(voltmx.flex.DP);
        var imgChart = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "imgChart",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "iconrating.png",
            "top": "0dp",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "imgChart"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgChart"), extendConfig({}, controller.args[2], "imgChart"));
        var lblSubStandard = new voltmx.ui.Label(extendConfig({
            "centerY": "70%",
            "id": "lblSubStandard",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLblWhite",
            "text": "Sub           Standard",
            "textStyle": {},
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "lblSubStandard"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubStandard"), extendConfig({}, controller.args[2], "lblSubStandard"));
        var lblVeryHigh = new voltmx.ui.Label(extendConfig({
            "id": "lblVeryHigh",
            "isVisible": true,
            "left": "12%",
            "skin": "sknLblWhite",
            "text": "Very High",
            "textStyle": {},
            "top": "40%",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblVeryHigh"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVeryHigh"), extendConfig({}, controller.args[2], "lblVeryHigh"));
        var lblHigh = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "35%",
            "id": "lblHigh",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "High",
            "textStyle": {},
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "lblHigh"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHigh"), extendConfig({}, controller.args[2], "lblHigh"));
        var lblMedium = new voltmx.ui.Label(extendConfig({
            "centerX": "73%",
            "centerY": "42%",
            "id": "lblMedium",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Medium",
            "textStyle": {},
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblMedium"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMedium"), extendConfig({}, controller.args[2], "lblMedium"));
        var lblLow = new voltmx.ui.Label(extendConfig({
            "centerY": "70%",
            "id": "lblLow",
            "isVisible": true,
            "right": "0",
            "skin": "sknLblWhite",
            "text": "Low",
            "textStyle": {},
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblLow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLow"), extendConfig({}, controller.args[2], "lblLow"));
        var flxPin = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "80%",
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "60dp",
            "id": "flxPin",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "60dp",
            "zIndex": 1,
            "appName": "Speedometer"
        }, controller.args[0], "flxPin"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPin"), extendConfig({}, controller.args[2], "flxPin"));
        flxPin.setDefaultUnit(voltmx.flex.DP);
        var imgPin = new voltmx.ui.Image2(extendConfig({
            "bottom": 20,
            "centerX": "50%",
            "height": "120dp",
            "id": "imgPin",
            "isVisible": true,
            "skin": "slImage",
            "src": "iconpin.png",
            "width": "26dp",
            "zIndex": 1
        }, controller.args[0], "imgPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPin"), extendConfig({}, controller.args[2], "imgPin"));
        flxPin.add(imgPin);
        flxMain.add(imgChart, lblSubStandard, lblVeryHigh, lblHigh, lblMedium, lblLow, flxPin);
        var flxMainValueSubmit = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0",
            "centerX": "50%",
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "25%",
            "id": "flxMainValueSubmit",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "70%",
            "appName": "Speedometer"
        }, controller.args[0], "flxMainValueSubmit"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxMainValueSubmit"), extendConfig({}, controller.args[2], "flxMainValueSubmit"));
        flxMainValueSubmit.setDefaultUnit(voltmx.flex.DP);
        var txtRating = new voltmx.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "defTextBoxFocus",
            "height": "40%",
            "id": "txtRating",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "placeholder": "Enter Valure",
            "secureTextEntry": false,
            "skin": "defTextBoxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "220dp",
            "zIndex": 1
        }, controller.args[0], "txtRating"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtRating"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        }, controller.args[2], "txtRating"));
        var btnSubmit = new voltmx.ui.Button(extendConfig({
            "bottom": "0dp",
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "40%",
            "id": "btnSubmit",
            "isVisible": true,
            "skin": "defBtnNormal",
            "text": "Submit",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "btnSubmit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSubmit"), extendConfig({}, controller.args[2], "btnSubmit"));
        flxMainValueSubmit.add(txtRating, btnSubmit);
        RiskRateChart.add(flxMain, flxMainValueSubmit);
        return RiskRateChart;
    }
})