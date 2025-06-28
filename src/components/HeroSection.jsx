"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative py-12 px-4 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-hidden">

      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[url('/images/home/background.jpg')] bg-cover bg-center opacity-10 -z-10" />

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left relative z-10">
        <div className="inline-flex items-center mb-4 px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
          <span>💚 Advanced Ortho-Spine Care</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Personalized Spine & Orthopedic Treatments by{" "}
          <span className="text-green-600">Dr. Jagdish Singh Charan</span>
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-8">
          Experience minimally invasive spine surgery, joint replacement, and pain management with expert orthopedic care tailored just for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-700 transition-all">
            Book Appointment
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-all">
            View Services
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex text-yellow-500">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <FaStar key={idx} />
              ))}
          </div>
          <p className="text-gray-700 text-sm">
            Rated <span className="text-green-600 font-semibold">4.9/5</span> by 950+ Happy Patients
          </p>
 
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative border-4 rounded-lg overflow-hidden min-h-[300px] md:min-h-[500px] w-full z-10">
        <Image
          src="/images/home/heroposter.png"
          alt="Orthopedic Specialist"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Emergency Call Floating Card */}
      <div className="hidden md:flex absolute bottom-4 right-4 bg-white border shadow-lg rounded-xl px-4 py-2 items-center gap-3 z-20">
        <div className="bg-red-100 p-2 rounded-full">
          <FaPhoneAlt className="text-red-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">Emergency Call</p>
          <p className="text-xs text-gray-500">24/7 Available For Help</p>
        </div>
      </div>
    </section>
  );
}
