import React from "react";
import Navigation from "../components/Navigation";
import Highlights from "../components/Highlights";

const Highlights_page = () => {
  return (
    <div>
      <Navigation />
      {sessionStorage.removeItem("id")}
      <Highlights />
    </div>
  );
};

export default Highlights_page;
