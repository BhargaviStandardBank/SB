voltmx.appinit.setApplicationMetaConfiguration("appid", "SuspendList");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "SuspendList",
    appName: "SuspendList",
    appVersion: "1.0.0",
    isturlbase: "https://voltmxtechnohub.hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "77a6dd2209b0797c45ff49fe3141360f",
    appSecret: "310be8e7c4e490c050f610590e50e09b",
    serviceUrl: "https://100000032.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000032.auth.hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://voltmxtechnohub.hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "0000019D01B3A660",
        "appId": "814a004b-38eb-4ff3-9b15-e3179e78e3ba",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "SuspendList",
        "reportingsvc": {
            "session": "https://voltmxtechnohub.hclvoltmx.net/services/IST",
            "custom": "https://voltmxtechnohub.hclvoltmx.net/services/CMS"
        },
        "baseId": "02c68401-683e-4a41-ad06-a714d9b20023",
        "app_default_version": "1.0",
        "services_meta": {},
        "Webapp": {
            "url": "https://voltmxtechnohub.hclvoltmx.net/apps/SuspendList"
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
        "SuspendList": {
            "appVersion": "1.0.0",
            "appId": "SuspendList",
            "appName": "SuspendList"
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
                        "friendlyName": "frmAddSuspend",
                        "appName": "SuspendList"
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
};