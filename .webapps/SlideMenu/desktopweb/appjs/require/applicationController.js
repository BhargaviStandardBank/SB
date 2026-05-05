define({
    appInit: function(params) {
        skinsInit();
        voltmx.mvc.registry.add("flxSampleRowTemplate", {
            "viewName": "flxSampleRowTemplate",
            "controllerName": "flxSampleRowTemplateController"
        });
        voltmx.mvc.registry.add("flxSectionHeaderTemplate", {
            "viewName": "flxSectionHeaderTemplate",
            "controllerName": "flxSectionHeaderTemplateController"
        });
        voltmx.mvc.registry.add("flxContent", {
            "viewName": "flxContent",
            "controllerName": "flxContentController"
        });
        voltmx.mvc.registry.add("flxRowTemplate", {
            "viewName": "flxRowTemplate",
            "controllerName": "flxRowTemplateController"
        });
        voltmx.mvc.registry.add("frmHome", {
            "viewName": "frmHome",
            "controllerName": "frmHomeController"
        });
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new voltmx.mvc.Navigation("frmHome").navigate();
    }
});