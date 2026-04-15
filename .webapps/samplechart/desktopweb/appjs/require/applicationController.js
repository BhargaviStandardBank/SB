define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("com.konymp.halfdonutup", {
            "viewName": "halfdonutup",
            "controllerName": "halfdonutupController"
        });
        voltmx.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "halfdonutup",
            "name": "com.konymp.halfdonutup"
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
        voltmx.mvc.registry.add("Form2", {
            "viewName": "Form2",
            "controllerName": "Form2Controller"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("Form2").navigate();
    }
});