import type { Metadata } from "next";
import { Navbar } from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Auth",
  description: "Login or create an account",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-100 to-white">
      <Navbar/>
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
}
