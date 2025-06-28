 
 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import Service from "@/components/Service";
import FeqSection from "@/components/FeqSection";
import GoogleReviews from "@/components/GoogleReviews";
import TopNavbar from "@/components/TopNavbar";
export default function Home() {
  return (
     <div>
      <TopNavbar/>
      <Navbar/>
      <HeroSection />
      <AboutDoctor/>
      <Service/>
      <hr className="text-gray-400"></hr>
     
      <GoogleReviews />
       
      <div className="bg-gradient-to-b from-[#9FBEEA] to-[#a5badc] text-[#333]  "><FeqSection/></div>
      <Footer/>
     </div>
  );
}
