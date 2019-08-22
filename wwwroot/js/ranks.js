function populateTables(rankData, tableId)
{
    var tierTable = document.getElementById(tableId);
    var lastTier = 0;

    for(var i = 0; i < rankData.tiers.length; ++i)
    {     
        var num = i + 1;   
        var tier = rankData.tiers[i];
        var player = rankData.fullnames[i];
        var rank = rankData.seriesconservative[i];

        if (lastTier !== tier)
        {
            lastTier = tier;

            var tierRow = document.createElement("tr");
            var td = document.createElement("td");

            td.setAttribute("colspan", "3");
            td.setAttribute("align", "center");
            td.classList.add("p-1");
            td.classList.add("m-1");

            var strong = document.createElement("strong");
            var text = document.createTextNode("Tier " + tier);

            strong.appendChild(text);
            td.appendChild(strong);
            tierRow.appendChild(td);
            tierTable.appendChild(tierRow);
        }

        var row = document.createElement("tr");
        var cellNum = document.createElement("td");
        var cellPlayer = document.createElement("td");
        var cellRank = document.createElement("td");
        var numText = document.createTextNode(num);
        var playerText = document.createTextNode(player);
        var rankText = document.createTextNode(rank);

        cellNum.classList.add("p-1");
        cellPlayer.classList.add("p-1");
        cellRank.classList.add("p-1");
        //cellNum.classList.add("m-1");

        cellNum.appendChild(numText);
        cellPlayer.appendChild(playerText);
        cellRank.appendChild(rankText);

        row.appendChild(cellNum);
        row.appendChild(cellPlayer);
        row.appendChild(cellRank);
        tierTable.appendChild(row);
    }
}

function updateDate(dateStr)
{
    document.getElementById("last-update").innerHTML = dateStr;
}