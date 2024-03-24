import "./HomePage.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

function TestSeries() {
  const newsItems = [
    {
      id: 1, 
      category: "IMU-CET",
      heading: "Physics",
      sub_heading: "Physics",
      url: "https://drive.google.com/file/d/1H2xSTWIVVdkIzqCY80WczWzy5nndAHjF/view?usp=drive_link"
    },
    {
      id: 2, 
      category: "IMU-CET",
      heading: "Chemistry",
      sub_heading: "Chemistry",
      url: "https://drive.google.com/file/d/1GpzDhYcZ1khRLRuViNuva6SttANSZlC-/view?usp=drive_link"
    },
    {
      id: 3, 
      category: "IMU-CET",
      heading: "Mathematics",
      sub_heading: "Mathematics",
      url: "https://drive.google.com/file/d/1znzCZTBfOXT2W5PqFSG2JHaXV6_e_mlF/view?usp=drive_link"
    },
    {
      id: 4, 
      category: "IMU-CET",
      heading: "General English",
      sub_heading: "General English",
      url: "https://drive.google.com/file/d/1sTba7yqDwCBKl8ZXpurSfSPSMbGZLIJD/view?usp=drive_link"
    },
    {
      id: 5, 
      category: "IMU-CET",
      heading: "General Aptitude",
      sub_heading: "General Aptitude",
      url: "https://drive.google.com/file/d/1FHdjiqELvWgbQVvCY9XZddNFuC6k5LuQ/view?usp=drive_link"
    },
    {
      id: 6, 
      category: "IMU-CET",
      heading: "General Knowledge",
      sub_heading: "General Knowledge",
      url: "https://drive.google.com/file/d/12f0pSj1HOoynEtrVQ5ZBBtxLbo6za7y7/view?usp=drive_link"
    },
    {
      id: 7, 
      category: "IMU-CET",
      heading: "PCM",
      sub_heading: "PCM",
      url: "https://drive.google.com/file/d/12-QBTSVySKK40-MnzYbiROsm367Dx3U8/view?usp=drive_link"
    },
    {
      id: 8, 
      category: "IMU-CET",
      heading: "Final Mock",
      sub_heading: "Final Mock",
      url: "https://drive.google.com/file/d/1qpqJ-2ovQkEitaGoGSzxDuwK3x4rSu4D/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "Elementary First Aid",
      sub_heading: "EFA / Refresher",
      url: "https://drive.google.com/file/d/1sCiFTYrVJsteY-Ug42vlDxc0SFQ8pnJ9/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "Advanced Fire Fighting",
      sub_heading: "AFF / Refresher",
      url: "https://drive.google.com/file/d/1GhmHZaZNBDyWKegcSdb5X0merIx_egYJ/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "Security Training for Seafarers",
      sub_heading: "STSDSD",
      url: ""
    },
    {
      category: "DG Exit Exam",
      heading: "Fire Prevention & Fire Fighting",
      sub_heading: "FPFF / Refresher",
      url: "https://drive.google.com/file/d/1DGD7T1NAvZbca4tPenj3JYXJyxopxPl5/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "Personal Survival Techniques",
      sub_heading: "PST / Refresher",
      url: ""
    },
    {
      category: "DG Exit Exam",
      heading: "Personal Safety & Social Resp.",
      sub_heading: "PSSR",
      url: ""
    },
    {
      category: "DG Exit Exam",
      heading: "TASCO",
      sub_heading: "TASCO",
      url: "https://drive.google.com/file/d/16YDj5Ose_dPdFHfwNgFBq3dLXS9QhIuL/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "CHEMCO",
      sub_heading: "CHEMCO",
      url: "https://drive.google.com/file/d/16bwz3Mt1yYuNdypMkKJAzYt3d9AbFkqT/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "GASCO",
      sub_heading: "GASCO",
      url: "https://drive.google.com/file/d/1tCfeeRz5vMtiYtC2pUPxpFvmji5RnPFU/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "OCTF / OCTCO",
      sub_heading: "OCTF / OCTCO",
      url: ""
    },
    {
      category: "DG Exit Exam",
      heading: "Medicare / Refresher",
      sub_heading: "Medicare / Refresher",
      url: "https://drive.google.com/file/d/1OnttBBwZUMP1ixUUhqMyGe3NEFBDyLKL/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "PSCRB",
      sub_heading: "PSCRB",
      url: "https://drive.google.com/file/d/1tTpAvIgL4wk2PeKPTQu_8g322yvVbzO8/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "Medical First Aid",
      sub_heading: "MFA / Refresher",
      url: "https://drive.google.com/file/d/1LR9fH9GbODwBFNanukxY4E3LaN4Ec_-S/view?usp=drive_link"
    },
    {
      category: "DG Exit Exam",
      heading: "Passenger Ship Familiarization",
      sub_heading: "PSF",
      url: ""
    },
    {
      category: "GMDSS",
      heading: "GMDSS",
      sub_heading: "GMDSS"
    },
  ];

  const categories = ["IMU-CET", "DG Exit Exam", "GMDSS"];

  const navigate = useNavigate();
  const defaultCategory = "IMU-CET"
  const [selectedTab, setSelectedTab] = useState("IMU-CET");


  // Set the default category in localStorage if not already set
  if (!localStorage.getItem("selectedCategory4")) {
    localStorage.setItem("selectedCategory4", defaultCategory);
  }

  const handleCategoryClick1 = (categoryName) => {
    localStorage.setItem("selectedCategory4", categoryName);
    setSelectedTab(categoryName);
  };

  const handleCategoryClick2 = (categoryName) => {
    localStorage.setItem("selectedCategory3", categoryName);
<<<<<<< HEAD
    if (selectedTab === "IMU-CET" && categoryName === "Physics"){
      window.open("https://rzp.io/l/u4D26sq", "_blank"); 
      //navigate("/instructionspage");
    }else if (selectedTab === "IMU-CET" && categoryName === "Chemistry"){
      window.open("https://rzp.io/l/u4D26sq", "_blank"); 
    }else if (selectedTab === "IMU-CET" && categoryName === "Mathematics"){
      window.open("https://rzp.io/l/u4D26sq", "_blank"); 
    }else if (selectedTab === "IMU-CET" && categoryName === "General English"){
      window.open("https://rzp.io/l/u4D26sq", "_blank"); 
    }else if (selectedTab === "IMU-CET" && categoryName === "General Aptitude"){
      window.open("https://rzp.io/l/u4D26sq", "_blank"); 
    }else if (selectedTab === "IMU-CET" && categoryName === "General Knowledge"){
      window.open("https://rzp.io/l/u4D26sq", "_blank"); 
    }else if (selectedTab === "IMU-CET" && categoryName === "PCM"){
      window.open("https://payments.pabbly.com/subscribe/65fa83ea628ddf6d7e9c62af/PCM", "_blank"); 
    }else if (selectedTab === "IMU-CET" && categoryName === "Final Mock"){
      window.open("https://payments.pabbly.com/subscribe/65fa8463bf7cc96d66ba2bd2/FINAL-MOCK", "_blank"); 
=======
    if (selectedTab === "IMU-CET"){
      window.open("https://payments.pabbly.com/subscribe/65f4ab861a5a74ac97817bd5/imu-cet", "_blank"); 
>>>>>>> ad8df8669195e0071be1b826b3a5fa7e52fd31ce
    }
    else{
      navigate("/instructionspage");
    }
  };

  const selectedCategoryItems = newsItems.filter(
    (item) => item.category === selectedTab
  );


  const getDetailsByCategory = (newsItems) => {
    switch (newsItems.id) {
      case 7: // PCM
        return { questions: 90, minutes: 90, marks: 90 };
      case 8: // Final Mock
        return { questions: 200, minutes: 180, marks: 200 };
      default:
        return { questions: 30, minutes: 30, marks: 30 };
    }
  };

  const getPrice = (newsItems) => {
    switch (newsItems.id) {
      case 7: // PCM
        return { mrp: 119, sp: 149 };
      case 8: // Final Mock
        return { mrp: 149, sp: 199 };
      default:
        return { mrp: 49, sp: 99 };
    }
  };

  return (
    <div className="min-h-screen sm:px-8 px-6 pt-6 mb-4 sm:mb-0 font-montserrat overflow-hidden">
      <div className="flex space-x-2 items-center mb-6">
        {/* Add a Link to the Home page */}
        <Link to="/" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Home
        </Link>
        <FaChevronRight className=" text-white mb-2" />
        <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Test-Series
        </h2>
      </div>
      <p className="text-sm lg:text-lg font-semibold text-gray-300 mb-4 tracking-wider">
        Test yourself now!
      </p>
      <p className="text-gray-300 text-xs lg:text-base mb-8 mr-2 sm:text-justify text-left tracking-wider">
      Embark on an exhilarating journey of maritime mastery with our dedicated test series. Your path to a thriving maritime career demands mastery of crucial examinations like the IMU CET, DG Exit Exam, and GMDSS Exam MCQ.
      </p>
      
      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 px-2 py-1 w-full md:w-fit md:selection:flex-col rounded-3xl bg-gray-300">
        {categories.map((category) => (
          <div
            key={category}
            className={`cursor-pointer text-center sm:text-left lg:text-base text-sm ${
              selectedTab === category
              ? "bg-tp-darkest-blue text-gray-300 border-light-blue"
              : "text-blue-900 bg-gray-300"
            } px-4 py-2 rounded-full font-semibold`}
            onClick={() => handleCategoryClick1(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 pt-10 pb-6">
  {selectedCategoryItems.map((category) => (
    <div
      key={category.id}
      className="relative border border-gray-300 mb-2 lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="absolute top-0 right-0 mt-2 mr-2 flex animate-pulse">
      {selectedTab === "IMU-CET"? (
      <>
      <div className="text-white font-medium px-2 py-1 bg-blue-900 rounded-l-lg border-r-2 border-white font-montserrat ">
        ₹ {getPrice(category).mrp}
      </div>
      <div className="text-white font-medium px-2 py-1 bg-blue-900  rounded-r-lg relative">
        <span className="font-montserrat">₹ {getPrice(category).sp}</span>
        <span className="cross absolute top-0 right-0 w-full h-full overflow-hidden">
          <span className="line absolute top-1/2 right-0 w-full h-0.5 bg-red transform -translate-y-1/2 rotate-45"></span>
        </span>
      </div>
      </>
    ) : (
      <div className="text-white font-medium px-2 py-1 bg-blue-900 rounded-lg font-montserrat">
        FREE
      </div>
    )}
  </div>
      <div className="bg-gray-300 h-12 sm:h-14 flex items-center px-6 border-b-2 border-tp-darkest-blue">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-900 tracking-wide">
          {category.sub_heading}
        </h3>
      </div>
      <div className="p-4 sm:p-4 bg-white relative">
        <div className="cursor-pointer">
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            Get ready for {category.heading} with our comprehensive exam preparation materials.
          </p>
          <p className="text-tp-darkest-blue font-medium mt-2 sm:mt-4 text-sm sm:text-base">
            {getDetailsByCategory(category).questions} questions &nbsp;|&nbsp;
            {getDetailsByCategory(category).minutes} minutes &nbsp;|&nbsp;
            {getDetailsByCategory(category).marks} marks
          </p>
          <div className="flex items-end mt-4 sm:mt-8">
            <span className="text-black font-medium mr-2 text-sm sm:text-base mb-0 sm:mb-2">
              <a href={category.url} className="text-tp-darkest-blue font-semibold hover:text-dark-blue hover:font-semibold">
                View Syllabus
              </a>
            </span>
            <FiArrowRightCircle className="text-dark-blue text-xl sm:text-2xl mb-0 sm:mb-2" />
            <button
              className="flex items-right absolute right-4 bottom-2.5 sm:bottom-4 text-sm sm:text-base font-medium bg-tp-darkest-blue text-white 
              px-2 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out border-b-4 border-blue-900"
              onClick={() => handleCategoryClick2(category.sub_heading)} 
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default TestSeries;
