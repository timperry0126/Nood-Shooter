class Sauce{
			constructor(xPos, yPos){
				this.x = xPos;
				this.y = yPos;
				this.sauceHeight = 10;
				this.sauceWidth = 20;
				this.img = new Image();
				this.img.src = "Assets/Sauce.png";
			}
			
			xMove(xPos){
				this.x += xPos;
			}
			
			get xPos(){
				return this.x;
			}
			get yPos(){
				return this.y;
			}
			get height(){
				return this.sauceHeight;
			}
			get width(){
				return this.sauceWidth;
			}
			get image(){
				return this.img;
			}
		}