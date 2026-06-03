define("com/hcl/popup/AlertUp/userAlertUpController", function() {
    return {};
});
define("com/hcl/popup/AlertUp/AlertUpControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/popup/AlertUp/AlertUpController", ["com/hcl/popup/AlertUp/userAlertUpController", "com/hcl/popup/AlertUp/AlertUpControllerActions"], function() {
    var controller = require("com/hcl/popup/AlertUp/userAlertUpController");
    var actions = require("com/hcl/popup/AlertUp/AlertUpControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
