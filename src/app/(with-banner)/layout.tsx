import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <marquee>Un layout que esta en todos lados</marquee>
      {children}
    </>
  )
}

export default Layout
