import React from "react";
import { withRouter } from "react-router";

const ChucksCategory = ({ jokeCategory, history }) => {
  const getCategoryDetails = (detailCategory) => {
    history.push("/details?category=" + detailCategory);
  };
  return (
    <div className="col-md-4">
      <div className="card" onClick={() => getCategoryDetails(jokeCategory)}>
        <div className="card-body">
          <h5 className="card-title">{jokeCategory}</h5>
          <p className="card-text"></p>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default withRouter(ChucksCategory);
