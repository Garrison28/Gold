// function nextLevel() {
//     console.log('Level 2')
//     player = { ...playerStart }
//     enemyOne = { ...enemyOneStart }
//     enemyTwo = { ...enemyTwoStart }
//     enemyThree = { ...enemyThreeStart }
//     enemyFour = { ...enemyFourStart }
//     enemyFive = {...enemyFiveStart}
//     enemySix = {...enemySixStart}
//     enemySeven = {...enemySevenStart}
//     enemyEight = {...enemyEightStart}
//     enemyNine = {... enemyNineStart}
//     enemyTen = {...enemyTenStart}
//     goldenO = { ...goldenObjStart }
//     goldenOTwo = {...goldenObjTwoStart}
//     goldenOThree = {...goldenObjThreeStart}
//     goldenOFour = {...goldenObjFourStart}
//     gameDisplayOne.style.display = 'block'
//     gameInitLevel2()
// }

gameInitLevel2()

var loop;
document.addEventListener('keydown', allMovement)

function gameInitLevel2() {
    loseDisplay.style.display = 'none'
    winDisplay.style.display = 'none'
    levelDisplayOne.style.display = 'none'
    levelDisplayTwo.style.display = 'block'
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

document.getElementById('level').addEventListener('click', nextLevel)
