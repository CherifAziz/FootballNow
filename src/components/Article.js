import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Article = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  // const { id, color } = state;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: state.Article.url,
          content: state.Article.content,
        }),
      });
      setData(await res.json());
      // const response = await res.json();
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      {console.log(state)}
      {console.log(data)}
      <li className="big-card">
        <div className="article-grid">
          <div className="article">
            <h1 className="title">{state.Article.title}</h1>
            <img className="image2" src={state.Article.urlToImage} />
            {state.Article.description.slice(0, 1) == "<" ? (
              <h3>{state.Article.description.slice(22)}</h3>
            ) : (
              <h3>{state.Article.description}</h3>
            )}
            <br></br>
            <p>{data?.message?.slice(0, data.message.length / 2)}</p>
            <br></br>
            <p>
              {data?.message?.slice(
                data.message.length / 2,
                data?.message?.length
              )}
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Article;
