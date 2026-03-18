import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <article className="tw-followCard">
      <header>
        <img alt="El avatar de midu" src="https://unavatar.io/midudev" />
        <div>
          <strong>Miguel Ángel Durán</strong>
          <span>@midudev</span>
        </div>
      </header>
    </article>
  );
}

export default App;
