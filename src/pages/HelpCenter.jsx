import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import { Helmet } from "react-helmet-async";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/Phone.svg";
import background from "../assets/background.jpg";
import { HiOutlineChat } from "react-icons/hi";

const HelpCenter = () => {
  const url = "https://jobsnvisa.com.au/help-center";

  return (
    <>
      <Helmet>
        <title>Help Center | Jobs N Visa</title>

        <meta
          name="description"
          content="Discover Jobs N Visa's Help Center for assistance with your questions and support needs."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta property="og:title" content="Help Center | Jobs N Visa" />
        <meta
          property="og:description"
          content="Discover Jobs N Visa's Help Center for assistance with your questions and support needs."
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
                Home &gt; Help Center
              </p>
              {/* Title */}
              <h1 className="mt-5 text-[20px] md:text-[30px] font-bold text-green-950 text-center">
                Help Center
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
          <div className="w-full flex justify-center px-4 sm:px-6 pt-10 pb-10">
            <div
              className="relative w-full max-w-[1300px] min-h-[520px] rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] lg:rounded-tl-[80px] lg:rounded-tr-[80px] overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <div className="absolute inset-0 bg-[#54C784B2]/70" />
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[520px] px-4 py-10 sm:px-6 sm:py-14">
                <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-normal text-center text-green-100">
                  Still Need Help?
                </h2>
                <p className="mb-14 mt-2 text-xl sm:text-[18px] md:text-[20px] font-semibold text-center text-green-100 ">
                  Our support team is here to assist you
                </p>
                <div className="w-full max-w-[1138px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <div className="bg-white/90 backdrop-blur-md rounded-[30px] relative w-full min-h-[180px] lg:w-[320px] p-6 sm:p-8 shadow-xl text-center mx-auto">
                    <div className="absolute  -top-6 -translate-x-1/2 h-[48px] w-[48px] bg-green-200 rounded-[12px] p-[8px] flex items-center justify-center">
                      <a href="mailto:info@jobsnvisa.com.au">
                        <img
                          src={emailIcon}
                          alt="email"
                          className="h-54 w-54"
                        />
                      </a>
                    </div>
                    <h3 className="text-xl text-orange-600 mb-3 mt-2">Email</h3>
                    <p className="text-amber-950 font-semibold text-[15px] mb-2">
                      Send us your questions via email
                    </p>
                    <p className="text-green-900 font-bold text-[16px]">
                      info@jobsnvisa.com.au
                    </p>
                    <p className="text-green-700 mt-1">
                      Response within 24 hours
                    </p>
                    <a
                      href="mailto:info@jobsnvisa.com.au"
                      className="mt-12 inline-flex items-center justify-center rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-300 px-6 py-2 text-sm font-semibold text-green-800 shadow-lg"
                    >
                      Send Mail
                    </a>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md rounded-[30px] relative w-full min-h-[180px] lg:w-[320px] p-6 sm:p-8 shadow-xl text-center mx-auto">
                    <a
                      href="tel:+61387643335"
                      className="absolute  -top-6 -translate-x-1/2 h-[48px] w-[48px] bg-green-200 rounded-[12px] p-[8px] flex items-center justify-center"
                    >
                      <img src={phoneIcon} alt="phone" className="h-54 w-54" />
                    </a>
                    <h3 className="text-xl text-orange-600 mb-3 mt-2">Phone</h3>
                    <p className="text-amber-950 font-semibold text-[15px] mb-2">
                      Speak directly with our support team
                    </p>
                    <p className="text-green-900 font-bold text-[16px]">
                      +61 3 8764 3335
                    </p>
                    <p className="text-green-600 mt-1">
                      Monday – Friday <br />
                      9:00 AM – 6:00 PM AEST
                    </p>
                    <a
                      href="tel:+61387643335"
                      className="mt-6 inline-flex items-center justify-center  rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-300 px-6 py-2 text-sm font-semibold text-green-800 shadow-lg "
                    >
                      Call Now
                    </a>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md rounded-[30px] relative w-full min-h-[180px] lg:w-[320px] p-6 sm:p-8 shadow-xl text-center mx-auto">
                    <div className="absolute  -top-6 -translate-x-1/2 h-[48px] w-[48px] bg-green-200 rounded-[12px] p-[8px] flex items-center justify-center">
                      <HiOutlineChat className="h-[120px] w-[120px] font-bold text-green-800" />
                    </div>
                    <h3 className="text-xl text-orange-600 mb-3 mt-2">
                      Live Chat
                    </h3>
                    <p className="text-amber-950 font-semibold text-[15px] mb-2">
                      Chat with our support team in real time
                    </p>
                    <p className="text-green-900 font-bold text-[16px]">
                      Available Now
                    </p>
                    <p className="text-green-600 mt-1">
                      Average response: 2 mins
                    </p>
                    <button
                      type="button"
                      className="mt-6 inline-flex items-center justify-center rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-300 px-6 py-2 text-sm font-semibold text-green-800 shadow-lg "
                    >
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenter;
