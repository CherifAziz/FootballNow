import React from "react";
import Navigation from "../components/Navigation";
import Mercato from "../components/Mercato";

const Mercato_news = () => {
  return (
    <div>
      <Navigation />
      {sessionStorage.removeItem("id")}
      <Mercato />
    </div>
  );
};

export default Mercato_news;
