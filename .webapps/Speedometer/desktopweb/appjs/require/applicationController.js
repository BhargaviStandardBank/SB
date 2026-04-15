define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.riskrating.chart.RiskRateChart", {
            "viewName": "RiskRateChart",
            "controllerName": "RiskRateChartController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.riskrating.chart",
            "classname": "RiskRateChart",
            "name": "com.riskrating.chart.RiskRateChart"
        });
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("Form1", {
            "viewName": "Form1",
            "controllerName": "Form1Controller"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("Form1").navigate();
    }
});