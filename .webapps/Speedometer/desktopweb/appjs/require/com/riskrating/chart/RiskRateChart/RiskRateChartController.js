define("com/riskrating/chart/RiskRateChart/userRiskRateChartController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.currentAngle = 0;
            var transform = kony.ui.makeAffineTransform();
            transform.rotate(this.currentAngle);
            this.view.flxPin.transform = transform;
            //this.view.flxPin.doLayout = this.onPinLayout.bind(this);
            this.view.btnSubmit.onClick = this.onSubmitClicked.bind(this);
        },
        onPinLayout: function() {
            this.view.flxPin.anchorPoint = {
                x: 0.5,
                y: 1
            };
        },
        onSubmitClicked: function() {
            var value = parseInt(this.view.txtRating.text);
            if (isNaN(value) || value < 1 || value > 29) {
                alert("Please enter a valid rating from 1 to 29");
                return;
            }
            this.updateGauge(value);
        },
        updateGauge: function(rating) {
            var newAngle = this.getAngleFromRating(rating);
            this.rotateNeedle(newAngle);
        },
        getAngleFromRating: function(rating) {
            if (rating >= 1 && rating <= 12) return -75;
            if (rating >= 13 && rating <= 19) return -35;
            if (rating >= 20 && rating <= 22) return 0;
            if (rating >= 23 && rating <= 25) return 35;
            return 75;
        },
        rotateNeedle: function(newAngle) {
            var fromTransform = kony.ui.makeAffineTransform();
            fromTransform.rotate(this.currentAngle);
            var toTransform = kony.ui.makeAffineTransform();
            toTransform.rotate(newAngle);
            this.view.flxPin.animate(kony.ui.createAnimation({
                "0": {
                    "transform": fromTransform
                },
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE_IN_OUT
                    },
                    "transform": toTransform
                }
            }), {
                "duration": 0.6,
                "fillMode": kony.anim.FILL_MODE_FORWARDS
            }, {});
            this.currentAngle = newAngle;
        }
    };
});
define("com/riskrating/chart/RiskRateChart/RiskRateChartControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/riskrating/chart/RiskRateChart/RiskRateChartController", ["com/riskrating/chart/RiskRateChart/userRiskRateChartController", "com/riskrating/chart/RiskRateChart/RiskRateChartControllerActions"], function() {
    var controller = require("com/riskrating/chart/RiskRateChart/userRiskRateChartController");
    var actions = require("com/riskrating/chart/RiskRateChart/RiskRateChartControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
