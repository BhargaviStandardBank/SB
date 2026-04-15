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
                "left": "15%",
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
                        "text": "Scheme Details"
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
                "top": "8dp",
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
                "top": "0dp",
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
                        "text": "Details"
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
                        "text": "SCHEME ID"
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
                        "text": "SCHEME NAME"
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
                        "text": "CIF NUMBER"
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
                        "text": "REGISTRATION NO"
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
                        "text": "CONTACT NAME"
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
            FlexContainer0ef86dfeff3d747.add(CopyLabelsField0gc6f630c73f347);
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
                        "text": "CONTACT EMAIL"
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
                        "text": "MAXIMUM SPENDING LIMIT(KES)"
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
            FlexContainer0h195ac660bae44.add(CopyLabelsField0b4e73a0e538647);
            FlexContainer0fb5a511afd374c.add(FlexContainer0i9ccb313533048, FlexContainer0d6c95f60b8d043, FlexContainer0a466de0ddb9c42, FlexContainer0ace81c82c63440, FlexContainer0gec71c8ea63249, FlexContainer0h256b9c7113c4f, FlexContainer0a4082c17f8f34d, FlexContainer0ef86dfeff3d747, FlexContainer0ea8c9b435fe84a, FlexContainer0caf646fba49b41, FlexContainer0h195ac660bae44);
            flxDetails.add(SubHdr, FlexContainer0fb5a511afd374c);
            var flxEmployeeDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "430dp",
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
                        "text": "EMPLYOPEE DETAILS"
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
                "height": "12%",
                "id": "SrchTextBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "16dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "8dp",
                "width": "500px",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SrchTextBox": {
                        "height": "12%",
                        "top": "8dp",
                        "width": "500px"
                    },
                    "imgSrch": {
                        "src": "icon_srch.png"
                    },
                    "txtSrch": {
                        "placeholder": "Search scheme ID, scheme name, CIF, or company"
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
                "top": "8dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "SuspenEntryHdr": {
                        "top": "8dp"
                    },
                    "lblReason": {
                        "text": "Comments"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var SuspensionEntries = new com.hcl.SuspensionEntries.SuspensionEntries({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
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
            flxEmployeeDetails.add(SubHdr1, SrchTextBox, SuspenEntryHdr, SuspensionEntries);
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
                "top": "16dp",
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
                "text": "RETURN TO SCHEME LIST",
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
            flxScrSchemeDetails.add(flxDetails, flxEmployeeDetails, flxBtn);
            flxRight.add(FormHeader, flxScrSchemeDetails);
            flxMain.add(flxLeft, flxRight);
            var flxPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxPopup",
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
                "FormHeader": {
                    "centerY": "",
                    "top": "0dp"
                },
                "FormHeader.lblHdr": {
                    "text": "Scheme Details"
                },
                "SubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr.lblSubHdr": {
                    "text": "Details"
                },
                "LabelsField": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LabelsField.lblDetail": {
                    "text": "SCHEME ID"
                },
                "LabelsField.lblDetailValue": {
                    "text": "0012350"
                },
                "LabelsField1": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LabelsField1.lblDetail": {
                    "text": "SCHEME NAME"
                },
                "LabelsField1.lblDetailValue": {
                    "text": "HCL SOFTWARE AMERICA"
                },
                "LabelsField2": {
                    "width": "100%",
                    "zIndex": 1
                },
                "LabelsField2.lblDetail": {
                    "text": "CIF NUMBER"
                },
                "LabelsField2.lblDetailValue": {
                    "text": "55534671"
                },
                "CopyLabelsField0a9afe0158ee14a": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0a9afe0158ee14a.lblDetail": {
                    "text": "EMPLOYER NAME"
                },
                "CopyLabelsField0a9afe0158ee14a.lblDetailValue": {
                    "text": "HCL Software"
                },
                "CopyLabelsField0c1218810a98147": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0c1218810a98147.lblDetail": {
                    "text": "REGISTRATION NO"
                },
                "CopyLabelsField0c1218810a98147.lblDetailValue": {
                    "text": "221234678904"
                },
                "CopyLabelsField0aaf3b83ddaf047": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0aaf3b83ddaf047.lblDetail": {
                    "text": "CONTACT NAME"
                },
                "CopyLabelsField0aaf3b83ddaf047.lblDetailValue": {
                    "text": "Michello Viens"
                },
                "CopyLabelsField0eb8321c9bcb146": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0eb8321c9bcb146.lblDetail": {
                    "text": "CONTACT TITLE"
                },
                "CopyLabelsField0eb8321c9bcb146.lblDetailValue": {
                    "text": "HR Benefits Manager"
                },
                "CopyLabelsField0gc6f630c73f347": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0gc6f630c73f347.lblDetail": {
                    "text": "CONTACT PHONE"
                },
                "CopyLabelsField0gc6f630c73f347.lblDetailValue": {
                    "text": "(555) 555-5555"
                },
                "CopyLabelsField0db1a52314c2745": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0db1a52314c2745.lblDetail": {
                    "text": "CONTACT EMAIL"
                },
                "CopyLabelsField0db1a52314c2745.lblDetailValue": {
                    "text": "bemefits@hcl-software.com"
                },
                "CopyLabelsField0i3e70e3813ff4d": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0i3e70e3813ff4d.lblDetail": {
                    "text": "MAXIMUM SPENDING LIMIT(KES)"
                },
                "CopyLabelsField0i3e70e3813ff4d.lblDetailValue": {
                    "text": "2,400,000"
                },
                "CopyLabelsField0b4e73a0e538647": {
                    "width": "100%",
                    "zIndex": 1
                },
                "CopyLabelsField0b4e73a0e538647.lblDetail": {
                    "text": "SUSPEND STATUS"
                },
                "CopyLabelsField0b4e73a0e538647.lblDetailValue": {
                    "text": "Active"
                },
                "SubHdr1": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr1.lblSubHdr": {
                    "text": "EMPLYOPEE DETAILS"
                },
                "SrchTextBox": {
                    "height": "12%",
                    "top": "8dp",
                    "width": "500px"
                },
                "SrchTextBox.imgSrch": {
                    "src": "icon_srch.png"
                },
                "SuspenEntryHdr": {
                    "top": "8dp"
                },
                "SuspenEntryHdr.lblReason": {
                    "text": "Comments"
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
            "appName": "ManageScheme",
            "info": {
                "kuid": "ff34aa6a1c9840d8aa95981779e0e263"
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