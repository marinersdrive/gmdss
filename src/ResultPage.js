import React, { useEffect} from "react";
import Logo from "./assets/bg2.png";
import { useNavigate, Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { IoIosKey } from "react-icons/io";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ResultPage() {
  const navigate = useNavigate();

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const indosNumber = localStorage.getItem("indosNumber");
  const correctCount = localStorage.getItem("correctCount");
  const incorrectCount = localStorage.getItem("incorrectCount");
  let selectedCategory = localStorage.getItem("selectedCategory3");
  //let selectedCategory1 = localStorage.getItem("selectedCategory");

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate(0);
    };
  });

  useEffect(() => {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }, []);

  function getCurrentDateTime() {
    const now = new Date();
    const dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);

    return `${formattedDate} ${formattedTime}`;
  }

  let totalQuestions = 30;

  const currentDateTime = getCurrentDateTime();
  if (selectedCategory === "PCM"){
    totalQuestions = 90;
  }
  else if (selectedCategory === "Final Mock") {
    totalQuestions = 200;
  }
  else{
    totalQuestions = 30;
  }
  
  const totalQuestionsAppeared = parseInt(correctCount) + parseInt(incorrectCount);
  const passPercentage = 50;
  const isPass = (correctCount / totalQuestions) * 100 >= passPercentage;
  let totalMarks = parseInt(correctCount)

  if (selectedCategory === "Physics" || selectedCategory === "Chemistry" || selectedCategory === "Mathematics" || selectedCategory === "General English" || selectedCategory === "General Aptitude" || selectedCategory === "General Knowledge"){
      totalMarks = parseInt(correctCount) - 0.25 * parseInt(incorrectCount)
  }
  else{
    totalMarks = parseInt(correctCount)
  }

  return (
    <div onCopy={(e) => e.preventDefault()} className="min-h-screen justify-center sm:px-8 px-6 pt-4 font-montserrat overflow-hidden sm:flex">
      <div className="w-full sm:w-1/2 sm:pr-4">
        <div className="sm:text-center">
          <div className="flex space-x-2.5 items-center mb-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
            <Link to="/testseriespage" className="flex text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider sm:mt-0 mt-2">
              {selectedCategory} 
            </Link>
            <FaChevronRight className="text-white mt-2 sm:mt-0 p-1 sm:p-0" /> 
            <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg sm:mt-0 mt-2 tracking-wider">
            Result
            </h2>
           
          </div>

          <div className="flex justify-between items-center py-2">
            <table className="w-full sm:w-4/5 bg-white text-blue-900 border-gray-300 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg">
              <tbody>
                <tr>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Student Name</td>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{firstName} {lastName}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Indos Number</td>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{indosNumber}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Course Name</td>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{selectedCategory}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Course Completed</td>
                  <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{currentDateTime}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-sm sm:text-base text-left font-semibold">Institute Name</td>
                  <td className="py-2 px-4 text-sm sm:text-base text-right font-semibold">Mariner's Drive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-300 font-montserrat text-l sm:text-xl font-semibold mt-3 tracking-wide">Exam Summary:</p>

        <div className="flex justify-between items-center">
          <table className="w-full sm:w-4/5 mt-4 bg-white text-blue-900 border-gray-300 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg">
            <tbody>
              <tr>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Total Questions Appeared</td>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{totalQuestionsAppeared}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Total Marks</td>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{totalMarks}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-left">Correct Answers</td>
                <td className="py-2 px-4 text-sm sm:text-base border-b border-white font-semibold text-right">{correctCount}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm sm:text-base text-left font-semibold">Incorrect Answers</td>
                <td className="py-2 px-4 text-sm sm:text-base text-right font-semibold ">{incorrectCount}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm sm:text-base text-left font-semibold">Unattempted Questions</td>
                <td className="py-2 px-4 text-sm sm:text-base text-right font-semibold ">{totalQuestions - totalQuestionsAppeared}</td>
              </tr>
            </tbody>
          </table>

          {/* Additional content or other tables can be added here */}
        </div>

        <div className="text-center pt-12">
          <p className="sm:w-4/5 text-xl sm:text-3xl text-gray-800 font-bold border-2 sm:border-4 border-slate-400 p-2 mb-2 
          lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] tracking-wider">
            Exam Result:
          </p>
          {isPass ? (
            <p className="sm:w-4/5 text-green pt-1 text-2xl sm:text-3xl font-bold tracking-wide">PASS</p>
          ) : (
            <p className="sm:w-4/5 text-red pt-1 text-2xl sm:text-3xl font-bold tracking-wide">FAIL</p>
          )}
        </div>

        {/* Answer Key Link */}
        <p className="sm:w-4/5 flex text-xs sm:text-base font-semibold text-slate-400 justify-center ml-1 mt-0.5">
          <Link to="/answerkeypage" className="border-b-2 flex items-center hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105 relative">
            Answer Key </Link>
        <IoIosKey className="w-4 h-4 ml-1 sm:mt-1.5 mt-1" />
        </p>
      </div>

    
    {/* Right side content */}
    <div className="w-full sm:w-1/2 sm:m-0 m-14">
        
        <div className="sm:flex justify-center items-center h-full">
          <div style={{ width: '70%', position: 'relative' }}>
            {/* White circular component */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', backgroundColor: 'white', width: '70%', height: '70%', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: isPass ? '#4CAF50' : '#FF6347', border: '1px solid #f0f0f0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              {/* Percentage in bold */}
              {`${Math.round((correctCount / totalQuestions) * 100)}%`}
            </div>
            {/* Circular progress bar */}
            <CircularProgressbar
              value={(correctCount / totalQuestions) * 100}
              text=""
              styles={buildStyles({
                strokeLinecap: 'round',
                pathColor: isPass ? '#4CAF50' : '#FF6347',
                textColor: isPass ? '#4CAF50' : '#FF6347',
                textSize: '16px',
                trailColor: isPass ? '#E5F3E590' : '#f0f0f0',
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
                pathTransitionDuration: 0.5,
                boxShadow: '0 20px 50px rgba(8, 112, 184, 0.7)'
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
