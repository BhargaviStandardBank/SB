define("SuspendList/frmRequestHistory", function() {
    return function(controller) {
        function addWidgetsfrmRequestHistory() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBrd",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1,
                "appName": "SuspendList"
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
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1,
                "appName": "SuspendList"
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
                    "lblHdr": {
                        "text": "Request Header"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FlexContainer0c1301dbf960147 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "89%",
                "id": "FlexContainer0c1301dbf960147",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0c1301dbf960147.setDefaultUnit(voltmx.flex.DP);
            var flxSrchOptions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxSrchOptions",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "16dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "97%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrchOptions.setDefaultUnit(voltmx.flex.DP);
            var SrchTextBox = new com.hcl.srchTextBox.SrchTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "SrchTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "0dp",
                "width": "70%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SrchTextBox": {
                        "centerX": "viz.val_cleared",
                        "height": "100%",
                        "left": "0dp",
                        "top": "0dp",
                        "width": "70%"
                    },
                    "txtSrch": {
                        "placeholder": "Search request ID, type, or initiator"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxListBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxListBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxListBox.setDefaultUnit(voltmx.flex.DP);
            var lstFilter = new voltmx.ui.ListBox({
                "height": "100%",
                "id": "lstFilter",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["All", "View All"],
                    ["Approved", "View Approved"],
                    ["Pending", "View Pending"],
                    ["Rejected", "View Rejected"]
                ],
                "selectedKey": "All",
                "skin": "sknListTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "multiSelect": false
            });
            var flxDropDwn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "70%",
                "id": "flxDropDwn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "3dp",
                "skin": "sknFlxImagList",
                "width": "35dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDwn.setDefaultUnit(voltmx.flex.DP);
            var imgDropDwn = new voltmx.ui.Image2({
                "height": "35dp",
                "id": "imgDropDwn",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "icon_dropdwn.png",
                "top": "0dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDropDwn.add(imgDropDwn);
            flxListBox.add(lstFilter, flxDropDwn);
            flxSrchOptions.add(SrchTextBox, flxListBox);
            var segHeader = new com.hcl.segHdr.segHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxBGEDF5FF",
                "height": "50dp",
                "id": "segHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblCIFNo": {
                        "text": "Request ID "
                    },
                    "lblCustomerName": {
                        "text": "Initiator"
                    },
                    "lblDate": {
                        "text": "Request Date "
                    },
                    "lblIDNo": {
                        "text": "Request Type"
                    },
                    "lblReason": {
                        "text": "Status"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSegSuspendData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "75%",
                "id": "flxSegSuspendData",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegSuspendData.setDefaultUnit(voltmx.flex.DP);
            var SegSuspendList = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "SegSuspendList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBrd",
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
            flxSegSuspendData.add(SegSuspendList);
            FlexContainer0c1301dbf960147.add(flxSrchOptions, segHeader, flxSegSuspendData);
            flxRight.add(FormHeader, FlexContainer0c1301dbf960147);
            flxMain.add(flxLeft, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "FormHeader.lblHdr": {
                    "text": "Request Header"
                },
                "SrchTextBox": {
                    "centerX": "",
                    "height": "100%",
                    "left": "0dp",
                    "top": "0dp",
                    "width": "70%"
                },
                "segHeader.lblCIFNo": {
                    "text": "Request ID "
                },
                "segHeader.lblCustomerName": {
                    "text": "Initiator"
                },
                "segHeader.lblDate": {
                    "text": "Request Date "
                },
                "segHeader.lblIDNo": {
                    "text": "Request Type"
                },
                "segHeader.lblReason": {
                    "text": "Status"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmRequestHistory,
            "enabledForIdleTimeout": false,
            "id": "frmRequestHistory",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SuspendList"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});