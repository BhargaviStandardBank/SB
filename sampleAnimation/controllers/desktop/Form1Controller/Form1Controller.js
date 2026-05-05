define({ 
  onNavigate: function() {
    this.view.postShow = this.initSidebar.bind(this);
  },
	isCollapsed: false,
  initSidebar: function() {
    this.view.flxLeft.width = "70dp";
    this.view.flxLeft.onHover = (widget, context) => {
      if (context.eventType === "enter") {
        this.expandSidebar1();
      } 
      else if (context.eventType === "leave") {
        this.collapseSidebar();
      }
    };
  },
  expandSidebar1: function() {
    var animConfig = {
        duration: 0.3,
        fillMode: voltmx.anim.FILL_MODE_FORWARDS
    };

    // Animate Side Menu
    this.view.flxLeft.animate(
        voltmx.ui.createAnimation({ 100: { width: "250dp" } }), 
        animConfig, 
        {}
    );

    // Animate Main Content
//     this.view.flxMainContent.animate(
//         voltmx.ui.createAnimation({ 100: { left: "250dp" } }), 
//         animConfig, 
//         {}
//     );

    this.isCollapsed = false;
    //this._updateMenuToIconAndText();
},
  
  collapseSidebar: function() {

    var anim = voltmx.ui.createAnimation({
      100: { width: "70dp" }
    });

    this.view.flxLeft.animate(anim, {
      duration: 0.3,
      fillMode: voltmx.anim.FILL_MODE_FORWARDS
    }, {});
//     this.view.flxMainContent.animate(
//       voltmx.ui.createAnimation({
//         100: { left: "70dp" }
//       }),
//       { duration: 0.3 },
//       {}
//     );

    this.isCollapsed = true;

    //this._updateMenuToIconOnly();
  },

  animateSidebar: function(targetWidth) {
    //if(this.view.flxSidebarVisual.width === targetWidth) return;

    this.view.flxSidebarVisual.animate(
      voltmx.ui.createAnimation({
        "100": {
          "width": targetWidth,
          "stepConfig": { "timingFunction": constants.ANIMATION_SERIES_EASE_IN_OUT }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": constants.ANIMATION_DIRECTION_FORWARDS,
        "duration": 0.25 
      }, {}
    );
  }
});