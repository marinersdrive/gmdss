import React, { useState } from "react";
import { useNavigate, Link  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FaChevronRight } from "react-icons/fa";

function PostSea() {
  const newsItems = [
    {
      category: "Writtens Tab",
      heading: "BWKE",
      body: "Enclosed is the revised timetable for the March 2024 written examinations for 2M (FG), ASM (FG), and ASM (NCV) categories. Review the document for updated dates and timings, ensuring thorough preparation accordingly."
    },
    {
      category: "Writtens Tab",
      heading: "Navigation",
      body: "The Eighth Convocation is announced! Graduates, please check the details in the notification for ceremony dates and venue. We look forward to celebrating your achievements at this joyous event. Congratulations!"
    },
    {
      category: "Writtens Tab",
      heading: "Cargo",
      body: "This notice aims to provide clarity on the procedure for booking and participating in competency examinations within the nautical discipline. Candidates are urged to thoroughly familiarize themselves with the outlined guidelines to ensure a smooth and successful examination process. "
    },
    {
      category: "Writtens Tab",
      heading: "Meteorology",
      body: "An important notice regarding the upcoming oral examinations for the nautical discipline. This document outlines the shift to an online video conferencing platform for the exams, along with essential details, schedules, and technical requirements. "
    },
    {
      category: "Writtens Tab",
      heading: "SSEP",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. "
    },
    {
      category: "Writtens Tab",
      heading: "Signals Visual",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. "
    },
    {
      category: "Orals Tab",
      heading: "Function 1",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. "
    },
    {
      category: "Orals Tab",
      heading: "Function 2",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. "
    },
    {
      category: "Orals Tab",
      heading: "Function 3",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. "
    },
    {
      category: "Orals Tab",
      heading: "Signals Oral",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. "
    },
  ];

  const categories = ["Writtens Tab", "Orals Tab"];

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Writtens Tab");

  const handleCategoryClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
    setSelectedTab(categoryName);
  };

  const selectedCategoryItems = newsItems.filter(
    (item) => item.category === selectedTab
  );

  // Function to handle the click on a PDF
  const handlePdfClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
    navigate("/pdfdetailspage"); // Navigate to the new page
  };

  return (
    <div className="min-h-screen sm:px-8 px-6 pt-8 mb-4 sm:mb-0 font-montserrat overflow-hidden">
      <div className="flex space-x-2 items-center mb-6">
        {/* Add a Link to the Home page */}
        <Link to="/" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Home
        </Link>
        <FaChevronRight className=" text-white mb-2 p-1 sm:p-0" />
        <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Post - Sea
        </h2>
      </div>
      <p className="text-sm lg:text-lg font-semibold text-gray-300 mb-4 tracking-wider">
        Important Books and Study Materials
      </p>
      <p className="text-gray-300 text-xs lg:text-base mr-2 sm:text-justify text-left tracking-wider">
        Explore the latest updates and essential documents related to Post-Sea training 
      </p>
      <p className="text-gray-300 text-xs lg:text-base mb-8 mr-2 sm:text-justify text-left tracking-wider">
        and get ready for your preparation with our comprehensive exam materials.
      </p>
      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 px-2 py-1 w-full md:w-fit md:selection:flex-col rounded-3xl bg-gray-300">
        {categories.map((category) => (
          <div
            key={category}
            className={`cursor-pointer text-center sm:text-left text-sm sm:text-base ${
              selectedTab === category
                ? "bg-tp-darkest-blue text-gray-300 border-light-blue"
                : "text-darkest-blue bg-gray-300"
            } px-4 py-2 rounded-full font-semibold`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {selectedCategoryItems.map((news, index) => (
          <div key={index} className="text-center">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div
              className="rounded-lg lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden sm:h-56 h-48 flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => handlePdfClick(news.heading)}
            >
              <div className="bg-gray-300 sm:h-20 h-14 flex items-center p-4">
              <FontAwesomeIcon className="sm:h-8 sm:w-8 w-6 h-6" icon={faFilePdf} style={{ color: "#fa0f00" }} />
                <div className="ml-4">
                  <p className="text-black font-montserrat font-semibold text-justify text-sm tracking-wide">
                    {news.heading}
                  </p>
                </div>
              </div>
              <div className="bg-white h-52 p-4 flex items-start">
                <p className="text-black text-sm font-montserrat text-justify leading-6 font-medium">
                  Click here to get detailed information about {news.heading} and
                  the latest updates essential for your Post-Sea training. Prepare
                  thoroughly with our resources for a successful outcome.
                </p>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostSea;
