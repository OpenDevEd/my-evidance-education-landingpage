import { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}