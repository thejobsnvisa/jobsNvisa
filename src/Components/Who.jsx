import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import { Link } from "react-router-dom";
const Who = () => {
  return (
    <section className="w-full min-h-auto lg:min-h-[720px] bg-green-50 rounded-tl-[30px] lg:rounded-tl-[100px] rounded-tr-[30px] lg:rounded-tr-[100px] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-green-800 font-bold text-[40px] lg:text-[40px] mt-2">
          Who Is Jobs N Visa For?
        </h2>

        <p className="text-center text-green-700 text-lg lg:text-xl max-w-4xl mx-auto mt-6 px-4">
          Jobs N Visa is designed for professionals seeking global opportunities
          and employers looking for skilled talent.
        </p>

        {/* Flex container handles stacking on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-12 lg:mt-16">
          {/* Card 1 */}
          <div
            className="relative w-full max-w-[540px] h-[450px] rounded-tl-[30px] rounded-bl-[30px]  rounded-tr-[30px]  lg:rounded-bl-[80px] lg:rounded-tl-[80px] lg:rounded-tr-[80px] overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(#7AD7A0B2, #7AD7A0B2), url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center  px-6 text-center">
              <h3 className="font-semibold text-[24px] text-green-900 mb-4">
                For Job Seekers
              </h3>
              <p className="w-full max-w-[430px] text-[16px] lg:text-[18px] leading-8 font-bold text-green-900 mt-2">
                Offering complete guidance in finding Australian job
                opportunities so that global talent can work and settle abroad
                smoothly.
              </p>
              <div className="flex flex-col items-center mt-6">
                <ul className="w-full max-w-[295px] text-left font-bold text-[14px] lg:text-[16px] text-green-800 space-y-2 mb-8">
                  <li>• Verified and trusted job openings</li>
                  <li>• Complete work visa guidance</li>
                  <li>• Support for overseas career start</li>
                </ul>
                <button className=" w-[244px] h-[48px] pt-[12px] pr-[70px] pb-[12px] pl-[70px] gap-[4px] bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] font-medium transition">
                  <Link to="/job-search">Explore Jobs</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-full max-w-[540px] h-[450px] rounded-tl-[30px] rounded-bl-[30px]  rounded-tr-[30px] lg:rounded-bl-[80px] lg:rounded-tl-[80px] lg:rounded-tr-[80px] overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(#7AD7A0B2, #7AD7A0B2), url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
              <h3 className="font-semibold text-[24px] text-green-900 mb-4">
                For Employers
              </h3>
              <p className="w-full max-w-[430px] text-[16px] lg:text-[18px] font-bold leading-8 text-green-900 mt-2">
                Providing end-to-end support to hire skilled global talent and
                manage visa sponsorships without any hassle.
              </p>
              <div className="flex flex-col items-center mt-6">
                <ul className="w-full max-w-[447px] text-left font-bold text-[14px] lg:text-[16px] text-green-800 space-y-2 mb-8">
                  <li>• Access to pre-screened international candidates</li>
                  <li>• Labour agreement & visa guidance</li>
                  <li>• Assistance throughout recruitment and onboarding</li>
                </ul>
                <button className=" w-[244px] h-[48px] pt-[12px] pr-[70px] pb-[12px] pl-[70px] gap-[4px] bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] font-medium transition">
                  <Link to="/recruiters-services">Hire Talent</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
