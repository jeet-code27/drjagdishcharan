"use client";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsQuestionDiamondFill, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
 
 


export default function Footer() {
  return (
    <footer className="bg-gray-50  dark:bg-blue-900">
      <div className="max-w-full mx-auto p-4">
        
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex gap-4 flex-col">
          {/* Logo Section */}
          <div >
            <Link href="/" className="flex items-center  space-x-3 mb-4 sm:mb-0">
             
              <Image
               src="/images/home/logo.png"
                width={40}
                height={40}
                alt="Flowbite Logo"
                
              />
             
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-green">
              AGASTYA <span class="hindi">(अगस्त्य)</span> SPINE & ORTHO AAROGY</span>
            </Link>
            </div>
            <div className="max-w-xl">
              <p>Providing expert orthopedic and spine care with advanced technology, personalized treatment, and compassionate support to help you move pain-free and live better.</p>
            
          </div>
          <div className="max-w-xl">
          <ul className="space-y-2">
  <li>
    <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
    <div className="flex items-center space-x-2">
  <FaMap />
  <span>123, XYZ Road, Jaipur, Rajasthan - 302001</span>
</div>
    </Link>
  </li>
  <li>
    <Link href="tel:+919876543210" className="hover:underline">
    <div className="flex items-center space-x-2">
    <FaPhoneAlt />
  <span>123456789</span>
</div>
    </Link>
  </li>
  <li>
    <Link href="mailto:info@mayurspinecare.com" className="hover:underline">
    <div className="flex items-center space-x-2">
    
  
  <MdEmail /><span>email_id@gamil.com</span>
  </div>
    </Link>
  </li>
  <li>
  <div className="flex items-center space-x-2">
  <MdWatchLater />
    
  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
  </div>
  </li>
</ul>

            
          </div>
          </div>
          {/* Link Sections */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
               
  <li>
    <Link href="#" className="hover:underline">Spine Surgery</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Disc Replacement</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Minimally Invasive Spine Surgery</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Back & Neck Pain Management</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Physiotherapy</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Orthopedic Surgery</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Sports Injury Treatment</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Joint Replacement</Link>
  </li>
 

              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Quick Links
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              
  <li>
    <Link href="#" className="hover:underline">Home</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">About Us</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Services</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Testimonials</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Blog</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Contact Us</Link>
  </li>
  <li>
    <Link href="#" className="hover:underline">Book Appointment</Link>
  </li>
 

              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  <Link href="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Copyright and Social Icons */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} <Link href="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
          </span>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Link href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <BsFacebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <BsInstagram size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <BsTwitter size={20} />
            </Link>
            
             
          </div>
        </div>
      
      </div>
    </footer>
  );
}
