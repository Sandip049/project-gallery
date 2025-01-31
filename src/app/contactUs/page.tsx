"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { MapPin, Mail, Phone } from "lucide-react";
import ButtonSlide from "@/components/buttoncomponent/button";
import { FiSend } from "react-icons/fi";



export default function HeroHighlightDemo() {
  return (
    <>
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Contact Us{" "}
        <div>
        <Highlight className="text-black dark:text-white w-full text-xl md:text-2xl lg:text-3xl">
        Let us know how we can help.
        </Highlight>
        </div>
      </motion.h1>
    </HeroHighlight>
    <div className="w-full min-h-screen bg-[#1A1A1A] text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-6 gap-12 items-center">
          <div className="bg-[#2A2A2A] md:col-span-4 rounded-2xl p-6 md:p-10 ">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Send us a message
            </h1>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#3A3A3A] rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-[#3A3A3A] rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input
                    type="number"
                    className="w-full bg-[#3A3A3A] rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Website</label>
                  <input
                    type="text"
                    className="w-full bg-[#3A3A3A] rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Website"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#3A3A3A] rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  className="w-full bg-[#3A3A3A] rounded-lg p-3 h-32 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Message"
                />
              </div>
              <ButtonSlide
                  title="Submit"
                  iconClass={<FiSend />}
                  link="#"
      />
            </form>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get in touch
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-400">
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">EMAIL US</h3>
                  <p className="text-gray-400">
                  supreet@doublexstudios.in
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">CALL US</h3>
                  <p className="text-gray-400">
                  +919810625123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
