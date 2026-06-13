define("com/hcl/suspenEntryHdr/SuspenEntryHdr/userSuspenEntryHdrController", function() {
    return {};
});
define("com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrController", ["com/hcl/suspenEntryHdr/SuspenEntryHdr/userSuspenEntryHdrController", "com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrControllerActions"], function() {
    var controller = require("com/hcl/suspenEntryHdr/SuspenEntryHdr/userSuspenEntryHdrController");
    var actions = require("com/hcl/suspenEntryHdr/SuspenEntryHdr/SuspenEntryHdrControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
