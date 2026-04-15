define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0gfb0e5faacd949 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "FlexContainer0gfb0e5faacd949",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Speedometer"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0gfb0e5faacd949.setDefaultUnit(voltmx.flex.DP);
            var RiskRateChart = new com.riskrating.chart.RiskRateChart({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "focusSkin": "slFFocusbox",
                "height": "370dp",
                "id": "RiskRateChart",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxTrans",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "Speedometer",
                "overrides": {
                    "RiskRateChart": {
                        "height": "370dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            FlexContainer0gfb0e5faacd949.add(RiskRateChart);
            this.compInstData = {
                "RiskRateChart": {
                    "height": "370dp"
                }
            }
            this.add(FlexContainer0gfb0e5faacd949);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": voltmx.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "Speedometer",
            "info": {
                "kuid": "j7ec6788b546478f9fb9c1fce8b52682"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": voltmx.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});