"use client"
import React, { forwardRef } from 'react'
import style from './style.module.scss';
import Magnetic from "@/components/magnetic"

const Header = forwardRef(function index(props, ref) {
  return (
    <div className={style.header}>
      <Magnetic>
        <div className={style.burger}>
          <div ref={ref} className={style.bounds}></div>
        </div>
      </Magnetic>
    </div>
  )
});

export default Header;