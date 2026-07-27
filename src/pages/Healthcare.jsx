import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import d1 from "../assets/d1.png";
import a1 from "../assets/arrow.png";
import { LuClock3, LuMapPin, LuBriefcase } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import FilterSection from "../Components/FilterSection";

const Healthcare = () => {
  const healthcareJobs = [
    {
      image: d1,
      category: "Lab & Technical",
      title: "Medical Laboratory Technologist",
      description:
        "Perform complex laboratory tests and analyses to support medical diagnosis and treatment. Work with sophisticated equipment to analyze blood, tissue, and other specimens.",
      jobType: "Full Time",
      experience: "2 – 3 Years",
      location: "Sydney",
      responsibilities: [
        "Perform laboratory tests and analyses",
        "Operate and maintain laboratory equipment",
        "Ensure quality control and accuracy",
      ],
      qualifications: [
        "Bachelor of Medical Laboratory Science",
        "AIMS registration or equivalent",
        "Laboratory safety certification",
      ],
      skills: [
        "Laboratory Analysis",
        "Quality Control",
        "Equipment Operation",
        "Patient Education",
      ],
      highlights: [
        "Laboratory Analysis",
        "Quality Control",
        "Equipment Operation",
      ],
    },
    {
      image: d1,
      category: "Nursing",
      title: "Registered Nurse",
      description:
        "Provide quality patient care, administer medications, monitor patient conditions and collaborate with multidisciplinary healthcare teams.",
      jobType: "Full Time",
      experience: "3+ Years",
      location: "Melbourne",
      responsibilities: [
        "Provide patient care",
        "Administer medications",
        "Monitor patient recovery",
      ],
      qualifications: [
        "Bachelor of Nursing",
        "AHPRA Registration",
        "CPR Certification",
      ],
      skills: [
        "Patient Care",
        "Medication",
        "Clinical Skills",
        "Emergency Care",
      ],
      highlights: ["Patient Care", "Clinical Skills", "Medication"],
    },
    {
      image: d1,
      category: "Lab & Technical",
      title: "Medical Laboratory Technologist",
      description:
        "Perform complex laboratory tests and analyses to support medical diagnosis and treatment. Work with sophisticated equipment to analyze blood, tissue, and other specimens.",
      jobType: "Full Time",
      experience: "2 – 3 Years",
      location: "Sydney",
      responsibilities: [
        "Perform laboratory tests and analyses",
        "Operate and maintain laboratory equipment",
        "Ensure quality control and accuracy",
      ],
      qualifications: [
        "Bachelor of Medical Laboratory Science",
        "AIMS registration or equivalent",
        "Laboratory safety certification",
      ],
      skills: [
        "Laboratory Analysis",
        "Quality Control",
        "Equipment Operation",
        "Patient Education",
      ],
      highlights: [
        "Laboratory Analysis",
        "Quality Control",
        "Equipment Operation",
      ],
    },
    {
      image: d1,
      category: "Nursing",
      title: "Registered Nurse",
      description:
        "Provide quality patient care, administer medications, monitor patient conditions and collaborate with multidisciplinary healthcare teams.",
      jobType: "Full Time",
      experience: "3+ Years",
      location: "Melbourne",
      responsibilities: [
        "Provide patient care",
        "Administer medications",
        "Monitor patient recovery",
      ],
      qualifications: [
        "Bachelor of Nursing",
        "AHPRA Registration",
        "CPR Certification",
      ],
      skills: [
        "Patient Care",
        "Medication",
        "Clinical Skills",
        "Emergency Care",
      ],
      highlights: ["Patient Care", "Clinical Skills", "Medication"],
    },
  ];

  return (
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

      <FilterSection />

      {/* Cards Stack */}
      <div className="space-y-8 xl:space-y-14 mt-14  xl:mt-14 flex flex-col items-center">
        {healthcareJobs.map((job, index) => (
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
                  xl:w-[161px] xl:h-[30px] xl:mt-3 xl:ml-20 xl:text-left
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
                  xl:w-[494px] xl:h-[45px] xl:mt-[40px] xl:ml-[50px] xl:text-[30px] xl:text-left
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
              <div
                className="
                  /* Mobile / Tablet Styles */
                  w-full flex flex-wrap justify-center xl:justify-between gap-2 mt-6 xl:mt-0
                  /* Desktop Styles (Unchanged) */
                  xl:w-[850px] xl:mt-[25px] xl:ml-[30px] xl:gap-1  xl:text-[14px] text-green-700 font-semibold
                "
              >
                {job.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="
                      /* Mobile / Tablet Styles */
                      px-4 py-2 bg-slate-200 rounded-[14px] flex items-center justify-center
                      /* Desktop Styles (Unchanged) */
                      xl:w-[205px] xl:h-[40px] xl:px-5 xl:py-2
                    "
                  >
                    <p className="text-[14px] xl:text-[16px] text-green-700 font-semibold text-center xl:w-[160px]">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights Section */}
              <div
                className="
                  /* Mobile / Tablet Styles */
                  w-full flex flex-col sm:flex-row justify-center xl:justify-between gap-3 sm:gap-4 mt-6 xl:mt-0
                  /* Desktop Styles (Unchanged) */
                  xl:w-[750px] xl:mt-[25px] xl:ml-[28px] xl:gap-3
                "
              >
                {/* Highlight 1 */}
                <div
                  className="
                    /* Mobile / Tablet Styles */
                    w-full sm:w-1/3 h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-700 px-4 py-3 flex items-center justify-center gap-1
                    /* Desktop Styles (Unchanged) */
                    xl:w-[270px] xl:px-8
                  "
                >
                  <RiUserSettingsLine className="w-6 h-6 xl:w-10 xl:h-8 text-white flex-shrink-0" />
                  <p className="text-[14px] xl:text-[16px] text-white font-bold truncate xl:w-[280px]">
                    {job.highlights[0]}
                  </p>
                </div>

                {/* Highlight 2 */}
                <div
                  className="
                    /* Mobile / Tablet Styles */
                    w-full sm:w-1/3 h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-100 px-4 py-3 flex items-center justify-center gap-1
                    /* Desktop Styles (Unchanged) */
                    xl:w-[250px] xl:gap-1 xl:px-8
                  "
                >
                  <FaRegCheckCircle className="w-5 h-5 xl:w-6 xl:h-6 text-green-900 flex-shrink-0" />
                  <span className="text-[14px] xl:text-[16px] text-green-900 font-bold truncate xl:w-[180px]">
                    {job.highlights[1]}
                  </span>
                </div>

                {/* Highlight 3 */}
                <div
                  className="
                    /* Mobile / Tablet Styles */
                    w-full sm:w-1/3 h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-100 px-4 py-3 flex items-center justify-center gap-1
                    /* Desktop Styles (Unchanged) */
                    xl:w-[250px] xl:gap-1 xl:px-6
                  "
                >
                  <img
                    src={a1}
                    alt=""
                    className="w-5 h-5 xl:w-6 xl:h-6 xl:mt-1 flex-shrink-0"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(20%) sepia(34%) saturate(1320%) hue-rotate(96deg) brightness(92%) contrast(94%)",
                    }}
                  />
                  <span className="text-[14px] xl:text-[16px] font-bold text-green-900 truncate xl:w-[280px]">
                    {job.highlights[2]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Healthcare;
