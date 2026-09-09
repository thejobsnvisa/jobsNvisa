"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ data
const faqs = [
  {
    question: "Which occupations and industries do you recruit for?",
    answer:
      "We have strong expertise in healthcare recruitment and also recruit across a wide range of industries, including hospitality, engineering, trades, and other sectors where skilled professionals are in demand across Australia.",
  },
  {
    question: "Do you recruit candidates from all countries?",
    answer:
      "Yes. We welcome applications from candidates worldwide. Recruitment is based on the employer's requirements, your qualifications, relevant experience, and your eligibility to work in Australia.",
  },
  {
    question: "How do I apply for jobs through Jobs N Visa?",
    answer:
      "Simply submit your CV through our website or contact our team. We'll review your profile, assess your eligibility, and match your skills with suitable job opportunities in Australia.",
  },
   {
    question: "Do you guarantee employment or a job offer?",
    answer:
      "No. We don’t guarantee interviews, job offers, or employment. We connect suitable candidates with Australian employers based on their skills, qualifications, experience, and the available roles. The final decision to interview or hire always rests with the employer.",
  },
   {
    question: "Do candidates have to pay a recruitment or placement fee?",
    answer:
      "No. Jobs N Visa does not charge candidates a recruitment fee simply for introducing them to an Australian employer. Be cautious of anyone asking you to pay for a guaranteed job, employment outcome, or visa.",
  },
  {
    question: "What support does Jobs N Visa provide during the recruitment process?",
    answer:
      "From reviewing your profile and matching you with suitable opportunities to coordinating with employers and providing guidance on employer-sponsored visa pathways, our team supports you throughout every stage of your recruitment journey.",
  },
  {
    question: "Do I need a job offer before applying for an employer-sponsored visa?",
    answer:
      "Generally, yes. Most employer-sponsored visa pathways require a suitable job offer from an Australian employer. Requirements vary by visa subclass and individual circumstances. For immigration-related guidance, you can seek advice from a registered migration agent.",
  },
  {
    question: "Can I change employers while on a work visa?",
    answer:
      "This depends on your visa subclass and individual circumstances. Some visas have specific conditions relating to your employer and the work you can undertake. Before changing employers, make sure you understand the conditions attached to your visa and obtain appropriate immigration advice where required.",
  },
  {
    question: "Can a work visa lead to permanent residency?",
    answer:
      "Some Australian work and employer-sponsored visas may provide a pathway to permanent residency if you meet the relevant eligibility requirements. The pathway depends on your visa subclass, occupation, employment, and individual circumstances.",
  },
  {
    question: "Do you guarantee visa approval or professional registration?",
    answer:
      "No. We do not guarantee visa approval, sponsorship, migration outcomes, or professional registration. Visa applications are assessed by the Australian Government, while professional registration is determined by the relevant regulator or professional body.",
  },
];

function FAQ({ item, index, activeIndex, setActiveIndex }) {
  const isOpen = activeIndex.includes(index);

  const toggleFAQ = () => {
    setActiveIndex((prev) =>
      isOpen ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="mb-5 break-inside-avoid border border-green-200 rounded-tl-[16px] rounded-bl-[16px] rounded-tr-[16px] bg-[#F3FBF4] overflow-hidden">
      {/* Question */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={toggleFAQ}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-green-100 transition-colors"
      >
        <span className="font-bold text-green-800">{item.question}</span>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-700 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-700 flex-shrink-0" />
        )}
      </button>

      {/* Answer */}
      <div
        id={`faq-answer-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4 text-sm font-base text-green-800 leading-relaxed">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomSections() {
  const [activeIndex, setActiveIndex] = useState([]);

  return (
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center text-green-900 mb-14"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Layout */}
        <div className="columns-1 md:columns-2 gap-5">
          {faqs.map((item, index) => (
            <FAQ
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
