import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { ThemeContext } from "./themeContext";
function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "dark wrapper" : "light wrapper"}>
      <Sidebar className={toggle ? "iconColor" : ""}/>
      <Home />
    </div>
  );
}

export default App;
