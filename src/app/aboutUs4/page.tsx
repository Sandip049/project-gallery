import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center gap-12 overflow-hidden px-10 py-4 tracking-[0.3px]">
        {/* <div className="flex w-full">
          <h1 className="flex w-screen flex-col gap-2 text-center text-2xl sm:text-5xl md:text-7xl">
            DOUBLE X STUDIOS
            <span className="city-night w-full font-playfair italic">
              animation & visual effects
            </span>
          </h1>
        </div> */}
          {/* <div className="flex flex-col gap-4 w-full">
            <p className="text-xs uppercase tracking-[5px]">
              It Started With -{" "}
            </p>
            <p className="text-clip font-playfair text-xl md:text-4xl">
              An endless passion for{" "}
              <span className="italic">
                animation, visual effects, and games{" "}
              </span>
            </p>
        </div> */}
        <div className="w-full min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 group cursor-pointer">
            <Image
              src="/dxLogo.webp"
              alt="Animation workspace"
              className="w-full rounded-2xl"
              height={500}
              width={500}
            />
            <div className="absolute -right-12 -bottom-12 -z-10">
              <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
                <path
                  d="M0 0h240v240H0z"
                  fill="url(#grid-pattern)"
                  fillOpacity="0.1"
                />
                <defs>
                  <pattern
                    id="grid-pattern"
                    patternUnits="userSpaceOnUse"
                    width="20"
                    height="20"
                  >
                    <path d="M20 0H0v20" stroke="#4F46E5" strokeWidth="0.5" />
                  </pattern>
                </defs>
              </svg>
            </div>
          </div>
          <div className="space-y-6 md:col-span-3">
            <span className="text-white font-medium uppercase tracking-wide">
                IT STARTED WITH -
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                An endless passion for animation,visualeffects,and games.
            </h1>
            <p className="text-class">
                D Double X is an Animation Studio helps clients turn their ideas into reality, thanks to the talents of our experienced front-end team all across India and our state-of-the-art production studio in South Ex. New Delhi, India. We can support any animated project from concept through completion and offer the creative, technical and production capabilities to produce CG animation for feature films, television, commercials, video games & web.

                Double X Studios located in New Delhi, India provides professional 3D visualizations, 3D animations, interactive presentations, multimedia presentations and custom software solutions. Double X studio offer cutting-edge digital graphics to meet any criteria from our Clients. We always raise the bar of expectation.
            </p>
          </div>
        </div>
      </div>
    </div>
      <div className="flex flex-col gap-6 text-center md:gap-12">
          <p className="font-light uppercase tracking-[5px]">leadership</p>
        <div className="w-full h-full  flex flex-col flex-end md:flex-row gap-4 md:gap-8">
        <div className="w-full relative grid md:grid-cols-5">
            <div className="md:col-span-1 ">
            <div className="absolute top-2 left-[120px]  bg-black bg-opacity-50">
                <p className="font-light tracking-[5px] text-7xl uppercase text-start">Bringing <br></br>imagination<br></br> to life.</p>
            </div>
            </div>
           <div className="md:col-span-4">
           <Image
              src="/supreet_bhumrah.jpg"
              alt="Supreet Bhumrah"
              height={1000}
              width={1000}
              className="h-full w-full object-cove"
            />
           </div>
           </div>
    </div>
        <div className="flex w-full flex-col gap-4 text-sm">
            <p className="text-start font-playfair text-3xl font-semibold italic">
              Supreet Bhumrah
            </p>
            <p className="text-start text-sm font-light tracking-[5px]">
              Owner
            </p>
            <div className="flex gap-4">
            <div className="flex flex-col gap-4">
            <p className="text-start leading-6 text-[16px]">
              With a rich experience of over 20 years, Supreet Bhamrah, has
              made a mark for himself in the animation industry with the
              establishment of Double X Studios. With a vision of producing
              world class entertainment and infotainment, Double X has
              produced a host of documentaries, advertisements, animated
              series, hi-end websites and games for some prestigious names.
              Among its satisfied customers are Airtlel, Samsung, Castrol,
              Times of India, Maruti, LG, Ceat, Shyam Sens Tata Docomo,Indian
              Army, and the Common Wealth Games.
            </p>
            <div className="space-y-4">
                  <Link href="#" className="flex items-center justify-between border-b pb-2 group">
                    <span>supreet@doublexstudios.in</span>
                    <MdOutlineMailOutline className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between border-b pb-2 group">
                    <span>+919810625123</span>
                    <FaSquarePhone className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between border-b pb-2 group">
                    <span>+Supreet Bhamrah</span>
                    <FaImdb className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
            </div>
            <p className="text-start leading-6 text-[16px]">
              From a state of the art animation studio in Delhi, Supreet has
              spearheaded every project from conceptualization, creativity and
              technical supervision to deliver over 200 projects successfully.
              <br />
              <br></br>
              Carving a niche in education, Having established a reputation in
              the world of animation, Supreet has also created a reputation in
              the field of animation education with the setting up of Maya
              Academy of advance cinematics and then Frameboxx Animation
              Academy, both catering to animation education. With over 50
              training centers spread across India and Abroad, Frameboxx
              delivers quality software engineers equipped with the latest
              know-how and skills required for the fast-growing and rapidly
              evolving animation industry.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;