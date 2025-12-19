"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const recordElement = document.getElementById('ku-record');
    const statusElement = document.getElementById('ku-status');
    if (!recordElement)
        return;
    // KU's team ID in ESPN API is 2305
    const TEAM_ID = '2305';
    const API_URL = `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${TEAM_ID}`;
    function fetchKURecord() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                if (statusElement) {
                    statusElement.textContent = 'Loading...';
                    statusElement.style.color = '#65A2BC';
                }
                const response = yield fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = yield response.json();
                // Extract record from the API response
                const team = data.team;
                const record = (_b = (_a = team.record) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b[0];
                if (record && record.stats) {
                    // Find wins and losses in the stats array
                    const wins = ((_c = record.stats.find((s) => s.name === 'wins')) === null || _c === void 0 ? void 0 : _c.value) || 0;
                    const losses = ((_d = record.stats.find((s) => s.name === 'losses')) === null || _d === void 0 ? void 0 : _d.value) || 0;
                    if (recordElement) {
                        recordElement.textContent = `${wins}-${losses}`;
                    }
                    if (statusElement) {
                        statusElement.textContent = '2024-25 Season';
                        statusElement.style.color = '#2F5873';
                    }
                }
                else {
                    throw new Error('Record data not available');
                }
            }
            catch (error) {
                console.error('Error fetching KU record:', error);
                if (recordElement) {
                    recordElement.textContent = 'Unavailable';
                }
                if (statusElement) {
                    statusElement.textContent = 'Check back later';
                    statusElement.style.color = '#999';
                }
            }
        });
    }
    // Fetch on page load
    fetchKURecord();
    // Auto-refresh every 5 minutes (300000ms)
    setInterval(fetchKURecord, 300000);
});
