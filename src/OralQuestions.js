import React, { useState } from "react";
import oralQues from './oralQues.json';
import Logo from "./assets/bg2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function OralQuestions() {
  const selectedCategory = localStorage.getItem("oral");
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handlePrevSet = () => {
    setCurrentSetIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextSet = () => {
    setCurrentSetIndex((prevIndex) => Math.min(oralQues.length - 1, prevIndex + 1));
  };

  const currentSet = oralQues[currentSetIndex] || { capt: "", set1: {}, set2: {} };

  return (
    <div className="lg:top-0 lg:left-0 lg:right-0 lg:bg-gradient-to-t from-darkest-blue to-black2 lg:z-50 sm:py-6 lg:pb-3 pb-2 overflow-y-auto">
      <div className="flex flex-col justify-center items-center">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-white text-base lg:text-2xl cursor-pointer"
          onClick={handlePrevSet}
        />
        <div className="flex flex-col justify-center bg-white px-6 py-6 rounded-lg max-w-3xl mx-auto md:mt-20 lg:mt-0 lg:mb-0 font-montserrat shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-y-auto">
          <div className="flex items-center justify-center mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-28 h-28 sm:w-40 sm:h-40"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center text-darkest-blue">{currentSet.capt}</h2>
          {Object.entries(currentSet.set1).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-darkest-blue">Set 1:</h3>
              <p className="text-base mt-2 font-medium text-center text-darkest-blue">Internal: {currentSet.set1.internal || ""}</p>
              <p className="text-base mt-2 font-medium text-center text-darkest-blue">External: {currentSet.set1.external || ""}</p>
              {Object.entries(currentSet.set1).length > 0 && (
                <div className="mt-4 tracking-wide">
                  <h3 className="text-lg font-semibold text-darkest-blue">Function 1:</h3>
                  <ul>
                    {Object.values(currentSet.set1.func1 || {}).map((func, index) => (
                      <li key={index}>{index + 1}. {func}</li>
                    ))}
                  </ul>
                </div>
              )}
              {Object.entries(currentSet.set1).length > 0 && (
                <div className="mt-4 tracking-wide">
                  <h3 className="text-lg font-semibold text-darkest-blue">Function 2:</h3>
                  <ul>
                    {Object.values(currentSet.set1.func2 || {}).map((func, index) => (
                      <li key={index}>{index + 1}. {func}</li>
                    ))}
                  </ul>
                </div>
              )}
              {Object.entries(currentSet.set1).length > 0 && (
                <div className="mt-4 tracking-wide">
                  <h3 className="text-lg font-semibold text-darkest-blue">Function 3:</h3>
                  <ul>
                    {Object.values(currentSet.set1.func3 || {}).map((func, index) => (
                      <li key={index}>{index + 1}. {func}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4 bg-blue-900 p-4 rounded-lg justify-center">
                <p className="text-white font-bold text-center">Function 1: <span className="text-red font-bold tracking-wider">{currentSet.set1.func1_res || ""}</span></p>
                <p className="text-white font-bold text-center">Function 2: <span className="text-green font-bold tracking-wider">{currentSet.set1.func2_res || ""}</span></p>
                <p className="text-white font-bold text-center">Function 3: <span className="text-green font-bold tracking-wider">{currentSet.set1.func3_res || ""}</span></p>
              </div>
            </div>
          )}
          {Object.entries(currentSet.set2).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-darkest-blue">Set 2:</h3>
              <p className="text-base mt-2 font-medium text-center text-darkest-blue">Internal: {currentSet.set2.internal || ""}</p>
              <p className="text-base mt-2 font-medium text-center text-darkest-blue">External: {currentSet.set2.external || ""}</p>
              {Object.entries(currentSet.set2).length > 0 && (
                <div className="mt-4 tracking-wide">
                  <h3 className="text-lg font-semibold text-darkest-blue">Function 3:</h3>
                  <ul>
                    {Object.values(currentSet.set2.func3 || {}).map((func, index) => (
                      <li key={index}>{index + 1}. {func}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4 bg-blue-900 p-4 rounded-lg justify-center">
                <p className="text-white font-bold text-center">Function 3: <span className="text-green font-bold tracking-wider">{currentSet.set2.func3_res || ""}</span></p>
              </div>
            </div>
          )}
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white text-base lg:text-2xl cursor-pointer"
          onClick={handleNextSet}
        />
      </div>
    </div>
  );
}

export default OralQuestions;
