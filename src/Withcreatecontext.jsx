import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export default function Withcreatecontext() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  return (
    <div>
      <h2>This is the Page</h2>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h3>This is the Header</h3>
      <ThemeToggle />
    </div>
  );
}

function ThemeToggle() {
  // 3. Access context anywhere without props
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Dark/light
      </button>
    </div>
  );
}
