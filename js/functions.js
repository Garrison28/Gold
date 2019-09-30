function reset() {
    player = Object.assign({}, playerStart)
    enemyOne = Object.assign({}, enemieOneStart)
    enemyTwo = Object.assign({}, enemieTwoStart)
    goldenO = Object.assign({}, goldObjStart)
}

function startGame() {
    showDisplay();
}

function showDisplay(display) {
    if (display === startDisplay) {
        startDisplay.style.display = "block";
        gameDisplay.style.display = "none";
        loseDisplay.style.display = "none";
    } else if (display === gameDisplay) {
        startDisplay.style.display = "none";
        gameDisplay.style.display = "block";
        loseDisplay.style.display = "none";
    } else if (display === loseDisplay) {
        startDisplay.style.display = "none";
        gameDisplay.style.display = "none";
        loseDisplay.style.display = "block";
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
        gameWon()

    }
    if (enemyOne.x <= player.x + player.width
        && enemyOne.x + enemyOne.width >= player.x
        && enemyOne.y <= player.y + player.height
        && enemyOne.y + enemyOne.height >= player.y) {
        player.alive = false
        gameLost()
    }
    if (enemyTwo.x <= player.x + player.width
        && enemyTwo.x + enemyTwo.width >= player.x
        && enemyTwo.y <= player.y + player.height
        && enemyTwo.y + enemyTwo.height >= player.y) {
        player.alive = false
        gameLost()
    }

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

}



document.addEventListener('keydown', allMovement)
var loop = setInterval(gameLoop, 60)