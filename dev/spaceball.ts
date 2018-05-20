class SpaceBall extends Ball {
    behaviour:Movement

    constructor(minWidth : number, maxWidth : number){
        super(minWidth,maxWidth)
        this.behaviour = new Floating(this)
    }

    public update() : void {
        this.behaviour.update()
        if (this.x >= window.innerWidth/2){
            this.behaviour = new Floating(this)
        }
        else if (this.x <= window.innerWidth/2){
            this.behaviour = new Bouncing(this)
        }
    }
}