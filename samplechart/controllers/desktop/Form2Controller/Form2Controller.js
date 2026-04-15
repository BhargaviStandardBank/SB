define({ 

  onNavigate: function(){
    this.preshow();
    this.postShowHandler();
  },
  preshow: function(){
    this.view.brwGauge.requestURLConfig = {
      URL: "web/localfiles/gauge/gauge.html"
    };
  },
  postShowHandler: function() {
    var self = this;

    setTimeout(function() {
        self.view.brwGauge.evaluateJavaScript("updateGauge(5)");
    }, 500);  // 500ms delay
}

});