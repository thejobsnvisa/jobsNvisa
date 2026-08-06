import { useState } from "react";
import { Helmet } from "react-helmet-async";
import r1 from "../assets/recruiter.png";
import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import r4 from "../assets/r4.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r5 from "../assets/r5.png";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";
import c6 from "../assets/c6.svg";
import c7 from "../assets/c7.svg";
import c8 from "../assets/c8.svg";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import v1 from "../assets/v1.svg";
import v2 from "../assets/v2.svg";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import v3 from "../assets/v3.svg";
import v4 from "../assets/v4.svg";
import h1 from "../assets/h1.png";
import GetInTouch from "../Components/GetInTouch";

const Recruiter = () => {
  const url = "https://jobsnvisa.com.au/recruiters-services";
  const payrollCards = [
    {
      icon: c1,
      title: "Employer Peace of Mind",
      description: "Focus on growth while we manage your payroll end-to-end.",
    },
    {
      icon: c2,
      title: "Payroll Reporting",
      description:
        "Detailed reports for audits, finance, and management review.",
    },
    {
      icon: c3,
      title: "Compliance Management",
      description:
        "Stay compliant with payroll regulations and statutory requirements.",
    },
    {
      icon: c4,
      title: "Accurate Payroll Processing",
      description: "Timely and error-free salary calculations every pay cycle.",
    },
    {
      icon: c5,
      title: "Data Security",
      description:
        "Secure payroll data handling with confidentiality and protection.",
    },
    {
      icon: c6,
      title: "Employee Satisfaction",
      description: "Timely and transparent payroll boosts employee confidence.",
    },
    {
      icon: c7,
      title: "Scalable Solutions",
      description:
        "Payroll support that grows with your business requirements.",
    },
    {
      icon: c8,
      title: "Cost Efficiency",
      description: "Reduce operational overhead through payroll outsourcing.",
    },
  ];

  const payrollSlides = [payrollCards.slice(0, 4), payrollCards.slice(4, 8)];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState(undefined);

  // Permanent & Executive Recruitment section specific dataset configuration
  const executiveCards = [
    {
      id: 1,
      bgImage: d1,
      title: "Expertise in Permanent Hiring",
      description:
        "We specialise in identifying skilled professionals and leaders who align with your company’s vision.",
      icon: v1,
    },
    {
      id: 2,
      bgImage: d2,
      title: "Global Executive Search",
      description:
        "Our services include international executive search and visa assistance for overseas hires.",
      icon: v2,
    },
    {
      id: 3,
      bgImage: d3,
      title: "Quality-Driven Recruitment",
      description:
        "Our thorough screening and evaluation process ensures hiring the right talent for you.",
      icon: v3,
    },
    {
      id: 4,
      bgImage: d4,
      title: "Access to Senior Talent Network",
      description:
        "We connect you with experienced professionals, managers, and executives across various industries.",
      icon: v4,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Recruiter Services | Jobs N Visa</title>

        <meta
          name="description"
          content="Discover Jobs N Visa's Recruiter Services for candidate screening, vetting, onboarding, and retention support. Hire skilled employees with confidence."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Recruiter Services | Jobs N Visa"
        />
        <meta
          property="og:description"
          content="Discover Jobs N Visa's Recruiter Services for candidate screening, vetting, onboarding, and retention support. Hire skilled employees with confidence."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jobsnvisa.com.au/assets/recruiter.png" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
      </Helmet>
      <section className="max-w-[1420px] mx-auto px-4 pt-10 pb-12 overflow-x-hidden">
      <div className="flex flex-col items-center text-center mt-24 lg:mt-24">
        {/* Hero Section */}
        <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 md:px-12 py-8 md:py-10">
          {/* Background Image */}
          <img
            src={w1}
            alt="Background"
            className="hidden md:block absolute top-[-56px] left-[-100px] opacity-[90%] md:top-[-40px] md:left-[-120px] w-[455.35px] h-[303.56px] md:h-[250px] rotate-[-23deg]"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Breadcrumb */}
            <p className="text-[15px] md:text-[18px] font-normal text-[#0D542B]">
              Home &gt; Services &gt; Recruiter Services
            </p>
            {/* Title */}
            <h1 className="mt-5 text-[20px] md:text-[30px] font-bold text-green-950 text-center">
              Recruiter Services
            </h1>
            {/* Subtitle */}
            <p className="mt-3 max-w-[739px] mx-auto text-[16px] md:text-[20px]  font-semibold text-green-700 text-center">
              Find the right skilled employees and job-ready talent with
              confidence
            </p>
            <img
              src={w2}
              alt="Background"
              className="hidden lg:block absolute top-[54px] lg:top-[10px] left-[1040px] w-[224px] h-[105px] "
            />{" "}
          </div>
        </div>
        {/* Hero Card Banner */}
        <div className="w-full max-w-[1300px] min-h-auto lg:min-h-[420px] mt-10 rounded-2xl lg:rounded-tl-[70px] lg:rounded-tr-[70px] lg:rounded-br-[70px] bg-green-100 mx-auto relative overflow-hidden flex flex-col lg:block p-6 md:p-10 lg:p-0">
          <div className="relative lg:absolute lg:top-[60px] lg:left-[60px] flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-none">
            <h3 className="max-w-[455px] text-[26px] md:text-[32px] lg:text-[40px] font-semibold leading-[120%] text-[#475569]">
              Candidate Screening
              <br />
              &amp; Vetting Service
            </h3>
            <p className="max-w-[450px] mt-2 lg:mt-12 lg:ml-2 text-justify text-[15px] md:text-[15px] lg:text-[18px] leading-[150%] text-green-900">
              Comprehensive candidate screening and professional vetting
              solutions to ensure you hire the most qualified and vetted
              healthcare professionals for your organization. We conduct
              thorough background checks, credential verification, and skills
              assessments.
            </p>
          </div>
          <div className="relative lg:absolute w-full lg:w-[626px] h-[220px] md:h-[320px] lg:h-[411px] lg:left-[670px] lg:top-2 mb-6 lg:mb-0 order-1 lg:order-none">
            <img
              src={r1}
              alt="recruiter image"
              className="w-full h-full object-cover rounded-xl lg:rounded-none"
            />
          </div>
        </div>
      </div>

      {/* Onboarding & Retention Support */}
      <div className="w-full max-w-full lg:max-w-[1440px] lg:h-[500px] bg-white py-10 mt-6">
        <h3
          className="max-w-[800px] mx-auto mt-8 text-[26px] md:text-[34px] lg:text-[40px] font-bold text-amber-700 text-center px-4"
          style={{
            fontWeight: 700,
            lineHeight: "120%",
          }}
        >
          Onboarding & Retention Support
        </h3>
        <div className="max-w-[1350px] mx-auto mt-10 lg:mt-14 rounded-[40px] overflow-hidden px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 */}
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-full max-w-[400px]">
              <img
                src={r4}
                alt="Employee Onboarding"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end gap-2"
                style={{
                  background:
                    "linear-gradient(180.6deg, rgba(1, 188, 64, 0.05) 30.1%, rgba(1, 188, 64, 0.5) 56.87%, #008F30 99.49%)",
                }}
              >
                <h4 className="text-white text-center text-[18px] w-full font-semibold">
                  Employee Onboarding
                </h4>
                <ul className="text-slate-50 text-[14px] lg:text-[16px] w-full text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>System & Access Setup Support</li>
                  <li>Documentation & Joining Formalities</li>
                  <li>Orientation & Company Policy Briefing</li>
                </ul>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-full max-w-[400px]">
              <img
                src={r2}
                alt="Training & Development"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end gap-2"
                style={{
                  background:
                    "linear-gradient(180.6deg, rgba(1, 188, 64, 0.05) 30.1%, rgba(1, 188, 64, 0.5) 56.87%, #008F30 99.49%)",
                }}
              >
                <h4 className="text-white text-center text-[18px] w-full font-semibold">
                  Training & Development
                </h4>
                <ul className="text-slate-50 text-[14px] lg:text-[16px] w-full text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>Skill Enhancement & Upskilling</li>
                  <li>Role-Specific Training Programs</li>
                  <li>Performance Monitoring & Feedback</li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="rounded-[40px] overflow-hidden relative h-[286px] w-full max-w-[400px] md:col-span-2 lg:col-span-1">
              <img
                src={r3}
                alt="Retention & Engagement"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 p-6 flex flex-col justify-end gap-2"
                style={{
                  background:
                    "linear-gradient(180.6deg, rgba(1, 188, 64, 0.05) 30.1%, rgba(1, 188, 64, 0.5) 56.87%, #008F30 99.49%)",
                }}
              >
                <h4 className="text-white text-center text-[18px] w-full font-semibold">
                  Retention & Engagement
                </h4>
                <ul className="text-slate-50 text-[14px] lg:text-[16px] w-full text-center leading-[1.5] font-bold list-disc list-inside">
                  <li>Employee Engagement Initiatives</li>
                  <li>Attrition Analysis & Retention Strategy</li>
                  <li>Ongoing HR Support & Issue Resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Employers Trust Our Payroll Services */}
      <div
        className="w-full max-w-full lg:max-w-[1400px] h-auto lg:h-[460px] rounded-[30px] lg:rounded-[100px] overflow-hidden mx-auto relative mt-16 py-12 px-4"
        style={{ background: "#69D29A80" }}
      >
        <img
          src={r5}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#69D29A80]" />

        <div className="relative z-10">
          <p
            className="text-center text-[24px] md:text-[30px] lg:text-[35px] font-bold text-green-950 px-2"
          >
            Why Employers Trust Our Payroll Services
          </p>

          <div className="relative mt-10">

            <div className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {payrollSlides[currentSlide].map((card, index) => (
                 <div
                  key={index}
                  onMouseEnter={() => setSelectedIcon(index)}
                  onMouseLeave={() => setSelectedIcon(undefined)}
                  className="cursor-pointer transition-all duration-500 ease-out flex justify-center"
                >
                  <div
                    className={`flex flex-col items-center text-center rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] border bg-green-50 border-green-200 transition-all duration-500 ease-out ${
                      selectedIcon === index
                        ? "w-[250px] h-[260px] bg-[#F7FCF8] border-[#B9F8CF] px-4 pt-4 shadow-lg"
                        : "w-[132px] h-[125px] items-center justify-center"
                    }`}
                  >
                    <div className="w-[65px] h-[65px] rounded-[14px] border border-[#B9F8CF] bg-[#DCFCE7] flex items-center justify-center">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className={`object-contain ${selectedIcon === index ? "w-6 h-6" : "w-8 h-8"}`}
                      />
                    </div>
                    {selectedIcon === index && (
                      <>
                        <h3 className="mt-6 text-[18px] font-bold text-[#0A8A3D]">
                          {card.title}
                        </h3>
                        <p className="mt-4 text-[16px]  text-slate-500 leading-relaxed">
                          {card.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {payrollSlides.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  type="button"
                  onClick={() => setCurrentSlide(slideIndex)}
                  className={`h-3 w-3 mt-1 rounded-full transition-all ${
                    currentSlide === slideIndex
                      ? "bg-green-900"
                      : "bg-white border border-green-900/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Labour Hire Solutions */}
      <div className="w-full bg-white py-16">
        <div className="max-w-[1200px] mx-auto text-center px-4">
          <h2
            className="text-[26px] md:text-[32px] lg:text-[35px] font-bold text-green-900 mb-4"
            style={{
              fontWeight: 700,
              lineHeight: "120%",
            }}
          >
            Our Labour Hire Solutions
          </h2>
          <p
            className="text-[15px] md:text-[18px] lg:text-[20px] font-medium text-green-700 max-w-[650px] mx-auto mb-10"
            style={{
              fontWeight: 500,
              lineHeight: "140%",
            }}
          >
            Flexible, compliant workforce solutions tailored to your business
            needs
          </p>

          {/* Fully responsive layout grid that elegantly drops absolute positions on 1024px screens */}
          <div className="relative w-full flex flex-col md:grid md:grid-cols-1 lg:grid-cols-3 xl:block gap-6 items-center justify-center">
            {/* Box 1 */}
            <div className="w-full max-w-[310px] h-auto min-h-[210px] xl:absolute xl:top-[100px] xl:left-[10px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] p-6 bg-green-100 text-left shadow-sm">
              <p className="font-extrabold text-[14px] text-green-800">
                Temp-to-Perm Options
              </p>
              <p className=" font-normal text-[14px] mt-2 text-green-600">
                Trial workers before making permanent hiring decisions.
              </p>
              <ul className="font-medium text-[13px] text-green-900 mt-2 list-disc list-inside space-y-1">
                <li>Risk-free workforce evaluation</li>
                <li>Reduced hiring costs</li>
                <li>Smooth transition to permanent roles</li>
              </ul>
            </div>

            {/* Middle Graphic Asset */}
            <div className="w-full max-w-[450px] mx-auto md:col-span-2 lg:col-span-1 xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-0">
              <img
                src={h1}
                alt="h1"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            {/* Box 2 */}
            <div className="w-full max-w-[310px] h-auto min-h-[210px] xl:absolute xl:top-[10px] xl:right-[10px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] p-6 bg-green-100 text-left shadow-sm">
              <p className="font-extrabold text-[14px] text-green-800">
                Industry-Specific Labour
              </p>
              <p className="font-normal text-[14px] mt-2 text-green-600">
                Pre-screened workers matched to your industry requirements.
              </p>
              <ul className="font-medium text-[13px] text-green-900 mt-2 list-disc list-inside space-y-1">
                <li>Construction, hospitality, logistics</li>
                <li>Manufacturing & warehousing</li>
                <li>Skilled & semi-skilled roles</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="w-full max-w-[310px] h-auto min-h-[210px] md:col-span-1 lg:col-span-1 xl:absolute xl:top-[240px] md:right-[-50px] xl:right-[10px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] p-6 bg-green-100 text-left shadow-sm mx-auto">
              <p className="font-extrabold text-[14px] text-green-800">
                Screening & Readiness
              </p>
              <p className="font-normal text-[14px] mt-2 text-green-600">
                Every worker is vetted and job-ready before placement.
              </p>
              <ul className="font-medium text-[13px] text-green-900 mt-2 list-disc list-inside space-y-1">
                <li>Skill & experience checks</li>
                <li>Right-to-work verification</li>
                <li>Induction & safety briefing</li>
              </ul>
            </div>
          </div>

          <div className="hidden xl:block h-[450px]" />
        </div>
      </div>

      {/* Our Services Section */}
      <div className="w-full xl:w-[1440px] h-auto lg:h-[625px] bg-white py-10 lg:py-0">
        <div className="w-full xl:w-[1312px] h-auto lg:h-[384px] py-10 lg:pt-[60px] rounded-2xl lg:rounded-none lg:rounded-tr-[70px] lg:rounded-br-[70px] bg-green-100 px-4 md:px-8 lg:px-0">
          <p
            className="text-center text-[26px] md:text-[32px] lg:text-[35px] font-bold text-green-900"
            style={{
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            Our Services
          </p>
          <p
            className="w-full xl:w-[682px]  font-medium text-[15px] md:text-[18px] lg:text-[20px] xl:ml-[325px] mt-4 text-green-600 text-center "
            style={{
              lineHeight: "140%",
            }}
          >
            End-to-end recruitment solutions that deliver the right talent,
            faster
          </p>

          <div className="mt-10 lg:mt-20 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-[60px] px-2 md:px-4">
            {/* Service Box 1 */}
            <div className="relative w-full max-w-[450px] min-h-[300px] p-6 rounded-[40px] lg:rounded-[50px] bg-white shadow-[0px_35px_60px_-15px_rgba(0,88,41,0.25)] flex flex-col items-center justify-center">
              <div className="hidden lg:block absolute -inset-2 w-10 h-10 ml-[135px] lg:ml-[210px] mt-14 lg:mt-16 bg-green-600/90 blur-lg rounded-full"></div>{" "}
              <img
                src={p1}
                className="w-12 h-12 object-contain mb-4"
                alt="icon"
              />
              <p className="font-semibold text-[17px] md:text-[19px] lg:text-[20px] text-green-600 text-center px-2">
                Talent Sourcing & Screening
              </p>
              <ul className="w-full font-normal text-[14px] md:text-[16px] lg:text-[18px] text-slate-900 text-start mt-4 list-disc list-inside space-y-1">
                <li>Job requirement analysis & sourcing</li>
                <li>Resume shortlisting & initial screening</li>
                <li>Skill, experience & cultural fit evaluation</li>
              </ul>
            </div>

            {/* Service Box 2 */}
            <div className="relative w-full max-w-[450px] min-h-[300px] p-6 rounded-[40px] lg:rounded-[50px] bg-white shadow-[0px_35px_60px_-15px_rgba(0,88,41,0.25)] flex flex-col items-center justify-center">
              <div className="hidden lg:block absolute -inset-2 w-10 h-10 ml-[135px] sm:ml-[250px] lg:ml-[210px] mt-12 sm:mt-16 lg:mt-16 bg-green-600/90 blur-lg rounded-full"></div>
              <img
                src={p2}
                className="w-10 h-10 object-contain mb-4"
                alt="icon"
              />
              <p className="font-semibold text-[17px] md:text-[19px] lg:text-[20px] text-green-600 text-center px-2">
                Hiring, Onboarding & Support
              </p>
              <ul className="w-full font-normal text-[14px] md:text-[16px] lg:text-[18px] text-slate-900 text-start mt-4 list-disc list-inside space-y-1">
                <li>Interview coordination & offer management</li>
                <li>Background verification & documentation</li>
                <li>Seamless onboarding & post-hire support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Permanent & Executive Recruitment Section with Reveal-on-Hover Feature */}
      <div className="w-full max-w-[1440px] mx-auto bg-white py-10 mt-16 md:mt-24 lg:mt-32 mb-12 px-4">
        <h3
          className="max-w-[950px] mx-auto text-[24px] md:text-[30px] lg:text-[35px] font-bold text-green-900 text-center px-2"
          style={{
            fontWeight: 700,
            lineHeight: "130%",
          }}
        >
          Why Choose Us for Permanent & Executive Recruitment?
        </h3>

        <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {executiveCards.map((card) => (
            <div
              key={card.id}
              className="group relative w-full h-[320px] md:h-[380px] lg:h-[460px] rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 shadow-md"
            >
              {/* Default Image Display Layer */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Linear Gradient with Text Overlay for Default View */}
              <div
                className="absolute  transform -translate-x-1/2 bottom-0 flex flex-col justify-end px-5 pb-3 gap-[6px] transition-opacity duration-500 opacity-100 group-hover:opacity-0 rounded-b-[30px]"
                style={{
                  width: "100%",
                  height: 193,
                  background:
                    "linear-gradient(360deg, #006124 0%, rgba(2, 124, 47, 0.66) 43.72%, rgba(0, 151, 56, 0) 83.12%)",
                  opacity: 1,
                  transform: "rotate(0deg)",
                  paddingBottom: 12,
                }}
              >
                <p className="text-white text-center mb-4  lg:text-center font-bold text-[18px] md:text-[17px] leading-snug tracking-wide">
                  {card.title}
                </p>
              </div>

              {/* Clean Dark-Green Solid Info Screen Layer Revealed on Hover */}
              <div className="absolute inset-0 bg-[#056835] p-5 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto rounded-[30px]">
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="w-[41.67px] h-[41.67px] mb-3 object-contain"
                />
                <h4 className="text-white font-bold text-[15px] md:text-[16px] leading-tight mb-6">
                  {card.title}
                </h4>
                <p className="text-green-100  text-[13px] md:text-[15px] leading-relaxed max-w-[240px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GetInTouch />
    </section>
  </>
  );
};

export default Recruiter;
