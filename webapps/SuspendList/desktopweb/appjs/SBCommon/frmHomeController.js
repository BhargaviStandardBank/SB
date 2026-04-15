define("SBCommon/userfrmHomeController", {
    //Type your controller code here 
});
define("SBCommon/frmHomeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/frmHomeController", ["SBCommon/userfrmHomeController", "SBCommon/frmHomeControllerActions"], function() {
    var controller = require("SBCommon/userfrmHomeController");
    var controllerActions = ["SBCommon/frmHomeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
