import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const logout = async () => {
    sessionStorage.clear();
  };

  return (
    <div>
      <div className="services-navig">
        <div className="logo">
          <img src="https://cdn.discordapp.com/attachments/772116245734227989/1063140895270117376/logo.png" />
        </div>
        <ul>
          <NavLink
            to="/home"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>HOME</li>
          </NavLink>

          <NavLink
            to="/live"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>LIVE</li>
          </NavLink>
          <NavLink
            to="/leagues"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>LEAGUES</li>
          </NavLink>
          <NavLink
            to="/news/popularity"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>NEWS</li>
          </NavLink>
          <NavLink
            to="/highlights"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>HIGHLIGHTS</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
