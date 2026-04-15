define("SBCommon/userflxSecHdrSuspendController", {
    //Type your controller code here 
});
define("SBCommon/flxSecHdrSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSecHdrSuspendController", ["SBCommon/userflxSecHdrSuspendController", "SBCommon/flxSecHdrSuspendControllerActions"], function() {
    var controller = require("SBCommon/userflxSecHdrSuspendController");
    var controllerActions = ["SBCommon/flxSecHdrSuspendControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
