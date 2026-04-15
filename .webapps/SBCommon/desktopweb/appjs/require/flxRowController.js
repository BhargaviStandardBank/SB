define("userflxRowController", {
    //Type your controller code here 
});
define("flxRowControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxRowController", ["userflxRowController", "flxRowControllerActions"], function() {
    var controller = require("userflxRowController");
    var controllerActions = ["flxRowControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
