class Rope{
    constructor(body1,point2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

      this.rope = Constraint.create(options)
      World.add(world,this.rope);
    }

    display(){
        if(this.Rope.bodyA){
        strokeWeight(7);
        line (this.Rope.bodyA.position.x,this.Rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
    }
}