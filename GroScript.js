/**
 * Created by session1 on 10/13/15.
 */

google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['United States', 225000000],
        ['Brazil', 202656788],
        ['Canada', 18858980],
        ['Mexico', 103527885],
        ['RU', 155000000],
        ['China', 935000000]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}