define("SBCommon/userflxAddSuspendRowController", {
    //Type your controller code here 
});
define("SBCommon/flxAddSuspendRowControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxAddSuspendRowController", ["SBCommon/userflxAddSuspendRowController", "SBCommon/flxAddSuspendRowControllerActions"], function() {
    var controller = require("SBCommon/userflxAddSuspendRowController");
    var controllerActions = ["SBCommon/flxAddSuspendRowControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
