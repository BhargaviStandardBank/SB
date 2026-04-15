define("SBCommon/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("SBCommon/flxSampleRowTemplateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSampleRowTemplateController", ["SBCommon/userflxSampleRowTemplateController", "SBCommon/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("SBCommon/userflxSampleRowTemplateController");
    var controllerActions = ["SBCommon/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
