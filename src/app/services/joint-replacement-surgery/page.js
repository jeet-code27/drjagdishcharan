 import JointReplacement from '@/components/JointReplacement'
import React from 'react'
  

// Static metadata
export const metadata = {
  title: "Best Joint Replacement Surgery in Ajmer | Dr Jagdish Singh Charan",
  description:
    "Consult Dr. Jagdish Singh Charan for advanced joint replacement surgery in Ajmer, offering knee, hip, and shoulder replacement with modern techniques for faster recovery.",
  keywords:
    "Joint Replacement Surgery Ajmer, Knee Replacement Ajmer, Hip Replacement Ajmer, Shoulder Replacement Ajmer, Orthopedic Surgeon Ajmer, Dr Jagdish Singh Charan, Best Joint Replacement Surgeon Ajmer",
  openGraph: {
    title: "Joint Replacement Surgery in Ajmer | Dr Jagdish Singh Charan",
    description:
      "Get specialized joint replacement surgery in Ajmer by Dr. Jagdish Singh Charan for knee, hip, and shoulder joints with advanced orthopedic care.",
    images: [
      {
        url: "https://drjagdishsinghcharan.vercel.app/images/joint-replacement-og.jpg",
        width: 1200,
        height: 630,
        alt: "Joint Replacement Surgery by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishsinghcharan.vercel.app/services/joint-replacement-surgery",
  },
  alternates: {
    canonical: "https://drjagdishsinghcharan.vercel.app/services/joint-replacement-surgery",
  },
};



 function jointReplacementpage() {
   return (
     <div>
   <JointReplacement/>
     </div>
   )
 }
 
 export default jointReplacementpage
 