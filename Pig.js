class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visiblity = 255
    this.image = loadImage("sprites/enemy.png");
    this.toRemove = false
  }


  display(){

    

    if(this.body.speed > 2.5){

      this.toRemove = true

    } else {

      super.display()

    }

    if(this.toRemove === true){
      this.removePig();
    }
    
  }

  removePig(){
    console.log(this.visiblity)
    this.visiblity -= 5  

    if(this.visiblity < 0){
      World.remove(world, this.body)     
    } else {
        push();
        tint(255, this.visiblity)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
    }     
  }
};