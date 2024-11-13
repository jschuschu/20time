import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/live-nfl-scores', async (req, res) => {
    try {
        const response = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/LiveGameStats', {
            headers: { 'Ocp-Apim-Subscription-Key': 'ad824b03d2134c6ba75c6cb7fdfe2bc9' }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
