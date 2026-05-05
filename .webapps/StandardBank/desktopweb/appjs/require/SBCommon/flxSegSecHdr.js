define("SBCommon/flxSegSecHdr", function() {
    return function(controller) {
        var flxSegSecHdr = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "40px",
            "id": "flxSegSecHdr",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBGEDF5FF",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxSegSecHdr.setDefaultUnit(voltmx.flex.DP);
        var FlexGroup0a043cf8cc66045 = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "100%",
            "id": "FlexGroup0a043cf8cc66045",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        FlexGroup0a043cf8cc66045.setDefaultUnit(voltmx.flex.DP);
        var imgIcon = new voltmx.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "1%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSectionTitle = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSectionTitle",
            "isVisible": true,
            "left": "1%",
            "skin": "sknLblHeading5",
            "text": "Label",
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexGroup0a043cf8cc66045.add(imgIcon, lblSectionTitle);
        var flxLine = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxLine",
            "height": "1%",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxLine",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "SBCommon"
        }, {
            "paddingInPixel": false
        }, {});
        flxLine.setDefaultUnit(voltmx.flex.DP);
        flxLine.add();
        flxSegSecHdr.add(FlexGroup0a043cf8cc66045, flxLine);
        return flxSegSecHdr;
    }
})