"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingContactIcons() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
      {/* WhatsApp (bottom-left) */}
      <div className="fixed bottom-4 left-4 z-50">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredIcon("whatsapp")}
            onMouseLeave={() => setHoveredIcon(null)}
            className="relative inline-flex items-center"
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

      {/* Call (bottom-right) */}
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredIcon("call")}
            onMouseLeave={() => setHoveredIcon(null)}
            className="relative inline-flex items-center"
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
    </>
  );
}
