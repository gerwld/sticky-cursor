import React, { forwardRef } from 'react'
import style from './style.module.scss';

const Header = forwardRef(function index (_, ref) {
  return (
    <div className={style.header}>
      <div ref={ref} className={style.burger}></div>
    </div>
  )
});

export default Header;