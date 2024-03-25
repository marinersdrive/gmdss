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

function OnBoardTraining() {
  const newsItems = [
    {
      category: "Books",
      heading: "DLP Semester - 3",
      url: "https://drive.google.com/file/d/1WjSljnuBjRnDYcn6oW1ujigFgfvZQkyN/view?usp=drive_link"
    },
    {
      category: "Books",
      heading: "DLP Semester - 4",
      url: "https://drive.google.com/file/d/1mduTz4XmeGhGhSPOyixrD1r786UwLivj/view?usp=drive_link"
    },
    {
      category: "Books",
      heading: "DLP Semester - 5",
      url: "https://drive.google.com/file/d/1AGitCsxH40yltF7-kM2TLiYFYS40_cAr/view?usp=drive_link",
    },
    {
      category: "Projects",
      heading: "Projects 1",
      url: "https://drive.google.com/file/d/1-MjwDMn6p0Qoq4huZVa7Gqu1gPx8ljnL/view?usp=drive_link"
    },
    {
      category: "Projects",
      heading: "Projects 2",
      url: "https://docs.google.com/document/d/1Dv_QWLHc6GHYNzATn0oYSh5nH78638nI/edit?usp=drive_link&ouid=116219638247513269846&rtpof=true&sd=true"
    },
    {
      category: "Others",
      heading: "SSTP Guidelines for DNS Cadets",
      url: "https://drive.google.com/file/d/17KP1RehuTZCv6CYs1tmPikGQqXhgw4HR/view?usp=drive_link"
    },
    {
      category: "Others",
      heading: "Record of Watchkeeping",
      url: "https://docs.google.com/document/d/1-ynmDjbpQCdJana5jY2iAH6nB_hAuNi0/edit?usp=drive_link&ouid=116219638247513269846&rtpof=true&sd=true"
    },
    {
      category: "Others",
      heading: "Projects and Activities",
      url: "https://drive.google.com/file/d/1HhctVFdZ0_MWI_hiYgVLXtM5vVqIznrB/view?usp=drive_link"
    },
    {
      category: "Others",
      heading: "Shipboard Activity Workbook",
      url: "https://drive.google.com/file/d/1YHVCVS_91YXsrLW3FkRRByvHd8GAOxO0/view?usp=drive_link"
    }
  ];

  const categories = ["Books", "Projects", "Others"];

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Books");

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
    <div className="min-h-screen sm:px-8 px-6 pt-6 mb-4 sm:mb-0 font-montserrat overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="navigation flex items-center space-x-2 lg:mb-6 mb-3">
        {/* Add a Link to the Home page */}
        <Link to="/" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          Home
        </Link>
        <FaChevronRight className=" text-white mb-2 p-1 sm:p-0" />
        <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          On-Board Training
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
      Explore the latest updates and essential documents related to On-Board training 
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
      <div className="rounded-lg lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden lg:h-56 h-48 flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="bg-gray-300 lg:h-20 h-14 flex items-center p-4">
          <FontAwesomeIcon className="lg:h-8 lg:w-8 w-6 h-6" icon={faFilePdf} style={{ color: "#fa0f00" }} />
          <div className="ml-4">
            <p className="text-black font-montserrat font-semibold text-justify text-sm tracking-wide">
              {news.heading}
            </p>
          </div>
        </div>
        <div className="bg-white lg:h-56 h-48 lg:p-4 px-4 flex items-center">
          <p className="text-black text-sm font-montserrat items-center text-justify leading-6 font-medium">
          Click here to get detailed information about {news.heading} and the latest updates essential for your On-Board training. Prepare thoroughly with our resources for a successful outcome.

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

export default OnBoardTraining;
