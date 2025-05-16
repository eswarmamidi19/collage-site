"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function CreateAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4">
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-1">
            Join the Journey 🚀
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Create your account to explore hundreds of colleges.
          </p>
        </div>

        <form className="space-y-4">
          <Input type="text" placeholder="Full Name" required />

          <div>
            <Input type="tel" placeholder="Phone Number (required)" required />
            <p className="text-xs text-gray-500 mt-1 ml-1">
              We&apos;ll use your phone number to verify your identity.
            </p>
          </div>

          <div>
            <Input type="email" placeholder="Email (optional)" />
            <p className="text-xs text-gray-400 mt-1 ml-1">
              Used for communication, if provided.
            </p>
          </div>


          <Button type="submit" className="w-full mt-2">
              Create Account
          </Button>
        </form>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
