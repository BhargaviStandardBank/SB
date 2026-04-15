define("com/hcl/addSuspend/AddSuspend/userAddSuspendController", function() {
    return {};
});
define("com/hcl/addSuspend/AddSuspend/AddSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/addSuspend/AddSuspend/AddSuspendController", ["com/hcl/addSuspend/AddSuspend/userAddSuspendController", "com/hcl/addSuspend/AddSuspend/AddSuspendControllerActions"], function() {
    var controller = require("com/hcl/addSuspend/AddSuspend/userAddSuspendController");
    var actions = require("com/hcl/addSuspend/AddSuspend/AddSuspendControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
