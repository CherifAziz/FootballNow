import React from "react";
import Navigation from "../components/Navigation";
import News_recent from "../components/News_recent";

const Recent_news = () => {
  return (
    <div>
      <Navigation />
      {sessionStorage.removeItem("id")}
      <News_recent />
    </div>
  );
};

export default Recent_news;
