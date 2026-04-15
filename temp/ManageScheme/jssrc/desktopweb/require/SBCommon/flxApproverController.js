define("SBCommon/userflxApproverController", {
    //Type your controller code here 
});
define("SBCommon/flxApproverControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxApproverController", ["SBCommon/userflxApproverController", "SBCommon/flxApproverControllerActions"], function() {
    var controller = require("SBCommon/userflxApproverController");
    var controllerActions = ["SBCommon/flxApproverControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
