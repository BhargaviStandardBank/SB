define("SuspendList/frmSusHistoryDetails", function() {
    return function(controller) {
        function addWidgetsfrmSusHistoryDetails() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
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
                "appName": "SuspendList"
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
            var flxRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
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
                "appName": "SuspendList"
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
                "overrides": {
                    "FormHeader": {
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSrcHistoryDetails = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "92dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "focusSkin": "sknFlxSrcTrans",
                "horizontalScrollIndicator": true,
                "id": "flxSrcHistoryDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "pagingEnabled": false,
                "right": 24,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "top": "24dp",
                "verticalScrollIndicator": true,
                "width": "96%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxSrcHistoryDetails.setDefaultUnit(voltmx.flex.DP);
            var flxSusHisDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxWhiteBdr",
                "height": "330dp",
                "id": "flxSusHisDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSusHisDetails.setDefaultUnit(voltmx.flex.DP);
            var flxInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxInner",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "16dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "8dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxInner.setDefaultUnit(voltmx.flex.DP);
            var lblVerified = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblVerified",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Verified",
                "top": "1dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOverRide = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOverRide",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Override",
                "top": "1dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDuplicate = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblDuplicate",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Duplicate",
                "top": "1dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInvalid = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblInvalid",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "InValid",
                "top": "1dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInner.add(lblVerified, lblOverRide, lblDuplicate, lblInvalid);
            var segHeader = new com.hcl.segHdr.segHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "50px",
                "id": "segHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxReason": {
                        "isVisible": false
                    },
                    "imgFilter": {
                        "isVisible": false
                    },
                    "lblCIFNo": {
                        "left": "0%",
                        "text": "ID No"
                    },
                    "lblCustomerName": {
                        "text": "Reason"
                    },
                    "lblDate": {
                        "text": "CIF No"
                    },
                    "lblIDNo": {
                        "left": "0%",
                        "text": "Customer Name"
                    },
                    "segHeader": {
                        "centerY": "viz.val_cleared",
                        "top": "8dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SegSuspendList = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxTrans",
                "height": "62%",
                "id": "SegSuspendList",
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
                    "SegSuspendList": {
                        "centerY": "viz.val_cleared",
                        "height": "62%",
                        "top": "0dp"
                    },
                    "segSuspend": {
                        "data": [{
                            "lblCiFNoVal": "111235",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "23280545",
                            "lblIDNoVal": "Zuri Nkosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "232558",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                            "lblDateVal": "25323522",
                            "lblIDNoVal": "Amari Nkosi ",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "998524",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                            "lblDateVal": "85245623",
                            "lblIDNoVal": "Chege Nkosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "220232134",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                            "lblDateVal": "99855824",
                            "lblIDNoVal": "HCL Software",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "652445342",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                            "lblDateVal": "22355678",
                            "lblIDNoVal": "HCL South America",
                            "lblReasonVal": ""
                        }]
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSusHisDetails.add(flxInner, segHeader, SegSuspendList);
            var flxApprovalStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxWhiteBdr",
                "height": "330dp",
                "id": "flxApprovalStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxApprovalStatus.setDefaultUnit(voltmx.flex.DP);
            var flxApprovalHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "40dp",
                "id": "flxApprovalHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "8dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxApprovalHdr.setDefaultUnit(voltmx.flex.DP);
            var lblApprovalStatus = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblApprovalStatus",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "Approval Status",
                "top": "1dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxApprovalHdr.add(lblApprovalStatus);
            var HdrApprovalStatus = new com.hcl.segHdr.segHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "50px",
                "id": "HdrApprovalStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxReason": {
                        "isVisible": false
                    },
                    "imgFilter": {
                        "isVisible": false
                    },
                    "lblCIFNo": {
                        "left": "0%",
                        "text": "Approver"
                    },
                    "lblCustomerName": {
                        "text": "Comments"
                    },
                    "lblDate": {
                        "text": "Time Stamp"
                    },
                    "lblIDNo": {
                        "left": "0%",
                        "text": "Approval Status"
                    },
                    "segHeader": {
                        "centerY": "viz.val_cleared",
                        "top": "8dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SegApprovalAction = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxTrans",
                "height": "62%",
                "id": "SegApprovalAction",
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
                    "SegSuspendList": {
                        "centerY": "viz.val_cleared",
                        "height": "62%",
                        "top": "0dp"
                    },
                    "segSuspend": {
                        "data": [{
                            "lblCiFNoVal": "Approver Name 1",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "DD/MM/YYYY HH:MM",
                            "lblIDNoVal": "Rejected",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "Approver Name 2",
                            "lblCustomerNameVal": "Corrections look good. List approved.",
                            "lblDateVal": "DD/MM/YYYY HH:MM",
                            "lblIDNoVal": "Approved",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "Approver Name 3",
                            "lblCustomerNameVal": "List approved.",
                            "lblDateVal": "DD/MM/YYYY HH:MM",
                            "lblIDNoVal": "Approved",
                            "lblReasonVal": ""
                        }]
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxApprovalStatus.add(flxApprovalHdr, HdrApprovalStatus, SegApprovalAction);
            var flxApprovalAction = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxWhiteBdr",
                "height": "330dp",
                "id": "flxApprovalAction",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxApprovalAction.setDefaultUnit(voltmx.flex.DP);
            var flxAppStatusHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxAppStatusHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "8dp",
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
                "text": "Approval Action",
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
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
                "top": "1dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSeparator.setDefaultUnit(voltmx.flex.DP);
            flxSeparator.add();
            var flxAddComments = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "25dp",
                "id": "flxAddComments",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "16dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddComments.setDefaultUnit(voltmx.flex.DP);
            var lblAddComments = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblAddComments",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblFormLevel",
                "text": "ADD COMMENTS",
                "top": "1dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAddComments.add(lblAddComments);
            var flxTextArea = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTextBox",
                "height": "150dp",
                "id": "flxTextArea",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTextBox",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxTextArea.setDefaultUnit(voltmx.flex.DP);
            var txtComments = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "bottom": "10dp",
                "focusSkin": "skntxtAraTrans",
                "id": "txtComments",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "10dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter comments here",
                "right": "10dp",
                "skin": "skntxtAraTrans",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "10dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "skntxtAraTrans"
            });
            flxTextArea.add(txtComments);
            var flxButtons = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "16dp",
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": 60,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "24dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxButtons.setDefaultUnit(voltmx.flex.DP);
            var btnReject = new voltmx.ui.Button({
                "height": "50dp",
                "id": "btnReject",
                "isVisible": true,
                "right": "210dp",
                "skin": "sknBtnGrey",
                "text": "Reject",
                "top": "5dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnAccept = new voltmx.ui.Button({
                "height": "50dp",
                "id": "btnAccept",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtn2A1A6A",
                "text": "Accept",
                "top": "5dp",
                "width": "200dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnReject, btnAccept);
            flxApprovalAction.add(flxAppStatusHdr, flxSeparator, flxAddComments, flxTextArea, flxButtons);
            var btnReturnHistory = new voltmx.ui.Button({
                "bottom": "24dp",
                "centerX": "89%",
                "height": 50,
                "id": "btnReturnHistory",
                "isVisible": true,
                "left": "62dp",
                "skin": "sknBtnBlue",
                "text": "Return History",
                "top": "24dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSrcHistoryDetails.add(flxSusHisDetails, flxApprovalStatus, flxApprovalAction, btnReturnHistory);
            flxRight.add(FormHeader, flxSrcHistoryDetails);
            flxMain.add(SideMenu, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "FormHeader": {
                    "centerY": "",
                    "top": "0dp"
                },
                "segHeader.lblCIFNo": {
                    "left": "0%",
                    "text": "ID No"
                },
                "segHeader.lblCustomerName": {
                    "text": "Reason"
                },
                "segHeader.lblDate": {
                    "text": "CIF No"
                },
                "segHeader.lblIDNo": {
                    "left": "0%",
                    "text": "Customer Name"
                },
                "segHeader": {
                    "centerY": "",
                    "top": "8dp"
                },
                "SegSuspendList": {
                    "centerY": "",
                    "height": "62%",
                    "top": "0dp"
                },
                "SegSuspendList.segSuspend": {
                    "data": [{
                        "lblCiFNoVal": "111235",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "23280545",
                        "lblIDNoVal": "Zuri Nkosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "232558",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                        "lblDateVal": "25323522",
                        "lblIDNoVal": "Amari Nkosi ",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "998524",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                        "lblDateVal": "85245623",
                        "lblIDNoVal": "Chege Nkosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "220232134",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                        "lblDateVal": "99855824",
                        "lblIDNoVal": "HCL Software",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "652445342",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet consectetur.",
                        "lblDateVal": "22355678",
                        "lblIDNoVal": "HCL South America",
                        "lblReasonVal": ""
                    }]
                },
                "HdrApprovalStatus.lblCIFNo": {
                    "left": "0%",
                    "text": "Approver"
                },
                "HdrApprovalStatus.lblCustomerName": {
                    "text": "Comments"
                },
                "HdrApprovalStatus.lblDate": {
                    "text": "Time Stamp"
                },
                "HdrApprovalStatus.lblIDNo": {
                    "left": "0%",
                    "text": "Approval Status"
                },
                "HdrApprovalStatus": {
                    "centerY": "",
                    "top": "8dp"
                },
                "SegApprovalAction": {
                    "centerY": "",
                    "height": "62%",
                    "top": "0dp"
                },
                "SegApprovalAction.segSuspend": {
                    "data": [{
                        "lblCiFNoVal": "Approver Name 1",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "DD/MM/YYYY HH:MM",
                        "lblIDNoVal": "Rejected",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "Approver Name 2",
                        "lblCustomerNameVal": "Corrections look good. List approved.",
                        "lblDateVal": "DD/MM/YYYY HH:MM",
                        "lblIDNoVal": "Approved",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "Approver Name 3",
                        "lblCustomerNameVal": "List approved.",
                        "lblDateVal": "DD/MM/YYYY HH:MM",
                        "lblIDNoVal": "Approved",
                        "lblReasonVal": ""
                    }]
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSusHistoryDetails,
            "enabledForIdleTimeout": false,
            "id": "frmSusHistoryDetails",
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