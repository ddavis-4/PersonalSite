// This is the file for the surprise message that appears when the user likes and subscribes.
//
//
//
//
//

document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector('.content');

    // Create the like and subscribe pop up
    const stickyTab = document.createElement('div');
    stickyTab.className = 'sticky-tab';
    stickyTab.innerHTML = `
        <p>Thank you for visiting! Please like and subscribe!</p>
        <div class="sticky-buttons">
            <div class="button-group">
                <button id="like-button">Like</button>
                <button id="subscribe-button">Subscribe</button>
            </div>
            <a href="https://kuathletics.com/sports/mens-basketball/schedule" target="_blank" id="ku-record" class="ku-record">--</a>
        </div>
    `;

    // Append to the body
    document.body.appendChild(stickyTab);

    // Fetch KU basketball record
    fetchKURecord();

    // Track when buttons are clicked
    let likeClicked = false;
    let subscribeClicked = false;

    const newLocal = 'click';
    // Like button 
    const likeButton = document.getElementById('like-button');
    const subscribeButton = document.getElementById('subscribe-button');

    if (likeButton) {
        likeButton.addEventListener('click', function() {
            likeClicked = true;
            this.classList.add('clicked'); // Change button color to red 'hi style.css'
            checkButtons();
        });
    }

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            subscribeClicked = true;
            this.classList.add('clicked'); // Change button color to red 'hi style.css'
            checkButtons();
        });
    }

    // Function to check if both buttons are clicked
    function checkButtons() {
        if (likeClicked && subscribeClicked) {
            stickyTab.style.display = 'none'; // Hide the tab when both buttons are clicked
            showMessage(); // Show the message
        }
    }

    // Function to show the message
    function showMessage() {
        const message = document.createElement('div');
        message.className = 'popup-message'; // No slide-in class initially
        message.innerText = 'ROCK CHALK JAYHAWK, GO KU!';
        document.body.appendChild(message);

        // Trigger the slide-in effect after appending
        setTimeout(() => {
            message.classList.add('slide-in'); // Add slide-in class to start animation
        }, 10); // Small timeout to ensure the class is applied after the element is in the DOM

        // Remove the message after 5 seconds
        setTimeout(() => {
            message.style.display = 'none'; // Hide the message
            document.body.removeChild(message); // Remove the message from the DOM

            // Wait 1 more second, then show the Jayhawk card
            setTimeout(() => {
                showJayhawkCard();
            }, 1000);
        }, 5000);
    }

    // Function to fetch KU basketball record
    async function fetchKURecord() {
        const recordElement = document.getElementById('ku-record');
        if (!recordElement) return;

        const TEAM_ID = '2305';
        const API_URL = `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${TEAM_ID}`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch data');

            const data = await response.json();
            const team = data.team;
            const record = team.record?.items?.[0];

            if (record && record.stats) {
                const wins = record.stats.find((s: any) => s.name === 'wins')?.value || 0;
                const losses = record.stats.find((s: any) => s.name === 'losses')?.value || 0;
                recordElement.textContent = `${wins}-${losses}`;
            } else {
                recordElement.textContent = '--';
            }
        } catch (error) {
            console.error('Error fetching KU record:', error);
            recordElement.textContent = '--';
        }
    }

    // Auto-refresh every 5 minutes
    setInterval(fetchKURecord, 300000);

    // Function to show the Jayhawk card with record and next game
    async function showJayhawkCard() {
        const recordElement = document.getElementById('ku-record');
        const currentRecord = recordElement?.textContent || '--';

        // Fetch next game info
        const nextGameInfo = await fetchNextGame();

        const jayhawkCard = document.createElement('div');
        jayhawkCard.className = 'jayhawk-card';
        // Set background image via JavaScript instead of CSS
        jayhawkCard.style.backgroundImage = 'url(/pictures/allenbackground.jpeg)';
        jayhawkCard.innerHTML = `
            <div class="jayhawk-record">${currentRecord}</div>
            ${nextGameInfo ? `<div class="jayhawk-next-game">${nextGameInfo}</div>` : ''}
        `;

        document.body.appendChild(jayhawkCard);

        // Trigger fade-in animation
        setTimeout(() => {
            jayhawkCard.classList.add('fade-in');
        }, 10);
    }

    // Function to fetch next game
    async function fetchNextGame(): Promise<string | null> {
        const TEAM_ID = '2305';
        const SCHEDULE_URL = `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${TEAM_ID}/schedule`;

        try {
            const response = await fetch(SCHEDULE_URL);
            if (!response.ok) return null;

            const data = await response.json();
            const events = data.events;

            // Find the next upcoming game
            const now = new Date();
            const nextGame = events.find((event: any) => {
                const gameDate = new Date(event.date);
                return gameDate > now && event.competitions?.[0]?.status?.type?.name !== 'STATUS_FINAL';
            });

            if (nextGame) {
                const gameDate = new Date(nextGame.date);
                const opponent = nextGame.competitions[0].competitors.find((c: any) => c.id !== TEAM_ID);
                const opponentName = opponent?.team?.shortDisplayName || opponent?.team?.displayName || 'TBD';

                // Calculate time until game
                const msUntil = gameDate.getTime() - now.getTime();
                const days = Math.floor(msUntil / (1000 * 60 * 60 * 24));
                const hours = Math.floor((msUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((msUntil % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((msUntil % (1000 * 60)) / 1000);

                let timeString = '';
                if (days > 0) {
                    timeString = `: ${days}D`;
                } else if (hours > 0) {
                    timeString = `: ${hours}H`;
                } else if (minutes > 0) {
                    timeString = `: ${minutes}M`;
                } else if (seconds > 0) {
                    timeString = `: ${seconds}S`;
                } else {
                    timeString = 'NOW';
                }

                return `KU VS ${opponentName} ${timeString}`;
            }

            return null;
        } catch (error) {
            console.error('Error fetching next game:', error);
            return null;
        }
    }
});
