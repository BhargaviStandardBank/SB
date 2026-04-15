define("com/hcl/lblTextArea/LabelTextArea/userLabelTextAreaController", function() {
    return {};
});
define("com/hcl/lblTextArea/LabelTextArea/LabelTextAreaControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/lblTextArea/LabelTextArea/LabelTextAreaController", ["com/hcl/lblTextArea/LabelTextArea/userLabelTextAreaController", "com/hcl/lblTextArea/LabelTextArea/LabelTextAreaControllerActions"], function() {
    var controller = require("com/hcl/lblTextArea/LabelTextArea/userLabelTextAreaController");
    var actions = require("com/hcl/lblTextArea/LabelTextArea/LabelTextAreaControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
