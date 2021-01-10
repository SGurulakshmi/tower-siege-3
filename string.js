class String
{
  constructor(bodyA,pointB)
  {
     var options ={
         bodyA : bodyA,
         pointB:pointB,
         stiffness:0.02,
     }
     this.pointB = pointB
     this.body = Constraint.create(options);
     World.add(world,this.body)
  }
     released(){
     this.body.bodyA = null;
    }
  display(){
      if(this.body.bodyA){
          var pointA = this.body.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(1)
          stroke("grey")
          line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
  }

}