define(function() {
    return function(controller) {
        var SubHdr = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "45dp",
            "id": "SubHdr",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxTrans",
            "top": "8dp",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SubHdr"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SubHdr"), extendConfig({}, controller.args[2], "SubHdr"));
        SubHdr.setDefaultUnit(voltmx.flex.DP);
        var lblSubHdr = new voltmx.ui.Label(extendConfig({
            "centerY": "45%",
            "id": "lblSubHdr",
            "isVisible": true,
            "left": "24dp",
            "skin": "sknLblHeading4Bold",
            "text": "Label",
            "top": "4dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSubHdr"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubHdr"), extendConfig({}, controller.args[2], "lblSubHdr"));
        var flxSeperator = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhiteBdr",
            "top": "43dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxSeperator"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(voltmx.flex.DP);
        flxSeperator.add();
        SubHdr.add(lblSubHdr, flxSeperator);
        SubHdr.compInstData = {}
        return SubHdr;
    }
})