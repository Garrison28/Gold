console.log("Working")


// Game displays based on screen 
const startDisplay = document.getElementById('startDisplay')
const levelDisplayOne = document.getElementById('levelDisplayOne')
const levelDisplayTwo = document.getElementById('levelDisplayTwo')
const levelDisplayThree = document.getElementById('levelDisplayThree')
const gameComplete = document.getElementById('gameComplete')
const gameDisplayOne = document.getElementById('gameDisplayOne')
const loseDisplay = document.getElementById('loseDisplay')
const winDisplay = document.getElementById('winDisplay')
const resetButton = document.getElementById('reset')
const levelButton = document.getElementById('level')
const levelThreeButton = document.getElementById('lastLevel')
let levelCounter = 0
var loop;
/*--------------- Game Functions --------------------*/
// resets game to level one
function reset() {
    console.log('reset')
    player = { ...playerStart }
    goldenO = { ...goldenObjStart }
    goldenOTwo = { ...goldenObjTwoStart }
    goldenOThree = { ...goldenObjThreeStart }
    goldenOFour = { ...goldenObjFourStart }
    gameDisplayOne.style.display = 'block'
    clearArr()
    gameInit()
}
// loads level two
function nextLevel() {
    console.log('Level 2')
    player = { ...playerStart }
    goldenO = { ...goldenObjStart }
    goldenOTwo = { ...goldenObjTwoStart }
    goldenOThree = { ...goldenObjThreeStart }
    goldenOFour = { ...goldenObjFourStart }
    gameDisplayOne.style.display = 'block'
    clearArr()
    gameInit()
    levelDisplayOne.style.display = 'none'
    levelDisplayTwo.style.display = 'block'
    levelDisplayThree.style.display = 'none'
}
// loads level three
function finalLevel() {
    console.log('level 3')
    console.log(levelCounter)
    player = { ...playerStart }
    goldenO = { ...goldenObjStart }
    goldenOTwo = { ...goldenObjTwoStart }
    goldenOThree = { ...goldenObjThreeStart }
    goldenOFour = { ...goldenObjFourStart }
    gameDisplayOne.style.display = 'block'
    clearArr()
    gameInit()
    levelDisplayOne.style.display = 'none'
    levelDisplayTwo.style.display = 'none'
    levelDisplayThree.style.display = 'block'

}

gameInit()

document.addEventListener('keydown', allMovement)
// initilize the game setup
function gameInit() {
    console.log('gameInit')
    loseDisplay.style.display = 'none'
    winDisplay.style.display = 'none'
    levelDisplayOne.style.display = 'block'
    levelDisplayTwo.style.display = 'none'
    levelDisplayThree.style.display = 'none'
    gameComplete.style.display = 'none'
    levelButton.style.display = 'none'
    levelThreeButton.style.display = 'none'
    resetButton.style.display = 'none'
    levelCounter
    createEnemies()
    console.log(enemy)
    console.log(enemyMovement)
    enemiesArr
    //start the gameloop for the game board
    loop = setInterval(gameLoop, 60)
    function gameLoop() {
        // console.log("running game loop...")
        ctx.clearRect(0, 0, game.width, game.height)

        enemiesArr.forEach(enemy => {
            enemy.render()
            enemyMovement()
        })
        if (goldenO.alive) {
            goldenO.render()
            detectHit()
        }
        if (goldenOTwo.alive) {
            goldenOTwo.render()
            detectHit()
        }
        if (goldenOThree.alive) {
            goldenOThree.render()
            detectHit()
        }
        if (goldenOFour.alive) {
            goldenOFour.render()
            detectHit()
        }
        if (player.alive) {
            player.render()
            detectHit()

        }
        checkGame()
        buttonSwitch()
    }
    detectHit()
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
    if (player.x <= goldenO.x + goldenO.width
        && player.x + player.width >= goldenO.x
        && player.y <= goldenO.y + goldenO.height
        && player.y + player.height > goldenO.y) {
        goldenO.alive = false
    }
    if (player.x <= goldenOTwo.x + goldenOTwo.width
        && player.x + player.width >= goldenOTwo.x
        && player.y <= goldenOTwo.y + goldenOTwo.height
        && player.y + player.height > goldenOTwo.y) {
        goldenOTwo.alive = false
    }
    if (player.x <= goldenOThree.x + goldenOThree.width
        && player.x + player.width >= goldenOThree.x
        && player.y <= goldenOThree.y + goldenOThree.height
        && player.y + player.height > goldenOThree.y) {
        goldenOThree.alive = false
    }
    if (player.x <= goldenOFour.x + goldenOFour.width
        && player.x + player.width >= goldenOFour.x
        && player.y <= goldenOFour.y + goldenOFour.height
        && player.y + player.height > goldenOFour.y) {
        goldenOFour.alive = false
    }
    enemiesArr.forEach(enemy => {
        if (enemy.x <= player.x + player.width
            && enemy.x + enemy.width >= player.x
            && enemy.y <= player.y + player.height
            && enemy.y + enemy.height >= player.y) {
            player.alive = false
        }
        
    });
}

let gameWon = function () {
    if (goldenO.alive === false && goldenOTwo.alive === false
        && goldenOThree.alive === false && goldenOFour.alive === false) {
        if (levelCounter === 0) {
            levelCounter = 1
            levelButton.style.display = 'block'
            levelThreeButton.style.display = 'none'
        }
        else if (levelCounter === 1) {
            levelCounter = 2
            levelButton.style.display = 'none'
            levelThreeButton.style.display = 'block'
        } else if (levelCounter === 2) {
            levelCounter = 3
            gameComplete.style.display = 'block'
            resetButton.style.display = 'block'
        }
        gameDisplayOne.style.display = "none"
        winDisplay.style.display = "block"
        console.log('you Win!')
        console.log(levelCounter)
        clearInterval(loop)
    }
    return true
}

let gameLost = function () {
    if (player.alive === false) {
        if (levelCounter === 1 || levelCounter === 2) {
            levelCounter = 0
        }
        gameDisplayOne.style.display = "none"
        loseDisplay.style.display = "block"
        resetButton.style.display = 'block'
        console.log("you Lose")
        console.log(levelCounter)
        clearInterval(loop)
    }
    player.alive === true;
}

function checkGame() {
    if (player.alive === true) {
        gameWon()
    }
    gameLost()
}

function buttonSwitch() {
    if (levelCounter === 1 && gameWon === true) {
        levelButton.style.display = 'none'
        levelThreeButton.style.display = 'block'
    }

}

document.getElementById('level').addEventListener('click', nextLevel)
document.getElementById('lastLevel').addEventListener('click', finalLevel)
document.getElementById('reset').addEventListener('click', reset)