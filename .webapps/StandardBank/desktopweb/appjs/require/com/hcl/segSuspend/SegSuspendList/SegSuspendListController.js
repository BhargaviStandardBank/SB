define("com/hcl/segSuspend/SegSuspendList/userSegSuspendListController", function() {
    return {};
});
define("com/hcl/segSuspend/SegSuspendList/SegSuspendListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/segSuspend/SegSuspendList/SegSuspendListController", ["com/hcl/segSuspend/SegSuspendList/userSegSuspendListController", "com/hcl/segSuspend/SegSuspendList/SegSuspendListControllerActions"], function() {
    var controller = require("com/hcl/segSuspend/SegSuspendList/userSegSuspendListController");
    var actions = require("com/hcl/segSuspend/SegSuspendList/SegSuspendListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
