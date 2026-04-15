define("userflxSuspensionEntryController", {
    //Type your controller code here 
});
define("flxSuspensionEntryControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSuspensionEntryController", ["userflxSuspensionEntryController", "flxSuspensionEntryControllerActions"], function() {
    var controller = require("userflxSuspensionEntryController");
    var controllerActions = ["flxSuspensionEntryControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
