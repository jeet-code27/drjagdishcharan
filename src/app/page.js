 
import AboutDoctor from "@/components/AboutDoctor";
 
import FeqSection from "@/components/FeqSection";
 
import Doctorinfo from "@/components/Doctorinfo";
import WhyChoose from "@/components/WhyChoose";
import HeroSectiontwo from "@/components/HeroTwo";
 
import Head from "next/head";
import React, { Suspense } from "react";
const GoogleReviews  = React.lazy(() => import("@/components/GoogleReviews"));
const Service  = React.lazy(() => import("@/components/Service"));
const MultiItemCarousel  = React.lazy(() => import("@/components/MultiItemCarousel"));


// Static metadata
export const metadata = {
  title: "Best Orthopedic & Spine Surgeon in Ajmer |Dr Jagdish Charan",
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
  robots: "index, follow",
  authors: [
    {
      name: "Dr. Jagdish Singh Charan",
      url: "https://drjagdishcharan.in/",
    },
  ],
  publisher: "Dr. Jagdish Singh Charan",
};

export default function Home() {
  return (
    <>
      <HeroSectiontwo />
      <AboutDoctor />

      <Suspense fallback={<div>Loading Service...</div>}>
        <Service />
      </Suspense>

      <hr className="text-gray-300" />

      <Suspense fallback={<div>Loading  Gallery images...</div>}>
        <MultiItemCarousel />
      </Suspense>

      <Doctorinfo />

      <Suspense fallback={<div>Loading Google Reviews...</div>}>
        <GoogleReviews />
      </Suspense>

      <hr className="text-gray-300" />
      <WhyChoose />
      <FeqSection />
    </>
  );
}