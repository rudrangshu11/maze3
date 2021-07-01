class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data) {
            gameState = data.val();
        })
    }

    update(state){
            database.ref('/').update({
                gameState : state
            })
    }

    start(){
            if(gameState === 0){
                player = new Player();
                player.getCount();
                form = new Form();
                form.display();
                

            player1 = createSprite(100, 100, 20,20);
            player1.shapeColor = 'yellow'
            player2 = createSprite(100, 200, 20, 20);
            player2.shapeColor = 'blue'
            players = [player1, player2];

            
        }
    
    }

    play(){ 
        var counter = 0; 
        form.hide();
        Player.getPlayerInfo();
        background(gameBackground);
        if(allPlayers!== undefined){ 
            var index = 0; 
            var x;
            var y;
            for(var plr in allPlayers){ 
                index = index + 1; 
                if(index == 1 && counter ==0){
                        player.x = 100; player.y = 100; player.update();
                }
                if(index == 2 && counter == 1){ 
                    player.x = 200; player.y = 200; player.update(); 
                }
                y = allPlayers[plr].y;
                x = allPlayers[plr].x; 
                players[index-1].x = 10; 
                players[index-1].y = 20; 
                counter++; 
            } 
        }
        drawSprites();
    }   
}