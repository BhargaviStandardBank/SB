define({ 

 onNavigate: function(header){
   this.header = "Credit Risk / "+ header.formID.appInfo + " / "+header.lblMenuItem;
   this.preshowHandler();
 },
   preshowHandler: function(){
    this.view.FormHeader.lblHdr.text = this.header;
  }


 });