import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HomeCarousel from "./components/HomeCarousel";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <section className="w-full overflow-hidden flex flex-col gap-20  ">
      <Navbar/>
      <HomeCarousel/>
      <AboutUs/>
      <OurServices/>
      <ContactUs/>
      <Footer/>
    </section>
  );
}
