define("Customer360/userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("Customer360/flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Customer360/flxSampleRowTemplateController", ["Customer360/userflxSampleRowTemplateController", "Customer360/flxSampleRowTemplateControllerActions"], function() {
    var controller = require("Customer360/userflxSampleRowTemplateController");
    var controllerActions = ["Customer360/flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
