define("userflxContentController", {
    //Type your controller code here 
});
define("flxContentControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxContentController", ["userflxContentController", "flxContentControllerActions"], function() {
    var controller = require("userflxContentController");
    var controllerActions = ["flxContentControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
