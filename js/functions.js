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

function enemyFiveMovement() {
    // if (enemyOne.x > game.width - 25) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.x < 1) {
    //     enemyOne.xSpeed *= -1;
    // } else if (enemyOne.y < 1) {
    //     enemyOne.ySpeed *= -1;
    // } else if (enemyOne.y > game.height - 25) {
    //     enemyOne.ySpeed *= -1;
    // }
    if (enemyFive.x < 0 || enemyFive.x > game.width - enemyFive.width) {
        enemyFive.velocity *= -1
    }
    enemyFive.x += enemyFive.velocity
}