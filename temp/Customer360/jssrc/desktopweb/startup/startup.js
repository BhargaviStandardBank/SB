voltmx.appinit.setApplicationMetaConfiguration("appid", "Customer360");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "Customer360",
    appName: "Customer360",
    appVersion: "1.0.0",
    isturlbase: "https://voltmxtechnohub.hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "bb2ef9b312044a52e95499fcef5393bd",
    appSecret: "684013406e542982ea699651b4a4f404",
    serviceUrl: "https://100000032.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000032.auth.hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://voltmxtechnohub.hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "0000019D77CB4F10",
        "appId": "940abcbd-e3e1-49b1-ab40-3580b2b4604b",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "Customer360",
        "reportingsvc": {
            "session": "https://voltmxtechnohub.hclvoltmx.net/services/IST",
            "custom": "https://voltmxtechnohub.hclvoltmx.net/services/CMS"
        },
        "baseId": "7590f609-b356-4c7c-9276-bf9f735dba68",
        "app_default_version": "1.0",
        "services_meta": {}
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    microApps: {
        "SBCommon": {
            "appVersion": "1.0.0",
            "appId": "SBCommon",
            "appName": "SBCommon"
        },
        "Customer360": {
            "appVersion": "1.0.0",
            "appId": "Customer360",
            "appName": "Customer360"
        }
    },
};
sessionID = "";

function setAppBehaviors() {
    voltmx.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        APILevel: 10000,
        strictMode: false,
        isCompositeApp: true,
        packageAsPortlet: false
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    voltmx.appinit.setRequireBasepath();
    require(['kvmodules'], function() {
        require(['applicationController'], function(appController) {
            applicationController = appController;
            voltmx.application.setApplicationInitializationEvents({
                init: applicationController.appInit,
                postappinit: applicationController.postAppInitCallBack,
                showstartupform: function() {
                    new voltmx.mvc.Navigation({
                        "friendlyName": "frmCustomer",
                        "appName": "Customer360"
                    }).navigate();
                }
            });
        });
    });
};

function loadResources() {
    _kony.mvc.initCompositeApp(true);
    voltmx.theme.packagedthemes(["classicTheme", "default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl,
    }
    voltmx.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
    if (voltmx.rosettajs) {
        voltmx.rosettajs.API.setDefaultFrameworkAsVoltMX();
        voltmx.rosettajs.API.converter.config.setRosettaJSname('voltmx.rosettajs');
        voltmx.rosettajs.API.setDefaultAPIAsNotes();
    }
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    voltmx.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    voltmx.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};function getSPARequireModulesList(){ return ['kvmodules']; }