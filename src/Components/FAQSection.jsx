import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = {
  General: [
    {
      question: "What is JobsNVisa?",
      answer:
        "At JobsNVisa, we specialise in connecting businesses like yours with top-tier talent from across the globe. With a deep understanding of the international job market and a proven track record in staffing, we take the complexity out of hiring—ensuring you have access to the skilled labour you need to thrive.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing depends on the services you require. Contact our team for a personalised quote.",
    },
    {
      question: "Which industries do you specialise in?",
      answer:
        "We recruit for Healthcare, Construction, Hospitality, Engineering, IT, Education and many more industries.",
    },
  ],

  Applications: [
    {
      question: "How do I apply for a job?",
      answer:
        "Create your account, upload your resume, browse jobs and submit your application online.",
    },
    {
      question: "Can I apply for multiple jobs?",
      answer:
        "Yes. You can apply for as many suitable jobs as you like.",
    },
    {
      question: "Can I edit my application?",
      answer:
        "Yes. You can update your profile and resume before applying for another position.",
    },
  ],

  Visas: [
    {
      question: "Do you assist with Australian visas?",
      answer:
        "Yes. Our migration specialists help with employer sponsored, skilled migration, student and regional visas.",
    },
    {
      question: "Which visa is suitable for me?",
      answer:
        "Our consultants assess your eligibility and recommend the best visa pathway.",
    },
    {
      question: "Do employers provide sponsorship?",
      answer:
        "Many employers listed on JobsNVisa provide sponsorship opportunities.",
    },
  ],

  Employment: [
    {
      question: "Can employers recruit internationally?",
      answer:
        "Yes. We help employers recruit qualified professionals from around the world.",
    },
    {
      question: "How long does recruitment take?",
      answer:
        "Recruitment timelines vary depending on the role, visa requirements and candidate availability.",
    },
    {
      question: "Do you verify candidates?",
      answer:
        "Yes. Every candidate goes through our verification process before employer recommendations.",
    },
  ],
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState();

  const faqs = faqData[activeCategory];

  return (
    <section className="w-screen bg-[#F1FFF5] py-16 px-4">
      <div className="max-w-full mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] md:text-[42px] font-semibold text-[#065F46]">
            Frequently Asked Questions
          </h2>

          <p className="text-[#4B5563] mt-3">
            Find answers to the most common questions
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex();
              }}
              className={`px-7 py-3 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-[#68E18D] text-[#065F46]"
                    : "bg-[#DDFBE8] text-[#065F46] hover:bg-[#CFF6DD]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-[760px] mx-auto mt-12 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-[#E7FBEF] border border-[#CDEED8] overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-[#065F46]">
                  {item.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[#4B5563] leading-7">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}