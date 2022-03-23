import React from "react";
import Header from "./Header";
import ChucksHome from "./ChucksHome";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <ChucksHome />
      </div>
    </div>
  );
}

export default App;
