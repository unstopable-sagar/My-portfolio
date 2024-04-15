import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sagar Gautam</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+977 9827187362</span>
        </p>
        <p className="text-base md:text-sm text-gray-400 flex items-center gap-2 md:w-auto">
          Email: <span className="text-lightText break-all">unstopable.sagar@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Connect with Me</h2>
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
    </div>
  );
}

export default ContactLeft