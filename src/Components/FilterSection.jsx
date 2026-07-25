import { useState } from "react";

export default function FilterSection() {
  // State for toggling extra filter dropdowns visibility
  const [showFilters, setShowFilters] = useState(false);

  // Initial state values for search and dropdowns
  const initialFilters = {
    search: "",
    category: "All Categories",
    settings: "All Settings",
    levels: "All Levels",
    patientInteraction: "Patient Interaction",
    employmentType: "Employment Type",
  };

  const [filters, setFilters] = useState(initialFilters);

  // Handler to update individual filter values
  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // Handler to reset all filter values
  const handleReset = () => {
    setFilters(initialFilters);
    setShowFilters(false); // Optionally hide filters on reset
  };

  return (
    <div className="w-full max-w-[850px] mx-auto p-4 space-y-4 mt-10">
      {/* Main Search Bar & Top Buttons */}
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
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            placeholder="Search healthcare roles, specializations, or skills..."
            className="w-full text-xs sm:text-sm text-slate-700 bg-transparent placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={() => setShowFilters((prev) => !prev)}
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
          {/* Reset Filters Button */}
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

      {/* Dropdown Filters (Toggled when Filters button is clicked) */}
      {showFilters && (
          <div className="space-y-3 pt-1 xl:w-[1280px] mt-4 sm:mt-6 xl:ml-[-230px] ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 text-[16px]">
            {/* Category Dropdown */}
            <select
              value={filters.category}
              onChange={(e) => handleChange("category", e.target.value)}
                className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
            >
              <option value="All Categories">All Categories</option>
              <option value="Doctors & Specialists">Doctors & Specialists</option>
              <option value="Nursing">Nursing</option>
              <option value="Lab & Technical">Lab & Technical</option>
            </select>

            {/* Settings Dropdown */}
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

            {/* Levels Dropdown */}
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

            {/* Patient Interaction Dropdown */}
            <select
              value={filters.patientInteraction}
              onChange={(e) => handleChange("patientInteraction", e.target.value)}
                className="w-full h-[40px] bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 font-medium shadow-sm focus:outline-none focus:border-emerald-500"
            >
              <option value="Patient Interaction">Patient Interaction</option>
              <option value="Direct Patient Care">Direct Patient Care</option>
              <option value="Non-Clinical / Support">Non-Clinical / Support</option>
            </select>

            {/* Employment Type Dropdown */}
            <select
              value={filters.employmentType}
              onChange={(e) => handleChange("employmentType", e.target.value)}
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
    </div>
  );
}
  