import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import MemeForm from "./MemeForm.js";
import Meme from "./Meme.js";

function App() {
  const memes = useSelector(store => store);

  return (
      <div className="App">
        <header className="App-header">
          Meme Generator Redux
        </header>
        <MemeForm />
        <section id="memeContainer">
          {
          memes.map(function (meme) {
            return (<Meme key={meme.key} id={meme.key} top={meme.top} url={meme.url} bottom={meme.bottom} />);
          })
          }
        </section>
      </div>
  );
}

export default App;
