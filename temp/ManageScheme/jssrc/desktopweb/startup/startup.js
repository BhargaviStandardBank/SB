voltmx.appinit.setApplicationMetaConfiguration("appid", "ManageScheme");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "ManageScheme",
    appName: "ManageScheme",
    appVersion: "1.0.0",
    isturlbase: "https://voltmxtechnohub.hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "c880b579628e1df5e9bc282b29e44a17",
    appSecret: "78d020446b96fed99d5037290e350332",
    serviceUrl: "https://100000032.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000032.auth.hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://voltmxtechnohub.hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "0000019D01CD77C0",
        "appId": "7717d44e-81b2-4784-8331-cf95272d5fff",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "ManageScheme",
        "reportingsvc": {
            "session": "https://voltmxtechnohub.hclvoltmx.net/services/IST",
            "custom": "https://voltmxtechnohub.hclvoltmx.net/services/CMS"
        },
        "baseId": "d04474af-e1cd-44cf-99fb-0e8a48480dfc",
        "app_default_version": "1.0",
        "services_meta": {},
        "Webapp": {
            "url": "https://voltmxtechnohub.hclvoltmx.net/apps/ManageScheme"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    microApps: {
        "SBCommon": {
            "appVersion": "1.0.0",
            "appId": "SBCommon",
            "appName": "SBCommon"
        },
        "ManageScheme": {
            "appVersion": "1.0.0",
            "appId": "ManageScheme",
            "appName": "ManageScheme"
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
                        "friendlyName": "frmSchemeList",
                        "appName": "ManageScheme"
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