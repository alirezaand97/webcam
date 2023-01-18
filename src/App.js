import "./App.css";

import React from "react";
import WebcamImage from "./WebcamImage";
import WebcamVideo from "./WebcamVideo";

function App() {

  return (
    <div className="App">
      {/* <WebcamImage/> */}
      <WebcamVideo />
    </div>
  );
}

export default App;