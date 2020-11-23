import React from "react";

import "./App.css";

import MemeForm from "./MemeForm.js";
import Meme from "./Meme.js";

function App({ store }) {
  function handleChange() {
    console.log("subscribed");
  }

  store.subscribe(handleChange)

  return (
      <div className="App">
        <header className="App-header">
          Meme Generator Redux
        </header>
        <MemeForm store={store} />
        <section id="memeContainer">
        <Meme top={"TOP"} url={"https://www.springboard.com/assets/images/springboard-logo-dark@2x.png"} bottom={"BOTTOM"} />
          {
          store.getState().map(function (meme) {
            return (<Meme top={meme.top} url={meme.url} bottom={meme.bottom} />);
          })
          }
        </section>
      </div>
  );
}

export default App;

//onClick={function (event) { event.target.parentElement.remove(); }}
