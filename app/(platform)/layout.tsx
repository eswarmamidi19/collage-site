import Navbar from "./_components/navbar";

import { Poppins } from "next/font/google";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${textFont.className} h-full  `}
    >
      <Navbar />
      <div className="w-full  flex bg-slate-100 mt-10">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
