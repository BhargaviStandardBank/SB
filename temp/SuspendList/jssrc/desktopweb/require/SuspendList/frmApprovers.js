define("SuspendList/frmApprovers", function() {
    return function(controller) {
        function addWidgetsfrmApprovers() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
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
                "skin": "sknFlxWhiteBdr",
                "top": "0dp",
                "width": "15%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxLeft.setDefaultUnit(voltmx.flex.DP);
            flxLeft.add();
            var flxRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "15%",
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
                        "text": "Approver"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxAddApproval = new voltmx.ui.FlexContainer({
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "220dp",
                "id": "flxAddApproval",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddApproval.setDefaultUnit(voltmx.flex.DP);
            var flxAppStatusHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "40dp",
                "id": "flxAppStatusHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "0dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxAppStatusHdr.setDefaultUnit(voltmx.flex.DP);
            var lblApprovalAction = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblApprovalAction",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "Add Approval",
                "top": "1dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAppStatusHdr.add(lblApprovalAction);
            var flxSeparator = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSeparator.setDefaultUnit(voltmx.flex.DP);
            flxSeparator.add();
            var FlexContainer0hcbd2d342c8043 = new voltmx.ui.FlexContainer({
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "220dp",
                "id": "FlexContainer0hcbd2d342c8043",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "14dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "19dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0hcbd2d342c8043.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0hcbd2d342c8043.add();
            flxAddApproval.add(flxAppStatusHdr, flxSeparator, FlexContainer0hcbd2d342c8043);
            flxRight.add(FormHeader, flxAddApproval);
            flxMain.add(flxLeft, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "FormHeader.lblHdr": {
                    "text": "Approver"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmApprovers,
            "enabledForIdleTimeout": false,
            "id": "frmApprovers",
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