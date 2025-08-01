import BookingSystem from "@/components/BookingSystem";

export const metadata = {
  title:
    "Book an Appointment |  Orthopedic & Spine Surgeon in Ajmer",
  description:
    "Schedule your consultation with Dr. Jagdish Singh Charan, leading Orthopedic & Spine Surgeon in Ajmer. Quick booking, expert care, and personalized treatment await you.",
  keywords:
    "Book Appointment Dr Jagdish Singh Charan, Orthopedic Appointment Ajmer, Spine Surgeon Booking, Consult Bone Specialist Ajmer, Joint Pain Doctor Ajmer, Schedule Surgery Ajmer",
  openGraph: {
    title: "Book an Appointment | Dr Jagdish Singh Charan",
    description:
      "Easily book your consultation with Dr. Jagdish Singh Charan, Ajmer’s top orthopedic and spine specialist. Get expert care for bone, joint, and spine issues today.",

    type: "website",
    url: "https://drjagdishcharan.in/book-appointment",
  },
  alternates: {
    canonical: "https://drjagdishcharan.in/book-appointment",
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

export default function BookAppointment() {
  return (
    <div className="bg-gray-50">
      <BookingSystem />
    </div>
  );
}
