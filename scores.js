async function fetchLiveNFLData() {
    const url = 'http://localhost:3000/api/live-nfl-scores'; // Your local server endpoint

    try {
        const response = await fetch(url);
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
