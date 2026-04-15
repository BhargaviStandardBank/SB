define("SBCommon/flxSegSecHdr", function() {
    return function(controller) {
        var flxSegSecHdr = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknFlxBGEDF5FF",
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
        var lblSectionTitle = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblSectionTitle",
            "isVisible": true,
            "left": "4%",
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
        var flxLine = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "centerY": "29%",
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
        flxSegSecHdr.add(lblSectionTitle, flxLine);
        return flxSegSecHdr;
    }
})