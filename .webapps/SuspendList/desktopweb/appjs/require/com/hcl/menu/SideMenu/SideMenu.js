define(function() {
    return function(controller) {
        var SideMenu = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "focusSkin": "sknFlxTrans",
            "height": "100%",
            "id": "SideMenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "SBCommon"
        }, controller.args[0], "SideMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "SideMenu"), extendConfig({}, controller.args[2], "SideMenu"));
        SideMenu.setDefaultUnit(voltmx.flex.DP);
        var flxSideMenu = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFFocusbox",
            "height": "100%",
            "id": "flxSideMenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "60dp",
            "appName": "SBCommon"
        }, controller.args[0], "flxSideMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSideMenu"), extendConfig({}, controller.args[2], "flxSideMenu"));
        flxSideMenu.setDefaultUnit(voltmx.flex.DP);
        var flxLogo = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "120dp",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "top": "0dp",
            "width": "200dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxLogo"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLogo"), extendConfig({}, controller.args[2], "flxLogo"));
        flxLogo.setDefaultUnit(voltmx.flex.DP);
        var imgLogo = new voltmx.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100dp",
            "id": "imgLogo",
            "isVisible": true,
            "skin": "slImage",
            "src": "sblogo.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogo"), extendConfig({}, controller.args[2], "imgLogo"));
        flxLogo.add(imgLogo);
        var flxSegMenu = new voltmx.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "64dp",
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "focusSkin": "sknFlxSrcTrans",
            "horizontalScrollIndicator": true,
            "id": "flxSegMenu",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": voltmx.flex.SCROLL_VERTICAL,
            "skin": "sknFlxSrcTrans",
            "top": "120dp",
            "verticalScrollIndicator": true,
            "width": "200dp",
            "zIndex": 1
        }, controller.args[0], "flxSegMenu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSegMenu"), extendConfig({}, controller.args[2], "flxSegMenu"));
        flxSegMenu.setDefaultUnit(voltmx.flex.DP);
        var segMenu = new voltmx.ui.SegmentedUI2(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
            "data": [
                [{
                        "imgIcon": "imagedrag.png",
                        "lblMenuItem": "Suspend List",
                        "lblSectionTitle": "Label"
                    },
                    [{
                        "lblMenuItem": "Master Suspend List"
                    }, {
                        "lblMenuItem": "Request List"
                    }, {
                        "lblMenuItem": "Approve List"
                    }]
                ],
                [{
                        "imgIcon": "imagedrag.png",
                        "lblMenuItem": "Customer 360",
                        "lblSectionTitle": "Label"
                    },
                    [{
                        "lblMenuItem": "Customer Data"
                    }]
                ]
            ],
            "groupCells": false,
            "id": "segMenu",
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
                "friendlyName": "flxRowItems"
            }),
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "sectionHeaderTemplate": kony.mvc.resolveNameFromContext({
                "appName": "SBCommon",
                "friendlyName": "flxSegSecHdr"
            }),
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "FlexGroup0a043cf8cc66045": "FlexGroup0a043cf8cc66045",
                "flxLine": "flxLine",
                "flxRowItems": "flxRowItems",
                "flxSegSecHdr": "flxSegSecHdr",
                "imgIcon": "imgIcon",
                "lblMenuItem": "lblMenuItem",
                "lblSectionTitle": "lblSectionTitle"
            },
            "width": "200dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "segMenu"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMenu"), extendConfig({}, controller.args[2], "segMenu"));
        flxSegMenu.add(segMenu);
        var flxUserDetails = new voltmx.ui.FlexContainer(extendConfig({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": false,
            "focusSkin": "sknFlxTrans",
            "height": "64dp",
            "id": "flxUserDetails",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxTrans",
            "width": "200dp",
            "zIndex": 1,
            "appName": "SBCommon"
        }, controller.args[0], "flxUserDetails"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxUserDetails"), extendConfig({}, controller.args[2], "flxUserDetails"));
        flxUserDetails.setDefaultUnit(voltmx.flex.DP);
        var lblUserName = new voltmx.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblUserName",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblHeading5",
            "text": "User Name",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({}, controller.args[2], "lblUserName"));
        var imgLogout = new voltmx.ui.Image2(extendConfig({
            "centerX": "85%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgLogout",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "icon_logout.png",
            "top": "0dp",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgLogout"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLogout"), extendConfig({}, controller.args[2], "imgLogout"));
        flxUserDetails.add(lblUserName, imgLogout);
        flxSideMenu.add(flxLogo, flxSegMenu, flxUserDetails);
        SideMenu.add(flxSideMenu);
        SideMenu.compInstData = {}
        return SideMenu;
    }
})