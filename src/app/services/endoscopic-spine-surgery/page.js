import SpineSurgery from "@/components/SpineSurgery";
import React from "react";

// Static metadata
export const metadata = {
  title: "Best Endoscopic Spine Surgery in Ajmer | Dr Jagdish ",
  description:
    "Get advanced and minimally invasive endoscopic spine surgery in Ajmer by Dr. Jagdish Singh Charan, offering faster recovery and precise spinal treatments.",
  keywords:
    "Endoscopic Spine Surgery Ajmer, Minimally Invasive Spine Surgery, Spine Specialist Ajmer, Dr Jagdish Singh Charan, Best Spine Surgeon Ajmer, Back Pain Treatment Ajmer",
  openGraph: {
    title: "Endoscopic Spine Surgery in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Consult Dr. Jagdish Singh Charan for minimally invasive endoscopic spine surgery in Ajmer, ensuring faster recovery and effective treatment for spinal conditions.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/endoscopic-spine-og.jpg",
        width: 1200,
        height: 630,
        alt: "Endoscopic Spine Surgery by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services/endoscopic-spine-surgery",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/services/endoscopic-spine-surgery",
  }, robots: "index, follow",
  authors: [
    {
      name: "Dr. Jagdish Singh Charan",
      url: "https://drjagdishcharan.in/",
    },
  ],
  publisher: "Dr. Jagdish Singh Charan",
};

function SpineSurgerypage() {
  return (
    <div>
      <SpineSurgery />
    </div>
  );
}

export default SpineSurgerypage;
