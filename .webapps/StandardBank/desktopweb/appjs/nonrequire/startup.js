voltmx.appinit.setApplicationMetaConfiguration("appid", "StandardBank");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
//startup.js
var appConfig = {
    appId: "StandardBank",
    appName: "StandardBank",
    appVersion: "1.0.0",
    isturlbase: "https://voltmxtechnohub.hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "207078c22fad797b00f67edfd3023c76",
    appSecret: "26e4e0d0423634adbb3149524c989125",
    serviceUrl: "https://100000032.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000032.auth.hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://voltmxtechnohub.hclvoltmx.net/services/IST",
            "LoginSer": "https://voltmxtechnohub.hclvoltmx.net/services/LoginSer"
        },
        "service_doc_etag": "0000019D77EDA808",
        "appId": "ec3a3fe3-fc60-4ef1-9856-60c371c055ee",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "StandardBank",
        "reportingsvc": {
            "session": "https://voltmxtechnohub.hclvoltmx.net/services/IST",
            "custom": "https://voltmxtechnohub.hclvoltmx.net/services/CMS"
        },
        "baseId": "ac303668-f56d-4163-82db-71fc28de5fc1",
        "app_default_version": "1.0",
        "services_meta": {
            "LoginSer": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://voltmxtechnohub.hclvoltmx.net/services/LoginSer"
            }
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
        },
        "Customer360": {
            "appVersion": "1.0.0",
            "appId": "Customer360",
            "appName": "Customer360"
        },
        "SuspendList": {
            "appVersion": "1.0.0",
            "appId": "SuspendList",
            "appName": "SuspendList"
        },
        "StandardBank": {
            "appVersion": "1.0.0",
            "appId": "StandardBank",
            "appName": "StandardBank"
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
                        "friendlyName": "frmLogin",
                        "appName": "StandardBank"
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