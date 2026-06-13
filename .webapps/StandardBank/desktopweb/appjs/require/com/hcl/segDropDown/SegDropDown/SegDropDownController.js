define("com/hcl/segDropDown/SegDropDown/userSegDropDownController", function() {
    return {};
});
define("com/hcl/segDropDown/SegDropDown/SegDropDownControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/segDropDown/SegDropDown/SegDropDownController", ["com/hcl/segDropDown/SegDropDown/userSegDropDownController", "com/hcl/segDropDown/SegDropDown/SegDropDownControllerActions"], function() {
    var controller = require("com/hcl/segDropDown/SegDropDown/userSegDropDownController");
    var actions = require("com/hcl/segDropDown/SegDropDown/SegDropDownControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
