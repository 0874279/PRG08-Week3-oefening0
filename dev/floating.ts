class Floating{
    constructor(m:MoonBall){
        if (m.x < m.minWidth)
        {
            m.x = m.minWidth
            m.speedX *= -1
            m.speedX *= m.friction
        }
        if(m.x > m.maxWidth) {
            m.x = m.maxWidth
            m.speedX *= -1
            m.speedX *= m.friction
        }
        if (m.y + m.speedY > m.maxHeight)
        {
            m.y = m.maxHeight;
            m.speedY *= -1
            // Weerstand
            m.speedY *= m.friction
            m.speedX *= m.friction
        }
        else {
            m.speedY += m.gravity
        }

        m.x += m.speedX
        m.y += m.speedY
        
        m.draw()
    }
}