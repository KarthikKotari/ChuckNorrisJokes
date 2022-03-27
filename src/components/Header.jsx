import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
  //Called by onSubmit
  submitHandler = (evt) => {
    evt.preventDefault();
    let { history } = this.props;
    history.push("/search?searchText=" + this.refs.searchTf.value);
  };
  render() {
    //Style variable for the image
    let imageSize = { width: "30px", paddingRight: "5px" };
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src="/images/chuck-norris.png"
            alt="Chuck Norris"
            className="img"
            style={imageSize}
          ></img>
          <a className="navbar-brand">Chuck Norris Jokes</a>

          <div className="navbar-collapse collapse show" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={this.submitHandler}>
              <input
                className="form-control me-sm-2"
                type="search"
                ref="searchTf"
                placeholder="Search.."
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
