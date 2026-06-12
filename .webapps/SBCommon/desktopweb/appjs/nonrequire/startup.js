voltmx.appinit.setApplicationMetaConfiguration("appid", "SBCommon");
voltmx.appinit.setApplicationMetaConfiguration("build", "debug");
voltmx.appinit.setApplicationMetaConfiguration("defaultLocale", "ar");
voltmx.appinit.setApplicationMetaConfiguration("locales", ["ar", "en", "es", "fa", "fr", "my", "ps", "ru", "rw", "so", "sw", "tg", "uk"]);
voltmx.appinit.setApplicationMetaConfiguration("i18nArray", []);
voltmx.appinit.setApplicationMetaConfiguration("localization", "true");
voltmx.appinit.setApplicationMetaConfiguration("i18nVersion", "1127536542");
//startup.js
var appConfig = {
    appId: "SBCommon",
    appName: "SBCommon",
    appVersion: "1.0.0",
    isturlbase: "https://voltmxtechnohub.hclvoltmx.net/services",
    isDebug: true,
    isMFApp: true,
    appKey: "94dcc2826fa268cb794795035354f753",
    appSecret: "cfac1307111e3d73d72d810fc5d9d195",
    serviceUrl: "https://100000032.auth.hclvoltmx.net/appconfig",
    svcDoc: {
        "selflink": "https://100000032.auth.hclvoltmx.net/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "_internal_logout": "https://voltmxtechnohub.hclvoltmx.net/services/IST"
        },
        "service_doc_etag": "0000019DF8078298",
        "appId": "ff621e7f-f19e-42dd-8730-2c67b0bd5f53",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "SBCommon",
        "reportingsvc": {
            "session": "https://voltmxtechnohub.hclvoltmx.net/services/IST",
            "custom": "https://voltmxtechnohub.hclvoltmx.net/services/CMS"
        },
        "baseId": "d915070b-39be-4cf1-884f-0d5d5decfdac",
        "app_default_version": "1.0",
        "services_meta": {},
        "Webapp": {
            "url": "https://voltmxtechnohub.hclvoltmx.net/apps/SBCommon"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
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
        isCompositeApp: false,
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
                    new voltmx.mvc.Navigation("frmHome").navigate();
                }
            });
        });
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    _kony.mvc.initCompositeApp(false);
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
    voltmx.i18n.setDefaultLocaleAsync("ar", onSuccess, onFailure, null);
};