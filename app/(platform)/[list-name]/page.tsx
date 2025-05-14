"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { colleges } from "@/lib/data";
import { filterData } from "@/lib/data";
import { useState } from "react";
import ListCard from "../_components/ListCard";

type Filters = Record<string, string | string[]>;


const convertToKey = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .trim()
    .replace(/\s+/g, "");


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
   
  console.log(filters);
 
  const handleTextInputChange = (title: string, value: string) => {
    const key = convertToKey(title);
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  const handleCheckboxChange = (title: string, option: string) => {
    const key = convertToKey(title);
    const current = (filters[key] as string[]) || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    setFilters((prev) => ({ ...prev, [key]: updated }));
  };

  const handleSubmenuChange = (title: string, value: string) => {
    const key = convertToKey(title);
    setFilters((prev) => ({ ...prev, [key]: value }));
  };


  // const filteredColleges = colleges.filter((college: collegeType) => {
    
  //   if (
  //     filters.location &&
  //     !college.state.toLowerCase().includes((filters.location as string).toLowerCase())
  //   )
  //     return false;

   
  //   const majorKey = convertToKey("Undergraduate Majors Offered");
  //   if (
  //     filters[majorKey] &&
  //     !(college.majors?.some((major: string) =>
  //       major.toLowerCase().includes((filters[majorKey] as string).toLowerCase())
  //     ))
  //   )
  //     return false;


  //   for (const key in filters) {
  //     if (["location", majorKey].includes(key)) continue;

  //     const filterValue = filters[key];
  //     if (Array.isArray(filterValue) && filterValue.length > 0) {
  //       if (!filterValue.some((val) => college[key]?.includes(val))) return false;
  //     } else if (typeof filterValue === "string" && filterValue !== "") {
  //       if (!college[key]?.includes(filterValue)) return false;
  //     }
  //   }

  //   return true;
  // });

  const filteredColleges = colleges;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="col-span-1 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Filter Colleges</h2>
        <Accordion type="multiple" className="animate-none">
        {filterData.map((filter) => {
          const key = convertToKey(filter.title);

        
          if (filter.type === "textinput") {
            return (
              <AccordionItem value={filter.title} key={filter.title} className="mb-4">
                <AccordionTrigger className="mb-1 py-3 text-sm text-gray-700 hover:text-gray-500 ">{filter.title}</AccordionTrigger>
                <AccordionContent>
                <input
                  type="text"
                  placeholder={filter.placeholder}
                  value={filters[key] as string}
                  onChange={(e) => handleTextInputChange(filter.title, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                </AccordionContent>
              </AccordionItem>
            );
          }

          if (filter.type === "check") {
            return (
              <AccordionItem value={filter.title} key={filter.title} className="mb-4">
                <AccordionTrigger className=" mb-1 py-3 text-sm text-gray-700 hover:text-gray-500">{filter.title}</AccordionTrigger>
                <AccordionContent> 
                  {filter.options?.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={(filters[key] as string[])?.includes(option)}
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
                <AccordionTrigger className="mb-1 py-3 text-sm text-gray-700 hover:text-gray-500">{filter.title}</AccordionTrigger>
                <AccordionContent>
                   <select
                  value={filters[key] as string}
                  onChange={(e) => handleSubmenuChange(filter.title, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
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

      <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college, idx) => (
        
            <ListCard key={idx} college={college} />
    
        ))}
      </div>
    </section>
  );
}
