define("SBCommon/userflxRowItemsController", {
    //Type your controller code here 
});
define("SBCommon/flxRowItemsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxRowItemsController", ["SBCommon/userflxRowItemsController", "SBCommon/flxRowItemsControllerActions"], function() {
    var controller = require("SBCommon/userflxRowItemsController");
    var controllerActions = ["SBCommon/flxRowItemsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
