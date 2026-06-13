define({ 

  onNavigate: function(){
    this.view.btnReturn.onClick = this.returnClick.bind(this);
    this.header = "Credit Risk / Manage Scheme / History Details";
    this.preshowHandler();
  },
  preshowHandler: function(){
    this.view.FormHeader.lblHdr.text = this.header;
  },
  returnClick: function(){
    let navObj = new voltmx.mvc.Navigation("frmSchemeList");
    navObj.navigate();
  }
});