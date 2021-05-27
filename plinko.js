class Plinko{

    constructor(x,y){

        var options={
            
           
            isStatic:true,
            
            friction:0.2
        }

        this.body=Bodies.circle(x,y,10,options);
        this.r=10;
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0,0,this.r,this.r);
        pop();

       
    }
}