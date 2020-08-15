import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <h3 className={classes.centered}>Student List</h3>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
