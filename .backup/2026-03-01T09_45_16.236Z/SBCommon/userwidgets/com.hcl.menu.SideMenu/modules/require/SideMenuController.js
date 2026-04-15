define(function() {

  return {
    masterData: [
      {
        header: { lblSectionTitle: "Master Suspend List", isExpanded: false},
        rows: [{ lblMenuItem: "Suspend List", formID: {
                                                        "appName": "SuspendList",
                                                        "friendlyName": "frmSuspendList"
          											   }
               },
               { lblMenuItem: "Request History", formID: {
                                                           "appName": "SuspendList",
                                                           "friendlyName": "frmRequestHistory"
                                                         } 
               },
               { lblMenuItem: "Add Suspend", formID: {
                                                       "appName": "SuspendList",
                                                       "friendlyName": "frmAddSuspendList"
                                                     } 
               },
               { lblMenuItem: "Remove Suspend", formID: {
                                                           "appName": "SuspendList",
                                                           "friendlyName": "frmRemoveSuspend"
                                                         } 
               },
               { lblMenuItem: "Approvers", formID: "frmScoredOffer" }
        	]
      },
      {
        header: { lblSectionTitle: "Manage Scheme", isExpanded: false },
        rows: [{ lblMenuItem: "Scheme List", formID: {
                                                        "appName": "ManageScheme",
                                                        "friendlyName": "frmSchemeList"
          											   }
               },
               { lblMenuItem: "Request History", formID: {
                                                           "appName": "ManageScheme",
                                                           "friendlyName": "frmSchemeReqHistory"
                                                         } 
               },
               { lblMenuItem: "Add Scheme", formID: {
                                                       "appName": "ManageScheme",
                                                       "friendlyName": "frmAddScheme"
                                                     } 
               },
               { lblMenuItem: "Remove Scheme", formID: {
                                                           "appName": "ManageScheme",
                                                           "friendlyName": "frmRemoveSuspend"
                                                         } 
               },
               { lblMenuItem: "Approvers", formID: "frmScoredOffer" }
        	]
      }
    ],
    
    constructor: function(){
      this.view.preShow = this.invokePreShow.bind(this);
      this.view.segMenu.onRowClick = this.onRowItemClick.bind(this);
    },

    invokePreShow: function(){
      try{
        this.view.segMenu.widgetDataMap = {
          lblSectionTitle: "lblSectionTitle",
          lblMenuItem: "lblMenuItem",
          // Mapping a dummy property to the container for the click event
          flxSegSecHdr: "flxSegSecHdr" 
        }
        this.refreshMenu();
      }catch(e){
		voltm.print("e---invokePreShow-"+e)
      }
    },
    
    refreshMenu: function(masterData) {
      var segmentData = [];
      this.masterData.forEach(function(section, index) {
        var headerObj = {
          lblSectionTitle: section.header.lblSectionTitle,
          flxSegSecHdr: {
            onClick: function() {
              this.onSectionClicked(index);
            }.bind(this)
          }
        };
        var displayRows = section.header.isExpanded ? section.rows : [];
        segmentData.push([headerObj, displayRows]);
      }.bind(this));

      this.view.segMenu.setData(segmentData);
    },
    
    onSectionClicked: function(sectionIndex) {
      // Toggle current section
      var currentState = this.masterData[sectionIndex].header.isExpanded;
      
      // Optional: Collapse all others for a true accordion feel
      this.masterData.forEach(function(item) {
        item.header.isExpanded = false;
      });

      this.masterData[sectionIndex].header.isExpanded = !currentState;
      this.refreshMenu();
    },
    
    onRowItemClick: function() {
      var selectedItem = this.view.segMenu.selectedRowItems[0];

      if (selectedItem && selectedItem.formID) {
        try {
          var nav = new voltmx.mvc.Navigation(selectedItem.formID);
          nav.navigate();
        } catch (e) {
          kony.print("Navigation failed: " + e.message);
        }
      }
    }
  };
});