import React, { Component } from "react";
import ChucksCategory from "./ChucksCategory";
import Axios from "axios";

class ChucksHome extends Component {
  state = {
    categories: [],
  };

  //Lifecycle function is called exactly once initially
  componentDidMount() {
    this.fetchCategories();
  }

  // Fetching categories
  fetchCategories = () => {
    Axios.get(`https://api.chucknorris.io/jokes/categories`)
      .then((resp) => resp.data) //When there is a response, give resp.data
      .then((categories) => this.setState({ categories }));
  };

  render() {
    const categoryList = this.state.categories.map((category, index) => (
      <ChucksCategory jokeCategory={category} key={index} />
    ));

    return (
      <div>
        <img
          src="./images/chuck.png"
          alt=""
          className="mx-auto d-block col-md-6"
        ></img>
        <br></br>
        <div className="row">{categoryList}</div>
      </div>
    );
  }
}

export default ChucksHome;
