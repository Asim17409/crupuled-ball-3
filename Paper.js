class Paper {
    constructor(x,y,radius){
var options = {
    
    restitution:0.8
}

this.body =Bodies.circle(x,y,radius,options);
this.radius =radius;


World.add(world,this.body);
this.image = loadImage("paper.png")
    }

    display(){
        imageMode(RADIUS);

        fill('yellow');

        image(this.image,this.body.position.x, this.body.position.y,70,70);
    }    
};