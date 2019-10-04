MVP: Timeline is finish MVP by Tuesday-Wednesday
    Game: Title:"Gold"
        Game will include {html, css , js + canvas}
        Obective: You, as the player, will roam around a set area looking for the golden objects while having to avoid or the enemies that randomly appeaar.
        ToDo: Js 
            create a gameBoard 
                create a safe area for player at start of game:
                randomly spawn enemies and gold:
            
            have a gameWon function 
                winning conditions should be when player has collected all the gold pieces:
                STRETCH GOAL 
                    have player defeat all enemies after gold pieces have been collected:
                
            
            create a player
                have hp: 100,

            
            create enemies 
                
            
            create a collision detection function 
                1 collision detection function for gold 

                
                1 collision detection function for attacking enemies and vise verca 
            create an object list for gold items;
            
            Stretch goals 
                roaming enemies
                    move in circular patter along x and y axis:
                    detect when player is close to both gold and enemy and have the enemy follow and attack player:
                
                animations 
                    download sprite api for animations:
                    melee animations to have player and enemies swing sword:
                local storage highscore saving:

Day 1-3: Got my basic game logic going, having difficulties with dry coding and running multiple js files. Day 1 was spent getting my player, enemies and golden objects spawning on the canvas grid. 
    
    Day 2: I got my collision detection going so that when an enemy hit the player, the player died; also got my golden object to disappear when the player hit the object.
    
    Day 3: Setup my reset button and next level button in my html, but did not include logic to have them work; also worked on my enemy movement function trying to have them randomly move around the page and failed miserably, still working on that.

Day 4:  My enemies now randomly spawn on the page each time you hard refresh the page, still having no luck with the enemies randomly moving in the canvas baord though. I also got my Reset button to work, so that it now resets the page when you click it (random spawning doesn't work with the reset button though). I also cleaned up my code, specifically making my object.js more DRY (still working on my DRYing up my functions).
My plan is now to work on: 1) DRYing up my functions.js and game.
                           2) having my reset button randomly spawn eneimes and golden objects
                           3) start making level two when both goals 1 and 2 have been met

Day 6: Got game up and running with mostly DRY code, enemies now move along both x and y axis

Some challenges I had with this game was really understanding how to use a for each loop to dry up my code instead of induvisually creating each enemy object and then calling each enemy object within my game loop. I also wish I could have met more of my stretch goals such as having the player being able to attack the enemy, but as a basic 2d canvas game, i'm happy with meeting my MVP.