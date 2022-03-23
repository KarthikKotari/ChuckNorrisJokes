import React from "react";

const ChucksCategory = ({ jokeCategory }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{jokeCategory}</h5>
          <p className="card-text"></p>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ChucksCategory;
