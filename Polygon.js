class Polygon{
    constructor(x,y,RADIUS){
        var options={
            isStatic : false,
            restitution : 0.2,
            friction : 0.5,
            density : 1.0
        }
        polygon=Matter.Bodies.circle(x,y,RADIUS,options);
        this.RADIUS=RADIUS;
        World.add(world,polygon);
        this.image=loadImage("images/polygon.png");
    }

    display(){
        var pos = this.body.position;
       // fill(255);
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,20,20);
        image(this.image,pos.x-30,pos.y-40,100,80);
    }
}