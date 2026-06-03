define("com/hcl/hdr/FormHeader/userFormHeaderController", function() {
    return {};
});
define("com/hcl/hdr/FormHeader/FormHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/hdr/FormHeader/FormHeaderController", ["com/hcl/hdr/FormHeader/userFormHeaderController", "com/hcl/hdr/FormHeader/FormHeaderControllerActions"], function() {
    var controller = require("com/hcl/hdr/FormHeader/userFormHeaderController");
    var actions = require("com/hcl/hdr/FormHeader/FormHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
