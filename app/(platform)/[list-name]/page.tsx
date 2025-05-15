"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { colleges } from "@/lib/data";
import { filterData } from "@/lib/data";
import { useState } from "react";
import ListCard from "../_components/ListCard";

type Filters = Record<string, string | string[]>;

const convertToKey = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "");

export default function CollegeListPage() {
  const [filters, setFilters] = useState<Filters>({
    state: "",
    undergraduatemajorsoffered: "",
    campussetting: [],
    financialaidoffered: [],
    institutiontype: [],
    totalenrollmentsize: "",
    specializedmission: [],
    applicationfee: [],
    testoptional: [],
    offersonlinedegrees: [],
  });

  const [tempFilters, setTempFilters] = useState<Filters>(filters);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleTextInputChange = (title: string, value: string) => {
    const key = convertToKey(title);
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (title: string, option: string) => {
    const key = convertToKey(title);
    const current = (tempFilters[key] as string[]) || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    setTempFilters((prev) => ({ ...prev, [key]: updated }));
  };

  const handleSubmenuChange = (title: string, value: string) => {
    const key = convertToKey(title);
    setTempFilters((prev) => ({ ...prev, [key]: value }));
  };

  const openMobileFilters = () => {
    setTempFilters(filters);
    setMobileFiltersOpen(true);
  };

  const applyFilters = () => {
    setFilters(tempFilters);
    setMobileFiltersOpen(false);
  };

  const filteredColleges = colleges;

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[80vh]">
        {/* Desktop Filters */}
        <aside className="hidden lg:flex flex-col col-span-1 bg-white p-4 rounded shadow max-h-[80vh]">
          <h2 className="text-base font-semibold mb-4">Filter Colleges</h2>
          {/* Make accordion scrollable and leave space for button */}
          <div className="flex-grow overflow-auto pr-2">
            <Accordion type="multiple" className="animate-none">
              {filterData.map((filter) => {
                const key = convertToKey(filter.title);

                if (filter.type === "textinput") {
                  return (
                    <AccordionItem value={filter.title} key={filter.title} className="mb-3">
                      <AccordionTrigger className="py-2 text-sm text-gray-700 hover:text-gray-500">
                        {filter.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <input
                          type="text"
                          placeholder={filter.placeholder}
                          value={tempFilters[key] as string}
                          onChange={(e) => handleTextInputChange(filter.title, e.target.value)}
                          className="w-full p-1.5 border border-gray-300 rounded text-xs"
                        />
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                if (filter.type === "check") {
                  return (
                    <AccordionItem value={filter.title} key={filter.title} className="mb-3">
                      <AccordionTrigger className="py-2 text-sm text-gray-700 hover:text-gray-500">
                        {filter.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        {filter.options?.map((option) => (
                          <div key={option} className="flex items-center mb-1">
                            <input
                              type="checkbox"
                              checked={(tempFilters[key] as string[])?.includes(option)}
                              onChange={() => handleCheckboxChange(filter.title, option)}
                              className="mr-2"
                            />
                            <span className="text-xs">{option}</span>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                if (filter.type === "submenu") {
                  return (
                    <AccordionItem value={filter.title} key={filter.title} className="mb-3">
                      <AccordionTrigger className="py-2 text-sm text-gray-700 hover:text-gray-500">
                        {filter.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <select
                          value={tempFilters[key] as string}
                          onChange={(e) => handleSubmenuChange(filter.title, e.target.value)}
                          className="w-full p-1.5 border border-gray-300 rounded text-xs"
                        >
                          <option value="">-- {filter.submenuTitle} --</option>
                          {filter.submenuOptions?.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return null;
              })}
            </Accordion>
          </div>

          {/* Apply Filters Button Desktop */}
          <button
            onClick={applyFilters}
            className="mt-4 bg-black text-white py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-gray-900"
          >
            Apply Filters
          </button>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 lg:col-span-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 text-sm">
            <input
              type="text"
              placeholder="Search colleges..."
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded text-xs"
            />

            <select className="w-full sm:w-1/4 p-2 border border-gray-300 rounded text-xs">
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="enrollment">Enrollment Size</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredColleges.map((college, idx) => (
              <ListCard key={idx} college={college} />
            ))}
          </div>
        </main>
      </section>

      {/* Mobile Filter Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-300 p-3 flex justify-center">
        <button
          onClick={openMobileFilters}
          className="bg-black text-white rounded-md px-8 py-2 font-semibold text-sm shadow-md"
        >
          Filters
        </button>
      </div>

      {/* Mobile Filter Slide-up Panel */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center border-b border-gray-300 p-4">
          <h2 className="text-base font-semibold">Filter Colleges</h2>
          <button
            onClick={() => setMobileFiltersOpen(false)}
            aria-label="Close filters"
            className="text-gray-700 hover:text-gray-900 text-2xl font-bold leading-none"
          >
            &times;
          </button>
        </div>

        <div className="overflow-y-auto flex-grow p-4">
          <Accordion type="multiple" className="animate-none">
            {filterData.map((filter) => {
              const key = convertToKey(filter.title);

              if (filter.type === "textinput") {
                return (
                  <AccordionItem value={filter.title} key={filter.title} className="mb-4">
                    <AccordionTrigger className="py-2 text-sm text-gray-700 hover:text-gray-500">
                      {filter.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <input
                        type="text"
                        placeholder={filter.placeholder}
                        value={tempFilters[key] as string}
                        onChange={(e) => handleTextInputChange(filter.title, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              if (filter.type === "check") {
                return (
                  <AccordionItem value={filter.title} key={filter.title} className="mb-4">
                    <AccordionTrigger className="py-2 text-sm text-gray-700 hover:text-gray-500">
                      {filter.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      {filter.options?.map((option) => (
                        <div key={option} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            checked={(tempFilters[key] as string[])?.includes(option)}
                            onChange={() => handleCheckboxChange(filter.title, option)}
                            className="mr-2"
                          />
                          <span className="text-sm">{option}</span>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              if (filter.type === "submenu") {
                return (
                  <AccordionItem value={filter.title} key={filter.title} className="mb-4">
                    <AccordionTrigger className="py-2 text-sm text-gray-700 hover:text-gray-500">
                      {filter.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <select
                        value={tempFilters[key] as string}
                        onChange={(e) => handleSubmenuChange(filter.title, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      >
                        <option value="">-- {filter.submenuTitle} --</option>
                        {filter.submenuOptions?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              return null;
            })}
          </Accordion>
        </div>

        <div className="border-t border-gray-300 p-4">
          <button
            onClick={applyFilters}
            className="w-full bg-black text-white py-3 rounded-md font-semibold text-base"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div
          onClick={() => setMobileFiltersOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        />
      )}
    </>
  );
}
