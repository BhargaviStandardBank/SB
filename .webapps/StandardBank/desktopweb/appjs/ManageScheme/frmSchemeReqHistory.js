define("ManageScheme/frmSchemeReqHistory", function() {
    return function(controller) {
        function addWidgetsfrmSchemeReqHistory() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var SideMenu = new com.hcl.menu.SideMenu({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "SideMenu",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlexMenu",
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
            var flxRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "60dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxRight.setDefaultUnit(voltmx.flex.DP);
            var FormHeader = new com.hcl.hdr.FormHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "60px",
                "id": "FormHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlexMenu",
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
            var flxRequestHistory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "89%",
                "id": "flxRequestHistory",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxRequestHistory.setDefaultUnit(voltmx.flex.DP);
            var flxSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "55dp",
                "id": "flxSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "16dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "97%",
                "zIndex": 130,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrch.setDefaultUnit(voltmx.flex.DP);
            var SrchTextBox = new com.hcl.srchTextBox.SrchTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
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
                        "centerY": "50%",
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
            var flxDropDwn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxDropDwn",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 130,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDwn.setDefaultUnit(voltmx.flex.DP);
            var lblDropDwn = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblDropDwn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "View All",
                "top": "9dp",
                "width": "100%",
                "zIndex": 40
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgDropDwn = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgDropDwn",
                "isVisible": true,
                "right": 10,
                "skin": "slImage",
                "src": "icon_dropdwn.png",
                "top": "5dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SegDropDown = new com.hcl.segDropDown.SegDropDown({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "focusSkin": "sknFlxTextBox",
                "id": "SegDropDown",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "100%",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SegDropDown": {
                        "top": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDropDwn.add(lblDropDwn, imgDropDwn, SegDropDown);
            var flxDropDwnList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxDropDwnList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 130,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDropDwnList.setDefaultUnit(voltmx.flex.DP);
            var lstFilter = new voltmx.ui.ListBox({
                "centerY": "50%",
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
            var flxListDropDwn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "70%",
                "id": "flxListDropDwn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 2,
                "skin": "sknFlxImagList",
                "top": "24dp",
                "width": "35dp",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxListDropDwn.setDefaultUnit(voltmx.flex.DP);
            var imgListDropDwn = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgListDropDwn",
                "isVisible": true,
                "right": 0,
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
            flxListDropDwn.add(imgListDropDwn);
            flxDropDwnList.add(lstFilter, flxListDropDwn);
            flxSrch.add(SrchTextBox, flxDropDwn, flxDropDwnList);
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
                    "flxCustomerName": {
                        "width": "15%"
                    },
                    "lblCIFNo": {
                        "left": "10%",
                        "text": "Request ID"
                    },
                    "lblCustomerName": {
                        "left": "10%",
                        "text": "Initiator"
                    },
                    "lblDate": {
                        "text": "Request Date "
                    },
                    "lblIDNo": {
                        "left": "10%",
                        "text": "Request Type"
                    },
                    "lblReason": {
                        "left": "2%",
                        "text": "Status"
                    },
                    "segHeader": {
                        "centerY": "viz.val_cleared",
                        "top": "16dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SegSuspendList = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
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
                "overrides": {
                    "SegSuspendList": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT
                    },
                    "segSuspend": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRequestHistory.add(flxSrch, segHeader, SegSuspendList);
            flxRight.add(FormHeader, flxRequestHistory);
            flxMain.add(SideMenu, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "SrchTextBox": {
                    "centerX": "",
                    "centerY": "50%",
                    "height": "100%",
                    "left": "0dp",
                    "top": "0dp",
                    "width": "70%"
                },
                "SegDropDown": {
                    "top": "100%"
                },
                "segHeader.flxCustomerName": {
                    "width": "15%"
                },
                "segHeader.lblCIFNo": {
                    "left": "10%",
                    "text": "Request ID"
                },
                "segHeader.lblCustomerName": {
                    "left": "10%",
                    "text": "Initiator"
                },
                "segHeader.lblDate": {
                    "text": "Request Date "
                },
                "segHeader.lblIDNo": {
                    "left": "10%",
                    "text": "Request Type"
                },
                "segHeader.lblReason": {
                    "left": "2%",
                    "text": "Status"
                },
                "segHeader": {
                    "centerY": "",
                    "top": "16dp"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSchemeReqHistory,
            "enabledForIdleTimeout": false,
            "id": "frmSchemeReqHistory",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "ManageScheme",
            "info": {
                "kuid": "gdf467ebba5c409fb526aed95e567b1d"
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