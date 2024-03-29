import React, { useState } from "react";
import Logo from "./assets/bg2.png";
import SponsLogo from "./assets/sponsLogo.jpeg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import insta from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import telegram from "./assets/telegram.png";
import { ThreeDots } from "react-loader-spinner";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";



function SponAdPage() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const selectedCategory = localStorage.getItem("selectedCategory3");
  let ct = localStorage.getItem("selectedCategory4");

  const handleProceed = async () => {
    try {
        // Show loading indicator
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      // Navigate to the next page
      navigate("/resultpage");
      } catch (error) {
        console.error('Error storing user data:', error);
        // Handle error, show an alert, etc.
      }finally {
        setIsLoading(false); // Set loading state back to false after the operation is complete
      }
  };



  return (
    <div className="bg-gradient-to-t from-blue-900 to-slate-400 bg-cover bg-center lg:py-8 py-0">
    <div className="flex flex-col justify-center bg-white bg-cover bg-center sm:px-8 px-6 lg:py-8 py-16 rounded-lg shadow-lg max-w-3xl mx-auto md:mt-20 lg:mt-0 mb-0 font-montserrat">
    <div className="flex items-center justify-center mb-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 h-24 lg:w-32 lg:h-32"
        />
        <FontAwesomeIcon icon={faXmark} className="w-8 h-8 text-darkest-blue opacity-90 mr-4"/>
      <img
          src={SponsLogo}
          alt="Spons Logo"
          className="w-22 h-16 lg:w-28 lg:h-20"
        />
    </div>
    <h2 className="text-base lg:text-2xl font-bold mt-4 text-darkest-blue font-montserrat tracking-wide">Mariner's Drive X Nautical Knights</h2>

    <p className="lg:text-base text-sm font-medium mt-6 text-darkest-blue font-montserrat tracking-wide">Embark on an extraordinary journey and explore the boundless possibilities that arise from the collaboration between Mariner's Drive and Nautical Knights. Dive into a world where innovation meets tradition, where the seas of creativity converge with the winds of expertise.</p>
    <p className="lg:text-lg text-sm font-medium mt-4 text-darkest-blue font-montserrat tracking-wide">Follow us on social media:</p>

    <p className="lg:text-lg text-base font-semibold mt-4 text-darkest-blue font-montserrat tracking-wide">Mariner's Drive:</p>

    <div className="flex mt-4">
    <a href="https://www.instagram.com/marinersdrive?igsh=MWE5bzBjaHR6ZTF2dA%3D%3D&utm_source=qr"><img src={insta} alt="insta" className="w-6 h-6 lg:w-8 lg:h-8" /></a>
    <a href="https://t.me/MarinersDrive"><img src={telegram} alt="telegram" className="w-4 h-4 lg:w-6 lg:h-6 mt-1 ml-3" /></a>
    <a href="https://www.linkedin.com/in/mariner%E2%80%99s-drive-4874142b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkedin} alt="linkedin" className="w-6 h-6 lg:w-8 lg:h-8 ml-3" /></a>
    </div>

    <p className="lg:text-lg text-base font-semibold mt-10 text-darkest-blue font-montserrat tracking-wide">Nautical Knights:</p>
    <div className="flex mt-4">
    <a href="https://www.instagram.com/nauticalknightsailor?igsh=aGpsa2s5Zjd5eDl5"><img src={insta} alt="insta" className="w-6 h-6 lg:w-8 lg:h-8" /></a>
    <a href="https://t.me/+AD3kw_wTv_83ZDM1"><img src={telegram} alt="telegram" className="w-4 h-4 lg:w-6 lg:h-6 mt-1 ml-3" /></a>
    </div>

    <button className="bg-darkest-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-white tracking-wide font-semibold border-white
         hover:border-white py-2 lg:text-base text-sm rounded lg:mt-12 mt-10 lg:mb-2" 
        onClick={() => handleProceed()}>
          {isLoading ? (
          <span className="flex justify-center items-center opacity-50 cursor-not-allowed">
            <ThreeDots
              color="#F6F6F6"
              height={20}
              width={20}
              visible={isLoading}
            />
          </span>
        ) : (
          "Skip"
        )}</button>
      </div>
    </div>
  );
}

export default SponAdPage;
