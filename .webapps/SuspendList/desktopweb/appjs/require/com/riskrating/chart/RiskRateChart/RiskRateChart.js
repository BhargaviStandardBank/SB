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
        }, controller.args[0], "RiskRateChart"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "RiskRateChart"), extendConfig({}, controller.args[2], "RiskRateChart"));
        RiskRateChart.setDefaultUnit(voltmx.flex.DP);
        var FlexGroup0f364368a6aa841 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": false,
            "height": "100%",
            "id": "FlexGroup0f364368a6aa841",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "500dp",
            "appName": "SBCommon"
        }, controller.args[0], "FlexGroup0f364368a6aa841"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexGroup0f364368a6aa841"), extendConfig({}, controller.args[2], "FlexGroup0f364368a6aa841"));
        FlexGroup0f364368a6aa841.setDefaultUnit(voltmx.flex.DP);
        var imgChart = new voltmx.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgChart",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_rating.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgChart"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgChart"), extendConfig({}, controller.args[2], "imgChart"));
        var lblSubStandard = new voltmx.ui.Label(extendConfig({
            "centerX": "13%",
            "centerY": "70%",
            "id": "lblSubStandard",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Sub Standard",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblSubStandard"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubStandard"), extendConfig({}, controller.args[2], "lblSubStandard"));
        var lblVeryHigh = new voltmx.ui.Label(extendConfig({
            "centerX": "26%",
            "centerY": "42%",
            "id": "lblVeryHigh",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Very High",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblVeryHigh"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVeryHigh"), extendConfig({}, controller.args[2], "lblVeryHigh"));
        var lblHigh = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "28%",
            "id": "lblHigh",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "High",
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
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblMedium"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMedium"), extendConfig({}, controller.args[2], "lblMedium"));
        var lblLow = new voltmx.ui.Label(extendConfig({
            "centerX": "87%",
            "centerY": "71%",
            "id": "lblLow",
            "isVisible": true,
            "skin": "sknLblWhite",
            "text": "Low",
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
            "centerY": "84%",
            "clipBounds": false,
            "height": "60dp",
            "id": "flxPin",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxPin"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxPin"), extendConfig({}, controller.args[2], "flxPin"));
        flxPin.setDefaultUnit(voltmx.flex.DP);
        var imgPin = new voltmx.ui.Image2(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "120dp",
            "id": "imgPin",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_pin.png",
            "width": "26dp",
            "zIndex": 1
        }, controller.args[0], "imgPin"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPin"), extendConfig({}, controller.args[2], "imgPin"));
        flxPin.add(imgPin);
        FlexGroup0f364368a6aa841.add(imgChart, lblSubStandard, lblVeryHigh, lblHigh, lblMedium, lblLow, flxPin);
        RiskRateChart.add(FlexGroup0f364368a6aa841);
        RiskRateChart.compInstData = {}
        return RiskRateChart;
    }
})