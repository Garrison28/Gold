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



var enemyOneStart = {
    x: 280,
    y: 220,
    width: 25,
    height: 25,
    color: "red",
    alive: true,
    velocity: 20,
    // xSpeed: 3,
    // ySpeed: 5,
    health: 50,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemyTwoStart = {
    x: 250,
    y: 175,
    width: 25,
    height: 25,
    color: "red",
    alive: true,
    // xSpeed: 3,
    // ySpeed: 5,
    velocity: 10,
    health: 50,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemyThreeStart = {
    x: 500,
    y: 100,
    width: 25,
    height: 25,
    color: "red",
    alive: true,
    // xSpeed: 3,
    // ySpeed: 5,
    velocity: 20,
    health: 50,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var enemyFourStart = {
    x: 475,
    y: 300,
    width: 25,
    height: 25,
    color: "red",
    alive: true,
    // xSpeed: 3,
    // ySpeed: 5,
    velocity: 15,
    health: 50,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var goldenObjStart = {
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
var goldenObjTwoStart = {
    x: 400,
    y: 50,
    width: 15,
    height: 15,
    color: "#ffef96",
    alive: true,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var goldenObjThreeStart = {
    x: 550,
    y: 300,
    width: 15,
    height: 15,
    color: "#ffef96",
    alive: true,
    render: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var goldenObjFourStart = {
    x: 700,
    y: 400,
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
let enemyOne = { ...enemyOneStart }
let enemyTwo = { ...enemyTwoStart }
let enemyThree = { ...enemyThreeStart }
let enemyFour = { ...enemyFourStart }
let goldenO = { ...goldenObjStart }
let goldenOTwo = {...goldenObjTwoStart}
let goldenOThree = {...goldenObjThreeStart}
let goldenOFour = {...goldenObjFourStart}
