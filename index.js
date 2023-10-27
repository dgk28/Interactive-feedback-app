const goToNextPageButton = document.getElementById("btn");

// Add a click event listener to the button
goToNextPageButton.addEventListener("click", function() {
    // Specify the URL of the next page (page2.html)
    const nextPageURL = "indexnext.html";

    // Use window.location to navigate to the next page
    window.location.href = nextPageURL;
});


const ratings = document.getElementsByTagName("button");

// Loop through the buttons and add the click event listener
for (let i = 0; i < ratings.length; i++) {
    const button = ratings[i];
    
    // Check if the button's text is not "SUBMIT"
    if (button.textContent !== "SUBMIT") {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;
            localStorage.setItem("clickedButtonText", buttonText);
        });
    }
}
 






