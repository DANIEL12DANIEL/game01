document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    let message = document.getElementById("message");

    // הוספת מאזינים לאירועים לכל כפתור
    document.getElementById("rock").addEventListener("click", function() { playGame("rock"); });
    document.getElementById("paper").addEventListener("click", function() { playGame("paper"); });
    document.getElementById("scissors").addEventListener("click", function() { playGame("scissors"); });

    // פונקציה שמבצעת את הלוגיקה של המשחק
    function playGame(userChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        let result;
        
        // בדיקה אם המשחק נגמר בתיקו
        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") || 
            (userChoice === "scissors" && computerChoice === "paper") || 
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            result = "You win!";
        } else {
            result = "Computer wins!";
        }
        
        // הצגת תוצאת המשחק
        message.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    }
});
