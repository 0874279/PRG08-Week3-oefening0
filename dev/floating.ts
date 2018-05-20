class Floating implements Movement{
    ball:SpaceBall
    constructor(m:SpaceBall){
        this.ball = m
    }

    

    public update(): void {
        this.ball.x += this.ball.speedX
        this.ball.y += this.ball.speedY
        
        if (this.ball.x < this.ball.minWidth || this.ball.x > this.ball.maxWidth)
        {
            this.ball.speedX *= -1
            
        }
        if (this.ball.y < 0 || this.ball.y > this.ball.maxHeight)
        {
            this.ball.speedY *= -1
        }

        this.ball.draw()
    }
    
}