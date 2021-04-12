class Block
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.8,
			density:0.8,

			
			}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		
        this.body=Bodies.rectangle(x, y, w, h , options);
        World.add(world, this.body);
		this.Visibility = 255;
	}
	display()
	{
		if(this.body.speed<3){

			var blockpos=this.body.position;		

			push()
			translate(blockpos.x, blockpos.y);
			rectMode(CENTER)
			
			fill("gray")
			imageMode(CENTER);
			rect(0,0,this.w, this.h);
			//block(0,0,this.r, this.r);
			pop()}	
		else{
			World.remove(world,this.body);
			push();
			this.Visibility = this.Visibility - 5;
	        tint(255,0,130,this.Visibility);
			rect(999,999,this.width,this.height);
			pop();
		}
			
	}




}