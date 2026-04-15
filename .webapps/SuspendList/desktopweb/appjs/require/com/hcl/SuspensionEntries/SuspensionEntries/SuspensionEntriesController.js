define("com/hcl/SuspensionEntries/SuspensionEntries/userSuspensionEntriesController", function() {
    return {};
});
define("com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesController", ["com/hcl/SuspensionEntries/SuspensionEntries/userSuspensionEntriesController", "com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesControllerActions"], function() {
    var controller = require("com/hcl/SuspensionEntries/SuspensionEntries/userSuspensionEntriesController");
    var actions = require("com/hcl/SuspensionEntries/SuspensionEntries/SuspensionEntriesControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
