import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Mission from "@/components/Mission";
import TwoPaths from "@/components/TwoPaths";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Manifesto from "@/components/Manifesto";
import Extras from "@/components/Extras";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Mission />
        <TwoPaths />
        <HowItWorks />
        <Gallery />
        <Manifesto />
        <Extras />
        <Faq />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
