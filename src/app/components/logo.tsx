'use client'

import React from 'react'

type logoProps = {
  title : string;
  isBold?: boolean;
}

function Logo({title, isBold}: logoProps) {

  const handleClickMe = ()=> {
    alert("Hello event")
  }

  return (
    <>
        {
          isBold ? <p><strong>{title}</strong></p> : <p>{title}</p>
        }

        {/* <h3>App Logo</h3> */}
        {/* Events */}
        {/* <button onClick={handleClickMe}>Click Me</button> */}
    </>
  )
}

export default Logo