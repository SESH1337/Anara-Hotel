import { useLocation } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import React from 'react'
import Hero from '../Hero'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      {isHomePage && <Hero />}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
