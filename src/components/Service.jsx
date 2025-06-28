"use client";

import React, { useState } from "react";

const serviceCards = [
  {
    id: 1,
    category: "Spine",
    title: "Endoscopic Spine Surgery",
    description: "Minimally invasive technique for faster recovery and less pain.",
    href: "/services/endoscopic-spine",
    image: "/images/services/endoscopic-spine.jpeg",
  },
  {
    id: 2,
    category: "Spine",
    title: "Minimally Invasive Spine Surgery (MISS)",
    description: "Precise spinal procedures with less pain, reduced scarring, and quicker return to normal activities.",
    href: "/services/minimally-invasive-spine",
    image: "/images/services/miss.jpg",
  },
  {
    id: 3,
    category: "Joint",
    title: "Joint Replacements - Knee & Hip",
    description: "TKR and THR performed using modern implant technology and high-precision surgical methods.",
    href: "/services/joint-replacement",
    image: "/images/services/joint-replacement.png",
  },
  {
    id: 4,
    category: "Ortho",
    title: "Arthritis & Joint Pain Management",
    description: "Personalized care plans and pain-relief options for arthritis and other degenerative joint disorders.",
    href: "/services/arthritis-management",
    image: "/images/services/arthritis.png",
  },
  {
    id: 5,
    category: "Infection",
    title: "Bone TB & Orthopedic Infections",
    description: "Advanced diagnostic and treatment support for bone tuberculosis and musculoskeletal infections.",
    href: "/services/bone-infections",
    image: "/images/services/bone-tb.jpg",
  },
  {
    id: 6,
    category: "Trauma",
    title: "Fracture & Multiple Injury Care",
    description: "Comprehensive treatment for all types of fractures, trauma cases, and orthopedic emergencies.",
    href: "/services/fracture-treatment",
    image: "/images/services/fracture.jpg",
  },
];

const categories = ["All", "Spine", "Joint", "Ortho", "Infection", "Trauma"];

const ServiceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCards =
    selectedCategory === "All"
      ? serviceCards
      : serviceCards.filter((card) => card.category === selectedCategory);

  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 3);

  return (
    <section className="py-12 bg-gradient-to-b from-[bg-gradient-to-b from-[#B2D8FE] to-[#AECEF3] text-[#333]]  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
    Discover specialized treatments in spine, joint, and orthopedic care — tailored for faster recovery, lasting relief, and enhanced mobility.
  </p>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-blue-200 text-blue-600 border-blue-600"
              } hover:bg-blue-100 cursor-pointer transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="bg-white bg-gradient-to-b from-[#8ABBF0] to-[#e7eaef] text-[#333] rounded-xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover sm:h-52 lg:h-56"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                <a
                  href={card.href}
                  className="text-blue-600 font-medium hover:underline text-sm"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {filteredCards.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-semibold border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
