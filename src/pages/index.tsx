import Hero from "./Hero/Hero";
import Company from "./Campany/Company";
import WhyAxento from "./WhyAxento/WhyAxento";
import Overview from "./Overview/Overview";
import FeatureOverviewPanel from "./FeatureOverviewPanel/FeatureOverviewPanel";
import PricingPlan from "./PricingPlan/PricingPlan";
import ClientReviews from "./ClientReviews/ClientReviews";
import FAQComponent from "./FAQComponent/FAQComponent";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <Company/>
      <WhyAxento/>
      <Overview/>
      <FeatureOverviewPanel/>
      <PricingPlan/>
      <ClientReviews/>
      <FAQComponent/>
      <Footer/>
    </div>

  );
}

