console.log("Working")

let game = document.getElementById('gameDisplay')
let ctx = game.getContext('2d')

console.log(getComputedStyle(game)["width"])
console.log(game.width)
console.log(game.height)

game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])
// Game displays based on screen 
const startDisplay = document.getElementById('startDisplay')
const gameDisplay = document.getElementById('gameDisplay')
const  loseDisplay = document.getElementById('loseDisplay')
const winDisplay = document.getElementById('winDisplay')
/*--------------- Game Assets --------------------*/

var playerStart = {
    x: 50,
    y: 100,
    width: 25,
    height: 25,
    color: "gold",
    alive: true,
    velocity: 10,
    gold: 0,
    health: 100,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemieOneStart = {
    x: Math.floor(Math.random(game.getAttribute('width'))),
    y: 0,
    width: 25,
    height: 25,
    color: "red",
    alive: true,
    velocity: 10,
    health: 50,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemieTwoStart = {
    x: 0,
    y: Math.floor(Math.random(game.height)),
    width: 25,
    height: 25,
    color: "red",
    alive: true,
    velocity: 10,
    health: 50,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var goldObjStart = {
    x: 200,
    y: 200,
    width: 15,
    height: 15,
    color: "#ffef96",
    alive: true,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let player = { ...playerStart }
let enemyOne = { ...enemieOneStart }
let enemyTwo = { ...enemieTwoStart }
let goldenO = { ...goldObjStart }

/*-------------------- Game Funcions -----------------------*/

var loop;
document.addEventListener('keydown', allMovement)
// initilize the game setup
function gameInit() {
    loseDisplay.style.display = 'none'
    winDisplay.style.display = 'none'
    //start the gameloop for the game board
    loop = setInterval(gameLoop, 60)
    function gameLoop() {
        ctx.clearRect(0, 0, game.width, game.height)
        if (enemyOne.alive) {
            enemyOne.render()
            detectHit()
            enemyOneMovement()
        }
        if (enemyTwo.alive) {
            enemyTwo.render()
            detectHit()
            enemyTwoMovement()
        }
        if (goldenO.alive) {
            goldenO.render()
            detectHit()
        }
        if (player.alive) {
            player.render()
            detectHit()

        }
        checkGame()
    }
    detectHit() 
    enemyOneMovement()
    enemyTwoMovement()
};

function allMovement(e) {
    switch (e.keyCode) {
        case (87): //w = 87; up = y - 10
            if (player.y > 0) {
                player.y -= 10
            }
            break;
        case (65): //a = 65; left = x -10
            if (player.x > 0) {
                player.x -= 10
            }
            break;
        case (83): //s = 83; down = y + 10
            if (player.y < game.height - player.height) {
                player.y += 10
            }
            break;
        case (68): //d = 68; right = x + 10
            if (player.x < game.width - player.width) {
                player.x += 10
            }
            break;
    }
}

function detectHit() {
    // if (player.x <= enemyOne.x + enemyOne.width
    //     && player.x + player.width >= enemyOne.x
    //     && player.y <= enemyOne.y + enemyOne.height
    //     && player.y + player.height >= enemyOne.y) {
    //         enemyOne.alive = false
    //     }
    // if (player.x <= enemyTwo.x + enemyTwo.width
    //     && player.x + player.width >= enemyTwo.x
    //     && player.y <= enemyTwo.y + enemyTwo.height
    //     && player.y + player.height >= enemyTwo.y){
    //         enemyTwo.alive = false
    //     }
    if (player.x <= goldenO.x + goldenO.width
        && player.x + player.width >= goldenO.x
        && player.y <= goldenO.y + goldenO.height
        && player.y + player.height > goldenO.y) {
        goldenO.alive = false
        

    }
    if (enemyOne.x <= player.x + player.width
        && enemyOne.x + enemyOne.width >= player.x
        && enemyOne.y <= player.y + player.height
        && enemyOne.y + enemyOne.height >= player.y) {
        player.alive = false
        
    }
    if (enemyTwo.x <= player.x + player.width
        && enemyTwo.x + enemyTwo.width >= player.x
        && enemyTwo.y <= player.y + player.height
        && enemyTwo.y + enemyTwo.height >= player.y) {
        player.alive = false
        
    }
}

function enemyOneMovement() {

    if (enemyOne.x < 0 || enemyOne.x > game.width - enemyOne.width) {
        enemyOne.velocity *= -1
    }
    enemyOne.x += enemyOne.velocity
}

function enemyTwoMovement() {
    if (enemyTwo.y < 0 || enemyTwo.y > game.height - enemyTwo.height) {
        enemyTwo.velocity *= -1
    }
    enemyTwo.y += enemyTwo.velocity
}

function gameWon() {
    if (goldenO.alive === false) {
        document.getElementById('gameDisplay').style.display = "none"
        document.getElementById('winDisplay').style.display = "block"
        console.log('you Win!')
        clearInterval(loop)
    }
}

function gameLost() {
    if (player.alive === false) {
        document.getElementById('gameDisplay').style.display = "none"
        document.getElementById('loseDisplay').style.display = "block"
        
        console.log("you Lose")
        clearInterval(loop)
    }
}

function checkGame() {
    if (player.alive === true) {
        gameWon()
    }
    gameLost()
}

gameInit()