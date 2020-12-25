class Ball{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:0.4
          }
          this.body=Bodies.circle(x,y,radius,options)
          this.x=x
          this.y=y
          this.radius=radius
          World.add(world,this.body)
          this.image=loadImage("paper.png")

    }
     display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        this.image.scale=0.1
        pop()
     }
}