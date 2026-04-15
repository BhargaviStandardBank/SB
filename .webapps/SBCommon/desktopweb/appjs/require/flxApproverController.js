define("userflxApproverController", {
    //Type your controller code here 
});
define("flxApproverControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApproverController", ["userflxApproverController", "flxApproverControllerActions"], function() {
    var controller = require("userflxApproverController");
    var controllerActions = ["flxApproverControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
