define("com/hcl/subHdr/SubHdr/userSubHdrController", function() {
    return {};
});
define("com/hcl/subHdr/SubHdr/SubHdrControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/subHdr/SubHdr/SubHdrController", ["com/hcl/subHdr/SubHdr/userSubHdrController", "com/hcl/subHdr/SubHdr/SubHdrControllerActions"], function() {
    var controller = require("com/hcl/subHdr/SubHdr/userSubHdrController");
    var actions = require("com/hcl/subHdr/SubHdr/SubHdrControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
