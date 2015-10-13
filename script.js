google.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Language', '2014 Language Speakers'],
        ['Mandarin', 935000000],
        ['Spanish', 405000000],
        ['English', 360000000],
        ['Portuguese', 215000000],
        ['Russian', 155000000]
    ]);

    var options = {
        title: '2014 Language Speakers(Estimated',
        width: 900,
        legend: { position: 'none' },
        chart: { title: '2014 Language Speakers',
            subtitle: 'Usage by population' },
        bars: 'horizontal', // Required for Material Bar Charts.
        axes: {
            x: {
                0: { side: 'top', label: 'Percentage'} // Top x-axis.
            }
        },
        bar: { groupWidth: "80%"}
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, options);
};