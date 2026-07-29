import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import d1 from "../assets/Speech Pathologist.jpg";
import d2 from "../assets/Occupational Therapist.jpg";
import d3 from "../assets/Disability Support Worker.jpg";
import d4 from "../assets/d9.png";
import d5 from "../assets/Physiotherapist.jpg";
import d6 from "../assets/General Practitioner (Emergency Skills).jpg";
import d7 from "../assets/personal care worker.jpg";
import a1 from "../assets/arrow.png";
import { LuClock3, LuMapPin, LuBriefcase } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Healthcare = () => {
  const url = "https://jobsnvisa.com.au/";

  const healthcareJobs = [
    {
      image: d1,
      category: "Allied Health",
      title: "Speech Pathologist",
      description:
        "Assess, diagnose, and treat communication and swallowing disorders across all age groups while improving patients' quality of life through evidence-based therapy.",
      jobType: "Full Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Assess speech and language disorders",
        "Develop individualized therapy plans",
        "Provide swallowing and communication therapy",
      ],
      qualifications: [
        "Bachelor or Master of Speech Pathology",
        "Speech Pathology Australia (SPA) Eligibility",
        "Current Working Rights",
      ],
      skills: [
        "Speech Therapy",
        "Communication Disorders",
        "Dysphagia Management",
        "Patient Care",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369xpA",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d2,
      category: "Allied Health",
      title: "Occupational Therapist",
      description:
        "Support individuals to develop, recover, and maintain the skills needed for daily living, work, and community participation.",
      jobType: "Full Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Conduct functional assessments",
        "Develop rehabilitation plans",
        "Recommend assistive equipment",
      ],
      qualifications: [
        "Bachelor of Occupational Therapy",
        "AHPRA Registration",
        "Current Working Rights",
      ],
      skills: [
        "Rehabilitation",
        "Functional Assessment",
        "Patient Care",
        "Clinical Reasoning",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369uYG",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d3,
      category: "Support & Community",
      title: "Disability Support Worker",
      description:
        "Provide person-centred support to individuals with disabilities, promoting independence, wellbeing, and community participation.",
      jobType: "Full Time",
      experience: "1+ Years",
      location: "Australia",
      responsibilities: [
        "Provide personal care support",
        "Assist with daily living activities",
        "Promote community participation",
      ],
      qualifications: [
        "Certificate III or IV in Individual Support",
        "NDIS Worker Screening Check",
        "First Aid & CPR",
      ],
      skills: ["Personal Care", "NDIS", "Community Support", "Communication"],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369JBN",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d7,
      category: "Support & Community",
      title: "Support Coordinator",
      description:
        "Assist NDIS participants in implementing their plans, connecting with service providers, and achieving their personal goals.",
      jobType: "Full Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Coordinate NDIS supports",
        "Connect participants with providers",
        "Monitor participant outcomes",
      ],
      qualifications: [
        "Diploma or Degree in Community Services",
        "NDIS Experience",
        "Driver Licence (Preferred)",
      ],
      skills: ["Case Management", "NDIS", "Coordination", "Communication"],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369JBN",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d5,
      category: "Allied Health",
      title: "Physiotherapist",
      description:
        "Assess, diagnose, and treat movement disorders while helping patients recover from injury, surgery, or chronic health conditions.",
      jobType: "Part Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Assess physical conditions",
        "Develop rehabilitation programs",
        "Provide manual therapy",
      ],
      qualifications: [
        "Bachelor of Physiotherapy",
        "AHPRA Registration",
        "Current Working Rights",
      ],
      skills: [
        "Rehabilitation",
        "Manual Therapy",
        "Patient Assessment",
        "Exercise Prescription",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369JBN",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d4,
      category: "Support & Community",
      title: "Behavioral Support Practitioner",
      description:
        "Develop Positive Behaviour Support plans and evidence-based interventions to improve the quality of life of individuals with disabilities.",
      jobType: "Part Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Conduct behaviour assessments",
        "Develop Positive Behaviour Support plans",
        "Train families and support staff",
      ],
      qualifications: [
        "Degree in Psychology, Social Work or Allied Health",
        "NDIS Behaviour Support Eligibility",
        "Current Working Rights",
      ],
      skills: [
        "Positive Behaviour Support",
        "Behaviour Assessment",
        "NDIS",
        "Report Writing",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369JBN",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d6,
      category: "Doctors & Specialists",
      title: "Vocational Registered General Practitioner",
      description:
        "Provide comprehensive primary healthcare services including diagnosis, treatment, preventive care, and chronic disease management across diverse patient populations.",
      jobType: "Full Time",
      experience: "3+ Years",
      location: "Australia",
      responsibilities: [
        "Diagnose and treat patients",
        "Develop patient care plans",
        "Provide preventive healthcare",
      ],
      qualifications: [
        "Medical Degree (MBBS or Equivalent)",
        "AHPRA Registration",
        "FRACGP or Equivalent",
      ],
      skills: [
        "Primary Care",
        "Clinical Diagnosis",
        "Patient Management",
        "Chronic Disease Care",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Apply or Enquire",
      ],
      applyUrl: "https://recruitcrm.io/apply/17679308678410124369JBN",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },
  ];

  // Filter state moved to component scope
  const [showFilters, setShowFilters] = useState(false);
  const initialFilters = {
    search: "",
    category: "All Categories",
    settings: "All Settings",
    levels: "All Levels",
    patientInteraction: "Patient Interaction",
    employmentType: "Employment Type",
  };
  const [filters, setFilters] = useState(initialFilters);
  const handleChange = (field, value) =>
    setFilters((p) => ({ ...p, [field]: value }));
  const handleReset = () => {
    setFilters(initialFilters);
    setShowFilters(false);
  };

  // Filtering logic
  const filteredJobs = healthcareJobs.filter((job) => {
    const q = filters.search.trim().toLowerCase();
    if (q) {
      const inTitle = job.title.toLowerCase().includes(q);
      const inDesc = job.description.toLowerCase().includes(q);
      const inSkills = job.skills.join(" ").toLowerCase().includes(q);
      if (!inTitle && !inDesc && !inSkills) return false;
    }
    if (
      filters.category !== "All Categories" &&
      job.category !== filters.category
    )
      return false;
    if (
      filters.employmentType !== "Employment Type" &&
      job.jobType !== filters.employmentType
    )
      return false;
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Healthcare Jobs in Australia | Jobs N Visa</title>

        <meta
          name="description"
          content="Explore healthcare job opportunities in Australia with Jobs N Visa. Find roles for nurses, lab technologists, and other healthcare professionals."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Healthcare Jobs in Australia | Jobs N Visa"
        />
        <meta
          property="og:description"
          content="Explore healthcare job opportunities in Australia with Jobs N Visa. Find roles for nurses, lab technologists, and other healthcare professionals."
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://jobsnvisa.com.au/assets/d1.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
      </Helmet>
      <section className="max-w-[1420px] mx-auto px-4 pt-6 md:pt-10 pb-12 overflow-x-hidden">
        {/* Header Banner */}
        <div className="flex flex-col items-center text-center mt-6 xl:mt-24">
          <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 mt-20 xl:mt-8 md:mt-14 md:px-12 py-8 md:py-10">
            {/* Decorative Vector 1 */}
            <img
              src={w1}
              alt="Background"
              className="hidden md:block absolute top-[-56px] left-[-120px] md:top-[-40px] md:left-[-120px] w-[455.35px] h-[303.56px] md:h-[250px] rotate-[-23deg]"
            />

            {/* Banner Text Content */}
            <div className="relative z-10">
              <p className="text-[15px] md:text-[18px] font-normal text-[#0D542B]">
                Home &gt; Healthcare
              </p>
              <h1 className="mt-3 md:mt-5 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-green-950 text-center">
                Healthcare Professionals
              </h1>
              <p className="mt-2 md:mt-3 max-w-[739px] mx-auto text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-green-700 text-center">
                Comprehensive Guide to Healthcare Careers in Australia
              </p>

              {/* Decorative Vector 2 */}
              <img
                src={w2}
                alt="Background"
                className="hidden xl:block absolute top-[54px] xl:top-[10px] left-[1040px] w-[224px] h-[105px]"
              />
            </div>
          </div>
        </div>

        {/* Inline FilterSection (moved here to allow filtering of cards) */}
        <div className="w-full max-w-[850px] mx-auto p-4 space-y-4 mt-10">
          <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="bg-white rounded-full p-2 pl-5 border border-slate-200 shadow-sm flex items-center gap-3 w-full sm:max-w-2xl">
              <svg
                className="w-4 h-4 text-slate-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => handleChange("search", e.target.value)}
                  placeholder="Search healthcare roles, specializations, or skills..."
                  className="w-full text-xs sm:text-sm text-slate-700 bg-transparent placeholder-slate-400 focus:outline-none"
                />
                {filters.search && (
                  <button
                    onClick={() => handleChange("search", "")}
                    aria-label="Clear search"
                    className="ml-2 text-slate-500 hover:text-slate-700"
                  >
                    ×
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters((p) => !p)}
                className="flex items-center gap-2 px-4 py-2 bg-[#D1E9E3] hover:bg-[#c1e2da] text-[#1D584C] text-xs font-semibold rounded-full transition"
              >
                <span>Filters</span>
                <svg
                  className="w-3.5 h-3.5 text-[#1D584C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleReset}
                className="flex items-center h-[40px]  gap-1 px-4 py-2 bg-[#EAEFF2] hover:bg-[#e0e7ec] text-[#42526E] text-xs font-semibold rounded-[10px] transition"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#42526E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="space-y-3 pt-1 xl:w-[1280px] mt-4 sm:mt-6 xl:ml-[-230px] ">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 text-[16px]">
                <select
                  value={filters.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Allied Health">Allied Health</option>
                  <option value="Support & Community">
                    Support & Community
                  </option>
                  <option value="Doctors & Specialists">
                    Doctors & Specialists
                  </option>
                </select>

                <select
                  value={filters.settings}
                  onChange={(e) => handleChange("settings", e.target.value)}
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="All Settings">All Settings</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Private Clinic">Private Clinic</option>
                  <option value="Laboratory">Laboratory</option>
                </select>

                <select
                  value={filters.levels}
                  onChange={(e) => handleChange("levels", e.target.value)}
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="All Levels">All Levels</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>

                <select
                  value={filters.patientInteraction}
                  onChange={(e) =>
                    handleChange("patientInteraction", e.target.value)
                  }
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="Patient Interaction">
                    Patient Interaction
                  </option>
                  <option value="Direct Patient Care">
                    Direct Patient Care
                  </option>
                  <option value="Non-Clinical / Support">
                    Non-Clinical / Support
                  </option>
                </select>

                <select
                  value={filters.employmentType}
                  onChange={(e) =>
                    handleChange("employmentType", e.target.value)
                  }
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="Employment Type">Employment Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>
          )}

          {/* Cards Stack */}
          <div className="space-y-8 xl:space-y-14 mt-14  xl:mt-14 flex flex-col items-center">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="
              /* Mobile / Tablet Styles */
              w-full max-w-[700px] rounded-[30px] p-6 bg-slate-50 shadow-xl flex flex-col items-center overflow-hidden
              /* Desktop Styles (Unchanged) */
              xl:max-w-none xl:w-[1350px] xl:h-[680px] xl:w-[1300px] xl:h-[650px] xl:rounded-[70px] xl:p-0  xl:flex-row
            "
              >
                {/* Left Card Image Section */}
                <div
                  className="
                /* Mobile / Tablet Styles */
                relative w-full max-w-[280px] sm:max-w-[320px] h-auto bg-green-200 rounded-[30px] p-4 flex flex-col items-center mt-6
                /* Desktop Styles (Unchanged) */
                xl:max-w-none xl:w-[335px] xl:h-[420px] xl:ml-[81px] xl:mt-[81px] xl:rounded-[45px] xl:p-0 xl:block
              "
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    className="
                  /* Mobile / Tablet Styles */
                  w-full h-[260px] sm:h-[300px] object-cover rounded-[25px] -mt-10 shadow-md
                  /* Desktop Styles (Unchanged) */
                  xl:w-[334px] xl:h-[393px] xl:rounded-[30px] xl:ml-[-40px] xl:mt-[-30px] xl:shadow-none
                "
                  />

                  <p
                    className="
                  /* Mobile / Tablet Styles */
                  text-green-700 text-[18px] sm:text-[20px] font-semibold text-center mt-3
                  /* Desktop Styles (Unchanged) */
                  xl:w-[250px] xl:h-[30px] xl:mt-3 xl:ml-20 xl:text-left
                "
                  >
                    {job.category}
                  </p>
                </div>

                {/* Right Details Section */}
                <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
                  {/* Job Title */}
                  <p
                    className="
                  /* Mobile / Tablet Styles */
                  text-green-700 text-[22px] sm:text-[26px] font-semibold text-center mt-6 xl:mt-0
                  /* Desktop Styles (Unchanged) */
                  xl:w-[800px] xl:h-[45px] xl:mt-[40px] xl:ml-[50px] xl:text-[30px] xl:text-left
                "
                  >
                    {job.title}
                  </p>

                  {/* Job Description */}
                  <p
                    className="
                  /* Mobile / Tablet Styles */
                  text-slate-500 text-[14px] sm:text-[16px] text-center xl:text-left mt-3 px-2 xl:px-0
                  /* Desktop Styles (Unchanged) */
                  xl:w-[751px] xl:h-[87px] xl:mt-[20px] xl:ml-[50px]
                "
                  >
                    {job.description}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full max-w-[90%] xl:w-[750px] my-4 xl:my-0 xl:mt-[-10px] xl:ml-[50px] border border-slate-300"></div>

                  {/* Job Info Bar */}
                  <div
                    className="
                  /* Mobile / Tablet Styles */
                  w-full grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 xl:py-0
                  /* Desktop Styles (Unchanged) */
                  xl:flex xl:items-center xl:justify-between xl:pt-6
                "
                  >
                    {/* Job Type */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 xl:ml-[80px]">
                      <LuClock3 className="w-6 h-6 xl:w-7 xl:h-7 text-[#009A44] flex-shrink-0" />
                      <div>
                        <p className="text-[14px] xl:text-[16px] text-slate-600">
                          Job Type
                        </p>
                        <p className="text-[16px] xl:text-[18px] font-semibold text-slate-800">
                          {job.jobType}
                        </p>
                      </div>
                    </div>

                    <div className="hidden xl:block h-14 w-px bg-gray-300"></div>

                    {/* Experience */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 xl:mr-[40px]">
                      <LuBriefcase className="w-6 h-6 xl:w-7 xl:h-7 text-[#009A44] flex-shrink-0" />
                      <div>
                        <p className="text-[14px] xl:text-[16px] text-slate-600">
                          Experience
                        </p>
                        <p className="text-[16px] xl:text-[18px] font-semibold text-slate-800">
                          {job.experience}
                        </p>
                      </div>
                    </div>

                    <div className="hidden xl:block h-14 w-px bg-gray-300"></div>

                    {/* Location */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 xl:mr-[60px]">
                      <LuMapPin className="w-6 h-6 xl:w-7 xl:h-7 text-[#009A44] flex-shrink-0" />
                      <div>
                        <p className="text-[14px] xl:text-[16px] text-slate-600">
                          Location
                        </p>
                        <p className="text-[16px] xl:text-[18px] font-semibold text-slate-800">
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities & Qualifications */}
                  <div
                    className="
                  /* Mobile / Tablet Styles */
                  w-full flex flex-col sm:flex-row justify-between gap-6 mt-6 xl:mt-0
                  /* Desktop Styles (Unchanged) */
                  xl:w-[725px] xl:mt-[38px] xl:ml-[50px]
                "
                  >
                    <div className="w-full sm:w-[48%] xl:w-[340px]">
                      <h3 className="text-[18px] xl:text-[20px] font-semibold text-[#00A651] mb-2 xl:mb-3">
                        Key Responsibilities
                      </h3>
                      <ul className="list-disc pl-5 text-[14px] xl:text-[16px] text-slate-600 space-y-1 xl:space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full sm:w-[48%] xl:w-[320px]">
                      <h3 className="text-[18px] xl:text-[20px] font-semibold text-[#00A651] mb-2 xl:mb-3">
                        Qualifications
                      </h3>
                      <ul className="list-disc pl-5 text-[14px] xl:text-[16px] text-slate-600 space-y-1 xl:space-y-2">
                        {job.qualifications.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="w-full flex gap-3 flex-wrap mt-6 xl:mt-10 xl:ml-[30px]">
                    {job.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex-1 h-[45px] bg-slate-200 rounded-[14px] flex items-center justify-center"
                      >
                        <p className="text-[15px] text-green-700 font-semibold text-center">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Section */}
                  <div
                    className="
                  /* Mobile / Tablet Styles */
                  w-full flex flex-col sm:flex-row justify-center xl:justify-between gap-4 sm:gap-4 mt-6 xl:mt-0
                  /* Desktop Styles (Unchanged) */
                  xl:w-[750px] xl:mt-[25px] xl:ml-[28px] xl:gap-3
                "
                  >
                    {/* Highlight 1 */}
                    <div
                      onClick={() =>
                        alert(
                          `${job.title}\n\nRole Details:\n${job.description}\n\nCategory: ${job.category}\nLocation: ${job.location}\nExperience: ${job.experience}`,
                        )
                      }
                      className="
                    /* Mobile / Tablet Styles */
                    w-full sm:w-1/3 h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-700 hover:bg-green-100 px-4 py-3 flex items-center justify-center gap-1 cursor-pointer group
                    /* Desktop Styles (Unchanged) */
                    xl:w-[250px] xl:px-8 xl:gap-1
                  "
                    >
                      <RiUserSettingsLine className="w-6 h-6 xl:w-10 xl:h-6 text-white group-hover:text-green-900 flex-shrink-0" />
                      <p className="text-[14px] xl:text-[16px] text-white group-hover:text-green-900 font-bold truncate xl:w-[180px]">
                        {job.highlights[0]}
                      </p>
                    </div>

                    {/* Highlight 2 */}
                    <div
                      onClick={() =>
                        alert(
                          `Eligibility Check for ${job.title}\n\nRequired Qualifications:\n${job.qualifications.join("\n")}\n\nRequired Skills:\n${job.skills.join("\n")}`,
                        )
                      }
                      className="
                    /* Mobile / Tablet Styles */
                    w-full sm:w-1/3 h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-100 hover:bg-green-700 px-4 py-3 flex items-center justify-center gap-1 cursor-pointer group
                    /* Desktop Styles (Unchanged) */
                    xl:w-[250px] xl:gap-3 xl:px-8
                  "
                    >
                      <FaRegCheckCircle className="w-5 h-5 xl:w-6 xl:h-6 text-green-900 group-hover:text-white flex-shrink-0" />
                      <span className="text-[14px] xl:text-[16px] group-hover:text-white text-green-900 font-bold truncate xl:w-[180px]">
                        {job.highlights[1]}
                      </span>
                    </div>

                    {/* Highlight 3 */}
                    <div
                      onClick={() => {
                        const msg = `Apply for ${job.title}\n\nURL: ${job.applyUrl}\nEmail: ${job.contactEmail}\nPhone: ${job.contactPhone}\n\nClick OK to open the application form`;
                        if (window.confirm(msg)) {
                          window.open(
                            job.applyUrl,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }
                      }}
                      onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          img.style.filter =
                            "brightness(0) saturate(100%) invert(100%)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        if (img) {
                          img.style.filter =
                            "brightness(0) saturate(100%) invert(20%) sepia(34%) saturate(1320%) hue-rotate(96deg) brightness(92%) contrast(94%)";
                        }
                      }}
                      className="
                    /* Mobile / Tablet Styles */
                    w-full sm:w-1/3 h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-100 hover:bg-green-700 px-4 py-3 flex items-center justify-center gap-1 cursor-pointer group
                    /* Desktop Styles (Unchanged) */
                    xl:w-[250px] xl:gap-3 xl:px-6
                  "
                    >
                      <img
                        src={a1}
                        alt=""
                        className="w-5 h-5 xl:w-6 xl:h-6 xl:mt-1 text-green-900 flex-shrink-0"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(20%) sepia(34%) saturate(1320%) hue-rotate(96deg) brightness(92%) contrast(94%)",
                        }}
                      />
                      <span className="text-[14px] xl:text-[16px] group-hover:text-white text-green-900 font-bold truncate xl:w-[180px]">
                        {job.highlights[2]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;
