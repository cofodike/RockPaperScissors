/* My solution */

let playGame = confirm("Would you like to play a game of Rock-Paper-Scissors?");

if (playGame) {
  rockPaperScissors = ["rock", "paper", "scissors"];
  let computerHand =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  let userEntry = prompt(
    `Enter 1 for "Rock", 2 for "Paper", 3 for "Scissors". \nEnter anything else to exit!\nComputer hand ${computerHand}.`
  );

  if (!isNaN(userEntry) && userEntry > 0 && userEntry < 4) {
    let playerHand = rockPaperScissors[userEntry - 1];
    console.log(`Player hand: ${playerHand}. Computer Hand: ${computerHand}.`);

    let winner =  computerHand === playerHand ? 'tie game!':
        ((playerHand == "scissors" && computerHand == "paper") || (playerHand == "paper" && computerHand == "rock") || (playerHand == "rock" && computerHand == "scissors"))
        ? "player" : 'computer'
          if (winner == 'player' || winner == 'computer'){
            console.log(`winner is ${winner}`);
          }else{
            console.log(winner);
          }
  } else {
    alert("exiting..");
  }
} else {
  alert("Ok :(");
}


