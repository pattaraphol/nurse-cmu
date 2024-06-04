'use client'

import React from 'react'

function Logo() {

  const handleClickMe = ()=> {
    alert("Hello event")
  }

  return (
    <>
        <h2>App Logo</h2>
        {/* Events */}
        <button onClick={handleClickMe}>Click Me</button>
    </>
  )
}

export default Logo