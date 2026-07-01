define("com/hc/segApprover/SegApproverScheme/userSegApproverSchemeController", function() {
    return {};
});
define("com/hc/segApprover/SegApproverScheme/SegApproverSchemeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hc/segApprover/SegApproverScheme/SegApproverSchemeController", ["com/hc/segApprover/SegApproverScheme/userSegApproverSchemeController", "com/hc/segApprover/SegApproverScheme/SegApproverSchemeControllerActions"], function() {
    var controller = require("com/hc/segApprover/SegApproverScheme/userSegApproverSchemeController");
    var actions = require("com/hc/segApprover/SegApproverScheme/SegApproverSchemeControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
