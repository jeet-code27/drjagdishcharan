import Arthroscopy from "@/components/Arthroscopy";
import React from "react";

// Static metadata
export const metadata = {
  title:
    "Best Arthroscopy & Sports Injury Care in Ajmer | Dr Jagdish Singh Charan",
  description:
    "Consult Dr. Jagdish Singh Charan for advanced arthroscopy and sports injury care in Ajmer, providing effective treatment for joint injuries and sports-related conditions.",
  keywords:
    "Arthroscopy Ajmer, Sports Injury Care Ajmer, Joint Injury Treatment Ajmer, Orthopedic Surgeon Ajmer, Dr Jagdish Singh Charan, Knee Arthroscopy Ajmer, Shoulder Arthroscopy Ajmer, Sports Medicine Ajmer",
  openGraph: {
    title:
      "Arthroscopy & Sports Injury Care in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Get specialized arthroscopy and sports injury care in Ajmer by Dr. Jagdish Singh Charan, offering advanced treatments for joint and sports injuries.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/arthroscopy-sports-og.jpg",
        width: 1200,
        height: 630,
        alt: "Arthroscopy and Sports Injury Care by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services/arthroscopy-Sports-injury-care",
  },
  alternates: {
    canonical:
      "https://drjagdishcharan.in/services/arthroscopy-Sports-injury-care",
  },
};

function Arthroscopypage() {
  return (
    <div>
      <Arthroscopy />
    </div>
  );
}

export default Arthroscopypage;
