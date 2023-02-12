import React from "react";
import Navigation from "../components/Navigation";
import All_news from "../components/All_news";

const News = () => {
  return (
    <div>
      <Navigation />
      {sessionStorage.removeItem("id")}
      <All_news />
    </div>
  );
};

export default News;
