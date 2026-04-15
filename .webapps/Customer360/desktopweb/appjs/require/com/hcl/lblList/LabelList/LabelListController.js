define("com/hcl/lblList/LabelList/userLabelListController", function() {
    return {};
});
define("com/hcl/lblList/LabelList/LabelListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/lblList/LabelList/LabelListController", ["com/hcl/lblList/LabelList/userLabelListController", "com/hcl/lblList/LabelList/LabelListControllerActions"], function() {
    var controller = require("com/hcl/lblList/LabelList/userLabelListController");
    var actions = require("com/hcl/lblList/LabelList/LabelListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
