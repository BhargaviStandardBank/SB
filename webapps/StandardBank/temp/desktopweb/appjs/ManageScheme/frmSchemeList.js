define("ManageScheme/frmSchemeList", function() {
    return function(controller) {
        function addWidgetsfrmSchemeList() {
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
            var SrchTextBox = new com.hcl.srchTextBox.SrchTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "40dp",
                "id": "SrchTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "24dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "16dp",
                "width": "63%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SrchTextBox": {
                        "height": "40dp",
                        "left": "24dp",
                        "width": "63%"
                    },
                    "imgSrch": {
                        "zIndex": 30
                    },
                    "txtSrch": {
                        "placeholder": "Search scheme ID, scheme name, CIF,  or company"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FlexContainer0if0d4d7b7b134a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "89%",
                "id": "FlexContainer0if0d4d7b7b134a",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0if0d4d7b7b134a.setDefaultUnit(voltmx.flex.DP);
            var SubHdr = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "SubHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTrans",
                "top": "0dp",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SubHdr": {
                        "top": "0dp"
                    },
                    "lblSubHdr": {
                        "text": "List"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSubHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSubHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSubHdr.setDefaultUnit(voltmx.flex.DP);
            var flxSchemeID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxSchemeID",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "13%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeID.setDefaultUnit(voltmx.flex.DP);
            var lblSchemeID = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSchemeID",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblHeading4Bold",
                "text": "Scheme ID ",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgFilter = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgFilter",
                "isVisible": true,
                "left": "2dp",
                "skin": "slImage",
                "src": "filter_list.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSchemeID.add(lblSchemeID, imgFilter);
            var flxSchemeName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxSchemeName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeName.setDefaultUnit(voltmx.flex.DP);
            var lblSchemeName = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSchemeName",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblHeading4Bold",
                "text": "Scheme Name",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgSchName = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSchName",
                "isVisible": false,
                "left": "2dp",
                "skin": "slImage",
                "src": "filter_list.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSchemeName.add(lblSchemeName, imgSchName);
            var flxCIFNo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxCIFNo",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "13%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxCIFNo.setDefaultUnit(voltmx.flex.DP);
            var lblCIFNo = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCIFNo",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblHeading4Bold",
                "text": "CIF No",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgCIFNo = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgCIFNo",
                "isVisible": false,
                "left": "2dp",
                "skin": "slImage",
                "src": "filter_list.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCIFNo.add(lblCIFNo, imgCIFNo);
            var flxCompanyName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxCompanyName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyName.setDefaultUnit(voltmx.flex.DP);
            var lblCompanyName = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCompanyName",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblHeading4Bold",
                "text": "Company Name",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgCompanyName = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgCompanyName",
                "isVisible": false,
                "left": "2dp",
                "skin": "slImage",
                "src": "filter_list.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCompanyName.add(lblCompanyName, imgCompanyName);
            var flxRegID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxRegID",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "13%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxRegID.setDefaultUnit(voltmx.flex.DP);
            var lblRegID = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRegID",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblHeading4Bold",
                "text": "Reg ID",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgRegID = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgRegID",
                "isVisible": false,
                "left": "2dp",
                "skin": "slImage",
                "src": "filter_list.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRegID.add(lblRegID, imgRegID);
            var flxStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "13%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxStatus.setDefaultUnit(voltmx.flex.DP);
            var lblStatus = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblStatus",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblHeading4Bold",
                "text": "Status",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStatus = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgStatus",
                "isVisible": false,
                "left": "2dp",
                "skin": "slImage",
                "src": "filter_list.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStatus.add(lblStatus, imgStatus);
            flxSubHdr.add(flxSchemeID, flxSchemeName, flxCIFNo, flxCompanyName, flxRegID, flxStatus);
            var SchemeList = new com.hcl.schemeList.SchemeList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "75%",
                "id": "SchemeList",
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
                    "SchemeList": {
                        "height": "75%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0if0d4d7b7b134a.add(SubHdr, flxSubHdr, SchemeList);
            flxRight.add(FormHeader, SrchTextBox, FlexContainer0if0d4d7b7b134a);
            flxMain.add(SideMenu, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "SrchTextBox": {
                    "height": "40dp",
                    "left": "24dp",
                    "width": "63%"
                },
                "SrchTextBox.imgSrch": {
                    "zIndex": 30
                },
                "SubHdr": {
                    "top": "0dp"
                },
                "SubHdr.lblSubHdr": {
                    "text": "List"
                },
                "SchemeList": {
                    "height": "75%"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSchemeList,
            "enabledForIdleTimeout": false,
            "id": "frmSchemeList",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "ManageScheme"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});