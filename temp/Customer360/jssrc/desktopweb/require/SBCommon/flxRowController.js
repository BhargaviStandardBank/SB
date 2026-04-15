define("SBCommon/userflxRowController", {
    //Type your controller code here 
});
define("SBCommon/flxRowControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxRowController", ["SBCommon/userflxRowController", "SBCommon/flxRowControllerActions"], function() {
    var controller = require("SBCommon/userflxRowController");
    var controllerActions = ["SBCommon/flxRowControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
