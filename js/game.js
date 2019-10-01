console.log("Working")


// Game displays based on screen 
const startDisplay = document.getElementById('startDisplay')
const levelDisplayOne = document.getElementById('levelDisplayOne')
const levelDisplayTwo = document.getElementById('levelDisplayTwo')
const gameDisplayOne = document.getElementById('gameDisplayOne')
const loseDisplay = document.getElementById('loseDisplay')
const winDisplay = document.getElementById('winDisplay')
/*--------------- Game Assets --------------------*/

function reset() {
    console.log('reset')
    player = { ...playerStart }
    enemyOne = { ...enemyOneStart }
    enemyTwo = { ...enemyTwoStart }
    enemyThree = { ...enemyThreeStart }
    enemyFour = { ...enemyFourStart }
    enemyFive = {...enemyFiveStart}
    enemySix = {...enemySixStart}
    enemySeven = {...enemySevenStart}
    enemyEight = {...enemyEightStart}
    enemyNine = {... enemyNineStart}
    enemyTen = {...enemyTenStart}
    goldenO = { ...goldenObjStart }
    goldenOTwo = {...goldenObjTwoStart}
    goldenOThree = {...goldenObjThreeStart}
    goldenOFour = {...goldenObjFourStart}
    gameDisplayOne.style.display = 'block'
    gameInitLevel1()
}

function nextLevel() {
    console.log('Level 2')
    player = { ...playerStart }
    enemyOne = { ...enemyOneStart }
    enemyTwo = { ...enemyTwoStart }
    enemyThree = { ...enemyThreeStart }
    enemyFour = { ...enemyFourStart }
    enemyFive = {...enemyFiveStart}
    enemySix = {...enemySixStart}
    enemySeven = {...enemySevenStart}
    enemyEight = {...enemyEightStart}
    enemyNine = {... enemyNineStart}
    enemyTen = {...enemyTenStart}
    goldenO = { ...goldenObjStart }
    goldenOTwo = {...goldenObjTwoStart}
    goldenOThree = {...goldenObjThreeStart}
    goldenOFour = {...goldenObjFourStart}
    gameDisplayOne.style.display = 'block'
    gameInitLevel2()
}

gameInitLevel1()

var loop;
document.addEventListener('keydown', allMovement)
// initilize the game setup
function gameInitLevel1() {
    loseDisplay.style.display = 'none'
    winDisplay.style.display = 'none'
    levelDisplayOne.style.display = 'block'
    levelDisplayTwo.style.display = 'none'
    document.getElementById('reset').style.display = 'none'
    document.getElementById('level').style.display = 'none'
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
        if (enemyThree.alive) {
            enemyThree.render()
            detectHit()
            enemyThreeMovement()
        }
        if (enemyFour.alive) {
            enemyFour.render()
            detectHit()
            enemyFourMovement()
        }
        if (enemyFive.alive) {
            enemyFive.render()
            detectHit()
            enemyFiveMovement()
        }
        if (enemySix.alive) {
            enemySix.render()
            detectHit()
            enemySixMovement()
        }
        if (enemySeven.alive) {
            enemySeven.render()
            detectHit()
            enemySevenMovement()
        }
        if (enemyEight.alive) {
            enemyEight.render()
            detectHit()
            enemyEightMovement()
        }
        if (enemyNine.alive) {
            enemyNine.render()
            detectHit()
            enemyNineMovement()
        }
        if (enemyTen.alive) {
            enemyTen.render()
            detectHit()
            enemyTenMovement()
        }
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
    }
    detectHit()
    // enemyOneMovement()
    // enemyTwoMovement()
    // enemyThreeMovement()
    // enemyFourMovement()
    // enemyFiveMovement()
    // enemySixMovement()
    // enemySevenMovement()
    // enemyEightMovement()
    // enemyNineMovement()
    // enemyTenMovement()
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
    if (enemyThree.x <= player.x + player.width
        && enemyThree.x + enemyThree.width >= player.x
        && enemyThree.y <= player.y + player.height
        && enemyThree.y + enemyThree.height >= player.y) {
        player.alive = false

    }
    if (enemyFour.x <= player.x + player.width
        && enemyFour.x + enemyFour.width >= player.x
        && enemyFour.y <= player.y + player.height
        && enemyFour.y + enemyFour.height >= player.y) {
        player.alive = false
    }
    if (enemyFive.x <= player.x + player.width
        && enemyFive.x + enemyFive.width >= player.x
        && enemyFive.y <= player.y + player.height
        && enemyFive.y + enemyFive.height >= player.y) {
        player.alive = false
    }
    if (enemySix.x <= player.x + player.width
        && enemySix.x + enemySix.width >= player.x
        && enemySix.y <= player.y + player.height
        && enemySix.y + enemySix.height >= player.y) {
        player.alive = false
    }
    if (enemySeven.x <= player.x + player.width
        && enemySeven.x + enemySeven.width >= player.x
        && enemySeven.y <= player.y + player.height
        && enemySeven.y + enemySeven.height >= player.y) {
        player.alive = false
    }
    if (enemyEight.x <= player.x + player.width
        && enemyEight.x + enemyEight.width >= player.x
        && enemyEight.y <= player.y + player.height
        && enemyEight.y + enemyEight.height >= player.y) {
        player.alive = false
    }
    if (enemyNine.x <= player.x + player.width
        && enemyNine.x + enemyNine.width >= player.x
        && enemyNine.y <= player.y + player.height
        && enemyNine.y + enemyNine.height >= player.y) {
        player.alive = false
    }
    if (enemyTen.x <= player.x + player.width
        && enemyTen.x + enemyTen.width >= player.x
        && enemyTen.y <= player.y + player.height
        && enemyTen.y + enemyTen.height >= player.y) {
        player.alive = false
    }
}

function gameWon() {
    if (goldenO.alive === false && goldenOTwo.alive === false
        && goldenOThree.alive === false && goldenOFour.alive === false) {
        document.getElementById('gameDisplayOne').style.display = "none"
        document.getElementById('winDisplay').style.display = "block"
        console.log('you Win!')
        document.getElementById('level').style.display = 'block'
        clearInterval(loop)
    }
}

function gameLost() {
    if (player.alive === false) {
        document.getElementById('gameDisplayOne').style.display = "none"
        document.getElementById('loseDisplay').style.display = "block"
        document.getElementById('reset').style.display = 'block'
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

document.getElementById('level').addEventListener('click', nextLevel)
document.getElementById('reset').addEventListener('click', reset)