import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import page from "../assets/JNV.jpg";
import brochurePdf from "../assets/brochure.pdf";
import { Helmet } from "react-helmet-async";

const Brochures = () => {
  const url = "https://jobsnvisa.com.au/brochures/";

  return (
    <>
      <Helmet>
        <title>Brochures | Jobs N Visa</title>

        <meta
          name="description"
          content="Discover Jobs N Visa's Brochures for more information about our services."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta property="og:title" content="Brochures | Jobs N Visa" />
        <meta
          property="og:description"
          content="Discover Jobs N Visa's Brochures for more information about our services."
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://jobsnvisa.com.au/assets/JNV.jpg"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Brochures | Jobs N Visa" />
        <meta property="twitter:description" content="Discover Jobs N Visa's Brochures for more information about our services." />
        <meta property="twitter:image" content="https://jobsnvisa.com.au/assets/JNV.jpg" />
      </Helmet>
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
                Home &gt; Brochures
              </p>
              {/* Title */}
              <h1 className="mt-5 text-[20px] md:text-[30px] font-bold text-green-950 text-center">
                Brochures   
              </h1>
              {/* Subtitle */}
              <p className="mt-3 max-w-[739px] mx-auto text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
                Find answers to your questions and get the support you need
              </p>
              <img
                src={w2}
                alt="Background"
                className="hidden lg:block absolute top-[54px] lg:top-[10px] left-[1040px] w-[224px] h-[105px] "
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center relative">

          {/* Brochure Viewer */}
          <div
            className="w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl bg-white relative"
          >
            {/* Page Container */}
            <div className="relative w-full h-[500px] md:h-[700px] lg:max-h-[2400px] md:max-h-[900px] flex items-center justify-center bg-gray-100 overflow-hidden" >
                  {/* Clickable preview that opens modal */}
                  <img
                    src={page}
                    alt="Jobs N Visa Brochure"
                    className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                </div>
            </div>

          <a
            href={brochurePdf}
            download="JobsNVisa_Brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition transform duration-300 hover:bg-green-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Download Jobs N Visa brochure"
          >
            Download Brochure
          </a>
        </div>
      </section>
    </>
  );
};

export default Brochures;
