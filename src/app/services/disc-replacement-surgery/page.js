import DiskReplacement from "@/components/DiskReplacement";
import React from "react";

// Static metadata
export const metadata = {
  title: "Top Disc Replacement Surgery in Ajmer | Dr Jagdish ",
  description:
    "Consult Dr. Jagdish Singh Charan for advanced disc replacement surgery in Ajmer to relieve neck and back pain with minimally invasive spine treatment options.",
  keywords:
    "Disc Replacement Surgery Ajmer, Cervical Disc Replacement, Lumbar Disc Replacement, Spine Surgeon Ajmer, Dr Jagdish Singh Charan, Best Spine Surgery Ajmer, Back Pain Treatment Ajmer",
  openGraph: {
    title: "Disc Replacement Surgery in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Get advanced cervical and lumbar disc replacement surgery in Ajmer by Dr. Jagdish Singh Charan for effective spine treatment and pain relief.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/disc-replacement-og.jpg",
        width: 1200,
        height: 630,
        alt: "Disc Replacement Surgery by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services/disc-replacement-surgery",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/services/disc-replacement-surgery",
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

function DiskReplacementpage() {
  return (
    <div>
      <DiskReplacement />
    </div>
  );
}

export default DiskReplacementpage;
