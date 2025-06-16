const state = {
    view: {
        squares: document.querySelectorAll (".square"),
        enemy: document.querySelector (".enemi"),
        timeLeft: document.querySelector ("#time-left"),
        score: document.querySelector ("#score"),
    },
    values: {timerId: setInterval (randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,

    },

};

function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! Seu Resultado foi" + state.values.result);
    }
}

function playSound(){
    let audio = new Audio("assets/audios/audio2.mp3");
    audio.volume = 0.2
    audio.play();
};

function randomSquare() {
    state.view.squares.forEach((square)=>{square.classList.remove("enemi");

    });
let randomNunber = Math.floor(Math.random() * 9);
let randomSquare = state.view.squares[randomNunber];
    randomSquare.classList.add("enemi");
    state.values.hitPosition = randomSquare.id;

}

/*function moveEnemi() {
state.values.timerId = setInterval (randomSquare, state.values.gameVelocity);
}*/

function addListenerHitBox () {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () =>{
        if(square.id === state.values.hitPosition) {
            state.values.result++
            state.view.score.textContent = state.values.result;
            state.values.hitPosition = null;
            playSound();
        }
      });
    });
};

function initialize () {
  addListenerHitBox();
  /* moveEnemi();*/
    
}

initialize();