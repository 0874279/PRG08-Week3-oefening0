class SpaceBall extends Ball {
    behaviour:Bouncing

    constructor(minWidth : number, maxWidth : number){
        super(minWidth,maxWidth)
        this.behaviour = Bouncing
    }

    public update() : void {
        new Bouncing(this)
    }
}