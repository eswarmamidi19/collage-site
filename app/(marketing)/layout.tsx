import { Navbar } from "./_components/Navbar";

type MarketingLayoutProps = {
  children: React.ReactNode;    
}

export default function MarketingLayout({children} : MarketingLayoutProps) {
  return (
    <div className="h-full bg-slate-100"> 
     <Navbar />
     <main className="bg-slate-100 pt-40 pb-20 md:pb-32">{children}</main>
    </div>
  );
}