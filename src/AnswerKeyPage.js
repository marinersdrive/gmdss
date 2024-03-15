// AnswerKeyPage.js
import React, { useState, useEffect } from "react";
import Logo from "./assets/bg2.png";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function AnswerKeyPage() {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const selectedCategory = localStorage.getItem("selectedCategory");


  useEffect(() => {
    // Fetch questions and answers from local storage
    const storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    const storedCorrectAnswers = JSON.parse(localStorage.getItem("correctAnswers")) || [];

    setQuestions(storedQuestions);
    setCorrectAnswers(storedCorrectAnswers);
  }, []);

  return (
    <div onCopy={(e) => e.preventDefault()} className="min-h-screen sm:px-8 px-6 py-4 font-montserrat overflow-hidden flex flex-col">
      <div className="flex space-x-2.5 items-center mb-5">
          <img
            src={Logo}
            alt="Logo"
            className="w-14 h-14 sm:w-16 sm:h-16"
          />
          <Link to="/testseriespage" className="flex text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider sm:mt-0 mt-2">
              {selectedCategory} 
          </Link>
          <FaChevronRight className="text-white mt-2 sm:mt-0 p-1 sm:p-0" /> 
          <Link to="/resultpage" className="flex text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider sm:mt-0 mt-2">
              Result
          </Link>
          <FaChevronRight className="text-white mt-2 sm:mt-0 p-1 sm:p-0" /> 
          <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg sm:mt-0 mt-2 tracking-wider">
          Answer Key
        </h2>
            
          </div>
      <table className="w-full bg-white text-blue-900 border-gray-300 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg">
        <thead>
          <tr><th className="py-2 px-4 text-sm sm:text-base border-b border-dark-blue font-semibold text-left" style={tableHeaderStyle}>Question No.</th>
            <th className="py-2 px-4 text-sm sm:text-base border-b border-dark-blue font-semibold text-left" style={tableHeaderStyle}>Question</th>
            <th className="py-2 px-4 text-sm sm:text-base border-b border-dark-blue font-semibold text-right" style={tableHeaderStyle}>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left" style={tableCellStyle}>{index+1}.</td>
              <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left" style={tableCellStyle}>{question.question}</td>
              <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right" style={tableCellStyle}>{correctAnswers[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center mt-5">
        <FaChevronLeft className="text-white sm:mt-0 tracking-wide p-0.5 sm:p-0" />
        <Link to="/" className="text-white text-center ml-2 border-b-2 sm:text-base text-xs transition duration-300 ease-in-out transform hover:scale-105 relative">Back to Home</Link>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  };
  
  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

export default AnswerKeyPage;
