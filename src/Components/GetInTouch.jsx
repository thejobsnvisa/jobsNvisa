import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/Phone.svg";
import locationIcon from "../assets/Location.svg";
import background from "../assets/background.jpg";

const GetInTouch = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 pt-10 pb-10">
      <div
        className="relative w-full max-w-[1300px] min-h-[520px] rounded-tl-[40px] rounded-bl-[40px] rounded-tr-[40px] lg:rounded-tl-[80px] lg:rounded-tr-[80px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 bg-[#54C784B2]/70" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[520px] px-4 py-10 sm:px-6 sm:py-14">
          <h2 className="mb-14 text-3xl sm:text-4xl md:text-5xl font-normal text-center text-green-100 font-serif">
            Get In Touch
          </h2>
          <div className="w-full max-w-[1138px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white/80 backdrop-blur-md rounded-[20px] relative w-full min-h-[180px] sm:min-h-[220px] lg:w-[300px] p-6 sm:p-8 shadow-xl text-center mx-auto">
              <div className="absolute -top-6 -translate-x-1/2 h-[48px] w-[48px] bg-green-200 rounded-[18px] p-[8px] flex items-start justify-center">
                <a href="mailto:info@jobsnvisa.com.au">
                  <img src={emailIcon} alt="email" className="h-58 w-58" />
                </a>
              </div>
              <h3 className="text-xl text-orange-600 mb-3 mt-6">Email</h3>
              <p className="text-green-900 font-bold text-[16px]">info@jobsnvisa.com.au</p>
              <p className="text-emerald-900 mt-2">Response within 24 hours</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-[30px] relative w-full min-h-[180px] sm:min-h-[220px] lg:w-[300px] p-6 sm:p-8 shadow-xl text-center mx-auto">
              <a href="tel:+61387643335" className="absolute -top-6 -translate-x-1/2 h-[48px] w-[48px] bg-green-200 rounded-[18px] p-[8px] flex items-start justify-center">
                <img src={phoneIcon} alt="phone" className="h-58 w-58" />
              </a>
              <h3 className="text-xl text-orange-600 mb-3 mt-6">Phone</h3>
              <p className="text-green-900 font-bold text-[16px]">+61 3 8764 3335</p>
              <p className="text-emerald-900 mt-2">
                Monday – Friday <br />
                9:00 AM – 6:00 PM AEST
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-[30px] relative w-full min-h-[180px] sm:min-h-[220px] lg:w-[300px] p-6 sm:p-8 shadow-xl text-center mx-auto">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Australia"
                target="_blank"
                rel="noreferrer"
                className="absolute -top-6  -translate-x-1/2 h-[48px] w-[48px] bg-green-200 rounded-[18px] p-[8px] flex items-start justify-center"
              >
                <img src={locationIcon} alt="location" className="h-58 w-58" />
              </a>
              <h3 className="text-xl text-orange-600 mb-3 mt-6">Locations</h3>
              <p className="text-green-900 font-bold text-[16px]">
                Sydney, Melbourne, Brisbane
              </p>
              <p className="text-emerald-900 mt-2">Serving all of Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
