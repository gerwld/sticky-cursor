"use client"
import React, { forwardRef } from 'react'
import style from './style.module.scss';

const Header = forwardRef(function index (props, ref) {
  return (
    <div className={style.header}>
      <div ref={ref} className={style.burger}>
        <div className={style.bounds}></div>
      </div>
    </div>
  )
});

export default Header;