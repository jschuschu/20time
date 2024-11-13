async function fetchLiveNFLData() {
    const apiKey = 'ad824b03d2134c6ba75c6cb7fdfe2bc9';
    const url = 'https://api.sportsdata.io/v3/nfl/scores/json/LiveGameStats';

    try {
        const response = await fetch(url, {
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey
            }
        });
        const data = await response.json();
        displayNFLData(data);
    } catch (error) {
        console.error("Error fetching NFL data:", error);
    }
}

function displayNFLData(data) {
    const container = document.getElementById("weekly-rankings");
    container.innerHTML = ''; 

    data.forEach(game => {
        const gameInfo = `
            <div class="game">
                <h3>${game.HomeTeam} vs ${game.AwayTeam}</h3>
                <p>Score: ${game.HomeScore} - ${game.AwayScore}</p>
                <p>Status: ${game.Status}</p>
            </div>
        `;
        container.innerHTML += gameInfo;
    });
}

fetchLiveNFLData();
setInterval(fetchLiveNFLData, 60000);
