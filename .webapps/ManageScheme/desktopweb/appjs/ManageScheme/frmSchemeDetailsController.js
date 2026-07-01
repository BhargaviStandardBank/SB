define("ManageScheme/userfrmSchemeDetailsController", {
    onNavigate: function() {
        this.header = "Credit Risk / Manage Scheme / Scheme Deatils";
        this.view.flxPopup.isVisible = false;
        this.view.btnReturn.onClick = this.btnReturnClick;
        this.view.SuspensionEntries.segSuspendEntry.onRowClick = this.segRowClick;
        this.view.imgCancel.onTouchEnd = this.cancelClick;
        this.preshowHandle();
    },
    preshowHandle: function() {
        this.view.FormHeader.lblHdr.text = this.header;
    },
    btnReturnClick: function() {
        var navObj = new voltmx.mvc.Navigation("frmSchemeList");
        navObj.navigate();
    },
    segRowClick: function() {
        this.view.flxPopup.isVisible = true;
    },
    cancelClick: function() {
        this.view.flxPopup.isVisible = false;
    }
});
define("ManageScheme/frmSchemeDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/frmSchemeDetailsController", ["ManageScheme/userfrmSchemeDetailsController", "ManageScheme/frmSchemeDetailsControllerActions"], function() {
    var controller = require("ManageScheme/userfrmSchemeDetailsController");
    var controllerActions = ["ManageScheme/frmSchemeDetailsControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
