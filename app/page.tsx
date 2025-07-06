import Footer from "./sections/footer";
import AboutUsSection from "./sections/about-us-section";
import ContactSection from "./sections/contact-section";
import HeroSection from "./sections/hero-section";
import MenuHighlightsSection from "./sections/menu-highlights-section";
import UpcomingEvents from "./sections/upcoming-events";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUsSection/>
    <MenuHighlightsSection/>
    <UpcomingEvents/>
    <ContactSection/>
    <Footer/> 
    </>
  );
}
