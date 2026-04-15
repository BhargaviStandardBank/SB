define("userflxDropDownController", {
    //Type your controller code here 
});
define("flxDropDownControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDropDownController", ["userflxDropDownController", "flxDropDownControllerActions"], function() {
    var controller = require("userflxDropDownController");
    var controllerActions = ["flxDropDownControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
