"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
        const {left, top, width, height} = stickyElement.current.getBoundingClientRect();
        const center = {x: left + width / 2, y: top + height / 2}; // center pos of stickyElement
        const distance = {x: clientX - center.x, y: clientY - center.y}
        
        if(isHovered) {
            // mouse.x.set((center.x - CURSOR_SIZE / 2)); // обычное положение без мышки (центр)
            // mouse.y.set((center.y - CURSOR_SIZE / 2)); // обычное положение без мышки (центр)
            mouse.x.set((center.x - CURSOR_SIZE / 2 + distance.x / 5)); // с 0.2 от положения мышки
            mouse.y.set((center.y - CURSOR_SIZE / 2 + distance.y / 5));  // с 0.2 от положения мышки    
        } else {            
            mouse.x.set(clientX - CURSOR_SIZE / 2);
            mouse.y.set(clientY - CURSOR_SIZE / 2);     
        }
    }

    const manageMouseOver = () => {
        setIsHovered(true);
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