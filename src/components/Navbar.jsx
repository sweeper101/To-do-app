import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand">Navbar</a>
      <form className="form-inline">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Home
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
