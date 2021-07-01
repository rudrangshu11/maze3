class Form {
    constructor(){
    this.title = createElement('h1');
    this.input = createInput("Enter Your Name, Explorer!")
    this.play = createButton("Let's Explore!")
    this.greeting = createElement('h3')
    this.reset = createButton('Reset Game')
    }

    display(){

        this.title.html("Adventure Of The Maze");
        this.title.position(350, 10);
        this.title.style('font-size', '50px');
        this.title.style('font-family','Brush Script MT')
        
        this.input.position(450,300);
        this.input.style('width', '200px');

        this.play.position(500, 350);

        this.play.mousePressed(()=>{
            this.input.hide();
            this.play.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("Welcome, please wait for your explorer group ")
            this.greeting.position(313,213);
            this.greeting.style('color', 'Black');
            this.greeting.style('font-size', '30px');
            this.greeting.style('font-family','Brush Script MT')
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })

    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.play.hide();
        this.greeting.hide();
    }      
}