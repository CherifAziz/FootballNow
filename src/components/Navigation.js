import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const logout = async () => {
    sessionStorage.clear();
  };

  return (
    <div>
      <div className="services-navig">
        <div class="logo">
          <img src="https://cdn.discordapp.com/attachments/772116245734227989/1063140895270117376/logo.png" />
        </div>
        <ul>
          <NavLink
            to="/home"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>LIVE</li>
          </NavLink>
          <NavLink
            to="/all"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>CHAMPIONNATS</li>
          </NavLink>
          <NavLink
            to="/Workspace"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>NEWS</li>
          </NavLink>
          <NavLink
            to="/My_Workflow"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>RESUME</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
