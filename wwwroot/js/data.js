$(document).ready(function() 
{
    loadJson("https://s3-us-west-1.amazonaws.com/sillyfantasy.com/data/current/sorted-team-projections.json");
});

function loadJson(url)
{
    $.getJSON(url, function(data)
    {
        var weekText = "Week: " + data.Week;

        if (data.Week > 17)
        {
            if (data.Week === 18)
            {
                weekText = "Playoffs: Wild Card Round";
            }
            else if (data.Week === 19)
            {
                weekText = "Playoffs: Divisional Round";
            }
            else if (data.Week === 20)
            {
                weekText = "Playoffs: NFC/AFC Championship";
            }
            else if (data.Week === 21)
            {
                weekText = "Super Bowl";
            }
        }

        $("*[data-id='season']").html(data.Season);
        $("*[data-id='week']").html(weekText);
        $("*[data-id='timestamp']").html(data.Timestamp);

        var projectedPoints =
        {
            x: data.ByScore.Values,
            y: data.ByScore.Teams,
            name: "Projected Points",
            error_x: 
            {
                type: 'data',
                symmetric: false,
                array: arrayDiff(data.ByScore.Ceilings, data.ByScore.Values),
                arrayminus: arrayDiff(data.ByScore.Values, data.ByScore.Floors),
                visible: true,
                color: 'rgba(12,156,0,0.7)'
            },
            type: 'scatter',
            orientation: 'h',
            mode: 'markers+text',
            text: data.ByScore.Values.map(String),
            textposition: 'top center',
            marker:
            {
                size:10,
                color: 'rgba(12,156,0,1.0)'
            }
        };

        var projectedPassYards = JSON.parse(JSON.stringify(projectedPoints));
        projectedPassYards.x = data.ByPassYards.Values;
        projectedPassYards.y = data.ByPassYards.Teams;
        projectedPassYards.error_x.array = arrayDiff(data.ByPassYards.Ceilings, data.ByPassYards.Values);
        projectedPassYards.error_x.arrayminus = arrayDiff(data.ByPassYards.Values, data.ByPassYards.Floors);
        projectedPassYards.text = data.ByPassYards.Values.map(String);

        var projectedRushYards = JSON.parse(JSON.stringify(projectedPoints));
        projectedRushYards.x = data.ByRushYards.Values;
        projectedRushYards.y = data.ByRushYards.Teams;
        projectedRushYards.error_x.array = arrayDiff(data.ByRushYards.Ceilings, data.ByRushYards.Values);
        projectedRushYards.error_x.arrayminus = arrayDiff(data.ByRushYards.Values, data.ByRushYards.Floors);
        projectedRushYards.text = data.ByRushYards.Values.map(String);

        var projectedPassTDs = JSON.parse(JSON.stringify(projectedPoints));
        projectedPassTDs.x = data.ByPassTDs.Values;
        projectedPassTDs.y = data.ByPassTDs.Teams;
        projectedPassTDs.error_x.array = arrayDiff(data.ByPassTDs.Ceilings, data.ByPassTDs.Values);
        projectedPassTDs.error_x.arrayminus = arrayDiff(data.ByPassTDs.Values, data.ByPassTDs.Floors);
        projectedPassTDs.text = data.ByPassTDs.Values.map(String);

        var projectedRushTDs = JSON.parse(JSON.stringify(projectedPoints));
        projectedRushTDs.x = data.ByRushTDs.Values;
        projectedRushTDs.y = data.ByRushTDs.Teams;
        projectedRushTDs.error_x.array = arrayDiff(data.ByRushTDs.Ceilings, data.ByRushTDs.Values);
        projectedRushTDs.error_x.arrayminus = arrayDiff(data.ByRushTDs.Values, data.ByRushTDs.Floors);
        projectedRushTDs.text = data.ByRushTDs.Values.map(String);

        var fantasyPotential = JSON.parse(JSON.stringify(projectedPoints));
        fantasyPotential.x = data.ByFP.Values;
        fantasyPotential.y = data.ByFP.Teams;
        fantasyPotential.error_x.array = arrayDiff(data.ByFP.Ceilings, data.ByFP.Values);
        fantasyPotential.error_x.arrayminus = arrayDiff(data.ByFP.Values, data.ByFP.Floors);
        fantasyPotential.text = data.ByFP.Values.map(String);

        var pointsMedian =
        {
            x: data.ByScore.Medians,
            y: data.ByScore.Teams,
            name: "Points Median",
            error_x:
            {
                type: 'data',
                array: data.ByScore.Stddevs,
                visible: true,
                color: 'rgba(160,160,160,0.5)' 
            },
            type: 'scatter',
            mode: 'markers+text',
            text: data.ByScore.Medians.map(String),
            textposition: 'bottom center',
            textfont : 
            {
                color: 'rgba(160,160,160,0.5)'
            },
            marker:
            {
                size: 9,
                color: 'rgba(160,160,160,0.5)'
            },
            orientation: 'h'
        };

        var passYardsMedian = JSON.parse(JSON.stringify(pointsMedian));
        passYardsMedian.x = data.ByPassYards.Medians;
        passYardsMedian.y = data.ByPassYards.Teams;
        passYardsMedian.error_x.array = data.ByPassYards.Stddevs;
        passYardsMedian.text = data.ByPassYards.Medians.map(String);

        var rushYardsMedian = JSON.parse(JSON.stringify(pointsMedian));
        rushYardsMedian.x = data.ByRushYards.Medians;
        rushYardsMedian.y = data.ByRushYards.Teams;
        rushYardsMedian.error_x.array = data.ByRushYards.Stddevs;
        rushYardsMedian.text = data.ByRushYards.Medians.map(String);

        var passTDsMedian = JSON.parse(JSON.stringify(pointsMedian));
        passTDsMedian.x = data.ByPassTDs.Means;
        passTDsMedian.y = data.ByPassTDs.Teams;
        passTDsMedian.error_x.array = data.ByPassTDs.Stddevs;
        passTDsMedian.text = data.ByPassTDs.Medians.map(String);

        var rushTDsMedian = JSON.parse(JSON.stringify(pointsMedian));
        rushTDsMedian.x = data.ByRushTDs.Means;
        rushTDsMedian.y = data.ByRushTDs.Teams;
        rushTDsMedian.error_x.array = data.ByRushTDs.Stddevs;
        rushTDsMedian.text = data.ByRushTDs.Medians.map(String);

        var numTeams = projectedPoints.y.length;
        var height = 450;

        if (numTeams > 4)
        {
            height = numTeams * 65;
        }

        var layout = 
        {
            yaxis: 
            {
                showgrid: true,
                showline: true,
                linecolor: 'rgb(102, 102, 102)',
                tickfont: 
                {
                    font: 
                    {
                        color: 'rgb(102, 102, 102)'
                    }
                },
                autotick: true,
                dtick: 1,
                ticks: 'outside',
                tickcolor: 'rgb(102, 102, 102)'
            },
            xaxis:
            {
                tickfont:
                {
                    font:
                    {
                        size: 8,
                    }
                },
                dtick:5
            },
            height:height,
            margin: 
            {
                l: 50,
                r: 50,
                b: 50,
                t: 50
            },
            legend: 
            {
                font: 
                {
                    size: 10,
                },
                orientation: 'h'
            },
            paper_bgcolor: 'rgb(255, 255, 255)',
            plot_bgcolor: 'rgb(255, 255, 255)',
            hovermode: 'closest'
        };

        var passLayout = JSON.parse(JSON.stringify(layout));
        passLayout.xaxis.dtick = 25;
        var rushLayout = JSON.parse(JSON.stringify(layout));
        rushLayout.xaxis.dtick = 20;
        var tdLayout = JSON.parse(JSON.stringify(layout));
        tdLayout.xaxis.dtick = 1;
        var fpLayout = JSON.parse(JSON.stringify(layout));
        fpLayout.xaxis.dtick = 5;
        
        var projectedPointsGraph = $("div[data-id='projected-points-all']")[0];
        var projectedPassYardsGraph = $("div[data-id='projected-pass-yards']")[0];
        var projectedRushYardsGraph = $("div[data-id='projected-rush-yards']")[0];
        var projectedPassTDsGraph = $("div[data-id='projected-pass-tds']")[0];
        var projectedRushTDsGraph = $("div[data-id='projected-rush-tds']")[0];
        var fantasyPotentialGraph = $("div[data-id='fantasy-potential']")[0];
          
        Plotly.newPlot(projectedPointsGraph, [projectedPoints, pointsMedian], layout, { responsive: true, displayModeBar: false });
        Plotly.newPlot(projectedPassYardsGraph, [projectedPassYards, passYardsMedian], passLayout, { responsive: true, displayModeBar: false });
        Plotly.newPlot(projectedRushYardsGraph, [projectedRushYards, rushYardsMedian], rushLayout, { responsive: true, displayModeBar: false });
        Plotly.newPlot(projectedPassTDsGraph, [projectedPassTDs, passTDsMedian], tdLayout, { responsive: true, displayModeBar: false });
        Plotly.newPlot(projectedRushTDsGraph, [projectedRushTDs, rushTDsMedian], tdLayout, { responsive: true, displayModeBar: false });
        Plotly.newPlot(fantasyPotentialGraph, [fantasyPotential], fpLayout, { responsive: true, displayModeBar: false });
    })
    .fail(function(xhr)
    {
        window.location.replace("error.html");
        //alert("An error occured: " + xhr.status + " " + xhr.statusText);
    });
}

function arrayDiff(vals1, vals2)
{
    var x = vals1.map(function(item, index) 
    {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return item - vals2[index];
    });

    return(x);
}