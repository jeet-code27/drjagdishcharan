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

// Static metadata
export const metadata = {
  title: "Dr Jagdish Singh Charan | Best Orthopedic & Spine Surgeon in Ajmer",
  description:
    "Dr. Jagdish Singh Charan is a leading Orthopedic and Spine Surgeon in Ajmer providing advanced treatments for bone, joint, and spine conditions with compassionate care.",
  keywords:
    "Dr Jagdish Singh Charan, Orthopedic Surgeon Ajmer, Spine Surgeon Ajmer, Bone Specialist Ajmer, Joint Replacement Ajmer, Best Orthopedic Doctor Ajmer, Spine Specialist Ajmer",
  openGraph: {
    title: "Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer",
    description:
      "Consult Dr. Jagdish Singh Charan, Orthopedic & Spine Surgeon in Ajmer, for advanced treatments, joint replacement, and compassionate bone and spine care.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/",
  },
};

export default function Home() {
  return (
    <>
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
