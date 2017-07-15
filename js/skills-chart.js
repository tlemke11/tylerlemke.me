var codeChartId = document.getElementById('coding-skills-chart').getContext('2d');
var codeChart = new Chart(codeChartId, {
    type: 'horizontalBar',
    data: {
        labels: ['PHP', 'HTML/CSS', 'Javascript', 'MySQL', 'C++', 'NativeScript', 'Android'  ],
        datasets: [{
            label: 'Code Skills',
            data: [1, 1, 1, 1, 1, .25, .25],
            backgroundColor: [

            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Years of Experience"
                }
            }]
        }
    }

});

