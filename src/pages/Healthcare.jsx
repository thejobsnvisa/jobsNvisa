import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import d1 from "../assets/d1.png";
import a1 from "../assets/arrow.png";
import { LuClock3 } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { LuBriefcase } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";

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
    <section className="max-w-[1420px] mx-auto px-4 pt-10 pb-12 overflow-x-hidden">
      <div className="flex flex-col items-center text-center mt-24 lg:mt-24">
        {/* Breadcrumb */}
        <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 md:px-12 py-8 md:py-10">
          {/* Background Image */}
          <img
            src={w1}
            alt="Background"
            className="hidden md:block absolute top-[-56px] left-[-120px] md:top-[-40px] md:left-[-120px] w-[455.35px] h-[303.56px] md:h-[250px] rotate-[-23deg]"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Breadcrumb */}
            <p className="text-[15px] md:text-[18px] font-normal text-[#0D542B]">
              Home &gt; Healthcare
            </p>
            {/* Title */}
            <h1 className="mt-5 text-[20px] md:text-[30px] font-bold text-green-950 text-center">
              Healthcare Professionals
            </h1>
            {/* Subtitle */}
            <p className="mt-3 max-w-[739px] mx-auto text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
              Comprehensive Guide to Healthcare Careers in Australia
            </p>
            <img
              src={w2}
              alt="Background"
              className="hidden lg:block absolute top-[54px] lg:top-[10px] left-[1040px] w-[224px] h-[105px] "
            />{" "}
          </div>
        </div>
      </div>
      <div className="space-y-14 mt-14">
        {healthcareJobs.map((job, index) => (
          <div
            key={index}
            className="w-[1280px] h-[590px] rounded-[70px] bg-slate-50 shadow-lg ml-12 flex overflow-hidden"
          >
            {/* Left */}
            <div className="w-[335px] h-[420px] ml-[81px] mt-[81px] rounded-[45px] bg-green-200">
              <img
                src={job.image}
                alt={job.title}
                className="w-[334px] h-[393px] rounded-[30px] ml-[-40px] mt-[-30px]"
              />

              <p className="w-[161px] h-[30px] mt-3 ml-20 text-green-700 text-[20px] font-semibold">
                {job.category}
              </p>
            </div>

            {/* Right */}
            <div>
              <p className="w-[494px] h-[45px] mt-[40px] ml-[50px] text-green-700 text-[30px] font-semibold">
                {job.title}
              </p>

              <p className="w-[751px] h-[87px] mt-[20px] ml-[50px] text-slate-500 text-[16px]">
                {job.description}
              </p>

              <div className="w-[750px] mt-[-10px] ml-[50px] border border-slate-300"></div>

              {/* Job Info */}
              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center gap-3 ml-[80px]">
                  <LuClock3 className="w-7 h-7 text-[#009A44]" />
                  <div>
                    <p className="text-[16px] text-slate-600">Job Type</p>
                    <p className="text-[18px] font-semibold">{job.jobType}</p>
                  </div>
                </div>

                <div className="h-14 w-px bg-gray-300"></div>

                <div className="flex items-center gap-3 mr-[40px]">
                  <LuBriefcase className="w-7 h-7 text-[#009A44]" />
                  <div>
                    <p className="text-[16px] text-slate-600">Experience</p>
                    <p className="text-[18px] font-semibold">
                      {job.experience}
                    </p>
                  </div>
                </div>

                <div className="h-14 w-px bg-gray-300"></div>

                <div className="flex items-center gap-3 mr-[60px]">
                  <LuMapPin className="w-7 h-7 text-[#009A44]" />
                  <div>
                    <p className="text-[16px] text-slate-600">Location</p>
                    <p className="text-[18px] font-semibold">{job.location}</p>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Qualifications */}
              <div className="w-[725px] mt-[38px] ml-[50px] flex justify-between">
                <div className="w-[340px]">
                  <h3 className="text-[20px] font-semibold text-[#00A651] mb-3">
                    Key Responsibilities
                  </h3>

                  <ul className="list-disc pl-5 text-[16px] text-slate-600 space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="w-[320px]">
                  <h3 className="text-[20px] font-semibold text-[#00A651] mb-3">
                    Qualifications
                  </h3>

                  <ul className="list-disc pl-5 text-[16px] text-slate-600 space-y-2">
                    {job.qualifications.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div className="flex justify-between w-[739px] mt-[25px] ml-[40px] gap-2">
                {job.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="w-[195px] h-[40px] rounded-[14px] bg-slate-200 px-5 py-2"
                  >
                    <p className=" w-[160px] text-[16px] text-green-700 font-semibold text-center">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex justify-between w-[739px] mt-[25px] ml-[40px] gap-5">
                <div className="flex items-center gap-3 w-[250px] h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-700 px-8 py-3">
                  <RiUserSettingsLine className="w-10 h-10 text-white" />
                  <p className="w-[280px] text-[16px] text-white font-bold">
                    {job.highlights[0]}
                  </p>
                </div>

                <div className="flex items-center gap-5 w-[250px] h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-100 px-8 py-3">
                  <FaRegCheckCircle className="w-6 h-6 text-green-900" />
                  <span className="w-[180px] text-[16px] text-green-900 font-bold">
                    {job.highlights[1]}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-[250px] h-[44px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-100 px-6 py-3">
                  <img
                    src={a1}
                    alt=""
                    className="w-6 h-6 mt-1"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(20%) sepia(34%) saturate(1320%) hue-rotate(96deg) brightness(92%) contrast(94%)",
                    }}
                  />
                  <span className="w-[280px] text-[16px] font-bold text-green-900">
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
