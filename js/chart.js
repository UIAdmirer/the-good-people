$(function () {
    $('#rg').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Rise of the Good'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 1 * 24 * 3600000 // 1 day
        },
        yAxis: {
            title: {
                text: 'Number of Unknown Angels'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2015, 0, 1),
            data: [
                1,2,3,2,1,3,5,4,2,1,1,6,4
            ]
        }]
    });
});
