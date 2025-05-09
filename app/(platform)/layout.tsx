import Navbar from "./_components/navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets:["cyrillic"]
});

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${montserrat.className} h-full  `}
    >
      <Navbar />
      <div className="w-full  flex ">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
