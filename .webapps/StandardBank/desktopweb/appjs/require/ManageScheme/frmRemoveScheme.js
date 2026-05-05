define("ManageScheme/frmRemoveScheme", function() {
    return function(controller) {
        function addWidgetsfrmRemoveScheme() {
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
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "15%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0%",
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
                    "lblHdr": {
                        "text": "Remove Scheme"
                    }
                }
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
                "height": "88%",
                "horizontalScrollIndicator": true,
                "id": "flxScr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "pagingEnabled": false,
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "top": "12%",
                "verticalScrollIndicator": true,
                "width": "96%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxScr.setDefaultUnit(voltmx.flex.DP);
            var flxAddScheme = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAddScheme",
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
            flxAddScheme.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "Remove Scheme"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxListMethod = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80dp",
                "id": "flxListMethod",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "96%",
                "zIndex": 130,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxListMethod.setDefaultUnit(voltmx.flex.DP);
            var lblListMethod = new voltmx.ui.Label({
                "id": "lblListMethod",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "ADD METHOD",
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSelectedMethod = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSelectedMethod",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelectedMethod.setDefaultUnit(voltmx.flex.DP);
            var lblSelectedMethod = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedMethod",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Manual Company Entry(max 10 items)",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [16, 8, 0, 8],
                "paddingInPixel": true
            }, {});
            var imgDropDwn = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgDropDwn",
                "isVisible": true,
                "right": "16dp",
                "skin": "slImage",
                "src": "icon_dropdwn.png",
                "top": "9dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectedMethod.add(lblSelectedMethod, imgDropDwn);
            var flxSegMethodContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "id": "flxSegMethodContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegMethodContainer.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox0g0122a027e2e45', 'CopyFBox0g0122a027e2e45', 'CopyFBox0g0122a027e2e45Controller', {
                "appName": "ManageScheme"
            });
            var segMethodContainer = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblMethod": "Label"
                }],
                "groupCells": false,
                "id": "segMethodContainer",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTrans",
                "rowSkin": "segTrans",
                "rowTemplate": "CopyFBox0g0122a027e2e45",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblMethod": "lblMethod"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegMethodContainer.add(segMethodContainer);
            flxListMethod.add(lblListMethod, flxSelectedMethod, flxSegMethodContainer);
            var flxAddMethod = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "id": "flxAddMethod",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "94%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddMethod.setDefaultUnit(voltmx.flex.DP);
            var AddMethod = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "focusSkin": "slFFocusbox",
                "id": "AddMethod",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxDropDwnList": {
                        "height": "35px",
                        "right": "3dp",
                        "top": "2dp"
                    },
                    "imgDropDwn": {
                        "src": "icon_dropdwn.png"
                    },
                    "lblDetail": {
                        "text": "REMOVE METHOD"
                    },
                    "listData": {
                        "masterData": [
                            ["MC", "Manual Company Remove (max 10 items)"],
                            ["UC", "Upload Company File"],
                            ["ME", "Manual Employee Remove (max 10 items)"],
                            ["UE", "Upload Employee File"]
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
            flxAddMethod.add(AddMethod);
            var flxSep = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "24dp",
                "clipBounds": false,
                "height": "1px",
                "id": "flxSep",
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
            flxSep.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0ab40f0236df542 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "0dp",
                "id": "FlexContainer0ab40f0236df542",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": 3,
                "width": "85%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0ab40f0236df542.setDefaultUnit(voltmx.flex.DP);
            FlexContainer0ab40f0236df542.add();
            flxSep.add(FlexContainer0ab40f0236df542);
            var flxCompanyEntry = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxCompanyEntry",
                "isVisible": false,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            flxCompanyEntry.setDefaultUnit(voltmx.flex.DP);
            var flxSchemeName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchemeName",
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
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeName.setDefaultUnit(voltmx.flex.DP);
            var SchemeName = new com.hcl.lblText.LabelTextBox({
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
                    "lblText": {
                        "text": "SCHEME NAME",
                        "width": "100%"
                    },
                    "txtBox": {
                        "placeholder": "Enter Scheme Name",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSchemeName.add(SchemeName);
            var flxSchemeNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchemeNumber",
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
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeNumber.setDefaultUnit(voltmx.flex.DP);
            var SchemeNumber = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SchemeNumber",
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
                        "text": "SCHEME NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter Scheme Number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxSchemeNumber.add(SchemeNumber);
            var flxEmployerName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmployerName",
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
                        "1024": 12,
                        "1366": 12
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmployerName.setDefaultUnit(voltmx.flex.DP);
            var EmployerName = new com.hcl.lblText.LabelTextBox({
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
                    "lblText": {
                        "text": "EMPLOYER NAME"
                    },
                    "txtBox": {
                        "placeholder": "Enter Employer Name",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmployerName.add(EmployerName);
            var flxCIFNUmber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCIFNUmber",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxCIFNUmber.setDefaultUnit(voltmx.flex.DP);
            var CIFNumber = new com.hcl.lblText.LabelTextBox({
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
                    "lblText": {
                        "text": "CIF NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter CIF Number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxCIFNUmber.add(CIFNumber);
            var flxRegistrationNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxRegistrationNumber",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxRegistrationNumber.setDefaultUnit(voltmx.flex.DP);
            var RegistrationNumber = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RegistrationNumber",
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
                        "text": "REGISTRATION NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter Registration Number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRegistrationNumber.add(RegistrationNumber);
            var flxDesigContName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDesigContName",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDesigContName.setDefaultUnit(voltmx.flex.DP);
            var DesignatedContName = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesignatedContName",
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
                        "text": "DESIGNATED CONTACT NAME"
                    },
                    "txtBox": {
                        "placeholder": "Enter Contact Name",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDesigContName.add(DesignatedContName);
            var flxDesgContTitle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDesgContTitle",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDesgContTitle.setDefaultUnit(voltmx.flex.DP);
            var DesignatedContactTitle = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesignatedContactTitle",
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
                        "text": "DESIGNATED CONTACT TITLE"
                    },
                    "txtBox": {
                        "placeholder": "Enter Title",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDesgContTitle.add(DesignatedContactTitle);
            var flxDesgContPhone = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDesgContPhone",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDesgContPhone.setDefaultUnit(voltmx.flex.DP);
            var DesignatedCOntactPhone = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesignatedCOntactPhone",
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
                        "text": "DESIGNATED CONTACT PHONE"
                    },
                    "txtBox": {
                        "placeholder": "Enter phone number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDesgContPhone.add(DesignatedCOntactPhone);
            var flxDesgContEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDesgContEmail",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDesgContEmail.setDefaultUnit(voltmx.flex.DP);
            var DesignatedContactEmail = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesignatedContactEmail",
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
                        "text": "DESIGNATED CONTACT EMAIL"
                    },
                    "txtBox": {
                        "placeholder": "Enter email",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxDesgContEmail.add(DesignatedContactEmail);
            var flxMaxLendLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMaxLendLimit",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxMaxLendLimit.setDefaultUnit(voltmx.flex.DP);
            var MaxLendLimit = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MaxLendLimit",
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
                        "text": "MAXIMUM LENDING LIMIT (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxMaxLendLimit.add(MaxLendLimit);
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
                        "640": 12,
                        "1024": 6,
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspendStatus.setDefaultUnit(voltmx.flex.DP);
            var SuspendStatus = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "focusSkin": "slFFocusbox",
                "id": "SuspendStatus",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxDropDwnList": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "viz.val_cleared",
                        "right": "3dp",
                        "top": "6dp",
                        "width": "25dp"
                    },
                    "flxList": {
                        "height": "40dp"
                    },
                    "imgDropDwn": {
                        "centerY": "viz.val_cleared",
                        "height": "25px",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "25px"
                    },
                    "lblDetail": {
                        "text": "SUSPEND STATUS"
                    },
                    "listData": {
                        "masterData": [
                            ["inact", "Inactive"],
                            ["act", "Active"]
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
            flxSuspendStatus.add(SuspendStatus);
            flxCompanyEntry.add(flxSchemeName, flxSchemeNumber, flxEmployerName, flxCIFNUmber, flxRegistrationNumber, flxDesigContName, flxDesgContTitle, flxDesgContPhone, flxDesgContEmail, flxMaxLendLimit, flxSuspendStatus);
            var flxEmployeeSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmployeeSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmployeeSrch.setDefaultUnit(voltmx.flex.DP);
            var lblEmployeeSrch = new voltmx.ui.Label({
                "id": "lblEmployeeSrch",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "SEARCH EMPLOYPEE",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTxtEmployeeSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxTxtEmployeeSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxTxtEmployeeSrch.setDefaultUnit(voltmx.flex.DP);
            var txtEmployeeSrch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtEmployeeSrch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Search customer CIF or name",
                "secureTextEntry": false,
                "skin": "sknTxtBxf6f8fa",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "sknPlaceHdr"
            });
            var imgEmpSrch = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgEmpSrch",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "icon_srch.png",
                "top": "0dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTxtEmployeeSrch.add(txtEmployeeSrch, imgEmpSrch);
            flxEmployeeSrch.add(lblEmployeeSrch, flxTxtEmployeeSrch);
            var flxEmployeeEntry = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "12dp",
                "gutterY": "16dp",
                "clipBounds": false,
                "id": "flxEmployeeEntry",
                "isVisible": false,
                "layoutType": voltmx.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "padding": [16, 0, 16, 16],
                "paddingInPixel": true
            }, {});
            flxEmployeeEntry.setDefaultUnit(voltmx.flex.DP);
            var flxSrchScheme = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSrchScheme",
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
                        "640": 12,
                        "1024": 12,
                        "1366": 12
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrchScheme.setDefaultUnit(voltmx.flex.DP);
            var lblSrchScheme = new voltmx.ui.Label({
                "id": "lblSrchScheme",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "SEARCH SCHEME",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTxtSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxTxtSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxTxtSrch.setDefaultUnit(voltmx.flex.DP);
            var txtSrchScheme = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtSrchScheme",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Sewarch scheme ID, scheme name, CIF, or company",
                "secureTextEntry": false,
                "skin": "sknTxtBxf6f8fa",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "sknPlaceHdr"
            });
            var imgSrch = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgSrch",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "icon_srch.png",
                "top": "0dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTxtSrch.add(txtSrchScheme, imgSrch);
            flxSrchScheme.add(lblSrchScheme, flxTxtSrch);
            var flxEmpCIFNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpCIFNumber",
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
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpCIFNumber.setDefaultUnit(voltmx.flex.DP);
            var EmpCIFNumber = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpCIFNumber",
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
                        "text": "CIF NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter CIF Number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpCIFNumber.add(EmpCIFNumber);
            var flxEmpIDNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpIDNumber",
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
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpIDNumber.setDefaultUnit(voltmx.flex.DP);
            var EmpIDNumber = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpIDNumber",
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
                        "text": "ID NUMBER"
                    },
                    "txtBox": {
                        "placeholder": "Enter ID Number",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpIDNumber.add(EmpIDNumber);
            var flxEmpCustomerName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpCustomerName",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpCustomerName.setDefaultUnit(voltmx.flex.DP);
            var EmpCustomerName = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpCustomerName",
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
                        "text": "CUSTOMER NAME"
                    },
                    "txtBox": {
                        "placeholder": "Enter Customer Name",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpCustomerName.add(EmpCustomerName);
            var flxEmpDepartmentName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpDepartmentName",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpDepartmentName.setDefaultUnit(voltmx.flex.DP);
            var EmpDepartmentName = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpDepartmentName",
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
                        "text": "DEPARTMENT NAME"
                    },
                    "txtBox": {
                        "placeholder": "Enter department",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpDepartmentName.add(EmpDepartmentName);
            var flxEmployementType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmployementType",
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
            flxEmployementType.setDefaultUnit(voltmx.flex.DP);
            var EmployementType = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "focusSkin": "slFFocusbox",
                "id": "EmployementType",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxDropDwnList": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "viz.val_cleared",
                        "right": "3dp",
                        "top": "6dp",
                        "width": "25dp"
                    },
                    "flxList": {
                        "height": "40dp"
                    },
                    "imgDropDwn": {
                        "centerY": "viz.val_cleared",
                        "height": "25px",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "25px"
                    },
                    "lblDetail": {
                        "text": "EMPLOYEMENT TYPE"
                    },
                    "listData": {
                        "masterData": [
                            ["fulltime", "Employed Full-time"],
                            ["unemp", "Unemployed"]
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
            flxEmployementType.add(EmployementType);
            var flxEmpIsActiveGovPayRoll = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpIsActiveGovPayRoll",
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
            flxEmpIsActiveGovPayRoll.setDefaultUnit(voltmx.flex.DP);
            var EmpIsActiveGovPayRoll = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "focusSkin": "slFFocusbox",
                "id": "EmpIsActiveGovPayRoll",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxDropDwnList": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "viz.val_cleared",
                        "right": "3dp",
                        "top": "6dp",
                        "width": "25dp"
                    },
                    "flxList": {
                        "height": "40dp"
                    },
                    "imgDropDwn": {
                        "centerY": "viz.val_cleared",
                        "height": "25px",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "25px"
                    },
                    "lblDetail": {
                        "text": "IS ACTIVE GOVERNMENT PAYROLL?"
                    },
                    "listData": {
                        "masterData": [
                            ["yes", "YES"],
                            ["no", "NO"]
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
            flxEmpIsActiveGovPayRoll.add(EmpIsActiveGovPayRoll);
            var flxEmpSep = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpSep",
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
                        "1024": 12,
                        "1366": 12
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpSep.setDefaultUnit(voltmx.flex.DP);
            var empSep = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "1dp",
                "id": "empSep",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "10%",
                "isModalContainer": false,
                "right": "40dp",
                "skin": "sknFlxTextBox",
                "top": "0dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            empSep.setDefaultUnit(voltmx.flex.DP);
            empSep.add();
            flxEmpSep.add(empSep);
            var flxEmpStatutoryDed = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpStatutoryDed",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpStatutoryDed.setDefaultUnit(voltmx.flex.DP);
            var EmpStatutoryDed = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpStatutoryDed",
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
                        "text": "STATUTORY DEDUCTIONS (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpStatutoryDed.add(EmpStatutoryDed);
            var flxEmpAllowances = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpAllowances",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpAllowances.setDefaultUnit(voltmx.flex.DP);
            var EMPAllowance = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EMPAllowance",
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
                        "text": "ALLOWANCES (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpAllowances.add(EMPAllowance);
            var flxOtherDeductions = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxOtherDeductions",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxOtherDeductions.setDefaultUnit(voltmx.flex.DP);
            var EmpOtherDeduction = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpOtherDeduction",
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
                        "text": "OTHER DEDUCTIONS (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxOtherDeductions.add(EmpOtherDeduction);
            var flxEmpStatndbicResv = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpStatndbicResv",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpStatndbicResv.setDefaultUnit(voltmx.flex.DP);
            var EmpStandbicResv = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpStandbicResv",
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
                        "text": "STANBIC RESERVATION (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpStatndbicResv.add(EmpStandbicResv);
            var flxEmpAffordability = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpAffordability",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpAffordability.setDefaultUnit(voltmx.flex.DP);
            var EmpAffordability = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpAffordability",
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
                        "text": "AFFORDABILITY (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpAffordability.add(EmpAffordability);
            var flxEmpSummaryOfIns = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpSummaryOfIns",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpSummaryOfIns.setDefaultUnit(voltmx.flex.DP);
            var EmpSummaryOFIns = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpSummaryOFIns",
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
                        "text": "SUMMARY OF INSTALLMENTS VALUE (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpSummaryOfIns.add(EmpSummaryOFIns);
            var flxEmpMaxLendLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpMaxLendLimit",
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
                        "1366": 6
                    }
                },
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpMaxLendLimit.setDefaultUnit(voltmx.flex.DP);
            var EmpMaxLendLimit = new com.hcl.lblText.LabelTextBox({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmpMaxLendLimit",
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
                        "text": "MAXIMUM LENDING LIMIT (KES)"
                    },
                    "txtBox": {
                        "placeholder": "Enter Amount",
                        "width": "100%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxEmpMaxLendLimit.add(EmpMaxLendLimit);
            var flxEmpProbationFlag = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxEmpProbationFlag",
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
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxEmpProbationFlag.setDefaultUnit(voltmx.flex.DP);
            var EmpProbationFlag = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "focusSkin": "slFFocusbox",
                "id": "EmpProbationFlag",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxDropDwnList": {
                        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "viz.val_cleared",
                        "right": "3dp",
                        "top": "6dp",
                        "width": "25dp"
                    },
                    "flxList": {
                        "height": "40dp"
                    },
                    "imgDropDwn": {
                        "centerY": "viz.val_cleared",
                        "height": "25px",
                        "src": "icon_dropdwn.png",
                        "top": "0dp",
                        "width": "25px"
                    },
                    "lblDetail": {
                        "text": "PROBATION FLAG"
                    },
                    "listData": {
                        "masterData": [
                            ["no", "NO"],
                            ["yes", "YES"]
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
            flxEmpProbationFlag.add(EmpProbationFlag);
            flxEmployeeEntry.add(flxSrchScheme, flxEmpCIFNumber, flxEmpIDNumber, flxEmpCustomerName, flxEmpDepartmentName, flxEmployementType, flxEmpIsActiveGovPayRoll, flxEmpSep, flxEmpStatutoryDed, flxEmpAllowances, flxOtherDeductions, flxEmpStatndbicResv, flxEmpAffordability, flxEmpSummaryOfIns, flxEmpMaxLendLimit, flxEmpProbationFlag);
            var flxSchemeSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSchemeSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "32dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxSchemeSrch.setDefaultUnit(voltmx.flex.DP);
            var CopylblEmployeeSrch0a1ee4732f84743 = new voltmx.ui.Label({
                "id": "CopylblEmployeeSrch0a1ee4732f84743",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "SEARCH SCHEME",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxTxtEmployeeSrch0aa8816fc117d4f = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "CopyflxTxtEmployeeSrch0aa8816fc117d4f",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            CopyflxTxtEmployeeSrch0aa8816fc117d4f.setDefaultUnit(voltmx.flex.DP);
            var txtSchemeSrch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "100%",
                "id": "txtSchemeSrch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Search scheme ID, scheme name, CIF, or company",
                "secureTextEntry": false,
                "skin": "sknTxtBxf6f8fa",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "sknPlaceHdr"
            });
            var CopyimgEmpSrch0gef3dd88638449 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "CopyimgEmpSrch0gef3dd88638449",
                "isVisible": true,
                "right": "15dp",
                "skin": "slImage",
                "src": "icon_srch.png",
                "top": "0dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxTxtEmployeeSrch0aa8816fc117d4f.add(txtSchemeSrch, CopyimgEmpSrch0gef3dd88638449);
            flxSchemeSrch.add(CopylblEmployeeSrch0a1ee4732f84743, CopyflxTxtEmployeeSrch0aa8816fc117d4f);
            var flxDocSelect = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDocSelect",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "32dp",
                "isModalContainer": false,
                "top": "16dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxDocSelect.setDefaultUnit(voltmx.flex.DP);
            var lblSelectDoc = new voltmx.ui.Label({
                "id": "lblSelectDoc",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "SELECT DOCUMENT TO UPLOAD",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFileChoose = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "12dp",
                "clipBounds": false,
                "height": "40dp",
                "id": "flxFileChoose",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxFileChoose.setDefaultUnit(voltmx.flex.DP);
            var flxChooseFile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxChooseFile",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxChooseFile.setDefaultUnit(voltmx.flex.DP);
            var Image0a54edc76c1b44c = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "Image0a54edc76c1b44c",
                "isVisible": true,
                "left": "16dp",
                "skin": "slImage",
                "src": "icon_upload.png",
                "top": "9dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChoose = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblChoose",
                "isVisible": true,
                "left": "83dp",
                "skin": "sknLblHeading5",
                "text": "CHOOSE FILE",
                "top": "1dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChooseFile.add(Image0a54edc76c1b44c, lblChoose);
            var flxFileDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxFileDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "13dp",
                "width": "55%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxFileDetails.setDefaultUnit(voltmx.flex.DP);
            var lblFileDetails = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblFileDetails",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblFormLevel",
                "text": "No file choosen",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFileDetails.add(lblFileDetails);
            var btnImport = new voltmx.ui.Button({
                "centerY": "50%",
                "height": "40dp",
                "id": "btnImport",
                "isVisible": true,
                "right": "5dp",
                "skin": "sknBtnBlue",
                "text": "IMPORT FILE",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxFileChoose.add(flxChooseFile, flxFileDetails, btnImport);
            flxDocSelect.add(lblSelectDoc, flxFileChoose);
            var CopyFlexContainer0acb437d183354f = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "id": "CopyFlexContainer0acb437d183354f",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "32dp",
                "isModalContainer": false,
                "top": "12dp",
                "width": "95%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0acb437d183354f.setDefaultUnit(voltmx.flex.DP);
            var lblNotes = new voltmx.ui.Label({
                "id": "lblNotes",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "REASON FOR APPROVAL",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTxtArea = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "12dp",
                "clipBounds": false,
                "height": "100dp",
                "id": "flxTxtArea",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "8dp",
                "width": "100%",
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
            CopyFlexContainer0acb437d183354f.add(lblNotes, flxTxtArea);
            var btnAddCompanyScheme = new voltmx.ui.Button({
                "bottom": "12dp",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnAddCompanyScheme",
                "isVisible": true,
                "skin": "sknBtnBlue",
                "text": "ADD COMPANY SCHEME",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 0, 24, 0],
                "paddingInPixel": true
            }, {});
            flxAddScheme.add(SubHdr, flxListMethod, flxAddMethod, flxSep, flxCompanyEntry, flxEmployeeSrch, flxEmployeeEntry, flxSchemeSrch, flxDocSelect, CopyFlexContainer0acb437d183354f, btnAddCompanyScheme);
            var flxCompanyEntries = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxCompanyEntries",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            flxCompanyEntries.setDefaultUnit(voltmx.flex.DP);
            var EntriesSubHdr = new com.hcl.subHdr.SubHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "45dp",
                "id": "EntriesSubHdr",
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
                        "text": "Company Entries"
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
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxCustomerName": {
                        "width": "15%"
                    },
                    "imgFilter": {
                        "src": "filter_list.png"
                    },
                    "lblCIFNo": {
                        "left": "10%",
                        "text": "Scheme Name"
                    },
                    "lblCustomerName": {
                        "left": "10%",
                        "text": "Company Name"
                    },
                    "lblDate": {
                        "text": "Scheme ID "
                    },
                    "lblIDNo": {
                        "left": "10%",
                        "text": "CIF No"
                    },
                    "lblReason": {
                        "left": "3%",
                        "text": "Reg ID"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxEntryData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "400dp",
                "id": "flxEntryData",
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
            flxEntryData.setDefaultUnit(voltmx.flex.DP);
            var SegSuspendList = new com.hcl.segSuspend.SegSuspendList({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "height": "100%",
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
            flxEntryData.add(SegSuspendList);
            flxCompanyEntries.add(EntriesSubHdr, flxInner, segHeader, flxEntryData);
            var FlexContainer0af80d45963f540 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "12dp",
                "clipBounds": false,
                "height": "40dp",
                "id": "FlexContainer0af80d45963f540",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "12dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "ManageScheme"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0af80d45963f540.setDefaultUnit(voltmx.flex.DP);
            var btnSubmitAddition = new voltmx.ui.Button({
                "height": "100%",
                "id": "btnSubmitAddition",
                "isVisible": true,
                "right": 0,
                "skin": "sknBtnBlue",
                "text": "SUBMIT FOR ADDITION",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            var btnDiscard = new voltmx.ui.Button({
                "height": "100%",
                "id": "btnDiscard",
                "isVisible": true,
                "right": "200dp",
                "skin": "sknBtnGrey",
                "text": "DISCARD & EXIT",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            FlexContainer0af80d45963f540.add(btnSubmitAddition, btnDiscard);
            flxScr.add(flxAddScheme, flxCompanyEntries, FlexContainer0af80d45963f540);
            flxRight.add(FormHeader, flxScr);
            flxMain.add(flxLeft, flxRight);
            var flxSchDetailsPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "flxSchDetailsPopup",
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
            flxSchDetailsPopup.setDefaultUnit(voltmx.flex.DP);
            var flxSchemeDetailsPopup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": false,
                "height": "65%",
                "id": "flxSchemeDetailsPopup",
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
            flxSchemeDetailsPopup.setDefaultUnit(voltmx.flex.DP);
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
                "text": "Scheme Details",
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
                "gutterY": "24dp",
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
            var flxGridSchemeId = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridSchemeId",
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
            flxGridSchemeId.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "2345678324"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridSchemeId.add(SchemeID);
            var flxGridSchemeName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridSchemeName",
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
            flxGridSchemeName.setDefaultUnit(voltmx.flex.DP);
            var SchemeNamePopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SchemeNamePopup",
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
                        "text": "HCL Software"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridSchemeName.add(SchemeNamePopup);
            flxPopupResGrid.add(flxGridSchemeId, flxGridSchemeName);
            var CopyflxSep0b55cd75a3b1e42 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "1dp",
                "id": "CopyflxSep0b55cd75a3b1e42",
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
            CopyflxSep0b55cd75a3b1e42.setDefaultUnit(voltmx.flex.DP);
            CopyflxSep0b55cd75a3b1e42.add();
            var flxPopupResGrid1 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "gutterX": "16dp",
                "gutterY": "24dp",
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
                "padding": [12, 0, 12, 24],
                "paddingInPixel": true
            }, {});
            flxPopupResGrid1.setDefaultUnit(voltmx.flex.DP);
            var flxGridCIFNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridCIFNumber",
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
            flxGridCIFNumber.setDefaultUnit(voltmx.flex.DP);
            var CIFNumberPopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "CIFNumberPopup",
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
                        "text": "54679320"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridCIFNumber.add(CIFNumberPopup);
            var flxGridHidden = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridHidden",
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
            flxGridHidden.setDefaultUnit(voltmx.flex.DP);
            var Allowance = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "Allowance",
                "isVisible": false,
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
                        "isVisible": false
                    },
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
            flxGridHidden.add(Allowance);
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
            var EmployerNamePopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "EmployerNamePopup",
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
                        "text": "HCL Software America"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridEmployerName.add(EmployerNamePopup);
            var flxGridRegistrationNumber = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridRegistrationNumber",
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
            flxGridRegistrationNumber.setDefaultUnit(voltmx.flex.DP);
            var RegistrationNumberPopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "RegistrationNumberPopup",
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
                        "text": "23423434532"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridRegistrationNumber.add(RegistrationNumberPopup);
            var flxGridDesignatedContactName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridDesignatedContactName",
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
            flxGridDesignatedContactName.setDefaultUnit(voltmx.flex.DP);
            var DesigContactName = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesigContactName",
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
                        "text": "DESIGNATED CONTACT NAME"
                    },
                    "lblDetailValue": {
                        "text": "Michalle lota"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridDesignatedContactName.add(DesigContactName);
            var flxGridDesignContactTitle = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridDesignContactTitle",
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
            flxGridDesignContactTitle.setDefaultUnit(voltmx.flex.DP);
            var DesigContactTitle = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesigContactTitle",
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
                        "text": "DESIGNATED CONTACT TITLE"
                    },
                    "lblDetailValue": {
                        "text": "HR Benefits Manger"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridDesignContactTitle.add(DesigContactTitle);
            var flxGridDesgContactPhone = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridDesgContactPhone",
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
            flxGridDesgContactPhone.setDefaultUnit(voltmx.flex.DP);
            var DesigContactPhonePopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesigContactPhonePopup",
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
                        "text": "DESIGNATED CONTACT PHONE"
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
            flxGridDesgContactPhone.add(DesigContactPhonePopup);
            var flxGridDesgContactEmail = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridDesgContactEmail",
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
            flxGridDesgContactEmail.setDefaultUnit(voltmx.flex.DP);
            var DesgContactEmailPopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "DesgContactEmailPopup",
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
                        "isVisible": true
                    },
                    "lblDetail": {
                        "text": "DESIGNATED CONTACT EMAIL"
                    },
                    "lblDetailValue": {
                        "text": "hrbenfits@hcl.coms"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridDesgContactEmail.add(DesgContactEmailPopup);
            var flxMaxSpndLimit = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxMaxSpndLimit",
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
            flxMaxSpndLimit.setDefaultUnit(voltmx.flex.DP);
            var MaxSpndLimit = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "MaxSpndLimit",
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
                        "isVisible": true
                    },
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
            flxMaxSpndLimit.add(MaxSpndLimit);
            var flxGridSuspendStatus = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxGridSuspendStatus",
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
            flxGridSuspendStatus.setDefaultUnit(voltmx.flex.DP);
            var SuspendStatusPopup = new com.hcl.labelField.LabelsField({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SuspendStatusPopup",
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
                        "isVisible": true
                    },
                    "lblDetail": {
                        "text": "SUSPEND STATUS"
                    },
                    "lblDetailValue": {
                        "text": "Approved"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridSuspendStatus.add(SuspendStatusPopup);
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
                        "text": "-"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxGridComments.add(Comments);
            flxPopupResGrid1.add(flxGridCIFNumber, flxGridHidden, flxGridEmployerName, flxGridRegistrationNumber, flxGridDesignatedContactName, flxGridDesignContactTitle, flxGridDesgContactPhone, flxGridDesgContactEmail, flxMaxSpndLimit, flxGridSuspendStatus, flxGridComments);
            flxPopupSrc.add(flxPopupResGrid, CopyflxSep0b55cd75a3b1e42, flxPopupResGrid1);
            flxSchemeDetailsPopup.add(flxPopupHdr, flxPopupSrc);
            flxSchDetailsPopup.add(flxSchemeDetailsPopup);
            var flxAlert = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
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
                "FormHeader.lblHdr": {
                    "text": "Remove Scheme"
                },
                "SubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr.lblSubHdr": {
                    "text": "Remove Scheme"
                },
                "AddMethod.flxDropDwnList": {
                    "height": "35px",
                    "right": "3dp",
                    "top": "2dp"
                },
                "AddMethod.imgDropDwn": {
                    "src": "icon_dropdwn.png"
                },
                "AddMethod.lblDetail": {
                    "text": "REMOVE METHOD"
                },
                "AddMethod.listData": {
                    "width": "100%"
                },
                "SchemeName.lblText": {
                    "text": "SCHEME NAME",
                    "width": "100%"
                },
                "SchemeName.txtBox": {
                    "width": "100%"
                },
                "SchemeNumber.lblText": {
                    "text": "SCHEME NUMBER"
                },
                "SchemeNumber.txtBox": {
                    "width": "100%"
                },
                "EmployerName.lblText": {
                    "text": "EMPLOYER NAME"
                },
                "EmployerName.txtBox": {
                    "width": "100%"
                },
                "CIFNumber.lblText": {
                    "text": "CIF NUMBER"
                },
                "CIFNumber.txtBox": {
                    "width": "100%"
                },
                "RegistrationNumber.lblText": {
                    "text": "REGISTRATION NUMBER"
                },
                "RegistrationNumber.txtBox": {
                    "width": "100%"
                },
                "DesignatedContName.lblText": {
                    "text": "DESIGNATED CONTACT NAME"
                },
                "DesignatedContName.txtBox": {
                    "width": "100%"
                },
                "DesignatedContactTitle.lblText": {
                    "text": "DESIGNATED CONTACT TITLE"
                },
                "DesignatedContactTitle.txtBox": {
                    "width": "100%"
                },
                "DesignatedCOntactPhone.lblText": {
                    "text": "DESIGNATED CONTACT PHONE"
                },
                "DesignatedCOntactPhone.txtBox": {
                    "width": "100%"
                },
                "DesignatedContactEmail.lblText": {
                    "text": "DESIGNATED CONTACT EMAIL"
                },
                "DesignatedContactEmail.txtBox": {
                    "width": "100%"
                },
                "MaxLendLimit.lblText": {
                    "text": "MAXIMUM LENDING LIMIT (KES)"
                },
                "MaxLendLimit.txtBox": {
                    "width": "100%"
                },
                "SuspendStatus.flxDropDwnList": {
                    "centerX": "",
                    "centerY": "",
                    "left": "",
                    "right": "3dp",
                    "top": "6dp",
                    "width": "25dp"
                },
                "SuspendStatus.flxList": {
                    "height": "40dp"
                },
                "SuspendStatus.imgDropDwn": {
                    "centerY": "",
                    "height": "25px",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "25px"
                },
                "SuspendStatus.lblDetail": {
                    "text": "SUSPEND STATUS"
                },
                "SuspendStatus.listData": {
                    "width": "100%"
                },
                "EmpCIFNumber.lblText": {
                    "text": "CIF NUMBER"
                },
                "EmpCIFNumber.txtBox": {
                    "width": "100%"
                },
                "EmpIDNumber.lblText": {
                    "text": "ID NUMBER"
                },
                "EmpIDNumber.txtBox": {
                    "width": "100%"
                },
                "EmpCustomerName.lblText": {
                    "text": "CUSTOMER NAME"
                },
                "EmpCustomerName.txtBox": {
                    "width": "100%"
                },
                "EmpDepartmentName.lblText": {
                    "text": "DEPARTMENT NAME"
                },
                "EmpDepartmentName.txtBox": {
                    "width": "100%"
                },
                "EmployementType.flxDropDwnList": {
                    "centerX": "",
                    "centerY": "",
                    "left": "",
                    "right": "3dp",
                    "top": "6dp",
                    "width": "25dp"
                },
                "EmployementType.flxList": {
                    "height": "40dp"
                },
                "EmployementType.imgDropDwn": {
                    "centerY": "",
                    "height": "25px",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "25px"
                },
                "EmployementType.lblDetail": {
                    "text": "EMPLOYEMENT TYPE"
                },
                "EmployementType.listData": {
                    "width": "100%"
                },
                "EmpIsActiveGovPayRoll.flxDropDwnList": {
                    "centerX": "",
                    "centerY": "",
                    "left": "",
                    "right": "3dp",
                    "top": "6dp",
                    "width": "25dp"
                },
                "EmpIsActiveGovPayRoll.flxList": {
                    "height": "40dp"
                },
                "EmpIsActiveGovPayRoll.imgDropDwn": {
                    "centerY": "",
                    "height": "25px",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "25px"
                },
                "EmpIsActiveGovPayRoll.lblDetail": {
                    "text": "IS ACTIVE GOVERNMENT PAYROLL?"
                },
                "EmpIsActiveGovPayRoll.listData": {
                    "width": "100%"
                },
                "EmpStatutoryDed.lblText": {
                    "text": "STATUTORY DEDUCTIONS (KES)"
                },
                "EmpStatutoryDed.txtBox": {
                    "width": "100%"
                },
                "EMPAllowance.lblText": {
                    "text": "ALLOWANCES (KES)"
                },
                "EMPAllowance.txtBox": {
                    "width": "100%"
                },
                "EmpOtherDeduction.lblText": {
                    "text": "OTHER DEDUCTIONS (KES)"
                },
                "EmpOtherDeduction.txtBox": {
                    "width": "100%"
                },
                "EmpStandbicResv.lblText": {
                    "text": "STANBIC RESERVATION (KES)"
                },
                "EmpStandbicResv.txtBox": {
                    "width": "100%"
                },
                "EmpAffordability.lblText": {
                    "text": "AFFORDABILITY (KES)"
                },
                "EmpAffordability.txtBox": {
                    "width": "100%"
                },
                "EmpSummaryOFIns.lblText": {
                    "text": "SUMMARY OF INSTALLMENTS VALUE (KES)"
                },
                "EmpSummaryOFIns.txtBox": {
                    "width": "100%"
                },
                "EmpMaxLendLimit.lblText": {
                    "text": "MAXIMUM LENDING LIMIT (KES)"
                },
                "EmpMaxLendLimit.txtBox": {
                    "width": "100%"
                },
                "EmpProbationFlag.flxDropDwnList": {
                    "centerX": "",
                    "centerY": "",
                    "left": "",
                    "right": "3dp",
                    "top": "6dp",
                    "width": "25dp"
                },
                "EmpProbationFlag.flxList": {
                    "height": "40dp"
                },
                "EmpProbationFlag.imgDropDwn": {
                    "centerY": "",
                    "height": "25px",
                    "src": "icon_dropdwn.png",
                    "top": "0dp",
                    "width": "25px"
                },
                "EmpProbationFlag.lblDetail": {
                    "text": "PROBATION FLAG"
                },
                "EmpProbationFlag.listData": {
                    "width": "100%"
                },
                "EntriesSubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "EntriesSubHdr.lblSubHdr": {
                    "text": "Company Entries"
                },
                "segHeader.flxCustomerName": {
                    "width": "15%"
                },
                "segHeader.imgFilter": {
                    "src": "filter_list.png"
                },
                "segHeader.lblCIFNo": {
                    "left": "10%",
                    "text": "Scheme Name"
                },
                "segHeader.lblCustomerName": {
                    "left": "10%",
                    "text": "Company Name"
                },
                "segHeader.lblDate": {
                    "text": "Scheme ID "
                },
                "segHeader.lblIDNo": {
                    "left": "10%",
                    "text": "CIF No"
                },
                "segHeader.lblReason": {
                    "left": "3%",
                    "text": "Reg ID"
                },
                "SchemeID.lblDetail": {
                    "text": "SCHEME ID"
                },
                "SchemeID.lblDetailValue": {
                    "text": "2345678324"
                },
                "SchemeNamePopup.lblDetail": {
                    "text": "SCHEME NAME"
                },
                "SchemeNamePopup.lblDetailValue": {
                    "text": "HCL Software"
                },
                "CIFNumberPopup.lblDetail": {
                    "text": "CIF NUMBER"
                },
                "CIFNumberPopup.lblDetailValue": {
                    "text": "54679320"
                },
                "Allowance.lblDetail": {
                    "text": "ALLOWANCES (KES)"
                },
                "Allowance.lblDetailValue": {
                    "text": "500.00"
                },
                "EmployerNamePopup.lblDetail": {
                    "text": "EMPLOYER NAME"
                },
                "EmployerNamePopup.lblDetailValue": {
                    "text": "HCL Software America"
                },
                "RegistrationNumberPopup.lblDetail": {
                    "text": "REGISTRATION NUMBER"
                },
                "RegistrationNumberPopup.lblDetailValue": {
                    "text": "23423434532"
                },
                "DesigContactName.lblDetail": {
                    "text": "DESIGNATED CONTACT NAME"
                },
                "DesigContactName.lblDetailValue": {
                    "text": "Michalle lota"
                },
                "DesigContactTitle.lblDetail": {
                    "text": "DESIGNATED CONTACT TITLE"
                },
                "DesigContactTitle.lblDetailValue": {
                    "text": "HR Benefits Manger"
                },
                "DesigContactPhonePopup.lblDetail": {
                    "text": "DESIGNATED CONTACT PHONE"
                },
                "DesigContactPhonePopup.lblDetailValue": {
                    "text": "(555) 555-5555"
                },
                "DesgContactEmailPopup.lblDetail": {
                    "text": "DESIGNATED CONTACT EMAIL"
                },
                "DesgContactEmailPopup.lblDetailValue": {
                    "text": "hrbenfits@hcl.coms"
                },
                "MaxSpndLimit.lblDetail": {
                    "text": "MAXIMUM SPENDING LIMIT (KES)"
                },
                "MaxSpndLimit.lblDetailValue": {
                    "text": "2,400,000"
                },
                "SuspendStatusPopup.lblDetail": {
                    "text": "SUSPEND STATUS"
                },
                "SuspendStatusPopup.lblDetailValue": {
                    "text": "Approved"
                },
                "Comments.lblDetail": {
                    "text": "COMMENTS"
                },
                "Comments.lblDetailValue": {
                    "text": "-"
                },
                "AlertUp.imgAlert": {
                    "src": "icon_alertcheck.png"
                }
            }
            this.add(flxMain, flxSchDetailsPopup, flxAlert);
        };
        return [{
            "addWidgets": addWidgetsfrmRemoveScheme,
            "enabledForIdleTimeout": false,
            "id": "frmRemoveScheme",
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