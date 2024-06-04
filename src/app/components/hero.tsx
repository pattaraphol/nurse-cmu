import React from 'react'
import Logo from './logo';

const title:string = 'Hello Hero test'
const myHero = <p>my hero</p>
const dateNow = new Date();
const isShow = true

const students = [
    { id: 1, fullname: 'John Doe', age: 10},
    { id: 2, fullname: 'Mary', age: 20},
]

function Hero() {
  return (
    <>
        {/* IF TRUE */}
        {
            isShow && 
            <>
                <h3>{title}</h3>
                <p>Hello</p>
            </>
        }

        {/* IF ELSE */}
        {
            isShow ? <p>true</p> : <p>false</p>
        }
        
        {title.toUpperCase()}
        {myHero}
        <p>{dateNow.toLocaleDateString()}</p>
        <p>{dateNow.getFullYear()}</p>

        <hr/>

        {/* Loop or Map */}
        <h3 style={{backgroundColor: 'yellowgreen', textAlign:'center', padding:10}}>รายชื่อนักศึกษา</h3>
        {
            students.map((item, index) => {
                return <div key={item.id}>{index + 1} {item.fullname} {item.age}</div>
            })
        }
    </>
  )
}

export default Hero