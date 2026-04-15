define("com/riskrating/chart/RiskRateChart/userRiskRateChartController", function() {
    return {};
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
