define('applicationController',{
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("flxContent", {
            "viewName": "flxContent",
            "controllerName": "flxContentController"
        });
        voltmx.mvc.registry.add("flxRowTemplate", {
            "viewName": "flxRowTemplate",
            "controllerName": "flxRowTemplateController"
        });
        voltmx.mvc.registry.add("frmHome", {
            "viewName": "frmHome",
            "controllerName": "frmHomeController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("frmHome").navigate();
    }
});
define("flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
});
define("flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
});
define("flxContent", [],function() {
    return function(controller) {
        var flxContent = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0c895d4865b2744",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxContent.setDefaultUnit(voltmx.flex.DP);
        var flxRight = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "48%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxRight.setDefaultUnit(voltmx.flex.DP);
        var lblAppName = new voltmx.ui.Label({
            "id": "lblAppName",
            "isVisible": true,
            "left": "0",
            "skin": "defLabel",
            "text": "App1",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl2 = new voltmx.ui.Label({
            "id": "lbl2",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App  Data",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl3 = new voltmx.ui.Label({
            "id": "lbl3",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Details",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lbl4 = new voltmx.ui.Label({
            "id": "lbl4",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Publish",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRight.add(lblAppName, lbl2, lbl3, lbl4);
        var flxLeft = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "focusSkin": "slFFocusbox",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": voltmx.flex.FLOW_VERTICAL,
            "left": "4%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "48%",
            "appName": "SlideMenu"
        }, {
            "paddingInPixel": false
        }, {});
        flxLeft.setDefaultUnit(voltmx.flex.DP);
        var CopylblAppName0g05b33d32f1146 = new voltmx.ui.Label({
            "id": "CopylblAppName0g05b33d32f1146",
            "isVisible": true,
            "left": "0",
            "skin": "defLabel",
            "text": "App1",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Copylbl0fd5cd534195346 = new voltmx.ui.Label({
            "id": "Copylbl0fd5cd534195346",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App  Data",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Copylbl0ee3b095a584e40 = new voltmx.ui.Label({
            "id": "Copylbl0ee3b095a584e40",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Details",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Copylbl0c6d2d67a25c347 = new voltmx.ui.Label({
            "id": "Copylbl0c6d2d67a25c347",
            "isVisible": true,
            "left": "0dp",
            "skin": "defLabel",
            "text": "App Publish",
            "top": "0dp",
            "width": "100%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLeft.add(CopylblAppName0g05b33d32f1146, Copylbl0fd5cd534195346, Copylbl0ee3b095a584e40, Copylbl0c6d2d67a25c347);
        flxContent.add(flxRight, flxLeft);
        return flxContent;
    }
});
define("flxRowTemplate", [],function() {
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
});
define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("flxSectionHeaderTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxContentController", {
    //Type your controller code here 
});
define("flxContentControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxContentController", ["userflxContentController", "flxContentControllerActions"], function() {
    var controller = require("userflxContentController");
    var controllerActions = ["flxContentControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxRowTemplateController", {
    //Type your controller code here 
});
define("flxRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRowTemplateController", ["userflxRowTemplateController", "flxRowTemplateControllerActions"], function() {
    var controller = require("userflxRowTemplateController");
    var controllerActions = ["flxRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});
define("navigation/NavigationController", {
    //Add your navigation controller code here.
});

require(['applicationController','flxSampleRowTemplate','flxSectionHeaderTemplate','flxContent','flxRowTemplate','flxSampleRowTemplateController','flxSectionHeaderTemplateController','flxContentController','flxRowTemplateController','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

