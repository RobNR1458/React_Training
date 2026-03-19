import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
  return (
    <>
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard userName="sydneys_sweeney" name="Sydney Sweeney" />
      <TwitterFollowCard userName="F1" name="Formula 1 Racing" />
    </>
  );
}

export default App;
