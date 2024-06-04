'use client'

import React, { useEffect, useState } from 'react'
import styles from './logo.module.css'

type logoProps = {
  title : string;
  isBold?: boolean;
}

function Logo({title, isBold}: logoProps) {
  
  // let department = "CMU"; การประกาศตัวแปร เราจะไม่ได้ประกาศแบบนี้   useState ใช้เฉพาะ Client 
  const [department, setDepartment] = useState('CMU');

  const handleClickMe = ()=> {
    // alert("Hello event")
    // department = "new CMU"
    setDepartment("New CMU")
  }

  // ทำครั้งแรกและทุกครั้งที่ re-render logo components
  useEffect(()=> {   
    console.log('ทำครั้งแรกและทุกครั้งที่ re-render logo components')
  })

  // ทำครั้งแรกแค่ครั้งเดียวเพียงใส่ []
  useEffect(()=> {   
    console.log('ทำครั้งแรกแค่ครั้งเดียวเพียงใส่ []')
  }, [])

  useEffect(()=> {   
    console.log('ทำครั้งแรกและ department มีอัพเดทค่า app logo')
  }, [department])

  return (
    <>
        <h3 className={styles.title}>{department}</h3>
        {
          isBold ? <p style={{ color:'blue', fontSize: 20}}><strong>{title}</strong></p> : <p>{title}</p>
        }

        {/* <h3>App Logo</h3> */}
        {/* Events */}
        <button onClick={handleClickMe}>Click Me</button>
        <hr/>
    </>
  )
}

export default Logo