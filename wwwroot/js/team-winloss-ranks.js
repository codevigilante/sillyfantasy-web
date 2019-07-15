  function handleError()
  {
    var node = document.createElement("div");
    var text = document.createTextNode("There was a problem loading team win/loss ranks. Maybe try refreshing the page?");

    node.classList.add("alert");
    node.classList.add("alert-danger");
    node.setAttribute("role", "alert");

    node.appendChild(text);
    document.getElementById("chart").appendChild(node);
  }
  
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://s3-us-west-1.amazonaws.com/sillyfantasy.com/data/rank-teams.json", true);
  xhttp.onload = function() 
  {
    if (this.status == 200) 
    {
      var data = JSON.parse(this.responseText);

      document.getElementById("last-update").innerHTML = data.lastupdate;

      var options = 
      {
        chart: 
        {
          height: 700,
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

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();

      var tierTable = document.getElementById("team-tier-table");
      var lastTier = 0;

      for(var i = 0; i < data.tiers.length; ++i)
      {        
        var tier = data.tiers[i];
        var team = data.fullnames[i];
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
        var cellTeam = document.createElement("td");
        var cellRank = document.createElement("td");
        var teamText = document.createTextNode(team);
        var rankText = document.createTextNode(rank);

        cellTeam.appendChild(teamText);
        cellRank.appendChild(rankText);
        row.appendChild(cellTeam);
        row.appendChild(cellRank);
        tierTable.appendChild(row);
      }
    }
    else
    {
      handleError();
    }
  };
xhttp.onerror = handleError;
xhttp.send();

