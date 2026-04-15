define(function() {
    return function(controller) {
        var LabelList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "isMaster": true,
            "id": "LabelList",
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
        }, controller.args[0], "LabelList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "LabelList"), extendConfig({}, controller.args[2], "LabelList"));
        LabelList.setDefaultUnit(voltmx.flex.DP);
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
        var flxList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTextBox",
            "top": "4dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxList"), extendConfig({}, controller.args[2], "flxList"));
        flxList.setDefaultUnit(voltmx.flex.DP);
        var listData = new voltmx.ui.ListBox(extendConfig({
            "focusSkin": "defListBoxFocus",
            "id": "listData",
            "isVisible": true,
            "left": "0dp",
            "masterData": [
                ["lb1", "Placeholder One"],
                ["lb2", "Placeholder Two"],
                ["lb3", "Placeholder Three"]
            ],
            "skin": "sknListTrans",
            "top": "0dp",
            "width": "98%",
            "zIndex": 1
        }, controller.args[0], "listData"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [16, 0, 0, 0],
            "paddingInPixel": true
        }, controller.args[1], "listData"), extendConfig({
            "multiSelect": false
        }, controller.args[2], "listData"));
        var flxDropDwnList = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxDropDwnList",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "sknFlxImagList",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxDropDwnList"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxDropDwnList"), extendConfig({}, controller.args[2], "flxDropDwnList"));
        flxDropDwnList.setDefaultUnit(voltmx.flex.DP);
        var imgDropDwn = new voltmx.ui.Image2(extendConfig({
            "height": "35dp",
            "id": "imgDropDwn",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_dropdwn.png",
            "top": "4dp",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgDropDwn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDropDwn"), extendConfig({}, controller.args[2], "imgDropDwn"));
        flxDropDwnList.add(imgDropDwn);
        flxList.add(listData, flxDropDwnList);
        LabelList.add(lblDetail, flxList);
        LabelList.compInstData = {}
        return LabelList;
    }
})