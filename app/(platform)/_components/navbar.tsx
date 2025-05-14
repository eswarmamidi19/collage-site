"use client";
import Link from "next/link";
import { UserCircle } from "lucide-react"; // Profile icon
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "College List", href: "/college-list" },
  ];

  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
      <div className="flex gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium ${
              pathname === item.href ? "text-blue-600" : "text-gray-700"
            } hover:text-blue-600 transition`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <UserCircle className="w-7 h-7 text-gray-700 hover:text-blue-600 cursor-pointer transition" />
      </div>
    </nav>
  );
}
