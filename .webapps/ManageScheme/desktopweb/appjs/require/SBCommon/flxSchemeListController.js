define("SBCommon/userflxSchemeListController", {
    //Type your controller code here 
});
define("SBCommon/flxSchemeListControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SBCommon/flxSchemeListController", ["SBCommon/userflxSchemeListController", "SBCommon/flxSchemeListControllerActions"], function() {
    var controller = require("SBCommon/userflxSchemeListController");
    var controllerActions = ["SBCommon/flxSchemeListControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
