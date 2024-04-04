import React from "react";

const Layout = ({children}) => {
  return (
    <div className="layout">
      <header>
        <h1>James Bond bøker</h1>
      </header>
      <main>{children}</main>
      <footer>Bok søk 2024</footer>
    </div>
  )
}

export default Layout