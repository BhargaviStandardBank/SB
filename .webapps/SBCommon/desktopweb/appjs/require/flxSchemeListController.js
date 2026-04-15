define("userflxSchemeListController", {
    //Type your controller code here 
});
define("flxSchemeListControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSchemeListController", ["userflxSchemeListController", "flxSchemeListControllerActions"], function() {
    var controller = require("userflxSchemeListController");
    var controllerActions = ["flxSchemeListControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
