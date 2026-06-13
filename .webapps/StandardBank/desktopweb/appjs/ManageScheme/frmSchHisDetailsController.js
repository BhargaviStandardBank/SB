define("ManageScheme/userfrmSchHisDetailsController", {
    onNavigate: function() {
        this.view.btnReturn.onClick = this.returnClick.bind(this);
        this.header = "Credit Risk / Manage Scheme / History Details";
        this.preshowHandler();
    },
    preshowHandler: function() {
        this.view.FormHeader.lblHdr.text = this.header;
    },
    returnClick: function() {
        let navObj = new voltmx.mvc.Navigation("frmSchemeList");
        navObj.navigate();
    }
});
define("ManageScheme/frmSchHisDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/frmSchHisDetailsController", ["ManageScheme/userfrmSchHisDetailsController", "ManageScheme/frmSchHisDetailsControllerActions"], function() {
    var controller = require("ManageScheme/userfrmSchHisDetailsController");
    var controllerActions = ["ManageScheme/frmSchHisDetailsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
