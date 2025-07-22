import EachHero from "@/components/EachHero";
import ExpertiseSection from "@/components/ExpertiseSection";
import ScheduleHealthcare from "@/components/ScheduleHealthcare";
import ServiceHero from "@/components/ServiceHero";
import ServiceSlider from "@/components/ServiceSlider";

const slides = [
  {
    image: "/images/home/slide4.jpg",
    title: "Dr. Jagdish Singh Charan",
    subtitle: "Relief for Back and Neck Pain Through Expert, Personalized Care",
  },
  {
    image: "/images/services/joint-replacement.png",
    title: "Dr. Jagdish Singh Charan",
    subtitle:
      "Joint Replacement Surgery – Move Freely Again with Expert Surgery for Pain-Free Living",
  },
  {
    image: "/images/services/kneeinjury.webp",
    title: "Dr. Jagdish Singh Charan",
    subtitle:
      "Sports Injury Care – Specialized Recovery for Athletes and Active Lifestyles",
  },
];

// Static metadata
export const metadata = {
  title: "Best Orthopedic & Spine Services | Dr Jagdish Singh Charan - Ajmer",
  description:
    "Explore advanced orthopedic and spine services offered by Dr. Jagdish Singh Charan in Ajmer, including joint replacement, spine surgery, fracture treatment, and compassionate bone care.",
  keywords:
    "Orthopedic services Ajmer, Spine surgery Ajmer, Joint replacement Ajmer, Fracture treatment Ajmer, Dr Jagdish Singh Charan, Bone specialist Ajmer, Orthopedic surgeon Ajmer, Spine specialist Ajmer",
  openGraph: {
    title: "Orthopedic & Spine Services | Dr Jagdish Singh Charan - Ajmer",
    description:
      "Discover specialized orthopedic and spine treatments by Dr. Jagdish Singh Charan in Ajmer for joint, bone, and spine health.",
    images: [
      {
        url: "https://drjagdishcharan.in/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Orthopedic & Spine Services by Dr Jagdish Singh Charan",
      },
    ],
    type: "website",
    url: "https://drjagdishcharan.in/services",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/services",
  },
};

export default function Home() {
  return (
    <>
      <ServiceSlider slides={slides} />
      <ServiceHero />
      <ExpertiseSection />
      <ScheduleHealthcare />
          
    </>
  );
}
