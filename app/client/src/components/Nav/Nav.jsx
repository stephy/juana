import React from "react";

const Nav = () =>
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title has-text-white">
          juana
        </h1>
      </a>
    </div>

    <div className="navbar-start">
      <a className="navbar-item" href="/overview">
        Overview
      </a>
      <a className="navbar-item" href="/rentroll">
        Rent Roll
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <p className="control">
          <a className="button is-primary is-outlined is-inverted" href="/login">
            <span className="icon">
              <i className="fa fa-sign-in-alt"></i>
            </span>
            <span>Login</span>
          </a>
        </p>
      </div>
    </div>
  </nav>;

export default Nav;