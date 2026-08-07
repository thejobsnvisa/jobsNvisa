import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import page1 from "../assets/1.jpg";
import page2 from "../assets/2.jpg";
import page3 from "../assets/3.jpg";
import page4 from "../assets/4.jpg";
import page5 from "../assets/5.jpg";
import page6 from "../assets/6.jpg";
import page7 from "../assets/7.jpg";
import page8 from "../assets/8.jpg";
import page9 from "../assets/9.jpg";
import brochurePdf from "../assets/brochure.pdf";
import { Helmet } from "react-helmet-async";
import { useCallback, useEffect, useState } from "react";

const Brochures = () => {
  const url = "https://jobsnvisa.com.au/brochures";
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9;

  const changePage = useCallback(
    (dir) => {
      setCurrentPage((prev) => {
        const next = prev + dir;
        if (next < 1 || next > totalPages) return prev;
        return next;
      });
    },
    [totalPages]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") changePage(1);
      if (e.key === "ArrowLeft") changePage(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changePage]);

  const pages = [
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
  ];

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
          content="https://jobsnvisa.com.au/assets/r4.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
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
            className="w-full max-w-7xl rounded-lg overflow-hidden shadow-2xl bg-white relative"
          >
            {/* Page Container */}
            <div className="relative w-full h-96 md:h-screen max-h-[600px] md:max-h-[800px] flex items-center justify-center bg-gray-100 overflow-hidden">
              {pages.map((page, idx) => (
                <div
                  key={idx}
                  className="absolute w-full h-full transition-all duration-700 ease-out"
                  style={{
                    transform:
                      idx + 1 < currentPage
                        ? "rotateY(-140deg)"
                        : "rotateY(0deg)",
                    opacity: idx + 1 < currentPage ? 0 : 1,
                    pointerEvents: idx + 1 < currentPage ? "none" : "auto",
                    zIndex: totalPages - idx,
                    transformOrigin: "left center",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={page}
                    alt={`Page ${idx + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute mt-10 bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-5 bg-white bg-opacity-90 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
              <button
                onClick={() => changePage(-1)}
                disabled={currentPage === 1}
                className="w-11 h-11 rounded-full border-2 border-green-600 text-green-600 font-bold text-xl flex items-center justify-center hover:bg-green-600 hover:text-white hover:shadow-lg transition-all duration-200 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                ‹
              </button>
              <span className="text-gray-700 font-semibold min-w-[60px] text-center">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => changePage(1)}
                disabled={currentPage === totalPages}
                className="w-11 h-11 rounded-full border-2 border-green-600 text-green-600 font-bold text-xl flex items-center justify-center hover:bg-green-600 hover:text-white hover:shadow-lg transition-all duration-200 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                ›
              </button>
            </div>
          </div>

          <a
            href={brochurePdf}
            download
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
