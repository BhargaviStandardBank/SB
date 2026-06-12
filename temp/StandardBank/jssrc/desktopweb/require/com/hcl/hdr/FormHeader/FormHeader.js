define(function() {
    return function(controller) {
        var FormHeader = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "60px",
            "id": "FormHeader",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlexMenu",
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
            "skin": "sknLblHeading2White",
            "text": "Label",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHdr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHdr"), extendConfig({}, controller.args[2], "lblHdr"));
        var FlexContainer0cfbd412f8d984f = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "100%",
            "id": "FlexContainer0cfbd412f8d984f",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "24dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "40%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "FlexContainer0cfbd412f8d984f"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexContainer0cfbd412f8d984f"), extendConfig({}, controller.args[2], "FlexContainer0cfbd412f8d984f"));
        FlexContainer0cfbd412f8d984f.setDefaultUnit(voltmx.flex.DP);
        var imgLogout = new voltmx.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "32dp",
            "id": "imgLogout",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "icon_logout.png",
            "top": "23dp",
            "width": "32dp",
            "zIndex": 1
        }, controller.args[0], "imgLogout"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogout"), extendConfig({}, controller.args[2], "imgLogout"));
        var FlexContainer0c5eafe3e5fdf45 = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "80%",
            "id": "FlexContainer0c5eafe3e5fdf45",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "25dp",
            "skin": "sknFlxWhite20Opac",
            "top": "35dp",
            "width": "1px",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "FlexContainer0c5eafe3e5fdf45"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "FlexContainer0c5eafe3e5fdf45"), extendConfig({}, controller.args[2], "FlexContainer0c5eafe3e5fdf45"));
        FlexContainer0c5eafe3e5fdf45.setDefaultUnit(voltmx.flex.DP);
        FlexContainer0c5eafe3e5fdf45.add();
        var Label0b2fdf6dd443b44 = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "Label0b2fdf6dd443b44",
            "isVisible": true,
            "right": "24dp",
            "skin": "sknLblHeading2White",
            "text": "UserName",
            "top": "13dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "Label0b2fdf6dd443b44"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Label0b2fdf6dd443b44"), extendConfig({}, controller.args[2], "Label0b2fdf6dd443b44"));
        FlexContainer0cfbd412f8d984f.add(imgLogout, FlexContainer0c5eafe3e5fdf45, Label0b2fdf6dd443b44);
        FormHeader.add(lblHdr, FlexContainer0cfbd412f8d984f);
        FormHeader.compInstData = {}
        return FormHeader;
    }
})