define(function() {
    return function(controller) {
        var AlertUp = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": false,
            "isMaster": true,
            "id": "AlertUp",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxWhiteBrd",
            "width": "400dp",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "AlertUp"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "AlertUp"), extendConfig({}, controller.args[2], "AlertUp"));
        AlertUp.setDefaultUnit(voltmx.flex.DP);
        var imgAlert = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "65dp",
            "id": "imgAlert",
            "isVisible": true,
            "left": "596dp",
            "skin": "slImage",
            "src": "icon_alertcheck.png",
            "top": "32dp",
            "width": "65dp",
            "zIndex": 1
        }, controller.args[0], "imgAlert"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAlert"), extendConfig({}, controller.args[2], "imgAlert"));
        var lblAlertHdr = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAlertHdr",
            "isVisible": true,
            "left": "650dp",
            "skin": "sknLblHeading2",
            "text": "Are you sure?",
            "top": "32dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAlertHdr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAlertHdr"), extendConfig({}, controller.args[2], "lblAlertHdr"));
        var lblAlertMessg = new voltmx.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAlertMessg",
            "isVisible": true,
            "left": "646dp",
            "skin": "sknLblHeading5",
            "text": "Are you sure you want to exist the session?",
            "top": "32dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAlertMessg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAlertMessg"), extendConfig({}, controller.args[2], "lblAlertMessg"));
        var lblAlertMsg2 = new voltmx.ui.Label(extendConfig({
            "bottom": "32dp",
            "centerX": "50%",
            "id": "lblAlertMsg2",
            "isVisible": true,
            "skin": "sknLblHeading5",
            "text": "All entries added will be discarded.",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAlertMsg2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAlertMsg2"), extendConfig({}, controller.args[2], "lblAlertMsg2"));
        var flxBtnsExist = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "32dp",
            "centerX": "50%",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxBtnsExist",
            "isVisible": false,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "width": "300dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxBtnsExist"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxBtnsExist"), extendConfig({}, controller.args[2], "flxBtnsExist"));
        flxBtnsExist.setDefaultUnit(voltmx.flex.DP);
        var btnCancel = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnGrey",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "16dp",
            "skin": "sknBtnGrey",
            "text": "CANCEL",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [24, 4, 24, 4],
            "paddingInPixel": true
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        var btnExist = new voltmx.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnBlue",
            "height": "100%",
            "id": "btnExist",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknBtnBlue",
            "text": "EXIT SESSION",
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnExist"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [24, 4, 24, 4],
            "paddingInPixel": true
        }, controller.args[1], "btnExist"), extendConfig({}, controller.args[2], "btnExist"));
        flxBtnsExist.add(btnCancel, btnExist);
        var flxRequestHistory = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "32dp",
            "centerX": "50%",
            "clipBounds": false,
            "height": "40dp",
            "id": "flxRequestHistory",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "300dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxRequestHistory"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRequestHistory"), extendConfig({}, controller.args[2], "flxRequestHistory"));
        flxRequestHistory.setDefaultUnit(voltmx.flex.DP);
        var btnRequestHistory = new voltmx.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnBlue",
            "height": "100%",
            "id": "btnRequestHistory",
            "isVisible": true,
            "skin": "sknBtnBlue",
            "text": "VIEW REQUEST HISTORY",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnRequestHistory"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [24, 4, 24, 4],
            "paddingInPixel": true
        }, controller.args[1], "btnRequestHistory"), extendConfig({}, controller.args[2], "btnRequestHistory"));
        flxRequestHistory.add(btnRequestHistory);
        AlertUp.add(imgAlert, lblAlertHdr, lblAlertMessg, lblAlertMsg2, flxBtnsExist, flxRequestHistory);
        AlertUp.compInstData = {}
        return AlertUp;
    }
})