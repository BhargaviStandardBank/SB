define("ManageScheme/userfrmRemoveSchemeController", {
    _removeMethods: {
        MANUAL_COMPANY: "MC",
        UPLOAD_COMPANY: "UC",
        MANUAL_EMPLOYEE: "ME",
        UPLOAD_EMPLOYEE: "UE"
    },
    onNavigate: function(header) {
        this.header = "Credit Risk / " + header.formID.appInfo + " / " + header.lblMenuItem;
        this._initializeActions();
        this._initializeDefaultView();
        this.populateEmployeeData();
        this.preshowHandler();
    },
    preshowHandler: function() {
        this.view.FormHeader.lblHdr.text = this.header;
    },
    _initializeActions: function() {
        // ListBox Selection Event
        this.view.AddMethod.listData.onSelection = () => {
            this._handleMethodSelection().catch(err => {
                throw new Error(`UI Update Failed: ${err.message}`);
            });
        };
    },
    populateEmployeeData: function() {
        try {
            var segmentData = [{
                "lblCIFNo": {
                    "text": "23280545",
                    "skin": "sknUnderlineLink"
                }, // Assuming it's underlined based on image
                "lblIDNo": "111235",
                "lblCustomerName": "Zuri Nkosi",
                "lblReason": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
                "imgDelete": {
                    "src": "icon_delete.png"
                }
            }, {
                "lblCIFNo": {
                    "text": "25323522",
                    "skin": "sknUnderlineLink"
                },
                "lblIDNo": "232558",
                "lblCustomerName": "Amari Nkosi",
                "lblReason": "Lorem ipsum dolor sit amet consectetur.",
                "imgDelete": {
                    "src": "icon_delete.png"
                }
            }, {
                "lblCIFNo": {
                    "text": "85245623",
                    "skin": "sknUnderlineLink"
                },
                "lblIDNo": "998524",
                "lblCustomerName": "Chege Nkosi",
                "lblReason": "Lorem ipsum dolor sit amet consectetur.",
                "imgDelete": {
                    "src": "icon_delete.png"
                }
            }, {
                "lblCIFNo": {
                    "text": "99855824",
                    "skin": "sknUnderlineLink"
                },
                "lblIDNo": "220232134",
                "lblCustomerName": "HCL Software",
                "lblReason": "Lorem ipsum dolor sit amet consectetur.",
                "imgDelete": {
                    "src": "icon_delete.png"
                }
            }, {
                "lblCIFNo": {
                    "text": "22355678",
                    "skin": "sknUnderlineLink"
                },
                "lblIDNo": "652445342",
                "lblCustomerName": "HCL South America",
                "lblReason": "Lorem ipsum dolor sit amet consectetur.",
                "imgDelete": {
                    "src": "icon_delete.png"
                }
            }];
            this.view.SuspensionEntries.segSuspendEntry.setData(segmentData);
        } catch (err) {
            kony.print("Error while setting segment data: " + JSON.stringify(err));
        }
    },
    _initializeDefaultView: function() {
        // Set initial selection and trigger update
        this.view.AddMethod.listData.selectedKey = this._removeMethods.MANUAL_COMPANY;
        this._handleMethodSelection();
    },
    _handleMethodSelection: function() {
        return new Promise((resolve) => {
            const selectedMethod = this.view.AddMethod.listData.selectedKey;
            // Define Visibility States
            let showSchemeSrch = false;
            let showEmployeeSrch = false;
            let showDocSelect = false;
            let populateCompanyEntry = false;
            let populateEmployeeEntry = false;
            let buttonText = "";
            switch (selectedMethod) {
                case this._removeMethods.MANUAL_COMPANY:
                    showSchemeSrch = true;
                    populateCompanyEntry = true;
                    buttonText = "REMOVE COMPANY SCHEME";
                    break;
                case this._removeMethods.UPLOAD_COMPANY:
                    showDocSelect = true;
                    populateCompanyEntry = true;
                    buttonText = "REMOVE COMPANY SCHEMES IN FILE";
                    break;
                case this._removeMethods.MANUAL_EMPLOYEE:
                    showSchemeSrch = true;
                    showEmployeeSrch = true;
                    populateEmployeeEntry = true;
                    buttonText = "REMOVE EMPLOYEE FROM SCHEME";
                    break;
                case this._removeMethods.UPLOAD_EMPLOYEE:
                    showDocSelect = true;
                    populateEmployeeEntry = true;
                    buttonText = "REMOVE EMPLOYEE FROM SCHEME";
                    break;
                default:
                    throw new Error("Invalid Removal Method selected");
            }
            // Execute UI Update
            this._updateUI({
                showSchemeSrch,
                showEmployeeSrch,
                showDocSelect,
                buttonText,
                populateEmployeeEntry,
                populateCompanyEntry
            });
            resolve(true);
        });
    },
    _updateUI: function({
        showSchemeSrch = false,
        showEmployeeSrch = false,
        showDocSelect = false,
        buttonText = "",
        populateEmployeeEntry = false,
        populateCompanyEntry = false
    } = {}) {
        // Set Visibility
        this.view.flxSchemeSrch.isVisible = showSchemeSrch;
        this.view.flxEmployeeSrch.isVisible = showEmployeeSrch;
        this.view.flxDocSelect.isVisible = showDocSelect;
        this.view.flxCompanyEntries.isVisible = populateCompanyEntry;
        this.view.flxEmployeEntry.isVisible = populateEmployeeEntry;
        this.view.btnAddCompanyScheme.text = buttonText ? buttonText : "SUBMIT";
        this.view.forceLayout();
    },
    _mapSegmentData(rawData = []) {
        const defaultValues = {
            lblRegID: "N/A",
            imgDelete: "delete_icon.png"
        };
        const processedData = rawData.map(item => ({...defaultValues, // ES6 Spread Operator for defaults
            lblSchemeID: item.schemeID,
            lblSchemeName: item.schemeName,
            lblCIF: item.cifNo
        }));
        this.view.segRemoveEntries.setData(processedData);
    }
});
define("ManageScheme/frmRemoveSchemeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageScheme/frmRemoveSchemeController", ["ManageScheme/userfrmRemoveSchemeController", "ManageScheme/frmRemoveSchemeControllerActions"], function() {
    var controller = require("ManageScheme/userfrmRemoveSchemeController");
    var controllerActions = ["ManageScheme/frmRemoveSchemeControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
