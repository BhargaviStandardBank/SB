define("userflxSegSecHdrController", {
    //Type your controller code here 
});
define("flxSegSecHdrControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegSecHdrController", ["userflxSegSecHdrController", "flxSegSecHdrControllerActions"], function() {
    var controller = require("userflxSegSecHdrController");
    var controllerActions = ["flxSegSecHdrControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
