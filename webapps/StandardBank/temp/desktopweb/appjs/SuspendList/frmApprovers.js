define("SuspendList/frmApprovers", function() {
    return function(controller) {
        function addWidgetsfrmApprovers() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": 0,
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
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "15%",
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
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
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
                "top": "8dp",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblSubHdr": {
                        "text": "Edit / Add Approver"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FlexContainer0f785862133cd42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "16dp",
                "gutterY": "24dp",
                "clipBounds": false,
                "id": "FlexContainer0f785862133cd42",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "padding": [12, 12, 12, 16],
                "paddingInPixel": true
            }, {});
            FlexContainer0f785862133cd42.setDefaultUnit(voltmx.flex.DP);
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
                "appName": "SuspendList"
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
                        "placeholder": "Enter Approver Name",
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
                "focusSkin": "sknFlxTrans",
                "id": "flxEmployeeNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
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
                "appName": "SuspendList"
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
                        "placeholder": "Enter Employee Number",
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
                "focusSkin": "sknFlxTrans",
                "id": "flxEmailAddress",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
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
                "appName": "SuspendList"
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
                        "placeholder": "Enter Email Address",
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
                "focusSkin": "sknFlxTrans",
                "id": "flxMobileNumber",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
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
                "appName": "SuspendList"
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
                        "placeholder": "Enter Mobile Number",
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
            FlexContainer0f785862133cd42.add(flxApproverName, flxEmployeeNumber, flxEmailAddress, flxMobileNumber);
            var btnAddEdit = new voltmx.ui.Button({
                "bottom": 16,
                "centerX": "50%",
                "height": "40dp",
                "id": "btnAddEdit",
                "isVisible": true,
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
            flxAddApproval.add(SubHdr, FlexContainer0f785862133cd42, btnAddEdit);
            var flxApproverList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "52%",
                "id": "flxApproverList",
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
            flxApproverList.setDefaultUnit(voltmx.flex.DP);
            var SubHdr1 = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "SubHdr1",
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
                        "left": "2%",
                        "width": "17%"
                    },
                    "flxDate": {
                        "left": "2%",
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
                        "text": "Mobile Number"
                    },
                    "lblDate": {
                        "text": "Employee No"
                    },
                    "lblIDNo": {
                        "text": "Email"
                    },
                    "segHeader": {
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
            flxApproverList.add(SubHdr1, segHeader, SegApproverScheme);
            flxRight.add(FormHeader, flxAddApproval, flxApproverList);
            flxMain.add(flxLeft, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "FormHeader.lblHdr": {
                    "text": "Approver"
                },
                "SubHdr.lblSubHdr": {
                    "text": "Edit / Add Approver"
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
                "SubHdr1": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr1.lblSubHdr": {
                    "text": "Approver List"
                },
                "segHeader.CopyimgFilter0c8663a5ec8e44b": {
                    "src": "filter_list.png"
                },
                "segHeader.flxCIFNo": {
                    "left": "2%",
                    "width": "17%"
                },
                "segHeader.flxDate": {
                    "left": "2%",
                    "width": "17%"
                },
                "segHeader.flxIDNo": {
                    "width": "25%"
                },
                "segHeader.lblCIFNo": {
                    "text": "Name"
                },
                "segHeader.lblCustomerName": {
                    "text": "Mobile Number"
                },
                "segHeader.lblDate": {
                    "text": "Employee No"
                },
                "segHeader.lblIDNo": {
                    "text": "Email"
                },
                "segHeader": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SegApproverScheme": {
                    "height": "83%"
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