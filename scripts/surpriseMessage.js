"use strict";
// This is the file for the surprise message that appears when the user likes and subscribes.
//
//
//
//
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", function () {
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
        likeButton.addEventListener('click', function () {
            likeClicked = true;
            this.classList.add('clicked'); // Change button color to red 'hi style.css'
            checkButtons();
        });
    }
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function () {
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
    function fetchKURecord() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const recordElement = document.getElementById('ku-record');
            if (!recordElement)
                return;
            const TEAM_ID = '2305';
            const API_URL = `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${TEAM_ID}`;
            try {
                const response = yield fetch(API_URL);
                if (!response.ok)
                    throw new Error('Failed to fetch data');
                const data = yield response.json();
                const team = data.team;
                const record = (_b = (_a = team.record) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0];
                if (record && record.stats) {
                    const wins = ((_c = record.stats.find((s) => s.name === 'wins')) === null || _c === void 0 ? void 0 : _c.value) || 0;
                    const losses = ((_d = record.stats.find((s) => s.name === 'losses')) === null || _d === void 0 ? void 0 : _d.value) || 0;
                    recordElement.textContent = `${wins}-${losses}`;
                }
                else {
                    recordElement.textContent = '--';
                }
            }
            catch (error) {
                console.error('Error fetching KU record:', error);
                recordElement.textContent = '--';
            }
        });
    }
    // Auto-refresh every 5 minutes
    setInterval(fetchKURecord, 300000);
    // Function to show the Jayhawk card with record and next game
    function showJayhawkCard() {
        return __awaiter(this, void 0, void 0, function* () {
            const recordElement = document.getElementById('ku-record');
            const currentRecord = (recordElement === null || recordElement === void 0 ? void 0 : recordElement.textContent) || '--';
            // Fetch next game info
            const nextGameInfo = yield fetchNextGame();
            const jayhawkCard = document.createElement('div');
            jayhawkCard.className = 'jayhawk-card';
            // Set background image via JavaScript instead of CSS
            jayhawkCard.style.backgroundImage = 'url(pictures/allenbackground.jpeg)';
            jayhawkCard.innerHTML = `
            <div class="jayhawk-record">${currentRecord}</div>
            ${nextGameInfo ? `<div class="jayhawk-next-game">${nextGameInfo}</div>` : ''}
        `;
            document.body.appendChild(jayhawkCard);
            // Trigger fade-in animation
            setTimeout(() => {
                jayhawkCard.classList.add('fade-in');
            }, 10);
        });
    }
    // Function to fetch next game
    function fetchNextGame() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const TEAM_ID = '2305';
            const SCHEDULE_URL = `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${TEAM_ID}/schedule`;
            try {
                const response = yield fetch(SCHEDULE_URL);
                if (!response.ok)
                    return null;
                const data = yield response.json();
                const events = data.events;
                // Find the next upcoming game
                const now = new Date();
                const nextGame = events.find((event) => {
                    var _a, _b, _c, _d;
                    const gameDate = new Date(event.date);
                    return gameDate > now && ((_d = (_c = (_b = (_a = event.competitions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.name) !== 'STATUS_FINAL';
                });
                if (nextGame) {
                    const gameDate = new Date(nextGame.date);
                    const opponent = nextGame.competitions[0].competitors.find((c) => c.id !== TEAM_ID);
                    const opponentName = ((_a = opponent === null || opponent === void 0 ? void 0 : opponent.team) === null || _a === void 0 ? void 0 : _a.shortDisplayName) || ((_b = opponent === null || opponent === void 0 ? void 0 : opponent.team) === null || _b === void 0 ? void 0 : _b.displayName) || 'TBD';
                    // Calculate time until game
                    const msUntil = gameDate.getTime() - now.getTime();
                    const days = Math.floor(msUntil / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((msUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((msUntil % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((msUntil % (1000 * 60)) / 1000);
                    let timeString = '';
                    if (days > 0) {
                        timeString = `: ${days}D`;
                    }
                    else if (hours > 0) {
                        timeString = `: ${hours}H`;
                    }
                    else if (minutes > 0) {
                        timeString = `: ${minutes}M`;
                    }
                    else if (seconds > 0) {
                        timeString = `: ${seconds}S`;
                    }
                    else {
                        timeString = 'NOW';
                    }
                    return `KU VS ${opponentName} ${timeString}`;
                }
                return null;
            }
            catch (error) {
                console.error('Error fetching next game:', error);
                return null;
            }
        });
    }
});
