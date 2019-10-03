let enemyMovement = function() {
    enemiesArr.forEach((enemy, i) => {
        if (enemy.x < 0 ||enemy.x > game.width - enemy.width) {
            enemiesArr[i].xSpeed *= -1;
        } 
        enemiesArr[i].x += enemiesArr[i].xSpeed
        if (enemy.y < 0 || enemy.y > game.height - enemy.height) {
            enemiesArr[i].ySpeed *= -1;
        }
        enemiesArr[i].y += enemiesArr[i].ySpeed
        
    });
}



