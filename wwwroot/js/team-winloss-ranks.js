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
      var options = 
      {
        chart: 
        {
          type: 'bar'
        },
        plotOptions: 
        {
          bar: 
          {
            horizontal: true,
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

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();
    }
    else
    {
      handleError();
    }
  };
xhttp.onerror = handleError;
xhttp.send();

