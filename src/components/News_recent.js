import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const News_recent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [datacpy, setDatacpy] = useState([]);
  const [FirstArticle, setArticle] = useState([]);
  let pastDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toJSON()
    .slice(0, 10);
  let currentDate = new Date().toJSON().slice(0, 10);

  const getArticle = (Article) => {
    // console.log(id);
    navigate("/news/article", { state: { Article } });
  };

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=football&from=" +
          pastDate +
          "&to=" +
          currentDate +
          "&sortBy=publishedAt&domains=lequipe.fr&apiKey=433c0ba705154f81b35dc996e99c3bcd"
      )
      .then(function (res) {
        setData(res.data);
        setArticle(res.data.articles.slice(0, 1).shift());
      });
  }, []);

  return (
    <div>
      <li className="football-live-mini-card6">
        <h1>LEAGUES</h1>
      </li>
      <li className="football-live-big-card6">
        <div className="side-name">
          <a href="/">Premier League</a>
        </div>
        <div className="side-name">
          <a href="/">Bundesliga</a>
        </div>
        <div className="side-name">
          <a href="/">LaLiga</a>
        </div>
        <div className="side-name">
          <a href="/">Serie A</a>
        </div>
        <div className="side-name">
          <a href="/">Ligue 1</a>
        </div>
      </li>
      <li className="big-card">
        <div className="services-navig2">
          <ul>
            <NavLink
              to="/news/popularity"
              className={(nav) => (nav.isActive ? "nav-active2" : "")}
            >
              <li>Popularity</li>
            </NavLink>
            <NavLink
              to="/news/recent"
              className={(nav) => (nav.isActive ? "nav-active2" : "")}
            >
              <li>Recents</li>
            </NavLink>
            <NavLink
              to="/news/mercato"
              className={(nav) => (nav.isActive ? "nav-active2" : "")}
            >
              <li>Mercato</li>
            </NavLink>
          </ul>
        </div>
        <div className="news-grid">
          <header className="header">
            <div className="container">
              <a
                className="logout-button"
                onClick={() => getArticle(FirstArticle)}
                style={{ cursor: "pointer" }}
              >
                {console.log(data)}
                {console.log(FirstArticle)}
                <img className="image" src={FirstArticle?.urlToImage} />
                <div className="middle">
                  <div className="text">See article --></div>
                </div>
              </a>
            </div>
          </header>
          <div className="content">
            <h1 className="title">{FirstArticle?.title}</h1>
            {FirstArticle?.description?.slice(0, 1) == "<" ? (
              <p>{FirstArticle?.description?.slice(22)}</p>
            ) : (
              <p>{FirstArticle?.description}</p>
            )}
          </div>
          <aside
            className="sidebar"
            style={{
              gridRowEnd: data?.articles?.length / 2 + 1,
            }}
          ></aside>
          {data?.articles?.slice(1)?.map((article, index) => (
            <article className="body">
              <div className="container">
                <a
                  className="logout-button"
                  onClick={() => getArticle(article)}
                  style={{ cursor: "pointer" }}
                >
                  <img className="image" src={article.urlToImage} />
                  <div className="middle">
                    <div className="text">See article --></div>
                  </div>
                </a>
              </div>
              <h1 className="small-text">{article.title}</h1>
            </article>
          ))}
        </div>
      </li>
    </div>
  );
};

export default News_recent;
