define("SuspendList/frmAddSuspend", function() {
    return function(controller) {
        function addWidgetsfrmAddSuspend() {
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
                        "text": "Add Suspend List"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSrc = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "800dp",
                "horizontalScrollIndicator": true,
                "id": "flxSrc",
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
            flxSrc.setDefaultUnit(voltmx.flex.DP);
            var flxAddSusList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxAddSusList",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxAddSusList.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "Add to Suspend List"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var ListSource = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ListSource",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "LabelList": {
                        "left": "24dp",
                        "top": "16dp",
                        "width": "96%"
                    },
                    "flxDropDwnList": {
                        "height": "25dp",
                        "right": "3dp",
                        "top": "7dp",
                        "width": "25dp"
                    },
                    "imgDropDwn": {
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "height": "25dp",
                        "left": "viz.val_cleared",
                        "right": "0dp",
                        "top": "0dp",
                        "width": "25dp"
                    },
                    "lblDetail": {
                        "text": "NEW LIST SOURCE"
                    },
                    "listData": {
                        "masterData": [
                            ["ME", "Manual Entry (max 10 items)"],
                            ["UF", "Upload File"]
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
            var flxSep = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "16dp",
                "clipBounds": false,
                "height": "1dp",
                "id": "flxSep",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "24dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSep.setDefaultUnit(voltmx.flex.DP);
            var flxLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "16dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxLine.setDefaultUnit(voltmx.flex.DP);
            flxLine.add();
            flxSep.add(flxLine);
            var ListEntry = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "ListEntry",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "LabelList": {
                        "left": "24dp",
                        "top": "16dp",
                        "width": "96%"
                    },
                    "flxDropDwnList": {
                        "height": "25dp",
                        "right": "3dp",
                        "top": "7dp",
                        "width": "25dp"
                    },
                    "imgDropDwn": {
                        "centerX": "50%",
                        "height": "25dp",
                        "left": "viz.val_cleared",
                        "right": "0dp",
                        "top": "0dp",
                        "width": "25dp"
                    },
                    "lblDetail": {
                        "text": "TYPE OF ENTRY"
                    },
                    "listData": {
                        "masterData": [
                            ["Ind", "Individual"],
                            ["Sch", "Scheme"],
                            ["Eco", "Ecosystem"]
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
            var SrchCriteria = new com.hcl.lblList.LabelList({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "id": "SrchCriteria",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "LabelList": {
                        "left": "24dp",
                        "top": "16dp",
                        "width": "96%"
                    },
                    "flxDropDwnList": {
                        "height": "25dp",
                        "right": "3dp",
                        "top": "7dp",
                        "width": "25dp"
                    },
                    "imgDropDwn": {
                        "height": "25dp",
                        "left": "viz.val_cleared",
                        "right": "0dp",
                        "width": "25dp"
                    },
                    "lblDetail": {
                        "text": "SEARCH CRITERIA"
                    },
                    "listData": {
                        "masterData": [
                            ["SC", "Scheme Code"],
                            ["SN", "Scheme Name"],
                            ["EN", "Employer Name"]
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
            var flxSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrch.setDefaultUnit(voltmx.flex.DP);
            var lblSrch = new voltmx.ui.Label({
                "bottom": "5dp",
                "id": "lblSrch",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "SEARCH",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSrchBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSrchBox",
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
            flxSrchBox.setDefaultUnit(voltmx.flex.DP);
            var txtSrch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "height": "100%",
                "id": "txtSrch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Search for customer CIF",
                "secureTextEntry": false,
                "skin": "sknTxtBxf6f8fa",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "sknPlaceHdr"
            });
            flxSrchBox.add(txtSrch);
            flxSrch.add(lblSrch, flxSrchBox);
            var flxDocs = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDocs",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxDocs.setDefaultUnit(voltmx.flex.DP);
            var lblSelDoc = new voltmx.ui.Label({
                "bottom": "5dp",
                "id": "lblSelDoc",
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
            var flxSeleDoc = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxSeleDoc",
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
            flxSeleDoc.setDefaultUnit(voltmx.flex.DP);
            var flxChooseFile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
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
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxChooseFile.setDefaultUnit(voltmx.flex.DP);
            var Image0jaada86f1e7c47 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "Image0jaada86f1e7c47",
                "isVisible": true,
                "left": "16dp",
                "skin": "slImage",
                "src": "icon_upload.png",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChooseFile = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblChooseFile",
                "isVisible": true,
                "left": "83dp",
                "skin": "sknLblHeading5",
                "text": "CHOOSE FILE",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChooseFile.add(Image0jaada86f1e7c47, lblChooseFile);
            var flxFileDetails = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxFileDetails",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "20%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxFileDetails.setDefaultUnit(voltmx.flex.DP);
            var lblFiles = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblFiles",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblFormLevel",
                "text": "No File Choosen",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFileDetails.add(lblFiles);
            var Button0j0c9290b34aa4e = new voltmx.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "40dp",
                "id": "Button0j0c9290b34aa4e",
                "isVisible": true,
                "right": "5dp",
                "skin": "sknBtnBlue",
                "text": "IMPORT FILE",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxSeleDoc.add(flxChooseFile, flxFileDetails, Button0j0c9290b34aa4e);
            flxDocs.add(lblSelDoc, flxSeleDoc);
            var flxTxtAra = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "bottom": "16dp",
                "clipBounds": false,
                "id": "flxTxtAra",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxTxtAra.setDefaultUnit(voltmx.flex.DP);
            var lblReason = new voltmx.ui.Label({
                "bottom": "5dp",
                "id": "lblReason",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "REASON FOR SUSPENSION",
                "top": "0dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxReasonTxt = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100dp",
                "id": "flxReasonTxt",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxReasonTxt.setDefaultUnit(voltmx.flex.DP);
            var txtAra = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextAreaFocus",
                "height": "100%",
                "id": "txtAra",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter reason for suspension",
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
            flxReasonTxt.add(txtAra);
            flxTxtAra.add(lblReason, flxReasonTxt);
            var btnAdd = new voltmx.ui.Button({
                "bottom": "16dp",
                "height": "40dp",
                "id": "btnAdd",
                "isVisible": true,
                "right": 16,
                "skin": "sknBtnBlue",
                "text": "ADD TO SUSPENSION ENTRIES",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            flxAddSusList.add(SubHdr, ListSource, flxSep, ListEntry, SrchCriteria, flxSrch, flxDocs, flxTxtAra, btnAdd);
            var flxSuspensionEntry = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxSuspensionEntry",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspensionEntry.setDefaultUnit(voltmx.flex.DP);
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
                        "text": "Suspension Entries"
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
                "left": "16dp",
                "isModalContainer": false,
                "right": "24dp",
                "skin": "sknFlxTrans",
                "top": "0dp",
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
                "focusSkin": "sknFlxBGEDF5FF",
                "height": "40dp",
                "id": "segHeader",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxBGEDF5FF",
                "width": "100%",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "flxCIFNo": {
                        "width": "17%"
                    },
                    "flxCustomerName": {
                        "width": "25%"
                    },
                    "flxDate": {
                        "width": "17%"
                    },
                    "flxIDNo": {
                        "width": "17%"
                    },
                    "flxReason": {
                        "isVisible": false
                    },
                    "imgFilter": {
                        "isVisible": false
                    },
                    "lblCIFNo": {
                        "text": "ID No"
                    },
                    "lblCustomerName": {
                        "text": "Reason"
                    },
                    "lblDate": {
                        "text": "CIF No"
                    },
                    "lblIDNo": {
                        "text": "Customer Name"
                    },
                    "segHeader": {
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSuspend = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "400dp",
                "id": "flxSuspend",
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
            flxSuspend.setDefaultUnit(voltmx.flex.DP);
            flxSuspend.add();
            flxSuspensionEntry.add(SubHdr1, flxInner, segHeader, flxSuspend);
            var FlexContainer0ea5b05548d784e = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": 16,
                "clipBounds": false,
                "height": "40dp",
                "id": "FlexContainer0ea5b05548d784e",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0ea5b05548d784e.setDefaultUnit(voltmx.flex.DP);
            var btnSubmit = new voltmx.ui.Button({
                "centerY": "50%",
                "height": "100%",
                "id": "btnSubmit",
                "isVisible": true,
                "right": "16dp",
                "skin": "sknBtnBlue",
                "text": "SUBMIT FOR SUSPENSION",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            var btnDiscard = new voltmx.ui.Button({
                "centerY": "50%",
                "height": "100%",
                "id": "btnDiscard",
                "isVisible": true,
                "right": "250dp",
                "skin": "sknBtnGrey",
                "text": "DISCARD & EXIT",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            FlexContainer0ea5b05548d784e.add(btnSubmit, btnDiscard);
            flxSrc.add(flxAddSusList, flxSuspensionEntry, FlexContainer0ea5b05548d784e);
            flxRight.add(FormHeader, flxSrc);
            flxMain.add(flxLeft, flxRight);
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
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxAlert.setDefaultUnit(voltmx.flex.DP);
            var AlertUp = new com.hcl.popup.AlertUp({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "centerY": "50%",
                "id": "AlertUp",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxWhiteBrd",
                "width": "400dp",
                "zIndex": 1,
                "appName": "SBCommon",
                "overrides": {
                    "AlertUp": {
                        "left": "viz.val_cleared",
                        "top": "viz.val_cleared",
                        "width": "400dp"
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
                    "text": "Add Suspend List"
                },
                "SubHdr": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr.lblSubHdr": {
                    "text": "Add to Suspend List"
                },
                "ListSource": {
                    "left": "24dp",
                    "top": "16dp",
                    "width": "96%"
                },
                "ListSource.flxDropDwnList": {
                    "height": "25dp",
                    "right": "3dp",
                    "top": "7dp",
                    "width": "25dp"
                },
                "ListSource.imgDropDwn": {
                    "centerX": "50%",
                    "centerY": "",
                    "height": "25dp",
                    "left": "",
                    "right": "0dp",
                    "top": "0dp",
                    "width": "25dp"
                },
                "ListSource.lblDetail": {
                    "text": "NEW LIST SOURCE"
                },
                "ListSource.listData": {
                    "width": "100%"
                },
                "ListEntry": {
                    "left": "24dp",
                    "top": "16dp",
                    "width": "96%"
                },
                "ListEntry.flxDropDwnList": {
                    "height": "25dp",
                    "right": "3dp",
                    "top": "7dp",
                    "width": "25dp"
                },
                "ListEntry.imgDropDwn": {
                    "centerX": "50%",
                    "height": "25dp",
                    "left": "",
                    "right": "0dp",
                    "top": "0dp",
                    "width": "25dp"
                },
                "ListEntry.lblDetail": {
                    "text": "TYPE OF ENTRY"
                },
                "ListEntry.listData": {
                    "width": "100%"
                },
                "SrchCriteria": {
                    "left": "24dp",
                    "top": "16dp",
                    "width": "96%"
                },
                "SrchCriteria.flxDropDwnList": {
                    "height": "25dp",
                    "right": "3dp",
                    "top": "7dp",
                    "width": "25dp"
                },
                "SrchCriteria.imgDropDwn": {
                    "height": "25dp",
                    "left": "",
                    "right": "0dp",
                    "width": "25dp"
                },
                "SrchCriteria.lblDetail": {
                    "text": "SEARCH CRITERIA"
                },
                "SrchCriteria.listData": {
                    "width": "100%"
                },
                "SubHdr1": {
                    "centerY": "",
                    "top": "0dp"
                },
                "SubHdr1.lblSubHdr": {
                    "text": "Suspension Entries"
                },
                "segHeader.flxCIFNo": {
                    "width": "17%"
                },
                "segHeader.flxCustomerName": {
                    "width": "25%"
                },
                "segHeader.flxDate": {
                    "width": "17%"
                },
                "segHeader.flxIDNo": {
                    "width": "17%"
                },
                "segHeader.lblCIFNo": {
                    "text": "ID No"
                },
                "segHeader.lblCustomerName": {
                    "text": "Reason"
                },
                "segHeader.lblDate": {
                    "text": "CIF No"
                },
                "segHeader.lblIDNo": {
                    "text": "Customer Name"
                },
                "segHeader": {
                    "top": ""
                },
                "AlertUp": {
                    "left": "",
                    "top": "",
                    "width": "400dp"
                }
            }
            this.add(flxMain, flxAlert);
        };
        return [{
            "addWidgets": addWidgetsfrmAddSuspend,
            "enabledForIdleTimeout": false,
            "id": "frmAddSuspend",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SuspendList",
            "info": {
                "kuid": "a409e394b4ac4113bb8749073dcc42d0"
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