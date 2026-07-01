define("com/hcl/menu/SideMenu/userSideMenuController", function() {
    return {
        CONFIG: {
            MIN_WIDTH: "60dp",
            MAX_WIDTH: "200dp",
            ANIMATION_DURATION: 0.25
        },
        masterData: [{
            header: {
                imgIcon: "icon_suspend.png",
                lblSectionTitle: "Simple Light Touch(SLT)",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Loan Eligibility",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "SLT",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Scored Offer View(PPB)",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "SLT",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Scored Offer View(BCB)",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "SLT",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Offer Manger",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "SLT",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Scoring API",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "SLT",
                    "friendlyName": "frmSimpleTouch"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_suspend.png",
                lblSectionTitle: "Complex Lending",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Originate Application",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, ]
        }, {
            header: {
                imgIcon: "icon_view.png",
                lblSectionTitle: "Customer 360",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "View Customer Info",
                formID: {
                    "appName": "Customer360",
                    "appInfo": "Customer 360",
                    "friendlyName": "frmCustomer"
                }
            }, {
                lblMenuItem: "View Application",
                formID: {
                    "appName": "Customer360",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_financialrisk.png",
                lblSectionTitle: "Financial Spreading & Risk Rating",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Spread Financials",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Rate Counterparty",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "View BBRS Ratings",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "BBRS Insights",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_queue.png",
                lblSectionTitle: "Queue Manager",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "POR Queues",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Branch (all)",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "RWAE (all)",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "RWAE my queue",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_suspend.png",
                lblSectionTitle: "Suspend List",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Suspend List",
                formID: {
                    "appName": "SuspendList",
                    "appInfo": "Suspend List",
                    "friendlyName": "frmSuspendList"
                }
            }, {
                lblMenuItem: "Request History",
                formID: {
                    "appName": "SuspendList",
                    "appInfo": "Suspend List",
                    "friendlyName": "frmRequestHistory"
                }
            }, {
                lblMenuItem: "Add Suspend",
                formID: {
                    "appName": "SuspendList",
                    "appInfo": "Suspend List",
                    "friendlyName": "frmAddSuspend"
                }
            }, {
                lblMenuItem: "Remove Suspend",
                formID: {
                    "appName": "SuspendList",
                    "appInfo": "Suspend List",
                    "friendlyName": "frmRemoveSuspend"
                }
            }, {
                lblMenuItem: "Approvers",
                formID: {
                    "appName": "SuspendList",
                    "appInfo": "Suspend List",
                    "friendlyName": "frmApprovers"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_manage.png",
                lblSectionTitle: "Scheme Maintenance",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Scheme List",
                formID: {
                    "appName": "ManageScheme",
                    "appInfo": "Scheme Maintence",
                    "friendlyName": "frmSchemeList"
                }
            }, {
                lblMenuItem: "Request History",
                formID: {
                    "appName": "ManageScheme",
                    "appInfo": "Scheme Maintence",
                    "friendlyName": "frmSchemeReqHistory"
                }
            }, {
                lblMenuItem: "Add Scheme",
                formID: {
                    "appName": "ManageScheme",
                    "appInfo": "Scheme Maintence",
                    "friendlyName": "frmAddScheme"
                }
            }, {
                lblMenuItem: "Remove Scheme",
                formID: {
                    "appName": "ManageScheme",
                    "appInfo": "Scheme Maintence",
                    "friendlyName": "frmRemoveScheme"
                }
            }, {
                lblMenuItem: "Approvers",
                formID: {
                    "appName": "ManageScheme",
                    "appInfo": "Scheme Maintence",
                    "friendlyName": "frmSchemeApprover"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_suspend.png",
                lblSectionTitle: "Reporting / Dashboard",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "SLT Dashboard",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "CAMS Dashboard",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_suspend.png",
                lblSectionTitle: "Credit Solution Engineering",
                isExpanded: false
            },
            rows: [{
                lblMenuItem: "Demand Planning App",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }, {
                lblMenuItem: "Dev Ops Board",
                formID: {
                    "appName": "SimpleLightTouch",
                    "appInfo": "",
                    "friendlyName": "frmSimpleTouch"
                }
            }]
        }, {
            header: {
                imgIcon: "icon_home.png",
                lblSectionTitle: "Home",
                isExpanded: false,
                formID: {
                    "appName": "StandardBank",
                    "friendlyName": "frmSBHome"
                }
            },
        }, ],
        constructor: function() {
            this.view.lblTitle.text = voltmx.i18n.getLocalizedString("i18n.sb.StandardBank");
            this.view.flxUserDetails.isVisible = false;
            this.view.preShow = this.invokePreShow.bind(this);
            this.view.segMenu.onRowClick = this.onRowItemClick.bind(this);
            this.view.flxSideMenu.width = '60dp';
            this.view.flxSideMenu.onHover = (widgetRef, context) => {
                    if (context.eventType === "enter") {
                        this.expandSidebar1();
                    } else if (context.eventType === "leave") {
                        this.collapseSidebar(); // Assuming you have a collapse function
                    }
                }
                //this.view.flxSegMenu.onHover = this.handleMenuHover.bind(this);
        },
        expandSidebar1: function() {
            var animConfig = {
                duration: 0.3,
                fillMode: voltmx.anim.FILL_MODE_FORWARDS
            };
            // Animate Side Menu
            this.view.flxSideMenu.animate(voltmx.ui.createAnimation({
                100: {
                    width: "250dp"
                }
            }), animConfig, {});
            // Animate Main Content
            //     this.view.flxMainContent.animate(
            //         voltmx.ui.createAnimation({ 100: { left: "250dp" } }), 
            //         animConfig, 
            //         {}
            //     );
            this.isCollapsed = false;
            //this.view.flxUserDetails.isVisible = true;
            //this._updateMenuToIconAndText();
        },
        collapseSidebar: function() {
            var anim = voltmx.ui.createAnimation({
                100: {
                    width: "60dp"
                }
            });
            this.view.flxSideMenu.animate(anim, {
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
            this.view.flxUserDetails.isVisible = false;
            //this._updateMenuToIconOnly();
        },
        invokePreShow: function() {
            try {
                this.view.segMenu.widgetDataMap = {
                    lblSectionTitle: "lblSectionTitle",
                    imgIcon: "imgIcon",
                    lblMenuItem: "lblMenuItem",
                    flxSegSecHdr: "flxSegSecHdr"
                };
                // this.view.flxSegMenu.width = this.CONFIG.MIN_WIDTH;
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
        handleMenuHover: function(widget, context) {
            // context.eventType provides "enter" or "leave"
            if (context.eventType === constants.ONHOVER_MOUSE_ENTER) {
                this.animateMenu(this.CONFIG.MAX_WIDTH);
            } else if (context.eventType === constants.ONHOVER_MOUSE_LEAVE) {
                this.animateMenu(this.CONFIG.MIN_WIDTH);
                // Optional: Collapse any open accordion sections when mouse leaves
                this.collapseAllSections();
            }
        },
        animateMenu: function(targetWidth) {
            this.view.flxSideMenu.animate(voltmx.ui.createAnimation({
                "100": {
                    "width": targetWidth,
                    "stepConfig": {
                        "timingFunction": constants.ANIMATION_SERIES_EASE_IN_OUT
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": constants.ANIMATION_DIRECTION_FORWARDS,
                "duration": this.CONFIG.ANIMATION_DURATION
            }, {
                "animationEnd": function() {}
            });
        },
        refreshMenu: function() {
            const segmentData = this.masterData.map((section, index) => {
                const headerObj = {
                    lblSectionTitle: section.header.lblSectionTitle,
                    imgIcon: {
                        src: section.header.imgIcon
                    },
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
                        nav.navigate(selectedItem);
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
define("com/hcl/menu/SideMenu/SideMenuControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/hcl/menu/SideMenu/SideMenuController", ["com/hcl/menu/SideMenu/userSideMenuController", "com/hcl/menu/SideMenu/SideMenuControllerActions"], function() {
    var controller = require("com/hcl/menu/SideMenu/userSideMenuController");
    var actions = require("com/hcl/menu/SideMenu/SideMenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
