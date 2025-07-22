import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import Service from "@/components/Service";
import FeqSection from "@/components/FeqSection";
import GoogleReviews from "@/components/GoogleReviews";
import TopNavbar from "@/components/TopNavbar";
import Test from "@/components/Test";
import Doctorinfo from "@/components/Doctorinfo";
import WhyChoose from "@/components/WhyChoose";
import HeroSectiontwo from "@/components/HeroTwo";
import MultiItemCarousel from "@/components/MultiItemCarousel";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer</title>
        <meta
          name="description"
          content="Consult Dr. Jagdish Singh Charan, top Orthopedic and Spine Surgeon in Ajmer, for advanced treatments, joint replacement, and compassionate bone and spine care."
        />
        <meta
          name="keywords"
          content="Dr Jagdish Singh Charan, Orthopedic Surgeon Ajmer, Spine Surgeon Ajmer, Bone Specialist Ajmer, Joint Replacement Ajmer, Best Orthopedic Doctor Ajmer, Spine Specialist Ajmer"
        />
        <link
          rel="canonical"
          href="https://drjagdishsinghcharan.vercel.app/"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr Jagdish Singh Charan" />
        <meta name="publisher" content="Dr Jagdish Singh Charan" />

        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer"
        />
        <meta
          property="og:description"
          content="Consult Dr. Jagdish Singh Charan, Orthopedic & Spine Surgeon in Ajmer, for advanced treatments and compassionate care."
        />
        <meta
          property="og:image"
          content="https://drjagdishsinghcharan.vercel.app/images/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://drjagdishsinghcharan.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer"
        />
        <meta
          name="twitter:description"
          content="Consult Dr. Jagdish Singh Charan for expert orthopedic and spine care in Ajmer with advanced treatment options."
        />
        <meta
          name="twitter:image"
          content="https://drjagdishsinghcharan.vercel.app/images/og-image.jpg"
        />
      </Head>

      <HeroSectiontwo />
      <AboutDoctor />
      <Service />
      <hr className="text-gray-300" />
      <MultiItemCarousel />
      <Doctorinfo />
      <GoogleReviews />
      <hr className="text-gray-300" />
      <WhyChoose />
      <FeqSection />
    </>
  );
}
