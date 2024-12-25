import { Navbar } from '@/components/Navbar'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    
  return (
    <div className="h-full">
      <Navbar />
      <main className="container mx-auto h-full pt-16">
        {children}
      </main>
    </div>
  )
}
