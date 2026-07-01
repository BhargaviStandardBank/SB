define("SBCommon/userflxSegSecHdrController", {
    //Type your controller code here 
});
define("SBCommon/flxSegSecHdrControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSegSecHdrController", ["SBCommon/userflxSegSecHdrController", "SBCommon/flxSegSecHdrControllerActions"], function() {
    var controller = require("SBCommon/userflxSegSecHdrController");
    var controllerActions = ["SBCommon/flxSegSecHdrControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
