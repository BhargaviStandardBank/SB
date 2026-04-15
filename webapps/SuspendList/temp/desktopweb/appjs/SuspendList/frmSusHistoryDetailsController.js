define("SuspendList/userfrmSusHistoryDetailsController", {
    onNavigate: function() {
        this.view.btnReturnHistory.onClick = this.returnToHistory.bind(this);
        this.view.btnAccept.onClick = this.onClickAccept.bind(this);
    },
    returnToHistory: function() {
        var navObj = new voltmx.mvc.Navigation("frmSusRequestHistory");
        navObj.navigate();
    },
    onClickAccept: function() {
        var navForm = {
            "appName": "StandardBank",
            "friendlyName": "FrmSBHome"
        }
        var navObj = new voltmx.mvc.Navigation(navForm);
        navObj.navigate();
    }
});
define("SuspendList/frmSusHistoryDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/frmSusHistoryDetailsController", ["SuspendList/userfrmSusHistoryDetailsController", "SuspendList/frmSusHistoryDetailsControllerActions"], function() {
    var controller = require("SuspendList/userfrmSusHistoryDetailsController");
    var controllerActions = ["SuspendList/frmSusHistoryDetailsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
