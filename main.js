var d = ['rock', 'paper', 'scissors'];

new Vue({
  el: "#app",
  data: {
    gameIsRunning: false,
    playerScore: 0,
    cpuScore: 0,
    playerChoose: '---',
    cpuChoose: '---'
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerScore = 0;
      this.cpuScore = 0;
      this.playerChoose = '---';
      this.cpuChoose = '---';
    },
    reset: function() {
      this.startGame();
    },
    rock: function() {
      var item = d[this.winnerItem()];
      this.playerChoose = 'rock';
      this.cpuChoose = item;
      if (item == "scissors") {
        this.playerScore++;
      } else if (item == "paper") {
        this.cpuScore++;
        return;
      } 
    },
    paper: function() {
      item = d[this.winnerItem()];
      this.playerChoose = "paper";
      this.cpuChoose = item;
      if (item == "rock") {
        this.playerScore++;
      } else if (item == "scissors") {
        this.cpuScore++;
        return;
      } 
    },
    scissors: function() {
      item = d[this.winnerItem()];
      this.playerChoose = "scissors";
      this.cpuChoose = item;
      if (item == "paper") {
        this.playerScore++;
      } else if (item == "rock") {
        this.cpuScore++;
        return;
      } 
    },
    winnerItem: function() {
      return Math.floor(Math.random() * 3);
    }
  }
});