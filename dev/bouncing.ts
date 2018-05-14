class Bouncing{

    constructor(s:SpaceBall){
        s.x += s.speedX
        s.y += s.speedY
        
        if (s.x < s.minWidth || s.x > s.maxWidth)
        {
            s.speedX *= -1
            
        }
        if (s.y < 0 || s.y > s.maxHeight)
        {
            s.speedY *= -1
        }

        s.draw()
    }
}