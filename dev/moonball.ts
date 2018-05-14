class MoonBall extends Ball {
    behaviour:Floating

    constructor(minWidth : number, maxWidth : number){
        super(minWidth,maxWidth, "basketball")
        this.behaviour = Floating
    }

    public update() : void {
        new Floating(this)
    }
}