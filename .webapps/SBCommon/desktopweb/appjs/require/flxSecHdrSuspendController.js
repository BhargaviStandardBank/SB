define("userflxSecHdrSuspendController", {
    //Type your controller code here 
});
define("flxSecHdrSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSecHdrSuspendController", ["userflxSecHdrSuspendController", "flxSecHdrSuspendControllerActions"], function() {
    var controller = require("userflxSecHdrSuspendController");
    var controllerActions = ["flxSecHdrSuspendControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
