define("StandardBank/userfrmSBHomeController", {
    onNavigate: function() {
        this.view.SideMenu.imgLogout.onTouchEnd = this.logOut;
        //this.view.flxLeft.width = '70dp';
        //this.view.flxLeft.onTouchMove = this.handleMenuHover.bind(this);
    },
    handleMenuHover: function(widget, context) {
        // context.eventType provides "enter" or "leave"
        if (context.eventType === constants.ONHOVER_MOUSE_ENTER) {
            this.animateMenu('300dp');
        } else if (context.eventType === constants.ONHOVER_MOUSE_LEAVE) {
            this.animateMenu('70dp');
            // Optional: Collapse any open accordion sections when mouse leaves
            // this.collapseAllSections(); 
        }
    },
    animateMenu: function(targetWidth) {
        this.view.flxLeft.animate(voltmx.ui.createAnimation({
            "100": {
                "width": targetWidth,
                "stepConfig": {
                    "timingFunction": constants.ANIMATION_SERIES_EASE_IN_OUT
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": constants.ANIMATION_DIRECTION_FORWARDS,
            "duration": this.CONFIG.ANIMATION_DURATION
        }, {
            "animationEnd": function() {}
        });
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
