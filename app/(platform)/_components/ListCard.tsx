"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { collegeType } from "@/lib/data";
import Link from "next/link";
import { colleges } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface ListCardProps {
  college: collegeType;
}

const convertToKey = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, " ")
    .trim()
    .replace(/\s+/g, "");

export default function ListCard({ college }: ListCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition">
      <img
        src={colleges[0].gallery[0].image}
        alt={college.name}
        className="w-full h-40 object-cover"
      />
      <div className="flex flex-col flex-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">{college.name}</CardTitle>
          <p className="text-xs text-gray-600">{college.address}</p>
        </CardHeader>
        <CardContent className="flex flex-col justify-between flex-1">
          <p className="text-sm mb-3 line-clamp-3 text-wrap">{college.description}</p>
          <Link
            href={`/colleges/${convertToKey(college.name)}`}
            className="mx-auto"
          >
            <Button className=" inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
              {" "}
              View Details{" "}
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}
