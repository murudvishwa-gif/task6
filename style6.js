// Task 1: Username Formatter
function formatUsername() {
    let input = document.getElementById("username").value.trim();
    let output = input.toUpperCase().replace(/\s+/g, "_");
    document.getElementById("userResult").innerText = output;
}

// Task 2: Email Validator
function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.includes("@") && email.endsWith(".com")) {
        document.getElementById("emailResult").innerText = "Valid Email";
    } else {
        document.getElementById("emailResult").innerText = "Invalid Email";
    }
}

// Task 3: Word Counter
function countWords() {
    let text = document.getElementById("sentence").value.trim();
    let words = text.split(/\s+/);
    document.getElementById("wordResult").innerText = words.length;
}

// Task 4: Replace Second Word Only
function replaceSecondWord() {
    let text = document.getElementById("replaceText").value;
    let words = text.split(" ");
    if (words.length >= 2) {
        words[1] = "javascript";
    }
    document.getElementById("replaceResult").innerText = words.join(" ");
}

// Task 5: Password Strength Checker
function checkPassword() {
    let pass = document.getElementById("password").value;
    let strong = pass.length >= 8 &&
        /[A-Z]/.test(pass) &&
        /[a-z]/.test(pass) &&
        /[0-9]/.test(pass);

    document.getElementById("passResult").innerText = strong ? "Strong" : "Weak";
}

// Task 6: Reverse a String
function reverseString() {
    let text = document.getElementById("reverseText").value;
    let reversed = text.split("").reverse().join("");
    document.getElementById("reverseResult").innerText = reversed;
}

// Task 7: Find Day of Birth
function findDay() {
    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;
    let d = document.getElementById("date").value;

    if (m < 1 || m > 12 || d < 1 || d > 31) {
        document.getElementById("dayResult").innerText = "Invalid Date";
        return;
    }

    let date = new Date(y, m - 1, d);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    document.getElementById("dayResult").innerText = "You were born on " + days[date.getDay()];
}

// Task 8: Live Digital Clock
function updateClock() {
    let now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Task 9: Date Difference Calculator
function dateDifference() {
    let d1 = new Date(document.getElementById("date1").value);
    let d2 = new Date(document.getElementById("date2").value);

    let diff = Math.abs(d2 - d1);
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("dateResult").innerText = days + " days";
}

// Task 10: Character Frequency Counter
function charFrequency() {
    let text = document.getElementById("charInput").value;
    let freq = {};

    for (let char of text) {
        freq[char] = (freq[char] || 0) + 1;
    }

    document.getElementById("charResult").innerText = JSON.stringify(freq);
}