define("SuspendList/userfrmAddSuspendController", {
    /** ---------------- STATE ---------------- **/
    _sourceOptions: {
        MANUAL: "ME",
        UPLOAD: "UF"
    },
    _entryOptions: {
        INDIVIDUAL: "Ind",
        SCHEME: "Sch",
        ECOSYSTEM: "Eco"
    },
    /** ---------------- ENTRY ---------------- **/
    onNavigate() {
        this._initializeActions();
        this._resetToDefaultView();
    },
    _initializeActions() {
        // Main Source Dropdown
        this.view.ListSource.listData.onSelection = () => {
            this._handleSourceChange().catch(err => {
                throw new Error(`Source selection failed: ${err.message}`);
            });
        };
        // Entry Type Dropdown
        this.view.ListSource.listData.onSelection = () => {
            this._handleEntryChange().catch(err => {
                throw new Error(`Entry selection failed: ${err.message}`);
            });
        };
    },
    /** ---------------- VIEW LOGIC ---------------- **/
    /**
     * Resets the screen to the default "Manual Individual" state
     */
    _resetToDefaultView() {
        this.view.ListSource.listData.selectedKey = this._sourceOptions.MANUAL;
        this.view.ListEntry.listData.selectedKey = this._entryOptions.INDIVIDUAL;
        this._handleSourceChange();
    },
    /**
     * Toggles visibility between Manual Entry and Document Upload
     */
    _handleSourceChange() {
        return new Promise((resolve) => {
            const isUpload = this.view.ListSource.listData.selectedKey === this._sourceOptions.UPLOAD;
            // Visibility Batching
            this.view.flxDocs.isVisible = isUpload;
            this.view.flxSrch.isVisible = !isUpload;
            this.view.ListEntry.isVisible = !isUpload;
            // If switching to Upload, hide search criteria regardless of Entry selection
            if (isUpload) {
                this.view.SrchCriteria.isVisible = false;
            } else {
                // Re-evaluate entry type visibility when returning to Manual
                this._handleEntryChange();
            }
            this.view.forceLayout();
            resolve(true);
        });
    },
    /**
     * Updates search criteria based on Individual, Scheme, or Ecosystem selection
     */
    _handleEntryChange() {
        return new Promise((resolve) => {
            const entryType = this.view.ListEntry.listData.selectedKey;
            const isIndividual = entryType === this._entryOptions.INDIVIDUAL;
            // Toggle Criteria Flex (Hidden for Individual)
            this.view.SrchCriteria.isVisible = !isIndividual;
            if (!isIndividual) {
                this._updateCriteriaDropdown(entryType);
            }
            this.view.forceLayout();
            resolve(true);
        });
    },
    /**
     * Updates the Criteria Dropdown master data dynamically
     * @param {string} type - Entry Type
     */
    _updateCriteriaDropdown(type) {
        let masterData = [];
        // ES6 Ternary/Switch for dynamic master data
        if (type === this._entryOptions.SCHEME) {
            masterData = [
                ["code", "Scheme Code"],
                ["name", "Scheme Name"],
                ["employer", "Employer Name"]
            ];
        } else if (type === this._entryOptions.ECOSYSTEM) {
            masterData = [
                ["id", "Ecosystem ID"],
                ["name", "Ecosystem Name"]
            ];
        }
        this.view.SrchCriteria.listData.masterData = masterData;
        this.view.SrchCriteria.listData.selectedKey = masterData[0][0];
    }
});
define("SuspendList/frmAddSuspendControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SuspendList/frmAddSuspendController", ["SuspendList/userfrmAddSuspendController", "SuspendList/frmAddSuspendControllerActions"], function() {
    var controller = require("SuspendList/userfrmAddSuspendController");
    var controllerActions = ["SuspendList/frmAddSuspendControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});
