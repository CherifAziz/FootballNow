import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Highlights_image from "../img/HIGHLIGHTS(2).png";

const Highlights = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [theArray, setTheArray] = useState([]);
  let pastDate = new Date(new Date().setDate(new Date().getDate() - 7));

  const getArticle = () => {
    // console.log(id);
    // navigate("article", { state: { Article } });
  };

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZYXipV38GFAws96PcYgDFh1VeDDBLYac&channelId=UCfj4kQ6_mYO5r4hzX5KloVw&part=snippet,id&maxResults=20&q=Résumé"
      )
      .then(function (res) {
        setData(res.data);
      });
  }, []);

  // useEffect(() => {
  //   data?.items?.map((video, index) =>
  //     setTheArray((prevArray) => [...prevArray, video?.id?.videoId])
  //   );
  //   axios
  //     .get(
  //       "https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=" +
  //         theArray.join() +
  //         "&key=AIzaSyDZYXipV38GFAws96PcYgDFh1VeDDBLYac"
  //     )
  //     .then(function (res) {
  //       setData2(res.data);
  //     });
  // }, []);

  return (
    <div>
      {/* {console.log(data)}
      {console.log(theArray)}
      {console.log(data2)} */}
      {/* {console.log(theArray?.join())} */}
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
        <div className="highlights-grid">
          <header className="img-header">
            <img src={Highlights_image} alt="" />
          </header>
          {data?.items?.map((video, index) => (
            <article className="body">
              <div className="container">
                <a
                  className="logout-button"
                  href={"https://www.youtube.com/watch?v=" + video.id.videoId}
                  style={{ cursor: "pointer" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="image"
                    src={video.snippet.thumbnails.medium.url}
                  />
                  <div class="play-button-outer">
                    <div class="play-button"></div>
                  </div>
                  <div class="play-button-outer2">
                    <div class="play-button2">18:43</div>
                  </div>
                </a>
              </div>
              <h1 className="small-text">
                {video.snippet.title?.replaceAll("&#39;", "'")}
              </h1>
            </article>
          ))}
        </div>
      </li>
    </div>
  );
};

export default Highlights;
