define("StandardBank/userfrmSBHomeController", {
    onNavigate: function() {
        this.view.SideMenu.imgLogout.onTouchEnd = this.logOut;
    },
    logOut: function() {
        let navObj = new voltmx.mvc.Navigation("frmLogin");
        navObj.navigate();
    }
});
define("StandardBank/frmSBHomeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("StandardBank/frmSBHomeController", ["StandardBank/userfrmSBHomeController", "StandardBank/frmSBHomeControllerActions"], function() {
    var controller = require("StandardBank/userfrmSBHomeController");
    var controllerActions = ["StandardBank/frmSBHomeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
