document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the stored text content from local storage
    const buttonText = localStorage.getItem("clickedButtonText");

    if (buttonText) {
        // Update the text content of the element on the second page
        const displayText = document.getElementById("Rating");
        displayText.textContent =  buttonText;
    }
});