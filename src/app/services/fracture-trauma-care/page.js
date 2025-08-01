import FractureandTraumaCare from "@/components/FractureandTraumaCare";
import React from "react";
// Static metadata
export const metadata = {
  title: "Top Fracture & Trauma Care in Ajmer | Dr Jagdish ",
  description:
    "Get expert fracture and trauma care treatment in Ajmer by Dr. Jagdish Singh Charan, providing prompt and advanced orthopedic solutions for bone injuries and emergencies.",
  keywords:
    "Fracture treatment Ajmer, Trauma care Ajmer, Orthopedic trauma surgeon Ajmer, Bone fracture treatment Ajmer, Emergency orthopedic care Ajmer, Dr Jagdish Singh Charan, Best orthopedic doctor Ajmer",
  openGraph: {
    title: "Fracture & Trauma Care in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Consult Dr. Jagdish Singh Charan for advanced fracture and trauma care in Ajmer, ensuring prompt treatment for bone injuries and orthopedic emergencies.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/fracture-trauma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fracture and Trauma Care by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services/fracture-trauma-care",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/services/fracture-trauma-care",
  }, robots: "index, follow",
  authors: [
    {
      name: "Dr. Jagdish Singh Charan",
      url: "https://drjagdishcharan.in/",
    },
  ],
  publisher: "Dr. Jagdish Singh Charan",
};

function FractureandTraumaCarepage() {
  return (
    <div>
      <FractureandTraumaCare />
    </div>
  );
}

export default FractureandTraumaCarepage;
