import w1 from "../assets/w1.png";
import w2 from "../assets/Vector1.svg";
import d1 from "../assets/Speech Pathologist.jpg";
import d2 from "../assets/Occupational Therapist.jpg";
import d3 from "../assets/Disability Support Worker.jpg";
import d4 from "../assets/d9.png";
import d5 from "../assets/Physiotherapist.jpg";
import d6 from "../assets/General Practitioner (Emergency Skills).jpg";
import d7 from "../assets/personal care worker.jpg";
import a1 from "../assets/arrow.png";
import { MdOutlinePersonSearch } from "react-icons/md";
import { RiFileUserLine } from "react-icons/ri";
import { LuClock3, LuMapPin, LuBriefcase } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const initialForm = {
  companyName: "",
  tradingName: "",
  companyLocation: "",
  industry: "",
  companyWebsite: "",
  fullName: "",
  contactJobTitle: "",
  email: "",
  mobileNumber: "",
  positionTitle: "",
  numberOfStaff: "",
  jobType: "",
  salaryRange: "",
  workLocation: "",
  startDate: "",
  keySkills: "",
  additionalNote: "",
  currentLocation: "",
  currentVisaType: "",
  jobTypeSeeker: "",
  message: "",
  industryExperience: "",
  yearsOfExperience: "",
  resumeFile: null,
  consent: false,
  serviceTypes: [],
  mandatoryRequirements: [],
};

function useHeroForm() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState(initialForm);
  const [submissions, setSubmissions] = useState([]);

  const onChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    if (type === "checkbox" && name === "consent") {
      setForm((prev) => ({ ...prev, consent: checked }));
      return;
    }
    if (type === "file") {
      setForm((prev) => ({ ...prev, resumeFile: files[0] || null }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openModal = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setModalType("");
  };

  const toggleArrayValue = (field, value) => {
    setForm((prev) => {
      const current = prev[field] || [];
      const hasValue = current.includes(value);
      return {
        ...prev,
        [field]: hasValue
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  const GAS_WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbz_nkEAd_JRF7-liSfOrwHbQl1tsrAA8C-K7jbGnKcDSJMfmzt5bYJLmDGUDLk07KvPGA/exec";

  const sendToGoogleAppsScript = async (formData, type) => {
    const fileToBase64 = (file) =>
      new Promise((resolve, reject) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });

    const resumeBase64 = formData.resumeFile
      ? await fileToBase64(formData.resumeFile)
      : null;

    const payload =
      type === "jobseeker"
        ? {
            type: "job-seeker",
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.mobileNumber,
            number: formData.mobileNumber,
            current_location: formData.currentLocation,
            location: formData.currentLocation,
            visa_type: formData.currentVisaType,
            job_type: formData.jobTypeSeeker,
            message: formData.message,
            industry: formData.industryExperience,
            experience_years: formData.yearsOfExperience,
            resume_file: formData.resumeFile ? formData.resumeFile.name : "",
            resume_file_base64: resumeBase64 || "",
          }
        : {
            type: "post-job",
            company_name: formData.companyName,
            trading_name: formData.tradingName,
            industry: formData.industry,
            website: formData.companyWebsite,
            business_location: formData.companyLocation,
            full_name: formData.fullName,
            job_title_contact: formData.contactJobTitle,
            email: formData.email,
            phone: formData.mobileNumber,
            position_title: formData.positionTitle,
            staff_required: formData.numberOfStaff,
            service: formData.serviceTypes.join(", "),
            job_type: formData.jobType,
            salary_range: formData.salaryRange,
            work_location: formData.workLocation,
            start_date: formData.startDate,
            skills: formData.keySkills,
            requirements: formData.mandatoryRequirements.join(", "),
            additional_notes: formData.additionalNote,
          };

    const body = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      body.append(key, value ?? "");
    });

    try {
      const response = await fetch(GAS_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const text = await response.text();
      console.log(text);
      return { success: true };
    } catch (err) {
      console.error("Primary submission failed:", err);

      try {
        await fetch(GAS_WEB_APP_URL, {
          method: "POST",
          mode: "no-cors",
          body,
        });

        return { noCorsFallback: true };
      } catch (fallbackErr) {
        console.error("Fallback submission failed:", fallbackErr);
        return { error: true };
      }
    }
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const updatedSubmissions = [...submissions, { ...form, type }];
    setSubmissions(updatedSubmissions);

    try {
      const result = await sendToGoogleAppsScript(form, type);
      if (result.skipped) {
        window.alert("Submission saved locally. External submission skipped.");
      } else if (result.error) {
        window.alert(
          "Submission complete, but external submission failed. Check your Google Apps Script deployment.",
        );
      } else if (result.noCorsFallback) {
        window.alert(
          "Submission complete. External submission attempted with no-cors fallback.",
        );
      } else {
        window.alert("Submission complete.");
      }
    } catch {
      window.alert("Submission complete. Google Sheets update failed.");
    }

    setForm(initialForm);
    closeModal();
  };

  return {
    open,
    modalType,
    openModal,
    closeModal,
    form,
    onChange,
    toggleArrayValue,
    handleSubmit,
    submissions,
  };
}

const Healthcare = () => {
  const url = "https://jobsnvisa.com.au/healthcare/";
  const {
    open,
    modalType,
    openModal,
    closeModal,
    form,
    onChange,
    toggleArrayValue,
    handleSubmit,
  } = useHeroForm();

  const healthcareJobs = [
    {
      image: d1,
      category: "Allied Health",
      title: "Speech Pathologist",
      description:
        "Assess, diagnose, and treat communication and swallowing disorders across all age groups while improving patients' quality of life through evidence-based therapy.",
      jobType: "Full Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Assess speech and language disorders",
        "Develop individualized therapy plans",
        "Provide swallowing and communication therapy",
      ],
      qualifications: [
        "Bachelor or Master of Speech Pathology",
        "Speech Pathology Australia (SPA) Eligibility",
        "Current Working Rights",
      ],
      skills: [
        "Speech Therapy",
        "Communication Disorders",
        "Dysphagia Management",
        "Patient Care",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17663858655000124369xpA",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d2,
      category: "Allied Health",
      title: "Occupational Therapist",
      description:
        "Support individuals to develop, recover, and maintain the skills needed for daily living, work, and community participation.",
      jobType: "Full Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Conduct functional assessments",
        "Develop rehabilitation plans",
        "Recommend assistive equipment",
      ],
      qualifications: [
        "Bachelor of Occupational Therapy",
        "AHPRA Registration",
        "Current Working Rights",
      ],
      skills: [
        "Rehabilitation",
        "Functional Assessment",
        "Patient Care",
        "Clinical Reasoning",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17661356115550124369JXN",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d3,
      category: "Support & Community",
      title: "Disability Support Worker",
      description:
        "Provide person-centred support to individuals with disabilities, promoting independence, wellbeing, and community participation.",
      jobType: "Full Time",
      experience: "1+ Years",
      location: "Australia",
      responsibilities: [
        "Provide personal care support",
        "Assist with daily living activities",
        "Promote community participation",
      ],
      qualifications: [
        "Certificate III or IV in Individual Support",
        "NDIS Worker Screening Check",
        "First Aid & CPR",
      ],
      skills: ["Personal Care", "NDIS", "Community Support", "Communication"],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17852180728210124369mcy",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d7,
      category: "Support & Community",
      title: "Support Coordinator",
      description:
        "Assist NDIS participants in implementing their plans, connecting with service providers, and achieving their personal goals.",
      jobType: "Full Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Coordinate NDIS supports",
        "Connect participants with providers",
        "Monitor participant outcomes",
      ],
      qualifications: [
        "Diploma or Degree in Community Services",
        "NDIS Experience",
        "Driver Licence (Preferred)",
      ],
      skills: ["Case Management", "NDIS", "Coordination", "Communication"],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17852183728500124369hbC",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d5,
      category: "Allied Health",
      title: "Physiotherapist",
      description:
        "Assess, diagnose, and treat movement disorders while helping patients recover from injury, surgery, or chronic health conditions.",
      jobType: "Part Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Assess physical conditions",
        "Develop rehabilitation programs",
        "Provide manual therapy",
      ],
      qualifications: [
        "Bachelor of Physiotherapy",
        "AHPRA Registration",
        "Current Working Rights",
      ],
      skills: [
        "Rehabilitation",
        "Manual Therapy",
        "Patient Assessment",
        "Exercise Prescription",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17847149796730124369xPW",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d4,
      category: "Support & Community",
      title: "Behavioral Support Practitioner",
      description:
        "Develop Positive Behaviour Support plans and evidence-based interventions to improve the quality of life of individuals with disabilities.",
      jobType: "Part Time",
      experience: "2+ Years",
      location: "Australia",
      responsibilities: [
        "Conduct behaviour assessments",
        "Develop Positive Behaviour Support plans",
        "Train families and support staff",
      ],
      qualifications: [
        "Degree in Psychology, Social Work or Allied Health",
        "NDIS Behaviour Support Eligibility",
        "Current Working Rights",
      ],
      skills: [
        "Positive Behaviour Support",
        "Behaviour Assessment",
        "NDIS",
        "Report Writing",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17852186501750124369TUO",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },

    {
      image: d6,
      category: "Doctors & Specialists",
      title: "Vocational Registered General Practitioner",
      description:
        "Provide comprehensive primary healthcare services including diagnosis, treatment, preventive care, and chronic disease management across diverse patient populations.",
      jobType: "Full Time",
      experience: "3+ Years",
      location: "Australia",
      responsibilities: [
        "Diagnose and treat patients",
        "Develop patient care plans",
        "Provide preventive healthcare",
      ],
      qualifications: [
        "Medical Degree (MBBS or Equivalent)",
        "AHPRA Registration",
        "FRACGP or Equivalent",
      ],
      skills: [
        "Primary Care",
        "Clinical Diagnosis",
        "Patient Management",
        "Chronic Disease Care",
      ],
      highlights: [
        "View Role Details",
        "Check Eligibility",
        "Employee",
        "Employer",
      ],
      applyUrl: "https://recruitcrm.io/apply/17646829951890124369zbW",
      contactEmail: "info@jobsnvisa.com.au",
      contactPhone: "+61387643334",
    },
  ];

  // Filter state moved to component scope
  const [showFilters, setShowFilters] = useState(false);
  const initialFilters = {
    search: "",
    category: "All Categories",
    settings: "All Settings",
    levels: "All Levels",
    patientInteraction: "Patient Interaction",
    employmentType: "Employment Type",
  };
  const [filters, setFilters] = useState(initialFilters);
  const handleChange = (field, value) =>
    setFilters((p) => ({ ...p, [field]: value }));
  const handleReset = () => {
    setFilters(initialFilters);
    setShowFilters(false);
  };

  // Filtering logic
  const filteredJobs = healthcareJobs.filter((job) => {
    const q = filters.search.trim().toLowerCase();
    if (q) {
      const inTitle = job.title.toLowerCase().includes(q);
      const inDesc = job.description.toLowerCase().includes(q);
      const inSkills = job.skills.join(" ").toLowerCase().includes(q);
      if (!inTitle && !inDesc && !inSkills) return false;
    }
    if (
      filters.category !== "All Categories" &&
      job.category !== filters.category
    )
      return false;
    if (
      filters.employmentType !== "Employment Type" &&
      job.jobType !== filters.employmentType
    )
      return false;
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Healthcare Jobs in Australia | Jobs N Visa</title>

        <meta
          name="description"
          content="Explore healthcare job opportunities in Australia with Jobs N Visa. Find roles for nurses, lab technologists, and other healthcare professionals."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Healthcare Jobs in Australia | Jobs N Visa"
        />
        <meta
          property="og:description"
          content="Explore healthcare job opportunities in Australia with Jobs N Visa. Find roles for nurses, lab technologists, and other healthcare professionals."
        />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content="https://jobsnvisa.com.au/assets/d1.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Healthcare Jobs in Australia | Jobs N Visa" />
        <meta property="twitter:description" content="Explore healthcare job opportunities in Australia with Jobs N Visa. Find roles for nurses, lab technologists, and other healthcare professionals." />
        <meta property="twitter:image" content="https://jobsnvisa.com.au/assets/Occupational Therapist.jpg" />
      </Helmet>

      {open && modalType === "jobseeker" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="bg-white rounded-[32px] shadow-xl w-full max-w-[980px] p-6 relative max-h-[90vh] overflow-hidden">
            <button
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-900"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="text-center">
              <h2 className="text-green-700 font-semibold text-xl">
                Job Seeker Inquiry
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Share your details and we'll help you find the right job.
              </p>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e, modalType)}
              className="mt-6 space-y-6 overflow-y-auto max-h-[70vh] pr-2"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Basic Details
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        placeholder="Full Name"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={onChange}
                        placeholder="Mobile Number"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Email"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="currentLocation"
                        value={form.currentLocation}
                        onChange={onChange}
                        placeholder="Current Location (City, Country)"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Upload
                    </p>
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer flex h-[140px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-slate-600 text-sm"
                    >
                      <span>Resume / CV</span>
                      <span className="text-xs text-slate-400">
                        Click to upload or drag and drop
                      </span>
                      <span className="text-xs text-slate-400">
                        PDF, DOC, DOCX
                      </span>
                    </label>
                    <input
                      id="resume-upload"
                      type="file"
                      name="resumeFile"
                      onChange={onChange}
                      className="hidden"
                    />
                    {form.resumeFile && (
                      <p className="text-xs text-green-600 mt-2">
                        {form.resumeFile.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Work Profile
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        name="currentVisaType"
                        value={form.currentVisaType}
                        onChange={onChange}
                        placeholder="Current Visa Type"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <select
                        name="jobTypeSeeker"
                        value={form.jobTypeSeeker}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Select Job Type</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="casual">Casual</option>
                      </select>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        placeholder="Write message here..."
                        className="md:col-span-2 border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full min-h-[120px]"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Experience
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <select
                        name="industryExperience"
                        value={form.industryExperience}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Select Industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="construction">Construction</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="it">IT & Technology</option>
                      </select>
                      <select
                        name="yearsOfExperience"
                        value={form.yearsOfExperience}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Years Of Experience</option>
                        <option value="0-1">0 - 1 Years</option>
                        <option value="1-3">1 - 3 Years</option>
                        <option value="3-5">3 - 5 Years</option>
                        <option value="5+">5+ Years</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] font-semibold hover:bg-green-800 transition"
                >
                  <img
                    src={a1}
                    alt="Arrow icon"
                    className="w-5 h-5 xl:w-6 xl:h-6"
                  />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {open && modalType === "post-job" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="bg-white rounded-[32px] shadow-xl w-full max-w-[980px] p-6 relative max-h-[90vh] overflow-hidden">
            <button
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-900"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="text-center">
              <h2 className="text-green-700 font-semibold text-xl">
                Recruiter Inquiry
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Let's connect you with best candidates.
              </p>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e, modalType)}
              className="mt-6 space-y-6 overflow-y-auto max-h-[70vh] pr-2"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Company Information
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        name="companyName"
                        value={form.companyName}
                        onChange={onChange}
                        placeholder="Company Name"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="tradingName"
                        value={form.tradingName}
                        onChange={onChange}
                        placeholder="Trading Name (If Any)"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="companyLocation"
                        value={form.companyLocation}
                        onChange={onChange}
                        placeholder="Company Location"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Select Industry</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="construction">Construction</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="it">IT & Technology</option>
                      </select>
                      <input
                        name="companyWebsite"
                        value={form.companyWebsite}
                        onChange={onChange}
                        placeholder="Company Website"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full md:col-span-2"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Type of Service Required
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 border border-slate-200 rounded-xl p-4">
                      {[
                        "Labour Hire (Casual / Temporary)",
                        "Contract Staff",
                        "Permanent Recruitment",
                        "Payroll / Workforce Management",
                        "Multiple Services",
                      ].map((label) => (
                        <label
                          key={label}
                          className="flex items-center gap-2 text-sm text-slate-700"
                        >
                          <input
                            type="checkbox"
                            checked={form.serviceTypes.includes(label)}
                            onChange={() =>
                              toggleArrayValue("serviceTypes", label)
                            }
                            className="h-4 w-4 rounded border-slate-300"
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Contact Person Details
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        placeholder="Full Name"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="contactJobTitle"
                        value={form.contactJobTitle}
                        onChange={onChange}
                        placeholder="Job Title"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Email"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={onChange}
                        placeholder="Mobile Number"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-3">
                      Hiring Requirement Details
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        name="positionTitle"
                        value={form.positionTitle}
                        onChange={onChange}
                        placeholder="Position / Job Title"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <input
                        name="numberOfStaff"
                        value={form.numberOfStaff}
                        onChange={onChange}
                        placeholder="Number Of Staff"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <select
                        name="jobType"
                        value={form.jobType}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Job Type Looking For</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="casual">Casual</option>
                      </select>
                      <select
                        name="salaryRange"
                        value={form.salaryRange}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Salary Range</option>
                        <option value="40k-60k">40k - 60k</option>
                        <option value="60k-80k">60k - 80k</option>
                        <option value="80k+">80k+</option>
                      </select>
                      <input
                        name="workLocation"
                        value={form.workLocation}
                        onChange={onChange}
                        placeholder="Work Location"
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      />
                      <select
                        name="startDate"
                        value={form.startDate}
                        onChange={onChange}
                        className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full"
                      >
                        <option value="">Start Date</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-2 weeks">1 - 2 Weeks</option>
                        <option value="1 month">1 Month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      <textarea
                        name="keySkills"
                        value={form.keySkills}
                        onChange={onChange}
                        placeholder="Key Skills / Experience Required"
                        className="md:col-span-2 border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-green-700 mb-3">
                    Mandatory Requirements
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 border border-slate-200 rounded-xl p-4">
                    {[
                      "White Card",
                      "Trade Licence",
                      "Police Check",
                      "Medical / Drug Test",
                      "Right to Work in Australia",
                    ].map((label) => (
                      <label
                        key={label}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <input
                          type="checkbox"
                          checked={form.mandatoryRequirements.includes(label)}
                          onChange={() =>
                            toggleArrayValue("mandatoryRequirements", label)
                          }
                          className="h-4 w-4 rounded border-slate-300"
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-700 mb-3">
                    Additional Note
                  </p>
                  <textarea
                    name="additionalNote"
                    value={form.additionalNote}
                    onChange={onChange}
                    placeholder="Any Additional Information?"
                    className="border border-slate-200 bg-slate-50 text-black p-3 rounded-lg text-sm w-full min-h-[160px]"
                  />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <label className="flex items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={onChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <span>
                    I consent to JobsNvisa collecting and using my information
                    to process this enquiry.
                  </span>
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] font-semibold hover:bg-green-800 transition"
                >
                  <img
                    src={a1}
                    alt="Arrow icon"
                    className="w-5 h-5 xl:w-6 xl:h-6"
                  />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section className="max-w-[1440px] mx-auto px-4 pt-6 md:pt-10 pb-12 overflow-x-hidden">
        {/* Header Banner */}
        <div className="flex flex-col items-center text-center mt-6 xl:mt-24">
          <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden bg-green-200 rounded-[30px] md:rounded-[60px] px-6 mt-20 xl:mt-8 md:mt-14 md:px-12 py-8 md:py-10">
            {/* Decorative Vector 1 */}
            <img
              src={w1}
              alt="Background"
              className="hidden md:block absolute top-[-56px] left-[-120px] md:top-[-40px] md:left-[-120px] w-[455.35px] h-[303.56px] md:h-[250px] rotate-[-23deg]"
            />

            {/* Banner Text Content */}
            <div className="relative z-10">
              <p className="text-[15px] md:text-[18px] font-normal text-[#0D542B]">
                Home &gt; Healthcare
              </p>
              <h1 className="mt-3 md:mt-5 text-[22px] sm:text-[26px] md:text-[30px] font-bold text-green-950 text-center">
                Healthcare Professionals
              </h1>
              <p className="mt-2 md:mt-3 max-w-[739px] mx-auto text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-green-700 text-center">
                Comprehensive Guide to Healthcare Careers in Australia
              </p>

              {/* Decorative Vector 2 */}
              <img
                src={w2}
                alt="Background"
                className="hidden xl:block absolute top-[54px] xl:top-[10px] left-[1040px] w-[224px] h-[105px]"
              />
            </div>
          </div>
        </div>

        {/* Inline FilterSection (moved here to allow filtering of cards) */}
        <div className="w-full max-w-[850px] mx-auto p-4 space-y-4 mt-10">
          <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="bg-white rounded-full p-2 pl-5 border border-slate-200 shadow-sm flex items-center gap-3 w-full sm:max-w-2xl">
              <svg
                className="w-4 h-4 text-slate-400 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => handleChange("search", e.target.value)}
                  placeholder="Search healthcare roles, specializations, or skills..."
                  className="w-full text-xs sm:text-sm text-slate-700 bg-transparent placeholder-slate-400 focus:outline-none"
                />
                {filters.search && (
                  <button
                    onClick={() => handleChange("search", "")}
                    aria-label="Clear search"
                    className="ml-2 text-slate-500 hover:text-slate-700"
                  >
                    ×
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters((p) => !p)}
                className="flex items-center gap-2 px-4 py-2 bg-[#D1E9E3] hover:bg-[#c1e2da] text-[#1D584C] text-xs font-semibold rounded-full transition"
              >
                <span>Filters</span>
                <svg
                  className="w-3.5 h-3.5 text-[#1D584C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleReset}
                className="flex items-center h-[40px]  gap-1 px-4 py-2 bg-[#EAEFF2] hover:bg-[#e0e7ec] text-[#42526E] text-xs font-semibold rounded-[10px] transition"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#42526E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="space-y-3 pt-1 xl:w-[1280px] mt-4 sm:mt-6 xl:ml-[-230px] ">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 text-[16px]">
                <select
                  value={filters.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Allied Health">Allied Health</option>
                  <option value="Support & Community">
                    Support & Community
                  </option>
                  <option value="Doctors & Specialists">
                    Doctors & Specialists
                  </option>
                </select>

                <select
                  value={filters.settings}
                  onChange={(e) => handleChange("settings", e.target.value)}
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="All Settings">All Settings</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Private Clinic">Private Clinic</option>
                  <option value="Laboratory">Laboratory</option>
                </select>

                <select
                  value={filters.levels}
                  onChange={(e) => handleChange("levels", e.target.value)}
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="All Levels">All Levels</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>

                <select
                  value={filters.patientInteraction}
                  onChange={(e) =>
                    handleChange("patientInteraction", e.target.value)
                  }
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="Patient Interaction">
                    Patient Interaction
                  </option>
                  <option value="Direct Patient Care">
                    Direct Patient Care
                  </option>
                  <option value="Non-Clinical / Support">
                    Non-Clinical / Support
                  </option>
                </select>

                <select
                  value={filters.employmentType}
                  onChange={(e) =>
                    handleChange("employmentType", e.target.value)
                  }
                  className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
                >
                  <option value="Employment Type">Employment Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
            </div>
          )}

                    {/* Cards Stack */}
          <div className="space-y-8 xl:space-y-14 mt-14 xl:mt-14 flex flex-col items-center">
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                className="
                  w-full
                  max-w-[700px]
                  rounded-[30px]
                  p-6
                  bg-slate-50
                  shadow-xl
                  flex
                  flex-col
                  items-center
                  overflow-hidden
                  xl:max-w-none
                  xl:w-[1400px]
                  xl:h-[650px]
                  xl:rounded-[70px]
                  xl:p-0
                  xl:flex-row
                "
              >
                {/* Left Card Image Section */}
                <div
                  className="
                    relative
                    w-full
                    max-w-[280px]
                    sm:max-w-[320px]
                    h-auto
                    bg-green-200
                    rounded-[30px]
                    p-4
                    flex
                    flex-col
                    items-center
                    mt-6
                    xl:max-w-none
                    xl:w-[335px]
                    xl:h-[420px]
                    xl:ml-[81px]
                    xl:mt-[81px]
                    xl:rounded-[45px]
                    xl:p-0
                    xl:block
                  "
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    className="
                      w-full
                      h-[260px]
                      sm:h-[300px]
                      object-cover
                      rounded-[25px]
                      -mt-10
                      shadow-md
                      xl:w-[334px]
                      xl:h-[393px]
                      xl:rounded-[30px]
                      xl:ml-[-40px]
                      xl:mt-[-30px]
                      xl:shadow-none
                    "
                  />

                  <p
                    className="
                      text-green-700
                      text-[18px]
                      sm:text-[20px]
                      font-semibold
                      text-center
                      mt-3
                      xl:w-[250px]
                      xl:h-[30px]
                      xl:mt-3
                      xl:ml-20
                      xl:text-left
                    "
                  >
                    {job.category}
                  </p>
                </div>

                {/* Right Details Section */}
                <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
                  {/* Job Title */}
                  <p
                    className="
                      text-green-700
                      text-[22px]
                      sm:text-[26px]
                      font-semibold
                      text-center
                      mt-6
                      xl:mt-0
                      xl:w-[800px]
                      xl:h-[45px]
                      xl:mt-[40px]
                      xl:ml-[50px]
                      xl:text-[30px]
                      xl:text-left
                    "
                  >
                    {job.title}
                  </p>

                  {/* Job Description */}
                  <p
                    className="
                      text-slate-500
                      text-[14px]
                      sm:text-[16px]
                      text-center
                      xl:text-left
                      mt-3
                      px-2
                      xl:px-0
                      xl:w-[800px]
                      xl:h-[87px]
                      xl:mt-[20px]
                      xl:ml-[50px]
                    "
                  >
                    {job.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full max-w-[90%] xl:w-[800px] my-4 xl:my-0 xl:mt-[-10px] xl:ml-[50px] border border-slate-300"></div>

                  {/* Job Info Bar */}
                  <div
                    className="
                      w-full
                      grid
                      grid-cols-1
                      sm:grid-cols-3
                      gap-4
                      py-4
                      xl:py-0
                      xl:flex
                      xl:items-center
                      xl:justify-between
                      xl:pt-6
                    "
                  >
                    {/* Job Type */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 xl:ml-[80px]">
                      <LuClock3 className="w-6 h-6 xl:w-7 xl:h-7 text-[#009A44] flex-shrink-0" />

                      <div>
                        <p className="text-[14px] xl:text-[16px] text-slate-600">
                          Job Type
                        </p>

                        <p className="text-[16px] xl:text-[18px] font-semibold text-slate-800">
                          {job.jobType}
                        </p>
                      </div>
                    </div>

                    <div className="hidden xl:block h-14 w-px bg-gray-300"></div>

                    {/* Experience */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 xl:mr-[40px]">
                      <LuBriefcase className="w-6 h-6 xl:w-7 xl:h-7 text-[#009A44] flex-shrink-0" />

                      <div>
                        <p className="text-[14px] xl:text-[16px] text-slate-600">
                          Experience
                        </p>

                        <p className="text-[16px] xl:text-[18px] font-semibold text-slate-800">
                          {job.experience}
                        </p>
                      </div>
                    </div>

                    <div className="hidden xl:block h-14 w-px bg-gray-300"></div>

                    {/* Location */}
                    <div className="flex items-center justify-center xl:justify-start gap-3 xl:mr-[60px]">
                      <LuMapPin className="w-6 h-6 xl:w-7 xl:h-7 text-[#009A44] flex-shrink-0" />

                      <div>
                        <p className="text-[14px] xl:text-[16px] text-slate-600">
                          Location
                        </p>

                        <p className="text-[16px] xl:text-[18px] font-semibold text-slate-800">
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities & Qualifications */}
                  <div
                    className="
                      w-full
                      flex
                      flex-col
                      sm:flex-row
                      justify-between
                      gap-6
                      mt-6
                      xl:mt-0
                      xl:w-[800px]
                      xl:mt-[38px]
                      xl:ml-[50px]
                    "
                  >
                    {/* Responsibilities */}
                    <div className="w-full sm:w-[48%] xl:w-[340px]">
                      <h3 className="text-[18px] xl:text-[20px] font-semibold text-[#00A651] mb-2 xl:mb-3">
                        Key Responsibilities
                      </h3>

                      <ul className="list-disc pl-5 text-[14px] xl:text-[16px] text-slate-600 space-y-1 xl:space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Qualifications */}
                    <div className="w-full sm:w-[48%] xl:w-[320px]">
                      <h3 className="text-[18px] xl:text-[20px] font-semibold text-[#00A651] mb-2 xl:mb-3">
                        Qualifications
                      </h3>

                      <ul className="list-disc pl-5 text-[14px] xl:text-[16px] text-slate-600 space-y-1 xl:space-y-2">
                        {job.qualifications.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="w-full flex gap-3 flex-wrap mt-6 xl:mt-10 xl:ml-[30px]">
                    {job.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="
                          flex-1
                          min-w-[120px]
                          h-[45px]
                          bg-slate-200
                          rounded-[14px]
                          flex
                          items-center
                          justify-center
                          px-2
                        "
                      >
                        <p className="text-[15px] text-green-700 font-semibold text-center">
                          {skill}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Section */}
                 <div className="w-full mt-6 xl:mt-0 xl:mt-[25px] xl:ml-[30px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full max-w-[1000px]">
    
    {/* Highlight 1 - View Role Details */}
    <button
      type="button"
      onClick={() =>
        window.alert(
          `${job.title}\n\nRole Details:\n${job.description}\n\nCategory: ${job.category}\nLocation: ${job.location}\nExperience: ${job.experience}`
        )
      }
      className="
        w-full
        h-12
        rounded-tl-xl rounded-tr-xl rounded-bl-xl
        bg-green-700
        hover:bg-green-100
        px-4
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        group
        transition-colors
        duration-200
      "
    >
      <RiUserSettingsLine
        className="
          w-5 h-5
          text-white
          group-hover:text-green-900
          flex-shrink-0
          transition-colors
        "
      />
      <span
        className="
          text-sm xl:text-base
          text-white
          group-hover:text-green-900
          font-bold
          truncate
          transition-colors
        "
      >
        {job.highlights[0]}
      </span>
    </button>

    {/* Highlight 2 - Check Eligibility */}
    <button
      type="button"
      onClick={() =>
        window.alert(
          `Eligibility Check for ${job.title}\n\nRequired Qualifications:\n${job.qualifications.join(
            "\n"
          )}\n\nRequired Skills:\n${job.skills.join("\n")}`
        )
      }
      className="
        w-full
        h-12
        rounded-tl-xl rounded-tr-xl rounded-bl-xl
        bg-green-100
        hover:bg-green-700
        px-4
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        group
        transition-colors
        duration-200
      "
    >
      <FaRegCheckCircle
        className="
          w-5 h-5
          text-green-900
          group-hover:text-white
          flex-shrink-0
          transition-colors
        "
      />
      <span
        className="
          text-sm xl:text-base
          text-green-900
          group-hover:text-white
          font-bold
          truncate
          transition-colors
        "
      >
        {job.highlights[1]}
      </span>
    </button>

    {/* Highlight 3 - Employee */}
    <button
      type="button"
      onClick={() => openModal("jobseeker")}
      className="
        w-full
        h-12
        rounded-tl-xl rounded-tr-xl rounded-bl-xl
        bg-green-700
        hover:bg-green-100
        px-4
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        group
        transition-colors
        duration-200
      "
    >
        <RiFileUserLine
        className="
          w-5 h-5
          text-white
          group-hover:text-green-900
          flex-shrink-0
          transition-colors
        "
      />
      <span
        className="
          text-sm xl:text-base
          text-white
          group-hover:text-green-900
          font-bold
          truncate
          transition-colors
        "
      >
        {job.highlights[2]}
      </span>
    </button>

    {/* Highlight 4 - Employer */}
    <button
      type="button"
      onClick={() => openModal("post-job")}
      className="
        w-full
        h-12
        rounded-tl-xl rounded-tr-xl rounded-bl-xl
        bg-green-100
        hover:bg-green-700
        px-4
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        group
        transition-colors
        duration-200
      "
    >
       <MdOutlinePersonSearch
        className="
          w-5 h-5
          text-green-900
          group-hover:text-white
          flex-shrink-0
          transition-colors
        "
      />
      <span
        className="
          text-sm xl:text-base
          text-green-900
          group-hover:text-white
          font-bold
          truncate
          transition-colors
        "
      >
        {job.highlights[3]}
      </span>
    </button>
  </div>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Healthcare;