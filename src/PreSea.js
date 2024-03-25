import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaChevronRight } from "react-icons/fa";

if (typeof window !== "undefined") {
  injectStyle();
}

function PreSea() {
  const newsItems = [
    {
      category: "IMU-CET",
      heading: "IMU-CET Gateway",
      body: "Enclosed is the revised timetable for the March 2024 written examinations for 2M (FG), ASM (FG), and ASM (NCV) categories. Review the document for updated dates and timings, ensuring thorough preparation accordingly.",
      url: "https://drive.google.com/file/d/1lD6J-JjQsRdbfkPH25hoYnwDa2k8eHFr/view?usp=drive_link"
    },
    {
      category: "IMU-CET",
      heading: "IMU-CET Way2Ship Full Package",
      body: "The Eighth Convocation is announced! Graduates, please check the details in the notification for ceremony dates and venue. We look forward to celebrating your achievements at this joyous event. Congratulations!",
      url: "https://drive.google.com/file/d/1GwxD1aJUjlRMcN_vDPcE1SrKDuinj_3Q/view?usp=drive_link"
    },
    {
      category: "IMU-CET",
      heading: "IMU-CET Sample Question Paper",
      body: "This notice aims to provide clarity on the procedure for booking and participating in competency examinations within the nautical discipline. Candidates are urged to thoroughly familiarize themselves with the outlined guidelines to ensure a smooth and successful examination process.",
      url: "https://drive.google.com/file/d/1CdsLMwHqqN0gU970gHJclGPscCZjbRxr/view?usp=drive_link"
    },
    {
      category: "IMU-CET",
      heading: "IMU-CET PCM Combined",
      body: "An important notice regarding the upcoming oral examinations for the nautical discipline. This document outlines the shift to an online video conferencing platform for the exams, along with essential details, schedules, and technical requirements. ",
      url: "https://drive.google.com/file/d/1Hi6pSWle8hS9fhwrNtFPgMfQ1eWTwzQI/view?usp=drive_link"
    },
    {
      category: "IMU-CET",
      heading: "English Notes",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1HP5H2_oX5htePfOhA6D-ivIuBkKBmlO9/view?usp=drive_link"
    },
    {
      category: "IMU-CET",
      heading: "Quants Notes",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1_rPk7pZkt6qOMIBp_5-Io-kPw-SBGhPW/view?usp=drive_link"
    },
    {
      category: "IMU-CET",
      heading: "Static GK",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1fDp_k7dVITF9RyeCG9GWF7iLO_p7oPMN/view?usp=drive_link"
    },
    {
      category: "Sponsorship",
      heading: "DNS Interview Questions",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
      url: "https://drive.google.com/file/d/1ZNufDH7JxcaZwVBbyAUkmu3zSKMr4QZL/view?usp=sharing"
    }
  ];

  const categories = ["IMU-CET", "Sponsorship"];

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("IMU-CET");

  const handleCategoryClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
    setSelectedTab(categoryName);
  };

  const selectedCategoryItems = newsItems.filter(
    (item) => item.category === selectedTab
  );

  const placeholders = ["Search"];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentOccurrence, setCurrentOccurrence] = useState(0);
  
  const changeColor = () => {
    setSearchTerm(''); 
  };

  const handleSearch = () => {
    const searchText = searchTerm.toLowerCase();
    const elements = document.querySelectorAll('p, h1, h2, h3'); // Adjust the tag name based on your content structure
  
    
    let occurrences = [];
    for (const element of elements) {
      const text = element.innerText.toLowerCase();
  
      if (text.includes(searchText)) {
        occurrences.push(element);
      }
    }
  
    if (occurrences.length > 0) {
      // Reset style for the previously highlighted element
      const previousOccurrence = occurrences[(currentOccurrence - 1 + occurrences.length) % occurrences.length];
  
      if (previousOccurrence) {
        previousOccurrence.style.backgroundColor = '';
        previousOccurrence.style.color = ''; // Reset text color
      }
  
      // Move to the next occurrence
      // Check if the last occurrence is reached, then reset the counter and show toast.error
      if (currentOccurrence < occurrences.length) {
        setCurrentOccurrence(currentOccurrence + 1);
        const currentElement = occurrences[currentOccurrence];
        currentElement.style.backgroundColor = 'yellow';
        currentElement.style.color = 'black';
        currentElement.scrollIntoView({ behavior: 'smooth' });
      }else {
        setCurrentOccurrence(0);
        toast.error('No search results found!', { position: "top-center", autoClose: 1000 });
        return;
      }
    } else {
      toast.error('No search results found!', { position: "top-center", autoClose: 1000 });
    }

    if (searchText === '') {
      setCurrentOccurrence(0);
      occurrences.forEach((element) => {
        element.style.backgroundColor = '';
        element.style.color = ''; // Reset text color
      });
      occurrences.length = 0;
    }

  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen sm:px-8 px-6 pt-8 mb-4 sm:mb-0 font-montserrat overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="navigation flex items-center space-x-2 lg:mb-6 mb-3">
          <Link to="/" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
            Home
          </Link>
          <FaChevronRight className="text-white mb-2 p-1 sm:p-0" />
          <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
            Pre-Sea
          </h2>
        </div>
        <div class="justify-end mb-6">
          <div class="flex items-center border rounded-md bg-white lg:px-4 lg:py-1 px-2 py-0.5 lg:mb-1 lg:mr-4  relative">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 lg:w-4 lg:h-4 w-3 h-3" />
            <input
              id="search-input"
              type="text"
              placeholder={placeholders[currentPlaceholderIndex]}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none placeholder-gray-600 lg:pl-4 pl-2 lg:w-full w-36 text-sm lg:text-base"
            />
            {searchTerm && (
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-600 cursor-pointer mr-1 lg:w-4 lg:h-4 w-3 h-3"
                onClick={changeColor} // This clears the search term
              />
            )}
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg font-semibold text-gray-300 mb-4 tracking-wider">
        Important Books and Study Materials
      </p>
      <p className="text-gray-300 text-xs lg:text-base mr-2 sm:text-justify text-left tracking-wider">
      Explore the latest updates and essential documents related to Pre-Sea training 
      </p>
      <p className="text-gray-300 text-xs lg:text-base mb-8 mr-2 sm:text-justify text-left tracking-wider">
      and get ready for your preparation with our comprehensive exam materials.
      </p>
      <div className="flex flex-col sm:flex-row space-y-0 sm:space-y-0 sm:space-x-4 px-2 py-1 w-full md:w-fit md:selection:flex-col rounded-3xl bg-gray-300">
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
      <div className="rounded-lg lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden lg:h-56 h-48 flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="bg-gray-300 lg:h-20 h-14 flex items-center p-4">
          <FontAwesomeIcon className="lg:h-8 lg:w-8 w-6 h-6" icon={faFilePdf} style={{ color: "#fa0f00" }} />
          <div className="ml-4">
            <p className="text-black font-montserrat font-semibold text-justify text-sm tracking-wide">
              {news.heading}
            </p>
          </div>
        </div>
        <div className="bg-white lg:h-56 h-48 lg:p-4 flex items-center">
          <p className="text-black text-sm font-montserrat items-center text-justify leading-6 font-medium">
          Click here to get detailed information about {news.heading} and the latest updates essential for your Pre-Sea training. Prepare thoroughly with our resources for a successful outcome.

          </p>
        </div>
      </div>
      </a>
    </div>
  ))}
</div>
<ToastContainer />
    </div>
  );
}

export default PreSea;
