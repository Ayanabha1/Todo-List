import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Todos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {props.condition ? (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            "Condtion found false"
          )}
        </div>
      </div>
    </nav>
  );
}

// default props : These props values will be taken if not passed from the parent
header.defaultProps = {
  title: "Enter your title here",
  condition: true,
};

// proptypes sets the type of properties passed as props ...
header.propTypes = {
  title: PropTypes.string,
  // It says that proptype expects string as title ... if we send Link number from App.js and then run it even then it will show the number in the corresponding space but it will show an warning in the console which helps Link lot in debugging ... And as it is an object we don't require semicolon
  condition: PropTypes.bool.isRequired,
  // It says that type of conditions should be boolean and it is mandatory to pass...otherwise it will show an error in the console
};
