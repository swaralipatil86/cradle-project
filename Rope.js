class Rope {
    constructor(body1,body2,offsetX,offsetY) {
      this.offsetX = offsetX
      this.offsetY = offsetY
      
      var options = {
          bodyA : body1
          bodyB : body2
          pointB : {x:this.offsetX , y:this.offsetY }
      }

      this.Rope = Constraint.create( 
        options
    )
    World.add(world,this.Rope);
this.pointB = pointB
}
    display(){
        var pointA = this.Rope.bodyA.position
        
        strokeWeight (4)
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
    };