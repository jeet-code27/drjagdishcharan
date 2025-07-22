import SpinalDeformityCorrection from "@/components/SpinalDeformityCorrection";
import React from "react";

// Static metadata
export const metadata = {
  title:
    "Best Spinal Deformity Correction Surgery in Ajmer | Dr Jagdish Singh Charan",
  description:
    "Consult Dr. Jagdish Singh Charan for advanced spinal deformity correction surgery in Ajmer, offering expert treatment for scoliosis, kyphosis, and other spinal deformities.",
  keywords:
    "Spinal Deformity Correction Ajmer, Scoliosis Surgery Ajmer, Kyphosis Correction Ajmer, Spine Surgeon Ajmer, Dr Jagdish Singh Charan, Best Spine Surgeon Ajmer, Spinal Deformity Treatment",
  openGraph: {
    title:
      "Spinal Deformity Correction Surgery in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Get specialized spinal deformity correction surgery in Ajmer by Dr. Jagdish Singh Charan for scoliosis, kyphosis, and other spine conditions with advanced care.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/spinal-deformity-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spinal Deformity Correction by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services/spinal-deformity-correction",
  },
  alternates: {
    canonical:
      "https://drjagdishcharan.in/services/spinal-deformity-correction",
  },
};

function SpinalDeformityCorrectionpage() {
  return (
    <div>
      <SpinalDeformityCorrection />
    </div>
  );
}

export default SpinalDeformityCorrectionpage;
