class Box{
    constructor(x,y,width, height){
        var option={
restitution:0.2,
friction:0.5,
density:0.5

        }
        this.x = x;
         this.y = y; 
         this.width = width; 
         this.height = height; 
         
        this.body = Bodies.rectangle(this.x,this.y,this.width, this.height, option)
        World.add(world, this.body)
        }
        display(){
        rectMode(CENTER);
        fill("lightGreen");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        
        
        
        }













}