import WhyChooseImage from "../assets/heartbeat.mp4";
import handshake from "../assets/Handshake.svg";
import space from "../assets/space.svg";
import shield from "../assets/shield.svg";
import medal from "../assets/Medal.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const WhyChoose = () => {
  const items = [
    {
      title: "Trusted Partnerships",
      desc: "Strong relationships with leading sponsors who trust us to find their ideal candidates.",
      image: handshake,
    },
    {
      title: "Fast Track Process",
      desc: "Streamlined application and placement process that gets you started quickly.",
      image: space,
    },
    {
      title: "Secure and Reliable",
      desc: "Licensed migration agents and registered employment services for your peace of mind.",
      image: shield,
    },
    {
      title: "Industry Expertise",
      desc: "Deep understanding of Australian job market trends and requirements across industries.",
      image: medal,
    },
  ];

  return (
    <section className="bg-white my-[100px] w-full px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Changed from relative container + absolute content to a clean background image block */}
        <div
          className="w-full min-h-[500px] md:min-h-[550px] rounded-[40px] flex flex-col items-center pt-[36px] md:pt-[60px] relative overflow-hidden"
        >
          <video
            src={WhyChooseImage}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-[40px] opacity-[80%]"
          />
          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Heading */}
            <h2
              className="text-[28px] sm:text-[32px] md:text-[40px] text-center text-green-800 font-bold px-4"
            >
              Why Choose Jobs N Visa?
            </h2>

            <p className="text-[18px] sm:text-[20px] text-center text-green-800 font-medium mt-2 px-4 max-w-[820px]">
              Your Success Is Our Achievement
            </p>

            {/* Slider */}
            <div className="w-full mt-8 md:mt-16 px-2 sm:px-4 md:px-12">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                loopedSlides={4} /* Forces Swiper to properly clone all items for smooth clicking */
                speed={800}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                pagination={{
                  clickable: true,
                }}
                spaceBetween={20}
                className="whyChooseSwiper !overflow-visible pb-14"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {items.map((item, idx) => (
                  <SwiperSlide key={idx} className="h-auto">
                    <div className="w-full max-w-[350px] min-h-[190px] rounded-[40px] bg-green-50 border border-green-200 p-6 mx-auto shadow-[0px_0px_10px_2px_#049F441A] flex flex-col sm:flex-row items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-green-600/80 blur-xl rounded-full"></div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="relative z-10 w-10 h-10 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-green-800 text-[20px] md:text-[22px] font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-green-800 text-[16px] font-medium leading-5 line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Styles */}
              <style>{`
                .whyChooseSwiper .swiper-pagination {
                  position: relative !important;
                  margin-top: 30px;
                  display: flex !important;
                  justify-content: center;
                  align-items: center;
                  gap: 8px;
                }

                .whyChooseSwiper .swiper-pagination-bullet {
                  width: 12px;
                  height: 12px;
                  background: #065f46 !important;
                  opacity: 0.35;
                  margin: 0 !important;
                }

                .whyChooseSwiper .swiper-pagination-bullet-active {
                  opacity: 1 !important;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;