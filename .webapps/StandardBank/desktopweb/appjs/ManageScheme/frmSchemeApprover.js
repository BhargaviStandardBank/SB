define("ManageScheme/frmSchemeApprover", function() {
    return function(controller) {
        function addWidgetsfrmSchemeApprover() {
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
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxMain.setDefaultUnit(voltmx.flex.DP);
            var flxLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
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
                "appName": "ManageScheme"
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
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1,
                "appName": "ManageScheme"
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
                        "text": "Approver"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxAddEdit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxAddEdit",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddEdit.setDefaultUnit(voltmx.flex.DP);
            var SubHdrAddEdit = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "SubHdrAddEdit",
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
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    },
                    "lblSubHdr": {
                        "text": "Add / Edit Approvers"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxGrid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxGrid",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [16, 12, 16, 16],
                "paddingInPixel": true
            }, {});
            flxGrid.setDefaultUnit(voltmx.flex.DP);
            var flxApproverName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxApproverName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxApproverName.setDefaultUnit(voltmx.flex.DP);
            var ApproverName = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ApproverName",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblText": {
                        "text": "APPROVER NAME"
                    },
                    "txtBox": {
                        "placeholder": "Enter name",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxApproverName.add(ApproverName);
            var flxEmployeeNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmployeeNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmployeeNumber.setDefaultUnit(voltmx.flex.DP);
            var EmployeeNumber = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmployeeNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblText": {
                        "text": "EMPLOYEE NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter employee number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmployeeNumber.add(EmployeeNumber);
            var flxEmailAddress = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmailAddress",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmailAddress.setDefaultUnit(voltmx.flex.DP);
            var EmailAddress = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmailAddress",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblText": {
                        "text": "EMAIL ADDRESS"
                    },
                    "txtBox": {
                        "placeholder": "Enter email address",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmailAddress.add(EmailAddress);
            var flxMobileNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMobileNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "responsiveConfig": {
                    "offset": {
                        "640": 0,
                        "1024": 0,
                        "1366": 0
                    },
                    "span": {
                        "640": 12,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileNumber.setDefaultUnit(voltmx.flex.DP);
            var MobileNumber = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MobileNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblText": {
                        "text": "MOBILE NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter mobile number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMobileNumber.add(MobileNumber);
            flxGrid.add(flxApproverName, flxEmployeeNumber, flxEmailAddress, flxMobileNumber);
            var btnAddEditAppr = new voltmx.ui.Button({
                "bottom": 16,
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "btnAddEditAppr",
                "isVisible": true,
                "left": "177dp",
                "skin": "sknBtnBlue",
                "text": "ADD / EDIT APPROVER",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxAddEdit.add(SubHdrAddEdit, flxGrid, btnAddEditAppr);
            var flxApproverList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "16dp",
                "clipBounds": false,
                "height": "55%",
                "id": "flxApproverList",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "32dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxApproverList.setDefaultUnit(voltmx.flex.DP);
            var SubHdrApprover = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "SubHdrApprover",
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
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    },
                    "lblSubHdr": {
                        "text": "Approver List"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var segHeader = new com.hcl.segHdr.segHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxBGEDF5FF",
                "height": "40dp",
                "id": "segHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "CopyimgFilter0c8663a5ec8e44b": {
                        "isVisible": true,
                        "src": "filter_list.png"
                    },
                    "flxCIFNo": {
                        "width": "17%"
                    },
                    "flxCustomerName": {
                        "width": "17%"
                    },
                    "flxDate": {
                        "width": "17%"
                    },
                    "flxIDNo": {
                        "width": "25%"
                    },
                    "flxReason": {
                        "isVisible": false
                    },
                    "imgFilter": {
                        "isVisible": false
                    },
                    "lblCIFNo": {
                        "text": "Name"
                    },
                    "lblCustomerName": {
                        "text": "Mobile No"
                    },
                    "lblDate": {
                        "text": "Employee No"
                    },
                    "lblIDNo": {
                        "text": "Email"
                    },
                    "lblReason": {
                        "isVisible": false
                    },
                    "segHeader": {
                        "top": "0dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SegApproverScheme = new com.hc.segApprover.SegApproverScheme({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "83%",
                "id": "SegApproverScheme",
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
                    "SegApproverScheme": {
                        "height": "83%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxApproverList.add(SubHdrApprover, segHeader, SegApproverScheme);
            flxRight.add(FormHeader, flxAddEdit, flxApproverList);
            flxMain.add(flxLeft, flxRight);
            var flxAlert = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxAlert",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx15Blck",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxAlert.setDefaultUnit(voltmx.flex.DP);
            var AlertUp = new com.hcl.popup.AlertUp({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "slFFocusbox",
                "height": "35%",
                "id": "AlertUp",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBrd",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "imgAlert": {
                        "src": "icon_alertcheck.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxAlert.add(AlertUp);
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
                    "text": "Approver"
                },
                "SubHdrAddEdit": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdrAddEdit.lblSubHdr": {
                    "text": "Add / Edit Approvers"
                },
                "ApproverName.lblText": {
                    "text": "APPROVER NAME"
                },
                "ApproverName.txtBox": {
                    "width": "100%"
                },
                "EmployeeNumber.lblText": {
                    "text": "EMPLOYEE NUMBER"
                },
                "EmployeeNumber.txtBox": {
                    "width": "100%"
                },
                "EmailAddress.lblText": {
                    "text": "EMAIL ADDRESS"
                },
                "EmailAddress.txtBox": {
                    "width": "100%"
                },
                "MobileNumber.lblText": {
                    "text": "MOBILE NUMBER"
                },
                "MobileNumber.txtBox": {
                    "width": "100%"
                },
                "SubHdrApprover": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdrApprover.lblSubHdr": {
                    "text": "Approver List"
                },
                "segHeader.CopyimgFilter0c8663a5ec8e44b": {
                    "src": "filter_list.png"
                },
                "segHeader.flxCIFNo": {
                    "width": "17%"
                },
                "segHeader.flxCustomerName": {
                    "width": "17%"
                },
                "segHeader.flxDate": {
                    "width": "17%"
                },
                "segHeader.flxIDNo": {
                    "width": "25%"
                },
                "segHeader.lblCIFNo": {
                    "text": "Name"
                },
                "segHeader.lblCustomerName": {
                    "text": "Mobile No"
                },
                "segHeader.lblDate": {
                    "text": "Employee No"
                },
                "segHeader.lblIDNo": {
                    "text": "Email"
                },
                "segHeader": {
                    "top": "0dp"
                },
                "SegApproverScheme": {
                    "height": "83%"
                },
                "AlertUp.imgAlert": {
                    "src": "icon_alertcheck.png"
                }
            }
            this.add(flxMain, flxAlert);
        };
        return [{
            "addWidgets": addWidgetsfrmSchemeApprover,
            "enabledForIdleTimeout": false,
            "id": "frmSchemeApprover",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "ManageScheme",
            "info": {
                "kuid": "c3d7ef1b795b4f6c8926e58283fbe980"
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