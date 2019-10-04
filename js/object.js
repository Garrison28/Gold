let game = document.getElementById('gameDisplayOne')
let ctx = game.getContext('2d')

console.log(getComputedStyle(game)["width"])
console.log(game.width)
console.log(game.height)

game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])

var playerStart = {
    x: 50,
    y: 100,
    width: 25,
    height: 25,
    color: "blue",
    alive: true,
    velocity: 10,
    gold: 0,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
/*---------------function for creating gold and enemies---------------*/
let enemy;

let enemiesArr = []

var createEnemies = function() {
    for (var i = 0; i < 5; i++) {
        enemy = new Enemy(Math.floor(Math.random() * game.width),
            Math.floor(Math.random() * game.height), Math.ceil(Math.random() * 40))
        enemiesArr.push(enemy)
    }
}

function clearEnemiesArr() {
    enemiesArr = []
}

let gold;

let goldArr = []

var createGold = function() {
    for (var g = 0; g < 7; g++) {
        gold = new GoldObj(Math.floor(Math.random() * game.width),
            Math.floor(Math.random() * game.height))
        goldArr.push(gold)
    }
}

function clearGoldArr() {
    goldArr = []
}

/*-----------------------------------------------------------------------*/
function Enemy(x, y, velocity) {
    this.x = x
    this.y = y
    this.width = 25
    this.height = 25
    this.xSpeed = .5
    this.ySpeed = 2
    this.color = "#82b74b"
    this.alive = true
    this.velocity = velocity
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
// constructor function for golden objects
function GoldObj(x, y) {
    this.x = x
    this.y = y,
        this.width = 15
    this.height = 15
    this.color = "gold"
    this.alive = true
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
// variables for my enemies and golden objects
let player = {...playerStart}

