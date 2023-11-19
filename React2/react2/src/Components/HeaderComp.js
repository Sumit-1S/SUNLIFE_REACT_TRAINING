import React from 'react';
import { NavLink } from "react-router-dom";

function HeaderComp(props){
    return (
      <div>
        <NavLink to="/" exact={true}>
          Login
        </NavLink>{" "}&nbsp;
        <NavLink to="/register" exact={true}>
          Register
        </NavLink>{" "}&nbsp;
        <NavLink to="/userDetails" exact={true}>
          User Details
        </NavLink>{" "}&nbsp;
        <NavLink to="/portfolio" exact={true}>
          Portfolio
        </NavLink>{" "}&nbsp;
      </div>
    );
}

export default HeaderComp;