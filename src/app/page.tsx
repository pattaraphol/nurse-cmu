import Hero from "./components/hero";
import Logo from "./components/logo";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <h3 className="title">Hello Next.js</h3>
      <p className={styles.title}>Hello World</p>
      <Logo title="jame"/>
    </main>
  );
}
