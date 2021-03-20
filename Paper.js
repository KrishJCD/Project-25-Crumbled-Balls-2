class Paper
{
    constructor(x,y,w)
    {
        this.x=x;
        this.y=y;
        this.w=w;
        this.options={
            density:1.5,
            isStatic:false,
            friction:0.5,
            restitution:0.3
        }
        this.body=Bodies.circle(this.x,this.y,this.w*0.3,this.options);
        console.log(this.body.position);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display()
    {
       
        fill("yellow");
        var pos=this.body.position;
        imageMode(RADIUS);
        image(this.image,pos.x-20,pos.y-20,this.w,this.w);
    }
}