type MarketingLayoutProps = {
  children: React.ReactNode;    
}

export default function MarketingLayout({children} : MarketingLayoutProps) {
  return (
    <div className="h-full bg-slate-100"> 
       hi markreting    
      {children}
    </div>
  );
}