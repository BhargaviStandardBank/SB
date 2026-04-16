define("Customer360/frmCustomer", function() {
    return function(controller) {
        function addWidgetsfrmCustomer() {
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
                "appName": "Customer360"
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
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
                "width": "15%",
                "zIndex": 1,
                "appName": "Customer360"
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
            var flxRight = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "focusSkin": "sknFlxSrcTrans",
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "85%",
                "zIndex": 1
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
                        "text": "Customer Profile"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSrc = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSrc",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrc.setDefaultUnit(voltmx.flex.DP);
            var flxCustomerDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCustomerDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCustomerDetails.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "Customer Information"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxCustomerInfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxCustomerInfo",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            flxCustomerInfo.setDefaultUnit(voltmx.flex.DP);
            var flxProfileType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxProfileType",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxProfileType.setDefaultUnit(voltmx.flex.DP);
            var lblProfileType = new voltmx.ui.Label({
                "id": "lblProfileType",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Profile Type",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rdoProfileType = new voltmx.ui.RadioButtonGroup({
                "id": "rdoProfileType",
                "isVisible": true,
                "masterData": [
                    ["App", "Application"],
                    ["CBO", "Cash backed only"],
                    ["Col", "Collateral"]
                ],
                "selectedKey": "App",
                "skin": "slRadioButtonGroup",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProfileType.add(lblProfileType, rdoProfileType);
            var flxCIFNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCIFNumber",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
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
                        "text": "CIF Number"
                    },
                    "lblDetailValue": {
                        "height": "40dp",
                        "text": "0234567891",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCIFNumber.add(CIFNumber);
            var flxEntityName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEntityName",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxEntityName.setDefaultUnit(voltmx.flex.DP);
            var EntityName = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EntityName",
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Entity Name"
                    },
                    "txtBox": {
                        "text": "80/20 MARKETING LIMITED",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEntityName.add(EntityName);
            var flxEntiryRegNum = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEntiryRegNum",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxEntiryRegNum.setDefaultUnit(voltmx.flex.DP);
            var EntityRegNum = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EntityRegNum",
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Entity Registration Number/NIF"
                    },
                    "txtBox": {
                        "text": "80/20 MARKETING LIMITED",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEntiryRegNum.add(EntityRegNum);
            var flxEntityType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEntityType",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxEntityType.setDefaultUnit(voltmx.flex.DP);
            var EntityType = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EntityType",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Entity Type"
                    },
                    "listData": {
                        "masterData": [
                            ["CC", "Close Corporation"],
                            ["C", "Company"],
                            ["T", "Trust"],
                            ["P", "Partnership"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEntityType.add(EntityType);
            var flxIdentityNum = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxIdentityNum",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxIdentityNum.setDefaultUnit(voltmx.flex.DP);
            var IdentityNumber = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "IdentityNumber",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Identity Number"
                    },
                    "listData": {
                        "masterData": [
                            ["None", "None"],
                            ["FCN", "Financial Card Number"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxIdentityNum.add(IdentityNumber);
            var flxFullLegalName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxFullLegalName",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxFullLegalName.setDefaultUnit(voltmx.flex.DP);
            var FullLegalName = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "FullLegalName",
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Full Legal Name"
                    },
                    "txtBox": {
                        "text": "80/20 MARKETING LIMITED",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFullLegalName.add(FullLegalName);
            var flxRegolatorySector = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRegolatorySector",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRegolatorySector.setDefaultUnit(voltmx.flex.DP);
            var RegulatorySector = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RegulatorySector",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Identity Number"
                    },
                    "listData": {
                        "masterData": [
                            ["None", "None"],
                            ["FCN", "Financial Card Number"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRegolatorySector.add(RegulatorySector);
            var flxISICCode = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxISICCode",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxISICCode.setDefaultUnit(voltmx.flex.DP);
            var ISICCode = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ISICCode",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "ISIC Code"
                    },
                    "listData": {
                        "masterData": [
                            ["None", "None"],
                            ["M73", "Advertising and Marketing"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxISICCode.add(ISICCode);
            var flxMarketSegment = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMarketSegment",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxMarketSegment.setDefaultUnit(voltmx.flex.DP);
            var MarketSegment = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MarketSegment",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Market Segment"
                    },
                    "listData": {
                        "masterData": [
                            ["None", "None"],
                            ["T", "Tier"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMarketSegment.add(MarketSegment);
            var flxOtherBankers = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxOtherBankers",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxOtherBankers.setDefaultUnit(voltmx.flex.DP);
            var OtherBankers = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "OtherBankers",
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Other Bankers"
                    },
                    "txtBox": {
                        "text": "80/20 MARKETING LIMITED",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxOtherBankers.add(OtherBankers);
            var flxRouteToHeadOff = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRouteToHeadOff",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 3
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRouteToHeadOff.setDefaultUnit(voltmx.flex.DP);
            var RouteToHeadOff = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RouteToHeadOff",
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
                        "text": "Route To Head Office"
                    },
                    "lblDetailValue": {
                        "height": "40dp",
                        "text": "No"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRouteToHeadOff.add(RouteToHeadOff);
            var flxBusinessTelNum = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBusinessTelNum",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBusinessTelNum.setDefaultUnit(voltmx.flex.DP);
            var BusinessTelNum = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BusinessTelNum",
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Business Tel Number"
                    },
                    "txtBox": {
                        "text": "0775449345",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBusinessTelNum.add(BusinessTelNum);
            var flxRegistrationDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRegistrationDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRegistrationDate.setDefaultUnit(voltmx.flex.DP);
            var lblRegDate = new voltmx.ui.Label({
                "id": "lblRegDate",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Registration Date",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var calCustInfo = new voltmx.ui.Calendar({
                "calendarIcon": "icon_cal.png",
                "dateComponents": [9, 9, 2015],
                "dateFormat": "dd/MM/yyyy",
                "day": 9,
                "formattedDate": "09/09/2015",
                "height": "40dp",
                "hour": 0,
                "id": "calCustInfo",
                "isVisible": true,
                "left": "0dp",
                "minutes": 0,
                "month": 9,
                "seconds": 0,
                "skin": "sknSBCalender",
                "top": "5dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2015,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "noOfMonths": 1
            });
            flxRegistrationDate.add(lblRegDate, calCustInfo);
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Email Address"
                    },
                    "txtBox": {
                        "text": "info@8020marketingug.co",
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
            var flxFax = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxFax",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxFax.setDefaultUnit(voltmx.flex.DP);
            var Fax = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Fax",
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
                    "LabelTextBox": {
                        "width": "100%"
                    },
                    "lblText": {
                        "text": "Fax"
                    },
                    "txtBox": {
                        "placeholder": "Fax",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFax.add(Fax);
            var flxApplicantName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxApplicantName",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxApplicantName.setDefaultUnit(voltmx.flex.DP);
            var ApplicantsName = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ApplicantsName",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Applicant Name"
                    },
                    "listData": {
                        "masterData": [
                            ["None", "None"],
                            ["CM6990834", "Abrham, Basir"],
                            ["GN79827459", "ABINDAB,GODFREY"],
                            ["DR87874923", "ValueAbrham, Basir1"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxApplicantName.add(ApplicantsName);
            var flxIDNum = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxIDNum",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 3
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxIDNum.setDefaultUnit(voltmx.flex.DP);
            var IDNum = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "IDNum",
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
                        "text": "Route To Head Office"
                    },
                    "lblDetailValue": {
                        "height": "40dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxIDNum.add(IDNum);
            var flxAddress = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAddress",
                "isVisible": false,
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
                        "640": 6,
                        "1024": 4,
                        "1366": 12
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddress.setDefaultUnit(voltmx.flex.DP);
            var btnAddress = new voltmx.ui.Button({
                "height": "40dp",
                "id": "btnAddress",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnBGTransBlue",
                "text": "Address",
                "top": 0,
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxAddress.add(btnAddress);
            flxCustomerInfo.add(flxProfileType, flxCIFNumber, flxEntityName, flxEntiryRegNum, flxEntityType, flxIdentityNum, flxFullLegalName, flxRegolatorySector, flxISICCode, flxMarketSegment, flxOtherBankers, flxRouteToHeadOff, flxBusinessTelNum, flxRegistrationDate, flxEmailAddress, flxFax, flxApplicantName, flxIDNum, flxAddress);
            flxCustomerDetails.add(SubHdr, flxCustomerInfo);
            var flxTabs = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxTabs",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxTabs.setDefaultUnit(voltmx.flex.DP);
            var flxInternalExpo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxInternalExpo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0",
                "width": "10%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInternalExpo.setDefaultUnit(voltmx.flex.DP);
            var lblIntrnalExpo = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblIntrnalExpo",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblHeading4Bold",
                "text": "Internal Exposure",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxInternalLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "5dp",
                "id": "flxInternalLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlue",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInternalLine.setDefaultUnit(voltmx.flex.DP);
            flxInternalLine.add();
            flxInternalExpo.add(lblIntrnalExpo, flxInternalLine);
            var flxFixedAssets = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxFixedAssets",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0",
                "width": "8%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxFixedAssets.setDefaultUnit(voltmx.flex.DP);
            var lblFixedAssets = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblFixedAssets",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblHeading4Bold",
                "text": "Fixed Assets",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFixedLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "5dp",
                "id": "flxFixedLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlue",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxFixedLine.setDefaultUnit(voltmx.flex.DP);
            flxFixedLine.add();
            flxFixedAssets.add(lblFixedAssets, flxFixedLine);
            var flxCollateral = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxCollateral",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0",
                "width": "6%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCollateral.setDefaultUnit(voltmx.flex.DP);
            var lblCollateral = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCollateral",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblHeading4Bold",
                "text": "Collateral",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCollateralLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "5dp",
                "id": "flxCollateralLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlue",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCollateralLine.setDefaultUnit(voltmx.flex.DP);
            flxCollateralLine.add();
            flxCollateral.add(lblCollateral, flxCollateralLine);
            var flxInsuranceAss = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxInsuranceAss",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0",
                "width": "13%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInsuranceAss.setDefaultUnit(voltmx.flex.DP);
            var lblInsuranceAss = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblInsuranceAss",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblHeading4Bold",
                "text": "Insurance / Assurance",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxInsuranceLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "5dp",
                "id": "flxInsuranceLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlue",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInsuranceLine.setDefaultUnit(voltmx.flex.DP);
            flxInsuranceLine.add();
            flxInsuranceAss.add(lblInsuranceAss, flxInsuranceLine);
            var flxOperationalInfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxOperationalInfo",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0",
                "width": "13.30%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxOperationalInfo.setDefaultUnit(voltmx.flex.DP);
            var lblOperationalInfo = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOperationalInfo",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblHeading4Bold",
                "text": "Operational Information",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOpInfoLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "5dp",
                "id": "flxOpInfoLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlue",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxOpInfoLine.setDefaultUnit(voltmx.flex.DP);
            flxOpInfoLine.add();
            flxOperationalInfo.add(lblOperationalInfo, flxOpInfoLine);
            var flxRiskRating = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxRiskRating",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0",
                "width": "7%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskRating.setDefaultUnit(voltmx.flex.DP);
            var lblRiskRating = new voltmx.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRiskRating",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknLblHeading4Bold",
                "text": "Risk Rating",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRiskRatingLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "5dp",
                "id": "flxRiskRatingLine",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlue",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskRatingLine.setDefaultUnit(voltmx.flex.DP);
            flxRiskRatingLine.add();
            flxRiskRating.add(lblRiskRating, flxRiskRatingLine);
            flxTabs.add(flxInternalExpo, flxFixedAssets, flxCollateral, flxInsuranceAss, flxOperationalInfo, flxRiskRating);
            var flxSegData = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSegData",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_HORIZONTAL,
                "skin": "sknFlxSrcWhiteBGBlckBrdr",
                "top": "16dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxSegData.setDefaultUnit(voltmx.flex.DP);
            var flxSegHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSegHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "0dp",
                "width": "1600dp",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegHdr.setDefaultUnit(voltmx.flex.DP);
            var lblAcctTypeHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblAcctTypeHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Account Type",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAcctNoHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblAcctNoHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Account No",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBRIHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblBRIHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "BRI",
                "width": "2%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOutStandingBalHDr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOutStandingBalHDr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInstallHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblInstallHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Installement",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblArrearsHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblArrearsHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Arrears Excess",
                "width": "7%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAmountHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblAmountHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Amount Due",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLoanAmtHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblLoanAmtHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Original Loan Amount",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOriginalLmtHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOriginalLmtHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Original Limit",
                "width": "5.40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCorrentLmtHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblCorrentLmtHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Current Limit",
                "width": "5.40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInterestHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblInterestHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Interest Rate",
                "width": "3%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOrignateHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOrignateHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Origination Date",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOrignalTermHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblOrignalTermHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Original Term",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRemainingTermHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRemainingTermHdr",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblFormLevel",
                "text": "Remaining Term",
                "width": "5%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegHdr.add(lblAcctTypeHdr, lblAcctNoHdr, lblBRIHdr, lblOutStandingBalHDr, lblInstallHdr, lblArrearsHdr, lblAmountHdr, lblLoanAmtHdr, lblOriginalLmtHdr, lblCorrentLmtHdr, lblInterestHdr, lblOrignateHdr, lblOrignalTermHdr, lblRemainingTermHdr);
            var flxSeg = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxSeg",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "1600dp",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxSeg.setDefaultUnit(voltmx.flex.DP);
            var segInternalExposure = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }, {
                    "lblAccNo": "Label",
                    "lblAcctType": "Label",
                    "lblAmountDue": "Label",
                    "lblArrearsExcess": "Label",
                    "lblBRI": "Label",
                    "lblCurrentLimit": "Label",
                    "lblInstalment": "Label",
                    "lblInterestRate": "Label",
                    "lblOrgLimit": "label",
                    "lblOrgLoanAmt": "Label",
                    "lblOriginalTerm": "Label",
                    "lblOriginationDate": "Label",
                    "lblOutstandingBal": "Label",
                    "lblRemTerm": "Label"
                }],
                "groupCells": false,
                "id": "segInternalExposure",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": kony.mvc.resolveNameFromContext({
                    "appName": "SBCommon",
                    "friendlyName": "flxRow"
                }),
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRow": "flxRow",
                    "lblAccNo": "lblAccNo",
                    "lblAcctType": "lblAcctType",
                    "lblAmountDue": "lblAmountDue",
                    "lblArrearsExcess": "lblArrearsExcess",
                    "lblBRI": "lblBRI",
                    "lblCurrentLimit": "lblCurrentLimit",
                    "lblInstalment": "lblInstalment",
                    "lblInterestRate": "lblInterestRate",
                    "lblOrgLimit": "lblOrgLimit",
                    "lblOrgLoanAmt": "lblOrgLoanAmt",
                    "lblOriginalTerm": "lblOriginalTerm",
                    "lblOriginationDate": "lblOriginationDate",
                    "lblOutstandingBal": "lblOutstandingBal",
                    "lblRemTerm": "lblRemTerm"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSeg.add(segInternalExposure);
            flxSegData.add(flxSegHdr, flxSeg);
            var flxChart = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "400dp",
                "id": "flxChart",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "34dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxChart.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "Chart"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var linechart = new com.konymp.linechart({
                "height": "100%",
                "id": "linechart",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "Customer360",
                "viewType": "linechart",
                "overrides": {
                    "linechart": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            linechart.chartTitle = "Line Chart";
            linechart.chartData = {
                "data": [{
                    "dataVal": "9",
                    "lblName": "data1"
                }, {
                    "dataVal": "2",
                    "lblName": "data2"
                }, {
                    "dataVal": "5",
                    "lblName": "data3"
                }, {
                    "dataVal": "12",
                    "lblName": "data4"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label Name",
                    "columnHeaderType": "text",
                    "columnID": "lblName",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f1a80a1c509a45d0ad84b3097d1e8cb7"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value",
                    "columnHeaderType": "text",
                    "columnID": "dataVal",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "c4dc7111a5f24c0da4cf8236ddad5233"
                }]
            };
            linechart.enableGrid = true;
            linechart.xAxisTitle = "x-axis";
            linechart.yAxisTitle = "y-axis";
            linechart.lowValue = "0";
            linechart.titleFontColor = "#000000";
            linechart.enableGridAnimation = true;
            linechart.titleFontSize = "12";
            linechart.highValue = "40";
            linechart.lineColor = "#1B9ED9";
            linechart.bgColor = "#FFFFFF";
            linechart.enableChartAnimation = true;
            linechart.enableStaticPreview = true;
            flxChart.add(SubHdr1, linechart);
            var flxCollaInfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "16dp",
                "clipBounds": false,
                "id": "flxCollaInfo",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCollaInfo.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0d30e5986678c4a = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "FlexContainer0d30e5986678c4a",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0d30e5986678c4a.setDefaultUnit(voltmx.flex.DP);
            var flxCollData1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxCollData1",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "48%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            flxCollData1.setDefaultUnit(voltmx.flex.DP);
            var flxCollType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCollType",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCollType.setDefaultUnit(voltmx.flex.DP);
            var CollateralType = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CollateralType",
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
                        "text": "Collateral Type / Value"
                    },
                    "lblDetailValue": {
                        "text": "Surityship Partial Liability",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCollType.add(CollateralType);
            var flxLinkedAcct = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxLinkedAcct",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxLinkedAcct.setDefaultUnit(voltmx.flex.DP);
            var LinkeAcct = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "LinkeAcct",
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
                        "text": "Linked Account"
                    },
                    "lblDetailValue": {
                        "text": "0234567891"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxLinkedAcct.add(LinkeAcct);
            var flxSurrenderValue = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSurrenderValue",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxSurrenderValue.setDefaultUnit(voltmx.flex.DP);
            var SurrenderValue = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SurrenderValue",
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
                        "text": "Surrender Value"
                    },
                    "lblDetailValue": {
                        "text": "R 35K"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSurrenderValue.add(SurrenderValue);
            flxCollData1.add(flxCollType, flxLinkedAcct, flxSurrenderValue);
            var CopyflxCollData0da6eebb917a84b = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0da6eebb917a84b",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "4%",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "48%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0da6eebb917a84b.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0d72fb571a91e46 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0d72fb571a91e46",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0d72fb571a91e46.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0c0da5ba4346d44 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0c0da5ba4346d44",
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
                        "text": "Collateral Type / Value"
                    },
                    "lblDetailValue": {
                        "text": "Surityship Partial Liability",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0d72fb571a91e46.add(CopyCollateralType0c0da5ba4346d44);
            var CopyflxLinkedAcct0fb20329bf6b446 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0fb20329bf6b446",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0fb20329bf6b446.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0df9fdc6fb25146 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0df9fdc6fb25146",
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
                        "text": "Linked Account"
                    },
                    "lblDetailValue": {
                        "text": "0234567891"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0fb20329bf6b446.add(CopyLinkeAcct0df9fdc6fb25146);
            var CopyflxSurrenderValue0i16848fc57c847 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0i16848fc57c847",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0i16848fc57c847.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0ebf0965aa25740 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0ebf0965aa25740",
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
                        "text": "Surrender Value"
                    },
                    "lblDetailValue": {
                        "text": "R 35K"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0i16848fc57c847.add(CopySurrenderValue0ebf0965aa25740);
            CopyflxCollData0da6eebb917a84b.add(CopyflxCollType0d72fb571a91e46, CopyflxLinkedAcct0fb20329bf6b446, CopyflxSurrenderValue0i16848fc57c847);
            FlexContainer0d30e5986678c4a.add(flxCollData1, CopyflxCollData0da6eebb917a84b);
            var CopyflxCollData0aa9289046da44e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0aa9289046da44e",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0aa9289046da44e.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0b80cfa2e6dc240 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0b80cfa2e6dc240",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0b80cfa2e6dc240.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0dbd8532d739946 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0dbd8532d739946",
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
                        "text": "Collateral Type / Value"
                    },
                    "lblDetailValue": {
                        "text": "Surityship Partial Liability",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0b80cfa2e6dc240.add(CopyCollateralType0dbd8532d739946);
            var CopyflxLinkedAcct0fbd34e3b35554d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0fbd34e3b35554d",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0fbd34e3b35554d.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0c9ef530a37af4f = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0c9ef530a37af4f",
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
                        "text": "Linked Account"
                    },
                    "lblDetailValue": {
                        "text": "0234567891"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0fbd34e3b35554d.add(CopyLinkeAcct0c9ef530a37af4f);
            var CopyflxSurrenderValue0j2b11a7c74bf45 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0j2b11a7c74bf45",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0j2b11a7c74bf45.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0c62d8b967ddd43 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0c62d8b967ddd43",
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
                        "text": "Surrender Value"
                    },
                    "lblDetailValue": {
                        "text": "R 35K"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0j2b11a7c74bf45.add(CopySurrenderValue0c62d8b967ddd43);
            CopyflxCollData0aa9289046da44e.add(CopyflxCollType0b80cfa2e6dc240, CopyflxLinkedAcct0fbd34e3b35554d, CopyflxSurrenderValue0j2b11a7c74bf45);
            var CopyflxCollData0d8ceceea052c48 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0d8ceceea052c48",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0d8ceceea052c48.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0bfa00fe0d9724c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0bfa00fe0d9724c",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0bfa00fe0d9724c.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0eca11d9ecebf4c = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0eca11d9ecebf4c",
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
                        "text": "Collateral Type / Value"
                    },
                    "lblDetailValue": {
                        "text": "Surityship Partial Liability",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0bfa00fe0d9724c.add(CopyCollateralType0eca11d9ecebf4c);
            var CopyflxLinkedAcct0dd9257b658d740 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0dd9257b658d740",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0dd9257b658d740.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0cd84883d7da848 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0cd84883d7da848",
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
                        "text": "Linked Account"
                    },
                    "lblDetailValue": {
                        "text": "0234567891"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0dd9257b658d740.add(CopyLinkeAcct0cd84883d7da848);
            var CopyflxSurrenderValue0g81b3453b2bd47 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0g81b3453b2bd47",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0g81b3453b2bd47.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0hc8da927997147 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0hc8da927997147",
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
                        "text": "Surrender Value"
                    },
                    "lblDetailValue": {
                        "text": "R 35K"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0g81b3453b2bd47.add(CopySurrenderValue0hc8da927997147);
            CopyflxCollData0d8ceceea052c48.add(CopyflxCollType0bfa00fe0d9724c, CopyflxLinkedAcct0dd9257b658d740, CopyflxSurrenderValue0g81b3453b2bd47);
            var CopyflxCollData0bc73e50e178c42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0bc73e50e178c42",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0bc73e50e178c42.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0dbc6dd0c5c5345 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0dbc6dd0c5c5345",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0dbc6dd0c5c5345.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0bbfffbf96c9042 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0bbfffbf96c9042",
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
                        "text": "Collateral Type / Value"
                    },
                    "lblDetailValue": {
                        "text": "Surityship Partial Liability",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0dbc6dd0c5c5345.add(CopyCollateralType0bbfffbf96c9042);
            var CopyflxLinkedAcct0id46d1885b2840 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0id46d1885b2840",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0id46d1885b2840.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0jea18c9afb8d49 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0jea18c9afb8d49",
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
                        "text": "Linked Account"
                    },
                    "lblDetailValue": {
                        "text": "0234567891"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0id46d1885b2840.add(CopyLinkeAcct0jea18c9afb8d49);
            var CopyflxSurrenderValue0ac30c44a072449 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0ac30c44a072449",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0ac30c44a072449.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0bb7e4d15b41d47 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0bb7e4d15b41d47",
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
                        "text": "Surrender Value"
                    },
                    "lblDetailValue": {
                        "text": "R 35K"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0ac30c44a072449.add(CopySurrenderValue0bb7e4d15b41d47);
            CopyflxCollData0bc73e50e178c42.add(CopyflxCollType0dbc6dd0c5c5345, CopyflxLinkedAcct0id46d1885b2840, CopyflxSurrenderValue0ac30c44a072449);
            flxCollaInfo.add(FlexContainer0d30e5986678c4a, CopyflxCollData0aa9289046da44e, CopyflxCollData0d8ceceea052c48, CopyflxCollData0bc73e50e178c42);
            var flxInsuranceInfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInsuranceInfo",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInsuranceInfo.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollData0d8cfd7e598b043 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0d8cfd7e598b043",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0d8cfd7e598b043.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0e8cce0e160e84d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0e8cce0e160e84d",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0e8cce0e160e84d.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0f124115cfe6e4f = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0f124115cfe6e4f",
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
                        "isVisible": false,
                        "text": "SBIB"
                    },
                    "lblDetailValue": {
                        "text": "SBIB",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0e8cce0e160e84d.add(CopyCollateralType0f124115cfe6e4f);
            var CopyflxLinkedAcct0f4b0a06c59544d = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0f4b0a06c59544d",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0f4b0a06c59544d.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0cc93bd5adfef4c = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0cc93bd5adfef4c",
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
                        "text": "57687234812934"
                    },
                    "lblDetailValue": {
                        "text": "DisabilityCover"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0f4b0a06c59544d.add(CopyLinkeAcct0cc93bd5adfef4c);
            var CopyflxSurrenderValue0ca79a61bddd743 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0ca79a61bddd743",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0ca79a61bddd743.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0afc66f421bb44a = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0afc66f421bb44a",
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
                        "text": "Monthly Premium"
                    },
                    "lblDetailValue": {
                        "text": "R 350"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0ca79a61bddd743.add(CopySurrenderValue0afc66f421bb44a);
            CopyflxCollData0d8cfd7e598b043.add(CopyflxCollType0e8cce0e160e84d, CopyflxLinkedAcct0f4b0a06c59544d, CopyflxSurrenderValue0ca79a61bddd743);
            var CopyflxCollData0ffa1aa8d2e7e45 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0ffa1aa8d2e7e45",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0ffa1aa8d2e7e45.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0d37fc1b9559141 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0d37fc1b9559141",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0d37fc1b9559141.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0cd6f3a4995b943 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0cd6f3a4995b943",
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
                        "isVisible": false,
                        "text": "SBIB"
                    },
                    "lblDetailValue": {
                        "text": "Old Mutual",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0d37fc1b9559141.add(CopyCollateralType0cd6f3a4995b943);
            var CopyflxLinkedAcct0j0a2d71e22294f = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0j0a2d71e22294f",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0j0a2d71e22294f.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0da2e01e5fe6b4c = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0da2e01e5fe6b4c",
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
                        "text": "57687234812934"
                    },
                    "lblDetailValue": {
                        "text": "DisabilityCover"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0j0a2d71e22294f.add(CopyLinkeAcct0da2e01e5fe6b4c);
            var CopyflxSurrenderValue0d16b6400677d44 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0d16b6400677d44",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0d16b6400677d44.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0bd3f3f677bd442 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0bd3f3f677bd442",
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
                        "text": "Monthly Premium"
                    },
                    "lblDetailValue": {
                        "text": "R 350"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0d16b6400677d44.add(CopySurrenderValue0bd3f3f677bd442);
            CopyflxCollData0ffa1aa8d2e7e45.add(CopyflxCollType0d37fc1b9559141, CopyflxLinkedAcct0j0a2d71e22294f, CopyflxSurrenderValue0d16b6400677d44);
            var CopyflxCollData0a6b9be56bad546 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "16dp",
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "CopyflxCollData0a6b9be56bad546",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            CopyflxCollData0a6b9be56bad546.setDefaultUnit(voltmx.flex.DP);
            var CopyflxCollType0cd16c86ee49b48 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxCollType0cd16c86ee49b48",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxCollType0cd16c86ee49b48.setDefaultUnit(voltmx.flex.DP);
            var CopyCollateralType0hc7ba7b34a0c4d = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyCollateralType0hc7ba7b34a0c4d",
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
                        "isVisible": false,
                        "text": "SBIB"
                    },
                    "lblDetailValue": {
                        "text": "SBIB",
                        "top": "5dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxCollType0cd16c86ee49b48.add(CopyCollateralType0hc7ba7b34a0c4d);
            var CopyflxLinkedAcct0bba69a7d139740 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxLinkedAcct0bba69a7d139740",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxLinkedAcct0bba69a7d139740.setDefaultUnit(voltmx.flex.DP);
            var CopyLinkeAcct0j9a21367001345 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyLinkeAcct0j9a21367001345",
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
                        "text": "57687234812934"
                    },
                    "lblDetailValue": {
                        "text": "DisabilityCover"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxLinkedAcct0bba69a7d139740.add(CopyLinkeAcct0j9a21367001345);
            var CopyflxSurrenderValue0a3a7abf2911044 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurrenderValue0a3a7abf2911044",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurrenderValue0a3a7abf2911044.setDefaultUnit(voltmx.flex.DP);
            var CopySurrenderValue0d20cf40857d744 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurrenderValue0d20cf40857d744",
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
                        "text": "Monthly Premium"
                    },
                    "lblDetailValue": {
                        "text": "R 350"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurrenderValue0a3a7abf2911044.add(CopySurrenderValue0d20cf40857d744);
            CopyflxCollData0a6b9be56bad546.add(CopyflxCollType0cd16c86ee49b48, CopyflxLinkedAcct0bba69a7d139740, CopyflxSurrenderValue0a3a7abf2911044);
            flxInsuranceInfo.add(CopyflxCollData0d8cfd7e598b043, CopyflxCollData0ffa1aa8d2e7e45, CopyflxCollData0a6b9be56bad546);
            var flxOpInfo = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "16dp",
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxOpInfo",
                "isVisible": false,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [12, 8, 12, 8],
                "paddingInPixel": true
            }, {});
            flxOpInfo.setDefaultUnit(voltmx.flex.DP);
            var flxOwnerShip = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxOwnerShip",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxOwnerShip.setDefaultUnit(voltmx.flex.DP);
            var OwnerShip = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "OwnerShip",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Ownership (Shareholders & % shareholding)"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "Anthea Paula Turwome 40% \nArnold Patrick Samson Turwomwe 60%\ncasdasd sdcsad\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxOwnerShip.add(OwnerShip);
            var flxWomenOwned = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxWomenOwned",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxWomenOwned.setDefaultUnit(voltmx.flex.DP);
            var lblWomenOwned = new voltmx.ui.Label({
                "id": "lblWomenOwned",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Women Owned",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyrdoProfileType0b03651aa0c6d40 = new voltmx.ui.RadioButtonGroup({
                "id": "CopyrdoProfileType0b03651aa0c6d40",
                "isVisible": true,
                "masterData": [
                    ["No", "No"],
                    ["Yes", "Yes"]
                ],
                "selectedKey": "No",
                "skin": "slRadioButtonGroup",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxWomenOwned.add(lblWomenOwned, CopyrdoProfileType0b03651aa0c6d40);
            var flxDescBussiness = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDescBussiness",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxDescBussiness.setDefaultUnit(voltmx.flex.DP);
            var DescriptionBusiness = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DescriptionBusiness",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Description Of Business "
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "Dealers in Marketing and supply of promotional materials and other general supplies\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDescBussiness.add(DescriptionBusiness);
            var flxManagement = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxManagement",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxManagement.setDefaultUnit(voltmx.flex.DP);
            var Management = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Management",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Management"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "Managment is composed of Benon Mascot with seventeen years of experience in business and banking professional\ncharged key Business decisions and sourcing finances.\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxManagement.add(Management);
            var flxNatureOfBuss = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxNatureOfBuss",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxNatureOfBuss.setDefaultUnit(voltmx.flex.DP);
            var NatureOfBussiness = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "NatureOfBussiness",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Nature Of Business"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "80/20 Marketing Ltd 80/20 Marketing Ltd for the past 6 years has been operating as a supplier for branded promotional items and also a service provider for PR Communications services with its clientele ranging from NGOs, Government and also the private sector. Today, the company has a partnership with leading South African distributor of Promotional Items called BARON and also has connections with suppliers of high quality items from China as well. The company is pre-qualified with companies like UDB, Bank of Africa, URA, ICEA, MTN Uganda, TOTALENERGIES, etc. They also look at targeting our existing clients who have repeatedly ordered from them which tells that they satisfied with their items & services and would place orders over & over again J"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxNatureOfBuss.add(NatureOfBussiness);
            var flxPrincipalProductRange = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxPrincipalProductRange",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxPrincipalProductRange.setDefaultUnit(voltmx.flex.DP);
            var PrincipalProductRange = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "PrincipalProductRange",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Principal Product Range"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "TE Branded Promotional Items (Apparel, Drinkware, Outdoor advertising material, Business Gifts) D Office Branding • Advertising • PR Communications • Digital Marketing Ltd J"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPrincipalProductRange.add(PrincipalProductRange);
            var flxPPMarketPlace = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxPPMarketPlace",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxPPMarketPlace.setDefaultUnit(voltmx.flex.DP);
            var PPMarketPlace = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "PPMarketPlace",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Position of Principal product in market place"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "The principal product of 80/20 Marketing Ltd is Branded Promotional Items. The client has positioned themselves as suppliers of high quality promotional items at affordable prices and this has enabled us serve and retain big brands like MT Uganda, TOTAL Energies, ICEA Insurance, AAR Insurance etc."
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPPMarketPlace.add(PPMarketPlace);
            var flxCapitalLabIntensity = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCapitalLabIntensity",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCapitalLabIntensity.setDefaultUnit(voltmx.flex.DP);
            var CapitalLabourIntensity = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CapitalLabourIntensity",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Capital Labour Intensity"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "80/20 Marketing Ltd runs a highly capital intensive operation and need massive amounts of capital expenditure to fulfill client's orders. Some clients order 1,000s of items with zero deposits meaning the budget is met by the company which has to wait 30-60 days to get payment. The Client employs labour but they usually come in to finished products so their main role is to do deliveries, sales and after sales\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCapitalLabIntensity.add(CapitalLabourIntensity);
            var flxDistribution = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDistribution",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxDistribution.setDefaultUnit(voltmx.flex.DP);
            var Distribution = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Distribution",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Distribution"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "80/20 Marketing receives its goods through Entebbe Airport by air freight for goods coming from South Africa and China and the East Africa Bond in Namanve for goods coming from China. The goods are kept in their store in Bwebaija on Entebbe road. Goods that are urgently needed by clients are normally moved from the bond, to our office premises for inspection and taken to client's stores.\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDistribution.add(Distribution);
            var flxGeographicLoc = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGeographicLoc",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxGeographicLoc.setDefaultUnit(voltmx.flex.DP);
            var GeographicLoc = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "GeographicLoc",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Geographic Location"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "80/20 Marketing is located at Plot 20, Bukoto Street - Kampala where it has had its premises for the past 6\nyears.\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGeographicLoc.add(GeographicLoc);
            var flxMainSuppCred = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMainSuppCred",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxMainSuppCred.setDefaultUnit(voltmx.flex.DP);
            var MainSuppCred = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MainSuppCred",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Main suppliers/creditors"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "BARRON South Africa\nAMROD South Africa\nMekea Import and\nExport Company Ltd Visible Investments\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMainSuppCred.add(MainSuppCred);
            var flxMainCustDeb = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMainCustDeb",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxMainCustDeb.setDefaultUnit(voltmx.flex.DP);
            var MainCustSupDeb = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MainCustSupDeb",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Main customers/debtors spread"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "MTN Uganda\nICEA Insurance\nAAR Insurance\nTotal Energies\nUganda Wildlife Authority\nWorld Health Organisation"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMainCustDeb.add(MainCustSupDeb);
            var CopyflxWomenOwned0f319c5389a644c = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxWomenOwned0f319c5389a644c",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxWomenOwned0f319c5389a644c.setDefaultUnit(voltmx.flex.DP);
            var CopylblWomenOwned0cac3484ab35744 = new voltmx.ui.Label({
                "id": "CopylblWomenOwned0cac3484ab35744",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Is the primary source of repayment derived from commercial property activities?",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyrdoProfileType0fb870aa1562842 = new voltmx.ui.RadioButtonGroup({
                "id": "CopyrdoProfileType0fb870aa1562842",
                "isVisible": true,
                "masterData": [
                    ["No", "No"],
                    ["Yes", "Yes"]
                ],
                "selectedKey": "No",
                "skin": "slRadioButtonGroup",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxWomenOwned0f319c5389a644c.add(CopylblWomenOwned0cac3484ab35744, CopyrdoProfileType0fb870aa1562842);
            var CopyflxWomenOwned0c6b1659c74eb49 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxWomenOwned0c6b1659c74eb49",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxWomenOwned0c6b1659c74eb49.setDefaultUnit(voltmx.flex.DP);
            var CopylblWomenOwned0ab46757db1d34a = new voltmx.ui.Label({
                "id": "CopylblWomenOwned0ab46757db1d34a",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Is the purpose of the loan to acquire or finance a commercial property?",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyrdoProfileType0g094fe2a68ba49 = new voltmx.ui.RadioButtonGroup({
                "id": "CopyrdoProfileType0g094fe2a68ba49",
                "isVisible": true,
                "masterData": [
                    ["No", "No"],
                    ["Yes", "Yes"]
                ],
                "selectedKey": "No",
                "skin": "slRadioButtonGroup",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxWomenOwned0c6b1659c74eb49.add(CopylblWomenOwned0ab46757db1d34a, CopyrdoProfileType0g094fe2a68ba49);
            var CopyflxWomenOwned0dbf73110e7fe45 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxWomenOwned0dbf73110e7fe45",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxWomenOwned0dbf73110e7fe45.setDefaultUnit(voltmx.flex.DP);
            var CopylblWomenOwned0dc6bdd209d7547 = new voltmx.ui.Label({
                "id": "CopylblWomenOwned0dc6bdd209d7547",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Is the cash flow generated by the property (e.g. rent or sale of property), the main source of loan repayment?",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyrdoProfileType0gf58975701f54e = new voltmx.ui.RadioButtonGroup({
                "id": "CopyrdoProfileType0gf58975701f54e",
                "isVisible": true,
                "masterData": [
                    ["No", "No"],
                    ["Yes", "Yes"]
                ],
                "selectedKey": "No",
                "skin": "slRadioButtonGroup",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxWomenOwned0dbf73110e7fe45.add(CopylblWomenOwned0dc6bdd209d7547, CopyrdoProfileType0gf58975701f54e);
            var flxLastSiteVisit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxLastSiteVisit",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 3,
                        "1366": 3
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxLastSiteVisit.setDefaultUnit(voltmx.flex.DP);
            var LastVisitSite = new voltmx.ui.Label({
                "id": "LastVisitSite",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Date of last site visit",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var calLastVisitSite = new voltmx.ui.Calendar({
                "calendarIcon": "icon_cal.png",
                "dateComponents": [9, 9, 2015],
                "dateFormat": "dd/MM/yyyy",
                "day": 9,
                "formattedDate": "09/09/2015",
                "height": "40dp",
                "hour": 0,
                "id": "calLastVisitSite",
                "isVisible": true,
                "left": "0dp",
                "minutes": 0,
                "month": 9,
                "seconds": 0,
                "skin": "sknSBCalender",
                "top": "5dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2015,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "noOfMonths": 1
            });
            flxLastSiteVisit.add(LastVisitSite, calLastVisitSite);
            var flxLastDept = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxLastDept",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 3,
                        "1366": 3
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxLastDept.setDefaultUnit(voltmx.flex.DP);
            var LastDept = new voltmx.ui.Label({
                "id": "LastDept",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Date of last deposit",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var calLastDept = new voltmx.ui.Calendar({
                "calendarIcon": "icon_cal.png",
                "dateComponents": [9, 9, 2015],
                "dateFormat": "dd/MM/yyyy",
                "day": 9,
                "formattedDate": "09/09/2015",
                "height": "40dp",
                "hour": 0,
                "id": "calLastDept",
                "isVisible": true,
                "left": "0dp",
                "minutes": 0,
                "month": 9,
                "seconds": 0,
                "skin": "sknSBCalender",
                "top": "5dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2015,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "noOfMonths": 1
            });
            flxLastDept.add(LastDept, calLastDept);
            var flxDirExec = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDirExec",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxDirExec.setDefaultUnit(voltmx.flex.DP);
            var DirExec = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DirExec",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Directors - Executive"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "Benon Mascot\nAnthea Turwomwe\nArnold Turwomwe\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDirExec.add(DirExec);
            var flxSBGAssoc = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSBGAssoc",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 3,
                        "1366": 3
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxSBGAssoc.setDefaultUnit(voltmx.flex.DP);
            var SBGAssociate = new voltmx.ui.Label({
                "id": "SBGAssociate",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Banked with SBG since",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var calSBGAssoc = new voltmx.ui.Calendar({
                "calendarIcon": "icon_cal.png",
                "dateComponents": [9, 9, 2015],
                "dateFormat": "dd/MM/yyyy",
                "day": 9,
                "formattedDate": "09/09/2015",
                "height": "40dp",
                "hour": 0,
                "id": "calSBGAssoc",
                "isVisible": true,
                "left": "0dp",
                "minutes": 0,
                "month": 9,
                "seconds": 0,
                "skin": "sknSBCalender",
                "top": "5dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2015,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "noOfMonths": 1
            });
            flxSBGAssoc.add(SBGAssociate, calSBGAssoc);
            var flxFinancialYrEnd = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxFinancialYrEnd",
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
                        "1024": 3,
                        "1366": 3
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxFinancialYrEnd.setDefaultUnit(voltmx.flex.DP);
            var FinancialYrEnd = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "FinancialYrEnd",
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
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Financial Year End"
                    },
                    "listData": {
                        "masterData": [
                            ["6", "June"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFinancialYrEnd.add(FinancialYrEnd);
            var flxDirNonExec = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDirNonExec",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxDirNonExec.setDefaultUnit(voltmx.flex.DP);
            var NonExecutive = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "NonExecutive",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Directors - Non-executive"
                    },
                    "txtArea": {
                        "height": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDirNonExec.add(NonExecutive);
            var flxCompetitors = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCompetitors",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompetitors.setDefaultUnit(voltmx.flex.DP);
            var Competitors = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Competitors",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Competitors"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "Rocket Products Ltd\nJude Colour Solutions\nClear Media"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCompetitors.add(Competitors);
            var flxAuditor = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAuditor",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuditor.setDefaultUnit(voltmx.flex.DP);
            var Auditor = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Auditor",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Auditor"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "PANRANK & Company Plot 40 Bombo Road, Kampala"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxAuditor.add(Auditor);
            var flxAcctHis = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAcctHis",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxAcctHis.setDefaultUnit(voltmx.flex.DP);
            var AccHistory = new com.hcl.lblTextArea.LabelTextArea({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "AccHistory",
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
                    "FlexContainer0e91e04f1e8e74a": {
                        "top": "5dp"
                    },
                    "lblText": {
                        "text": "Account History"
                    },
                    "txtArea": {
                        "height": "100%",
                        "text": "Customer opened an account 9030019723797 on the 21/12/2021 domiciled at Forest Mall branch\n"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxAcctHis.add(AccHistory);
            flxOpInfo.add(flxOwnerShip, flxWomenOwned, flxDescBussiness, flxManagement, flxNatureOfBuss, flxPrincipalProductRange, flxPPMarketPlace, flxCapitalLabIntensity, flxDistribution, flxGeographicLoc, flxMainSuppCred, flxMainCustDeb, CopyflxWomenOwned0f319c5389a644c, CopyflxWomenOwned0c6b1659c74eb49, CopyflxWomenOwned0dbf73110e7fe45, flxLastSiteVisit, flxLastDept, flxDirExec, flxSBGAssoc, flxFinancialYrEnd, flxDirNonExec, flxCompetitors, flxAuditor, flxAcctHis);
            var flxRiskTypes = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRiskTypes",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskTypes.setDefaultUnit(voltmx.flex.DP);
            var btnRisk1 = new voltmx.ui.Button({
                "height": "40dp",
                "id": "btnRisk1",
                "isVisible": true,
                "skin": "sknBtnLeftHighLite",
                "text": "CRI",
                "width": "115dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnRisk2 = new voltmx.ui.Button({
                "height": "40dp",
                "id": "btnRisk2",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtnRightUnSelect",
                "text": "BBRS",
                "top": "0",
                "width": "115dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRiskTypes.add(btnRisk1, btnRisk2);
            var flxRiskInsight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "16dp",
                "clipBounds": false,
                "id": "flxRiskInsight",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "100%",
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskInsight.setDefaultUnit(voltmx.flex.DP);
            var flxRiskRate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "16dp",
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "300dp",
                "id": "flxRiskRate",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskRate.setDefaultUnit(voltmx.flex.DP);
            var lblHdrRiskType = new voltmx.ui.Label({
                "id": "lblHdrRiskType",
                "isVisible": true,
                "left": "24dp",
                "skin": "sknLblHeading4Bold",
                "text": "Risk Rating - CRI",
                "top": "17dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var RiskRateChart = new com.riskrating.chart.RiskRateChart({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "250dp",
                "id": "RiskRateChart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "48dp",
                "width": "50%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "FlexGroup0f364368a6aa841": {
                        "height": "85%"
                    },
                    "RiskRateChart": {
                        "height": "250dp",
                        "top": "48dp",
                        "width": "50%"
                    },
                    "flxPin": {
                        "centerY": "92%"
                    },
                    "imgChart": {
                        "height": "100%",
                        "src": "icon_rating.png"
                    },
                    "imgPin": {
                        "bottom": "5dp",
                        "src": "icon_pin.png"
                    },
                    "lblHigh": {
                        "centerY": "22%"
                    },
                    "lblLow": {
                        "centerX": "82%",
                        "centerY": "77%"
                    },
                    "lblMedium": {
                        "centerX": "70%",
                        "centerY": "36%"
                    },
                    "lblSubStandard": {
                        "centerX": "18%",
                        "centerY": "74%"
                    },
                    "lblVeryHigh": {
                        "centerX": "30%",
                        "centerY": "36%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxRiskFields = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxRiskFields",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTrans",
                "top": "69dp",
                "width": "50%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [12, 1, 12, 12],
                "paddingInPixel": true
            }, {});
            flxRiskFields.setDefaultUnit(voltmx.flex.DP);
            var flxPD = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxPD",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxPD.setDefaultUnit(voltmx.flex.DP);
            var ProbabilityDefault = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ProbabilityDefault",
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
                        "text": "Probability Of Default"
                    },
                    "lblDetailValue": {
                        "text": "12"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPD.add(ProbabilityDefault);
            var flxReason1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxReason1",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxReason1.setDefaultUnit(voltmx.flex.DP);
            var Reason1 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Reason1",
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
                        "text": "Reason1"
                    },
                    "lblDetailValue": {
                        "text": "reason1"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxReason1.add(Reason1);
            var flxReason2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxReason2",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxReason2.setDefaultUnit(voltmx.flex.DP);
            var Reason2 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Reason2",
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
                        "text": "Reason2"
                    },
                    "lblDetailValue": {
                        "text": "reason2"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxReason2.add(Reason2);
            var flxReason3 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxReason3",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxReason3.setDefaultUnit(voltmx.flex.DP);
            var Reason3 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Reason3",
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
                        "text": "Reason3"
                    },
                    "lblDetailValue": {
                        "text": "reason3"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxReason3.add(Reason3);
            var flxRatingScore = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRatingScore",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRatingScore.setDefaultUnit(voltmx.flex.DP);
            var RiskScoreGrade = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RiskScoreGrade",
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
                        "text": "Rating Score"
                    },
                    "lblDetailValue": {
                        "text": "12"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRatingScore.add(RiskScoreGrade);
            var flxHide = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxHide",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxHide.setDefaultUnit(voltmx.flex.DP);
            var CopyProbabilityDefault0a7a45985d3a143 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyProbabilityDefault0a7a45985d3a143",
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
            flxHide.add(CopyProbabilityDefault0a7a45985d3a143);
            var flxRiskScoreLCY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRiskScoreLCY",
                "isVisible": false,
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskScoreLCY.setDefaultUnit(voltmx.flex.DP);
            var CopyRiskScoreGrade0eb3d7cc239f542 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyRiskScoreGrade0eb3d7cc239f542",
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
                        "text": "Risk Grade LCY"
                    },
                    "lblDetailValue": {
                        "text": "LCY"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRiskScoreLCY.add(CopyRiskScoreGrade0eb3d7cc239f542);
            var flxRiskScoreFCY = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRiskScoreFCY",
                "isVisible": false,
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxRiskScoreFCY.setDefaultUnit(voltmx.flex.DP);
            var CopyRiskScoreGrade0fa0a4b9ab6cd45 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyRiskScoreGrade0fa0a4b9ab6cd45",
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
                        "text": "Risk Grade FCY"
                    },
                    "lblDetailValue": {
                        "text": "FCY"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRiskScoreFCY.add(CopyRiskScoreGrade0fa0a4b9ab6cd45);
            flxRiskFields.add(flxPD, flxReason1, flxReason2, flxReason3, flxRatingScore, flxHide, flxRiskScoreLCY, flxRiskScoreFCY);
            flxRiskRate.add(lblHdrRiskType, RiskRateChart, flxRiskFields);
            var flxInsight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxInsight",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "320dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInsight.setDefaultUnit(voltmx.flex.DP);
            var flxCreditInsight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxCreditInsight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "49%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCreditInsight.setDefaultUnit(voltmx.flex.DP);
            var SubHdr2 = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "SubHdr2",
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
                        "text": "Credit Insight"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var CopyflxAffGrid0b71a9868dde84e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "12dp",
                "clipBounds": false,
                "id": "CopyflxAffGrid0b71a9868dde84e",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [12, 1, 12, 12],
                "paddingInPixel": true
            }, {});
            CopyflxAffGrid0b71a9868dde84e.setDefaultUnit(voltmx.flex.DP);
            var CopyflxDebitServiceRatio0g58205c511df45 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxDebitServiceRatio0g58205c511df45",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxDebitServiceRatio0g58205c511df45.setDefaultUnit(voltmx.flex.DP);
            var CopyDebitServiceRatio0ed524f8796ee4e = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyDebitServiceRatio0ed524f8796ee4e",
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
                        "text": "Debit Service Ratio"
                    },
                    "lblDetailValue": {
                        "text": "4 : 1"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxDebitServiceRatio0g58205c511df45.add(CopyDebitServiceRatio0ed524f8796ee4e);
            var CopyflxInstallToIncome0a0c95e94ffb542 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxInstallToIncome0a0c95e94ffb542",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxInstallToIncome0a0c95e94ffb542.setDefaultUnit(voltmx.flex.DP);
            var CopyInstallmentToIncome0a20f2937b88740 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyInstallmentToIncome0a20f2937b88740",
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
                        "text": "Installment To Income"
                    },
                    "lblDetailValue": {
                        "text": "18%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxInstallToIncome0a0c95e94ffb542.add(CopyInstallmentToIncome0a20f2937b88740);
            var CopyflxNetAnnIncome0cc7df3deff8943 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxNetAnnIncome0cc7df3deff8943",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxNetAnnIncome0cc7df3deff8943.setDefaultUnit(voltmx.flex.DP);
            var CopyNetAnnIncome0b486f96da31440 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopyNetAnnIncome0b486f96da31440",
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
                        "text": "Net Annual Income (KES)"
                    },
                    "lblDetailValue": {
                        "text": "24,000,000"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxNetAnnIncome0cc7df3deff8943.add(CopyNetAnnIncome0b486f96da31440);
            var CopyflxSurpAvailable0e0637c52f9e146 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "CopyflxSurpAvailable0e0637c52f9e146",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxSurpAvailable0e0637c52f9e146.setDefaultUnit(voltmx.flex.DP);
            var CopySurplusAvailable0aae18eb4e1a849 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CopySurplusAvailable0aae18eb4e1a849",
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
                        "text": "Surplus Available"
                    },
                    "lblDetailValue": {
                        "text": "4,000,000"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            CopyflxSurpAvailable0e0637c52f9e146.add(CopySurplusAvailable0aae18eb4e1a849);
            CopyflxAffGrid0b71a9868dde84e.add(CopyflxDebitServiceRatio0g58205c511df45, CopyflxInstallToIncome0a0c95e94ffb542, CopyflxNetAnnIncome0cc7df3deff8943, CopyflxSurpAvailable0e0637c52f9e146);
            flxCreditInsight.add(SubHdr2, CopyflxAffGrid0b71a9868dde84e);
            var flxAffordableInsight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxAffordableInsight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "49%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxAffordableInsight.setDefaultUnit(voltmx.flex.DP);
            var lblAffSubHdr = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "lblAffSubHdr",
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
                        "text": "Affordable Insight"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxAffGrid = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "12dp",
                "clipBounds": false,
                "id": "flxAffGrid",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [12, 1, 12, 12],
                "paddingInPixel": true
            }, {});
            flxAffGrid.setDefaultUnit(voltmx.flex.DP);
            var flxDebitServiceRatio = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDebitServiceRatio",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxDebitServiceRatio.setDefaultUnit(voltmx.flex.DP);
            var DebitServiceRatio = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DebitServiceRatio",
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
                        "text": "Debit Service Ratio"
                    },
                    "lblDetailValue": {
                        "text": "4 : 1"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDebitServiceRatio.add(DebitServiceRatio);
            var flxInstallToIncome = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxInstallToIncome",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxInstallToIncome.setDefaultUnit(voltmx.flex.DP);
            var InstallmentToIncome = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "InstallmentToIncome",
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
                        "text": "Installment To Income"
                    },
                    "lblDetailValue": {
                        "text": "18%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxInstallToIncome.add(InstallmentToIncome);
            var flxNetAnnIncome = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxNetAnnIncome",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxNetAnnIncome.setDefaultUnit(voltmx.flex.DP);
            var NetAnnIncome = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "NetAnnIncome",
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
                        "text": "Net Annual Income (KES)"
                    },
                    "lblDetailValue": {
                        "text": "24,000,000"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxNetAnnIncome.add(NetAnnIncome);
            var flxSurpAvailable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSurpAvailable",
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
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxSurpAvailable.setDefaultUnit(voltmx.flex.DP);
            var SurplusAvailable = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SurplusAvailable",
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
                        "text": "Surplus Available"
                    },
                    "lblDetailValue": {
                        "text": "4,000,000"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSurpAvailable.add(SurplusAvailable);
            flxAffGrid.add(flxDebitServiceRatio, flxInstallToIncome, flxNetAnnIncome, flxSurpAvailable);
            flxAffordableInsight.add(lblAffSubHdr, flxAffGrid);
            flxInsight.add(flxCreditInsight, flxAffordableInsight);
            var flxWatchList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxWatchList",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "510dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxWatchList.setDefaultUnit(voltmx.flex.DP);
            var flxWatchListDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxWatchListDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxWatchListDetails.setDefaultUnit(voltmx.flex.DP);
            var lblSubHdrWatchList = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "lblSubHdrWatchList",
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
                        "text": "Watch List Details"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxGridWatchList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "12dp",
                "clipBounds": false,
                "id": "flxGridWatchList",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [12, 1, 12, 12],
                "paddingInPixel": true
            }, {});
            flxGridWatchList.setDefaultUnit(voltmx.flex.DP);
            var flxWatchListYes = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxWatchListYes",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxWatchListYes.setDefaultUnit(voltmx.flex.DP);
            var WatchList = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "WatchList",
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
                    "LabelList": {
                        "zIndex": 1
                    },
                    "flxDropDwnList": {
                        "height": "30dp",
                        "right": "3dp",
                        "top": "3dp",
                        "width": "30dp"
                    },
                    "imgDropDwn": {
                        "height": "30dp",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "30dp"
                    },
                    "lblDetail": {
                        "text": "Watch List"
                    },
                    "listData": {
                        "masterData": [
                            ["No", "No"],
                            ["Yes", "Yes"]
                        ],
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxWatchListYes.add(WatchList);
            var flxGroupWatchList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGroupWatchList",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxGroupWatchList.setDefaultUnit(voltmx.flex.DP);
            var GroupWatchList = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "GroupWatchList",
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
                    "LabelTextBox": {
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblText": {
                        "text": "Group Watchlist"
                    },
                    "txtBox": {
                        "text": "0775449345",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGroupWatchList.add(GroupWatchList);
            var flxWatchListDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxWatchListDate",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxWatchListDate.setDefaultUnit(voltmx.flex.DP);
            var WatchListDate = new voltmx.ui.Label({
                "id": "WatchListDate",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Watchlist Date",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var calWatchlistDate = new voltmx.ui.Calendar({
                "calendarIcon": "icon_cal.png",
                "dateComponents": [9, 9, 2015],
                "dateFormat": "dd/MM/yyyy",
                "day": 9,
                "formattedDate": "09/09/2015",
                "height": "40dp",
                "hour": 0,
                "id": "calWatchlistDate",
                "isVisible": true,
                "left": "0dp",
                "minutes": 0,
                "month": 9,
                "seconds": 0,
                "skin": "sknSBCalender",
                "top": "5dp",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "100%",
                "year": 2015,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "noOfMonths": 1
            });
            flxWatchListDate.add(WatchListDate, calWatchlistDate);
            var flxExpLimitAmt = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxExpLimitAmt",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxExpLimitAmt.setDefaultUnit(voltmx.flex.DP);
            var ExposureLimitAmt = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ExposureLimitAmt",
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
                    "LabelTextBox": {
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblText": {
                        "text": "Exposure / Limit Amount"
                    },
                    "txtBox": {
                        "text": "15,000,000",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxExpLimitAmt.add(ExposureLimitAmt);
            var flxIrregular = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxIrregular",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxIrregular.setDefaultUnit(voltmx.flex.DP);
            var Irregular = new voltmx.ui.Label({
                "id": "Irregular",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Irregular",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rdoIrregular = new voltmx.ui.RadioButtonGroup({
                "id": "rdoIrregular",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["Risk", "Risk"],
                    ["Technical", "Technical"]
                ],
                "selectedKey": "Risk",
                "skin": "slRadioButtonGroup",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxIrregular.add(Irregular, rdoIrregular);
            var flxCodeStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCodeStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
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
                        "640": 6,
                        "1024": 4,
                        "1366": 4
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCodeStatus.setDefaultUnit(voltmx.flex.DP);
            var lblCodeStatus = new voltmx.ui.Label({
                "id": "lblCodeStatus",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Code / Status",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rdoCodeStatus = new voltmx.ui.RadioButtonGroup({
                "id": "rdoCodeStatus",
                "isVisible": true,
                "left": "0",
                "masterData": [
                    ["code1", "Code 1"],
                    ["code2", "Code 2"],
                    ["code 3", "Code 3"]
                ],
                "selectedKey": "code2",
                "skin": "slRadioButtonGroup",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCodeStatus.add(lblCodeStatus, rdoCodeStatus);
            var flxReason = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxReason",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxReason.setDefaultUnit(voltmx.flex.DP);
            var Reason = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Reason",
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
                    "LabelTextBox": {
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblText": {
                        "text": "Reason for applicant added to watchlist"
                    },
                    "txtBox": {
                        "text": "------",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxReason.add(Reason);
            var flxWatchHistory = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxWatchHistory",
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
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxWatchHistory.setDefaultUnit(voltmx.flex.DP);
            var WatchListHis = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "WatchListHis",
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
                    "LabelTextBox": {
                        "width": "100%",
                        "zIndex": 1
                    },
                    "lblText": {
                        "text": "Watchlist History"
                    },
                    "txtBox": {
                        "placeholder": "Watchlist history",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxWatchHistory.add(WatchListHis);
            flxGridWatchList.add(flxWatchListYes, flxGroupWatchList, flxWatchListDate, flxExpLimitAmt, flxIrregular, flxCodeStatus, flxReason, flxWatchHistory);
            flxWatchListDetails.add(lblSubHdrWatchList, flxGridWatchList);
            flxWatchList.add(flxWatchListDetails);
            var flxBureau = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxBureau",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": 810,
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureau.setDefaultUnit(voltmx.flex.DP);
            var lblSubHdrBureau = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "lblSubHdrBureau",
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
                        "text": "Credit Bureau"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxGridBureau = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "12dp",
                "clipBounds": false,
                "id": "flxGridBureau",
                "isVisible": true,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Customer360"
            }, {
                "padding": [12, 12, 12, 12],
                "paddingInPixel": true
            }, {});
            flxGridBureau.setDefaultUnit(voltmx.flex.DP);
            var flxCustIdentity = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCustIdentity",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxCustIdentity.setDefaultUnit(voltmx.flex.DP);
            var CustIdentity = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CustIdentity",
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
                        "text": "Customer Identity CIF"
                    },
                    "lblDetailValue": {
                        "text": "106000005674"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCustIdentity.add(CustIdentity);
            var flxBureauBounce = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauBounce",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauBounce.setDefaultUnit(voltmx.flex.DP);
            var BureauBounce = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauBounce",
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
                        "text": "Bureau Bounced Cheques"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauBounce.add(BureauBounce);
            var flxBureauMatch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauMatch",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauMatch.setDefaultUnit(voltmx.flex.DP);
            var BureauMatch = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauMatch",
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
                        "text": "Bureau Match"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauMatch.add(BureauMatch);
            var flxBureauArrears = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauArrears",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauArrears.setDefaultUnit(voltmx.flex.DP);
            var BureauArrears = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauArrears",
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
                        "text": "Bureau Other Arrears"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauArrears.add(BureauArrears);
            var flxBureauStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauStatus",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauStatus.setDefaultUnit(voltmx.flex.DP);
            var BureauStatus = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauStatus",
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
                        "text": "Bureau Status"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauStatus.add(BureauStatus);
            var flxBureauMaxArrears = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauMaxArrears",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauMaxArrears.setDefaultUnit(voltmx.flex.DP);
            var BureauMaxArrears = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauMaxArrears",
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
                        "text": "Bureau Other Arrears"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauMaxArrears.add(BureauMaxArrears);
            var flxBureauScore1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauScore1",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauScore1.setDefaultUnit(voltmx.flex.DP);
            var BureauScore1 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauScore1",
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
                        "text": "Bureau Score1"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauScore1.add(BureauScore1);
            var flxBureauScore2 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBureauScore2",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBureauScore2.setDefaultUnit(voltmx.flex.DP);
            var BureauScore2 = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BureauScore2",
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
                        "text": "Bureau Score2"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBureauScore2.add(BureauScore2);
            var flxNoOfBArrears = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxNoOfBArrears",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxNoOfBArrears.setDefaultUnit(voltmx.flex.DP);
            var NoOfBArrears = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "NoOfBArrears",
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
                        "text": "Number Of Bureau Arrears"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxNoOfBArrears.add(NoOfBArrears);
            var flxBTotalInstal = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBTotalInstal",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBTotalInstal.setDefaultUnit(voltmx.flex.DP);
            var BTotalInstal = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BTotalInstal",
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
                        "text": "Bureau Total instalments"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBTotalInstal.add(BTotalInstal);
            var flxBScore = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBScore",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBScore.setDefaultUnit(voltmx.flex.DP);
            var BScore = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BScore",
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
                        "text": "Bureau Score"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBScore.add(BScore);
            var flxBNoRp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBNoRp",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBNoRp.setDefaultUnit(voltmx.flex.DP);
            var BNoRp = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BNoRp",
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
                        "text": "Bureau Number Rp"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBNoRp.add(BNoRp);
            var flxBNumRpMatched = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBNumRpMatched",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBNumRpMatched.setDefaultUnit(voltmx.flex.DP);
            var BNumRpMatched = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BNumRpMatched",
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
                        "text": "Bureau Number Rp Matched"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBNumRpMatched.add(BNumRpMatched);
            var flxBNegStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBNegStatus",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBNegStatus.setDefaultUnit(voltmx.flex.DP);
            var BNegStatus = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BNegStatus",
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
                        "text": "Bureau Number Rp Negative Status"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBNegStatus.add(BNegStatus);
            var flxBRpCheques = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBRpCheques",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBRpCheques.setDefaultUnit(voltmx.flex.DP);
            var BRpCheques = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BRpCheques",
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
                        "text": "Bureau Number Rp Cheques"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBRpCheques.add(BRpCheques);
            var flxBNumberRpArr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBNumberRpArr",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBNumberRpArr.setDefaultUnit(voltmx.flex.DP);
            var BNumberRpArr = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BNumberRpArr",
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
                        "text": "Bureau Number Rp Arrears"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBNumberRpArr.add(BNumberRpArr);
            var flxBMatchRp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBMatchRp",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBMatchRp.setDefaultUnit(voltmx.flex.DP);
            var BMatchRp = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BMatchRp",
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
                        "text": "Bureau Match Rp"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBMatchRp.add(BMatchRp);
            var flxBStatusRp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBStatusRp",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBStatusRp.setDefaultUnit(voltmx.flex.DP);
            var BStatusRp = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BStatusRp",
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
                        "text": "Bureau Status Rp"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBStatusRp.add(BStatusRp);
            var flxBOtherArrearsRp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBOtherArrearsRp",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBOtherArrearsRp.setDefaultUnit(voltmx.flex.DP);
            var BOtherArrearsRp = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BOtherArrearsRp",
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
                        "text": "Bureau Other Arrears Rp"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBOtherArrearsRp.add(BOtherArrearsRp);
            var flxBTotalInstalments = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBTotalInstalments",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBTotalInstalments.setDefaultUnit(voltmx.flex.DP);
            var BTotalInstalments = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BTotalInstalments",
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
                        "text": "Bureau Total Instalments Rp"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBTotalInstalments.add(BTotalInstalments);
            var flxBBouncesChequeRp = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxBBouncesChequeRp",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxBBouncesChequeRp.setDefaultUnit(voltmx.flex.DP);
            var BBouncesChequeRp = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "BBouncesChequeRp",
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
                        "text": "Bureau Bounced Cheques Rp"
                    },
                    "lblDetailValue": {
                        "text": "0"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxBBouncesChequeRp.add(BBouncesChequeRp);
            var flxExtractDate = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxExtractDate",
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
                        "640": 6,
                        "1024": 4,
                        "1366": 2
                    }
                },
                "appName": "Customer360"
            }, {
                "paddingInPixel": false
            }, {});
            flxExtractDate.setDefaultUnit(voltmx.flex.DP);
            var ExtractDate = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ExtractDate",
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
                        "text": "Extract Date"
                    },
                    "lblDetailValue": {
                        "text": "2023-12-09"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxExtractDate.add(ExtractDate);
            flxGridBureau.add(flxCustIdentity, flxBureauBounce, flxBureauMatch, flxBureauArrears, flxBureauStatus, flxBureauMaxArrears, flxBureauScore1, flxBureauScore2, flxNoOfBArrears, flxBTotalInstal, flxBScore, flxBNoRp, flxBNumRpMatched, flxBNegStatus, flxBRpCheques, flxBNumberRpArr, flxBMatchRp, flxBStatusRp, flxBOtherArrearsRp, flxBTotalInstalments, flxBBouncesChequeRp, flxExtractDate);
            flxBureau.add(lblSubHdrBureau, flxGridBureau);
            flxRiskInsight.add(flxRiskRate, flxInsight, flxWatchList, flxBureau);
            flxSrc.add(flxCustomerDetails, flxTabs, flxSegData, flxChart, flxCollaInfo, flxInsuranceInfo, flxOpInfo, flxRiskTypes, flxRiskInsight);
            flxRight.add(FormHeader, flxSrc);
            flxMain.add(flxLeft, flxRight);
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
                    "text": "Customer Profile"
                },
                "SubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr.lblSubHdr": {
                    "text": "Customer Information"
                },
                "CIFNumber.lblDetail": {
                    "text": "CIF Number"
                },
                "CIFNumber.lblDetailValue": {
                    "height": "40dp",
                    "text": "0234567891",
                    "top": "5dp"
                },
                "EntityName": {
                    "width": "100%"
                },
                "EntityName.lblText": {
                    "text": "Entity Name"
                },
                "EntityName.txtBox": {
                    "text": "80/20 MARKETING LIMITED",
                    "width": "100%"
                },
                "EntityRegNum": {
                    "width": "100%"
                },
                "EntityRegNum.lblText": {
                    "text": "Entity Registration Number/NIF"
                },
                "EntityRegNum.txtBox": {
                    "text": "80/20 MARKETING LIMITED",
                    "width": "100%"
                },
                "EntityType.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "EntityType.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "EntityType.lblDetail": {
                    "text": "Entity Type"
                },
                "EntityType.listData": {
                    "width": "100%"
                },
                "IdentityNumber.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "IdentityNumber.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "IdentityNumber.lblDetail": {
                    "text": "Identity Number"
                },
                "IdentityNumber.listData": {
                    "width": "100%"
                },
                "FullLegalName": {
                    "width": "100%"
                },
                "FullLegalName.lblText": {
                    "text": "Full Legal Name"
                },
                "FullLegalName.txtBox": {
                    "text": "80/20 MARKETING LIMITED",
                    "width": "100%"
                },
                "RegulatorySector.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "RegulatorySector.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "RegulatorySector.lblDetail": {
                    "text": "Identity Number"
                },
                "RegulatorySector.listData": {
                    "width": "100%"
                },
                "ISICCode.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "ISICCode.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "ISICCode.lblDetail": {
                    "text": "ISIC Code"
                },
                "ISICCode.listData": {
                    "width": "100%"
                },
                "MarketSegment.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "MarketSegment.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "MarketSegment.lblDetail": {
                    "text": "Market Segment"
                },
                "MarketSegment.listData": {
                    "width": "100%"
                },
                "OtherBankers": {
                    "width": "100%"
                },
                "OtherBankers.lblText": {
                    "text": "Other Bankers"
                },
                "OtherBankers.txtBox": {
                    "text": "80/20 MARKETING LIMITED",
                    "width": "100%"
                },
                "RouteToHeadOff.lblDetail": {
                    "text": "Route To Head Office"
                },
                "RouteToHeadOff.lblDetailValue": {
                    "height": "40dp",
                    "text": "No"
                },
                "BusinessTelNum": {
                    "width": "100%"
                },
                "BusinessTelNum.lblText": {
                    "text": "Business Tel Number"
                },
                "BusinessTelNum.txtBox": {
                    "text": "0775449345",
                    "width": "100%"
                },
                "EmailAddress": {
                    "width": "100%"
                },
                "EmailAddress.lblText": {
                    "text": "Email Address"
                },
                "EmailAddress.txtBox": {
                    "text": "info@8020marketingug.co",
                    "width": "100%"
                },
                "Fax": {
                    "width": "100%"
                },
                "Fax.lblText": {
                    "text": "Fax"
                },
                "Fax.txtBox": {
                    "width": "100%"
                },
                "ApplicantsName.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "ApplicantsName.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "ApplicantsName.lblDetail": {
                    "text": "Applicant Name"
                },
                "ApplicantsName.listData": {
                    "width": "100%"
                },
                "IDNum.lblDetail": {
                    "text": "Route To Head Office"
                },
                "IDNum.lblDetailValue": {
                    "height": "40dp"
                },
                "SubHdr1": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr1.lblSubHdr": {
                    "text": "Chart"
                },
                "linechart": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                },
                "CollateralType.lblDetail": {
                    "text": "Collateral Type / Value"
                },
                "CollateralType.lblDetailValue": {
                    "text": "Surityship Partial Liability",
                    "top": "5dp"
                },
                "LinkeAcct.lblDetail": {
                    "text": "Linked Account"
                },
                "LinkeAcct.lblDetailValue": {
                    "text": "0234567891"
                },
                "SurrenderValue.lblDetail": {
                    "text": "Surrender Value"
                },
                "SurrenderValue.lblDetailValue": {
                    "text": "R 35K"
                },
                "CopyCollateralType0c0da5ba4346d44.lblDetail": {
                    "text": "Collateral Type / Value"
                },
                "CopyCollateralType0c0da5ba4346d44.lblDetailValue": {
                    "text": "Surityship Partial Liability",
                    "top": "5dp"
                },
                "CopyLinkeAcct0df9fdc6fb25146.lblDetail": {
                    "text": "Linked Account"
                },
                "CopyLinkeAcct0df9fdc6fb25146.lblDetailValue": {
                    "text": "0234567891"
                },
                "CopySurrenderValue0ebf0965aa25740.lblDetail": {
                    "text": "Surrender Value"
                },
                "CopySurrenderValue0ebf0965aa25740.lblDetailValue": {
                    "text": "R 35K"
                },
                "CopyCollateralType0dbd8532d739946.lblDetail": {
                    "text": "Collateral Type / Value"
                },
                "CopyCollateralType0dbd8532d739946.lblDetailValue": {
                    "text": "Surityship Partial Liability",
                    "top": "5dp"
                },
                "CopyLinkeAcct0c9ef530a37af4f.lblDetail": {
                    "text": "Linked Account"
                },
                "CopyLinkeAcct0c9ef530a37af4f.lblDetailValue": {
                    "text": "0234567891"
                },
                "CopySurrenderValue0c62d8b967ddd43.lblDetail": {
                    "text": "Surrender Value"
                },
                "CopySurrenderValue0c62d8b967ddd43.lblDetailValue": {
                    "text": "R 35K"
                },
                "CopyCollateralType0eca11d9ecebf4c.lblDetail": {
                    "text": "Collateral Type / Value"
                },
                "CopyCollateralType0eca11d9ecebf4c.lblDetailValue": {
                    "text": "Surityship Partial Liability",
                    "top": "5dp"
                },
                "CopyLinkeAcct0cd84883d7da848.lblDetail": {
                    "text": "Linked Account"
                },
                "CopyLinkeAcct0cd84883d7da848.lblDetailValue": {
                    "text": "0234567891"
                },
                "CopySurrenderValue0hc8da927997147.lblDetail": {
                    "text": "Surrender Value"
                },
                "CopySurrenderValue0hc8da927997147.lblDetailValue": {
                    "text": "R 35K"
                },
                "CopyCollateralType0bbfffbf96c9042.lblDetail": {
                    "text": "Collateral Type / Value"
                },
                "CopyCollateralType0bbfffbf96c9042.lblDetailValue": {
                    "text": "Surityship Partial Liability",
                    "top": "5dp"
                },
                "CopyLinkeAcct0jea18c9afb8d49.lblDetail": {
                    "text": "Linked Account"
                },
                "CopyLinkeAcct0jea18c9afb8d49.lblDetailValue": {
                    "text": "0234567891"
                },
                "CopySurrenderValue0bb7e4d15b41d47.lblDetail": {
                    "text": "Surrender Value"
                },
                "CopySurrenderValue0bb7e4d15b41d47.lblDetailValue": {
                    "text": "R 35K"
                },
                "CopyCollateralType0f124115cfe6e4f.lblDetail": {
                    "text": "SBIB"
                },
                "CopyCollateralType0f124115cfe6e4f.lblDetailValue": {
                    "text": "SBIB",
                    "top": "5dp"
                },
                "CopyLinkeAcct0cc93bd5adfef4c.lblDetail": {
                    "text": "57687234812934"
                },
                "CopyLinkeAcct0cc93bd5adfef4c.lblDetailValue": {
                    "text": "DisabilityCover"
                },
                "CopySurrenderValue0afc66f421bb44a.lblDetail": {
                    "text": "Monthly Premium"
                },
                "CopySurrenderValue0afc66f421bb44a.lblDetailValue": {
                    "text": "R 350"
                },
                "CopyCollateralType0cd6f3a4995b943.lblDetail": {
                    "text": "SBIB"
                },
                "CopyCollateralType0cd6f3a4995b943.lblDetailValue": {
                    "text": "Old Mutual",
                    "top": "5dp"
                },
                "CopyLinkeAcct0da2e01e5fe6b4c.lblDetail": {
                    "text": "57687234812934"
                },
                "CopyLinkeAcct0da2e01e5fe6b4c.lblDetailValue": {
                    "text": "DisabilityCover"
                },
                "CopySurrenderValue0bd3f3f677bd442.lblDetail": {
                    "text": "Monthly Premium"
                },
                "CopySurrenderValue0bd3f3f677bd442.lblDetailValue": {
                    "text": "R 350"
                },
                "CopyCollateralType0hc7ba7b34a0c4d.lblDetail": {
                    "text": "SBIB"
                },
                "CopyCollateralType0hc7ba7b34a0c4d.lblDetailValue": {
                    "text": "SBIB",
                    "top": "5dp"
                },
                "CopyLinkeAcct0j9a21367001345.lblDetail": {
                    "text": "57687234812934"
                },
                "CopyLinkeAcct0j9a21367001345.lblDetailValue": {
                    "text": "DisabilityCover"
                },
                "CopySurrenderValue0d20cf40857d744.lblDetail": {
                    "text": "Monthly Premium"
                },
                "CopySurrenderValue0d20cf40857d744.lblDetailValue": {
                    "text": "R 350"
                },
                "OwnerShip.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "OwnerShip.lblText": {
                    "text": "Ownership (Shareholders & % shareholding)"
                },
                "OwnerShip.txtArea": {
                    "height": "100%",
                    "text": "Anthea Paula Turwome 40% \nArnold Patrick Samson Turwomwe 60%\ncasdasd sdcsad\n"
                },
                "DescriptionBusiness.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "DescriptionBusiness.lblText": {
                    "text": "Description Of Business "
                },
                "DescriptionBusiness.txtArea": {
                    "height": "100%",
                    "text": "Dealers in Marketing and supply of promotional materials and other general supplies\n"
                },
                "Management.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "Management.lblText": {
                    "text": "Management"
                },
                "Management.txtArea": {
                    "height": "100%",
                    "text": "Managment is composed of Benon Mascot with seventeen years of experience in business and banking professional\ncharged key Business decisions and sourcing finances.\n"
                },
                "NatureOfBussiness.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "NatureOfBussiness.lblText": {
                    "text": "Nature Of Business"
                },
                "NatureOfBussiness.txtArea": {
                    "height": "100%",
                    "text": "80/20 Marketing Ltd 80/20 Marketing Ltd for the past 6 years has been operating as a supplier for branded promotional items and also a service provider for PR Communications services with its clientele ranging from NGOs, Government and also the private sector. Today, the company has a partnership with leading South African distributor of Promotional Items called BARON and also has connections with suppliers of high quality items from China as well. The company is pre-qualified with companies like UDB, Bank of Africa, URA, ICEA, MTN Uganda, TOTALENERGIES, etc. They also look at targeting our existing clients who have repeatedly ordered from them which tells that they satisfied with their items & services and would place orders over & over again J"
                },
                "PrincipalProductRange.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "PrincipalProductRange.lblText": {
                    "text": "Principal Product Range"
                },
                "PrincipalProductRange.txtArea": {
                    "height": "100%",
                    "text": "TE Branded Promotional Items (Apparel, Drinkware, Outdoor advertising material, Business Gifts) D Office Branding • Advertising • PR Communications • Digital Marketing Ltd J"
                },
                "PPMarketPlace.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "PPMarketPlace.lblText": {
                    "text": "Position of Principal product in market place"
                },
                "PPMarketPlace.txtArea": {
                    "height": "100%",
                    "text": "The principal product of 80/20 Marketing Ltd is Branded Promotional Items. The client has positioned themselves as suppliers of high quality promotional items at affordable prices and this has enabled us serve and retain big brands like MT Uganda, TOTAL Energies, ICEA Insurance, AAR Insurance etc."
                },
                "CapitalLabourIntensity.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "CapitalLabourIntensity.lblText": {
                    "text": "Capital Labour Intensity"
                },
                "CapitalLabourIntensity.txtArea": {
                    "height": "100%",
                    "text": "80/20 Marketing Ltd runs a highly capital intensive operation and need massive amounts of capital expenditure to fulfill client's orders. Some clients order 1,000s of items with zero deposits meaning the budget is met by the company which has to wait 30-60 days to get payment. The Client employs labour but they usually come in to finished products so their main role is to do deliveries, sales and after sales\n"
                },
                "Distribution.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "Distribution.lblText": {
                    "text": "Distribution"
                },
                "Distribution.txtArea": {
                    "height": "100%",
                    "text": "80/20 Marketing receives its goods through Entebbe Airport by air freight for goods coming from South Africa and China and the East Africa Bond in Namanve for goods coming from China. The goods are kept in their store in Bwebaija on Entebbe road. Goods that are urgently needed by clients are normally moved from the bond, to our office premises for inspection and taken to client's stores.\n"
                },
                "GeographicLoc.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "GeographicLoc.lblText": {
                    "text": "Geographic Location"
                },
                "GeographicLoc.txtArea": {
                    "height": "100%",
                    "text": "80/20 Marketing is located at Plot 20, Bukoto Street - Kampala where it has had its premises for the past 6\nyears.\n"
                },
                "MainSuppCred.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "MainSuppCred.lblText": {
                    "text": "Main suppliers/creditors"
                },
                "MainSuppCred.txtArea": {
                    "height": "100%",
                    "text": "BARRON South Africa\nAMROD South Africa\nMekea Import and\nExport Company Ltd Visible Investments\n"
                },
                "MainCustSupDeb.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "MainCustSupDeb.lblText": {
                    "text": "Main customers/debtors spread"
                },
                "MainCustSupDeb.txtArea": {
                    "height": "100%",
                    "text": "MTN Uganda\nICEA Insurance\nAAR Insurance\nTotal Energies\nUganda Wildlife Authority\nWorld Health Organisation"
                },
                "DirExec.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "DirExec.lblText": {
                    "text": "Directors - Executive"
                },
                "DirExec.txtArea": {
                    "height": "100%",
                    "text": "Benon Mascot\nAnthea Turwomwe\nArnold Turwomwe\n"
                },
                "FinancialYrEnd.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "FinancialYrEnd.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "FinancialYrEnd.lblDetail": {
                    "text": "Financial Year End"
                },
                "FinancialYrEnd.listData": {
                    "width": "100%"
                },
                "NonExecutive.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "NonExecutive.lblText": {
                    "text": "Directors - Non-executive"
                },
                "NonExecutive.txtArea": {
                    "height": "100%"
                },
                "Competitors.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "Competitors.lblText": {
                    "text": "Competitors"
                },
                "Competitors.txtArea": {
                    "height": "100%",
                    "text": "Rocket Products Ltd\nJude Colour Solutions\nClear Media"
                },
                "Auditor.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "Auditor.lblText": {
                    "text": "Auditor"
                },
                "Auditor.txtArea": {
                    "height": "100%",
                    "text": "PANRANK & Company Plot 40 Bombo Road, Kampala"
                },
                "AccHistory.FlexContainer0e91e04f1e8e74a": {
                    "top": "5dp"
                },
                "AccHistory.lblText": {
                    "text": "Account History"
                },
                "AccHistory.txtArea": {
                    "height": "100%",
                    "text": "Customer opened an account 9030019723797 on the 21/12/2021 domiciled at Forest Mall branch\n"
                },
                "RiskRateChart.FlexGroup0f364368a6aa841": {
                    "height": "85%"
                },
                "RiskRateChart": {
                    "height": "250dp",
                    "top": "48dp",
                    "width": "50%"
                },
                "RiskRateChart.flxPin": {
                    "centerY": "92%"
                },
                "RiskRateChart.imgChart": {
                    "height": "100%",
                    "src": "icon_rating.png"
                },
                "RiskRateChart.imgPin": {
                    "bottom": "5dp",
                    "src": "icon_pin.png"
                },
                "RiskRateChart.lblHigh": {
                    "centerY": "22%"
                },
                "RiskRateChart.lblLow": {
                    "centerX": "82%",
                    "centerY": "77%"
                },
                "RiskRateChart.lblMedium": {
                    "centerX": "70%",
                    "centerY": "36%"
                },
                "RiskRateChart.lblSubStandard": {
                    "centerX": "18%",
                    "centerY": "74%"
                },
                "RiskRateChart.lblVeryHigh": {
                    "centerX": "30%",
                    "centerY": "36%"
                },
                "ProbabilityDefault.lblDetail": {
                    "text": "Probability Of Default"
                },
                "ProbabilityDefault.lblDetailValue": {
                    "text": "12"
                },
                "Reason1.lblDetail": {
                    "text": "Reason1"
                },
                "Reason1.lblDetailValue": {
                    "text": "reason1"
                },
                "Reason2.lblDetail": {
                    "text": "Reason2"
                },
                "Reason2.lblDetailValue": {
                    "text": "reason2"
                },
                "Reason3.lblDetail": {
                    "text": "Reason3"
                },
                "Reason3.lblDetailValue": {
                    "text": "reason3"
                },
                "RiskScoreGrade.lblDetail": {
                    "text": "Rating Score"
                },
                "RiskScoreGrade.lblDetailValue": {
                    "text": "12"
                },
                "CopyRiskScoreGrade0eb3d7cc239f542.lblDetail": {
                    "text": "Risk Grade LCY"
                },
                "CopyRiskScoreGrade0eb3d7cc239f542.lblDetailValue": {
                    "text": "LCY"
                },
                "CopyRiskScoreGrade0fa0a4b9ab6cd45.lblDetail": {
                    "text": "Risk Grade FCY"
                },
                "CopyRiskScoreGrade0fa0a4b9ab6cd45.lblDetailValue": {
                    "text": "FCY"
                },
                "SubHdr2": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr2.lblSubHdr": {
                    "text": "Credit Insight"
                },
                "CopyDebitServiceRatio0ed524f8796ee4e.lblDetail": {
                    "text": "Debit Service Ratio"
                },
                "CopyDebitServiceRatio0ed524f8796ee4e.lblDetailValue": {
                    "text": "4 : 1"
                },
                "CopyInstallmentToIncome0a20f2937b88740.lblDetail": {
                    "text": "Installment To Income"
                },
                "CopyInstallmentToIncome0a20f2937b88740.lblDetailValue": {
                    "text": "18%"
                },
                "CopyNetAnnIncome0b486f96da31440.lblDetail": {
                    "text": "Net Annual Income (KES)"
                },
                "CopyNetAnnIncome0b486f96da31440.lblDetailValue": {
                    "text": "24,000,000"
                },
                "CopySurplusAvailable0aae18eb4e1a849.lblDetail": {
                    "text": "Surplus Available"
                },
                "CopySurplusAvailable0aae18eb4e1a849.lblDetailValue": {
                    "text": "4,000,000"
                },
                "lblAffSubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "lblAffSubHdr.lblSubHdr": {
                    "text": "Affordable Insight"
                },
                "DebitServiceRatio.lblDetail": {
                    "text": "Debit Service Ratio"
                },
                "DebitServiceRatio.lblDetailValue": {
                    "text": "4 : 1"
                },
                "InstallmentToIncome.lblDetail": {
                    "text": "Installment To Income"
                },
                "InstallmentToIncome.lblDetailValue": {
                    "text": "18%"
                },
                "NetAnnIncome.lblDetail": {
                    "text": "Net Annual Income (KES)"
                },
                "NetAnnIncome.lblDetailValue": {
                    "text": "24,000,000"
                },
                "SurplusAvailable.lblDetail": {
                    "text": "Surplus Available"
                },
                "SurplusAvailable.lblDetailValue": {
                    "text": "4,000,000"
                },
                "lblSubHdrWatchList": {
                    "centerY": "",
                    "top": "0dp"
                },
                "lblSubHdrWatchList.lblSubHdr": {
                    "text": "Watch List Details"
                },
                "WatchList": {
                    "zIndex": 1
                },
                "WatchList.flxDropDwnList": {
                    "height": "30dp",
                    "right": "3dp",
                    "top": "3dp",
                    "width": "30dp"
                },
                "WatchList.imgDropDwn": {
                    "height": "30dp",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "30dp"
                },
                "WatchList.lblDetail": {
                    "text": "Watch List"
                },
                "WatchList.listData": {
                    "width": "100%"
                },
                "GroupWatchList": {
                    "width": "100%",
                    "zIndex": 1
                },
                "GroupWatchList.lblText": {
                    "text": "Group Watchlist"
                },
                "GroupWatchList.txtBox": {
                    "text": "0775449345",
                    "width": "100%"
                },
                "ExposureLimitAmt": {
                    "width": "100%",
                    "zIndex": 1
                },
                "ExposureLimitAmt.lblText": {
                    "text": "Exposure / Limit Amount"
                },
                "ExposureLimitAmt.txtBox": {
                    "text": "15,000,000",
                    "width": "100%"
                },
                "Reason": {
                    "width": "100%",
                    "zIndex": 1
                },
                "Reason.lblText": {
                    "text": "Reason for applicant added to watchlist"
                },
                "Reason.txtBox": {
                    "text": "------",
                    "width": "100%"
                },
                "WatchListHis": {
                    "width": "100%",
                    "zIndex": 1
                },
                "WatchListHis.lblText": {
                    "text": "Watchlist History"
                },
                "WatchListHis.txtBox": {
                    "width": "100%"
                },
                "lblSubHdrBureau": {
                    "centerY": "",
                    "top": "0dp"
                },
                "lblSubHdrBureau.lblSubHdr": {
                    "text": "Credit Bureau"
                },
                "CustIdentity.lblDetail": {
                    "text": "Customer Identity CIF"
                },
                "CustIdentity.lblDetailValue": {
                    "text": "106000005674"
                },
                "BureauBounce.lblDetail": {
                    "text": "Bureau Bounced Cheques"
                },
                "BureauBounce.lblDetailValue": {
                    "text": "0"
                },
                "BureauMatch.lblDetail": {
                    "text": "Bureau Match"
                },
                "BureauMatch.lblDetailValue": {
                    "text": "0"
                },
                "BureauArrears.lblDetail": {
                    "text": "Bureau Other Arrears"
                },
                "BureauArrears.lblDetailValue": {
                    "text": "0"
                },
                "BureauStatus.lblDetail": {
                    "text": "Bureau Status"
                },
                "BureauStatus.lblDetailValue": {
                    "text": "0"
                },
                "BureauMaxArrears.lblDetail": {
                    "text": "Bureau Other Arrears"
                },
                "BureauMaxArrears.lblDetailValue": {
                    "text": "0"
                },
                "BureauScore1.lblDetail": {
                    "text": "Bureau Score1"
                },
                "BureauScore1.lblDetailValue": {
                    "text": "0"
                },
                "BureauScore2.lblDetail": {
                    "text": "Bureau Score2"
                },
                "BureauScore2.lblDetailValue": {
                    "text": "0"
                },
                "NoOfBArrears.lblDetail": {
                    "text": "Number Of Bureau Arrears"
                },
                "NoOfBArrears.lblDetailValue": {
                    "text": "0"
                },
                "BTotalInstal.lblDetail": {
                    "text": "Bureau Total instalments"
                },
                "BTotalInstal.lblDetailValue": {
                    "text": "0"
                },
                "BScore.lblDetail": {
                    "text": "Bureau Score"
                },
                "BScore.lblDetailValue": {
                    "text": "0"
                },
                "BNoRp.lblDetail": {
                    "text": "Bureau Number Rp"
                },
                "BNoRp.lblDetailValue": {
                    "text": "0"
                },
                "BNumRpMatched.lblDetail": {
                    "text": "Bureau Number Rp Matched"
                },
                "BNumRpMatched.lblDetailValue": {
                    "text": "0"
                },
                "BNegStatus.lblDetail": {
                    "text": "Bureau Number Rp Negative Status"
                },
                "BNegStatus.lblDetailValue": {
                    "text": "0"
                },
                "BRpCheques.lblDetail": {
                    "text": "Bureau Number Rp Cheques"
                },
                "BRpCheques.lblDetailValue": {
                    "text": "0"
                },
                "BNumberRpArr.lblDetail": {
                    "text": "Bureau Number Rp Arrears"
                },
                "BNumberRpArr.lblDetailValue": {
                    "text": "0"
                },
                "BMatchRp.lblDetail": {
                    "text": "Bureau Match Rp"
                },
                "BMatchRp.lblDetailValue": {
                    "text": "0"
                },
                "BStatusRp.lblDetail": {
                    "text": "Bureau Status Rp"
                },
                "BStatusRp.lblDetailValue": {
                    "text": "0"
                },
                "BOtherArrearsRp.lblDetail": {
                    "text": "Bureau Other Arrears Rp"
                },
                "BOtherArrearsRp.lblDetailValue": {
                    "text": "0"
                },
                "BTotalInstalments.lblDetail": {
                    "text": "Bureau Total Instalments Rp"
                },
                "BTotalInstalments.lblDetailValue": {
                    "text": "0"
                },
                "BBouncesChequeRp.lblDetail": {
                    "text": "Bureau Bounced Cheques Rp"
                },
                "BBouncesChequeRp.lblDetailValue": {
                    "text": "0"
                },
                "ExtractDate.lblDetail": {
                    "text": "Extract Date"
                },
                "ExtractDate.lblDetailValue": {
                    "text": "2023-12-09"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmCustomer,
            "enabledForIdleTimeout": false,
            "id": "frmCustomer",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "Customer360",
            "info": {
                "kuid": "e50eb304d4434b44bb19d9d456f60988"
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