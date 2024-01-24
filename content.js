/**
 * This file is only loaded if the URL satisfies the matched pattern in manifest.json.
 */

/**
 * DOMContentLoaded listener won't work because the page is already loaded
 * CM dynamically pulls in content, so we need to wait for the checkbox to be added
 */

const checkCheckboxStatus = () => {
    const checkbox = document.getElementById('move-css-inline-choice');
    if (checkbox) {
        if (checkbox.checked) {
            /**
             * Click works better than changing the checked property.
             * CM will recheck after clicking on the import button.
             */
            checkbox.click();
            // checkbox.checked = false;
            // checkbox.dispatchEvent(new Event('change'));

            /**
             * Deactivate the checkbox so it can't be clicked again.
             */

            const checkboxParent = document.querySelector(
                '.qa-checkbox-move-css-inline-choice'
            );

            if (checkboxParent) {
                // Add a class to the parent element to style the checkbox
                checkboxParent.style.pointerEvents = 'none';
                checkboxParent.style.opacity = '0.3';
            }
        }
    }
};

/**
 * Check checkbox status when the page initially loads.
 */
checkCheckboxStatus();

/**
 * Use MutationObserver to detect changes in the DOM.
 * CM dynamically pulls in content when importing, using listeners won't work in most cases.
 */
const observer = new MutationObserver(() => {
    // Check the checkbox status when the DOM changes
    checkCheckboxStatus();
});

/**
 * Observe changes in the document.
 */
observer.observe(document.body, {
    childList: true,
    subtree: true
});
