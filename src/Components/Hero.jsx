import { useState } from "react";
import bg from "../assets/q1.jpg";
import bg2 from "../assets/bg-3.png";
import a1 from "../assets/arrow.png";

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

    console.log(payload);

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

const Hero = () => {
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

  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[800px] md:h-[650px] w-full flex flex-col items-center justify-center  px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-green-950/70 z-2" />
        <img
          src={bg2}
          alt="Decorative background"
          className="hidden md:block absolute md:top-[188px] md:left-[-13px] lg:left-[50px] md:w-[307px] md:h-[461px]"
        />
        <h1 className="relative z-20 text-orange-300 font-semibold font-['outfit'] text-[45px] leading-[120%] tracking-[0%] mt-8 md:absolute md:right-[40px] lg:right-[80px] md:top-[200px] md:text-right text-center">
          <span className="text-green-300"> Welcome to Jobs N Visa </span>{" "}
          <br /> <span className="text-orange-300">& Start your Journey</span>
        </h1>
        <p className="relative z-20 mt-2 md:absolute md:top-[360px] md:right-[-190px]  lg:right-[-150px] md:w-[450px] md:-translate-x-1/2 text-center text-white text-[24px] text-justify leading-[120%] tracking-[0%]">
          <span className="text-green-200">Connect with</span> top employers{" "}
          <span className="text-green-200">across</span> Australia's
          fastest-growing
          <span className="text-green-200"> industries We. </span> bridge the
          gap{" "}
          <span className="text-green-200">
            between talent and opportunity with{" "}
          </span>{" "}
          visa and employment solutions.
        </p>
        <div className="relative z-20 md:mt-2 mt-4 flex items-center gap-6 md:absolute md:top-[540px] md:right-[-60px] md:-translate-x-1/2">
          <button
            type="button"
            onClick={() => openModal("jobseeker")}
            className="bg-green-100 text-green-800 font-semibold text-[14px] leading-[100%] tracking-[0%] py-5 px-6 rounded-tr-[14px] rounded-tl-[14px] w-[180px] md:w-[200px] h-[48px] transition duration-300"
          >
            Find Your Dream Job
          </button>
          <button
            type="button"
            onClick={() => openModal("recruiter")}
            className="bg-amber-100 text-amber-800 font-semibold text-[14px] leading-[100%] h-[48px] tracking-[0%] py-5 px-6 rounded-tr-[14px] rounded-tl-[14px] w-[120px] md:w-auto hover:bg-orange-100 transition duration-300"
          >
            Post A Job
          </button>
        </div>

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
                  Share your details and we&apos;ll help you find the right job.
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

        {open && modalType === "recruiter" && (
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
      </div>
    </div>
  );
};

export default Hero;
