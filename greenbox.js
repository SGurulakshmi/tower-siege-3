class GreenBox extends Box{
    constructor(x,y){
        super(x,y,30,40)
    }
    display(){
        if(this.body.speed <5){
            fill("green")
        super.display();
        }
        else{
            World.remove(world,this.body)
            push();
            World.Visibility = visibility - 5
            tint(255,this.Visibility);
            rect(this.x,this.y,20,20)
            pop();
        }
    }
}