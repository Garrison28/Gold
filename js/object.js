let game = document.getElementById('gameDisplayOne')
let ctx = game.getContext('2d')

console.log(getComputedStyle(game)["width"])
console.log(game.width)
console.log(game.height)

game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])

// var angle = Math.random(0, 1)
// var direction = vector(cos(angle), sin(angle))


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

var enemyOneStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 20)
var enemyTwoStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 10)
var enemyThreeStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 20)
var enemyFourStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 15)
var enemyFiveStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 25)

var goldenObjStart = new GoldObj(200, 200)
var goldenObjTwoStart = new GoldObj(400, 50)
var goldenObjThreeStart = new GoldObj(550, 300)
var goldenObjFourStart = new GoldObj(700, 400)

function Enemy(x, y,  velocity) {
    this.x = x
    this.y = y
    this.width = 25
    this.height = 25
    this.color = "red"
    this.alive = true
    this.velocity = velocity
    // xSpeed: 3,
    // ySpeed: 5,
    this.health = 50
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function GoldObj(x, y,) {
    this.x = x
    this.y = y,
    this.width = 15
    this.height = 15
    this.color = "#ffef96"
    this.alive = true
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let player = { ...playerStart }
let enemyOne = { ...enemyOneStart }
let enemyTwo = { ...enemyTwoStart }
let enemyThree = { ...enemyThreeStart }
let enemyFour = { ...enemyFourStart }
let enemyFive = {...enemyFiveStart}
let goldenO = { ...goldenObjStart }
let goldenOTwo = {...goldenObjTwoStart}
let goldenOThree = {...goldenObjThreeStart}
let goldenOFour = {...goldenObjFourStart}
