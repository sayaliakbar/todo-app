import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";

import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <div className="w-full flex items-center justify-center relative ">
        {/* Desktop Light Mode */}
        <picture className="w-full dark:hidden">
          <source
            className="w-full"
            media="(min-width: 425px)"
            srcSet={bgDesktopLight}
          />
          <img className="w-full" src={bgMobileLight} alt="Mobile Light" />
        </picture>

        <picture className="w-full hidden dark:block">
          <source
            className="w-full"
            media="(min-width: 425px)"
            srcSet={bgDesktopDark}
          />
          <img className="w-full" src={bgMobileDark} alt="Mobile Light" />
        </picture>

        {/* Todo Container */}
        <TodoContainer className="absolute top-0"></TodoContainer>
      </div>
    </>
  );
}

export default App;
