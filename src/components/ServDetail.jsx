'use client';

import { CheckCircle } from 'lucide-react';

export default function ServDetail() {
  const services = [
    'Spine Consultation',
    'Endoscopic Spine Surgery',
    'Disc Replacement Surgery',
    'Spinal Deformity Correction',
    'Minimally Invasive Spine Surgery',
    'Joint Replacement Surgery',
    'Arthroscopy & Sports Injury',
    'Fracture & Trauma Care',
  ];

  return (
    <section className="py-12 px-4 rounded-2xl bg-white  ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left: Image with Experience Badge */}
        <div className="relative">
          <img
            src="/images/services/advancesServices.png" // Replace with your spine & orthopedic doctor's image
            alt="Spine and Orthopedic Doctor"
            className="rounded-xl w-full object-cover"
          />

          <div className="absolute bottom-4 left-4 bg-blue-200 rounded-xl p-1 w-40 text-center shadow-md">
            
            <p className="text-gray-800 text-xl font-semibold mb-2">Certified</p>
            <span className="inline-block bg-white text-gray-800  text-xs px-3 py-1 rounded-full">
              Spine & Orthopedic Surgeon
            </span>
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Advanced Spine & Orthopedic Care for a Pain-Free Life
          </h2>
          <p className="text-gray-600 mb-6">
            We specialize in treating spine and joint problems with precision. Our expert team ensures accurate diagnosis, minimally invasive treatments, and complete rehabilitation for your fast recovery and improved quality of life.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center text-gray-800">
                <CheckCircle className="w-4 h-4 text-blue-800 mr-2" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
