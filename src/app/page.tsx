
import Logo from "@/app/components/logo";  // @ คือ Folder src alias ตอนสร้าง Project ใหม่
import styles from "./page.module.css"

import Link from "next/link";
import Image from 'next/image'
import profilePic from '@/assets/images/me.jpg'

export default function Home() {
  const appPassword = process.env.APP_PASSWORD
  return (
    <main>
      <ul style={{display:'flex', listStyle:'none'}}>
        <li style={{padding: '14px 20px',}}><Link href="/" replace>Home</Link></li>
        <li style={{padding: '14px 20px',}}><Link href="/about">About</Link></li>
        <li style={{padding: '14px 20px',}}><Link href="/contact">Contact</Link></li>
      </ul>

      <Image src={profilePic} alt="me" priority></Image>
      <hr/>
      <h3 className="title">
        {process.env.APP_NAME}
      </h3>
      {
        appPassword == "123456" ? <p>OK ! {process.env.NEXT_PUBLIC_APP_ANALYTIC}</p> : <p>Failed !</p>
      }
      <p className={styles.title}>Hello World</p>
      <Logo title="jame"/>
    </main>
  );
}
