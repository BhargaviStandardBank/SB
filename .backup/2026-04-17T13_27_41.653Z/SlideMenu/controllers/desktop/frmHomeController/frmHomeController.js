define({

  onNavigate: function() {
//     this.setMenuData();
  },

  isCollapsed: false,

  collapseSidebar: function() {

    var anim = voltmx.ui.createAnimation({
      100: { width: "70dp" }
    });

    this.view.flxSideMenu.animate(anim, {
      duration: 0.3,
      fillMode: voltmx.anim.FILL_MODE_FORWARDS
    }, {});
    this.view.flxMainContent.animate(
      voltmx.ui.createAnimation({
        100: { left: "70dp" }
      }),
      { duration: 0.3 },
      {}
    );

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
    } 
    else if (context.eventType === "leave") {
      this.collapseSidebar(); // Assuming you have a collapse function
    }
  },

expandSidebar1: function() {
    var animConfig = {
        duration: 0.3,
        fillMode: voltmx.anim.FILL_MODE_FORWARDS
    };

    // Animate Side Menu
    this.view.flxSideMenu.animate(
        voltmx.ui.createAnimation({ 100: { width: "250dp" } }), 
        animConfig, 
        {}
    );

    // Animate Main Content
    this.view.flxMainContent.animate(
        voltmx.ui.createAnimation({ 100: { left: "250dp" } }), 
        animConfig, 
        {}
    );

    this.isCollapsed = false;
    this._updateMenuToIconAndText();
}

});