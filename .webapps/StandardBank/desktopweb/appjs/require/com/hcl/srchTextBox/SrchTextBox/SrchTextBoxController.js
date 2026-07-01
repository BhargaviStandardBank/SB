define("com/hcl/srchTextBox/SrchTextBox/userSrchTextBoxController", function() {
    return {};
});
define("com/hcl/srchTextBox/SrchTextBox/SrchTextBoxControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/srchTextBox/SrchTextBox/SrchTextBoxController", ["com/hcl/srchTextBox/SrchTextBox/userSrchTextBoxController", "com/hcl/srchTextBox/SrchTextBox/SrchTextBoxControllerActions"], function() {
    var controller = require("com/hcl/srchTextBox/SrchTextBox/userSrchTextBoxController");
    var actions = require("com/hcl/srchTextBox/SrchTextBox/SrchTextBoxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
