define("SuspendList/userfrmSusHistoryDetailsController", {
    onNavigate: function() {
        this.view.btnReturnHistory.onClick = this.returnToHistory.bind(this);
        this.view.btnAccept.onClick = this.onClickAccept.bind(this);
        this.view.btnReturnHistory.onClick = this.returnHistory();
        this.populateHistoryDetails();
        //this.populateApprovalStatus();
    },
    returnToHistory: function() {
        let navObj = new voltmx.mvc.Navigation("frmSusRequestHistory");
        navObj.navigate();
    },
    onClickAccept: function() {
        let navForm = {
            "appName": "StandardBank",
            "friendlyName": "frmSBHome"
        }
        let navObj = new voltmx.mvc.Navigation(navForm);
        navObj.navigate();
    },
    populateHistoryDetails: function() {
        let historyData = [{
            "lblCIFNo": "2324769",
            "lblIDNo": "111234",
            "lblCustomerName": "Zuri Nkosi",
            "lblReason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, {
            "lblCIFNo": "2324769",
            "lblIDNo": "111234",
            "lblCustomerName": "Zuri Nkosi",
            "lblReason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }, ];
    },
    returnHistory: function() {
        let navObj = new voltmx.mvc.Navigation("frmRequestHistory");
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
