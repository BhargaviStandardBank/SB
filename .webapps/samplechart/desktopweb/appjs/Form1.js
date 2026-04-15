define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(voltmx.flex.DP);
            var FlexContainer0i992bc1d48eb40 = new voltmx.ui.FlexContainer({
                "autogrowMode": voltmx.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "focusSkin": "slFFocusbox",
                "height": "100%",
                "id": "FlexContainer0i992bc1d48eb40",
                "isVisible": true,
                "layoutType": voltmx.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "samplechart"
            }, {
                "paddingInPixel": false
            }, {});
            FlexContainer0i992bc1d48eb40.setDefaultUnit(voltmx.flex.DP);
            var halfdonutup = new com.konymp.halfdonutup({
                "height": "100%",
                "id": "halfdonutup",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknslFbox5",
                "top": "0dp",
                "width": "100%",
                "appName": "samplechart",
                "viewType": "halfdonutup",
                "overrides": {
                    "halfdonutup": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            halfdonutup.chartTitle = "Half Donut Up";
            halfdonutup.enableLegend = true;
            halfdonutup.bgColor = "#ffffff";
            halfdonutup.chartData = {
                "data": [{
                    "colorCode": "#1B9ED9",
                    "label": "data1",
                    "value": "60"
                }, {
                    "colorCode": "#97CDED",
                    "label": "data2",
                    "value": "20"
                }, {
                    "colorCode": "#76C044",
                    "label": "data3",
                    "value": "40"
                }, {
                    "colorCode": "#E8672B",
                    "label": "data4",
                    "value": "60"
                }],
                "schema": [{
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Label",
                    "columnHeaderType": "text",
                    "columnID": "label",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "c8434b6cbed443e6a6167d99e8c3bdcb"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Value",
                    "columnHeaderType": "text",
                    "columnID": "value",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "cddb65c1fe8c429bb5a4b5f93bd171ef"
                }, {
                    "columnHeaderTemplate": null,
                    "columnHeaderText": "Color Code",
                    "columnHeaderType": "text",
                    "columnID": "colorCode",
                    "columnOnClick": null,
                    "columnText": "Not Defined",
                    "columnType": "text",
                    "kuid": "f722303b71a8439eae528d9af9856f30"
                }]
            };
            halfdonutup.enableChartAnimation = true;
            halfdonutup.titleFontSize = "12";
            halfdonutup.legendFontSize = "8";
            halfdonutup.enableStaticPreview = true;
            halfdonutup.titleFontColor = "#000000";
            halfdonutup.legendFontColor = "#000000";
            FlexContainer0i992bc1d48eb40.add(halfdonutup);
            this.compInstData = {
                "halfdonutup": {
                    "right": "",
                    "bottom": "",
                    "minWidth": "",
                    "minHeight": "",
                    "maxWidth": "",
                    "maxHeight": "",
                    "centerX": "",
                    "centerY": ""
                }
            }
            this.add(FlexContainer0i992bc1d48eb40);
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
            "appName": "samplechart",
            "info": {
                "kuid": "h65b8fa693a54a1889247d4a578558fa"
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