define("SuspendList/frmRemoveSuspend", function() {
    return function(controller) {
        function addWidgetsfrmRemoveSuspend() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxMain = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxTrans",
                "top": "0dp",
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
                "right": 0,
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
                "overrides": {}
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSrcRemoveSuspendList = new voltmx.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "98dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "focusSkin": "sknFlxSrcTrans",
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxSrcRemoveSuspendList",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "pagingEnabled": false,
                "right": "24dp",
                "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
                "skin": "sknFlxSrcTrans",
                "top": "24dp",
                "verticalScrollIndicator": true,
                "width": "96%",
                "zIndex": 1
            }, {
                "paddingInPixel": false
            }, {});
            flxSrcRemoveSuspendList.setDefaultUnit(voltmx.flex.DP);
            var flxRemoveSusList = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "sknFlxWhiteBGBlckBrdr",
                "id": "flxRemoveSusList",
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
            flxRemoveSusList.setDefaultUnit(voltmx.flex.DP);
            var flxRemoveStatusHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "50dp",
                "id": "flxRemoveStatusHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "200dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxRemoveStatusHdr.setDefaultUnit(voltmx.flex.DP);
            var lblRemoveSusList = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRemoveSusList",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "Remove From Suspend List",
                "top": "1dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveStatusHdr.add(lblRemoveSusList);
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
            var flxListSource = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "80dp",
                "id": "flxListSource",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "96%",
                "zIndex": 130,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxListSource.setDefaultUnit(voltmx.flex.DP);
            var lblListSource = new voltmx.ui.Label({
                "id": "lblListSource",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblFormLevel",
                "text": "NEW LIST SOURCE",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSelectedSource = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTextBox",
                "height": "40dp",
                "id": "flxSelectedSource",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelectedSource.setDefaultUnit(voltmx.flex.DP);
            var lblSelectedSource = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedSource",
                "isVisible": true,
                "left": "12dp",
                "skin": "sknLblFormLevel",
                "text": "Manual Entry (max 10 items)",
                "top": "2dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgListdropDwn = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgListdropDwn",
                "isVisible": true,
                "right": 12,
                "skin": "slImage",
                "src": "icon_dropdwn.png",
                "top": "98dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectedSource.add(lblSelectedSource, imgListdropDwn);
            var flxSegSourceContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "sknFlxWhite",
                "id": "flxSegSourceContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegSourceContainer.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox0e4f6c0b85bd540', 'CopyFBox0e4f6c0b85bd540', 'CopyFBox0e4f6c0b85bd540Controller', {
                "appName": "SuspendList"
            });
            var segNewListSource = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblSource": "Label"
                }],
                "groupCells": false,
                "id": "segNewListSource",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTrans",
                "rowSkin": "segTrans",
                "rowTemplate": "CopyFBox0e4f6c0b85bd540",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblSource": "lblSource"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegSourceContainer.add(segNewListSource);
            flxListSource.add(lblListSource, flxSelectedSource, flxSegSourceContainer);
            var flxSepLine = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "1dp",
                "id": "flxSepLine",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBdr",
                "top": "10dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSepLine.setDefaultUnit(voltmx.flex.DP);
            flxSepLine.add();
            var flxTypeEntry = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "80dp",
                "id": "flxTypeEntry",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "10dp",
                "width": "96%",
                "zIndex": 120,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxTypeEntry.setDefaultUnit(voltmx.flex.DP);
            var lblEntry = new voltmx.ui.Label({
                "id": "lblEntry",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblFormLevel",
                "text": "TYPE OF ENTRY",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSelectedType = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTextBox",
                "height": "40dp",
                "id": "flxSelectedType",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelectedType.setDefaultUnit(voltmx.flex.DP);
            var lblSelectedType = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedType",
                "isVisible": true,
                "left": "12dp",
                "skin": "sknLblFormLevel",
                "text": "Manual Entry (max 10 items)",
                "top": "2dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgDropDwnEntry = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgDropDwnEntry",
                "isVisible": true,
                "right": 12,
                "skin": "slImage",
                "src": "icon_dropdwn.png",
                "top": "98dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectedType.add(lblSelectedType, imgDropDwnEntry);
            var flxSegTypeContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "sknFlxWhite",
                "id": "flxSegTypeContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegTypeContainer.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox0b0f2be1354c748', 'CopyFBox0b0f2be1354c748', 'CopyFBox0b0f2be1354c748Controller', {
                "appName": "SuspendList"
            });
            var segTypeEntry = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblType": "Label"
                }],
                "groupCells": false,
                "id": "segTypeEntry",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTrans",
                "rowSkin": "segTrans",
                "rowTemplate": "CopyFBox0b0f2be1354c748",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblType": "lblType"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegTypeContainer.add(segTypeEntry);
            flxTypeEntry.add(lblEntry, flxSelectedType, flxSegTypeContainer);
            var flxSearchCriteria = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "80dp",
                "id": "flxSearchCriteria",
                "isVisible": false,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "10dp",
                "width": "96%",
                "zIndex": 120,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSearchCriteria.setDefaultUnit(voltmx.flex.DP);
            var lblSrchCriteria = new voltmx.ui.Label({
                "id": "lblSrchCriteria",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblFormLevel",
                "text": "SEARCH CRITERIA",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSelectedCriteria = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTextBox",
                "height": "40dp",
                "id": "flxSelectedCriteria",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSelectedCriteria.setDefaultUnit(voltmx.flex.DP);
            var lblSelectedCriteria = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblSelectedCriteria",
                "isVisible": true,
                "left": "12dp",
                "skin": "sknLblFormLevel",
                "text": "Manual Entry (max 10 items)",
                "top": "2dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgDrpDwn = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgDrpDwn",
                "isVisible": true,
                "right": 12,
                "skin": "slImage",
                "src": "icon_dropdwn.png",
                "top": "98dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectedCriteria.add(lblSelectedCriteria, imgDrpDwn);
            var flxSegCriteriaContainer = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "focusSkin": "sknFlxWhite",
                "id": "flxSegCriteriaContainer",
                "isVisible": false,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhite",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegCriteriaContainer.setDefaultUnit(voltmx.flex.DP);
            voltmx.mvc.registry.add('CopyFBox0d55305060deb43', 'CopyFBox0d55305060deb43', 'CopyFBox0d55305060deb43Controller', {
                "appName": "SuspendList"
            });
            var segSearchCriteria = new voltmx.ui.SegmentedUI2({
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblCriteria": "Label"
                }],
                "groupCells": false,
                "id": "segSearchCriteria",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "segTrans",
                "rowSkin": "segTrans",
                "rowTemplate": "CopyFBox0d55305060deb43",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblCriteria": "lblCriteria"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegCriteriaContainer.add(segSearchCriteria);
            flxSearchCriteria.add(lblSrchCriteria, flxSelectedCriteria, flxSegCriteriaContainer);
            var flxSrch = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "80dp",
                "id": "flxSrch",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "8dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrch.setDefaultUnit(voltmx.flex.DP);
            var lblSrch = new voltmx.ui.Label({
                "id": "lblSrch",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblFormLevel",
                "text": "SEARCH",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSrchoption = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "40dp",
                "id": "flxSrchoption",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSrchoption.setDefaultUnit(voltmx.flex.DP);
            var txtSearch = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtTransSUSMA",
                "height": "100%",
                "id": "txtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Search customer CIF, ID, or Name",
                "secureTextEntry": false,
                "skin": "sknTxtBxf6f8fa",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 3, 45, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "placeholderSkin": "sknTxtTransSUSMA"
            });
            var imgSrch = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "35dp",
                "id": "imgSrch",
                "isVisible": true,
                "right": "8dp",
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
            flxSrchoption.add(txtSearch, imgSrch);
            flxSrch.add(lblSrch, flxSrchoption);
            var flxDocUpload = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "80dp",
                "id": "flxDocUpload",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "8dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxDocUpload.setDefaultUnit(voltmx.flex.DP);
            var lblDocUpload = new voltmx.ui.Label({
                "id": "lblDocUpload",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblFormLevel",
                "text": "SELECT DOCUMENT TO UPLOAD",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUploadDoc = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "40dp",
                "id": "flxUploadDoc",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 4,
                "skin": "sknFlxTrans",
                "top": "4dp",
                "width": "99%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxUploadDoc.setDefaultUnit(voltmx.flex.DP);
            var flxChooseFile = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxUpload",
                "height": "100%",
                "id": "flxChooseFile",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBtnDW",
                "top": "0dp",
                "width": "150dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxChooseFile.setDefaultUnit(voltmx.flex.DP);
            var imgUpload = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgUpload",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "icon_upload.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChooosefile = new voltmx.ui.Label({
                "centerX": "35%",
                "centerY": "50%",
                "id": "lblChooosefile",
                "isVisible": true,
                "skin": "sknLblBtn",
                "text": "CHOOSE FILE",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxChooseFile.add(imgUpload, lblChooosefile);
            var lblFileDetails = new voltmx.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblFileDetails",
                "isVisible": true,
                "left": "150dp",
                "skin": "sknLblFormLevel",
                "text": "No file choosen",
                "top": "6dp",
                "width": "500dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnImportFile = new voltmx.ui.Button({
                "focusSkin": "sknBtnBlue",
                "height": "100%",
                "id": "btnImportFile",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnBlue",
                "text": "IMPORT FILES",
                "top": "0dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUploadDoc.add(flxChooseFile, lblFileDetails, btnImportFile);
            flxDocUpload.add(lblDocUpload, flxUploadDoc);
            var flxReason = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "15dp",
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "150dp",
                "id": "flxReason",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "8dp",
                "width": "96%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxReason.setDefaultUnit(voltmx.flex.DP);
            var lblReason = new voltmx.ui.Label({
                "id": "lblReason",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLblFormLevel",
                "text": "REASON FOR SUSPENSION",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxReasonBox = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "120dp",
                "id": "flxReasonBox",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxReasonBox.setDefaultUnit(voltmx.flex.DP);
            var txtAraReason = new voltmx.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtAraGrey",
                "height": "100%",
                "id": "txtAraReason",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "numberOfVisibleLines": 3,
                "placeholder": "Enter Reason for suspension",
                "skin": "sknTxtAraGrey",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [1, 1, 1, 1],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "sknTxtAraPlaceHdr"
            });
            flxReasonBox.add(txtAraReason);
            flxReason.add(lblReason, flxReasonBox);
            var btnRemoveEntry = new voltmx.ui.Button({
                "bottom": "15dp",
                "centerX": "85%",
                "focusSkin": "sknBtnBlue",
                "height": "50dp",
                "id": "btnRemoveEntry",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknBtnBlue",
                "text": "ADD TO REMOVAL ENTRIES",
                "top": "0dp",
                "width": "290dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemoveSusList.add(flxRemoveStatusHdr, flxSeparator, flxListSource, flxSepLine, flxTypeEntry, flxSearchCriteria, flxSrch, flxDocUpload, flxReason, btnRemoveEntry);
            var flxSuspensionEntry = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "12dp",
                "clipBounds": false,
                "focusSkin": "sknFlxWhiteBGBlckBrdr",
                "height": "50%",
                "id": "flxSuspensionEntry",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBGBlckBrdr",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspensionEntry.setDefaultUnit(voltmx.flex.DP);
            var flxSuspensionHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "50dp",
                "id": "flxSuspensionHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "left": "24dp",
                "isModalContainer": false,
                "right": 24,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "200dp",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSuspensionHdr.setDefaultUnit(voltmx.flex.DP);
            var lblRemovalEntryHdr = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRemovalEntryHdr",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading4Bold",
                "text": "Removal Entries",
                "top": "1dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSuspensionHdr.add(lblRemovalEntryHdr);
            var flxSep = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxWhiteBdr",
                "height": "1dp",
                "id": "flxSep",
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
            flxSep.setDefaultUnit(voltmx.flex.DP);
            var CopyflxSeparator0g5f39bbc2ef049 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "1dp",
                "id": "CopyflxSeparator0g5f39bbc2ef049",
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
            CopyflxSeparator0g5f39bbc2ef049.setDefaultUnit(voltmx.flex.DP);
            CopyflxSeparator0g5f39bbc2ef049.add();
            flxSep.add(CopyflxSeparator0g5f39bbc2ef049);
            var flxInner = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
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
            var SuspenEntryHdr = new com.hcl.suspenEntryHdr.SuspenEntryHdr({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "50px",
                "id": "SuspenEntryHdr",
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
                    "lblCIFNO": {
                        "left": "2%"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxSegData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "300dp",
                "id": "flxSegData",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxSegData.setDefaultUnit(voltmx.flex.DP);
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
            flxSegData.add(SuspensionEntries);
            flxSuspensionEntry.add(flxSuspensionHdr, flxSep, flxInner, SuspenEntryHdr, flxSegData);
            var flxButtons = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "bottom": "30dp",
                "clipBounds": false,
                "focusSkin": "sknFlxTrans",
                "height": "10%",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "right": "0",
                "skin": "sknFlxTrans",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "SuspendList"
            }, {
                "paddingInPixel": false
            }, {});
            flxButtons.setDefaultUnit(voltmx.flex.DP);
            var btnRemoveExist = new voltmx.ui.Button({
                "focusSkin": "sknBtnGrey",
                "height": "50dp",
                "id": "btnRemoveExist",
                "isVisible": true,
                "right": 290,
                "skin": "sknBtnGrey",
                "text": "DISCARD & EXIST",
                "top": "16dp",
                "width": "180dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnRemoveSubmit = new voltmx.ui.Button({
                "focusSkin": "sknBtnBlue",
                "height": "50dp",
                "id": "btnRemoveSubmit",
                "isVisible": true,
                "right": 20,
                "skin": "sknBtnBlue",
                "text": "SUBMIT FOR REMOVAL",
                "top": "16dp",
                "width": "255dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButtons.add(btnRemoveExist, btnRemoveSubmit);
            flxSrcRemoveSuspendList.add(flxRemoveSusList, flxSuspensionEntry, flxButtons);
            flxRight.add(FormHeader, flxSrcRemoveSuspendList);
            flxMain.add(SideMenu, flxRight);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "SuspenEntryHdr.lblCIFNO": {
                    "left": "2%"
                }
            }
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmRemoveSuspend,
            "enabledForIdleTimeout": false,
            "id": "frmRemoveSuspend",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBG",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SuspendList",
            "info": {
                "kuid": "f78a4ff587e14e07931342f33674083b"
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