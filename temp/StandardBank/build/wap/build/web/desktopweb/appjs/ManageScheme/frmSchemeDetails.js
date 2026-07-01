define("ManageScheme/frmSchemeDetails", function() {
    return function(controller) {
        function addWidgetsfrmSchemeDetails() {
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
                "overrides": {
                    "imgLogo": {
                        "src": "sblogo.png"
                    }
                }
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
                "overrides": {
                    "imgLogout": {
                        "src": "icon_logout.png"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxScrSchemeDetails = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "91%",
                "horizontalScrollIndicator": true,
                "id": "flxScrSchemeDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "verticalScrollIndicator": true,
                "width": "96%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxScrSchemeDetails.setDefaultUnit(voltmx.flex.DP);
            var flxDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDetails.setDefaultUnit(voltmx.flex.DP);
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
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    },
                    "lblSubHdr": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.GeneralDetails\")"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var FlexContainer0fb5a511afd374c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "24dp",
                "clipBounds": false,
                "id": "FlexContainer0fb5a511afd374c",
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
                "padding": [12, 0, 12, 24],
                "paddingInPixel": true
            }, {});
            FlexContainer0fb5a511afd374c.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0i9ccb313533048 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0i9ccb313533048",
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
            FlexContainer0i9ccb313533048.setDefaultUnit(voltmx.flex.DP);
            var LabelsField = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LabelsField",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SchemeID\")"
                    },
                    "lblDetailValue": {
                        "text": "0012350"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0i9ccb313533048.add(LabelsField);
            var FlexContainer0d6c95f60b8d043 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0d6c95f60b8d043",
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
            FlexContainer0d6c95f60b8d043.setDefaultUnit(voltmx.flex.DP);
            var LabelsField1 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LabelsField1",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SchemeName\")"
                    },
                    "lblDetailValue": {
                        "text": "HCL SOFTWARE AMERICA"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0d6c95f60b8d043.add(LabelsField1);
            var FlexContainer0a466de0ddb9c42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0a466de0ddb9c42",
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
            FlexContainer0a466de0ddb9c42.setDefaultUnit(voltmx.flex.DP);
            var LabelsField2 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LabelsField2",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.CIFNumber\")"
                    },
                    "lblDetailValue": {
                        "text": "55534671"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0a466de0ddb9c42.add(LabelsField2);
            var FlexContainer0ace81c82c63440 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0ace81c82c63440",
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
            FlexContainer0ace81c82c63440.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0a9afe0158ee14a = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0a9afe0158ee14a",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.EmployerName\")"
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
            FlexContainer0ace81c82c63440.add(CopyLabelsField0a9afe0158ee14a);
            var FlexContainer0gec71c8ea63249 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0gec71c8ea63249",
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
            FlexContainer0gec71c8ea63249.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0c1218810a98147 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0c1218810a98147",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.RegistrationNo\")"
                    },
                    "lblDetailValue": {
                        "text": "221234678904"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0gec71c8ea63249.add(CopyLabelsField0c1218810a98147);
            var FlexContainer0h256b9c7113c4f = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0h256b9c7113c4f",
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
            FlexContainer0h256b9c7113c4f.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0aaf3b83ddaf047 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0aaf3b83ddaf047",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.ContactName\")"
                    },
                    "lblDetailValue": {
                        "text": "Michello Viens"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0h256b9c7113c4f.add(CopyLabelsField0aaf3b83ddaf047);
            var FlexContainer0a4082c17f8f34d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0a4082c17f8f34d",
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
            FlexContainer0a4082c17f8f34d.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0eb8321c9bcb146 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0eb8321c9bcb146",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.ContactTitle\")"
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
            FlexContainer0a4082c17f8f34d.add(CopyLabelsField0eb8321c9bcb146);
            var FlexContainer0ef86dfeff3d747 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0ef86dfeff3d747",
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
            FlexContainer0ef86dfeff3d747.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0gc6f630c73f347 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0gc6f630c73f347",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.ContactPhone\")"
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
            FlexContainer0ef86dfeff3d747.add(CopyLabelsField0gc6f630c73f347);
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxMobileNumber.setDefaultUnit(voltmx.flex.DP);
            var MobileNumber = new com.hcl.labelField.LabelsField({
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.MobileNumber\")"
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
            flxMobileNumber.add(MobileNumber);
            var FlexContainer0ea8c9b435fe84a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0ea8c9b435fe84a",
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
            FlexContainer0ea8c9b435fe84a.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0db1a52314c2745 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0db1a52314c2745",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.ContactEmail\")"
                    },
                    "lblDetailValue": {
                        "text": "bemefits@hcl-software.com"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0ea8c9b435fe84a.add(CopyLabelsField0db1a52314c2745);
            var FlexContainer0caf646fba49b41 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0caf646fba49b41",
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
            FlexContainer0caf646fba49b41.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0i3e70e3813ff4d = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0i3e70e3813ff4d",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.maxSpenLimit\")"
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
            FlexContainer0caf646fba49b41.add(CopyLabelsField0i3e70e3813ff4d);
            var FlexContainer0h195ac660bae44 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "FlexContainer0h195ac660bae44",
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
            FlexContainer0h195ac660bae44.setDefaultUnit(voltmx.flex.DP);
            var CopyLabelsField0b4e73a0e538647 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLabelsField0b4e73a0e538647",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SuspendStatus\")"
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
            FlexContainer0h195ac660bae44.add(CopyLabelsField0b4e73a0e538647);
            var flxAddress = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAddress",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddress.setDefaultUnit(voltmx.flex.DP);
            var Address = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Address",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.Address\")"
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
            flxAddress.add(Address);
            FlexContainer0fb5a511afd374c.add(FlexContainer0i9ccb313533048, FlexContainer0d6c95f60b8d043, FlexContainer0a466de0ddb9c42, FlexContainer0ace81c82c63440, FlexContainer0gec71c8ea63249, FlexContainer0h256b9c7113c4f, FlexContainer0a4082c17f8f34d, FlexContainer0ef86dfeff3d747, flxMobileNumber, FlexContainer0ea8c9b435fe84a, FlexContainer0caf646fba49b41, FlexContainer0h195ac660bae44, flxAddress);
            flxDetails.add(SubHdr, FlexContainer0fb5a511afd374c);
            var flxLimitDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxLimitDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxLimitDetails.setDefaultUnit(voltmx.flex.DP);
            var LimitSubHdr = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "LimitSubHdr",
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
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.LimitDetails\")"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxLimitDetailsData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "24dp",
                "clipBounds": false,
                "id": "flxLimitDetailsData",
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
                "padding": [12, 0, 12, 24],
                "paddingInPixel": true
            }, {});
            flxLimitDetailsData.setDefaultUnit(voltmx.flex.DP);
            var flxSalaryFrq = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSalaryFrq",
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
            flxSalaryFrq.setDefaultUnit(voltmx.flex.DP);
            var SalaryFreq = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SalaryFreq",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SalaryFreq\")"
                    },
                    "lblDetailValue": {
                        "text": "0012350"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSalaryFrq.add(SalaryFreq);
            var flxOverallLoanLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxOverallLoanLimit",
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
            flxOverallLoanLimit.setDefaultUnit(voltmx.flex.DP);
            var LoanLimit = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LoanLimit",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.OverallLoanLimit\")"
                    },
                    "lblDetailValue": {
                        "text": "HCL SOFTWARE AMERICA"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxOverallLoanLimit.add(LoanLimit);
            var flxLimitEndDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxLimitEndDate",
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
            flxLimitEndDate.setDefaultUnit(voltmx.flex.DP);
            var LimitEndDate = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LimitEndDate",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.LimitEndDate\")"
                    },
                    "lblDetailValue": {
                        "text": "55534671"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxLimitEndDate.add(LimitEndDate);
            var flxCutOffDelinqunceyPcnt = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCutOffDelinqunceyPcnt",
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
            flxCutOffDelinqunceyPcnt.setDefaultUnit(voltmx.flex.DP);
            var CutOffDelinqunceyPcnt = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CutOffDelinqunceyPcnt",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.CutOffDelinqunceyPcnt\")"
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
            flxCutOffDelinqunceyPcnt.add(CutOffDelinqunceyPcnt);
            var flxSancExceedOvrAllLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSancExceedOvrAllLimit",
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
            flxSancExceedOvrAllLimit.setDefaultUnit(voltmx.flex.DP);
            var SancExceedOvrAllLimit = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SancExceedOvrAllLimit",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SancExceedOvrAllLimit\")"
                    },
                    "lblDetailValue": {
                        "text": "221234678904"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSancExceedOvrAllLimit.add(SancExceedOvrAllLimit);
            var flxOverAllLimitCCY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxOverAllLimitCCY",
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
            flxOverAllLimitCCY.setDefaultUnit(voltmx.flex.DP);
            var OverAllLimitCCY = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "OverAllLimitCCY",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.OverAllLimitCCY\")"
                    },
                    "lblDetailValue": {
                        "text": "Michello Viens"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxOverAllLimitCCY.add(OverAllLimitCCY);
            var fxlLimitStartDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "fxlLimitStartDate",
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
            fxlLimitStartDate.setDefaultUnit(voltmx.flex.DP);
            var LimitStartDate = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LimitStartDate",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.LimitStartDate\")"
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
            fxlLimitStartDate.add(LimitStartDate);
            var flxRevolvingLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRevolvingLimit",
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
            flxRevolvingLimit.setDefaultUnit(voltmx.flex.DP);
            var RevolvingLimit = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RevolvingLimit",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.RevolvingLimit\")"
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
            flxRevolvingLimit.add(RevolvingLimit);
            var flxSalaryCreditTolerance = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSalaryCreditTolerance",
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
            flxSalaryCreditTolerance.setDefaultUnit(voltmx.flex.DP);
            var SalaryCreditTolerance = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SalaryCreditTolerance",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SalaryCreditTolerance\")"
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
            flxSalaryCreditTolerance.add(SalaryCreditTolerance);
            var flxDelinquencyExcdCutOfLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDelinquencyExcdCutOfLimit",
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
            flxDelinquencyExcdCutOfLimit.setDefaultUnit(voltmx.flex.DP);
            var DelinquencyExcdCutOfLimit = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DelinquencyExcdCutOfLimit",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.DelinquencyExcdCutOfLimit\")"
                    },
                    "lblDetailValue": {
                        "text": "bemefits@hcl-software.com"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDelinquencyExcdCutOfLimit.add(DelinquencyExcdCutOfLimit);
            flxLimitDetailsData.add(flxSalaryFrq, flxOverallLoanLimit, flxLimitEndDate, flxCutOffDelinqunceyPcnt, flxSancExceedOvrAllLimit, flxOverAllLimitCCY, fxlLimitStartDate, flxRevolvingLimit, flxSalaryCreditTolerance, flxDelinquencyExcdCutOfLimit);
            flxLimitDetails.add(LimitSubHdr, flxLimitDetailsData);
            var flxSchemeDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchemeDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeDetails.setDefaultUnit(voltmx.flex.DP);
            var SchemeDetailsSubHdr = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "SchemeDetailsSubHdr",
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
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SchemeDetails\")"
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
                    "flxCIFNo": {
                        "isVisible": false
                    },
                    "flxDate": {
                        "isVisible": false
                    },
                    "flxIDNo": {
                        "isVisible": false
                    },
                    "lblCustomerName": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SchemeCode\")"
                    },
                    "lblReason": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.GeneralDetails\")"
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
            var flxSegSchemeDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "250dp",
                "id": "flxSegSchemeDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
            flxSegSchemeDetails.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('FBox0g93c8aed110e4b', 'FBox0g93c8aed110e4b', 'FBox0g93c8aed110e4bController', {
                "appName": "ManageScheme"
            });
            var segSchemeDetails = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "data": [{
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }, {
                    "lblSchemeCode": "Label",
                    "lblSchemeDes": "Label"
                }],
                "groupCells": false,
                "height": "250dp",
                "id": "segSchemeDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegRow",
                "rowTemplate": "FBox0g93c8aed110e4b",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f6f6f600",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "fxlSegScheme": "fxlSegScheme",
                    "lblSchemeCode": "lblSchemeCode",
                    "lblSchemeDes": "lblSchemeDes"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegSchemeDetails.add(segSchemeDetails);
            flxSchemeDetails.add(SchemeDetailsSubHdr, segHeader, flxSegSchemeDetails);
            var flxAcctPrefernce = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAcctPrefernce",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxAcctPrefernce.setDefaultUnit(voltmx.flex.DP);
            var AcctPreference = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "AcctPreference",
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
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.AccountPreference\")"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxAcctPreDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "24dp",
                "clipBounds": false,
                "id": "flxAcctPreDetails",
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
                "padding": [12, 0, 12, 24],
                "paddingInPixel": true
            }, {});
            flxAcctPreDetails.setDefaultUnit(voltmx.flex.DP);
            var flxTotalOutStandinfAmt = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTotalOutStandinfAmt",
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
            flxTotalOutStandinfAmt.setDefaultUnit(voltmx.flex.DP);
            var TotalOutStandinfAmt = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "TotalOutStandinfAmt",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotalOutstandingAmt\")"
                    },
                    "lblDetailValue": {
                        "text": "0012350"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTotalOutStandinfAmt.add(TotalOutStandinfAmt);
            var flxCurrentDelinquencyRate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCurrentDelinquencyRate",
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
            flxCurrentDelinquencyRate.setDefaultUnit(voltmx.flex.DP);
            var CurrentDelinquencyRate = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CurrentDelinquencyRate",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotalOutstandingAmt\")"
                    },
                    "lblDetailValue": {
                        "text": "HCL SOFTWARE AMERICA"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCurrentDelinquencyRate.add(CurrentDelinquencyRate);
            var flxTotalChargeoffPrincipal = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTotalChargeoffPrincipal",
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
            flxTotalChargeoffPrincipal.setDefaultUnit(voltmx.flex.DP);
            var TotalChargeoffPrincipal = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "TotalChargeoffPrincipal",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotalChargeoffPrincipal\")"
                    },
                    "lblDetailValue": {
                        "text": "55534671"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTotalChargeoffPrincipal.add(TotalChargeoffPrincipal);
            var flxTotalChargedOffPrincipaloutstanding = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTotalChargedOffPrincipaloutstanding",
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
            flxTotalChargedOffPrincipaloutstanding.setDefaultUnit(voltmx.flex.DP);
            var TotalChargedOffPrincipaloutstanding = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "TotalChargedOffPrincipaloutstanding",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotalChargedOffPrincipalOutstanding\")"
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
            flxTotalChargedOffPrincipaloutstanding.add(TotalChargedOffPrincipaloutstanding);
            var flxTotalLoanAmount = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTotalLoanAmount",
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
            flxTotalLoanAmount.setDefaultUnit(voltmx.flex.DP);
            var TotalLoanAmount = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "TotalLoanAmount",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotalLoanAmount\")"
                    },
                    "lblDetailValue": {
                        "text": "221234678904"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTotalLoanAmount.add(TotalLoanAmount);
            var flxTotalOverdueAmt = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTotalOverdueAmt",
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
            flxTotalOverdueAmt.setDefaultUnit(voltmx.flex.DP);
            var TotalOverdueAmt = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "TotalOverdueAmt",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotaloverdueAmt\")"
                    },
                    "lblDetailValue": {
                        "text": "Michello Viens"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxTotalOverdueAmt.add(TotalOverdueAmt);
            var flxNoofChargedoffAcct = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxNoofChargedoffAcct",
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
            flxNoofChargedoffAcct.setDefaultUnit(voltmx.flex.DP);
            var NoofChargedoffAcct = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "NoofChargedoffAcct",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.NoofChargedoffAcct\")"
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
            flxNoofChargedoffAcct.add(NoofChargedoffAcct);
            var flxTotalChargeoffPrincipalRecovered = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxTotalChargeoffPrincipalRecovered",
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
            flxTotalChargeoffPrincipalRecovered.setDefaultUnit(voltmx.flex.DP);
            var TotalChargeoffPrincipalRecovered = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "TotalChargeoffPrincipalRecovered",
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
                    "LabelsField": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblDetail": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.TotalChargeoffPrincipalRecovered\")"
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
            flxTotalChargeoffPrincipalRecovered.add(TotalChargeoffPrincipalRecovered);
            flxAcctPreDetails.add(flxTotalOutStandinfAmt, flxCurrentDelinquencyRate, flxTotalChargeoffPrincipal, flxTotalChargedOffPrincipaloutstanding, flxTotalLoanAmount, flxTotalOverdueAmt, flxNoofChargedoffAcct, flxTotalChargeoffPrincipalRecovered);
            flxAcctPrefernce.add(AcctPreference, flxAcctPreDetails);
            var flxEmployeeDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "450dp",
                "id": "flxEmployeeDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
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
                "top": "0dp",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SubHdr": {
                        "centerY": "viz.val_cleared",
                        "top": "0dp"
                    },
                    "lblSubHdr": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.EmployeeDetails\")"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SrchTextBox = new com.hcl.srchTextBox.SrchTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "48dp",
                "id": "SrchTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "16dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "16dp",
                "width": "500dp",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SrchTextBox": {
                        "height": "48dp",
                        "left": "16dp",
                        "top": "16dp",
                        "width": "500dp"
                    },
                    "imgSrch": {
                        "src": "icon_srch.png"
                    },
                    "txtSrch": {
                        "i18n_placeholder": "voltmx.i18n.getLocalizedString(\"i18n.sbms.SearchCIFNameIdCompany\")"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SuspenEntryHdr = new com.hcl.suspenEntryHdr.SuspenEntryHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "40dp",
                "id": "SuspenEntryHdr",
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
                    "SuspenEntryHdr": {
                        "top": "16dp"
                    },
                    "lblCIFNO": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.CIFNo\")"
                    },
                    "lblCustomerName": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.CustomerName\")"
                    },
                    "lblIdNo": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.IdNo\")"
                    },
                    "lblReason": {
                        "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.Comments\")"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSusEntry = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "65%",
                "id": "flxSusEntry",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSusEntry.setDefaultUnit(voltmx.flex.DP);
            var SuspensionEntries = new com.hcl.SuspensionEntries.SuspensionEntries({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "SuspensionEntries",
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
            flxSusEntry.add(SuspensionEntries);
            flxEmployeeDetails.add(SubHdr1, SrchTextBox, SuspenEntryHdr, flxSusEntry);
            var flxBtn = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "16dp",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxBtn",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxBtn.setDefaultUnit(voltmx.flex.DP);
            var btnReturn = new voltmx.ui.Button({
                "height": "100%",
                "id": "btnReturn",
                "isVisible": true,
                "right": "0",
                "skin": "sknBtnBlue",
                "i18n_text": "voltmx.i18n.getLocalizedString(\"i18n.sbms.btn.ReturnToSchemeList\")",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [20, 0, 20, 0],
                "paddingInPixel": true
            }, {});
            flxBtn.add(btnReturn);
            flxScrSchemeDetails.add(flxDetails, flxLimitDetails, flxSchemeDetails, flxAcctPrefernce, flxEmployeeDetails, flxBtn);
            flxRight.add(FormHeader, flxScrSchemeDetails);
            flxMain.add(SideMenu, flxRight);
            var flxPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxPopup",
                "isVisible": true,
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
            flxPopup.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0fd94456459a349 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "80%",
                "id": "FlexContainer0fd94456459a349",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "285dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "257dp",
                "width": "50%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0fd94456459a349.setDefaultUnit(voltmx.flex.DP);
            var flxPopupHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "8%",
                "id": "flxPopupHdr",
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
            flxPopupHdr.setDefaultUnit(voltmx.flex.DP);
            var lblPopupHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblPopupHdr",
                "isVisible": true,
                "left": "32dp",
                "skin": "sknLblHeading2",
                "text": "Employee Details",
                "top": "9dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgCancel = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgCancel",
                "isVisible": true,
                "right": 24,
                "skin": "slImage",
                "src": "icon_alertclose.png",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupHdr.add(lblPopupHdr, imgCancel);
            var flxPopupSrc = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "89%",
                "horizontalScrollIndicator": true,
                "id": "flxPopupSrc",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "top": "3%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxPopupSrc.setDefaultUnit(voltmx.flex.DP);
            var flxPopupResGrid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "16dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxPopupResGrid",
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
                "padding": [16, 0, 16, 12],
                "paddingInPixel": true
            }, {});
            flxPopupResGrid.setDefaultUnit(voltmx.flex.DP);
            var flxGridCIFNUM = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridCIFNUM",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridCIFNUM.setDefaultUnit(voltmx.flex.DP);
            var CIFNo = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CIFNo",
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
                        "text": "2345678324"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridCIFNUM.add(CIFNo);
            var flxGridIDNO = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridIDNO",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridIDNO.setDefaultUnit(voltmx.flex.DP);
            var IDNo = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "IDNo",
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
                        "text": "ID NUMBER"
                    },
                    "lblDetailValue": {
                        "text": "1123456"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridIDNO.add(IDNo);
            var flxGridCustomerName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridCustomerName",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridCustomerName.setDefaultUnit(voltmx.flex.DP);
            var CustomerName = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CustomerName",
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
                        "text": "CUSTOMER NAME"
                    },
                    "lblDetailValue": {
                        "text": "ZUORI Nkosi"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridCustomerName.add(CustomerName);
            var flxGridEmployerName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridEmployerName",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridEmployerName.setDefaultUnit(voltmx.flex.DP);
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
            flxGridEmployerName.add(EmployerName);
            var flxGridSchemeID = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridSchemeID",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridSchemeID.setDefaultUnit(voltmx.flex.DP);
            var SchemeId = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SchemeId",
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
                        "text": "0098761"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridSchemeID.add(SchemeId);
            var flxGridDepartmentName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridDepartmentName",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridDepartmentName.setDefaultUnit(voltmx.flex.DP);
            var DepartmentName = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DepartmentName",
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
                        "text": "DEPARTMENT NAME"
                    },
                    "lblDetailValue": {
                        "text": "App Development"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridDepartmentName.add(DepartmentName);
            var flxGridEmpRegNo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridEmpRegNo",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridEmpRegNo.setDefaultUnit(voltmx.flex.DP);
            var EmpRegNo = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpRegNo",
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
                        "text": "EMPLOYER REGISTRATION NUMBER"
                    },
                    "lblDetailValue": {
                        "text": "223456789"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridEmpRegNo.add(EmpRegNo);
            var flxGridEmpType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridEmpType",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridEmpType.setDefaultUnit(voltmx.flex.DP);
            var EmpType = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpType",
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
                        "text": "EMPLOYMENT TYPE"
                    },
                    "lblDetailValue": {
                        "text": "Employed Full-time"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridEmpType.add(EmpType);
            var flxGridIsActive = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridIsActive",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridIsActive.setDefaultUnit(voltmx.flex.DP);
            var IsActive = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "IsActive",
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
                        "text": "Is Active Government Payroll?"
                    },
                    "lblDetailValue": {
                        "text": "Yes"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridIsActive.add(IsActive);
            flxPopupResGrid.add(flxGridCIFNUM, flxGridIDNO, flxGridCustomerName, flxGridEmployerName, flxGridSchemeID, flxGridDepartmentName, flxGridEmpRegNo, flxGridEmpType, flxGridIsActive);
            var flxSep = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "2%",
                "width": "94%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSep.setDefaultUnit(voltmx.flex.DP);
            flxSep.add();
            var flxPopupResGrid1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "16dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxPopupResGrid1",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "2%",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [12, 0, 12, 12],
                "paddingInPixel": true
            }, {});
            flxPopupResGrid1.setDefaultUnit(voltmx.flex.DP);
            var flxGridSacDeduction = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridSacDeduction",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridSacDeduction.setDefaultUnit(voltmx.flex.DP);
            var SacDeduction = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SacDeduction",
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
                        "text": "SANTUTORY DEDUCTIONS (KES)"
                    },
                    "lblDetailValue": {
                        "text": "500.0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridSacDeduction.add(SacDeduction);
            var flxGridAllowance = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridAllowance",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridAllowance.setDefaultUnit(voltmx.flex.DP);
            var Allowance = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Allowance",
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
                        "text": "ALLOWANCES (KES)"
                    },
                    "lblDetailValue": {
                        "text": "500.00"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridAllowance.add(Allowance);
            var flxGridOtherDeduction = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridOtherDeduction",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridOtherDeduction.setDefaultUnit(voltmx.flex.DP);
            var OtherDeduction = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "OtherDeduction",
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
                        "text": "OTHER DEDUCTION (KES)"
                    },
                    "lblDetailValue": {
                        "text": "500.00"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridOtherDeduction.add(OtherDeduction);
            var flxGridStandbicRes = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridStandbicRes",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridStandbicRes.setDefaultUnit(voltmx.flex.DP);
            var StandbicRes = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "StandbicRes",
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
                        "text": "STANDBIC RESERVATION (KES)"
                    },
                    "lblDetailValue": {
                        "text": "500.00"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridStandbicRes.add(StandbicRes);
            var flxGridAffordability = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridAffordability",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridAffordability.setDefaultUnit(voltmx.flex.DP);
            var Affordability = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Affordability",
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
                        "text": "AFFORDABILITY (KES)"
                    },
                    "lblDetailValue": {
                        "text": "500.00"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridAffordability.add(Affordability);
            var flxGridInstallementSum = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridInstallementSum",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridInstallementSum.setDefaultUnit(voltmx.flex.DP);
            var InstallmentSum = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "InstallmentSum",
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
                        "text": "SUMMARY OF INSTALLMENT VALUE (KES)"
                    },
                    "lblDetailValue": {
                        "text": "500.00"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridInstallementSum.add(InstallmentSum);
            var flxGridProbationFlag = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridProbationFlag",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridProbationFlag.setDefaultUnit(voltmx.flex.DP);
            var ProbationFlag = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ProbationFlag",
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
                        "text": "PROBATION FLAG"
                    },
                    "lblDetailValue": {
                        "text": "Probation Flag"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridProbationFlag.add(ProbationFlag);
            var flxGridEmpty0 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridEmpty0",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridEmpty0.setDefaultUnit(voltmx.flex.DP);
            var Empty0 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Empty0",
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
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridEmpty0.add(Empty0);
            var flxGridComments = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridComments",
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
                        "1366": 12
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxGridComments.setDefaultUnit(voltmx.flex.DP);
            var Comments = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Comments",
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
                        "text": "COMMENTS"
                    },
                    "lblDetailValue": {
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridComments.add(Comments);
            flxPopupResGrid1.add(flxGridSacDeduction, flxGridAllowance, flxGridOtherDeduction, flxGridStandbicRes, flxGridAffordability, flxGridInstallementSum, flxGridProbationFlag, flxGridEmpty0, flxGridComments);
            flxPopupSrc.add(flxPopupResGrid, flxSep, flxPopupResGrid1);
            FlexContainer0fd94456459a349.add(flxPopupHdr, flxPopupSrc);
            flxPopup.add(FlexContainer0fd94456459a349);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "SideMenu.imgLogo": {
                    "src": "sblogo.png"
                },
                "FormHeader.imgLogout": {
                    "src": "icon_logout.png"
                },
                "SubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "LabelsField": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LabelsField.lblDetailValue": {
                    "text": "0012350"
                },
                "LabelsField1": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LabelsField1.lblDetailValue": {
                    "text": "HCL SOFTWARE AMERICA"
                },
                "LabelsField2": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LabelsField2.lblDetailValue": {
                    "text": "55534671"
                },
                "CopyLabelsField0a9afe0158ee14a": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0a9afe0158ee14a.lblDetailValue": {
                    "text": "HCL Software"
                },
                "CopyLabelsField0c1218810a98147": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0c1218810a98147.lblDetailValue": {
                    "text": "221234678904"
                },
                "CopyLabelsField0aaf3b83ddaf047": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0aaf3b83ddaf047.lblDetailValue": {
                    "text": "Michello Viens"
                },
                "CopyLabelsField0eb8321c9bcb146": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0eb8321c9bcb146.lblDetailValue": {
                    "text": "HR Benefits Manager"
                },
                "CopyLabelsField0gc6f630c73f347": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0gc6f630c73f347.lblDetailValue": {
                    "text": "(555) 555-5555"
                },
                "MobileNumber": {
                    "width": "100%",
                    "zIndex": 1
                },
                "MobileNumber.lblDetailValue": {
                    "text": "Active"
                },
                "CopyLabelsField0db1a52314c2745": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0db1a52314c2745.lblDetailValue": {
                    "text": "bemefits@hcl-software.com"
                },
                "CopyLabelsField0i3e70e3813ff4d": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0i3e70e3813ff4d.lblDetailValue": {
                    "text": "2,400,000"
                },
                "CopyLabelsField0b4e73a0e538647": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0b4e73a0e538647.lblDetailValue": {
                    "text": "Active"
                },
                "Address": {
                    "width": "100%",
                    "zIndex": 1
                },
                "Address.lblDetailValue": {
                    "text": "Active"
                },
                "LimitSubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SalaryFreq": {
                    "width": "100%",
                    "zIndex": 1
                },
                "SalaryFreq.lblDetailValue": {
                    "text": "0012350"
                },
                "LoanLimit": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LoanLimit.lblDetailValue": {
                    "text": "HCL SOFTWARE AMERICA"
                },
                "LimitEndDate": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LimitEndDate.lblDetailValue": {
                    "text": "55534671"
                },
                "CutOffDelinqunceyPcnt": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CutOffDelinqunceyPcnt.lblDetailValue": {
                    "text": "HCL Software"
                },
                "SancExceedOvrAllLimit": {
                    "width": "100%",
                    "zIndex": 1
                },
                "SancExceedOvrAllLimit.lblDetailValue": {
                    "text": "221234678904"
                },
                "OverAllLimitCCY": {
                    "width": "100%",
                    "zIndex": 1
                },
                "OverAllLimitCCY.lblDetailValue": {
                    "text": "Michello Viens"
                },
                "LimitStartDate": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LimitStartDate.lblDetailValue": {
                    "text": "HR Benefits Manager"
                },
                "RevolvingLimit": {
                    "width": "100%",
                    "zIndex": 1
                },
                "RevolvingLimit.lblDetailValue": {
                    "text": "(555) 555-5555"
                },
                "SalaryCreditTolerance": {
                    "width": "100%",
                    "zIndex": 1
                },
                "SalaryCreditTolerance.lblDetailValue": {
                    "text": "Active"
                },
                "DelinquencyExcdCutOfLimit": {
                    "width": "100%",
                    "zIndex": 1
                },
                "DelinquencyExcdCutOfLimit.lblDetailValue": {
                    "text": "bemefits@hcl-software.com"
                },
                "SchemeDetailsSubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "segHeader": {
                    "top": "0dp"
                },
                "AcctPreference": {
                    "centerY": "",
                    "top": "0dp"
                },
                "TotalOutStandinfAmt": {
                    "width": "100%",
                    "zIndex": 1
                },
                "TotalOutStandinfAmt.lblDetailValue": {
                    "text": "0012350"
                },
                "CurrentDelinquencyRate": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CurrentDelinquencyRate.lblDetailValue": {
                    "text": "HCL SOFTWARE AMERICA"
                },
                "TotalChargeoffPrincipal": {
                    "width": "100%",
                    "zIndex": 1
                },
                "TotalChargeoffPrincipal.lblDetailValue": {
                    "text": "55534671"
                },
                "TotalChargedOffPrincipaloutstanding": {
                    "width": "100%",
                    "zIndex": 1
                },
                "TotalChargedOffPrincipaloutstanding.lblDetailValue": {
                    "text": "HCL Software"
                },
                "TotalLoanAmount": {
                    "width": "100%",
                    "zIndex": 1
                },
                "TotalLoanAmount.lblDetailValue": {
                    "text": "221234678904"
                },
                "TotalOverdueAmt": {
                    "width": "100%",
                    "zIndex": 1
                },
                "TotalOverdueAmt.lblDetailValue": {
                    "text": "Michello Viens"
                },
                "NoofChargedoffAcct": {
                    "width": "100%",
                    "zIndex": 1
                },
                "NoofChargedoffAcct.lblDetailValue": {
                    "text": "HR Benefits Manager"
                },
                "TotalChargeoffPrincipalRecovered": {
                    "width": "100%",
                    "zIndex": 1
                },
                "TotalChargeoffPrincipalRecovered.lblDetailValue": {
                    "text": "(555) 555-5555"
                },
                "SubHdr1": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SrchTextBox": {
                    "height": "48dp",
                    "left": "16dp",
                    "top": "16dp",
                    "width": "500dp"
                },
                "SrchTextBox.imgSrch": {
                    "src": "icon_srch.png"
                },
                "SuspenEntryHdr": {
                    "top": "16dp"
                },
                "CIFNo.lblDetail": {
                    "text": "CIF NUMBER"
                },
                "CIFNo.lblDetailValue": {
                    "text": "2345678324"
                },
                "IDNo.lblDetail": {
                    "text": "ID NUMBER"
                },
                "IDNo.lblDetailValue": {
                    "text": "1123456"
                },
                "CustomerName.lblDetail": {
                    "text": "CUSTOMER NAME"
                },
                "CustomerName.lblDetailValue": {
                    "text": "ZUORI Nkosi"
                },
                "EmployerName.lblDetail": {
                    "text": "EMPLOYER NAME"
                },
                "EmployerName.lblDetailValue": {
                    "text": "HCL Software"
                },
                "SchemeId.lblDetail": {
                    "text": "SCHEME ID"
                },
                "SchemeId.lblDetailValue": {
                    "text": "0098761"
                },
                "DepartmentName.lblDetail": {
                    "text": "DEPARTMENT NAME"
                },
                "DepartmentName.lblDetailValue": {
                    "text": "App Development"
                },
                "EmpRegNo.lblDetail": {
                    "text": "EMPLOYER REGISTRATION NUMBER"
                },
                "EmpRegNo.lblDetailValue": {
                    "text": "223456789"
                },
                "EmpType.lblDetail": {
                    "text": "EMPLOYMENT TYPE"
                },
                "EmpType.lblDetailValue": {
                    "text": "Employed Full-time"
                },
                "IsActive.lblDetail": {
                    "text": "Is Active Government Payroll?"
                },
                "IsActive.lblDetailValue": {
                    "text": "Yes"
                },
                "SacDeduction.lblDetail": {
                    "text": "SANTUTORY DEDUCTIONS (KES)"
                },
                "SacDeduction.lblDetailValue": {
                    "text": "500.0"
                },
                "Allowance.lblDetail": {
                    "text": "ALLOWANCES (KES)"
                },
                "Allowance.lblDetailValue": {
                    "text": "500.00"
                },
                "OtherDeduction.lblDetail": {
                    "text": "OTHER DEDUCTION (KES)"
                },
                "OtherDeduction.lblDetailValue": {
                    "text": "500.00"
                },
                "StandbicRes.lblDetail": {
                    "text": "STANDBIC RESERVATION (KES)"
                },
                "StandbicRes.lblDetailValue": {
                    "text": "500.00"
                },
                "Affordability.lblDetail": {
                    "text": "AFFORDABILITY (KES)"
                },
                "Affordability.lblDetailValue": {
                    "text": "500.00"
                },
                "InstallmentSum.lblDetail": {
                    "text": "SUMMARY OF INSTALLMENT VALUE (KES)"
                },
                "InstallmentSum.lblDetailValue": {
                    "text": "500.00"
                },
                "ProbationFlag.lblDetail": {
                    "text": "PROBATION FLAG"
                },
                "ProbationFlag.lblDetailValue": {
                    "text": "Probation Flag"
                },
                "Comments.lblDetail": {
                    "text": "COMMENTS"
                },
                "Comments.lblDetailValue": {
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                }
            }
            this.add(flxMain, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmSchemeDetails,
            "enabledForIdleTimeout": false,
            "id": "frmSchemeDetails",
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