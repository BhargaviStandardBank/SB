define({
  /** ---------------- STATE ---------------- **/
  _masterFinancialData: [],
  //let header:"";
  /** ---------------- ENTRY ---------------- **/
  onNavigate(header) {
    try {
      this.header = "Credit Risk / "+ header.formID.appInfo + " / "+header.lblMenuItem;
      this._setupDataMap();
      this._initializeTabActions();
      this.preShowHandler();
      this.view.flxHide.isVisible = false;
      this._initializeView()
        .catch(err => {
        throw new Error(`Form Initialization Failed: ${err.message}`);
      });
    } catch (error) {
      kony.print(`Error in onNavigate: ${error.message}`);
    }
  },

  preShowHandler() {
    try {
	  this.view.FormHeader.lblHdr.text = this.header;
      this.view.RiskRateChart.imgPin.anchorPoint = { x: 0.5, y: 1 };
      this.currentAngle = 0;

      const transform = kony.ui.makeAffineTransform();
      transform.rotate(this.currentAngle);

      this.view.RiskRateChart.flxPin.transform = transform;
    } catch (error) {
      kony.print(`Error in preShowHandler: ${error.message}`);
    }
  },

  /** ---------------- DATA MAPPING ---------------- **/
  _setupDataMap() {
    try {
      this.view.lblOutStandingBalHDr.text = "Outstanding \n Balance";
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
    } catch (error) {
      kony.print(`Error in _setupDataMap: ${error.message}`);
    }
  },

  /** ---------------- ACTIONS ---------------- **/
  _initializeTabActions() {
    try {
      this.view.flxInternalExpo.onClick = () => this._switchTab("INTERNAL");
      this.view.flxFixedAssets.onClick = () => this._switchTab("FIXED");
      this.view.flxPersonalInfo.onClick = () => this._switchTab("PERSONALINFO");
      this.view.flxCollateral.onClick = () => this._switchTab("COLLATERAL");
      this.view.flxInsuranceAss.onClick = () => this._switchTab("INSURANCE");
      this.view.flxOperationalInfo.onClick = () => this._switchTab("OPERATIONAL");
      this.view.flxRiskRating.onClick = () => this._switchTab("RISKRATING");
      this.view.flxContactInfo.onClick = ()=> this._switchTab("CONTACTINFO");
      this.view.flxScoredLendingInsi.onClick = ()=> this._switchTab("SCOREDLEND");
      this.view.flxEconomicGrowth.onClick = ()=>this._switchTab("ECONOMICGROW");

      this.view.chkAddress.onSelection = this.adressCheck.bind(this);

      this.view.btnRisk1.onClick = () => this.riskOptionSelect("BRI");
      this.view.btnRisk2.onClick = () => this.riskOptionSelect("CRI");
      this.view.btnRisk3.onClick = () => this.riskOptionSelect("ERI");
      this.view.btnRisk4.onClick = () => this.riskOptionSelect("BBRS");
      this.view.btnRisk5.onClick = () => this.riskOptionSelect("CRS");
    } catch (error) {
      kony.print(`Error in _initializeTabActions: ${error.message}`);
    }
  },
  
  adressCheck: function(){
    try {
      const selectedKeys = this.view.chkAddress.selectedKeys;
      const isSameAddress = (selectedKeys && selectedKeys.length > 0);
      this.view.flxPhysicalAddress.isVisible = !isSameAddress;
    } catch (error) {
      kony.print(`Error in addressCancel: ${error.message}`);
    }
  },

  _switchTab(tabName) {
    try {
      const { view } = this;
      view.flxInternalLine.isVisible = (tabName === "INTERNAL");
      view.flxFixedLine.isVisible = (tabName === "FIXED");
      view.flxCollateralLine.isVisible = (tabName === "COLLATERAL");
      view.flxInsuranceLine.isVisible = (tabName === "INSURANCE");
      view.flxOpInfoLine.isVisible = (tabName === "OPERATIONAL");
      view.flxRiskRatingLine.isVisible = (tabName === "RISKRATING");
      view.flxLineContInfo.isVisible = (tabName === "CONTACTINFO");
      view.flxLinePersonalInfo.isVisible = (tabName === "PERSONALINFO");
      view.flxLineScoredLend.isVisible = (tabName === "SCOREDLEND");
      view.flxLineEconomicGrowth.isVisible = (tabName === "ECONOMICGROW");

      view.flxSegData.isVisible = (tabName === "INTERNAL");
      view.flxChart.isVisible = (tabName === "INTERNAL");
      view.flxCollaInfo.isVisible = (tabName === "COLLATERAL");
      view.flxOpInfo.isVisible = (tabName === "OPERATIONAL");
      view.flxRiskTypes.isVisible = (tabName === "RISKRATING");
      view.flxRiskInsight.isVisible = (tabName === "RISKRATING");
      view.flxContInfo.isVisible = (tabName === "CONTACTINFO");
      view.flxPersonalData.isVisible = (tabName === "PERSONALINFO");

      if (tabName === "COLLATERAL") {
        this._buildCollateralUI(GlobalData.collateralData)
          .catch(err => { throw new Error(`Dynamic UI Build Failed: ${err.message}`); });
      }

      if (tabName === "RISKRATING") {
        this.updateGauge(15);
      }
    } catch (error) {
      kony.print(`Error in _switchTab: ${error.message}`);
    }
  },

  /** ---------------- ASYNC DATA LOADING ---------------- **/
  _initializeView() {
    return new Promise((resolve, reject) => {
      try {
        this._masterFinancialData = [...GlobalData.financialRecords];
        this._renderSegment(this._masterFinancialData);
        resolve(true);
      } catch (error) {
        reject(new Error(`Failed to load global data: ${error.message}`));
      }
    });
  },

  /** ---------------- RENDER LOGIC ---------------- **/
  _renderSegment(data = []) {
    try {
      const processedData = data.map(item => {
        const {
          type, accNo, bri, balance, instalment, arrears, due,
          origAmount, origLimit, currLimit, rate, date, term, rem
        } = item;

        return {
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
      this.view.forceLayout();
    } catch (error) {
      kony.print(`Error in _renderSegment: ${error.message}`);
    }
  },

  _buildCollateralUI(data = []) {
    return new Promise((resolve, reject) => {
      try {
        this.view.flxCollaInfo.removeAll();
        let currentHorizontalFlex = null;

        data.forEach((record, index) => {
          if (index % 3 === 0) {
            currentHorizontalFlex = this._createHorizontalRow(index);
            this.view.flxCollaInfo.add(currentHorizontalFlex);
          }
          const collateralCard = this._createCollateralCard(record, index);
          currentHorizontalFlex.add(collateralCard);
        });

        this.view.forceLayout();
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  },

  _createHorizontalRow(index) {
    try {
      return new voltmx.ui.FlexContainer({
        id: `flxRow${index}`,
        top: "20dp",
        left: "0dp",
        width: "100%",
        height: '50%',
        skin: "sknFlxTrans",
        layoutType: voltmx.flex.FLOW_HORIZONTAL,
        isVisible: true
      }, {}, {});
    } catch (error) {
      kony.print(`Error in _createHorizontalRow: ${error.message}`);
    }
  },

  _createCollateralCard(record, index) {
    try {
      const { type, detail, account, value } = record;

      const flxCard = new voltmx.ui.FlexContainer({
        id: `flxCollData${index}`,
        width: "48%",
        height: "100%",
        left: "2%",
        skin: "sknFlxWhiteBGBlckBrdr",
        layoutType: voltmx.flex.FREE_FORM
      }, {}, {});

      const lblType = new voltmx.ui.Label({
        id: `lblType${index}`,
        text: type,
        skin: "sknLblFormLevel",
        top: "15dp", left: "15dp"
      }, {}, {});

      const lblDetail = new voltmx.ui.Label({
        id: `lblDetail${index}`,
        text: detail,
        skin: "sknLblFormLevel",
        top: "35dp", left: "15dp"
      }, {}, {});

      const lblAccount = new voltmx.ui.Label({
        id: `lblAcct${index}`,
        text: account,
        skin: "sknLblFormLevel",
        top: "75dp", left: "15dp"
      }, {}, {});

      const lblVal = new voltmx.ui.Label({
        id: `lblVal${index}`,
        text: value,
        skin: "sknLblFormLevel",
        right: "15dp"
      }, {}, {});

      flxCard.add(lblType, lblDetail, lblAccount, lblVal);
      return flxCard;
    } catch (error) {
      kony.print(`Error in _createCollateralCard: ${error.message}`);
    }
  },

  updateGauge(rating) {
    try {
      const newAngle = this.getAngleFromRating(rating);
      this.rotateNeedle(newAngle);
    } catch (error) {
      kony.print(`Error in updateGauge: ${error.message}`);
    }
  },

  getAngleFromRating(rating) {
    try {
      if (rating >= 1 && rating <= 12) return -75;
      if (rating >= 13 && rating <= 19) return -35;
      if (rating >= 20 && rating <= 22) return 0;
      if (rating >= 23 && rating <= 25) return 35;
      return 75;
    } catch (error) {
      kony.print(`Error in getAngleFromRating: ${error.message}`);
      return 0;
    }
  },

  rotateNeedle(newAngle) {
    try {
      const fromTransform = kony.ui.makeAffineTransform();
      fromTransform.rotate(this.currentAngle);

      const toTransform = kony.ui.makeAffineTransform();
      toTransform.rotate(newAngle);

      this.view.RiskRateChart.flxPin.animate(
        kony.ui.createAnimation({
          "0": { "transform": fromTransform },
          "100": {
            "stepConfig": { "timingFunction": kony.anim.EASE_IN_OUT },
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
    } catch (error) {
      kony.print(`Error in rotateNeedle: ${error.message}`);
    }
  },

  riskOptionSelect(riskType) {
    try {
      const { view } = this;
      view.lblHdrRiskType.text = "Risk Rating - "+riskType;
      view.hide.lblDetail.skin = "sknLblWhiteFormLevel";
      view.hide.lblDetailValue.skin = "sknLblWhiteFormLevel";
      if (riskType === "BRI") {
        view.btnRisk1.skin = "sknBtnLeftHighLite";
        view.btnRisk2.skin = "sknBtnUnSelect";
        view.btnRisk3.skin = "sknBtnUnSelect";
        view.btnRisk4.skin = "sknBtnUnSelect";
        view.btnRisk5.skin = "sknBtnRightUnSelect";
        view.flxRatingScore.isVisible = true;
        view.flxHide.isVisible = true;
        view.flxRiskScoreFCY.isVisible = false;
        view.flxRiskScoreLCY.isVisible = false;
        this.updateGauge(15);
      } else if  (riskType === "CRI"){
        view.btnRisk1.skin = "sknBtnLeftUnSelect";
        view.btnRisk2.skin = "sknBtnSelect";
        view.btnRisk3.skin = "sknBtnUnSelect";
        view.btnRisk4.skin = "sknBtnUnSelect";
        view.btnRisk5.skin = "sknBtnRightUnSelect";
        view.flxRatingScore.isVisible = true;
        view.flxHide.isVisible = true;
        view.flxRiskScoreFCY.isVisible = false;
        view.flxRiskScoreLCY.isVisible = false;
        this.updateGauge(40);
      }else if(riskType === "ERI"){
        view.btnRisk1.skin = "sknBtnLeftUnSelect";
        view.btnRisk2.skin = "sknBtnUnSelect";
        view.btnRisk3.skin = "sknBtnSelect";
        view.btnRisk4.skin = "sknBtnUnSelect";
        view.btnRisk5.skin = "sknBtnRightUnSelect";
        view.flxRatingScore.isVisible = true;
        view.flxHide.isVisible = true;
        view.flxRiskScoreFCY.isVisible = false;
        view.flxRiskScoreLCY.isVisible = false;
        this.updateGauge(23);
      }else if(riskType === "BBRS"){
        view.btnRisk1.skin = "sknBtnLeftUnSelect";
        view.btnRisk2.skin = "sknBtnUnSelect";
        view.btnRisk3.skin = "sknBtnUnSelect";
        view.btnRisk4.skin = "sknBtnSelect";
        view.btnRisk5.skin = "sknBtnRightUnSelect";
        view.flxRatingScore.isVisible = true;
        view.flxHide.isVisible = true;
        view.flxRiskScoreFCY.isVisible = false;
        view.flxRiskScoreLCY.isVisible = false;
        this.updateGauge(23);
      }else{
        view.btnRisk1.skin = "sknBtnLeftUnSelect";
        view.btnRisk2.skin = "sknBtnUnSelect";
        view.btnRisk3.skin = "sknBtnUnSelect";
        view.btnRisk4.skin = "sknBtnUnSelect";
        view.btnRisk5.skin = "sknBtnRightHighLite";
        view.flxRatingScore.isVisible = false;
        view.flxHide.isVisible = false;
        view.flxRiskScoreFCY.isVisible = true;
        view.flxRiskScoreLCY.isVisible = true;
        this.updateGauge(5);
      }
    } catch (error) {
      kony.print(`Error in riskOptionSelect: ${error.message}`);
    }
  }
});