'use client';

import { FaUserMd, FaBone, FaAmbulance, FaRunning, FaPills, FaDna, FaProcedures, FaHandsHelping, FaWheelchair } from 'react-icons/fa';
import { MdMedicalServices, MdOutlineBackHand } from 'react-icons/md';
import { BiClipboard } from 'react-icons/bi';

export default function SpineOrthoServices() {
  const services = [
    {
      title: 'Spine Surgery',
      icon: <FaUserMd className="w-12 h-12 relative z-10" />,
      description: 'Surgical treatment for spinal conditions and deformities.',
    },
    {
      title: 'Physiotherapy',
      icon: <FaHandsHelping className="w-12 h-12 relative z-10" />,
      description: 'Rehabilitation and recovery support through expert therapy.',
    },
    {
      title: 'Disc Replacement',
      icon: <FaBone className="w-12 h-12 relative z-10" />,
      description: 'Advanced procedures to replace damaged spinal discs.',
    },
    {
      title: 'Orthopedic Surgery',
      icon: <MdMedicalServices className="w-12 h-12 relative z-10" />,
      description: 'Treatment for musculoskeletal disorders and injuries.',
    },
    {
      title: 'Minimally Invasive Spine Surgery',
      icon: <FaProcedures className="w-12 h-12 relative z-10" />,
      description: 'Low-impact spinal surgery for faster fit recovery.',
    },
    {
      title: 'Sports Injury Treatment',
      icon: <FaRunning className="w-12 h-12 relative z-10" />,
      description: 'Specialized care and rehabilitation for sports injuries.',
    },
    {
      title: 'Back & Neck Pain Management',
      icon: <MdOutlineBackHand className="w-12 h-12 relative z-10" />,
      description: 'Comprehensive treatment for chronic back and neck pain.',
    },
    {
      title: 'Joint Replacement',
      icon: <FaWheelchair className="w-12 h-12 relative z-10" />,
      description: 'Hip, knee, and other joint replacement surgeries.',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-9 rounded-3xl overflow-hidden border border-gray-400 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group cursor-pointer hover:scale-105 hover:border-blue-700 shadow-sm"
          >
            {/* Background radial circles */}
            <span className="absolute right-[-5.2rem] top-[-5.2rem] w-40 h-40 bg-blue-700 rounded-full opacity-0 scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[7] group-hover:opacity-100 z-0"></span>
            <span className="absolute left-[-5.2rem] bottom-[-5.2rem] w-40 h-40 bg-blue-700 rounded-full opacity-0 scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[7] group-hover:opacity-100 z-0"></span>

            {/* Content */}
            <div className="flex flex-col items-center gap-4 text-black transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10">
              <div className="group-hover:text-white">{service.icon}</div>
              <h3 className="font-bold text-xl group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] text-center">
                {service.title}
              </h3>
              <p className="text-base opacity-80 group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] text-center">
                {service.description}
              </p>

              {/* Button with skew slide effect */}
              <button
                aria-label={`Read more about ${service.title}`}
                className="relative w-[6em] border-2 border-white h-[2em] mt-2 bg-[#1447E6] text-white text-[20px] rounded-[0.625em] overflow-hidden z-10 cursor-pointer transition-colors duration-300 group/button"
              >
                <span className="relative z-10 group-hover/button:text-black">Read More</span>
                <span className="absolute inset-0 bg-white transform -skew-x-[45deg] scale-x-0 group-hover/button:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
