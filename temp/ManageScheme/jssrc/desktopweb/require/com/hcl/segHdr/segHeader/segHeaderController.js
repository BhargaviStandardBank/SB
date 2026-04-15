define("com/hcl/segHdr/segHeader/usersegHeaderController", function() {
    return {};
});
define("com/hcl/segHdr/segHeader/segHeaderControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/segHdr/segHeader/segHeaderController", ["com/hcl/segHdr/segHeader/usersegHeaderController", "com/hcl/segHdr/segHeader/segHeaderControllerActions"], function() {
    var controller = require("com/hcl/segHdr/segHeader/usersegHeaderController");
    var actions = require("com/hcl/segHdr/segHeader/segHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
