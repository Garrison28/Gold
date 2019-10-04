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
    player = { ...playerStart }
    gameDisplayOne.style.display = 'block'
    clearEnemiesArr()
    clearGoldArr()
    gameInit()
}
// loads level two
function nextLevel() {
    player = { ...playerStart }
    gameDisplayOne.style.display = 'block'
    clearEnemiesArr()
    clearGoldArr()
    gameInit()
    levelDisplayOne.style.display = 'none'
    levelDisplayTwo.style.display = 'block'
    levelDisplayThree.style.display = 'none'
}
// loads level three
function finalLevel() {
    player = { ...playerStart }
    gameDisplayOne.style.display = 'block'
    clearEnemiesArr()
    clearGoldArr()
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
    createGold()
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
        goldArr.forEach(gold => {
            gold.render()
        })
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
    goldArr.forEach((gold, i) => {
        if (player.x <= gold.x + gold.width
            && player.x + player.width >= gold.x
            && player.y <= gold.y + gold.height
            && player.y + player.height > gold.y) {
            goldArr.splice(i, 1)
        }
    })
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
    clearInterval(loop)

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
        clearInterval(loop)
    }
    player.alive === true;
}

function checkGame() {
    if (player.alive === true && goldArr.length === 0) {
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