define("userflxRowItemsController", {
    //Type your controller code here 
});
define("flxRowItemsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRowItemsController", ["userflxRowItemsController", "flxRowItemsControllerActions"], function() {
    var controller = require("userflxRowItemsController");
    var controllerActions = ["flxRowItemsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
