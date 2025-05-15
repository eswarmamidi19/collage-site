"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, Menu, X, UserCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Simulated auth (replace with real auth logic)
// const user = {
//   name: "John Doe", // if null or undefined → not logged in
// }

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn] = useState(false);
  const user = loggedIn ? { name: "John Doe" } : null; // Simulated user state
  const navLinks = [
    { href:"/college-list" , label : "Colleges" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/terms", label: "Terms & Conditions" },
  ]

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center z-50">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          <span className="font-semibold text-lg hidden sm:inline">MyCollege</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-blue-600 transition">
              {link.label}
            </Link>
          ))}

          {!user ? (
            <>
              <Button asChild size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/create-account">Create Account</Link>
              </Button>
            </>
          ) : (
            <Link href="/profile">
              <UserCircle2 className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </Link>
          )}
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white border-t shadow-md flex flex-col items-start p-4 md:hidden space-y-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="w-full py-2">
              {link.label}
            </Link>
          ))}

          {!loggedIn ? (
            <>
              <Link href="/login" className="w-full py-2" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link href="/create-account" className="w-full py-2" onClick={() => setMenuOpen(false)}>
                Create Account
              </Link>
            </>
          ) : (
            <Link href="/profile" className="w-full py-2 flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <UserCircle2 className="w-5 h-5" /> Profile
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
