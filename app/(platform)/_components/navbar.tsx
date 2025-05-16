"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, Menu, X, UserCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const loggedIn = false
  const user = loggedIn ? { name: "John Doe" } : null

  const navLinks = [
    { href: "/college-list", label: "Colleges" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/terms", label: "Terms & Conditions" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-800 hidden sm:inline">MyCollege</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {!user ? (
            <div className="flex gap-2">
              <Button asChild size="sm">
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/create-account">Create Account</Link>
              </Button>
            </div>
          ) : (
            <Link href="/profile" className="text-gray-700 hover:text-blue-600">
              <UserCircle2 className="w-6 h-6" />
            </Link>
          )}
        </div>

        {/* Mobile menu icon (visible < lg) */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium py-2 ${
                pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {!user ? (
            <>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href="/create-account"
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                Create Account
              </Link>
            </>
          ) : (
            <Link
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              <UserCircle2 className="w-5 h-5" /> Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
