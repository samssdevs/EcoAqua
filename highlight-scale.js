document.addEventListener('mouseup', function () {
    // Get the selected text
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    // If there's selected text
    if (!selection.isCollapsed) {
        // Wrap the selected text in a span with a class
        const span = document.createElement('span');
        span.className = 'highlighted-text';
        range.surroundContents(span);

        // Increase the font size of the selected text
        span.style.fontSize = '1.5em'; // Increase the font size

        // Revert the font size back to normal after a delay
        setTimeout(() => {
            span.style.fontSize = '1em';
        }, 1000); // Adjust the delay as needed

        // Clear the selection
        selection.removeAllRanges();
        
    }
});
