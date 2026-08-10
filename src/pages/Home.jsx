import About from "../Components/About";
import Hero from "../Components/Hero";
import Vision from "../Components/Vision";
import WhyChoose from "../Components/WhyChoose";
import Who from "../Components/Who";
import FAQ from "../Components/FAQ";
import GetInTouch from "../Components/GetInTouch";
import c3 from "../assets/Frame357.svg";
import GPRecruitmentSolutions from "../Components/GPRecruitmentSolutions";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const url = "https://jobsnvisa.com.au/";
  const offerIcon = c3;
    const offerItems = [{ icon: offerIcon }];
  return (
    <>
      <Helmet>
  <title>Jobs N Visa | Hire Talent & Find Skilled Jobs in Australia</title>

  <meta
    name="description"
    content="Jobs N Visa is the leading platform for hiring skilled talent and finding job opportunities in Australia. Get expert support for skilled migration, PR visas, and employer-sponsored visas."
  />

  <link rel="canonical" href={url} />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Jobs N Visa | Hire Talent & Find Skilled Jobs in Australia"
  />

  <meta
    property="og:description"
    content="Jobs N Visa is the leading platform for hiring skilled talent and finding job opportunities in Australia. Get expert support for skilled migration, PR visas, and employer-sponsored visas."
  />

  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Jobs N Visa" />

  <meta
    property="og:image"
    content="https://jobsnvisa.com.au/assets/q1.jpg"
  />

  <meta
    property="og:image:width"
    content="1200"
  />

  <meta
    property="og:image:height"
    content="630"
  />

  <meta
    property="og:image:alt"
    content="Jobs N Visa - Jobs and Visa Opportunities in Australia"
  />

  {/* Twitter / X */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Jobs N Visa | Hire Talent & Find Skilled Jobs in Australia"
  />

  <meta
    name="twitter:description"
    content="Jobs N Visa is the leading platform for hiring skilled talent and finding job opportunities in Australia. Get expert support for skilled migration, PR visas, and employer-sponsored visas."
  />

  <meta
    name="twitter:image"
    content="https://jobsnvisa.com.au/assets/q1.jpg"
  />

  <meta
    name="twitter:image:alt"
    content="Jobs N Visa - Jobs and Visa Opportunities in Australia"
  />
</Helmet>
      <div>
        <Hero />
        <About />
        <Vision />
        <WhyChoose />
        <Who />
         <div className="w-full max-w-[1440px] mx-auto mt-10 px-5 lg:px-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="w-full flex flex-col mt-6">
                <h3 className="text-4xl text-center font-bold leading-tight text-slate-700">
                  What We Offer
                </h3>
                <h6 className="mt-3 text-[18px] lg:text-[24px] font-semibold text-center leading-tight text-slate-500">
                  Expert GP recruitment you can trust
                </h6>
                <div className="mt-8 flex flex-col sm:flex-row gap-[50px]">
                  {offerItems.map((item, idx) => (
                    <img
                      key={idx}
                      src={item.icon}
                      alt={item.title || ""}
                      className="w-78 h-80 mx-auto block xl:ml-[150px] lg:ml-[20px] md:ml-[-10px] sm:ml-[50px] sm:mt-0 mt-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
      <GPRecruitmentSolutions />
        <FAQ />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
