import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FaChevronRight } from "react-icons/fa";

function PdfDetails() {
  const navigate = useNavigate();

  // Retrieve selected category from localStorage
  const selectedCategory = localStorage.getItem("selectedCategory");

  // Dummy data for PDF details
  const newsItems = [
    {
      category: "BWKE",
      heading: "ARI - Bridge Equipment",
      body: "Enclosed is the revised timetable for the March 2024 written examinations for 2M (FG), ASM (FG), and ASM (NCV) categories. Review the document for updated dates and timings, ensuring thorough preparation accordingly.",
      url: "https://drive.google.com/file/d/1fg3NDaajgdvU0PoQHCKX_oKXx6WkzmPL/view?usp=drive_link"
    },
    {
      category: "BWKE",
      heading: "ARI - Watchkeeping",
      body: "The Eighth Convocation is announced! Graduates, please check the details in the notification for ceremony dates and venue. We look forward to celebrating your achievements at this joyous event. Congratulations!",
      url: "https://drive.google.com/file/d/136bH64XHFYT7LDc8YLA8LWN_REMmZdZd/view?usp=drive_link"
    },
    {
      category: "BWKE",
      heading: "AEMTC - Bridge Notes",
      body: "This notice aims to provide clarity on the procedure for booking and participating in competency examinations within the nautical discipline. Candidates are urged to thoroughly familiarize themselves with the outlined guidelines to ensure a smooth and successful examination process.",
      url: "https://drive.google.com/file/d/1SM0rn8BLNad9mmTZ4g_EfFn5usKsHj8t/view?usp=drive_link"
    },
    {
      category: "Navigation",
      heading: "CN",
      body: "An important notice regarding the upcoming oral examinations for the nautical discipline. This document outlines the shift to an online video conferencing platform for the exams, along with essential details, schedules, and technical requirements. ",
    },
    {
      category: "Navigation",
      heading: "TCN",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
    },
    {
      category: "Cargo",
      heading: "Errol Fernandes Cargo Work",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1hGowrdYFee1OtmDSHTphEOn7Ch0o9GVw/view?usp=drive_link"
    },
    {
      category: "Cargo",
      heading: "AEMTC - Cargo Work Handout",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1VRtC40sY83XL1wIjSa8lzaAG6CFx9Z8F/view?usp=drive_link"
    },
    {
      category: "Cargo",
      heading: "Bulk Cargo",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1zkoGDotSPGCW6EZOuaoMmjuSiOGKi_Fz/view?usp=drive_link"
    },
    {
        category: "Cargo",
        heading: "Grain Cargo",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/15NxEWxfrAijK6msSlWeJWT0FOhJoEnpD/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "IMDG",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/10T_xeG-9Yto3HBiDTbYoHfJEm6LP0QQK/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "D.J. House Cargo Work",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1e6tmSF7a_cuXfp0y9x7ZXGsLl5-5wYY6/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "ASTM - Petroleum Measurement Table",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1cLKiX3OGQVvdjPvSiu1Nxunx4Yu2yO45/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Cargo Work Consolidated",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1z9wZkw5bzeKhh0eJ_zitRTxYsY-blrSW/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Containers",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1_IusX9K4whTDSkz9pcYDls7wxMk6A9jj/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Corrosion Theory",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/18j-UGoz4W1pX5-mvnLl2TcbrqjrSxKij/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Gas Carrier",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1yxp35u6Fmp_U7AUzmOOMnn1RCs4cmdcn/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Inert Gas System",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1k7q6VCOG7WNsNhIV2iBxREhYIFoJtZU_/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Tanker Instruments",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1xfJEQk-SxlGNzdQfRnlbsJ2lpgkCm3hT/view?usp=drive_link"
      },
      {
        category: "Cargo",
        heading: "Inert Gas System",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/17fOBHCN3XQMnoEdv5W89ekvWPITUiYGz/view?usp=drive_link"
      },
      {
        category: "Meteorology",
        heading: "AESM Meteorology",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1QOMuvT0QlwqfoEPidpI3p-Fsp0HeTGeg/view?usp=drive_link"
      },
      {
        category: "Meteorology",
        heading: "Marine Meteorology",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1UFpD2Wj5NjInc6X9t-cOObVc7PThlNUm/view?usp=drive_link"
      },
      {
        category: "Meteorology",
        heading: "Ships Weather Code 1982",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1kUhzYL8MHuIcUfADHM7-PUZvb0jWoLwD/view?usp=drive_link"
      },
      {
        category: "Meteorology",
        heading: "Coding - Decoding Practice",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1nYzc_GTaie4WS3Wz-S5FbMjVAGTS6DwU/view?usp=drive_link"
      },
      {
        category: "SSEP",
        heading: "MARPOL",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "SSEP",
        heading: "Ship Construction",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "SSEP",
        heading: "Ship Stability",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "SSEP",
        heading: "Others",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Signals Visual",
        heading: "Morse Codes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/13D74-HQWOr_ysnJxQG-VIqX6ByU89zaO/view?usp=drive_link"
      },
      {
        category: "Signals Visual",
        heading: "Signals Sheet",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1DyH1OziCfmyC5btxjjZh45E9GlngK06V/view?usp=drive_link"
      },
      {
        category: "Function 1",
        heading: "Manuals",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Function 1",
        heading: "Reference Books",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Function 2",
        heading: "Codes",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Function 2",
        heading: "Notes",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Function 3",
        heading: "CODES",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Function 3",
        heading: "NOTES",
        body:
          "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      },
      {
        category: "Signals Oral",
        heading: "Flags",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1zkAEGTINo0Xu-DJeuktglkVG-SFaV-Us/view?usp=drive_link"
      },
      {
        category: "Signals Oral",
        heading: "Interco",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1CK4yvoL-0Fci1n1a-MH0J_ZO7apVDZTP/view?usp=drive_link"
      },
  ];

  const handlePdfClick = (categoryName) => {
    localStorage.setItem("selectedCategory2", categoryName);
    navigate("/subpdfdetailspage"); // Navigate to the new page
  };
  
  // Filter newsItems based on the selected category
  const selectedCategoryItems = newsItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="min-h-screen sm:px-8 px-6 pt-8 mb-4 sm:mb-0 font-montserrat overflow-hidden">
      <div className="flex space-x-2 items-center mb-6">
        {/* Add a Link to the Home page */}
        <Link to="/" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Home
        </Link>
        <FaChevronRight className=" text-white mb-2 p-1 sm:p-0" />
        <Link to="/postseapage" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Post - Sea
        </Link>
        <FaChevronRight className=" text-white mb-2 p-1 sm:p-0" />
        <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          {selectedCategory}
        </h2>
      </div>
      <p className="text-sm lg:text-lg font-semibold text-gray-300 mb-4 tracking-wider">
        Important Books and Study Materials
      </p>
      <p className="text-gray-300 text-xs lg:text-base mr-2 sm:text-justify text-left tracking-wider">
        Explore the latest updates and essential documents related to {selectedCategory} training 
      </p>
      <p className="text-gray-300 text-xs lg:text-base mr-2 sm:text-justify text-left tracking-wider">
        and get ready for your preparation with our comprehensive exam materials.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {selectedCategoryItems.map((news, index) => (
          <div key={index} className="text-center">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div
              className="rounded-lg lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden sm:h-56 h-48 flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                if (news.category !== 'BWKE' && news.category !== 'Cargo' && news.category !== 'Meteorology' && news.category !== 'Signals Visuals' && news.category !== "Signals Oral") {
                  handlePdfClick(news.heading);
                }
              }}
            >
              <div className="bg-gray-300 h-20 flex items-center p-4">
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

export default PdfDetails;
