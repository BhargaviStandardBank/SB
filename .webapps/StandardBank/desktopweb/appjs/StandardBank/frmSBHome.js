define("StandardBank/frmSBHome", function() {
    return function(controller) {
        function addWidgetsfrmSBHome() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxmain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxmain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxmain.setDefaultUnit(voltmx.flex.DP);
            var flxLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLeft",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxLeft.setDefaultUnit(voltmx.flex.DP);
            var SideMenu = new com.hcl.menu.SideMenu({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxTrans",
                "height": "100%",
                "id": "SideMenu",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxLeft.add(SideMenu);
            var flxRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "60dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTrans",
                "top": "0dp",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxRight.setDefaultUnit(voltmx.flex.DP);
            var FormHeader = new com.hcl.hdr.FormHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxTrans",
                "height": "8%",
                "id": "FormHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "FormHeader": {
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    },
                    "lblHdr": {
                        "text": "Credit Risk Portal Uganda [DEV]"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var Image0i315600b15cf45 = new voltmx.ui.Image2({
                "height": "514px",
                "id": "Image0i315600b15cf45",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "map_uganda.jpg",
                "top": "-8%",
                "width": "600px",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRight.add(FormHeader, Image0i315600b15cf45);
            var SideMenu1 = new com.hcl.menu.SideMenu({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxTrans",
                "height": "100%",
                "id": "SideMenu1",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "60dp",
                "zIndex": 10,
                "appName": "SBCommon",
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxmain.add(flxLeft, flxRight, SideMenu1);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "FormHeader": {
                    "centerY": "",
                    "top": "0dp"
                },
                "FormHeader.lblHdr": {
                    "text": "Credit Risk Portal Uganda [DEV]"
                }
            }
            this.add(flxmain);
        };
        return [{
            "addWidgets": addWidgetsfrmSBHome,
            "enabledForIdleTimeout": false,
            "id": "frmSBHome",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "StandardBank",
            "info": {
                "kuid": "b9042dc94cc24cf295a929e6d2cfa98f"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});