define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMainContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxMainContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 6,
                        "1024": 4,
                        "1366": 12
                    }
                },
                "appName": "SlideMenu"
            }, {
                "paddingInPixel": false
            }, {});
            flxMainContent.setDefaultUnit(voltmx.flex.DP);
            var flxSideMenu = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxSideMenu",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f270a5ff5eea43",
                "top": "0",
                "width": "70dp",
                "zIndex": 3,
                "appName": "SlideMenu"
            }, {
                "paddingInPixel": false
            }, {
                "hoverSkin": "CopyslFbox0d6be07b4bd7645",
                "onHover": controller.AS_FlexContainer_h1c85db0a9b54206ac3a286f4f89d0c0
            });
            flxSideMenu.setDefaultUnit(voltmx.flex.DP);
            var flxHeader = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "60dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j1194d827e1845",
                "top": "0dp",
                "width": "100%",
                "appName": "SlideMenu"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(voltmx.flex.DP);
            var flxHoverToOpen = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "60dp",
                "id": "flxHoverToOpen",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60dp",
                "appName": "SlideMenu"
            }, {
                "paddingInPixel": false
            }, {});
            flxHoverToOpen.setDefaultUnit(voltmx.flex.DP);
            var imgLogo = new voltmx.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "imgLogo",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "voltmx_71.png",
                "top": "0",
                "width": "50dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHoverToOpen.add(imgLogo);
            var btnToggle = new voltmx.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnToggle",
                "isVisible": true,
                "left": "20dp",
                "skin": "CopydefBtnNormal0j67934920d7c46",
                "text": "HCL Volt MX",
                "top": "0",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeader.add(flxHoverToOpen, btnToggle);
            var segMenu = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "imgIcon": "header_logo.png",
                    "lblText": "Random1"
                }, {
                    "imgIcon": "login_logo.png",
                    "lblText": "Random2"
                }, {
                    "imgIcon": "camera_normal.png",
                    "lblText": "Random3"
                }, {
                    "imgIcon": "notesdoclink.gif",
                    "lblText": "Random4"
                }, {
                    "imgIcon": "logout.png",
                    "lblText": "Random5"
                }],
                "groupCells": false,
                "height": "800dp",
                "id": "segMenu",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0f32878a8ca7f4a",
                "rowTemplate": "flxRowTemplate",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxGrp": "flxGrp",
                    "flxRowTemplate": "flxRowTemplate",
                    "imgIcon": "imgIcon",
                    "lblText": "lblText"
                },
                "width": "100%",
                "appName": "SlideMenu"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSideMenu.add(flxHeader, segMenu);
            var flxOverlay = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxOverlay",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0b87d163dc5dd4e",
                "top": "0",
                "width": "100%",
                "zIndex": 2,
                "appName": "SlideMenu"
            }, {
                "paddingInPixel": false
            }, {});
            flxOverlay.setDefaultUnit(voltmx.flex.DP);
            flxOverlay.add();
            var flxContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "appName": "SlideMenu"
            }, {
                "paddingInPixel": false
            }, {});
            flxContent.setDefaultUnit(voltmx.flex.DP);
            var segContent = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }, {
                    "Copylbl0c6d2d67a25c347": "App Publish",
                    "Copylbl0ee3b095a584e40": "App Details",
                    "Copylbl0fd5cd534195346": "App  Data",
                    "CopylblAppName0g05b33d32f1146": "App1",
                    "lbl2": "App1",
                    "lbl3": "App1",
                    "lbl4": "App1",
                    "lblAppName": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segContent",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxContent",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "Copylbl0c6d2d67a25c347": "Copylbl0c6d2d67a25c347",
                    "Copylbl0ee3b095a584e40": "Copylbl0ee3b095a584e40",
                    "Copylbl0fd5cd534195346": "Copylbl0fd5cd534195346",
                    "CopylblAppName0g05b33d32f1146": "CopylblAppName0g05b33d32f1146",
                    "flxContent": "flxContent",
                    "flxLeft": "flxLeft",
                    "flxRight": "flxRight",
                    "lbl2": "lbl2",
                    "lbl3": "lbl3",
                    "lbl4": "lbl4",
                    "lblAppName": "lblAppName"
                },
                "width": "100%",
                "appName": "SlideMenu"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContent.add(segContent);
            flxMainContent.add(flxSideMenu, flxOverlay, flxContent);
            this.compInstData = {}
            this.add(flxMainContent);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": voltmx.flex.RESPONSIVE_GRID,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SlideMenu",
            "info": {
                "kuid": "b23449b85b3f46e69247792535603db8"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.RESPONSIVE_GRID,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});