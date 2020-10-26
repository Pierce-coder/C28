class SlingShot{
    constructor(bodyA, newPoint){
        var options = {
            bodyA: bodyA,
            pointB: newPoint,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = newPoint;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}