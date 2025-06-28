 
 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import Service from "@/components/Service";
import FeqSection from "@/components/FeqSection";
import GoogleReviews from "@/components/GoogleReviews";
import TopNavbar from "@/components/TopNavbar";
import Test from "@/components/Test";
export default function Home() {
  return (
     <>
      <TopNavbar/>
      <Navbar/>
      <HeroSection />
      {/* <Test/> */}
      <AboutDoctor/>
      <Service/>
      <hr className="text-gray-300"></hr>
     
      <GoogleReviews />
      <hr className="text-gray-300"></hr>
       <FeqSection/>
      <Footer/>
     </>
  );
}
