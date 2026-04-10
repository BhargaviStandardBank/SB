define({
  /** ---------------- STATE ---------------- **/
  _masterFinancialData: [],

  /** ---------------- ENTRY ---------------- **/
  onNavigate() {
    this._setupDataMap();
    this._initializeTabActions();
    this.preShowHandler();
    this.view.flxHide.isVisible = false;
    this._initializeView()
      .catch(err => { throw new Error(`Form Initialization Failed: ${err.message}`); }); // Throwing exception instead of print
  },
  preShowHandler: function() {
	this.view.RiskRateChart.imgPin.anchorPoint = { x: 0.5, y: 1 };
    this.currentAngle = 0;

    var transform = kony.ui.makeAffineTransform();
    transform.rotate(this.currentAngle);

    this.view.RiskRateChart.flxPin.transform = transform;
  },

  /** ---------------- DATA MAPPING ---------------- **/
  _setupDataMap() {
    this.view.lblOutStandingBalHDr.text = "Outstanding \n   Balance";
    this.view.segInternalExposure.widgetDataMap = {
      lblAcctType: "lblAcctType",
      lblAccNo: "lblAccNo",
      lblBRI: "lblBRI",
      lblOutstandingBal: "lblOutstandingBal",
      lblInstalment: "lblInstalment",
      lblArrearsExcess: "lblArrearsExcess",
      lblAmountDue: "lblAmountDue",
      lblOrgLoanAmt: "lblOrgLoanAmt",
      lblOrgLimit: "lblOrgLimit",
      lblCurrentLimit: "lblCurrentLimit",
      lblInterestRate: "lblInterestRate",
      lblOriginationDate: "lblOriginationDate",
      lblOriginalTerm: "lblOriginalTerm",
      lblRemTerm: "lblRemTerm",
      flxRow: "flxRow"
    };
  },
  /** ---------------- ACTIONS ---------------- **/
  _initializeTabActions() {
    // Tab Click Events
    this.view.flxInternalExpo.onClick = () => this._switchTab("INTERNAL");
    this.view.flxFixedAssets.onClick = () => this._switchTab("FIXED");
    this.view.flxCollateral.onClick = () => this._switchTab("COLLATERAL");
    this.view.flxInsuranceAss.onClick = () => this._switchTab("INSURANCE");
    this.view.flxOperationalInfo.onClick = () => this._switchTab("OPERATIONAL");
    this.view.flxRiskRating.onClick = () => this._switchTab("RISKRATING");
    //need to modify based on real data
    this.view.btnRisk1.onClick = ()=>this.riskOptionSelect("CRI");
    this.view.btnRisk2.onClick = ()=>this.riskOptionSelect("BBRS")
    
  },

  _switchTab(tabName){
    this.view.flxInternalLine.isVisible = (tabName === "INTERNAL");
    this.view.flxFixedLine.isVisible = (tabName === "FIXED");
    this.view.flxCollateralLine.isVisible = (tabName === "COLLATERAL");
    this.view.flxInsuranceLine.isVisible = (tabName === "INSURANCE");
    this.view.flxOpInfoLine.isVisible = (tabName === "OPERATIONAL");
    this.view.flxRiskRatingLine.isVisible=(tabName === "RISKRATING");

    //const isCollateral = (tabName === "COLLATERAL");
    //const isOperational = (tabName === "OPERATIONAL");
    this.view.flxSegData.isVisible = (tabName === "INTERNAL");
    this.view.flxChart.isVisible = (tabName === "INTERNAL");
    this.view.flxCollaInfo.isVisible = (tabName === "COLLATERAL");
    this.view.flxOpInfo.isVisible = (tabName === "OPERATIONAL");
    this.view.flxRiskTypes.isVisible = (tabName === "RISKRATING");
    this.view.flxRiskInsight.isVisible = (tabName === "RISKRATING");
    
    //this.view.flxInsuranceInfo.isVisible = isInsurance;
    if ((tabName === "COLLATERAL")) {
      this._buildCollateralUI(GlobalData.collateralData)
        .catch(err => { throw new Error('Dynamic UI Build Failed: ' + err.message); });
    }
    
    if(tabName === "RISKRATING"){
      this.updateGauge(15);
    }
    
  },

  /** ---------------- ASYNC DATA LOADING ---------------- **/
  /**
     * Initializes the view by fetching global data
     * @returns {Promise<boolean>}
     */
  _initializeView() {
    return new Promise((resolve, reject) => {
      try {
        // ES6 Spread operator for default parameters/cloning
        this._masterFinancialData = [...GlobalData.financialRecords];
        this._renderSegment(this._masterFinancialData);
        resolve(true);
      } catch (error) {
        reject(new Error(`Failed to load global data: ${error.message}`));
      }
    });
  },



  /** ---------------- RENDER LOGIC ---------------- **/
  /**
     * Maps data to the segment with performance optimization
     * @param {Array} data - The array of financial records
     */
  _renderSegment(data = []) {
    const processedData = data.map(item => {
      // ES6 Destructuring for clean variable access
      const { 
        type, accNo, bri, balance, instalment, arrears, due,
        origAmount, origLimit, currLimit, rate, date, term, rem 
      } = item;

      // ES6 Ternary operator for conditional row skinning
      //const rowSkin = type === "HMLN" ? "sknRowBlueHighlight" : "sknRowWhite";

      return {
        //flxRow: { skin: rowSkin },
        lblAcctType: type,
        lblAccNo: accNo,
        lblBRI: bri,
        lblOutstandingBal: balance,
        lblInstalment: instalment,
        lblArrearsExcess: arrears,
        lblAmountDue: due,
        lblOrgLoanAmt: origAmount,
        lblOrgLimit: origLimit,
        lblCurrentLimit: currLimit,
        lblInterestRate: rate,
        lblOriginationDate: date,
        lblOriginalTerm: term,
        lblRemTerm: rem
      };
    });

    this.view.segInternalExposure.setData(processedData);

    /** * BATCHING AND PERFORMANCE DOCUMENTATION:
         * forceLayout ensures that all 14+ labels per row have their dimensions 
         * calculated in a single UI thread pass. This is critical for 
         * high-density forms to prevent flickering and lag.
         */
    this.view.forceLayout();
  },

  _buildCollateralUI(data = []) {
    return new Promise((resolve) => {
      // 1. Clear existing dynamic content to prevent duplicates
      this.view.flxCollaInfo.removeAll();

      // 2. Iterate and create rows (Each row contains up to 3 items based on grid)
      let currentHorizontalFlex = null;

      data.forEach((record, index) => {
        // Logic: Create a new horizontal container every 3 items for the grid look
        if (index % 3 === 0) {
          currentHorizontalFlex = this._createHorizontalRow(index);
          this.view.flxCollaInfo.add(currentHorizontalFlex);
        }

        // 3. Create the individual Collateral Card
        const collateralCard = this._createCollateralCard(record, index);
        currentHorizontalFlex.add(collateralCard);
      });

      // Layout Batching Performance: Reflow the entire vertical container once
      this.view.forceLayout();
      resolve(true);
    });
  },
  _createHorizontalRow(index) {
    return new voltmx.ui.FlexContainer({
      "id": "flxRow"+index,
      "top": "20dp",
      "left": "0dp",
      "width": "100%",
      "height": '50%',
      "skin": "sknFlxTrans",
      "layoutType": voltmx.flex.FLOW_HORIZONTAL,
      "isVisible": true
    }, {}, {});
  },
  _createCollateralCard(record, index) {
    const { type, detail, account, value } = record;

    // Use a pre-designed FlexContainer as a template if possible, 
    // otherwise create the hierarchy dynamically:
    const flxCard = new voltmx.ui.FlexContainer({
      "id": "flxCollData"+index,
      "width": "48%",
      "height": "100%",
      "left": "2%",
      "skin": "sknFlxWhiteBGBlckBrdr", // Skin from your Screenshot
      "layoutType": voltmx.flex.FREE_FORM
    }, {}, {});

    // Add Labels (Simplified mapping based on your flxCollType structure)
    const lblType = new voltmx.ui.Label({
      "id": "lblType" + index,
      "text": type,
      "skin": "sknLblFormLevel",
      "top": "15dp", "left": "15dp"
    }, {}, {});

    const lblDetail = new voltmx.ui.Label({
      "id": "lblDetail"+index,
      "text": detail,
      "skin": "sknLblFormLevel",
      "top": "35dp", "left": "15dp"
    }, {}, {});

    const lblAccount = new voltmx.ui.Label({
      "id": "lblAcct" +index,
      "text": account,
      "skin": "sknLblFormLevel",
      "top": "75dp", "left": "15dp"
    }, {}, {});

    const lblVal = new voltmx.ui.Label({
      "id": "lblVal"+index,
      "text": value,
      "skin": "sknLblFormLevel",
      "right": "15dp", //"centerY": "50%",
      //"skin": "sknLblLargeValue"
    }, {}, {});

    flxCard.add(lblType, lblDetail, lblAccount, lblVal);
    return flxCard;
  },
  updateGauge: function(rating) {
    var newAngle = this.getAngleFromRating(rating);
    this.rotateNeedle(newAngle);
  },

  getAngleFromRating: function(rating) {

    if (rating >= 1 && rating <= 12) {
      return -75;   // LOW (green - right side)
    } 
    else if (rating >= 13 && rating <= 19) {
      return -35;   // MEDIUM
    } 
    else if (rating >= 20 && rating <= 22) {
      return 0;    // HIGH (top)
    } 
    else if (rating >= 23 && rating <= 25) {
      return 35;  // VERY HIGH
    } 
    else {
      return 75;  // SUBSTANDARD (left)
    }
  },
//     getAngleFromRating: function(rating) {
//       let angle = 0;

//       // 1. Logic to map rating to degrees
//       // Adjust these angles based on your specific background image alignment
//       if (rating >= 1 && rating <= 12) {
//         angle = -85;  // Low Risk (Green)
//       } else if (rating >= 13 && rating <= 19) {
//         angle = -45;  // Medium Risk (Yellow)
//       } else if (rating >= 20 && rating <= 22) {
//         angle = 0; // High Risk (Orange)
//       } else if (rating >= 23 && rating <= 25) {
//         angle = 65; // Very High Risk (Red)
//       } else if (rating >= 26) {
//         angle = 95; // Substandard (Grey)
//       }

//       // 2. Apply the rotation animation
//       this.rotateNeedle(angle);
//     },

  rotateNeedle: function(newAngle) {

    var fromTransform = kony.ui.makeAffineTransform();
    fromTransform.rotate(this.currentAngle);

    var toTransform = kony.ui.makeAffineTransform();
    toTransform.rotate(newAngle);

    this.view.RiskRateChart.flxPin.animate(
      kony.ui.createAnimation({
        "0": {
          "transform": fromTransform
        },
        "100": {
          "stepConfig": {
            "timingFunction": kony.anim.EASE_IN_OUT
          },
          "transform": toTransform
        }
      }),
      {
        "duration": 0.6,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
      },
      {}
    );

    this.currentAngle = newAngle;
  },
  riskOptionSelect: function(riskType){
    if(riskType==="CRI"){
      this.view.btnRisk1.skin = "sknBtnLeftHighLite";
      this.view.btnRisk2.skin = "sknBtnRightUnSelect";
      this.view.flxRatingScore.isVisible = true;
      this.view.flxRiskScoreFCY.isVisible = false;
      this.view.flxRiskScoreLCY.isVisible = false;
      this.updateGauge(15);
    }else{
      this.view.btnRisk1.skin = "sknBtnLeftUnSelect";
      this.view.btnRisk2.skin = "sknBtnRightHighLite";
      this.view.flxRatingScore.isVisible = false;
      this.view.flxHide.isVisible = false;
      this.view.flxRiskScoreFCY.isVisible = true;
      this.view.flxRiskScoreLCY.isVisible = true;
      this.updateGauge(5);
    }
  }
});