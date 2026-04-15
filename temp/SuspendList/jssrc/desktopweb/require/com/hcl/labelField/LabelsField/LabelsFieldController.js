define("com/hcl/labelField/LabelsField/userLabelsFieldController", function() {
    return {};
});
define("com/hcl/labelField/LabelsField/LabelsFieldControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/labelField/LabelsField/LabelsFieldController", ["com/hcl/labelField/LabelsField/userLabelsFieldController", "com/hcl/labelField/LabelsField/LabelsFieldControllerActions"], function() {
    var controller = require("com/hcl/labelField/LabelsField/userLabelsFieldController");
    var actions = require("com/hcl/labelField/LabelsField/LabelsFieldControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
