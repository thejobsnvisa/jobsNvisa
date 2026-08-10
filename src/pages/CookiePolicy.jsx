import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  const url = "https://jobsnvisa.com.au/cookie-policy/";

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Jobs N Visa</title>

        <meta
          name="description"
          content="Read our cookie policy to understand how we use cookies and similar technologies on our website."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta property="og:title" content="Cookie Policy | Jobs N Visa" />
        <meta
          property="og:description"
          content="Read our cookie policy to understand how we use cookies and similar technologies on our website."
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://jobsnvisa.com.au/assets/d2.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
      </Helmet>
      <section className="max-w-[1420px] mx-auto px-4 pt-6 md:pt-10 pb-12 overflow-x-hidden">
        <div className="flex flex-col items-center text-center mt-6 xl:mt-24">
          <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 mt-20 xl:mt-8 md:mt-14 md:px-12 py-8 md:py-10">
            <img
              src={w1}
              alt="Background Decorative Vector"
              className="hidden md:block absolute top-[-56px] left-[-100px] opacity-90 md:top-[-40px] md:left-[-120px] w-[455px] h-[250px] rotate-[-23deg]"
            />

            <div className="relative z-10">
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-normal text-[#0D542B]">
                Home &gt; Cookie Policy
              </p>
              <h1 className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-green-950 text-center">
                Cookie Policy
              </h1>
              <p className="mt-3 max-w-[739px] sm:max-w-[720px] mx-auto text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
                How we use cookies and similar technologies on our website
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-bold mt-2 text-gray-600">
                Last Updated : 1st January 2026
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-bold mt-2 text-gray-600">
                Effective Date : 1st January 2026
              </p>
              <img
                src={w2}
                alt="Background Accent Vector"
                className="hidden lg:block absolute top-[10px] left-[1040px] w-[224px] h-[105px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[900px] mx-auto mt-8 sm:mt-12 px-2 sm:px-4 lg:px-0">
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[70px] p-5 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              1. What Are Cookies?
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile) when you visit a website. They are
                widely used to make websites work more efficiently and to
                provide information to website owners about how users interact
                with their sites.
              </p>
              <br />
              <p>
                Cookies can be "persistent" (remaining on your device until
                deleted or expired) or "session" cookies (deleted when you close
                your browser).
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              2. How We Use Cookies
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                JobsNVisa uses only essential cookies to enable basic website
                functionality and remember your preferences (such as theme
                selection). We do not use cookies for analytics, advertising, or
                tracking purposes.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              3. Types of Cookies We Use
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We use only essential cookies required for the website to
                function properly and to remember your theme preference
                (light/dark mode). No analytics, marketing, or third-party
                cookies are set by our website.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              4. Third-Party Cookies
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We do not use any third-party cookies or tracking technologies
                on our website.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              5. Managing Your Cookie Preferences
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                You can control or delete cookies through your browser settings
                at any time. Since we only use essential cookies, disabling
                cookies may affect basic site functionality such as theme
                preference.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              6. Impact of Disabling Cookies
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                If you disable cookies, some basic features such as theme
                selection may not work as intended. No other functionality or
                personalisation is affected.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              7. Mobile App Tracking
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We do not use tracking technologies in our mobile applications.
                Only essential app data is stored for functionality.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              8. Updates to This Policy
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or legal requirements. Please check
                this page for the latest information.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              9. Contact Us
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                If you have questions about our use of cookies or this Cookie
                Policy, please contact us:
              </p>
              <br />
              <p className="mb-3">
                <b>JobsNVisa Privacy Team</b> <br />
                Email: privacy@jobsnvisa.com.au <br />
                Phone: +61 3 8764 3335 <br />
                Address: Level 10, 123 Collins Street, Melbourne VIC 3000
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[40px]  bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[20px] md:text-[16px]">
              10. Cookie Consent
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                By using our website, you consent to our use of essential
                cookies as described in this policy. You can withdraw your
                consent at any time by adjusting your browser settings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
