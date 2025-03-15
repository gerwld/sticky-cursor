"use client"
import React, { useLayoutEffect, useState } from 'react'
import style from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const index = ({stickyElement}) => {
    const [isHovered, setIsHovered] = useState(false);
    const CURSOR_SIZE = isHovered ? 60 : 20;
    const mouse = { 
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothMouseConfig = {damping: 20, stiffness: 300, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x, smoothMouseConfig),
        y: useSpring(mouse.y, smoothMouseConfig),
    }

    const manageMouseMove = (e) => {
        const {clientX, clientY} = e;
        mouse.x.set(clientX - CURSOR_SIZE / 2);
        mouse.y.set(clientY - CURSOR_SIZE / 2);
    }

    const manageMouseOver = () => {
        setIsHovered(true);
        console.log(true);
        
    }

    const manageMouseLeave = () => {
        setIsHovered(false);
    }

    useLayoutEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        stickyElement.current.addEventListener("mouseover", manageMouseOver)
        stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
            stickyElement.current.removeEventListener("mouseover", manageMouseOver)
            stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
        } 
    })

  return (
    <motion.div 
    style={{left: smoothMouse.x, top: smoothMouse.y}}
    className={style.cursor}
    animate={{width: CURSOR_SIZE, height: CURSOR_SIZE}}
    >
    </motion.div>
  )
}

export default index