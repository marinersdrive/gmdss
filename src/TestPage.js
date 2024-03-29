import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Logo from "./assets/bg2.png";
import { useNavigate} from "react-router-dom";
import { injectStyle } from "react-toastify/dist/inject-style";
import { FiClock } from "react-icons/fi"; // Import the clock icon
import axios from "axios"; // Import axios for making HTTP requests
import shuffleArray from "shuffle-array"; // Import the shuffle-array library
import { BeatLoader } from "react-spinners";

if (typeof window !== "undefined") {
  injectStyle();
}

function TestPage() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);
  const [remainingTime, setRemainingTime] = useState(300); // 30 minutes in seconds
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [currentSubCategory, setCurrentSubCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [imu, setIsIMU] = useState(1);


  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const indosNumber = localStorage.getItem("indosNumber");
  const email = localStorage.getItem("email");

  let correctCountFinal = "";
  let incorrectCountFinal = "";
  let totalMarks = 0

  let correct = 0;
  let incorrect = 0;

  const selectedCategory = localStorage.getItem("selectedCategory3");
  const ct = localStorage.getItem("selectedCategory4");

  //console.log(selectedCategory);
  //console.log(ct);

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      toast(<ConfirmDialog2 onYes={navigateToPreviousPage} onClose={dismissPage} />, {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
      });
      //navigate("/instructionspage");
    };
  });

  let intValue = 1;

  if(ct === "IMU-CET"){
    intValue = 1
  }else if(ct === "DG Exit Exam"){
    intValue = 2
  }else if(ct === "Sponsorship"){
    intValue = 4
  }
  else{
    intValue = 3
  }

  //console.log(`${process.env.REACT_APP_SERVER_BASE_URL}api/questions${intValue}`)
  // Fetch questions from the server
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}api/questions${intValue}`)
      .then(response => {
        // Filter questions by selectedCategory
        let filteredQuestions;
        let timeInSeconds = 30 * 60;
        let subCategory = "";
        let cat = ""

        if (selectedCategory === "PCM") {
          const physicsQuestions = shuffleArray(response.data.filter(question => question.category === "Physics").slice(0, 30));
          const chemistryQuestions = shuffleArray(response.data.filter(question => question.category === "Chemistry").slice(0, 30));
          const mathQuestions = shuffleArray(response.data.filter(question => question.category === "Mathematics").slice(0, 30));
          filteredQuestions = [...physicsQuestions, ...chemistryQuestions, ...mathQuestions];
          timeInSeconds = 90 * 60;

        } else if (selectedCategory === "Final Mock") {
          const physicsQuestions = shuffleArray(response.data.filter(question => question.category === "Physics").slice(0, 50));
          const mathQuestions = shuffleArray(response.data.filter(question => question.category === "Mathematics").slice(0, 50));
          const chemistryQuestions = shuffleArray(response.data.filter(question => question.category === "Chemistry").slice(0, 25));
          const englishQuestions = shuffleArray(response.data.filter(question => question.category === "General English").slice(0, 25));
          const aptitudeQuestions = shuffleArray(response.data.filter(question => question.category === "General Aptitude").slice(0, 25));
          const knowledgeQuestions = shuffleArray(response.data.filter(question => question.category === "General Knowledge").slice(0, 25));
          filteredQuestions = [...physicsQuestions, ...mathQuestions, ...chemistryQuestions, ...englishQuestions, ...aptitudeQuestions, ...knowledgeQuestions];
          timeInSeconds = 120 * 60;
        } 
        else if (selectedCategory === "EFA / Refresher") {
          cat = "Elementary First Aid - EFA / Refresher"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "AFF / Refresher") {
          cat = "Advanced Fire Fighting - AFF / Refresher"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "STSDSD") {
          cat = "STSDSD - Security Training for Seafarers"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "FPFF / Refresher") {
          cat = "Fire Prevention & Fire Fighting - FPFF / Refresher"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "PST / Refresher") {
          cat = "Personal Survival Techniques - PST / Refresher"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "PSSR") {
          cat = "Personal Safety & Social Responsibility - PSSR"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "TASCO") {
          cat = "TASCO"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "CHEMCO") {
          cat = "CHEMCO"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "GASCO") {
          cat = "GASCO"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "OCTF / OCTCO") {
          cat = "OCTF / OCTCO"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "Medicare / Refresher") {
          cat = "MEDICARE / Refresher"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "PSCRB") {
          cat = "PSCRB"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "MFA / Refresher") {
          cat = "Medical First Aid - MFA / Refresher"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        } 
        else if (selectedCategory === "PSF") {
          cat = "Passenger Ship Familiarization - PSF"
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === cat).slice(0, 30));
          setIsIMU(0);
        }else if (selectedCategory === "Sponsorship Exam"){
          cat = "Sponsorship"
          filteredQuestions = response.data.filter(question => question.category === cat);
        }
        else {
          filteredQuestions = shuffleArray(response.data.filter(question => question.category === selectedCategory).slice(0, 30));
        }

        setQuestions(filteredQuestions);
        setRemainingTime(timeInSeconds);
        setCurrentSubCategory(subCategory);

        //const correctAnswers = shuffledQuestions.map(question => question.correctOption);
        const correctAnswers = filteredQuestions.map((question) => {
          const correctOptionNumber = question.correctOption; // Increment by 1
          return question.options[correctOptionNumber]; // Access the correct answer using the incremented option number
        });

        //const ans = correctAnswers.map(question => question.options.map(options, correctAnswers));
        //const ans = correctAnswers.map(question => question.option)
        localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
        localStorage.setItem("questions", JSON.stringify(filteredQuestions));

        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [selectedCategory]);

  const currentQuestion = questions[currentQuestionIndex];

  // Timer effect to decrement remaining time
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timer);
        toast.error("Time's up!", {
          position: "top-center",
          autoClose: 1000,
          onClose: () => {
            handleFinish2();
          },
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  
  // useEffect(() => {
  //   window.history.pushState(null, null, window.location.href);
  //   window.onpopstate = function () {
  //     navigate(0);
  //   };
  // });

  useEffect(() => {
    const enterFullScreen = async () => {
      try {
        const element = document.documentElement;
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          await element.mozRequestFullScreen();

        } else if (element.webkitRequestFullscreen) {
          await element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          await element.msRequestFullscreen();
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    enterFullScreen();
  }, []);

  

  function ConfirmDialog({ onYes, onClose }) {
    return (
      <div className="mx-auto text-center">
        <p className="text-gray-600 text-lg mb-4">Are you sure you want to finish?</p>
        <button
          className="bg-green text-white px-4 py-2 rounded-md mr-2 hover:bg-opacity-80 transition duration-300 ease-in-out"
          onClick={navigateToNextPage}
        >
          Yes
        </button>
        <button
          className="bg-red text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300 ease-in-out"
          onClick={dismissPage}
        >
          No
        </button>
      </div>
    );
  }

  function ConfirmDialog2({ onYes, onClose }) {
    return (
      <div className="mx-auto text-center">
        <p className="text-gray-600 text-lg mb-4">Are you sure you want to finish?</p>
        <button
          className="bg-green text-white px-4 py-2 rounded-md mr-2 hover:bg-opacity-80 transition duration-300 ease-in-out"
          onClick={navigateToPreviousPage}
        >
          Yes
        </button>
        <button
          className="bg-red text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300 ease-in-out"
          onClick={dismissPage}
        >
          No
        </button>
      </div>
    );
  }

  // Function to handle moving to the next question
  const handleNextQuestion = () => {
    if (selectedOption === null) {
      toast.error("Please choose an option to proceed.", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      //setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Check if selected option is correct and update the counts
      if (selectedOption === currentQuestion.correctOption) {
        setCorrectCount(correctCount + 1);
      } else {
        setIncorrectCount(incorrectCount + 1);
      }

      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
      }
      else{
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (selectedOption === currentQuestion.correctOption) {
          correct = correct + 1;
          console.log("correct");
          //setCorrectCount(correctCount + 1);
        } else {
          incorrect = incorrect + 1;
          console.log("incorrect");
          //setIncorrectCount(incorrectCount + 1);
        }
        /*toast.warning(<ConfirmDialog onYes={navigateToNextPage} onClose={dismissPage} />, {
          position: "top-center",
          autoClose: false,
          closeButton: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
        });*/
        //navigate("/ResultPage");
      }
      handleCorrectCount(correctCount + correct);
      handleIncorrectCount(incorrectCount + incorrect);
      
    }
    
  };

  const handleFinish1 = () => {
    if (selectedOption === null) {
      toast.error("Please choose an option to proceed.", {
        position: "top-center",
        autoClose: 3000,
      });
    }else{
    if (selectedOption === currentQuestion.correctOption) {
      correct = correct + 1;
      console.log("correct");
      //setCorrectCount(correctCount + 1);
    } else {
      incorrect = incorrect + 1;
      console.log("incorrect");
      //setIncorrectCount(incorrectCount + 1);
    }
    toast(<ConfirmDialog onYes={navigateToNextPage} onClose={dismissPage} />, {
      position: "top-center",
      autoClose: false,
      closeButton: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
    });
    handleCorrectCount(correctCount + correct);
    handleIncorrectCount(incorrectCount + incorrect);

    correctCountFinal = correctCount + correct;
    incorrectCountFinal = incorrectCount + incorrect;

    if(imu === 1){
        totalMarks = correctCountFinal - 0.25*(incorrectCountFinal)
    }else{
      totalMarks = correctCountFinal;
    }
    // await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}api/storeUserData`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //     indosNumber,
    //     selectedCategory,
    //     correctCountFinal,
    //     incorrectCountFinal,
    //     totalMarks
    //   }),
    // });
  }
  };

  const handleFinish2 = async () => {
    if (selectedOption === null) {
      handleCorrectCount(correctCount + correct);
      handleIncorrectCount(incorrectCount + incorrect);
      if(selectedCategory === "Sponsorship Exam"){
        navigate("/SponsAdPage")
      }else{
      navigate("/ResultPage");
      }
    }else{
    if (selectedOption === currentQuestion.correctOption) {
      correct = correct + 1;
      console.log("correct");
      //setCorrectCount(correctCount + 1);
    } else {
      incorrect = incorrect + 1;
      console.log("incorrect");
      //setIncorrectCount(incorrectCount + 1);
    }
    handleCorrectCount(correctCount + correct);
    handleIncorrectCount(incorrectCount + incorrect);
    correctCountFinal = correctCount + correct;
    incorrectCountFinal = incorrectCount + incorrect;

    if(imu === 1){
        totalMarks = correctCountFinal - 0.25*(incorrectCountFinal)
    }else{
      totalMarks = correctCountFinal;
    }
    await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}api/storeUserData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        indosNumber,
        selectedCategory,
        correctCountFinal,
        incorrectCountFinal,
        totalMarks
      }),
    });
    if(selectedCategory === "Sponsorship Exam"){
      navigate("/SponsAdPage")
    }else{
    navigate("/ResultPage");
    }
  }
  };

  const navigateToPreviousPage = () => {
    toast.dismiss();
    navigate("/testseriespage");
  }

  
  const navigateToNextPage = async () => {
    toast.dismiss();
    await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}api/storeUserData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        indosNumber,
        selectedCategory,
        correctCountFinal,
        incorrectCountFinal,
        totalMarks
      }),
    });
    if(selectedCategory === "Sponsorship Exam"){
      navigate("/SponsAdPage");
    }else{
    navigate("/ResultPage");
    } // Replace with the URL of the next page
  };

  const dismissPage = () => {
    toast.dismiss();
  };

  const handleCorrectCount = (correctCount) =>{
    localStorage.setItem("correctCount", correctCount);
  }

  const handleIncorrectCount = (incorrectCount) =>{
    localStorage.setItem("incorrectCount", incorrectCount);
  }

  // Function to handle selecting an option
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  // Function to clear the selected option
  const handleClearSelection = () => {
    setSelectedOption(null);
  };
  
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      if (selectedCategory === "PCM" || selectedCategory === "Final Mock") {
        setCurrentSubCategory(`- ${currentQuestion.category}`);
      } else {
        //setCurrentSubCategory(currentQuestion.category);
      }
    }
  }, [questions, currentQuestionIndex, selectedCategory]);
  
  if (loading) {
    // Display loading spinner while questions are loading
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-900 to-slate-400 bg-cover bg-center text-white">
        <BeatLoader color="#ffffff" loading={loading} />
      </div>
    );
  }

  return (
    <div className="bg-gray-300 bg-cover bg-center">
    <div onCopy={(e) => e.preventDefault()} className="h-screen flex flex-col justify-between font-montserrat overflow-y-none">
      {/* Header section */}
      <div className="bg-darkest-blue text-white flex py-1 px-4 justify-between items-center hover:bg-opacity-90 transition duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <img
            src={Logo}  
            alt="Logo"
            className="sm:w-20 sm:h-20 w-16 h-16"
          />
          <div>
            <p className="text-base sm:text-lg font-semibold">Mariner's Drive</p>
            <p className="text-sm sm:text-base">{selectedCategory} {currentSubCategory}</p>
          </div>
        </div>
        <div className="text-base sm:text-xl flex items-center">
          <FiClock className="sm:mr-2 mr-1 pb-0.5 sm:pb-0" />
          Time Left: {Math.floor(remainingTime / 60).toString().padStart(2, '0')}:{(remainingTime % 60).toString().padStart(2, '0')}
        </div>
      </div>

      
        {/*Render the question and options section*/}
      
        {/* Question information section */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center hover:bg-opacity-90 transition duration-300 ease-in-out">
            <p className="text-darkest-blue text-opacity-80 sm:text-base font-medium text-xs">Question {currentQuestionIndex + 1} of {questions.length}</p>
            <p className="text-darkest-blue text-opacity-80 sm:text-base font-medium text-xs">Marks: 1</p>
            <p className="text-darkest-blue text-opacity-80 sm:text-base font-medium text-xs">Section: {ct}</p>
          </div>
        </div>
          
          {currentQuestion && (
            <div className="bg-white flex-grow sm:p-12 p-10">
            {/* Question and options section */}
              <div>
                <div className="text-black font-medium text-base sm:text-lg mb-12 sm:mt-8 mt-4">{currentQuestion.question}</div>
                <div>
          
                
                {currentQuestion.imageData && (
                  <img src={currentQuestion.imageData} alt="img" style={{ maxWidth: "300px", height: "auto" }}/>
                )}
              
                </div>
                
                
                {imu === 0 ? (
                <ul className="space-y-6 mt-10">
                  {currentQuestion.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`flex items-center space-x-2 text-sm sm:text-base ${
                        selectedOption !== null &&
                        optionIndex === currentQuestion.correctOption
                          ? "text-green font-medium" // Correct answer turns green
                          : selectedOption === optionIndex
                          ? "text-red font-medium" // Incorrect answer turns red
                          : "text-black" // Default color for options
                      }`}
                    >
                      <div className="text-black text-sm sm:text-base">
                        <b>{String.fromCharCode(65 + optionIndex)}.</b>
                      </div>
                      <input
                        type="radio"
                        name="option"
                        id={`option${optionIndex}`}
                        checked={selectedOption === optionIndex}
                        onChange={() => handleOptionSelect(optionIndex)}
                      />
                      <label htmlFor={`option${optionIndex}`}>{option}</label>
                    </div>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-6 mt-10">
                  {currentQuestion.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`flex items-center space-x-2 text-sm sm:text-base text-black`}
                    >
                      <div className="text-black text-sm sm:text-base">
                        <b>{String.fromCharCode(65 + optionIndex)}.</b>
                      </div>
                      <input
                        type="radio"
                        name="option"
                        id={`option${optionIndex}`}
                        checked={selectedOption === optionIndex}
                        onChange={() => handleOptionSelect(optionIndex)}
                      />
                      <label htmlFor={`option${optionIndex}`}>{option}</label>
                    </div>
                  ))}
                </ul>
              )}
                

              </div>
              </div>)}

              {/* Button section */}
              <div className="bg-darkest-blue text-sm sm:text-base p-4 text-center flex justify-between items-center hover:bg-opacity-90 transition duration-300 ease-in-out">
              <button
                className="px-10 py-3 bg-gray-300 text-darkest-blue rounded-lg hover:bg-gray-800 font-semibold"
                onClick={handleClearSelection}
              >
                Clear
              </button>

              {isLastQuestion ? (
              <button className="px-10 py-3 bg-dark-green text-gray-800 rounded-lg font-semibold hover:bg-green transition duration-300 ease-in-out" onClick={()=>{handleFinish1()}}>Finish</button>
              ) : (<button className="px-10 py-3 bg-gray-300 text-darkest-blue rounded-lg font-semibold hover:bg-gray-800 transition duration-300 ease-in-out" onClick={handleNextQuestion}>Next</button>)}
          
              {console.log(correctCount)}
              {console.log(incorrectCount)}
              
              </div>
            
          
        
      <ToastContainer />
    </div>
    </div>
  );
}

export default TestPage;
