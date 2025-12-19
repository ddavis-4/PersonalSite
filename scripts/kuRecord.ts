document.addEventListener('DOMContentLoaded', () => {
    const recordElement = document.getElementById('ku-record');
    const statusElement = document.getElementById('ku-status');

    if (!recordElement) return;

    // KU's team ID in ESPN API is 2305
    const TEAM_ID = '2305';
    const API_URL = `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${TEAM_ID}`;

    async function fetchKURecord() {
        try {
            if (statusElement) {
                statusElement.textContent = 'Loading...';
                statusElement.style.color = '#65A2BC';
            }

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();

            // Extract record from the API response
            const team = data.team;
            const record = team.record?.items?.[0];

            if (record && record.stats) {
                // Find wins and losses in the stats array
                const wins = record.stats.find((s: any) => s.name === 'wins')?.value || 0;
                const losses = record.stats.find((s: any) => s.name === 'losses')?.value || 0;

                if (recordElement) {
                    recordElement.textContent = `${wins}-${losses}`;
                }

                if (statusElement) {
                    statusElement.textContent = '2024-25 Season';
                    statusElement.style.color = '#2F5873';
                }
            } else {
                throw new Error('Record data not available');
            }

        } catch (error) {
            console.error('Error fetching KU record:', error);
            if (recordElement) {
                recordElement.textContent = 'Unavailable';
            }

            if (statusElement) {
                statusElement.textContent = 'Check back later';
                statusElement.style.color = '#999';
            }
        }
    }

    // Fetch on page load
    fetchKURecord();

    // Auto-refresh every 5 minutes (300000ms)
    setInterval(fetchKURecord, 300000);
});
