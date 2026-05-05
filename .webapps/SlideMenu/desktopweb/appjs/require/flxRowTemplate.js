define("flxRowTemplate", function() {
    return function(controller) {
        var flxRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "60dp",
            "id": "flxRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0j9ad81d1887942",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var flxGrp = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "height": "70dp",
            "id": "flxGrp",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i1e7cde5e25743",
            "top": "10dp",
            "width": "100%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxGrp.setDefaultUnit(voltmx.flex.DP);
        var imgIcon = new voltmx.ui.Image2({
            "height": "50dp",
            "id": "imgIcon",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0",
            "width": "50dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblText = new voltmx.ui.Label({
            "height": "50dp",
            "id": "lblText",
            "isVisible": true,
            "left": "60dp",
            "skin": "CopydefLabel0aa6c7e6fed644f",
            "text": "Label",
            "top": "0",
            "width": voltmx.flex.USE_PREFERRED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxGrp.add(imgIcon, lblText);
        flxRowTemplate.add(flxGrp);
        return flxRowTemplate;
    }
})