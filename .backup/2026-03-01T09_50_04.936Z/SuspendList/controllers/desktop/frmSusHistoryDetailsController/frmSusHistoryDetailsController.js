define({ 

 onNavigate: function(){
   this.view.btnReturnHistory.onClick = this.returnToHistory.bind(this);
   this.view.btnAccept.onClick = this.onClickAccept.bind(this);
 },
 returnToHistory: function(){
   var navObj = new voltmx.mvc.Navigation("frmSusRequestHistory");
   navObj.navigate();
 },
  onClickAccept: function(){
    var navForm = {
            "appName": "StandardBank",
            "friendlyName": "FrmSBHome"
          }
   	var navObj = new voltmx.mvc.Navigation(navForm);
    navObj.navigate();
  }
 });