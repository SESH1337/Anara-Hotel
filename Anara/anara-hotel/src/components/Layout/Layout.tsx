import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
