import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Achievements />
      <Highlights />
      <Gallery />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}
