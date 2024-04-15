import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaInstagramSquare, FaPython, FaWhatsappSquare } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Passionate Learner.", "Django Full Stack Developer.", "React Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">
  Hi, I'm <span className="text-designColor capitalize">Sagar Gautam</span>
</h1>


        <h2 className="text-2xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl  ">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            // cursorColor="#ff014f"
            cursorColor="##56ff"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a full-stack developer who does front-end on React and back-end on Django and use Django REST Framework to make a full-stack application. I also make multi-page applications using vanilla JS or Django on their own.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Connect with Me
          </h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.facebook.com/unstopable.sagar/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/unstopable-sagar-8a2935257/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.instagram.com/unstopable_sagar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="bannerIcon">
                <FaInstagramSquare />
              </span>
            </a>
            <a href="https://wa.link/nh080v" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <span className="bannerIcon">
                <FaWhatsappSquare />
              </span>
            </a>

          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            MY BEST SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner