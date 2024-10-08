// import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abouttext}</Link>
            </li> */}
          </ul>
          <ul className="background-btn ">
            <li className="red-btn" onClick={() => props.btnBackground("red")}> </li>
            <li className="green-btn " onClick={() => props.btnBackground("green")}></li>
            <li className="grey-btn" onClick={() => props.btnBackground("grey")}></li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === "light" ?"dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.btnColor}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ?"dark" : "light"} mode</label>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: 'Stranger'
};