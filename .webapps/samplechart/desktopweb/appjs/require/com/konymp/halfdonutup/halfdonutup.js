define(function() {
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
})