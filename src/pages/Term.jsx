import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import { Helmet } from "react-helmet-async";

const Term = () => {
  const url = "https://jobsnvisa.com.au/terms/";

  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Jobs N Visa</title>

        <meta
          name="description"
          content="Read our terms and conditions to understand your rights and responsibilities when using our website."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Terms and Conditions | Jobs N Visa"
        />
        <meta
          property="og:description"
          content="Read our terms and conditions to understand your rights and responsibilities when using our website."
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
          <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-4 sm:px-6 mt-20 xl:mt-8 md:mt-14 md:px-12 py-8 md:py-10">
            <img
              src={w1}
              alt="Background Decorative Vector"
              className="hidden md:block absolute top-[-56px] left-[-100px] opacity-90 md:top-[-40px] md:left-[-120px] w-[455px] h-[250px] rotate-[-23deg]"
            />

            <div className="relative z-10">
              <p className="text-[14px] sm:text-[15px] md:text-[18px] text-center font-normal text-[#0D542B]">
                Home &gt; Terms of Service
              </p>
              <h1 className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-green-950 text-center">
                Terms of Service
              </h1>
              <p className="mt-3 max-w-[739px] sm:max-w-[720px] mx-auto text-[15px] sm:text-[16px] md:text-[20px] font-semibold text-green-700 text-center">
                Terms and conditions governing the use of our services
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
        <div className="w-full max-w-[900px] mx-auto mt-8 sm:mt-12 px-0 sm:px-2 lg:px-0">
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              1. Acceptance of Terms
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                This website, www.jobsnvisa.com.au, (“Website”) is owned and
                operated by The Jobs N Visa Pty Ltd (ABN 76 676 988 506) (“Jobs
                N Visa”, “we”, “us”, “our”). By accessing or using this Website,
                you accept these Terms and agree to be bound by them. If you do
                not agree, do not use this Website.
              </p>
              <br />
              <p>
                We may also collect sensitive information (such as health
                information, criminal record, or union/professional memberships)
                but only with your consent or where required by law.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              2. Nature of Services
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We provide recruitment, labour hire, consultation, and related
                visa services. Use of this Website or our services does not
                guarantee job placement, visa approval, or any specific outcome.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              3. Payments & Fees (Non-Refundable Policy)
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <ul className="list-disc list-inside ml-0 sm:ml-6 md:ml-20 text-left sm:text-justify">
                <li>
                  All payments made to us for consultations, recruitment, or
                  labour hire services are strictly non-refundable.
                </li>
                <li>
                  By making payment, you acknowledge and agree that no refunds,
                  reversals, credits, or chargebacks will be issued under any
                  circumstances.
                </li>
                <li>
                  Payments are for time, knowledge, and facilitation only, not
                  for guaranteed results.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              4. Website Access & Availability
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We endeavour to keep the Website accessible 24/7 but do not
                guarantee uninterrupted availability. Access may be suspended
                for maintenance, outages, or technical reasons.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              5. Intellectual Property
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                All Website content, including text, graphics, layouts,
                software, names, and logos, is owned or licensed by Jobs N Visa
                and protected under copyright and trademark laws.
              </p>
              <br />
              <ul className="list-disc list-inside ml-0 sm:ml-6 md:ml-20 text-left sm:text-justify">
                <li>You may view and use content for personal use only.</li>
                <li>
                  You must not reproduce, distribute, or adapt content without
                  written permission.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              6. Client Obligations
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>You agree to:</p> <br />
              <ul className="list-disc list-inside ml-0 sm:ml-6 md:ml-20 text-left sm:text-justify">
                <li>Provide truthful and accurate information at all times.</li>
                <li>
                  Not use the Website for unlawful, defamatory, harassing, or
                  objectionable purposes.
                </li>
                <li>
                  Maintain confidentiality of your login details and notify us
                  of unauthorised use.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              7. Job Vacancies & Recruitment
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <ul className="list-disc list-inside ml-0 sm:ml-6 md:ml-20 text-left sm:text-justify">
                <li>
                  Applications are assessed based on information submitted.
                </li>
                <li>
                  There is no guarantee of job availability, suitability, or
                  outcome.
                </li>
                <li>
                  Job postings may be withdrawn or amended without notice.
                </li>
                <li>
                  Final hiring decisions rest with the employer/client, not Jobs
                  N Visa.
                </li>
                <li>
                  You are responsible for seeking your own professional/legal
                  advice before accepting any role or offer.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              8. Privacy & Data Processing
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                Your use of the Website is subject to our Privacy Policy, which
                forms part of these Terms. You are responsible for any personal
                information submitted, including resumes, documents, and
                application data.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              9. Third-Party Websites & Social Media
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                Our Website and social media pages may link to third-party
                websites. We are not responsible for the content, accuracy, or
                practices of third parties. Accessing such sites is at your own
                risk and subject to their terms.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              10. Analytics & Cookies
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We collect anonymised analytics to improve services. Cookies may
                be used to enhance browsing. You can disable cookies in your
                browser, though this may affect site functionality.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              11. Liability & Indemnity
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                To the maximum extent permitted by law, Jobs N Visa, its
                officers, employees, and contractors are not liable for:
              </p>
              <br />
              <ul className="list-disc list-inside ml-0 sm:ml-6 md:ml-20 text-left sm:text-justify">
                <li>Your use or misuse of the Website.</li>
                <li>
                  Reliance on content, job postings, or third-party sites.
                </li>
                <li>Errors, omissions, viruses, hacking, or data breaches.</li>
                <li>Loss, damage, or outcomes arising from recruitment, consultation, or employment processes.</li>
              </ul>
              <br />
              <p>
                You agree to indemnify us against any claims or losses arising from your breach of these Terms, misuse of the Website, or provision of inaccurate information.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              12. Termination
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                We may terminate or suspend your Website access at any time without notice. These Terms will survive termination.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              13. Governing Law
            </h2>
            <div className="mt-4 border-t border-gray-700"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p>
                These Terms are governed by the laws of Victoria, Australia. Any disputes will be subject to the jurisdiction of the courts of Victoria.
              </p>
            </div>
          </div>
          <div className="bg-green-50 mt-10 rounded-[24px] sm:rounded-[40px] md:rounded-[70px] p-4 sm:p-6 md:p-10 shadow-[0px_4px_15px_2px_#93939340]">
            <h2 className="text-center text-green-700 font-bold text-[18px] sm:text-[20px] md:text-[16px]">
              14. Contact Us
            </h2>
            <div className="mt-4 border-t border-green-300"></div>
            <div className="mt-6 text-left sm:text-center text-gray-600 text-[13px] sm:text-[14px] md:text-[15px] max-w-[720px] mx-auto text-slate-500">
              <p className="mb-3">
                <b>For enquiries about these Terms, please contact:</b> <br />
                The Jobs N Visa Pty Ltd <br />
                Main business location: VIC 3029 <br />
                Email: privacy@jobsnvisa.com.au
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Term;
