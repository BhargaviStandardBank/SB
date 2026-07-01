define("ManageScheme/frmSchHisDetails", function() {
    return function(controller) {
        function addWidgetsfrmSchHisDetails() {
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
            var flxScr = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxScr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "top": "24dp",
                "verticalScrollIndicator": true,
                "width": "96%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxScr.setDefaultUnit(voltmx.flex.DP);
            var flxSchHisDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchHisDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchHisDetails.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "Scheme History Details"
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
                "gutterY": "12dp",
                "clipBounds": false,
                "id": "flxGrid",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [12, 0, 12, 12],
                "paddingInPixel": true
            }, {});
            flxGrid.setDefaultUnit(voltmx.flex.DP);
            var flxSchemeID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchemeID",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeID.setDefaultUnit(voltmx.flex.DP);
            var SchemeID = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SchemeID",
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
                    "lblDetail": {
                        "text": "SCHEME ID"
                    },
                    "lblDetailValue": {
                        "text": "12345689"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSchemeID.add(SchemeID);
            var flxSchemeName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchemeName",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeName.setDefaultUnit(voltmx.flex.DP);
            var SchemeName = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SchemeName",
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
                    "lblDetail": {
                        "text": "SCHEME NAME"
                    },
                    "lblDetailValue": {
                        "text": "HCL Software America"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSchemeName.add(SchemeName);
            var flxCIFNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCIFNumber",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxCIFNumber.setDefaultUnit(voltmx.flex.DP);
            var CIFNumber = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CIFNumber",
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
                    "lblDetail": {
                        "text": "CIF NUMBER"
                    },
                    "lblDetailValue": {
                        "text": "34575674"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCIFNumber.add(CIFNumber);
            var flxEmployerName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmployerName",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmployerName.setDefaultUnit(voltmx.flex.DP);
            var EmployerName = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmployerName",
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
                    "lblDetail": {
                        "text": "EMPLOYER NAME"
                    },
                    "lblDetailValue": {
                        "text": "HCL Software"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmployerName.add(EmployerName);
            var flxRegistrationNo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRegistrationNo",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxRegistrationNo.setDefaultUnit(voltmx.flex.DP);
            var RegistrationNo = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RegistrationNo",
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
                    "lblDetail": {
                        "text": "REGISTRATION NUMBER"
                    },
                    "lblDetailValue": {
                        "text": "34234345435"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRegistrationNo.add(RegistrationNo);
            var flxContactName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxContactName",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxContactName.setDefaultUnit(voltmx.flex.DP);
            var ContactName = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ContactName",
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
                    "lblDetail": {
                        "text": "CONTACT NAME"
                    },
                    "lblDetailValue": {
                        "text": "Michelle Lota"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxContactName.add(ContactName);
            var flxContactTitle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxContactTitle",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxContactTitle.setDefaultUnit(voltmx.flex.DP);
            var ContactTitle = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ContactTitle",
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
                    "lblDetail": {
                        "text": "CONTACT TITLE"
                    },
                    "lblDetailValue": {
                        "text": "HR Benefits Manager"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxContactTitle.add(ContactTitle);
            var flxContactPhone = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxContactPhone",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxContactPhone.setDefaultUnit(voltmx.flex.DP);
            var ContactPhone = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ContactPhone",
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
                    "lblDetail": {
                        "text": "CONTACT PHONE"
                    },
                    "lblDetailValue": {
                        "text": "(555) 555-5555"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxContactPhone.add(ContactPhone);
            var flxContacEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxContacEmail",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxContacEmail.setDefaultUnit(voltmx.flex.DP);
            var ContactEmail = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ContactEmail",
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
                    "lblDetail": {
                        "text": "CONTACT EMAIL"
                    },
                    "lblDetailValue": {
                        "text": "benefits@hcl-software.com"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxContacEmail.add(ContactEmail);
            var flxMaxSpendLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMaxSpendLimit",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxMaxSpendLimit.setDefaultUnit(voltmx.flex.DP);
            var MaxSpendLimit = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MaxSpendLimit",
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
                    "lblDetail": {
                        "text": "MAXIMUM SPENDING LIMIT (KES)"
                    },
                    "lblDetailValue": {
                        "text": "2,400,000"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMaxSpendLimit.add(MaxSpendLimit);
            var flxSuspendStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSuspendStatus",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspendStatus.setDefaultUnit(voltmx.flex.DP);
            var SuspendStatus = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SuspendStatus",
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
                    "lblDetail": {
                        "text": "SUSPEND STATUS"
                    },
                    "lblDetailValue": {
                        "text": "Active"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSuspendStatus.add(SuspendStatus);
            flxGrid.add(flxSchemeID, flxSchemeName, flxCIFNumber, flxEmployerName, flxRegistrationNo, flxContactName, flxContactTitle, flxContactPhone, flxContacEmail, flxMaxSpendLimit, flxSuspendStatus);
            flxSchHisDetails.add(SubHdr, flxGrid);
            var flxEmployeeDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxEmployeeDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmployeeDetails.setDefaultUnit(voltmx.flex.DP);
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
                "top": "8dp",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "lblSubHdr": {
                        "text": "Employee Details"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxInner",
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
            flxInner.setDefaultUnit(voltmx.flex.DP);
            var lblVerified = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblVerified",
                "isVisible": true,
                "left": "24dp",
                "skin": "sknLblFormLevel",
                "text": "Verified",
                "top": "9dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOverride = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOverride",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Override",
                "top": "9dp",
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
                "top": "9dp",
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
                "text": "Invalid",
                "top": "9dp",
                "width": "100dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInner.add(lblVerified, lblOverride, lblDuplicate, lblInvalid);
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
                "top": "8dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "imgFilter": {
                        "isVisible": false
                    },
                    "lblCIFNo": {
                        "text": "ID No"
                    },
                    "lblCustomerName": {
                        "text": "Comments"
                    },
                    "lblDate": {
                        "text": "CIF No."
                    },
                    "lblIDNo": {
                        "text": "Customer Name"
                    },
                    "lblReason": {
                        "isVisible": false
                    },
                    "segHeader": {
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
                "height": "62%",
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
                        "height": "62%"
                    },
                    "segSuspend": {
                        "data": [{
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "232805454",
                            "lblIDNoVal": "Zuri Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "234234234",
                            "lblIDNoVal": "Zuri Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "342343555",
                            "lblIDNoVal": "Zuri Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "323456789",
                            "lblIDNoVal": "Amari Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "232805454",
                            "lblIDNoVal": "Chege Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "234234234",
                            "lblIDNoVal": "Chege Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "323456789",
                            "lblIDNoVal": "HCL Software",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "323456789",
                            "lblIDNoVal": "HCL South America",
                            "lblReasonVal": ""
                        }],
                        "height": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmployeeDetails.add(SubHdr1, flxInner, segHeader, SegSuspendList);
            var flxApprovalStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "50%",
                "id": "flxApprovalStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxApprovalStatus.setDefaultUnit(voltmx.flex.DP);
            var flxSubHdr = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "flxSubHdr",
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
                        "text": "Approval Status"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSegHdr = new com.hcl.segHdr.segHeader({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "sknFlxBGEDF5FF",
                "height": "50dp",
                "id": "flxSegHdr",
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
                    "imgFilter": {
                        "isVisible": false
                    },
                    "lblCIFNo": {
                        "text": "ID No"
                    },
                    "lblCustomerName": {
                        "text": "Comments"
                    },
                    "lblDate": {
                        "text": "CIF No."
                    },
                    "lblIDNo": {
                        "text": "Customer Name"
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
            var segApprovalStatus = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "75%",
                "id": "segApprovalStatus",
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
                        "height": "75%"
                    },
                    "segSuspend": {
                        "data": [{
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "232805454",
                            "lblIDNoVal": "Zuri Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "234234234",
                            "lblIDNoVal": "Zuri Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "342343555",
                            "lblIDNoVal": "Zuri Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "323456789",
                            "lblIDNoVal": "Amari Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "232805454",
                            "lblIDNoVal": "Chege Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "234234234",
                            "lblIDNoVal": "Chege Naosi",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "323456789",
                            "lblIDNoVal": "HCL Software",
                            "lblReasonVal": ""
                        }, {
                            "lblCiFNoVal": "23280545",
                            "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                            "lblDateVal": "323456789",
                            "lblIDNoVal": "HCL South America",
                            "lblReasonVal": ""
                        }],
                        "height": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxApprovalStatus.add(flxSubHdr, flxSegHdr, segApprovalStatus);
            var flxApprovalAction = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxApprovalAction",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxApprovalAction.setDefaultUnit(voltmx.flex.DP);
            var flxSubHdr1 = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "flxSubHdr1",
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
                        "text": "Approval Status"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var lblAddComments = new voltmx.ui.Label({
                "id": "lblAddComments",
                "isVisible": true,
                "left": "24dp",
                "skin": "sknLblFormLevel",
                "text": "ADD COMMENTS",
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTxtArea = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100dp",
                "id": "flxTxtArea",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "12dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxTxtArea.setDefaultUnit(voltmx.flex.DP);
            var txtArea = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "100%",
                "id": "txtArea",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter comments here",
                "skin": "sknTxtArea",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            flxTxtArea.add(txtArea);
            var flxBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "8dp",
                "clipBounds": false,
                "id": "flxBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "8dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxBtn.setDefaultUnit(voltmx.flex.DP);
            var btnReject = new voltmx.ui.Button({
                "height": "40dp",
                "id": "btnReject",
                "isVisible": true,
                "right": "140dp",
                "skin": "sknBtnGrey",
                "text": "REJECT",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            var btnApprove = new voltmx.ui.Button({
                "height": "40dp",
                "id": "btnApprove",
                "isVisible": true,
                "right": "5dp",
                "skin": "sknBtnBlue",
                "text": "APPROVE",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxBtn.add(btnReject, btnApprove);
            flxApprovalAction.add(flxSubHdr1, lblAddComments, flxTxtArea, flxBtn);
            var flxBtnReturn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "16dp",
                "clipBounds": false,
                "id": "flxBtnReturn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxBtnReturn.setDefaultUnit(voltmx.flex.DP);
            var btnReturn = new voltmx.ui.Button({
                "bottom": "16dp",
                "height": "40dp",
                "id": "btnReturn",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnBlue",
                "text": "RETURN TO SCHEME LIST",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxBtnReturn.add(btnReturn);
            flxScr.add(flxSchHisDetails, flxEmployeeDetails, flxApprovalStatus, flxApprovalAction, flxBtnReturn);
            flxRight.add(FormHeader, flxScr);
            flxMain.add(SideMenu, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "SubHdr.lblSubHdr": {
                    "text": "Scheme History Details"
                },
                "SchemeID.lblDetail": {
                    "text": "SCHEME ID"
                },
                "SchemeID.lblDetailValue": {
                    "text": "12345689"
                },
                "SchemeName.lblDetail": {
                    "text": "SCHEME NAME"
                },
                "SchemeName.lblDetailValue": {
                    "text": "HCL Software America"
                },
                "CIFNumber.lblDetail": {
                    "text": "CIF NUMBER"
                },
                "CIFNumber.lblDetailValue": {
                    "text": "34575674"
                },
                "EmployerName.lblDetail": {
                    "text": "EMPLOYER NAME"
                },
                "EmployerName.lblDetailValue": {
                    "text": "HCL Software"
                },
                "RegistrationNo.lblDetail": {
                    "text": "REGISTRATION NUMBER"
                },
                "RegistrationNo.lblDetailValue": {
                    "text": "34234345435"
                },
                "ContactName.lblDetail": {
                    "text": "CONTACT NAME"
                },
                "ContactName.lblDetailValue": {
                    "text": "Michelle Lota"
                },
                "ContactTitle.lblDetail": {
                    "text": "CONTACT TITLE"
                },
                "ContactTitle.lblDetailValue": {
                    "text": "HR Benefits Manager"
                },
                "ContactPhone.lblDetail": {
                    "text": "CONTACT PHONE"
                },
                "ContactPhone.lblDetailValue": {
                    "text": "(555) 555-5555"
                },
                "ContactEmail.lblDetail": {
                    "text": "CONTACT EMAIL"
                },
                "ContactEmail.lblDetailValue": {
                    "text": "benefits@hcl-software.com"
                },
                "MaxSpendLimit.lblDetail": {
                    "text": "MAXIMUM SPENDING LIMIT (KES)"
                },
                "MaxSpendLimit.lblDetailValue": {
                    "text": "2,400,000"
                },
                "SuspendStatus.lblDetail": {
                    "text": "SUSPEND STATUS"
                },
                "SuspendStatus.lblDetailValue": {
                    "text": "Active"
                },
                "SubHdr1.lblSubHdr": {
                    "text": "Employee Details"
                },
                "segHeader.lblCIFNo": {
                    "text": "ID No"
                },
                "segHeader.lblCustomerName": {
                    "text": "Comments"
                },
                "segHeader.lblDate": {
                    "text": "CIF No."
                },
                "segHeader.lblIDNo": {
                    "text": "Customer Name"
                },
                "segHeader": {
                    "top": "8dp"
                },
                "SegSuspendList": {
                    "height": "62%"
                },
                "SegSuspendList.segSuspend": {
                    "data": [{
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "232805454",
                        "lblIDNoVal": "Zuri Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "234234234",
                        "lblIDNoVal": "Zuri Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "342343555",
                        "lblIDNoVal": "Zuri Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "323456789",
                        "lblIDNoVal": "Amari Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "232805454",
                        "lblIDNoVal": "Chege Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "234234234",
                        "lblIDNoVal": "Chege Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "323456789",
                        "lblIDNoVal": "HCL Software",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "323456789",
                        "lblIDNoVal": "HCL South America",
                        "lblReasonVal": ""
                    }],
                    "height": "100%"
                },
                "flxSubHdr.lblSubHdr": {
                    "text": "Approval Status"
                },
                "flxSegHdr.lblCIFNo": {
                    "text": "ID No"
                },
                "flxSegHdr.lblCustomerName": {
                    "text": "Comments"
                },
                "flxSegHdr.lblDate": {
                    "text": "CIF No."
                },
                "flxSegHdr.lblIDNo": {
                    "text": "Customer Name"
                },
                "flxSegHdr": {
                    "top": "0dp"
                },
                "segApprovalStatus": {
                    "height": "75%"
                },
                "segApprovalStatus.segSuspend": {
                    "data": [{
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "232805454",
                        "lblIDNoVal": "Zuri Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "234234234",
                        "lblIDNoVal": "Zuri Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "342343555",
                        "lblIDNoVal": "Zuri Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "323456789",
                        "lblIDNoVal": "Amari Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "232805454",
                        "lblIDNoVal": "Chege Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "234234234",
                        "lblIDNoVal": "Chege Naosi",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "323456789",
                        "lblIDNoVal": "HCL Software",
                        "lblReasonVal": ""
                    }, {
                        "lblCiFNoVal": "23280545",
                        "lblCustomerNameVal": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                        "lblDateVal": "323456789",
                        "lblIDNoVal": "HCL South America",
                        "lblReasonVal": ""
                    }],
                    "height": "100%"
                },
                "flxSubHdr1": {
                    "centerY": "",
                    "top": "0dp"
                },
                "flxSubHdr1.lblSubHdr": {
                    "text": "Approval Status"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmSchHisDetails,
            "enabledForIdleTimeout": false,
            "id": "frmSchHisDetails",
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