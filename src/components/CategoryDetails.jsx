import React, { Component } from "react";
import queryString from "query-string";
import Axios from "axios";
import Moment from "moment";

class CategoryDetails extends Component {
  state = { categorydetail: {} };

  componentDidMount() {
    this.fetchCategories();
    console.log("this", this.props);
  }

  // Fetching categories
  fetchCategories = () => {
    //Using queryString to parse here
    let detailCat = queryString.parse(this.props.history.location.search);

    //Fetching the random joke from the selected category
    //Handl
    Axios.get(
      `https://api.chucknorris.io/jokes/random?query=${detailCat.category}`
    )
      .then((resp) => resp.data) //Outputting the data from the response
      .then((categorydetail) => this.setState({ categorydetail }));
  };

  render() {
    let { categorydetail } = this.state;

    //Handling dates
    var createdAt = categorydetail.created_at;
    var updatedAt = categorydetail.updated_at;
    return (
      <div className="row col-md-12">
        <div className=" col-md-3"></div>

        <div className="card col-md-6">
          <img
            className="card-img-top img-thumbnail"
            src={categorydetail.icon_url}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Chuck's Random Joke</h5>
            <p className="card-text">{categorydetail.value}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Created : {Moment(createdAt).format("DD-MM-YYYY HH:mm:ss")}
            </li>
            <li className="list-group-item">
              Updated : {Moment(updatedAt).format("DD-MM-YYYY HH:mm:ss")}
            </li>
          </ul>
          <div className="card-body">
            <a href={categorydetail.url} className="card-link">
              Joke's link
            </a>
          </div>
        </div>

        <div className=" col-md-3"></div>
      </div>
    );
  }
}

export default CategoryDetails;
