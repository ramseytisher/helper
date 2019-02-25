import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Animated = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return <animated.div style={props}>I will fade in</animated.div>
}

export default Animated;