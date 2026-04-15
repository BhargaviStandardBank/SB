define({ 

  onNavigate: function(){
    this.view.SideMenu.imgLogout.onTouchEnd = this.logOut;
  },
  logOut: function(){
	let navObj = new voltmx.mvc.Navigation("frmLogin");
    navObj.navigate();
  }

});