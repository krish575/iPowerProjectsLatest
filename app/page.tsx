import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import HomeCarousel from "./components/HomeCarousel";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeCarousel/>
      <AboutUs/>
      <OurServices/>
      <ContactUs/>
    </div>
  );
}
