import React, { useState, useEffect } from "react";
import oralQues from './oralQues.json';
import Logo from "./assets/bg2.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { Document, Page } from 'react-pdf';

function OralQuestions() {
  const navigate = useNavigate();
  const [captName, setCaptName] = useState(""); // State to store selected captain name
  const [currentSetIndex, setCurrentSetIndex] = useState(0); // State to manage current set index

  useEffect(() => {
    window.onpopstate = function () {
      navigate("/captainquespage");
    };
  });
  
  // Fetch and set the captain name from local storage on component mount
  useEffect(() => {
    const storedCaptName = localStorage.getItem("captName");
    if (storedCaptName) {
      setCaptName(storedCaptName);
    }
  }, []);

  // Filter the data based on the selected captain name
  const filteredData = oralQues[captName] || [];
  console.log(filteredData)
  const handlePrevSet = () => {
    setCurrentSetIndex((prevIndex) => {
      if (prevIndex === 0) {
        // If on the first set, wrap around to the last set
        return filteredData.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextSet = () => {
    setCurrentSetIndex((prevIndex) => {
      if (prevIndex === filteredData.length - 1) {
        // If on the last set, wrap around to the first set
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };


  return (
    <div className="lg:top-0 lg:left-0 lg:right-0 lg:bg-gradient-to-t from-darkest-blue to-black2 lg:z-50 lg:py-6 py-12 lg:px-0 px-6 overflow-y-auto">
      <div className="flex flex-col justify-center items-center">
      <FontAwesomeIcon icon={faBackward} 
      size="2xs"
      style={{"--fa-primary-color": "#dadde2", "--fa-secondary-color": "#dadde2"}}
      className="btn text-white text-2xl lg:text-5xl cursor-pointer absolute top-1/2 lg:left-48 left-6 lg:mt-6 transform -translate-y-1/2"
      onClick={handlePrevSet}
      />
        
        <div className="flex flex-col justify-center items-center bg-white px-6 py-6 rounded-lg max-w-4xl mx-auto md:mt-20 lg:mt-0 lg:mb-0 font-montserrat shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-y-auto relative">
          <div className="mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-28 h-28 sm:w-40 sm:h-40"
            />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-xl lg:text-2xl font-semibold mt-0 text-darkest-blue font-montserrat tracking-normal">{captName}</h2>
            {filteredData && filteredData.length > 0 && (<h2 className="text-xl lg:text-2xl font-semibold mt-0 text-darkest-blue font-montserrat tracking-normal">(Set {filteredData[currentSetIndex].set})</h2>)}
          </div>
          {filteredData && filteredData.length > 0 && (
            <div className="mb-4">
              <iframe
                title="PDF Viewer"
                src={filteredData[currentSetIndex].url}
                seamless=""
                width={700}
                height={600}
                className="block lg:hidden w-72 h-96"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          )}
          {filteredData && filteredData.length > 0 && (
            <div className="mb-4">
              <iframe
                title="PDF Viewer"
                src={filteredData[currentSetIndex].url}
                seamless=""
                width={700}
                height={600}
                className="hidden lg:block"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          )}
        </div>
        <FontAwesomeIcon
          icon={faForward}
          className="text-white text-2xl lg:text-5xl cursor-pointer absolute top-1/2 lg:right-48 right-6 lg:mt-6 transform -translate-y-1/2"
          onClick={handleNextSet}
        />
      </div>
    </div>
  );
}

export default OralQuestions;
