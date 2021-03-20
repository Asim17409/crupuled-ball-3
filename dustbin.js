class Dustbin {
    constructor(x,y,width, height){
var options = {
    isStatic: true,
    'restitution':0,
    'friction':1,
    'density':0.1
}

this.body =Bodies.rectangle(x,y,width,height,options);
this.width =width;
this.height = height;

World.add(world,this.body);
this.image = loadImage("dustbingreen.png")
    }

    display(){
        imageMode(CENTER);

        fill('white')

        image(this.image,700, 320, 100,100);
    }    
};