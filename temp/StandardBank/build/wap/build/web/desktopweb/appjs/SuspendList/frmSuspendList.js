define("SuspendList/frmSuspendList", function() {
    return function(controller) {
        function addWidgetsfrmSuspendList() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
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
                "focusSkin": "sknFlxWhiteBdr",
                "height": "100%",
                "id": "flxLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
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
                "focusSkin": "sknFlxTrans",
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
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
                        "text": "Suspend List"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSuspendListData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "89%",
                "id": "flxSuspendListData",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspendListData.setDefaultUnit(voltmx.flex.DP);
            var SrchTextBox = new com.hcl.srchTextBox.SrchTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "7%",
                "id": "SrchTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "16dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "16dp",
                "width": "97%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "txtSrch": {
                        "placeholder": "Search customer CIF, ID or name"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSuspendSegHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50px",
                "id": "flxSuspendSegHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspendSegHdr.setDefaultUnit(voltmx.flex.DP);
            var flxDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "12dp",
                "width": "16%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxDate.setDefaultUnit(voltmx.flex.DP);
            var lblDate = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblDate",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLblHeading4Bold",
                "text": "Date ",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgFilter = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "10dp",
                "id": "imgFilter",
                "isVisible": true,
                "skin": "slImage",
                "src": "filter_list.png",
                "top": "5dp",
                "width": "10dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDate.add(lblDate, imgFilter);
            var lblCIFNo = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCIFNo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "CIF No ",
                "top": "0dp",
                "width": "17%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblIDNo = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblIDNo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "ID No ",
                "top": "0dp",
                "width": "16.70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCustomerName = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCustomerName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "Customer Name ",
                "top": "0dp",
                "width": "17%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblReason = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblReason",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "Reason ",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSuspendSegHdr.add(flxDate, lblCIFNo, lblIDNo, lblCustomerName, lblReason);
            var SegSuspendList = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "75%",
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
            flxSuspendListData.add(SrchTextBox, flxSuspendSegHdr, SegSuspendList);
            flxRight.add(FormHeader, flxSuspendListData);
            flxMain.add(flxLeft, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "FormHeader.lblHdr": {
                    "text": "Suspend List"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSuspendList,
            "enabledForIdleTimeout": false,
            "id": "frmSuspendList",
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