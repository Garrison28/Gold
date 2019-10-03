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

function enemyThreeMovement() {
    if (enemyThree.x < 0 || enemyThree.x > game.width - enemyThree.width) {
        enemyThree.velocity *= -1
    }
    enemyThree.x += enemyThree.velocity
}

function enemyFourMovement() {
    if (enemyFour.y < 0 || enemyFour.y > game.height - enemyFour.height) {
        enemyFour.velocity *= -1
    }
    enemyFour.y += enemyFour.velocity
}

function enemyFiveMovement() {
    if (enemyFive.x < 0 || enemyFive.x > game.width - enemyFive.width) {
        enemyFive.velocity *= -1
    }
    enemyFive.x += enemyFive.velocity
}

function enemySixMovement() {
    if (enemySix.y < 0 || enemySix.y > game.height - enemySix.height) {
        enemySix.velocity *= -1
    }
    enemySix.y += enemySix.velocity
}

function enemySevenMovement() {
    if (enemySeven.x < 0 || enemySeven.x > game.width - enemySeven.width) {
        enemySeven.velocity *= -1
    }
    enemySeven.x += enemySeven.velocity
}

function enemyEightMovement() {
    if (enemyEight.y < 0 || enemyEight.y > game.height - enemyEight.height) {
        enemyEight.velocity *= -1
    }
    enemyEight.y += enemyEight.velocity
}

function enemyNineMovement() {
    if (enemyNine.x < 0 || enemyNine.x > game.width - enemyNine.width) {
        enemyNine.velocity *= -1
    }
    enemyNine.x += enemyNine.velocity
}

function enemyTenMovement() {
    if (enemyTen.y < 0 || enemyTen.y > game.height - enemyTen.height) {
        enemyTen.velocity *= -1
    }
    enemyTen.y += enemyTen.velocity
}
