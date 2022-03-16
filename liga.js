class liga{
constructor(bodyA, pointB){
var option={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.35,
    length:300
};
this.pointB = pointB;
this.liga = Constraint.create(option);
World.add(world, this.liga);
}
attach(body){
    this.liga.bodyA = body
}
fly(){
this.liga.bodyA=null;
}
display(){
if(this.liga.bodyA){
push();
strokeWeight(3.5);
line(this.pointB.x,this.pointB.y, this.liga.bodyA.position.x,this.liga.bodyA.position.y)
pop();
}


}
}