define("userForm2Controller", {
    onNavigate: function() {
        this.preshow();
        this.postShowHandler();
    },
    preshow: function() {
        this.view.brwGauge.requestURLConfig = {
            URL: "web/localfiles/gauge/gauge.html"
        };
    },
    postShowHandler: function() {
        var self = this;
        setTimeout(function() {
            self.view.brwGauge.evaluateJavaScript("updateGauge(5)");
        }, 500); // 500ms delay
    }
});
define("Form2ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("Form2Controller", ["userForm2Controller", "Form2ControllerActions"], function() {
    var controller = require("userForm2Controller");
    var controllerActions = ["Form2ControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
