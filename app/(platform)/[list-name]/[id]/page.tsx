import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function CollegeDetails() {
  return (
    <section className=" bg-slate-100 ">
      <div
        className="flex flex-col p-7 sm:hidden"
        id="mobile-college-name-photo"
      >
        <div className="h-full" id="mobile-college-name">
          <h1 className="text-3xl font-bold">Adelphi University</h1>

          <div className="flex flex-col mt-7" id="mobile-btn-container">
            <button className="bg-blue-500 text-white rounded-2xl px-4 py-2 mt-2 ">
              Apply Now
            </button>
            <button className="bg-blue-500 text-white rounded-2xl px-4 py-2 mt-2">
              View Details
            </button>
          </div>
        </div>

        <div className="" id="mobile-college-photo">
          <Image
            src="/adelphi-university.jpg"
            alt="College name photo"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-2xl mt-5"
          />
        </div>
      </div>

      <div className="hidden sm:block relative" id="desktop-college-name-photo">
        <div className="" id="desktop-college-photo">
          <img
            src="/adelphi-university.jpg"
            alt="College name photo"
            className="w-full h-[490px] object-cover"
          />
        </div>

        <div className="absolute top-52 left-40 " id="desktop-college-name">
          <h1 className="text-5xl font-bold text-white">Adelphi University</h1>
          <div className="flex gap-6 mt-7" id="desktop-btn-container">
            <button className="bg-slate-100 text-black text-sm font-bold rounded-full px-3 py-4 mt-2  ">
              Apply for first-year
            </button>
            <button className="bg-slate-100 text-black text-sm font-bold rounded-full px-3 py-4 mt-2">
              Apply for transfer
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 w-full px-7 md:px-30 p-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-blue-700 text-md ">
              <FaHome />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/colleges" className="text-black">
              Colleges
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-black">
              Adelphi University
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-5 px-7 md:px-30 py-10">
        <div
          className="w-full md:w-2/3 flex flex-col gap-5 "
          id="college-details"
        >
          <h1 className="text-3xl font-bold">About</h1>

          <p className=" text-md tracking-wide">
            At Adelphi, you &apos; ll get the best of both worlds: a close-knit,
            engaged community on a beautiful and safe campus that&apos;s just 23
            miles from all the excitement and opportunities New York City has to
            offer. Choose from more than 75 undergraduate programs in arts and
            humanities, STEM and social sciences, the business and education
            professions, and health and wellness. You&apos;ll benefit from
            individualized attention from professors who will know you by name
            and find opportunities for you to participate in hands-on learning
            and research.
          </p>

          <div className="w-full flex flex-wrap gap-2 mt-16 " id="button-pills">
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts first-year applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts transfer applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Mid-Atlantic
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Private
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Suburban
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts transfer applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Mid-Atlantic
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Private
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Suburban
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts first-year applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts first-year applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts transfer applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Mid-Atlantic
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Private
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Suburban
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Mid-Atlantic
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Private
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Suburban
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Accepts transfer applications
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Mid-Atlantic
            </button>
            <button className="rounded-full text-xs font-bold bg-green-300 py-1 px-2">
              Private
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-xl font-bold">Academic Programs List</h1>
            <p className="text-md tracking-wide">
              Adelphi University offers a wide range of academic programs across
              various fields of study. Here are some of the academic programs
              available here are:
            </p>
            <ul className="list-disc list-inside">
              <li>Business Administration</li>
              <li>Psychology</li>
              <li>Nursing</li>
              <li>Computer Science</li>
              <li>Education</li>
              <li>Social Work</li>
              <li>Biology</li>
              <li>Public Health</li>
              <li>Communications</li>
              <li>Performing Arts</li>
              <li>Environmental Studies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-xl font-bold">Student experience </h1>
            <p className="text-md tracking-wide">
              Adelphi University offers a wide range of academic programs across
              various fields of study. Here are some of the academic programs
              available here are:
            </p>
            <ul className="list-disc list-inside">
              <li>Business Administration</li>
              <li>Psychology</li>
              <li>Nursing</li>
              <li>Computer Science</li>
              <li>Education</li>
              <li>Social Work</li>
              <li>Biology</li>
              <li>Public Health</li>
              <li>Communications</li>
              <li>Performing Arts</li>
              <li>Environmental Studies</li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-5 " id="college-loc">
          <h1 className="text-3xl font-bold">Admission Office</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05057996436!2d-74.30916407513153!3d40.69719335489713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1746792758546!5m2!1sen!2sin"
            className="w-full h-[300px] rounded-2xl"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="flex flex-col gap-2 mt-10">
            <h1 className="text-xl font-bold">Address</h1>
            <p className="text-md tracking-wide">
              1 South Ave, Garden City, NY 11530, United States
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <h1 className="text-xl font-bold">email</h1>
            <p className="text-md tracking-wide">abc@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <h1 className="text-xl font-bold">phone</h1>
            <p className="text-md tracking-wide">(516) 877-3050</p>
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <h1 className="text-xl font-bold">website</h1>
            <p className="text-md tracking-wide">
              for more information about the college, visit the websites
            </p>
            <p className="text-md tracking-wide">
              <a href="https://www.adelphi.edu" className="text-blue-700">
                {" "}
                admissions.adelphi.edu/first-year/
              </a>
            </p>
            <p className="text-md tracking-wide">
              <a href="https://www.adelphi.edu" className="text-blue-700">
                {" "}
                financial-aid.adelphi.edu/apply/first-year/
              </a>
            </p>
            <p className="text-md tracking-wide">
              <a href="https://www.adelphi.edu" className="text-blue-700">
                {" "}
                admissions.adelphi.edu/first-year/
              </a>
            </p>
            <p className="text-md tracking-wide">
              <a href="https://www.adelphi.edu" className="text-blue-700">
                {" "}
                financial-aid.adelphi.edu/
              </a>
            </p>
          </div>

            <div className="flex flex-col gap-2 mt-3">
               <h1 className="text-xl font-bold">Social Media</h1>
               <p className="text-md tracking-wide">
               for more information about the college, visit the websites
               </p>
               <p className="text-md tracking-wide">
               <a href="https://www.adelphi.edu" className="text-blue-700">
                  {" "}
                  admissions.adelphi.edu/first-year/
               </a>
              <br />
               stop by for a tour of our beautiful 75-acre campus. Join us for our fall or spring open house. Sit in on a class. Explore Garden City. The choice is yours. Find out more at http://adelphi.edu/visit. We can’t wait to meet you!
               </p>
               </div>
        </div>
      </div>
    </section>
  );
}
