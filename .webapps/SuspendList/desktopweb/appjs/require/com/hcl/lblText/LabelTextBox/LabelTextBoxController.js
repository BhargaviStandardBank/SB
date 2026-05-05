define("com/hcl/lblText/LabelTextBox/userLabelTextBoxController", function() {
    return {};
});
define("com/hcl/lblText/LabelTextBox/LabelTextBoxControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/lblText/LabelTextBox/LabelTextBoxController", ["com/hcl/lblText/LabelTextBox/userLabelTextBoxController", "com/hcl/lblText/LabelTextBox/LabelTextBoxControllerActions"], function() {
    var controller = require("com/hcl/lblText/LabelTextBox/userLabelTextBoxController");
    var actions = require("com/hcl/lblText/LabelTextBox/LabelTextBoxControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
