define({ 
  onNavigate: function(){
    this.view.switchRemember.onSlide = this.onSwitchToggle;
    this.view.btnLogin.onClick = this.navigateHome;
    
  },
  onSwitchToggle: function() {
    var isOn = this.view.switchRemember.selectedIndex; 
    // selectedIndex = 0 (left/off), 1 (right/on)

    if (isOn === 0) {
      // Switch ON
      this.view.btnLogin.skin = "sknBtnBlue";
      this.view.btnLogin.setEnabled(true);
    } else {
      // Switch OFF
      this.view.btnLogin.skin = "sknBtnDisable";
      this.view.btnLogin.setEnabled(false);
    }
  },
  navigateHome: function(){
    let navObj = new voltmx.mvc.Navigation("frmSBHome");
    navObj.navigate();
  }
});