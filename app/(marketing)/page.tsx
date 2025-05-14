import { GraduationCap, Search } from "lucide-react";
import { Poppins } from "next/font/google";
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col px-4" style={textFont.style}>
      {/* Heading Container */}
      <div className="flex justify-center items-center flex-col">
        {/* Icon and Badge */}
        <div className="mb-4 flex items-center justify-center border shadow-sm p-4 bg-blue-100 text-blue-700 rounded-full uppercase">
          <GraduationCap className="h-6 w-6 mr-2" />
          One Application. Unlimited Possibilities.
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Apply to Colleges with Confidence
        </h1>
      </div>

      {/* Description */}
      <div className="text-sm md:text-xl text-center max-w-xs md:max-w-2xl mb-6">
        Access hundreds of colleges and universities with one application. Simplify your college admissions process and take the next step in your academic career.
      </div>

      {/* Large Search Bar */}
      <div className="relative w-full max-w-2xl mb-6">
        <input
          type="text"
          placeholder="Search for colleges..."
          className="w-full rounded-full border border-gray-300 px-6 py-4 pl-12 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
      </div>


    </div>
  );
}
