"use client";
import React from 'react'
import Header from '@/components/header';
import Cursor from '@/components/stickyCursor';

const page = () => {
  const menuButtonRef = React.useRef(null);
  return (
    <div>
      <Header ref={menuButtonRef}/>
      <Cursor stickyElement={menuButtonRef}/>
    </div>
  )
}

export default page