import Navbar from "../(platform)/_components/navbar"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

