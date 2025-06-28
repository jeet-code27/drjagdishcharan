"use client";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function TopNavbar() {
  return (
    <nav className="bg-[#005A9C] text-white text-sm font-sans hidden md:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Left Section */}
          <div className="flex space-x-10">
            {/* Contact Info */}
            <div className="flex items-center space-x-2">
            <BsTelephone className="size-4" />
              <div>
                <div>Contact No.</div>
                <div className="font-semibold text-base">+91 82409 70287</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 2C8 2 5 5 5 8.5 5 14 12 22 12 22s7-8 7-13.5C19 5 16 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="8.5" r="2.5" />
              </svg>
              <div>
                <div>4/172, Gyan marg, Makarwali Rd,</div>
                <div className="font-semibold text-base">Panchsheel Nagar, Ajmer, Rajasthan</div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-2">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <div>Working Hours</div>
                <div className="font-semibold text-base">Mon-Sat: 4PM - 7PM</div>
              </div>
            </div>
          </div>

          {/* Right Section – Social Icons */}
          <div className="flex space-x-6">
            
            <a href="#" aria-label="Instagram" className="social-icon">
            <FaFacebookF className="scale-150"/>
              
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
            <AiFillInstagram className="scale-200"/>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .icon {
          display: inline-flex;
          vertical-align: middle;
          margin-right: 0.375rem;
          stroke-width: 2;
          stroke: white;
          fill: none;
          height: 1.25rem;
          width: 1.25rem;
        }
        .social-icon {
          stroke: white;
          height: 1.5rem;
          width: 1.5rem;
          cursor: pointer;
          transition: stroke 0.3s ease;
        }
        .social-icon:hover {
          stroke: #a3bffa;
        }
      `}</style>
    </nav>
  );
}
