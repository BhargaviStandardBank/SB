define("SimpleLightTouch/userfrmSimpleTouchController", {
    //Type your controller code here 
});
define("SimpleLightTouch/frmSimpleTouchControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SimpleLightTouch/frmSimpleTouchController", ["SimpleLightTouch/userfrmSimpleTouchController", "SimpleLightTouch/frmSimpleTouchControllerActions"], function() {
    var controller = require("SimpleLightTouch/userfrmSimpleTouchController");
    var controllerActions = ["SimpleLightTouch/frmSimpleTouchControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
