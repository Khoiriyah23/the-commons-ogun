import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Gathering from "@/components/Gathering";
import Belief from "@/components/Belief";
import Invitations from "@/components/Invitations";
import NextUp from "@/components/NextUp";
import Gallery from "@/components/Gallery";
import Questions from "@/components/Questions";
import ClosingCta from "@/components/ClosingCta";
import ModalHost from "@/components/ModalHost";
import SiteFooter from "@/components/SiteFooter";

// Flip to true after the first gathering, once real photos are in Gallery.tsx
const SHOW_GALLERY = false;

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Why />
        <Gathering />
        <Belief />
        <Invitations />
        <NextUp />
        {SHOW_GALLERY && <Gallery />}
        <Questions />
        <ClosingCta />
      </main>
      <SiteFooter />
      <ModalHost />
    </SmoothScroll>
  );
}
