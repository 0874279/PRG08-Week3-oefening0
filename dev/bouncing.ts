class Bouncing implements Movement{
    ball:MoonBall

    constructor(s:MoonBall){
        this.ball = s
    }

    public update(){
        if (this.ball.x < this.ball.minWidth)
        {
            this.ball.x = this.ball.minWidth
            this.ball.speedX *= -1
            this.ball.speedX *= this.ball.friction
        }
        if(this.ball.x > this.ball.maxWidth) {
            this.ball.x = this.ball.maxWidth
            this.ball.speedX *= -1
            this.ball.speedX *= this.ball.friction
        }
        if (this.ball.y + this.ball.speedY > this.ball.maxHeight)
        {
            this.ball.y = this.ball.maxHeight;
            this.ball.speedY *= -1
            // Weerstand
            this.ball.speedY *= this.ball.friction
            this.ball.speedX *= this.ball.friction
        }
        else {
            this.ball.speedY += this.ball.gravity
        }

        this.ball.x += this.ball.speedX
        this.ball.y += this.ball.speedY
        
        this.ball.draw()
    }
}