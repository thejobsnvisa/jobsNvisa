import visionImage from "../assets/visionImage.png";
import bg1 from "../assets/bg1.jpg";

const Vision = () => {
  return (
    <section className="w-full px-4 mt-[40px] sm:mt-[60px] lg:mt-[70px]">
      <div
        className="relative mx-auto max-w-[1420px] min-h-[auto] sm:min-h-[520px] overflow-hidden rounded-[20px] sm:rounded-[40px] lg:rounded-[120px] bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6 sm:py-10"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(141,219,174,0.55),
              rgba(141,219,174,0.55)
            ),
            url(${bg1})
          `,
        }}
      >
        <div className="hidden xl:block absolute xl:left-0 xl:bottom-0 xl:w-[420px] xl:h-[380px]">
          <img
            src={visionImage}
            alt="Vision"
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>

        <div className="relative z-10 pt-6 sm:pt-10 xl:pt-8 pb-4 sm:pb-0 text-center px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-green-900">
            Our Vision
          </h2>

          <p className="mt-4 sm:mt-6 text-lg sm:text-2xl lg:text-[40px] font-medium text-amber-700">
            Building Bridges to New Beginnings
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-10 grid w-full max-w-[100%] gap-4 sm:gap-6 sm:max-w-[720px] sm:grid-cols-2 xl:absolute xl:left-[460px] lg:top-[40px] xl:top-[220px] xl:max-w-[800px] px-4 sm:px-0">
          <div className="rounded-[24px] sm:rounded-[30px] bg-white/90 p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-950 mb-2 sm:mb-3 text-center">
              Matching Top Talent
            </h2>
            <p className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-slate-600 text-center p-1 sm:p-4">
              To connect the right talent with the right opportunities across
              Australia, helping professionals build rewarding careers while
              supporting employers with skilled and dedicated people.
            </p>
          </div>

          <div className="rounded-[24px] sm:rounded-[30px] bg-white/90 p-4 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-950 mb-2 sm:mb-3 text-center">
              Global Leadership
            </h2>
            <p className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-slate-600 text-center p-1 sm:p-4">
              To establish Jobs N Visa as a leader in ethical, client-focused
              migration consulting, delivering exceptional results worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
