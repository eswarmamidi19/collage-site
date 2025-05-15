// "use client";
// import { collegeType } from "@/lib/data";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { colleges } from "@/lib/data";
// interface ListCardProps {
//   college: collegeType;
// }

// const convertToKey = (title: string) =>
//   title
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, " ")
//     .trim()
//     .replace(/\s+/g, "");

// export default function ListCard({ college }: ListCardProps) {
//   return (
//     <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-gray-200">
//       <div className="relative">
//         <img
//           src={colleges[0].gallery[1].image}
//           alt={college.name}
//           className="w-full h-48 object-cover sm:h-52 rounded-md"
//         />
//       </div>

//       <div className="p-3">
//         <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{college.name}</h3>
//         <p className="text-xs text-gray-500 mb-2 line-clamp-1">{college.address}</p>

//         <p className="text-sm text-gray-700 mb-3 line-clamp-2">{college.description}</p>

//         <Link href={`/colleges/${convertToKey(college.name)}`}>
//           <Button
//             className="w-full text-sm bg-black hover:bg-gray-800 text-white rounded-none"
//           >
//             View Details
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";
import { collegeType } from "@/lib/data";
import Link from "next/link";
import { colleges } from "@/lib/data";

interface ListCardProps {
  college: collegeType;
}

const convertToKey = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "");

export default function ListCard({ college }: ListCardProps) {
  return (
    <div className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm transition hover:shadow-md flex flex-col">
      <img
        src={colleges[0].gallery[0].image}
        alt={college.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-2 text-xs">
        <h3 className="font-semibold text-gray-800 truncate">{college.name}</h3>
        <p className="text-gray-500 truncate">{college.address}</p>
        <p className="text-gray-600 mt-1 line-clamp-2 text-[11px]">{college.description}</p>
        <Link
          href={`/colleges/${convertToKey(college.name)}`}
          className="block mt-2 text-center text-white bg-blue-700 text-xs py-2 rounded hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
