import Hero from "./Hero/Hero";
import Company from "./Campany/Company";
import WhyAxento from "./WhyAxento/WhyAxento";
import Overview from "./Overview/Overview";

export default function Home() {
  return (
    <div>
      <Hero />
      <Company/>
      <WhyAxento/>
      <Overview/>
    </div>

  );
}
