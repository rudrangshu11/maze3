class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.lives = 0;
        this.x = 0;
        this.y = 0;
        //this.distance = 0;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){           
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            lives: this.lives,
            x : this.x,
            y : this.y,
            index: this.index
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

    updatePosition(x,y){
       var playerIndex = "players/player" + this.index;
       database.ref(playerIndex).set({
           x : this.x,
           y: this.y 
       })
    }
}