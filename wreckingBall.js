class wreckingBall{
    constructor(x,y,w,h){
        var option={
friction:0.25,
density:1

        }
         
         this.w = w; 
         this.h = h; 
         
        this.body = Bodies.rectangle(x,y,this.w, this.h, option)
        World.add(world, this.body)
        }
    
        display(){
        push();
        //ellipseMode(CENTER);
        //translate(this.body.position.x,this.body.position.y)
        //fill("red");
        //ellipse(0,0,this.w,this.h);
        rectMode(CENTER);
        fill("lightGreen");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        
        pop();
        }
    }