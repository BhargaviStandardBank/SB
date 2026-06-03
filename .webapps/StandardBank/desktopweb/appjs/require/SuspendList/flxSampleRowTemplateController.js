define("SuspendList/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("SuspendList/flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/flxSampleRowTemplateController", ["SuspendList/userflxSampleRowTemplateController", "SuspendList/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("SuspendList/userflxSampleRowTemplateController");
    var controllerActions = ["SuspendList/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
