import React, { Component } from "react";
import Axios from "axios";
import queryString from "query-string";
import Moment from "moment";

class SearchCategory extends Component {
  state = {
    searchResult: [],
  };

  //Lifecycle function is called exactly once initially
  componentDidMount() {
    this.fetchSearchData();
  }

  //Lifecycle function, need to be used bcoz of <browserRouter>
  //called when there is a change in props
  componentDidUpdate(prevProps) {
    //Checking if the current props and old props are changed
    if (this.props.location !== prevProps.location) {
      this.fetchSearchData();
    }
  }

  // Fetching Search data
  fetchSearchData = () => {
    //Using query-string to parse val
    let searchCat = queryString.parse(this.props.history.location.search);

    //Fetching data based on searchText
    Axios.get(
      `https://api.chucknorris.io/jokes/search?query=${searchCat.searchText}`
    )
      .then((resp) => resp.data)
      .then((data) => data.result) //Looking for result in data
      .then((searchResult) => this.setState({ searchResult }));
  };

  render() {
    // Custom styling
    const rowStyle = { margin: "10%" };
    const cardStyle = { height: "800px", margin: "2%", marginBottom: "10%" };
    const textStyle = { height: "150px" };

    return (
      <div className="row" style={rowStyle}>
        {this.state.searchResult.map((jokes) => (
          <div className="col-md-6" key={jokes.id}>
            <div className="card" style={cardStyle}>
              <img
                src={jokes.icon_url}
                alt={jokes.url}
                className="card-img-top"
              ></img>
              <div className="card-body">
                <p className="card-text" style={textStyle}>
                  {jokes.value}
                </p>
                <p className="card-text">
                  Updated:{" "}
                  {Moment(jokes.updated_at).format("DD-MM-YYYY HH:mm:ss")}
                </p>
                <p className="card-text">
                  Created:{" "}
                  {Moment(jokes.created_at).format("DD-MM-YYYY HH:mm:ss")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    //
  }
}

export default SearchCategory;
