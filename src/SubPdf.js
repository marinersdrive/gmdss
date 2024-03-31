import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaChevronRight } from "react-icons/fa";

function PdfDetails() {
  const navigate = useNavigate();

  // Retrieve selected category from localStorage
  const selectedCategory1 = localStorage.getItem("selectedCategory");
  const selectedCategory2 = localStorage.getItem("selectedCategory2");

  // Dummy data for PDF details
  const newsItems = [
      {
        category: "CN",
        heading: "Principles of Navigation",
        body: "An important notice regarding the upcoming oral examinations for the nautical discipline. This document outlines the shift to an online video conferencing platform for the exams, along with essential details, schedules, and technical requirements.",
        url: "https://drive.google.com/file/d/15RgO3KR5Cktx6UihYx-algVlFMmzD3XU/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "New Practical Navigation - Capt. Subramanian",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1KtWPsshUwySaxIBJLRclR01SlIj6CG9s/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Practical Navigation - Capt. H. Subramanian",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/13FQr4OTxDHaXzWEORYsGDddNe4CgidT2/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "The Nautical Almanac - 1992",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1ErXJkSyg0f41BkMNIwDUXpJQDNFrVgqI/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Ex Meridian Table 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1VptsnPqLL5gn-uzVjEnK4QRiSkFXZ4HD/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Staggered Problems",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Kv3RPXuUdZhWTRNzys7xluEMegs-NDkY/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Spherical Trigonometry - Capt. H. Subramanian",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1rAfv2V9UClZBS7hK8LOyltoUaFzI_qRC/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Earth - Moon System and Eclipses",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Enos5kf9GwXyrpq-7sWJIlJTMcm9U41u/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "MMD Navaids Theory Solved",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1_fnnfEQuO_ijuodAWjnXsfSjkSHINBpM/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Celestial Navigation - Tom Cunliffe",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Ach7JJXhp12JM_6QLA0Ye_DW3OgDI2g9/view?usp=drive_link"
      },
      {
        category: "CN",
        heading: "Practical Navigation for 2nd Mates - A. Frost",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/19HhzKuX9iehpaLAzqVNpSK1WL3id1PzQ/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Introduction",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1oMLWNN4SgRE6RsXjhmmKaeUZPl4RkV-a/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Preliminary Calculations",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/16PJpzlv2KOFy0-kqASIrJ8UWyqpwO7Kt/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Day's Work",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1B50NYgHuV2Bu50nV9rcZJAmJd9UcRWtJ/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "GC Sailing",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1TWYmEVxLJJ8RzhrO5pBenSNKM2ya2wRC/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Chart Plotting - 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1IyJXu9DDE9kCvtpzUmEo6GfwSSPB3u-b/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Chart Plotting - 2",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1IFb6RaX1lVzUgIqVId53cvEAXH5YHnV6/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Chart Plotting - 3",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1WThMjWf6tEl1DEWCYLtAQ0_gmtwob3BL/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Tides",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1pGIXGLAmvUiQlWDhNoZlGJ6o-7SXi5GR/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Passage Planning",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1XRl9b3qZq5bSGH1xbaI31SraSN797Hod/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Sample Questions in PP",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Iyp10TiWBF-g74eeb4gGv55mkkLmSk2F/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Sample Questions - Chartwork",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1qa824Mse9gnO0l7P7uVCx7U0nXMGO3WO/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Solved Numericals",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1hTdtkAQglmJNwyi9QdtEJRRcmrTxGJVz/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Capt. Martin's Chartwork",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1QbYF-15moUheVMyjPfUu9Tugpgdbz4CT/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Chart Work Theory",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1PPV8SYJa7OWvSuJQb6lQPlTw4Au1cDxQ/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Symbols & Abbreviations used on Admirality Charts",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1dJ5kRb-WDaZQKQAVvRGmx0ilcCEWvejN/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Table 6 - Meridional Parts",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1A69HPifJK088ISFolRZAiJmTWjiUU_jO/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Admirality Tide Tables",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1zXnLrNCxkTy9C2nidxmhR-WlLHfF_ZRw/view?usp=drive_link"
      },
      {
        category: "TCN",
        heading: "Tides Numericals",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1uY_mGPRwg2laEmXoHZRMic4tGNGp5LuN/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Ballast Water Management",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1MBF_C_RUKtLVs0Se_ghbjS5b7iLvnhBA/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Garbage Management Plan",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1r97zl6cDhE_A1nP9OlrLdyr7OS-O-1SR/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Garbage Placard",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1BGiUpQansK5PezLSJEUALUbJg5vVxElk/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Garbage Record Book",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1JpJatvc2AWqkw1B94vCfw5aQwm04Ff0g/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "MARPOL Consolidated Guide",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1viR5J89MyBpWm4E11bIVZ3SqhDCcGWN-/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "OWS & ODMCS",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1q3PSNqFVpgTvWrUbeniUIkXSiyuQCZGl/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Sewage Regulations",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/11U3IvH6tcS9q3qaaXcRjKjdrASctV29t/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Sewage Discharge Regulations - ANNEX IV",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1uGyOz1ZjsBkwvtqAXgqfYTDv4KFN0V2O/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Sewage Treatment Plan",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1VXaY26r-uLWCEZGBgB0zpljPMSMUkWQA/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "SOx & NOx - ANNEX VI",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1nQQ4pgTVCfQ9iD0Ub5pM3Ajil41fM4eD/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "Special Areas & PSSAs",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/13NI5coANJA3JUIzbsM8ySEMXv0gR5nDY/view?usp=drive_link"
      },
      {
        category: "MARPOL",
        heading: "STP & Incinerator - Block Diagram",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1py0ApTugO9ofjEe5cShH6iFqYbSn8Smp/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Construction Diagram",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/18CNOsPIzAoyQCbiD1RqOilMFUVKqA6IK/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Construction Notes - Written",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/157X0UM8C0nWD_yv1RMVtvG5h0afwRdhg/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Construction Notes - 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/16zoqDDseKpTEbh4tQYhdgooumPfiX-ou/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Construction Notes - 2",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1JQyHjgymrXtn4M4m29q5BYDzrSO8PPWO/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Construction Notes - 3",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1GBbS73xn9DI-cxNhuwSZgQb8vuJhn-mF/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Cross Sections",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1DJAUiiJGK0ZNlme-HcrmXPOCrYket8fG/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Framing System",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1v7N857_9s7IgtUiVqlj_nAIdjQfuKgV4/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "IACS Construction",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/18giVdQmXBET3Yx-QdABDtLEhZ72Vhmc7/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "Kemp and Young Construction",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1YV-1E5zX1xD25s1HczK-Ufe6IooN8WND/view?usp=drive_link"
      },
      {
        category: "Ship Construction",
        heading: "AEMTC - Ship Construction",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1u5XM2uQ1VIAQJmgpw9RcUCNz7zuIdN7E/view?usp=drive_link"
      },
      {
        category: "Ship Stability",
        heading: "Hindship Textbook",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1lCfqcScIHGu7iLFxCuTDL1oR0BAa4ixW/view?usp=drive_link"
      },
      {
        category: "Ship Stability",
        heading: "Hindship Particular",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1rYPdX5vgGohjYUiOL7XBKINsa04oM9Hh/view?usp=drive_link"
      },
      {
        category: "Ship Stability",
        heading: "Ship Stability",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/11j5TzVpEl3fATIDO4aLx_Oq_zPHCwtMe/view?usp=drive_link"
      },
      {
        category: "Ship Stability",
        heading: "Trim Type - A Solution",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1hFW7CqHzlLSdgHAoAgbu71_uyegsPmD0/view?usp=drive_link"
      },
      {
        category: "Ship Stability",
        heading: "Subra Formulas",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/16Ua0UGxy7uMpJywXkOQ92pwPGnS2oVPD/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Crude Oil Washing Precautions and Procedures",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1UXFcdF5FRQ3udnGkIjT5idjk0DlbDmGO/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Gas Freeing and Precautions on Oil Tanker",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1VZRrWLl_omCtjvvizhgzaNanBS372tER/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Tank Cleaning Operations",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1aPkloZ24Dyvah3IwH-MU8hGvnW2NSWbY/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Stability Paper Theory Content",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1QQKLm9gkgUoiTkz-n7y27Xg4iIum5er4/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Classification Society",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1_Ryg6DHB132nRTd-Uk-4aiq_76p3YQSO/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Communication Skills",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/12smaHiXdZR5sNFGb1z-HPg2dVYB6yvPt/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "ISPS",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1J6nZS0EHwQttqZNpMJnz5pGxO56FzEDs/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Assertive, Passive and Aggressive",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1BOoc4letvzhFNjmLAS-rAivW-1KC1JXg/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "ISM & ISPS Checklist",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1mszJTHpFJw7G7_1AsXSS3GXgDyecSCVz/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "ISM & ISPS Questions",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Mwsb1AFxaiFOj1aj3SoQxkF2vHf5ChaC/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Bridge Watchkeeping",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1G3kqfG06Gxm71Rg_Gi8Cg0XB2TcYnnRd/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "HRM Four Principles",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1icYbzmLp4y8lw7TG7llt2DdoaqKUAzkS/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "How to manage workload?",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1ovh6fZdft5J690-k_BOC_tFNCDjSwgxd/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Effective ways to motivate",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Ymqyi3rY3aBXHN7LGf9swCozWEr_LoAA/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "RA Definitions",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1RSXOIjelKJAjSjySaBX24ybFmXJkXxux/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Risk Assessment Technique",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1r3wt32mGnkMysHcnUagBC1dGB8VdTRYT/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "International Convention on Load Lines",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/15kwJd71G127-aS2tDFsghV8rEORUL7TK/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "MARPOL",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1gaH9kLAGhoH5vosJxBFhk6LZT3q2eVSd/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "SOLAS",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/15vhSMyfYg8Oruj13LOv3mteOCA_F6bi_/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "STCW",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1mGyVnZCG_P1d4C00CRagMTah6uPFaTI7/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Seafarers' Hours of Work and Rest",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1K5DFKgFMvVxcvw01L-CAXz5otUXheD2l/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Maslow Motivation",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1h6g9Ysbvk0_lUBKQEhpk5MvTsPh7CL_K/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "CLC Easy Explanation",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Sn_R3RQdEPswvIz_RxivTtAeGNw1--SN/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "CLC and BCLC",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Qjm3kpnAEpbsfurbDUUFPQd5KI3E03Wj/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "COSWP 2015 Amendment 4, October 2019",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1s-rSGuen8_8A9qc5P31UPawVkqxQPwLo/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Innocent Passage",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1kh07ELxvYvFswQe2enUy9r-YfnbZbYyZ/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "London Dumping Convention",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1jITE8ECfkfAg87gGfSvVsyWiFYS-krv8/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Indian Merchant Shipping Act and Rules",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1wc0kDg7RzuU7FQkGGc3cIStevaFiJZaE/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Qualities of Team Leader",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Io8QyaRWaBnIh4VVyv_r41op9qzl4OEo/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Decision Making",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1p7nmogFP6BQFYD704xfW5iZxf16vhnQt/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Maritime Labour Convention - 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1qQtJg7KfjMvyHdpAK6VZtTZvskVISwfn/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Maritime Labour Convention - 2",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1spj15fl_O0UedAXZG3EWKldiTUZGVhp1/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Particularly Sensitive Sea Areas - PSSA",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1PcVFlNtXal59tVm09wV6hlmDW7JEU6BW/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Extra Questions - DG Exit Exams",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1_Z_4I4zIq4eUmJaXSTuRx_gfIeZQmP5c/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Points to consider when preparing for Safety Equipment Survey on ships",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1cbNSXPBkA2SRONscLwYasVMDCiweqCGB/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "Checklist for IOPP Survey",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1TVwpeE3amdbEQ7Lr0MHrkjA2_MhXZMvS/view?usp=drive_link"
      },
      {
        category: "Others",
        heading: "IMO & ILO Legislation",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/198QHuxEzWrqrvBIU0E0BpMHsWHyBwKIz/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "Bridge Procedures Guide",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1me_R6q1UgNoOunAwil2HVdLpeKvZ22LO/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "Bridge Watchkeeping",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/13Ew3wnbY_f3UoYHtqyUeNSnpJCqOpTmc/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "The Mariner's Handbook - UKHO",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1LBcAij7RyQ292OfFDDji4u4LlV4X9qIu/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "IAMSAR Manual",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1a28jYx9Yb1SlUC1zmXAD4qNuBhkVpsCb/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "INTERCO",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1hB4weHSEsnBnIOdhGjeceW0iLG1Yap_Z/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "Maritime Security Charts",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1IIfwcg2JK7kMStTeg-6zGjxcWNbnlTwR/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "Merchant Marine Officers' Handbook",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1lv7Men6YfYvqNkUaQdqgbmzc0VyJN3XP/view?usp=drive_link"
      },
      {
        category: "Manuals",
        heading: "STCW Convention and Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1rFAl9lgknAG9lf8exS4XtTldosKuGW35/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "COLREGS - Capt. Jairaj Nakhwa",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1d0G6ZG69QkfZ_8MeAVjF6wR0OGcuJlf1/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "Manual of the Rule of the Road - Capt. S. K. Puri",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1QVxQD6dxB_QNhbkvTK6y35U8zYGpSSXN/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "IMO Rule of the Road - Capt. V. K. Bhandarkar",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1A0i46NtGC-A_Ohu_4PgLZYE_aEfy1tqC/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "Mariner's Guide to preventing collisions - Capt. Yashwant Chabbra",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/105wOgvIdNfEy7eR0r332lMvOU5V_av1-/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "COLREGS Lights and Shapes Simplified",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1ve1775fwvv4ddpDp_NA7Ahz9bM03YZYe/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "GMDSS Student's Handbook",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1_AMpGX-dNwx1R5EROOBE0E4-kaktlJwR/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "A Guide to the Collision Avoidance Rules",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1WFU4rbPGQWnmTZvvP_OPwIvvC4Dk4myo/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "ROR IALA Cards",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1diZsCAxKaIQ77Q17TXkI3oHA3K5DX0MW/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "ROR Cards",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1mHLVS21BMUVKiu7-4N-69JQ7r5LEAaBX/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "ROR Lights and Shapes Simplified",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Nz_ct1oNclEd88cykWX_h4Ka1_gTpSN4/view?usp=drive_link"
      },
      {
        category: "Reference Books",
        heading: "Wheel House Poster",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1SuEwt_Kl3gRkn_n5lsl7AbefXgjPgPC5/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "Blu Code - Code of Practice",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1uW8GMlqvmatrEYO4i1RVQwXHlaG-6Qel/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "CSC International Covention for Safe Containers, 1972",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1NR_RqDHF-Bi8ng5EXlWB7megwV0FqYlN/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "IGC Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1p9PlohfEGnjRibRYVSj7jT1eBW9KDIiR/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "IMDG Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/14HtqL-eq8fnd8abE6jkYrkbGbFwFFRKw/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "IMSBC Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1oL8T3uDvvubvbz474YtcEXN0IODXG1vs/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "Inert Gas Systems - IMO",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/17Rg9P9iRN5fqTo4bEgFwC4Koj2x9RzAh/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "MARPOL Consolidated Edition 2019",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1GnWX2c4F-FzWDrSFNXf32rmHO-ZBGnCQ/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "New ISGOTT",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1wtvxcH7hhCNyGDHHc5Dx6H7q5dw6MWYp/view?usp=drive_link"
      },
      {
        category: "Codes",
        heading: "TDC Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1itjXEUrx7y0Okvygi4Xq4PyeSDuw8Dbw/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "ARI Tanker Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1WibJ5uadTpkErDajabNwitGCy7vwn40h/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Cargo Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1lvm1WYSTuplEvylS3A9VX_J3VvarbOYQ/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Container Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1IE3xQCerflQqDVGz8tBZOfIr2gnu2LnD/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Containers and IMDG Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1HIswBExWXKwy9TB8OaE0BEUZ4NBsyqY9/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Cargo Handwritten Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/11THkQFTsC78ouQhG9lr2nYJ06LgSGBZ0/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Gas Carrier Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1EPbiaiR314EVXtEYE7czBVW4_fCEfKH3/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Capt. Poswal Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1xtpzNU4-FB_SlvGTzu1F1X-iuzyFlhM6/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Dhananjay Singh Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1INaH6oHFIl8s5ugz_l2fYnKSTN72685m/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Gas Tanker Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1rIbO7JoL2KnQ2MZXIGDuSe0f1Hu-yuTO/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Grain Code Handwritten",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/125iVCKvCD1ox_opAwpbrcvSfi_jh1e6I/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Handwritten Notes 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/19EedmjGd94YnszHPvFX-xpISYDE_Glpa/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Handwritten Notes 2",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1tPjSM2fVMe7qO72v4B8QY1eAe1FCS9Ke/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "IMDG, COW, IGS Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1bHJ1oTntXy8lXYCSNmrV1ZRCmLlvA6Rb/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "IMSBC Jolly Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1aftqBJ-3tmzyyY3U_MgicQ8u8MAFyDge/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Randhawa Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1u1IHKwsxDq2HYK3tjVG0cUoNFTSZmhIQ/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Ravikanth Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/17kX6BIL5IOsH2CYROZATOTCUmPbzfjZO/view?usp=drive_linkk"
      },
      {
        category: "Notes",
        heading: "IMSBC Simran Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/12HG7v8sN8iuEQOl6QtXIvJLU_C8agb8s/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Uday Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1saRqbjuDUsd--tOeayYRMpwRR6vK4dv0/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Question Set",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1AHgI5TVLH2TcnGlDxy07SmXEc4lN6Sg7/view?usp=drive_link"
      },
      {
        category: "Notes",
        heading: "Inert Gas System Diagram",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1jWU32_fe2iUhmmeZJpNPwAVLoSYnzKAd/view?usp=drive_link"
      },
      {
        category: "CODES",
        heading: "Cargo Securing Manual",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1jWU32_fe2iUhmmeZJpNPwAVLoSYnzKAd/view?usp=drive_link"
      },
      {
        category: "CODES",
        heading: "FSS Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1k02-1WpRky_hoM6qWupaCWeJIVlShn4O/view?usp=drive_link"
      },
      {
        category: "CODES",
        heading: "LSA Code",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1NNtAmYpbxgbDpHf0QpI9wRbPJVeKqByg/view?usp=drive_link"
      },
      {
        category: "CODES",
        heading: "SOLAS",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1lQacLzMukRN91Rwvf85_riPcsrzu54N_/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Intact Stability Criteria for all types of Ships",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1S_5OXV3W_FBC48xiilyst74hCa4a7l7n/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "MARPOL - Amendments",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1uf0MT9R3-gRZyhE1sVRzIZ98U7pyHGlr/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Calculation and Assignment of Freeboard",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1uf0MT9R3-gRZyhE1sVRzIZ98U7pyHGlr/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Calculation and Assignment of Freeboard",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Ggam-am8JJD-q3iOCNAN1g8Q5gDDZC_E/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Certificate of SOLAS - Gaurav Srivastava",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1r3fnzb2gbIYkmLM03PcMi4xFlVI8cyyM/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Dates, Contents and Notes of Coventions",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1BzF_hTL7IFL8meKa3X2PjVC8WVavEL8Z/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Emergencies Notes - Ankush",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1wSZtdlM8BcSh--SZzLJBV99UAwWwqm3C/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Subra Formulas",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1-p2FFZUlPbf_ImjTh52JIEFXeV35AQ99/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Capt. Poswal Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1OR3P24OLKq3gmdx1kOTm08vrOz8eHD7a/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Functions 3 Compiled",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1ml6AnPCvFNroEQh377Ki3T3XMDMRfiiI/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Conventions Notes - Gaurav Srivastava",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1IUHT4O4LnGE5OSGHApP5IPJ0eVCY4jTy/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Daman Malhotra Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/13Z_jF3ohyGyxx-cd3-23-3rlr2SOC1-7/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Dhananjay Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1BWubru2_zXE44rKXFdM2S6lL-8YbQCYs/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Dock Labour Regulations",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/16yU-nk9VTrVUUlNQWgBZT3WJPofaBtSu/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Hussain Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/17M40wJOvgBCWeKH04CVydVrv4xA_HCgG/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "FFA Details",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1zz02uuHHXMQzaVrSmUvLAiEcpxq2v4Qu/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Handwritten Notes - Gaurav Srivastava",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1BBWWlYaSRMVXFjf5o5ftnOZI1fT0SGz2/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Handwritten Notes 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1h1juZO1tk0Zu4MGnxgNmJLiMBEAGuhNP/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Handwritten Notes 2",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1_qsMjztAc0KOkAkCqXqV9lF46VmsOyhm/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Handwritten Notes 3",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1nBWs1K9cr-ZMOHFZQxSM1gfT9D3m6Fwp/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "LSA Details",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1vJzrLntGlgUu3YxOv2ESeTRGLhzj_Sqs/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "LSA Training Material",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1d--SWD1z15eXU18MVscSlHLz2wPV6CX2/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Mukesh Solanki Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1JzX09-TdgTx6BFKv7u4sABaNv24AY5dy/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Simran Notes 1",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1oCM7hryy97v-eGsdBY_GYjs4duNmP_cE/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Simran Notes (MFA) 2",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1HpU8gtjHCD0tqtgBgHzi2Z20a4cSmyG_/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Vikas Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/11cQKUGsx2RyqGzpCp68BcWqJC7KMa2G8/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Questions Set",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1XfkqRR4YW0wpXw92zNPchtE5742Mmwsf/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "MARPOL Notes",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1oriKNqTL0JozfYK9whgzK2uQQipAmIGJ/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "Latest MARPOL and SOLAS Amendment",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1rDYHHjL-buFur_Gs2a32EXJsFaA7o6HK/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "List of Statutory Certificate",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1Bo9RAOy7Bc49JZp_tnKxilLq6owShKER/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "LSA Reg.",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/18JU7DgmUvaS8A68WTHvxnxg1LaeETZY1/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "MLC FAQ",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1MlA-3qk0qzZIhO5eAvVc0kivUuwsD3UZ/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "SOLAS Pack A & B",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1km_bsL9jyUhwQlWfRcALzzx2lUWCYowq/view?usp=drive_link"
      },
      {
        category: "NOTES",
        heading: "UNCLOS",
        body: "This document contains important information about the upcoming IMU-CET (Indian Maritime University Common Entrance Test) examination, including dates, timings, and instructions for candidates.",
        url: "https://drive.google.com/file/d/1ZdWJ9jXDSZg0hxYazuvg97wb-81o9QoG/view?usp=drive_link"
      },
  ];

//   const handlePdfClick = (categoryName) => {
//     localStorage.setItem("selectedCategory", categoryName);
//     navigate("/subpdfdetailspage"); // Navigate to the new page
//   };
  
  // Filter newsItems based on the selected category
  const selectedCategoryItems = newsItems.filter(
    (item) => item.category === selectedCategory2
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
        {/* Add a Link to the Home page */}
        <Link to="/pdfdetailspage" className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          {selectedCategory1}
        </Link>
        <FaChevronRight className=" text-white mb-2 p-1 sm:p-0" />
        <h2 className="text-white font-montserrat font-semibold text-sm lg:text-lg tracking-wider mb-2">
          {selectedCategory2}
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
        Explore the latest updates and essential documents related to {selectedCategory2} training 
      </p>
      <p className="text-gray-300 text-xs lg:text-base mr-2 sm:text-justify text-left tracking-wider">
        and get ready for your preparation with our comprehensive exam materials.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
        {selectedCategoryItems.map((news, index) => (
          <div key={index} className="text-center">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
            <div className="rounded-lg lg:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden lg:h-56 h-48 flex flex-col cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="bg-gray-300 sm:h-20 h-14 flex items-center p-4">
              <FontAwesomeIcon className="sm:h-8 sm:w-8 w-6 h-6" icon={faFilePdf} style={{ color: "#fa0f00" }} />
                <div className="ml-4">
                  <p className="text-black font-montserrat font-semibold text-justify text-sm tracking-wide">
                    {news.heading}
                  </p>
                </div>
              </div>
              <div className="bg-white lg:h-56 h-48 lg:p-4 px-4 flex items-start">
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
      <ToastContainer />
    </div>
  );
}

export default PdfDetails;
