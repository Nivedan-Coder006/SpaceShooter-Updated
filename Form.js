class Form {
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Enter Your Name")
        this.greeeting = createElement("h2")
        this.button = createButton("Start Game!")
    }
    hide(){
        this.title.hide()
        this.input.hide()
        this.greeeting.hide()
        this.button.hide()
    }
    display(){
        this.title.html("Space Shooter")
        this.title.position(550,100)
        
        this.input.position(550,300)
        
        this.button.position(600,350)

        this.button.mousePressed(()=>{
            textSize(20)
            fill("blue")
            text(this.input.value() + "'s"+" Score: " + score,100,100);
            gameState = "play"
        })
    }
}