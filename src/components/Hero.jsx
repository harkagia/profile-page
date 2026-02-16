import { FaFacebook } from "react-icons/fa";
import AnimatedTitles from "../utils/AnimatedTitles";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-[url('./assets/slider_background.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-light capitalize tracking-wide text-teal-500">
            Hi, I'm Hangger Hidayanto
          </h3>
          <AnimatedTitles />
          <p className="mt-4 text-gray-300 max-w-xl">
            I'm a passionate developer with expertise in React, Node.js, and modern web technologies.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">React</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">Node.js</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">JavaScript</span>
          </div>

          <div className="flex text-gray-400 gap-5 mt-8 justify-center md:justify-start">
            <div className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
              <FaFacebook/>
            </div>
            <div className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
              <BsWhatsapp/>
            </div>
            <div className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
              <LiaLinkedin/>
            </div>
            <div className="p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors">
              <BsInstagram/>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2 text-sm cursor-pointer rounded-full bg-linear-to-r from-teal-400 to-teal-700 font-light text-white hover:opacity-70 transition-opacity">
              View My Works
            </button>
            <button className="px-6 py-2 text-sm cursor-pointer rounded-full bg-white/10 backdrop-blur-md font-light text-white hover:opacity-70 transition-opacity">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
