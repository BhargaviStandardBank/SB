define("SBCommon/userflxSuspensionEntryController", {
    //Type your controller code here 
});
define("SBCommon/flxSuspensionEntryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSuspensionEntryController", ["SBCommon/userflxSuspensionEntryController", "SBCommon/flxSuspensionEntryControllerActions"], function() {
    var controller = require("SBCommon/userflxSuspensionEntryController");
    var controllerActions = ["SBCommon/flxSuspensionEntryControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
