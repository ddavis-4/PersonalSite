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
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (!emailLink)
        return;
    emailLink.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        // Extract email from mailto: link
        const email = emailLink.href.replace('mailto:', '');
        // Track if window loses focus (indicates email client opened)
        let emailClientOpened = false;
        const onBlur = () => {
            emailClientOpened = true;
            window.removeEventListener('blur', onBlur);
        };
        window.addEventListener('blur', onBlur);
        // Try to open mailto: link
        window.location.href = emailLink.href;
        // Wait 500ms to see if email client opened
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            window.removeEventListener('blur', onBlur);
            // If window didn't blur, email client likely didn't open
            if (!emailClientOpened) {
                try {
                    // Copy email to clipboard as fallback
                    yield navigator.clipboard.writeText(email);
                    showCopyNotification('Email copied to clipboard!');
                }
                catch (err) {
                    console.error('Failed to copy email:', err);
                    showCopyNotification('Email: ' + email);
                }
            }
        }), 500);
    }));
    function showCopyNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        // Trigger fade-in
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
});
