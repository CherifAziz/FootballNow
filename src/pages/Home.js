import React from "react";
import Navigation from "../components/Navigation";
import Match from "../components/Match";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Match />
    </div>
  );
};

export default Home;
