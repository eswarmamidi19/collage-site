import  Navbar  from "./_components/Navbar";

type MarketingLayoutProps = {
  children: React.ReactNode;    
}

export default function MarketingLayout({children} : MarketingLayoutProps) {
  return (
    <div className="h-screen flex flex-col justify-between items-center bg-slate-100"> 
     <Navbar />
     <main className="bg-slate-100 h-full mt-10">{children}</main>
    </div>
  );
}
