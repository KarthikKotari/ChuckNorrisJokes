import React from "react";
import Header from "./Header";
import ChucksHome from "./ChucksHome";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryDetails from "./CategoryDetails";
import SearchCategory from "./SearchCategory";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <div className="container">
          <Route path="/" exact={true} component={ChucksHome}></Route>
          <Route path="/details" component={CategoryDetails}></Route>
          <Route path="/search" component={SearchCategory}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
