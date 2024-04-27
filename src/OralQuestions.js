import React, { useState, useEffect } from "react";
import oralQues from './oralQues.json';
import Logo from "./assets/bg2.png";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="lg:bg-gradient-to-t from-darkest-blue to-black2 lg:z-50 lg:py-6 pt-6 lg:px-0 px-6 pb-8 overflow-y-auto">
      <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-28 h-28 sm:w-40 sm:h-40"
            />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-xl lg:text-2xl font-semibold mt-0 text-gray-300 font-montserrat tracking-normal">{captName}</h2>
            {filteredData && filteredData.length > 0 && (<h2 className="text-xl lg:text-2xl font-semibold mt-0 text-gray-300 font-montserrat tracking-normal">(Set {filteredData[currentSetIndex].set})</h2>)}
          </div>
          {filteredData && filteredData.length > 0 && (
            <div className="mb-4">
              <iframe
                title="PDF Viewer"
                src={filteredData[currentSetIndex].url}
                seamless=""
                width={700}
                height={600}
                className="block lg:hidden w-96 h-108"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          )}
          {filteredData && filteredData.length > 0 && (
            <div className="lg:mb-4 mb-0">
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
          <div className="flex mt-2">
          <FontAwesomeIcon icon={faBackward} 
            style={{"--fa-primary-color": "#143261", "--fa-secondary-color": "#143261",}}         
            size="2xs"
            className="text-gray-800 text-2xl lg:text-3xl cursor-pointer lg:left-24 left-4 mr-4"
            onClick={handlePrevSet}
            />
          {filteredData && filteredData.length > 0 && (<h2 className="text-xl lg:text-2xl font-semibold text-gray-800 font-montserrat tracking-normal">{filteredData[currentSetIndex].set}</h2>)}

          <FontAwesomeIcon
          icon={faForward}
          className="text-gray-800 text-2xl lg:text-3xl cursor-pointer lg:right-24 right-4 ml-4"
          onClick={handleNextSet}
        />
        </div>

        </div>
        
      </div>
  );
}

export default OralQuestions;
