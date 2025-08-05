import React, { useState } from "react";

export default function Withoutcreatecontext() {
  const [theme, setTheme] = useState("light");

  return (
    <Page mode={theme} changeMode={setTheme} />
  );
}

function Page({ mode, changeMode }) {
  return (
    <div style={{color:"black"}}>
      <h2>This is the testing page Without CreateContext</h2>
      <Header pageMode={mode} switchTheme={changeMode} />
    </div>
  );
}

function Header({ pageMode, switchTheme }) {
  return (
    <div style={{color:"yellow"}}>
      <h3>This is the Header</h3>
      <ThemeToggle currentTheme={pageMode} toggleTheme={switchTheme} />
    </div>
  );
}

function ThemeToggle({ currentTheme, toggleTheme }) {
  return (
    <div>
      <p style={{color:"orange"}}>Current Theme: {currentTheme}</p>
      <button style={{color:"orange"}} onClick={() => toggleTheme(currentTheme === "light" ? "dark" : "light")}>
        Changer
      </button>
    </div>
  );
}
