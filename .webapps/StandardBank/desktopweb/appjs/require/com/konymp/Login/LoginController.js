define("com/konymp/Login/userLoginController", function() {
    constants.DEFAULT_MINIMUM_CHAR_LENGTH = 8;
    constants.USERNAME_VALIDATION_MESSAGE = "Username too small!";
    constants.PASSWORD_VALIDATION_MESSAGE = "Password too small!";
    constants.USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password are too small";
    constants.EMPTY_USERNAME_VALIDATION_MESSAGE = "Username cannot be empty";
    constants.EMPTY_PASSWORD_VALIDATION_MESSAGE = "Password cannot be empty";
    constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password cannot be empty";
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(basicConfig, layoutConfig, pspConfig) {
            this._usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._passwordMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._usernameValidationMsg = constants.USERNAME_VALIDATION_MESSAGE;
            this._passwordValidationMsg = constants.PASSWORD_VALIDATION_MESSAGE;
        },
        /**
         * @function validateUsername
         * @description Validates username entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validateUsername: function() {
            try {
                if (parseInt(this._usernameMinimumChar) > this.getUsername().length) {
                    this.view.txtUserName.text = this.getUsername();
                    this.view.lblError.text = constants.USERNAME_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function validatePassword
         * @description Validates password entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validatePassword: function() {
            try {
                if (parseInt(this._passwordMinimumChar) > this.getPassword().length) {
                    this.view.txtPassword.text = this.getPassword();
                    this.view.lblError.text = constants.PASSWORD_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**  
         * @function validateUsernameAndPassword
         * @description validates empty username and password
         * @private
         * @return {boolean} true/false
         */
        validateUsernameAndPassword: function() {
            var isUsernameEmpty = !this.getUsername().length;
            var isPasswordEmpty = !this.getPassword().length;
            var errorText = null;
            if (isUsernameEmpty && isPasswordEmpty) {
                errorText = constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE;
            } else if (isUsernameEmpty) {
                errorText = constants.EMPTY_USERNAME_VALIDATION_MESSAGE;
            } else if (isPasswordEmpty) {
                errorText = constants.EMPTY_PASSWORD_VALIDATION_MESSAGE;
            }
            if (!errorText) {
                var isUsernameSmall = parseInt(this._usernameMinimumChar) > this.getUsername().length;
                var isPasswordSmall = parseInt(this._passwordMinimumChar) > this.getPassword().length;
                if (isUsernameSmall && isPasswordSmall) {
                    errorText = constants.USERNAME_PASSWORD_VALIDATION_MESSAGE;
                } else if (isUsernameSmall) {
                    errorText = constants.USERNAME_VALIDATION_MESSAGE;
                } else if (isPasswordSmall) {
                    errorText = constants.PASSWORD_VALIDATION_MESSAGE;
                }
            }
            if (errorText) {
                this.view.lblError.text = errorText;
                this.view.flxError.isVisible = true;
                this.view.flxError.forceLayout();
            } else {
                this.view.flxError.isVisible = false;
            }
        },
        /**
         * @function getUsername
         * @description Returns username entered by the user
         * @public
         * @return {string} username
         */
        getUsername: function() {
            var uname = (this.view.txtUserName.text).trim();
            return uname;
        },
        /**
         * @function getPassword
         * @description Returns password entered by the user
         * @public
         * @return {string} password
         */
        getPassword: function() {
            var pwd = (this.view.txtPassword.text).trim();
            return pwd;
        }
    };
});
define("com/konymp/Login/LoginControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cf166461bc0e488b92059122e3011eb8: function AS_Button_cf166461bc0e488b92059122e3011eb8(eventobject) {
        var self = this;
        return self.validateUsernameAndPassword.call(this);
    },
    AS_Image_f64bf2c9f2904919aaff16a06464da4a: function AS_Image_f64bf2c9f2904919aaff16a06464da4a(eventobject, x, y) {
        var self = this;
        self.view.flxError.isVisible = false;
    },
    AS_FlexContainer_a461bc68fcc24df8a0fe7960ddf3558b: function AS_FlexContainer_a461bc68fcc24df8a0fe7960ddf3558b(eventobject) {
        var self = this;
        this.view.imgCHeckBox.isVisible = !this.view.imgCHeckBox.isVisible;
    },
    AS_TextField_jba7c698e7824c7693379fd6f73f080e: function AS_TextField_jba7c698e7824c7693379fd6f73f080e(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    AS_TextField_b7c2c666d6a34331ad159e529d370183: function AS_TextField_b7c2c666d6a34331ad159e529d370183(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    }
});
define("com/konymp/Login/LoginController", ["com/konymp/Login/userLoginController", "com/konymp/Login/LoginControllerActions"], function() {
    var controller = require("com/konymp/Login/userLoginController");
    var actions = require("com/konymp/Login/LoginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
