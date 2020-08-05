import React from "react";
import "./App.css";
import data from "./data/data";
import Header from "./components/header";
import About from "./components/about";
import Schedule from "./components/schedule";
import Skills from "./components/skills";
import Media from "./components/media";
import Contact from "./components/contact";
import Follow from "./components/follow";

function App() {
  return (
    <div className="App">
      <Header data={data.Header} />
      <About data={data.About} />
      <Schedule data={data.Schedule} />
      <Skills data={data.Skills} />
      <Media data={data.Media} />
      <Contact data={data.Contact} />
      <Follow data={data.Follow} />
    </div>
  );
}

export default App;
