import React, { Component } from "react";
import ChucksCategory from "./ChucksCategory";

class ChucksHome extends Component {
  state = {
    categories: [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel",
    ],
  };
  render() {
    const categoryList = this.state.categories.map((category) => (
      <ChucksCategory jokeCategory={category} />
    ));
    return (
      <div>
        <img src="./images/chuck.png" alt="" className="card-img-top"></img>
        <br></br>
        <div className="row">{categoryList}</div>
      </div>
    );
  }
}

export default ChucksHome;
