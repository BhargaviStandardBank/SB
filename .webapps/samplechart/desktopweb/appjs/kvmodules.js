define('applicationController',{
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
define('com/konymp/halfdonutup/analytics',[],function() {
    return {
        analyticsHost: "https://sampleapps.hclvoltmx.net:443/services/data/v1/analytics/objects/log",
        constructBody: function() {
            try {
                var date = new Date();
                var deviceInfo = this.getDeviceOS();
                var body = {
                    "deviceModel": deviceInfo.model,
                    "Locale": kony.i18n.getCurrentDeviceLocale().language,
                    "Platform": deviceInfo.name,
                    "PlatformVersion": deviceInfo.version,
                    "appId": appConfig.appId,
                    "serviceUrl": appConfig.serviceUrl,
                    "itemGuid": "adadc24660954136a4ef439b6b2c409b",
                    "assetName": "com.konymp.halfdonutup",
                    "assetVersion": "1.0.0",
                    "releaseMode": !appConfig.isDebug,
                    "konySdkVersion": kony.sdk.version,
                    "date": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    "endpointId": this.generateUniqueId(),
                    "deviceHeight": deviceInfo.deviceHeight,
                    "deviceWidth": deviceInfo.deviceWidth,
                    "kuid": "100dcb25991c439f913d254d1c244313",
                };
                return body;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        notifyAnalytics: function() {
            try {
                if (this.checkInternetConnectivity() && this.isItFirstTime()) {
                    var httpclient = new kony.net.HttpRequest();
                    httpclient.open(constants.HTTP_METHOD_POST, this.analyticsHost);
                    httpclient.setRequestHeader("Content-Type", "application/json");
                    httpclient.send(JSON.stringify(this.constructBody()));
                }
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        getDeviceOS: function() {
            try {
                return kony.os.deviceInfo();
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        generateUniqueId: function() {
            try {
                return kony.crypto.createHMacHash("SHA512", this.getDeviceOS().deviceid, "KonyAnalytics");
            } catch (exception) {
                kony.print(JSON.stringify(exception));
            }
        },
        isItFirstTime: function() {
            var bodyDetails = this.constructBody();
            var assetVersion = kony.store.getItem(bodyDetails.assetName + "Version");
            if (kony.sdk.isNullOrUndefined(assetVersion) || assetVersion != bodyDetails.assetVersion) {
                kony.store.setItem(bodyDetails.assetName + "Version", bodyDetails.assetVersion);
                return true;
            } else {
                return false;
            }
        },
        checkInternetConnectivity: function() {
            return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
    };
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
define('com/konymp/halfdonutup/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
/**
 * Created by Team Kony.
 * Copyright (c) 2017 Kony Inc. All rights reserved.
 */
/**
 * @controller: Doughnut Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates doughnut chart by taking the data as input
 */
define("com/konymp/halfdonutup/userhalfdonutupController", ['com/konymp/halfdonutup/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/halfdonutup/konyLogger');
    konymp = {};
    konymp.logger = new konyLoggerModule("Half Donut Up Component");
    return {
        /**
         * @function constructor
         * @private
         * @params {Object} baseConfig, layoutConfig, pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "halfdonutup" + "/analytics");
            analytics.notifyAnalytics();
            konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
            this._chartProperties = {
                _titleFontSize: 12,
                _titleFontColor: "#000000",
                _enableLegend: true,
                _legendFontSize: 10,
                _legendFontColor: "#000000",
                _bgColor: "#ffffff",
                _enableChartAnimation: true
            };
            this._data = [];
            this._chartTitle = "";
            this._enableStaticPreview = true;
            chart_hDonutUp_defined_global = function(state) {
                if (state === 'ready') {
                    this.myPostShow();
                }
            }.bind(this);
            konymp.logger.trace("----------Exiting constructor---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function initGetterSetters
         * @private
         * @description: Logic for getters/setters of custom properties
         */
        initGettersSetters: function() {
            konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
            this.hexCodeFormat = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
            defineSetter(this, "chartData", function(val) {
                konymp.logger.trace("----------Entering data Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._data = val.data;
                konymp.logger.trace("----------Exiting data Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "chartTitle", function(val) {
                konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartTitle = val;
                konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableStaticPreview", function(val) {
                konymp.logger.trace("----------Entering enableStaticPreview Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._enableStaticPreview = val;
                konymp.logger.trace("----------Exiting enableStaticPreview Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontSize", function(val) {
                konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._titleFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Title font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "titleFontColor", function(val) {
                konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._titleFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidTitleFontColorCode",
                            "message": "Title Font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidTitleFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableLegend", function(val) {
                konymp.logger.trace("----------Entering enableLegend Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableLegend = val;
                konymp.logger.trace("----------Exiting enableLegend Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontSize", function(val) {
                konymp.logger.trace("----------Entering legendFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (!isNaN(parseInt(val))) {
                        this._chartProperties._legendFontSize = val;
                    } else {
                        throw {
                            "Error": "NotNumber",
                            "message": "Legend font size value should be a number"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "NotNumber") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting legendFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "legendFontColor", function(val) {
                konymp.logger.trace("----------Entering legendFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._legendFontColor = val;
                    } else {
                        throw {
                            "Error": "InvalidLegendFontColorCode",
                            "message": "Legend Font color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidLegendFontColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting legendFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "bgColor", function(val) {
                konymp.logger.trace("----------Entering bgColor Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (this.hexCodeFormat.test(val)) {
                        this._chartProperties._bgColor = val;
                    } else {
                        throw {
                            "Error": "InvalidBackgroundColorCode",
                            "message": "Background color code must be in hex format. Eg.:#000000"
                        };
                    }
                } catch (exception) {
                    konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                    if (exception.Error === "InvalidBackgroundColorCode") {
                        throw (exception);
                    }
                }
                konymp.logger.trace("----------Exiting bgColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
                konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
                this._chartProperties._enableChartAnimation = val;
                konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            this.view.gaugeUpBrowser.onPageFinished = this.myPostShow.bind(this);
            konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function createDonutChart         
         * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of doughnut chart
         */
        createChart: function(dataSet) {
            konymp.logger.trace("----------Entering createDonutChart Function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (dataSet === undefined) {
                    if (this._data.length < 0) throw {
                        Error: 'No Data',
                        message: "no data assigned for chart"
                    };
                    else dataSet = this._data;
                }
                var data = dataSet.map(function(obj) {
                    return Number(obj.Value || obj.value);
                });
                var labels = dataSet.map(function(obj) {
                    return obj.label;
                });
                var colors = dataSet.map(function(obj) {
                    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
                    if (obj.colorCode === null || obj.colorCode === "" || (!regColorcode.test(obj.colorCode))) {
                        throw {
                            error: "wrong dataType",
                            message: "wrong colorCode for data " + JSON.stringify(obj.colorCode)
                        };
                    }
                    return obj.colorCode;
                });
                if (this.validateAllParams(this._chartTitle, data, labels, colors)) {
                    this.view.gaugeUpBrowser.evaluateJavaScript('var x = new konymp.charts.gaugeUp();x.Generate_GaugeUpChart(' + JSON.stringify(this._chartTitle) + ',' + JSON.stringify(labels) + ',' + JSON.stringify(data) + ',' + JSON.stringify(colors) + ',' + JSON.stringify(this._chartProperties) + ');');
                }
                this.view.forceLayout();
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.error === "wrong dataType") {
                    throw exception;
                }
            }
        },
        /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
        _validationData: function(data, type) {
            konymp.logger.trace("----------Entering _validationData Function---------", konymp.logger.FUNCTION_ENTRY);
            if (type === 'array') {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return Array.isArray(data);
            } else if (typeof data === type) {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return true;
            } else {
                konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
                return false;
            }
        },
        /**
         * @function validateAllParams
         * @private
         * @param {String} title 
         * @param {js array} data 
         * @param {js array} labels 
         * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
         */
        validateAllParams: function(title, data, labels, colors) {
            konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
            if (!this._validationData(title, 'string')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for title " + title
                };
            }
            if (!this._validationData(data, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for data " + JSON.stringify(data)
                };
            }
            if (!this._validationData(labels, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for labels " + JSON.stringify(labels)
                };
            }
            if (!this._validationData(colors, 'array')) {
                throw {
                    error: "wrong dataType",
                    message: "wrong dataType for bgColor " + JSON.stringify(colors)
                };
            }
            konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
            return true;
        },
        /**
         * @function
         *@description: called to create using data
         */
        myPostShow: function() {
            try {
                if (this._enableStaticPreview === true) {
                    this.createChart(this._data);
                    return;
                }
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        }
    };
});
define("com/konymp/halfdonutup/halfdonutupControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/halfdonutup/halfdonutupController", ["com/konymp/halfdonutup/userhalfdonutupController", "com/konymp/halfdonutup/halfdonutupControllerActions"], function() {
    var controller = require("com/konymp/halfdonutup/userhalfdonutupController");
    var actions = require("com/konymp/halfdonutup/halfdonutupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});

define('com/konymp/halfdonutup/halfdonutup',[],function() {
    return function(controller) {
        var halfdonutup = new voltmx.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "halfdonutup",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknslFbox5",
            "top": "0dp",
            "width": "100%",
            "appName": "samplechart"
        }, controller.args[0], "halfdonutup"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "halfdonutup"), extendConfig({}, controller.args[2], "halfdonutup"));
        halfdonutup.setDefaultUnit(voltmx.flex.DP);
        var gaugeUpBrowser = new voltmx.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "gaugeUpBrowser",
            "isVisible": true,
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "Chart_halfDonutUp/halfDonutUp.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "gaugeUpBrowser"), extendConfig({}, controller.args[1], "gaugeUpBrowser"), extendConfig({}, controller.args[2], "gaugeUpBrowser"));
        halfdonutup.add(gaugeUpBrowser);
        return halfdonutup;
    }
});
define('com/konymp/halfdonutup/halfdonutupConfig',[],function() {
    return {
        "properties": [{
            "name": "chartTitle",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableLegend",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "chartData",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableChartAnimation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontSize",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableStaticPreview",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "titleFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "legendFontColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["createChart"],
        "events": []
    }
});
define("flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "samplechart"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new voltmx.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new voltmx.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new voltmx.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": voltmx.flex.USE_PREFERRED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
});
define("flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "samplechart"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
});
define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("flxSectionHeaderTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return voltmx.visualizer.mixinControllerActions(controller, controllerActions);
});

define("navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});
define("navigation/NavigationController", {
    //Add your navigation controller code here.
});

require(['applicationController','com/konymp/halfdonutup/analytics','com/konymp/halfdonutup/konyLogger','com/konymp/halfdonutup/halfdonutupController','com/konymp/halfdonutup/halfdonutup','com/konymp/halfdonutup/halfdonutupConfig','flxSampleRowTemplate','flxSectionHeaderTemplate','flxSampleRowTemplateController','flxSectionHeaderTemplateController','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

