console.log("Working")

let game = document.getElementById('game')
let ctx = game.getContext('2d')

console.log(getComputedStyle(game)["width"])
console.log(game.width)

game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])

/*--------------- Game Assets --------------------*/

var playerStart = {
    x: 50,
    y: 100,
    width: 50,
    height: 50,
    color: "gold",
    alive: true,
    velocity: 10,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemieOneStart = {
    x: 300,
    y: 350,
    width: 75,
    height: 75,
    color: "red",
    alive: true,
    velocity: 10,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemieTwoStart = {
    x: 300,
    y: 350,
    width: 75,
    height: 75,
    color: "red",
    alive: true,
    velocity: 10,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var goldObjStart = {
    x: 200,
    y: 200,
    width: 25,
    height: 25,
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

function reset() {
    player = Object.assign({}, playerStart)
    enemyOne = Object.assign({}, enemieOneStart)
}

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

function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height)
    if (enemyOne.alive) {
        enemyOne.render()
    }
    player.render()
    goldenO.render()
}

document.addEventListener('keydown', allMovement)
var loop = setInterval(gameLoop, 60)