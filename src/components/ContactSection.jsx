"use client";

import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
const ContactSection = () => {
  return (
    <div className="bg-white min-h-4xl flex items-center justify-center  ">
      <div className="  max-w-screen flex flex-col gap-10 md:gap-24 shadow-lg   items-center rounded-lg bg-white">

        {/* Contact Form */}
        <form className="bg-white max-w-4xl w-screen p-6 rounded-lg drop-shadow-lg" aria-label="Contact Us Form">
          <div className='flex justify-center   items-center gap-4 pb-3 font-bold text-2xl text-blue-900 flex-wrap'>

            <span className='min-w-fit'>Get in Touch   </span>
            
            <span className="flex flex-row gap-2"><FaFacebookSquare className="cursor-pointer hover:scale-130 ease-in-out transition-all duration-300"/><FaInstagramSquare className="cursor-pointer hover:scale-130 ease-in-out transition-all duration-300" /><FaSquareWhatsapp className="cursor-pointer hover:scale-130 ease-in-out transition-all duration-300"/><FaSquareTwitter className="cursor-pointer hover:scale-130 ease-in-out transition-all duration-300"/>
          <FaSquareYoutube className="cursor-pointer hover:scale-130 ease-in-out transition-all duration-300"/></span>
          </div>

          <label htmlFor="firstName" className="block text-xs font-semibold text-gray-500 mb-1">FULL NAME *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Please enter first name..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            autoComplete="given-name"
          />

          <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-1">EMAIL *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Please enter email..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            autoComplete="email"
          />

          <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 mb-1">PHONE NUMBER *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            minLength={10}
            maxLength={10}
            required
            pattern="[0-9]{10}"
            placeholder="Please enter phone number..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            autoComplete="tel"
          />

          <label htmlFor="query" className="block text-xs font-semibold text-gray-500 mb-1">WHAT DO YOU HAVE IN MIND ?</label>
          <textarea
            id="query"
            name="query"
            rows="4"
            placeholder="Please enter query..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-8 text-sm placeholder-gray-300 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ></textarea>
<div className="flex  justify-center">
          <button
            type="submit"
            className="w-fit px-10 cursor-pointer bg-blue-500 text-white font-semibold text-sm py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          >
            Submit
          </button>
          </div>
        </form>

        

      </div>
    </div>
  );
};

export default ContactSection;
