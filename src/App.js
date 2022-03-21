import React, { useState } from 'react'

import { Navbar } from './components/Navbar'; // Navbar inside the curly braces cuz we're using "export const" instead of "export defalt"
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

console.log(Navbar);
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;