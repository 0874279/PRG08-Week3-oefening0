class Main {

    private balls : Ball[] = []
    
    constructor() {
        
        this.balls.push(new MoonBall(0, window.innerWidth))
        this.balls.push(new SpaceBall(0, window.innerWidth))

        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }
        
        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())