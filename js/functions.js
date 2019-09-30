function reset() {
    player = Object.assign({}, playerStart)
    enemyOne = Object.assign({}, enemieOneStart)
    enemyTwo = Object.assign({}, enemieTwoStart)
    goldenO = Object.assign({}, goldObjStart)
    goldenOTwo = Object.assign({}, goldenObjTwoStart)
    goldenOThree = Object.assign({}, goldenObjThreeStart)
    goldenOFour = Object.assign({}, goldenObjFourStart)
}

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
}

function enemyOneMovement() {

    // if (enemyOne.x > game.width - 25) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.x < 1) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.y < 1) {
    //     enemyOne.ySpeed *= -1;
    // } else if (enemyOne.y > game.height - 25) {
    //     enemyOne.ySpeed *= -1;
    // }


    if (enemyOne.x < 0 || enemyOne.x > game.width - enemyOne.width) {
        enemyOne.velocity *= -1
    }
    enemyOne.x += enemyOne.velocity
}

function enemyTwoMovement() {
    // if (enemyTwo.x > game.width - 25) {
    //     enemyTwo.xSpeed *= -1;
    // } else if (enemyTwo.x < 1) {
    //     enemyTwo.xSpeed *= -1;
    // } else if (enemyTwo.y < 1) {
    //     enemyTwo.ySpeed *= -1;
    // } else if (enemyTwo.y > game.height - 100) {
    //     enemyTwo.ySpeed *= -1;
    // }

    if (enemyTwo.y < 0 || enemyTwo.y > game.height - enemyTwo.height) {
        enemyTwo.velocity *= -1
    }
    enemyTwo.y += enemyTwo.velocity
}

function enemyThreeMovement() {

    // if (enemyOne.x > game.width - 25) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.x < 1) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.y < 1) {
    //     enemyOne.ySpeed *= -1;
    // } else if (enemyOne.y > game.height - 25) {
    //     enemyOne.ySpeed *= -1;
    // }


    if (enemyThree.x < 0 || enemyThree.x > game.width - enemyThree.width) {
        enemyThree.velocity *= -1
    }
    enemyThree.x += enemyThree.velocity
}

function enemyFourMovement() {

    // if (enemyOne.x > game.width - 25) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.x < 1) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.y < 1) {
    //     enemyOne.ySpeed *= -1;
    // } else if (enemyOne.y > game.height - 25) {
    //     enemyOne.ySpeed *= -1;
    // }


    if (enemyFour.y < 0 || enemyFour.y > game.height - enemyFour.height) {
        enemyFour.velocity *= -1
    }
    enemyFour.y += enemyFour.velocity
}

function gameWon() {
    if (goldenO.alive === false && goldenOTwo.alive === false
        && goldenOThree.alive === false && goldenOFour.alive === false) {
        document.getElementById('gameDisplayOne').style.display = "none"
        document.getElementById('winDisplay').style.display = "block"
        console.log('you Win!')
        clearInterval(loop)
    }
}

function gameLost() {
    if (player.alive === false) {
        document.getElementById('gameDisplayOne').style.display = "none"
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