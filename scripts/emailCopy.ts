document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]') as HTMLAnchorElement;

    if (!emailLink) return;

    emailLink.addEventListener('click', async (e) => {
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
        setTimeout(async () => {
            window.removeEventListener('blur', onBlur);

            // If window didn't blur, email client likely didn't open
            if (!emailClientOpened) {
                try {
                    // Copy email to clipboard as fallback
                    await navigator.clipboard.writeText(email);
                    showCopyNotification('Email copied to clipboard!');
                } catch (err) {
                    console.error('Failed to copy email:', err);
                    showCopyNotification('Email: ' + email);
                }
            }
        }, 500);
    });

    function showCopyNotification(message: string) {
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
