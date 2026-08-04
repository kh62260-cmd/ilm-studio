import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVideos from "@/components/FeaturedVideos";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Mission from "@/components/Mission";
import LatestShorts from "@/components/LatestShorts";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <Loader>

      <Navbar />

      <Hero />

      <FeaturedVideos />

      <About />

      <Statistics />

      <Mission />

      <LatestShorts />

      <Contact />

      <Footer />
      
      <ScrollToTop />

    </Loader>
  );
}