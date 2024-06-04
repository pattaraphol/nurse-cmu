import Hero from "./components/hero";
import Logo from "./components/logo";

export default function Home() {
  return (
    <>
      <Logo title="ทดสอบ 1" isBold={true} />
      <Logo title="ทดสอบ 2" isBold/>
      <Logo title="ทดสอบ 3" />
      <hr/>
      <Hero />
    </>
  );
}
