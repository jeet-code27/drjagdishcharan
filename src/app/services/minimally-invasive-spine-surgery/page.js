import React from "react";
import MinimallyInvasiveSpineSurgeryPage from "@/components/MinimallyInvasiveSpineSurgeryPage";

// Static metadata
export const metadata = {
  title:
    "Best Minimally Invasive Spine Surgery in Ajmer | Dr Jagdish ",
  description:
    "Get advanced minimally invasive spine surgery in Ajmer by Dr. Jagdish Singh Charan for faster recovery, reduced pain, and effective spine treatment solutions.",
  keywords:
    "Minimally Invasive Spine Surgery Ajmer, MIS Spine Surgery Ajmer, Spine Surgeon Ajmer, Dr Jagdish Singh Charan, Best Spine Surgery Ajmer, Back Pain Treatment Ajmer, Advanced Spine Surgery",
  openGraph: {
    title:
      "Minimally Invasive Spine Surgery in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Consult Dr. Jagdish Singh Charan for minimally invasive spine surgery in Ajmer, offering advanced techniques for faster recovery and better outcomes.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/minimally-invasive-spine-og.jpg",
        width: 1200,
        height: 630,
        alt: "Minimally Invasive Spine Surgery by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services/minimally-invasive-spine-surgery",
  },
  alternates: {
    canonical:
      "https://drjagdishcharan.in/services/minimally-invasive-spine-surgery",
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

function MinimallyInvasiveSpineSurgeryPages() {
  return (
    <div>
      <MinimallyInvasiveSpineSurgeryPage />
    </div>
  );
}

export default MinimallyInvasiveSpineSurgeryPages;
