function qbHandleError()
{
    var node = document.createElement("div");
    var text = document.createTextNode("There was a problem loading qb ranks. Maybe try refreshing the page?");

    node.classList.add("alert");
    node.classList.add("alert-danger");
    node.setAttribute("role", "alert");

    node.appendChild(text);
    document.getElementById("qb-chart").appendChild(node);
}

var qbXhttp = new XMLHttpRequest();

qbXhttp.open("GET", "https://s3-us-west-1.amazonaws.com/sillyfantasy.com/data/rank-qbs.json", true);
qbXhttp.onload = function() 
{
    if (this.status == 200) 
    {
        var data = JSON.parse(this.responseText);

        document.getElementById("last-update").innerHTML = data.lastupdate;

        var options = 
        {
            chart: 
            {
                height: 1000,
                type: 'bar'
            },
            plotOptions: 
            {
                bar: 
                {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'end'
            },
            series: [{
                name: 'Conservative Rank',
                data: data.seriesconservative
            }],
            xaxis: {
                categories: data.fullnames
            }
        }

        var chart = new ApexCharts(document.querySelector("#qb-chart"), options);
    
        chart.render();

        var tierTable = document.getElementById("qb-tier-table");
        var lastTier = 0;

        for(var i = 0; i < data.tiers.length; ++i)
        {        
            var tier = data.tiers[i];
            var player = data.fullnames[i];
            var team = data.teams[i];
            var rank = data.seriesconservative[i];

            if (lastTier !== tier)
            {
                lastTier = tier;
                var tierRow = document.createElement("tr");

                tierRow.classList.add("bg-light");

                var td = document.createElement("td");
                td.setAttribute("colspan", "3");
                td.setAttribute("align", "center");

                var strong = document.createElement("strong");
                var text = document.createTextNode("Tier " + tier);

                strong.appendChild(text);
                td.appendChild(strong);
                tierRow.appendChild(td);
                tierTable.appendChild(tierRow);
            }

            var row = document.createElement("tr");
            var cellPlayer = document.createElement("td");
            var cellTeam = document.createElement("td");
            var cellRank = document.createElement("td");
            var playerText = document.createTextNode(player);
            var teamText = document.createTextNode(team);
            var rankText = document.createTextNode(rank);

            cellPlayer.appendChild(playerText);
            cellTeam.appendChild(teamText);
            cellRank.appendChild(rankText);
            row.appendChild(cellPlayer);
            row.appendChild(cellTeam);
            row.appendChild(cellRank);
            tierTable.appendChild(row);
        }
    }
    else
    {
        qbHandleError();
    }
};
qbXhttp.onerror = qbHandleError;
qbXhttp.send();