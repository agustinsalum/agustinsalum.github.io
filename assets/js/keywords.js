
var keywords = ["Programmer Analyst ", "Developer ", "Software Engineer ", "Web developer ", "Data Analyst ", "Freelance "];

// Counter of the current word
var index = 0;

// Function to animate keywords
function animateKeywords() {
    // Searches the HTML for the id 'keywords' attribute
    var keywordElement = document.getElementById('keywords');

    // If the index is less than the length of the array, continue the animation
    if (index < keywords.length) {
        var currentKeyword = keywords[index];
        var i = 0;
        // Sets a timer that repeatedly executes a function or a block of code every certain specified time interval
        var interval = setInterval(function () {
            // Check if we have reached the last letter of the current word
            if (i < currentKeyword.length - 1) {
                keywordElement.textContent += currentKeyword[i];
                i++;
            } else {
                clearInterval(interval);
                setTimeout(function () {
                    eraseKeyword(keywordElement);
                }, 1000); // Time to wait before deleting the word
            }
        }, 100); // Writing speed of each letter
    }
}

// Function to delete the current word
function eraseKeyword(element) {
    var interval = setInterval(function () {
        element.textContent = element.textContent.slice(0, -1);
        // If the entire word has been deleted
        if (element.textContent === '') {
            clearInterval(interval);
            index++;
            // If there are words left to animate, start the animation of the next word
            if (index < keywords.length) {
                setTimeout(function () {
                    animateKeywords();
                }, 500); // Timeout before displaying next word
            } else {
                // Reset the index to start the animation again
                index = 0;
                setTimeout(function () {
                    animateKeywords();
                }, 500); // Time to wait before displaying the first word
            }
        }
    }, 50); // Erasing speed of each letter
}


animateKeywords();
