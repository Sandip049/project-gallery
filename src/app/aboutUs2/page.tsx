import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return (
        <>
        <div className="w-full bg-black text-white container flex flex-col md:flex-row justify-center p-4 pt-8">
            <div className="w-[30%] text-5xl relative">
                <h1 className="absolute font-bold z-50">IT STARTED WITH -
                        An endless passion for animation,visualeffects,and games.</h1>
                {/* <span className="text-white">Supreet Bumrah</span> */}
            </div>
            <div className="w-[70%]">
                <Image
                    src="/supreet_bhamrah.jpg"
                    alt="Podcast host"
                    className="w-full h-auto rounded-lg"
                    height={800}
                    width={800}
                />
            </div>
        </div>
        <div className="w-full bg-black text-white container flex flex-col md:flex-row justify-center p-4 pt-8">
            <div className="w-[30%]">
            <div className="px-4">
            <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="space-y-4">
                  <Link href="#" className="flex items-center justify-between border-b pb-2 group">
                    <span>Instagram</span>
                    <Instagram className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between border-b pb-2 group">
                    <span>Youtube</span>
                    <Youtube className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
            </div>
            </div>
            <div className="w-[70%]">
                <p className="text-white text-justify px-4">
                D Double X is an Animation Studio helps clients turn their ideas into reality, thanks to the talents of our experienced front-end team all across India and our state-of-the-art production studio in South Ex. New Delhi, India. We can support any animated project from concept through completion and offer the creative, technical and production capabilities to produce CG animation for feature films, television, commercials, video games & web.

                Double X Studios located in New Delhi, India provides professional 3D visualizations, 3D animations, interactive presentations, multimedia presentations and custom software solutions. Double X studio offer cutting-edge digital graphics to meet any criteria from our Clients. We always raise the bar of expectation.
                </p>
            </div>
        </div>
        </>
    )
}