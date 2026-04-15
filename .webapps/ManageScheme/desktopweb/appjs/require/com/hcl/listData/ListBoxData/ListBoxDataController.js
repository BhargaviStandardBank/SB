define("com/hcl/listData/ListBoxData/userListBoxDataController", function() {
    return {};
});
define("com/hcl/listData/ListBoxData/ListBoxDataControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/listData/ListBoxData/ListBoxDataController", ["com/hcl/listData/ListBoxData/userListBoxDataController", "com/hcl/listData/ListBoxData/ListBoxDataControllerActions"], function() {
    var controller = require("com/hcl/listData/ListBoxData/userListBoxDataController");
    var actions = require("com/hcl/listData/ListBoxData/ListBoxDataControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
