define("userfrmHomeController", {
    onNavigate: function() {
        //     this.setMenuData();
    },
    isCollapsed: false,
    collapseSidebar: function() {
        var anim = voltmx.ui.createAnimation({
            100: {
                width: "70dp"
            }
        });
        this.view.flxSideMenu.animate(anim, {
            duration: 0.3,
            fillMode: voltmx.anim.FILL_MODE_FORWARDS
        }, {});
        this.view.flxMainContent.animate(voltmx.ui.createAnimation({
            100: {
                left: "70dp"
            }
        }), {
            duration: 0.3
        }, {});
        this.isCollapsed = true;
        this._updateMenuToIconOnly();
    },
    _updateMenuToIconOnly: function() {
        this.view.segMenu.widgetDataMap = {
            imgIcon: "imgIcon"
        };
    },
    _updateMenuToIconAndText: function() {
        this.view.segMenu.widgetDataMap = {
            imgIcon: "imgIcon",
            lblText: "lblText"
        };
    },
    onHoverSidebar: function(widgetRef, context) {
        if (context.eventType === "enter") {
            this.expandSidebar1();
        } else if (context.eventType === "leave") {
            this.collapseSidebar(); // Assuming you have a collapse function
        }
    },
    expandSidebar1: function() {
        var animConfig = {
            duration: 0.3,
            fillMode: voltmx.anim.FILL_MODE_FORWARDS
        };
        // Animate Side Menu
        this.view.flxSideMenu.animate(voltmx.ui.createAnimation({
            100: {
                width: "250dp"
            }
        }), animConfig, {});
        // Animate Main Content
        this.view.flxMainContent.animate(voltmx.ui.createAnimation({
            100: {
                left: "250dp"
            }
        }), animConfig, {});
        this.isCollapsed = false;
        this._updateMenuToIconAndText();
    }
});
define("frmHomeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onHover defined for flxSideMenu **/
    AS_FlexContainer_h1c85db0a9b54206ac3a286f4f89d0c0: function AS_FlexContainer_h1c85db0a9b54206ac3a286f4f89d0c0(eventobject, context) {
        var self = this;
        return self.onHoverSidebar.call(this, null, context);
    }
});
define("frmHomeController", ["userfrmHomeController", "frmHomeControllerActions"], function() {
    var controller = require("userfrmHomeController");
    var controllerActions = ["frmHomeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
