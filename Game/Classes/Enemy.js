class Enemy{
			constructor(xPos, yPos, fluc){
				this.x = xPos;	//current x position
				this.y = yPos;	//urrent y position
				this.startY = yPos;	//initial y position
				this.dirMult = 1;	//holds current direction enemy is heading
				this.enemyHeight = 20; 
				this.enemyWidth = 20;
				this.pizza = new Image();
				this.pizza.src = "Assets/Pizza.png";	
				this.fluctuation = fluc;	//controls how enemy moves vertically
			}
			
			get xPos(){
				return this.x;
			}
			get yPos(){
				return this.y;
			}
			get height(){
				return this.enemyHeight;
			}
			get width(){
				return this.enemyWidth;
			}
			get image(){
				return this.pizza;
			}
			get yStart(){
				return this.startY;
			}
			yMove(yPos){
				this.y += yPos;
			}
			xMove(xPos){
				this.x += xPos;
			}
			reverseDir(){
				this.dirMult *= -1;
			}
			get dMult(){
				return this.dirMult;
			}
			get fluc(){
				return this.fluctuation;
			}
			
		}