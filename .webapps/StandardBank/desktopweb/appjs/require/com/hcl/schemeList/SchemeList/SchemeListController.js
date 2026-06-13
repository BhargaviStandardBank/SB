define("com/hcl/schemeList/SchemeList/userSchemeListController", function() {
    return {};
});
define("com/hcl/schemeList/SchemeList/SchemeListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/schemeList/SchemeList/SchemeListController", ["com/hcl/schemeList/SchemeList/userSchemeListController", "com/hcl/schemeList/SchemeList/SchemeListControllerActions"], function() {
    var controller = require("com/hcl/schemeList/SchemeList/userSchemeListController");
    var actions = require("com/hcl/schemeList/SchemeList/SchemeListControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
