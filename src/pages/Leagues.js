import React from "react";
import Navigation from "../components/Navigation";
import Ranking from "../components/Ranking";
import All_leagues from "../components/All_leagues";

const Leagues = () => {
  return (
    <div>
      <Navigation />
      {sessionStorage.getItem("id") === null ? <All_leagues /> : <Ranking />}
    </div>
  );
};

export default Leagues;
