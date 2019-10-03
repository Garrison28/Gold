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
/*---------------TODO work on after finishing lvl 2and 3---------------*/
let enemiesArr = []

var enemies = function() {
    for (var i = 0; i <10; i++) {
        red = new Enemy(Math.floor(Math.random() * game.width), 
        Math.floor(Math.random() * game.height), Math.floor(Math.random() * Enemy.velocity))
        red.push(enemiesArr)
    }
    console.log('enemies created')
}


/*-----------------------------------------------------------------------*/
// create new enemies with a constructor function
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
var enemySixStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 30)
var enemySevenStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 27)
var enemyEightStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 17)
var enemyNineStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 21)
var enemyTenStart = new Enemy(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height), 24)
// create new golden objects with a constructor function
var goldenObjStart = new GoldObj(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height))
var goldenObjTwoStart = new GoldObj(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height))
var goldenObjThreeStart = new GoldObj(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height))
var goldenObjFourStart = new GoldObj(Math.floor(Math.random() * game.width), 
Math.floor(Math.random() * game.height))
// constructor function for enemies
function Enemy(x, y, velocity) {
    this.x = x
    this.y = y
    this.width = 25
    this.height = 25
    this.color = "#82b74b"
    this.alive = true
    this.velocity = velocity
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
// constructor function for golden objects
function GoldObj(x, y,) {
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
let player = { ...playerStart }
let enemyOne = { ...enemyOneStart }
let enemyTwo = { ...enemyTwoStart }
let enemyThree = { ...enemyThreeStart }
let enemyFour = { ...enemyFourStart }
let enemyFive = {...enemyFiveStart}
let enemySix = {...enemySixStart}
let enemySeven = {...enemySevenStart}
let enemyEight = {...enemyEightStart}
let enemyNine = {... enemyNineStart}
let enemyTen = {...enemyTenStart}
let goldenO = { ...goldenObjStart }
let goldenOTwo = {...goldenObjTwoStart}
let goldenOThree = {...goldenObjThreeStart}
let goldenOFour = {...goldenObjFourStart}
