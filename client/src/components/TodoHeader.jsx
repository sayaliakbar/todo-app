import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { useState, useEffect } from "react";
export default function TodoHeader() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" flex justify-between items-center w-full  text-white  sm:py-4">
      <h1 className=" font-bold tracking-[0.5rem] sm:tracking-[1.25rem] pt-1 sm:text-4xl text-2xl leading-none">
        TODO
      </h1>
      <button onClick={handleThemeSwitch}>
        <img
          className="w-4 h-4 sm:w-6 sm:h-6 hidden dark:block animate-spin"
          src={sunIcon}
          alt="sunIcon"
        />
        <img
          className="w-4 h-4 sm:w-6 sm:h-6 dark:hidden"
          src={moonIcon}
          alt="moonIcon"
        />
      </button>
    </div>
  );
}
