define("com/hcl/dropDown/DropDown/userDropDownController", function() {
    return {};
});
define("com/hcl/dropDown/DropDown/DropDownControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/dropDown/DropDown/DropDownController", ["com/hcl/dropDown/DropDown/userDropDownController", "com/hcl/dropDown/DropDown/DropDownControllerActions"], function() {
    var controller = require("com/hcl/dropDown/DropDown/userDropDownController");
    var actions = require("com/hcl/dropDown/DropDown/DropDownControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
