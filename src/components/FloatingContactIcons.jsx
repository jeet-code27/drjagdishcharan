"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingContactIcons() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="fixed bottom-4 left-4 right-4 flex justify-between items-end z-50">

      {/* Left side WhatsApp */}
      <div className="flex flex-col items-start space-y-2">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredIcon("whatsapp")}
            onMouseLeave={() => setHoveredIcon(null)}
            className="relative flex items-center"
          >
            {hoveredIcon === "whatsapp" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-2 bg-gray-800 text-white px-2 py-1 rounded shadow whitespace-nowrap"
              >
                WhatsApp Us for Instant Support
              </motion.div>
            )}
            <WhatsAppButton>
              <div className="bg-green-500 p-3 rounded-full shadow-lg cursor-pointer">
                <FaWhatsapp size={24} color="white" />
              </div>
            </WhatsAppButton>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right side Call */}
      <div className="flex flex-col items-end space-y-2">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredIcon("call")}
            onMouseLeave={() => setHoveredIcon(null)}
            className="relative flex items-center"
          >
            {hoveredIcon === "call" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-2 bg-gray-800 text-white px-2 py-1 rounded shadow whitespace-nowrap"
              >
                Call Us Now for Appointment
              </motion.div>
            )}
            <Link href="tel:+918003474733">
              <div className="bg-blue-500 p-3 rounded-full shadow-lg cursor-pointer">
                <FaPhoneAlt size={24} color="white" />
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
