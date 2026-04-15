define("StandardBank/frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(voltmx.flex.DP);
            var flxLeft = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxLeft",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxLogin",
                "top": "0dp",
                "width": "70%",
                "zIndex": 5,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxLeft.setDefaultUnit(voltmx.flex.DP);
            var flxSknDup = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxSknDup",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknLoginDup",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxSknDup.setDefaultUnit(voltmx.flex.DP);
            flxSknDup.add();
            var flxData = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80%",
                "id": "flxData",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "10%",
                "width": "90%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxData.setDefaultUnit(voltmx.flex.DP);
            var lblWelcome = new voltmx.ui.Label({
                "id": "lblWelcome",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading2White",
                "text": "Welcome to Credit Risk Portal",
                "top": "100dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblWelcome0e21b7daa889c4b = new voltmx.ui.Label({
                "id": "CopylblWelcome0e21b7daa889c4b",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLblC8DFFF",
                "text": "Welcome to Credit Risk Portal",
                "top": "16dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAuth = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "44dp",
                "id": "flxAuth",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxAuth.setDefaultUnit(voltmx.flex.DP);
            var imgAlright = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "40dp",
                "id": "imgAlright",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "icon_alright.png",
                "top": "24dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAuth = new voltmx.ui.Label({
                "id": "lblAuth",
                "isVisible": true,
                "left": "50dp",
                "skin": "sknLblWhite100",
                "text": "Protect & Enable Growth",
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAuthText = new voltmx.ui.Label({
                "id": "lblAuthText",
                "isVisible": true,
                "left": "50dp",
                "skin": "sknLblC8DFFF",
                "text": "Enable sustainable, profitable growth by engineering modern, data‑driven risk capabilities that protect clients and the bank",
                "top": "25dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAuth.add(imgAlright, lblAuth, lblAuthText);
            var flxAccess = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "44dp",
                "id": "flxAccess",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxAccess.setDefaultUnit(voltmx.flex.DP);
            var imgAlright1 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "40dp",
                "id": "imgAlright1",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "icon_alright.png",
                "top": "24dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAccess = new voltmx.ui.Label({
                "id": "lblAccess",
                "isVisible": true,
                "left": "50dp",
                "skin": "sknLblWhite100",
                "text": "Transform Risk Capabilities",
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAccessText = new voltmx.ui.Label({
                "id": "lblAccessText",
                "isVisible": true,
                "left": "50dp",
                "skin": "sknLblC8DFFF",
                "text": "Design, build, and operate risk solutions that turn strategy, policy, and risk appetite into reliable, scalable execution",
                "top": "25dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccess.add(imgAlright1, lblAccess, lblAccessText);
            var flxAvailable = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "44dp",
                "id": "flxAvailable",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "32dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxAvailable.setDefaultUnit(voltmx.flex.DP);
            var imgAlright2 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "40dp",
                "id": "imgAlright2",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "icon_alright.png",
                "top": "24dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAvailable = new voltmx.ui.Label({
                "id": "lblAvailable",
                "isVisible": true,
                "left": "50dp",
                "skin": "sknLblWhite100",
                "text": "Deliver exceptional client experience",
                "top": "5dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAvailableText = new voltmx.ui.Label({
                "id": "lblAvailableText",
                "isVisible": true,
                "left": "50dp",
                "skin": "sknLblC8DFFF",
                "text": "Our work makes risk decisioning easy, fast, and safe at scale.",
                "top": "25dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAvailable.add(imgAlright2, lblAvailable, lblAvailableText);
            flxData.add(lblWelcome, CopylblWelcome0e21b7daa889c4b, flxAuth, flxAccess, flxAvailable);
            flxLeft.add(flxSknDup, flxData);
            var imgLogin = new voltmx.ui.Image2({
                "height": "100%",
                "id": "imgLogin",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "login_img.png",
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRight = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxRight",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "left": "70%",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxRight.setDefaultUnit(voltmx.flex.DP);
            var flxHdr = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "48dp",
                "id": "flxHdr",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "20dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxHdr.setDefaultUnit(voltmx.flex.DP);
            var Image0ac9ec7023fc445 = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "40dp",
                "id": "Image0ac9ec7023fc445",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "sblogo.png",
                "top": "9dp",
                "width": "40dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHdr = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblHdr",
                "isVisible": true,
                "left": "0dp",
                "right": "0dp",
                "skin": "sknLblHdr",
                "text": "Standard Bank",
                "top": "0dp",
                "width": "74.95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 5, 0],
                "paddingInPixel": false
            }, {});
            flxHdr.add(Image0ac9ec7023fc445, lblHdr);
            var flxContent = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "612dp",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": voltmx.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "20dp",
                "width": "80%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxContent.setDefaultUnit(voltmx.flex.DP);
            var lblLogin = new voltmx.ui.Label({
                "id": "lblLogin",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblHeading2",
                "text": "Login",
                "top": "60dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblText = new voltmx.ui.Label({
                "id": "lblText",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Enter your username or registered email ID",
                "top": "4dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUserName = new voltmx.ui.Label({
                "id": "lblUserName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Username / Email",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUserName = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "40dp",
                "id": "flxUserName",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxUserName.setDefaultUnit(voltmx.flex.DP);
            var imgUser = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgUser",
                "isVisible": true,
                "left": "12dp",
                "skin": "slImage",
                "src": "icon_user.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtUserName = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTxtBxTrans",
                "height": "35dp",
                "id": "txtUserName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "12%",
                "placeholder": "Enter",
                "secureTextEntry": false,
                "skin": "sknTxtBxTrans",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "87%",
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
            flxUserName.add(imgUser, txtUserName);
            var lblPassword = new voltmx.ui.Label({
                "id": "lblPassword",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFormLevel",
                "text": "Password",
                "top": "12dp",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxPassword = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "40dp",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxTextBox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxPassword.setDefaultUnit(voltmx.flex.DP);
            var imgPwd = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgPwd",
                "isVisible": true,
                "left": "12dp",
                "skin": "slImage",
                "src": "icon_password.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtPwd = new voltmx.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTxtBxTrans",
                "height": "35dp",
                "id": "txtPwd",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "12%",
                "placeholder": "Enter",
                "secureTextEntry": false,
                "skin": "sknTxtBxTrans",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "77%",
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
            var imgView = new voltmx.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgView",
                "isVisible": true,
                "left": "90%",
                "skin": "slImage",
                "src": "icon_view.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPassword.add(imgPwd, txtPwd, imgView);
            var flxRememberMe = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxRememberMe",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "12dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            flxRememberMe.setDefaultUnit(voltmx.flex.DP);
            var lblRememberme = new voltmx.ui.Label({
                "centerY": "50%",
                "id": "lblRememberme",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblFormLevel",
                "text": "Remember me",
                "width": voltmx.flex.USE_PREFERRED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var switchRemember = new voltmx.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchRemember",
                "isVisible": true,
                "leftSideText": "ON",
                "right": "2dp",
                "rightSideText": "OFF",
                "selectedIndex": 0,
                "skin": "sknSwt",
                "top": "0dp",
                "width": "100dp",
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRememberMe.add(lblRememberme, switchRemember);
            var btnLogin = new voltmx.ui.Button({
                "centerX": "50%",
                "height": "40dp",
                "id": "btnLogin",
                "isVisible": true,
                "skin": "sknBtnBlue",
                "text": "Login",
                "top": "12dp",
                "width": "340dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [24, 4, 24, 4],
                "paddingInPixel": true
            }, {});
            var FlexContainer0i93570251bf644 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "44dp",
                "id": "FlexContainer0i93570251bf644",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "StandardBank"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0i93570251bf644.setDefaultUnit(voltmx.flex.DP);
            var lblForgotPwd = new voltmx.ui.Label({
                "height": "100%",
                "id": "lblForgotPwd",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblBtn",
                "text": "Forgot Password",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0i93570251bf644.add(lblForgotPwd);
            flxContent.add(lblLogin, lblText, lblUserName, flxUserName, lblPassword, flxPassword, flxRememberMe, btnLogin, FlexContainer0i93570251bf644);
            flxRight.add(flxHdr, flxContent);
            this.compInstData = {}
            this.add(flxLeft, imgLogin, flxRight);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "StandardBank"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});