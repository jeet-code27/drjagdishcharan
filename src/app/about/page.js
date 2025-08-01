import About from "@/components/About";
import React from "react";
// Static metadata
export const metadata = {
  title:
    "Top Orthopedic & Spine Surgeon in Ajmer | Dr Jagdish Singh Charan",
  description:
    "Learn about Dr. Jagdish Singh Charan, leading Orthopedic and Spine Surgeon in Ajmer, his qualifications, expertise in joint and spine surgeries, and compassionate patient care approach.",
  keywords:
    "Dr Jagdish Singh Charan, About Dr Jagdish Singh Charan, Orthopedic Surgeon Ajmer, Spine Surgeon Ajmer, Bone Specialist Ajmer, Joint Replacement Surgeon Ajmer, Best Orthopedic Doctor Ajmer",
  openGraph: {
    title:
      "About Dr Jagdish Singh Charan | Orthopedic & Spine Surgeon in Ajmer",
    description:
      "Know more about Dr. Jagdish Singh Charan, his qualifications, expertise, and compassionate approach as an Orthopedic and Spine Surgeon in Ajmer.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Dr Jagdish Singh Charan Orthopedic and Spine Surgeon",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/about",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/about",
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

function Aboutpage() {
  return (
    <div>
      <About />
    </div>
  );
}

export default Aboutpage;
