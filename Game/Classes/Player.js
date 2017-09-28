class Player{
			constructor(){
				this.x = 20;
				this.y = 150;
				this.noodHeight = 50;
				this.noodWidth = 75;
				this.nood = new Image();
				this.nood.src = "Assets/noodle.gif";
			}
			
			get xPos(){
				return this.x;
			}
			get yPos(){
				return this.y;
			}
			get height(){
				return this.noodHeight;
			}
			get width(){
				return this.noodWidth;
			}
			get playerImage(){
				return this.nood;
			}
			yMove(yPos){
				this.y += yPos;
			}
			
		}