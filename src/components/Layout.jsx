// Layout.js
import React from 'react';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>James Bond Books</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2024 James Bond Books</p>
      </footer>
    </div>
  );
}