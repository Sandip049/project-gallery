import React from "react";
import Image from "next/image";
export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
        <div className="text-center font-bold py-4 text-black">
        <h1 className="text-2xl sm:text-5xl md:text-7xl" style={{lineHeight:'95px'}} >DOUBLE X STUDIOS</h1>
        <span className="text-2xl w-full text-[72px]">animation & visual effects</span>
        </div>
      <main className="px-6 py-8 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="space-y-2 max-w-">
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            IT STARTED WITH -
            </h1>
                <h3 className="text-xl md:text-3xl font-bold leading-tight text-black">An endless passion for animation,visualeffects,and games.</h3></div>
            {/* <div className="pt-8">
              <h3 className="text-sm mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-sm hover:opacity-75"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-sm hover:opacity-75"
                >
                  <Youtube size={16} />
                  <span>Youtube</span>
                </a>
              </div>
            </div> */}
            <div className="pt-2 max-w-2xl">
              <p className="text-gray-600 text-justify">
                D Double X is an Animation Studio helps clients turn their ideas into reality, thanks to the talents of our experienced front-end team all across India and our state-of-the-art production studio in South Ex. New Delhi, India. We can support any animated project from concept through completion and offer the creative, technical and production capabilities to produce CG animation for feature films, television, commercials, video games & web.

                Double X Studios located in New Delhi, India provides professional 3D visualizations, 3D animations, interactive presentations, multimedia presentations and custom software solutions. Double X studio offer cutting-edge digital graphics to meet any criteria from our Clients. We always raise the bar of expectation.
              </p>
            </div>
          </div>
          <div className="w-full ">
            <Image
              src="/supreet_bhamrah.jpg"
              alt="Podcast host"
              className="w-full h-auto rounded-lg"
              height={800}
              width={800}
            />
          </div>
        </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black pt-8">Supreet Bhamrah</h1>
          <div className="w-full text-black text-justify pt-8">
            With a rich experience of over 20 years, Supreet Bhamrah, has made a mark for himself in the animation industry with the establishment of Double X Studios. With a vision of producing world class entertainment and infotainment, Double X has produced a host of documentaries, advertisements, animated series, hi-end websites and games for some prestigious names. Among its satisfied customers are Airtlel, Samsung, Castrol, Times of India, Maruti, LG, Ceat, Shyam Sens Tata Docomo,Indian Army,  and the Common Wealth Games.


            From a state of the art animation studio in Delhi, Supreet has spearheaded every project from conceptualization, creativity and technical supervision to deliver over 200 projects successfully.

            Carving a niche in education, Having established a reputation in the world of animation, Supreet has also created a reputation in the field of animation education with the setting up of Maya Academy of advance cinematics and then Frameboxx Animation Academy, both catering to animation education. With over 50 training centers spread across India and Abroad, Frameboxx delivers quality software engineers equipped with the latest know-how and skills required for the fast-growing and rapidly evolving animation industry.
          </div>
          </div>
      </main>
    </div>
  );
}
