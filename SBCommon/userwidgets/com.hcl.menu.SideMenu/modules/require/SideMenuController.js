define(function() {
  return {
    masterData: [{
      header: { imgIcon: "icon_suspend.png",lblSectionTitle: "Master Suspend List", isExpanded: false},
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
               "friendlyName": "frmAddSuspend"
             } 
             },
             { lblMenuItem: "Remove Suspend", formID: {
               "appName": "SuspendList",
               "friendlyName": "frmRemoveSuspend"
             } 
             },
             { lblMenuItem: "Approvers", formID: {
               "appName": "SuspendList",
               "friendlyName": "frmApprovers"
             }  }
            ]
    },
                 {
                   header: { imgIcon: "icon_manage.png",lblSectionTitle: "Manage Scheme", isExpanded: false },
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
                            "friendlyName": "frmRemoveScheme"
                          } 
                          },
                          { lblMenuItem: "Approvers", formID: {
                            "appName": "ManageScheme",
                            "friendlyName": "frmSchemeApprover"
                          } }
                         ]
                 },
                 {
                   header: { imgIcon: "icon_customerview.png",lblSectionTitle: "Customer 360", isExpanded: false },
                   rows: [{ lblMenuItem: "Customer Info", formID: {
                             "appName": "Customer360",
                             "friendlyName": "frmCustomer"
                           }
                          }
                         ]
                 },
                  {
                   header: { lblSectionTitle: "Financial Spreading & Risk Rating", isExpanded: false },
                 },
                 {
                   header: { lblSectionTitle: "Queue Manager", isExpanded: false },
                 },
                 {
                   header: { lblSectionTitle: "Reporting / Dashboard", isExpanded: false },
                 },
                 {
                   header: { lblSectionTitle: "Home", isExpanded: false,
                            formID: { "appName": "StandardBank", "friendlyName": "frmSBHome" }
                           },
                 },
                ],

    constructor: function() {
      this.view.preShow = this.invokePreShow.bind(this);
      this.view.segMenu.onRowClick = this.onRowItemClick.bind(this);
    },

    invokePreShow: function() {
      try {
        this.view.segMenu.widgetDataMap = {
          lblSectionTitle: "lblSectionTitle",
          lblMenuItem: "lblMenuItem",
          flxSegSecHdr: "flxSegSecHdr"
        };

        // Check if we are currently on the Home Form
        const currentForm = voltmx.application.getCurrentForm().id;

        // ES6 Ternary: If landing on Home, collapse all; otherwise, keep current state
        currentForm === "frmSBHome" ? this.collapseAllSections() : this.refreshMenu();

      } catch (e) {
        throw new Error(`Menu Initialization Failed: ${e.message}`);
      }
    },

    /**
     * Resets all sections to a collapsed state
     */
    collapseAllSections: function() {
      // ES6 Spread/forEach logic for immutability and performance
      this.masterData.forEach(section => {
        section.header.isExpanded = false;
      });
      this.refreshMenu();
    },

    refreshMenu: function() {
      const segmentData = this.masterData.map((section, index) => {
        const headerObj = {
          lblSectionTitle: section.header.lblSectionTitle,
          flxSegSecHdr: {
            onClick: () => this.onSectionClicked(index)
          }
        };
        const displayRows = section.header.isExpanded ? section.rows : [];
        return [headerObj, displayRows];
      });

      this.view.segMenu.setData(segmentData);

      // Layout Batching Performance: Ensures UI doesn't flicker during expand/collapse
      this.view.forceLayout();
    },

    onSectionClicked: function(sectionIndex) {
      const section = this.masterData[sectionIndex];
      
      // 1. Check if the clicked section is "Home"
      if (section.header.lblSectionTitle === "Home") {
        try {
          const nav = new voltmx.mvc.Navigation(section.header.formID);
          nav.navigate();
          return; // Exit function so it doesn't try to expand
        } catch (e) {
          voltmx.print("Home Navigation Failed: " + e.message);
        }
      }

      // 2. Normal Accordion Logic for other sections
      const currentState = section.header.isExpanded;
      this.masterData.forEach(item => {
        item.header.isExpanded = false;
      });

      section.header.isExpanded = !currentState;
      this.refreshMenu();
    },

    onRowItemClick: function() {
      const selectedItem = this.view.segMenu.selectedRowItems[0];

      if (selectedItem && selectedItem.formID) {
        // Return Promise to handle navigation asynchronously if needed
        return new Promise((resolve, reject) => {
          try {
            const nav = new voltmx.mvc.Navigation(selectedItem.formID);
            nav.navigate();
            resolve();
          } catch (e) {
            // Throwing exception instead of print for better debugging
            reject(new Error("Navigation failed: " + e.message));
          }
        });
      }
    }
  };
});