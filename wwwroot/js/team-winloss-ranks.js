  function teamHandleError()
  {
    var node = document.createElement("div");
    var text = document.createTextNode("There was a problem loading team win/loss ranks. Maybe try refreshing the page?");

    node.classList.add("alert");
    node.classList.add("alert-danger");
    node.setAttribute("role", "alert");

    node.appendChild(text);
    document.getElementById("team-chart").appendChild(node);
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
              dataLabels: {
                  position: 'top'
              }
          }
        },
        series: [{
          name: 'Conservative Rank',
          data: data.seriesconservative
        }],
        xaxis: {
          categories: data.fullnames
        }
      }

      var chart = new ApexCharts(document.querySelector("#team-chart"), options);
      
      chart.render();

      var tierTable = document.getElementById("team-tier-table");
      
      for(var i = 0; i < data.seriesconservative.length; ++i)
      {        
        var team = data.fullnames[i];
        var rank = data.seriesconservative[i];
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
      teamHandleError();
    }
  };
xhttp.onerror = teamHandleError;
xhttp.send();

