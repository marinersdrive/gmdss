import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import Logo from "./assets/bg2.png";
import gifImage from "./assets/main-logo-unscreen.gif";
import insta from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faArrowLeft, faArrowRight, faFilePdf} from "@fortawesome/free-solid-svg-icons";
import { push as Menu } from "react-burger-menu";

function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState('Send Message');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    setButtonText('Sending...');
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL2}api/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }finally {
      setButtonText('Send Message');
    }
  };

  const navigate = useNavigate();

  const placeholders = ["Pre-Sea", "Post-Sea", "DG Exit Exam", "IMUCET", "GMDSS"];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentOccurrence, setCurrentOccurrence] = useState(0);
  
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const newsItems = [
    {
      heading: "Revised Time Table for 2M (FG), ASM (FG) & ASM (NCV) Written Examination for the month of March 2024",
      body: "Enclosed is the revised timetable for the March 2024 written examinations for 2M (FG), ASM (FG), and ASM (NCV) categories. Review the document for updated dates and timings, ensuring thorough preparation accordingly.",
      url: "https://www.dgshipping.gov.in/writereaddata/ExamResult/202402070328124142168TIMETABLEMARCH2024(1).pdf"
    },
    {
      heading: "Notification of Eighth Convocation",
      body: "The Eighth Convocation is announced! Graduates, please check the details in the notification for ceremony dates and venue. We look forward to celebrating your achievements at this joyous event. Congratulations!",
      url: "https://www.imu.edu.in/imunew//uploads/files/Eigth_Convocation_Notification_22082023(2).pdf"
    },
    {
      heading: "Clarification regarding booking and appearing in competency examinations of the nautical discipline",
      body: "This notice aims to provide clarity on the procedure for booking and participating in competency examinations within the nautical discipline. Candidates are urged to thoroughly familiarize themselves with the outlined guidelines to ensure a smooth and successful examination process.",
      url: "https://www.dgshipping.gov.in/writereaddata/ShippingNotices/202206160533438090769DGSCircularNo13of2022.pdf"
    },
    {
      heading: "Nautical Discipline Oral Examinations",
      body: "An important notice regarding the upcoming oral examinations for the nautical discipline. This document outlines the shift to an online video conferencing platform for the exams, along with essential details, schedules, and technical requirements.",
      url: "https://www.dgshipping.gov.in/writereaddata/ExamResult/202302030415286773897Noticetooralcandidates(2).pdf"
    },
    {
      heading: "Details of IMU-CET Examination",
      body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates. ",
      url: "https://www.imu.edu.in/images/Admissions/2021/Notification_CET%20Details_03082021.pdf"
    }
  ];

  // State variables for news bulletin
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Move to the next news item
  // Functions to handle navigation
  const prevNews = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + (newsItems.length - 2)) % (newsItems.length - 2));
  };

  const nextNews = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % (newsItems.length - 2));
  };

  // Use useEffect for updating the news every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextNews();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentNewsIndex]);
  
  return (
    <div>
      <div className="lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bg-gradient-to-t from-darkest-blue to-black2 lg:z-50 lg:pb-6">
      <div className="flex lg:justify-between lg:items-center">
        {/* Logo and Text */}
        <div className="flex items-center justify-start ml-4 mt-6 lg:ml-14 ">
          <img src={Logo} alt="Logo" className="sm:w-20 sm:h-20 mr-2 w-12 h-12" />
          <span className="text-white font-montserrat sm:text-lg text-sm font-medium">Mariner's Drive</span>
        </div>

       

        {/* Navigation Menu */}
        <div className="hidden lg:flex justify-end mr-14 mt-8">
          {/* Search Bar */}
          <div className="flex items-center border rounded-md bg-white px-4 py-1 mb-0.25 mr-4 relative">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
            <input
              id="search-input"
              type="text"
              placeholder={placeholders[currentPlaceholderIndex]}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none placeholder-gray-400 pl-4 w-full"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-1 h-4 bg-gray-300 animate-blink"></div>
            </div>
          </div>
          
          {/* Regular Menu Items */}
          <nav>
            <a href="/" className="text-white font-montserrat font-medium mr-4">Home</a>
            <a href="/preseapage" className="text-white font-montserrat font-medium mr-4">Pre-Sea</a>
            <a href="/trainingpage" className="text-white font-montserrat font-medium mr-4">On-board Training</a>
            <a href="/postseapage" className="text-white font-montserrat font-medium mr-4">Post-Sea</a>
            <a href="/testseriespage" className="text-white font-montserrat font-medium">Test Series</a>
          </nav>
        </div>
      </div>
      {/* Horizontal Line */}
      
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden absolute top-8 right-4">
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-white mt-1 text-lg cursor-pointer" onClick={toggleMenu} />
      </div>
      <p className="invisible">a</p>
      <Menu
        isOpen={isMenuOpen}
        right
        customBurgerIcon={false}
        customCrossIcon={false}
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
      >
        <div className={`menu-container ${isMenuOpen ? 'open' : ''}` }>
          <div className="text-white font-medium font-montserrat px-4 py-6 text-center"><a href = "/">Home</a></div>
          <div className="text-white font-medium font-montserrat px-4 py-6 mb-5 text-center"><a href = "/preseapage">Pre-Sea</a></div>
          <div className="text-white font-medium font-montserrat px-4 py-6 mb-5 text-center"><a href = "/trainingpage">On-board Training</a></div>
          <div className="text-white font-medium font-montserrat px-4 py-6 mb-5 text-center"><a href = "/postseapage">Post-Sea</a></div>
          <div className="text-white font-medium font-montserrat px-4 py-6 text-center"><a href = "/testseriespage">Test Series</a></div>
        </div>
      </Menu>


      

      {/* Section Below the Line */}
      <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-12 h-full lg:mt-28">
        {/* Left Part */}
        <div className="text-center justify-center items-center mt-8 ml-4 lg:mt-32 lg:ml-20">
          <h2 className="text-white font-montserrat font-semibold text-4xl lg:text-8xl tracking-wider mb-2">Mariner's</h2>
          <h2 className="text-white font-montserrat font-semibold text-4xl lg:text-8xl tracking-wider mb-4">Drive</h2>
          <p className="text-white font-montserrat font-medium text-base lg:text-lg tracking-wider">Learn, Navigate, Conquer</p>
          <p className="text-white font-montserrat font-medium text-base lg:text-lg tracking-wider mb-8">Your Path to the Merchant Navy!</p>
          <div className="flex items-center justify-center">
            <a href="https://www.instagram.com/marinersdrive?igsh=MWE5bzBjaHR6ZTF2dA%3D%3D&utm_source=qr"><img src={insta} alt="insta" className="w-8 h-8 lg:w-12 lg:h-12" /></a>
            <a href="Twitter.com/marinersdrive"><img src={twitter} alt="twitter" className="w-8 h-8 lg:w-12 lg:h-12 ml-3" /></a>
            <a href="https://www.linkedin.com/in/mariner%E2%80%99s-drive-4874142b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkedin} alt="linkedin" className="w-8 h-8 lg:w-12 lg:h-12 ml-3" /></a>
          </div>
        </div>
        
        {/* Right Part */}
        <div className="mt-8 lg:mt-16 lg:justify-end">
          <img src={gifImage} alt="GIF" width="650" />
        </div>
      </div>
      {/* Thick Page Divider */}
      {/* Thick Page Divider */}
      <div className="my-8 lg:my-20 text-center">
      <p className="text-darkest-blue font-montserrat bg-light-blue lg:p-8 p-6 font-semibold flex justify-center text-base lg:text-2xl text-center items-center  tracking-wider">
        Navigating your Maritime Journey
      </p>
    </div>
    {/* Screen Partition */}
    <div className="lg:flex justify-between mx-4 lg:mx-12 h-full">
      {/* Pre-Sea Section */}
      <div className="w-full lg:w-1/3 text-center lg:mt-4 mt-12">
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Navigating the Pre-Sea</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">DNS Course:</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Understanding the Task</h3> 
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider lg:mb-4 mb-2">Menu</h3>

        <br></br>
        <p className="text-white font-montserrat font-normal text-sm lg:text-base text-justify ml-8 mr-8">The Pre-Sea DNS (Diploma in Nautical Science) course is a crucial step for aspiring seafarers, providing them with the knowledge and skills needed to excel in the maritime industry. At the heart of this course lies the Task Menu, an essential resource for students. It serves as a guide, offering a structured outline of the curriculum, study materials, and assignments. The Task Menu not only helps students navigate the course but also ensures they cover all vital topics, from Mathematics to Physics, Chemistry, General Aptitude, General Knowledge, English and interview hot questions. It's the compass that keeps aspiring deck officers on course for a successful maritime career.</p>
        <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
         hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mt-8" 
        onClick={() => navigate('/preseapage')}>Proceed</button>
        <br></br>
        {/* Content for Pre-Sea Section */}
        {/* Add your content here */}
      </div>
      <div>
        <hr className="lg:invisible visible border-t-4 border-light-blue mt-12 rounded-3xl mx-6" />
      </div>
      {/* On-board Training Section */}
      <div className="w-full lg:w-1/3 text-center lg:mt-4 mt-12">
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Onboard Training:</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">A Bridge to Success in</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">DNS Semester</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider lg:mb-4 mb-2">3, 4, and 5</h3>
        <br></br>
        <p className="text-white font-montserrat font-normal text-sm lg:text-base text-justify ml-8 mr-8">Onboard training is the cornerstone of a deck cadet's education, providing hands-on experience and knowledge crucial for DNS (Diploma in Nautical Science) semester 3, 4, and 5. It bridges the gap between theory and practice, offering invaluable insights into navigation, seamanship, and maritime operations. Cadets learn to navigate real-world challenges, enhancing their skills for the later stages of their DNS program. This training is vital, merging practical necessity and profound education, arming cadets with expertise to excel in the dynamic seafaring realm. This tab will give all the Projects and Tasks required for DLP in categorised view.</p>
        <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
         hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mt-14"
        onClick={() => navigate('/trainingpage')}>Proceed</button>
        <br></br>
        {/* Content for On-board Training Section */}
        {/* Add your content here */}
      </div>
      <div>
        <hr className="lg:invisible visible border-t-4 border-light-blue mt-12 rounded-3xl mx-6" />
      </div>

      {/* Post-Sea Section */}
      <div className="w-full lg:w-1/3 text-center lg:mt-4 mt-12">
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Navigating the Post-Sea</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">DNS Course:</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Passage Plan for 2nd</h3>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider lg:mb-4 mb-2">Mate</h3>
        <br></br>
        <p className="text-white font-montserrat font-normal text-sm lg:text-base text-justify ml-8 mr-8">The journey to becoming a successful 2nd Mate in the maritime industry doesn't end with the sea service; it continues with post-sea training. This specialized training equips individuals with the knowledge and skills required to excel in the role of a 2nd Mate. It covers essential topics for oral and written examinations, preparing candidates for the IMU degree exam. The post-sea training material encompasses navigation, ship stability, cargo operations, and more, ensuring that future 2nd Mates are well-prepared to take on the challenges of their roles. The tabular format offers a categorized overview for aspiring 2nd Mates, fostering an efficient and organized learning experience.</p>
        <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
         hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mt-8"
        onClick={() => navigate('/postseapage')}>Proceed</button>
        <br></br>
        {/* Content for Post-Sea Section */}
        {/* Add your content here */}
      </div>
    </div>
    <div className="my-14 text-center">
      <p className="text-darkest-blue font-montserrat bg-light-blue lg:p-8 p-6 font-semibold flex justify-center text-base lg:text-2xl text-center items-center tracking-wider">
        News Bulletin
      </p>
    </div>
    {/* News Bulletin Section */}
    <div className="flex items-center justify-between mx-8 lg:mx-12 h-full ">
    <FontAwesomeIcon
      icon={faArrowLeft}
      className="text-white text-base lg:text-2xl cursor-pointer"
      onClick={prevNews}
    />
   <div className="lg:flex w-full justify-around lg:mr-0 mr-10">
      {/* Display 3 news simultaneously */}
      {Object.keys(newsItems).slice(currentNewsIndex, currentNewsIndex + (window.innerWidth >= 1024 ? 3 : 1)).map((key, index) => {
        const news = newsItems[key];
        return (
          <div key={index} className="w-full lg:w-1/3 text-center lg:mt-4 mx-5">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className="rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden lg:h-64 h-54 flex flex-col">
              <div className="bg-gray-300 lg:h-20 h-17 flex items-center p-4">
                <FontAwesomeIcon className="sm:h-8 sm:w-8 h-6 w-6" icon={faFilePdf} style={{ color: "#fa0f00" }} />
                <div className="ml-4">
                  <p className="text-black font-montserrat font-semibold text-justify lg:text-sm text-xs tracking-wide">
                    {news.heading}
                  </p>
                </div>
              </div>
              <div className="bg-white lg:h-44 h-38 p-4 flex items-start ">
                <p className="text-black lg:text-sm text-xs font-montserrat items-center text-justify leading-6 font-medium">
                  {news.body}
                </p>
              </div>
            </div>
            </a>
          </div>
        );
      })}
    </div>
    <FontAwesomeIcon
      icon={faArrowRight}
      className="text-white text-base lg:text-2xl cursor-pointer"
      onClick={nextNews}
    />
  </div>

  <div className="my-14 text-center">
      <p className="text-darkest-blue font-montserrat bg-light-blue lg:p-8 p-6 font-semibold flex justify-center text-base lg:text-2xl text-center items-center tracking-wider">
        Pre - Sea
      </p>
    </div>
 
  {/* Sponsorship Section */}
<div className="lg:flex justify-between mx-4 lg:mx-12 h-full">
  {/* Pre-Sea Section */}
  <div className="w-full text-center">
    <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider lg:mb-12 mb-8">Sponsorship</h3>
    {/* Add your content for the Sponsorship section */}
    <p className="text-white font-montserrat font-normal text-justify lg:text-base text-sm lg:ml-8 lg:mr-14 lg:mb-8 mb-14 lg:px-52 px-12">Explore the Sponsorship section, your all-encompassing hub for Merchant Navy studies. Uncover detailed insights into sponsorship exams and interviews conducted by leading maritime companies. Understand the unique requirements, question formats, and key focus areas for securing sponsorship. Access valuable tips and resources to enhance your preparation, ensuring you stand out in company interviews. Elevate your chances of sponsorship success by navigating through this dedicated section, designed to be your go-to guide on the path to a thriving career in the maritime industry. Set sail towards sponsorship and a promising future with the knowledge and support available on Mariner's Drive.</p>
    <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
      font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
        hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded lg:mt-8"
      onClick={() => navigate('/preseapage')}>Proceed</button>
  </div>

  {/* ... (existing sections) */}

</div>
  <div className="my-14 text-center">
      <p className="text-darkest-blue font-montserrat bg-light-blue lg:p-8 p-6 font-semibold flex justify-center text-base lg:text-2xl text-center items-center tracking-wider">
        Post - Sea
      </p>
    </div>

  {/* 'Writtens' and 'Oral' Tabs Section */}
<div className="lg:flex justify-between mx-4 lg:mx-12 h-full">
  {/* 'Writtens' Tab Section */}
  <div className="w-full lg:w-1/2 text-center">
    <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Your Guide to</h3>
    <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">'Writtens' Tab</h3>
    <br></br>
    <p className="text-white font-montserrat font-normal lg:text-base text-sm text-justify lg:px-8 lg:mr-12 px-12 lg:mb-0 mb-4">The 'Writtens' tab is your key resource for excelling in the 2nd Mates' MMD written exam in the maritime industry. It offers past papers, detailed solutions, and crucial study material, forming a comprehensive toolkit for confident preparation. Dive into this centralized hub where historical papers enhance familiarity with exam structures, and solutions provide guidance for correct approaches. Inclusion of essential study materials ensures a well-rounded readiness, covering key topics. The tab streamlines the study process, ensuring efficiency and effectiveness. With success just a click away, it becomes a pivotal platform for advancing your maritime career prospects. Explore the 'Writtens' tab, and empower yourself with the tools needed to excel in the 2nd Mates' MMD written exam.</p>
    <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
      font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
        hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded lg:mt-8 mt-4 lg:mb-0 mb-8"
      onClick={() => navigate('/postseapage')}>Proceed</button>
    <br></br>
    {/* Content for 'Writtens' Tab Section */}
    {/* Add your content here */}
  </div>
      <div>
        <hr className="lg:invisible visible border-t-4 border-light-blue mt-4 rounded-3xl mx-6" />
      </div>

  {/* 'Oral' Tab Section */}
  <div className="w-full lg:w-1/2 text-center lg:mt-4 mt-12">
    <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">Sail to Success</h3>
    <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">with the 'Oral' Tab</h3>
    <br></br>
    <p className="text-white font-montserrat font-normal lg:text-base text-sm text-justify lg:px-8 lg:mr-12 px-12 lg:mb-0">The 'Oral' tab is your essential compass for excelling in the MMD oral exam for 2nd Mates. Within this resource hub, discover expert insights, practical tips, and tailored practice materials, all designed for effective preparation. As you explore this dynamic platform, success becomes just a click away. The 'Oral' tab offers a strategic toolkit to boost your confidence and navigate your maritime career path seamlessly. Dive into this comprehensive resource, where curated content provides the direction needed to face the challenges of the oral examination with assurance. Take control of your preparation, explore the 'Oral' tab, and confidently chart your course toward success in the MMD oral exam for 2nd Mates.</p>
    <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
      font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
        hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded lg:mt-8 mt-8"
      onClick={() => navigate('/postseapage')}>Proceed</button>
    <br></br>
    {/* Content for 'Oral' Tab Section */}
    {/* Add your content here */}
  </div>
</div>
<div className="my-14 text-center">
      <p className="text-darkest-blue font-montserrat bg-light-blue lg:p-8 p-6 font-semibold flex justify-center text-base lg:text-2xl text-center items-center tracking-wider">
        Test - Series
      </p>
    </div>
  <div className="lg:flex justify-between mx-4 lg:mx-12 h-full  ">
      {/* Pre-Sea Section */}
      <div className="w-full lg:w-1/3 text-center lg:mt-4 mt-12">
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">IMUCET</h3>

        <br></br>
        <p className="text-white font-montserrat font-normal lg:text-base text-sm text-justify px-12 lg:mb-0 mb-4">Explore the IMU CET, your ultimate resource for Merchant Navy studies. Dive into comprehensive insights on the Indian Maritime University Common Entrance Test (IMU CET), a pivotal examination for maritime aspirants. Discover detailed information on the subjects covered, question formats, and the syllabus. Access valuable tips for effective preparation, including recommended study materials and practice resources. Elevate your chances of success by navigating through this dedicated IMU CET section, designed to be your compass on the journey to a rewarding career in the maritime industry. Sail through the exam with confidence, anchored by the guidance available on Mariner's Drive.</p>
        <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
         hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mt-8 lg:mb-0 mb-12"
        onClick={() => navigate('/testseriespage')}>Proceed</button>
        <br></br>
        <div>
        <hr className="lg:invisible visible border-t-4 border-light-blue rounded-3xl mx-6" />
      </div>
        {/* Content for Pre-Sea Section */}
        {/* Add your content here */}
      </div>

      {/* On-board Training Section */}
      <div className="w-full lg:w-1/3 text-center lg:mt-4 mt-12">
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">DG Exit Exam</h3>
        <br></br>
        <p className="text-white font-montserrat font-normal lg:text-base text-sm text-justify px-12 lg:mb-0 mb-4">Embark on a voyage to mastery with GMDSS exam, your comprehensive resource for maritime communication expertise. Delve into detailed insights on the Global Maritime Distress and Safety System (GMDSS) exam, a vital assessment for seafarers. Explore comprehensive information on exam topics, question formats, and the syllabus. Access valuable tips for effective preparation, including recommended study materials and practice resources. Navigate through this dedicated GMDSS exam section on Mariners Drive to enhance your chances of success. Sail through the exam with confidence, anchored by the knowledge and guidance available at your fingertips.</p>
        <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue 
        hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mt-8 lg:mb-0 mb-12"
        onClick={() => navigate('/testseriespage')}>Proceed</button>
        <br></br>
        <div>
        <hr className="lg:invisible visible border-t-4 border-light-blue mt-4 rounded-3xl mx-6" />
      </div>
        {/* Content for On-board Training Section */}
        {/* Add your content here */}
      </div>

      {/* Post-Sea Section */}
      <div className="w-full lg:w-1/3 text-center lg:mt-4 mt-12">
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider mb-4">GMDSS Exam</h3>

        <br></br>
        <p className="text-white font-montserrat font-normal lg:text-base text-sm text-justify px-12 lg:mb-0 mb-4">Step into success with the DG Exit Exam, your go-to resource for Merchant Navy advancement. Explore detailed insights on the Directorate General of Shipping Exit Exam (DG Exit Exam), a crucial milestone for maritime professionals. Dive into comprehensive information on exam subjects, question formats, and the syllabus. Access invaluable tips for effective preparation, including recommended study materials and practice resources. Navigate through this dedicated DG Exit Exam section on Mariners Drive to elevate your chances of success. Navigate exams with ease, leveraging readily available knowledge and support at your fingertips for a prepared and assured path to success.</p>
        <button className="bg-light-blue shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] 
        font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue 
        hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mt-8 lg:mb-0 mb-6"
        onClick={() => navigate('/testseriespage')}>Proceed</button>
        <br></br>
        {/* Content for Post-Sea Section */}
        {/* Add your content here */}
      </div>
    </div>
    <div className="my-14 text-center">
      <p className="text-darkest-blue font-montserrat bg-light-blue lg:p-8 p-6 font-semibold flex justify-center text-base lg:text-2xl text-center items-center tracking-wider">
        Contact Us
      </p>
    </div>
    
    <div className="lg:flex justify-between mx-4 lg:mx-16 h-full">
    {/* Left Part - Contact Form */}
    <div className="w-full lg:w-1/2">
      <h3 className="text-white font-montserrat lg:text-start text-center font-semibold text-lg lg:text-2xl tracking-wider mb-8">Get in Touch!</h3>
      <form className="w-full max-w-lg">
        <div className="lg:flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 lg:px-0 px-12">
            <label className="block uppercase tracking-wider text-white font-montserrat text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-600 font-montserrat border rounded py-2 px-3 lg:py-3 lg:px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
            type="text" placeholder="John" onChange={handleChange} name="firstName"/>
          </div>
          <div className="w-full md:w-1/2 lg:px-4 px-12">
            <label className="block uppercase tracking-wider text-white font-montserrat text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block lg:w-60 w-full bg-gray-300 text-gray-600 font-montserrat border rounded py-2 px-3 lg:py-3 lg:px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" 
            type="text" placeholder="Doe" onChange={handleChange} name="lastName"/>
          </div>
        </div>
        <div className="flex flex-wrap lg:-mx-3 -mx-2 mb-6">
          <div className="w-full lg:px-3 px-14">
            <label className="block uppercase tracking-wider text-white font-montserrat text-xs font-bold mb-2" htmlFor="grid-email">
              Email Address
            </label>
            <input className="appearance-none block w-full bg-gray-300 text-gray-600 font-montserrat border rounded py-2 px-3 lg:py-3 lg:px-4 leading-tight focus:outline-none focus:bg-white" id="grid-email" 
            type="email" placeholder="john.doe@example.com" onChange={handleChange}  name="email"/>
          </div>
        </div>
        <div className="flex flex-wrap lg:-mx-3 -mx-2 mb-6">
          <div className="w-full lg:px-3 px-14">
            <label className="block uppercase tracking-wider text-white font-montserrat text-xs font-bold mb-2" htmlFor="grid-message">
              Your Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-300 text-gray-600 font-montserrat border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-message" 
            placeholder="Type your message here..." rows="6" onChange={handleChange} name="message"></textarea>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
        <button className="bg-light-blue font-montserrat text-darkest-blue tracking-wide font-semibold border-b-4 border-blue hover:bg-blue
         hover:border-white hover:text-white py-2 lg:px-12 px-8 lg:text-base text-sm rounded mb-12" 
        type="button" onClick={handleSubmit} disabled={buttonText === 'Sending...'}>
          {buttonText}
        </button>
        </div>
        <div>
        <hr className="lg:invisible visible border-t-4 border-light-blue mt-4 rounded-3xl mx-6" />
      </div>
      </form>
    </div>

    {/* Right Part - Contact Information */}
    <div className="w-full lg:w-1/2 flex items-center lg:ml-24 lg:px-0 px-12 lg:mt-4 mt-12">
      <div>
        <h3 className="text-white font-montserrat font-semibold text-base lg:text-2xl tracking-wider text-center mb-6">Contact Information</h3>
        <p className="text-white font-montserrat font-normal text-center lg:mr-4 mb-8 lg:text-base text-sm">Feel free to reach out to us at Mariner's Drive!</p> 
        <p className="text-white font-montserrat font-normal text-center lg:mr-4 mb-8 lg:text-base text-sm">Whether you have questions about maritime education, feedback or suggestions on our platform, or just want to say hello, we'd love to hear from you. Our dedicated team is committed to providing assistance and guidance on your journey in the maritime industry. Your inquiries are valuable to us, and we look forward to connecting with you to ensure you have the best experience on Mariner's Drive.</p>
        <p className="text-white font-montserrat font-normal text-center lg:mr-4 mb-8 lg:text-base text-sm">Sail on with Mariner's Drive – where your maritime dreams set sail!</p>
        <p className="text-white font-montserrat font-semibold text-center mb-2 lg:text-base text-sm">Email:</p>
        <p className="text-white font-montserrat font-normal text-center mb-12 lg:text-base text-sm">marinersdrive.com@gmail.com</p>
      </div>
    </div>
  </div>
  <ToastContainer />
    </div>
  );
}

export default HomePage;
