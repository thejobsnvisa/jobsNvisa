import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const url = "https://jobsnvisa.com.au/privacy-policy/";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Jobs N Visa</title>

        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your personal information."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta property="og:title" content="Privacy Policy | Jobs N Visa" />
        <meta
          property="og:description"
          content="Read our privacy policy to understand how we collect, use, and protect your personal information."
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://jobsnvisa.com.au/assets/d2.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
      </Helmet>

      <section className="max-w-[1420px] mx-auto px-3 sm:px-4 pt-6 md:pt-10 pb-12 overflow-x-hidden">
        <div className="flex flex-col items-center text-center mt-6 xl:mt-24">
          <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-4 sm:px-6 md:px-12 py-8 md:py-10 mt-20 xl:mt-8 md:mt-14">
            <img
              src={w1}
              alt="Background Decorative Vector"
              className="hidden md:block absolute top-[-56px] left-[-100px] opacity-90 md:top-[-40px] md:left-[-120px] w-[455px] h-[250px] rotate-[-23deg]"
            />

            <div className="relative z-10">
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-normal text-[#0D542B]">
                Home &gt; Privacy Policy
              </p>
              <h1 className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-green-950 text-center">
                Privacy Policy
              </h1>
              <p className="mt-3 max-w-[739px] sm:max-w-[720px] mx-auto text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
                How we collect, use, and protect your personal information
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-bold mt-2 text-gray-600">
                Last Updated : 1st January 2026
              </p>
              <img
                src={w2}
                alt="Background Accent Vector"
                className="hidden lg:block absolute top-[10px] left-[1040px] w-[224px] h-[105px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[900px] mx-auto mt-12 px-0 sm:px-2 md:px-4">
          <div className="bg-slate-300 rounded-[40px] bg-slate-300 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              Privacy Policy
            </h2>
            <div className="mt-4 border-t border-gray-600"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p className="mb-3">
                <b>The Jobs N Visa Pty Ltd (ABN 76 676 998 506)</b> <br />
                ("The Jobs N Visa", "we", "us" or "our")
              </p>
              <p>
                The Jobs N Visa understands the importance of protecting your
                personal information. We are committed to complying with the
                Privacy Act 1988 (Cth) and the Australian Privacy Principles
                (APPs). This Privacy Policy explains how we collect, use,
                disclose, and safeguard your personal information.
              </p>
              <br />
              <p>
                By providing your personal information to us or using our
                website www.jobsnvisa.com.au, you consent to the practices
                described in this Privacy Policy.
              </p>
            </div>
          </div>

          <div className="bg-green-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              1. What is Personal Information?
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                Personal information means information or an opinion that
                identifies you, or from which you are reasonably identifiable.
                Examples include your name, contact details, work history,
                education, and identification documents.
              </p>
              <br />
              <p>
                We may also collect sensitive information (such as health
                information, criminal record, or union/professional memberships)
                but only with your consent or where required by law.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              2. What Personal Information Do We Collect?
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <ul className="list-disc list-inside ml-4 sm:ml-6 md:ml-10 lg:ml-40 text-left sm:text-justify">
                <li>Your name, email address, and phone number, email</li>
                <li>Career history, résumé, references, education details.</li>
                <li>
                  Identification documents (e.g. passport, visa status, work
                  rights).
                </li>
                <li>
                  Financial information if related to payroll or invoicing.
                </li>
                <li>
                  Information provided by referees, clients, or government
                  agencies.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              3. What is Personal Information?
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We collect personal information directly from you (e.g. applications, phone calls, emails, website forms). We may also collect information from:
              </p>
              <br />
              <ul className="list-disc list-inside ml-4 sm:ml-6 md:ml-10 lg:ml-40 text-left sm:text-justify">
                <li>Employers and clients seeking staff.</li>
                <li>Referees or nominated contacts.</li>
                <li>Background/qualification checks.</li>
                <li>Government agencies where legally required.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              4. Why We Collect Your Information
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <ul className="list-disc list-inside ml-4 sm:ml-6 md:ml-10 lg:ml-40 text-left sm:text-justify">
                <li>Recruitment, labour hire, and job placement services.</li>
                <li>Assessing suitability for roles and conducting background checks.</li>
                <li>
                  Providing visa and migration support in partnership with qualified providers.
                </li>
                <li>
                  Payroll and administrative requirements.
                </li>
                <li>
                  Communicating with you regarding opportunities or services.
                </li>
                <li>
                  Complying with legal and regulatory obligations.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              5. Disclosure of Information
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <ul className="list-disc list-inside ml-4 sm:ml-6 md:ml-10 lg:ml-40 text-left sm:text-justify">
                <li>Employers or host organisations seeking candidates.</li>
                <li>Service providers (e.g. payroll, IT, migration agents).</li>
                <li>Identification documents (e.g. passport, visa status, work rights).</li>
                <li>Regulatory and government authorities as required by law.</li>
                <li>Overseas recipients, where necessary for recruitment (we will take reasonable steps to ensure privacy protections).</li>
              </ul>
              <br />
              <br />
              <p>
                We will not sell your personal information to third parties.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              6. Cookies & Website Data
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                Our website may use cookies and analytics tools to improve performance and user experience. You can disable cookies in your browser, but some site functions may be affected.
              </p>
            </div>
          </div>

          <div className="bg-green-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              7. Direct Marketing
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We may send you updates about job opportunities, visa services, and related information. You may opt out of marketing communications at any time by following unsubscribe instructions or contacting us directly.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              8. Access & Correction
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                You have the right to request access to the personal information we hold about you and to request corrections if it is inaccurate. To do so, please contact us (details below).
              </p>
            </div>
          </div>

          <div className="bg-green-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              9. Security
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We take reasonable steps to protect personal information from misuse, loss, unauthorised access, modification, or disclosure. Information may be stored electronically or in hard copy, accessible only by authorised staff.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              10. Complaints
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                If you have concerns about how your personal information is
                handled, please contact us at info@jobsnvisa.com.au. If you are
                not satisfied with our response, you may contact the Office of
                the Australian Information Commissioner (OAIC) via
                www.oaic.gov.au.
              </p>
            </div>
          </div>

          <div className="bg-green-50 mt-10 rounded-[40px] bg-green-50 md:rounded-[70px] p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              11. Contact Us
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p className="mb-3">
                <b>The Privacy Officer</b> <br />
                The Jobs N Visa Pty Ltd <br />
                VIC 3029 <br />
                Email: privacy@jobsnvisa.com.au
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
