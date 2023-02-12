import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pl from "../img/1.png";
import bundesliga from "../img/2.png";
import liga from "../img/3.png";
import seriea from "../img/4.png";
import ligue1 from "../img/5.png";

import Card from "./Card";

// d490c55c9cb07033c8dfd9868c8f848d
// 70af5b3523f2df56328d500c37f643ac

const Match = () => {
  const [data, setData] = useState([]);
  const [data_cpy, setData_cpy] = useState([]);
  let currentDate = new Date().toJSON().slice(0, 10);
  const navigate = useNavigate();
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const All_matchs = () => {
    navigate("/live");
  };

  const setLeague = (id) => {
    console.log(id);
    sessionStorage.setItem("id", id);
    navigate("/leagues");
  };

  useEffect(() => {
    axios
      .get(
        "https://v3.football.api-sports.io/fixtures?status=1H-HT-2H-ET-BT-P&&date=" +
          currentDate,
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "d490c55c9cb07033c8dfd9868c8f848d",
          },
        }
      )
      .then(function (res) {
        setData(res.data);
        setData_cpy(res.data.response?.slice(0, 4));
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
        <li className="football-live-mini-card">
          <h1>TIME</h1>
          <h1>LEAGUE</h1>
        </li>
        <li className="football-live-big-card">
          {/* {console.log(data_cpy)} */}
          {data_cpy?.map((game, index) => (
            <div className="Date">
              <div className="Time">
                <h1 className="time">{game.fixture.date.slice(11, 16)}</h1>
                <h1 className="date">
                  {game.fixture.date.slice(8, 10)}{" "}
                  {months[parseInt(game.fixture.date.slice(5, 6))]}
                </h1>
              </div>
            </div>
          ))}
          {data_cpy?.map((game, index) => (
            <div className="Yop">
              <img className="logo-liga" src={game.league.logo} />
              <span className="ligue">{game.league.name}</span>
            </div>
          ))}

          {data_cpy?.map((game, index) => (
            <div className="match">
              <span className="name-club1">{game.teams.home.name}</span>
              <div className="testa">
                <img className="logo-club1" src={game.teams.home.logo} />
                <div className="Score">
                  <span className="score">
                    {game.goals.home}:{game.goals.away}
                  </span>
                  <span className="game-time">
                    {game.fixture.status.elapsed}'
                  </span>
                </div>
                <img className="logo-club2" src={game.teams.away.logo} />
              </div>
              <span className="name-club2">{game.teams.away.name}</span>
            </div>
          ))}
        </li>
        <li className="football-live-mini-card2">
          <span onClick={All_matchs}>MORE EVENTS ▼</span>
        </li>
        <li className="leagues">
          <h1>FOOTBALL LEAGUES</h1>
          <h1 className="liga">TOP LEAGUE</h1>
        </li>
        <li className="leagues-big-card">
          <div className="row">
            <div className="column">
              <a
                className="logout-button"
                onClick={() => setLeague(39)}
                style={{ cursor: "pointer" }}
              >
                <img src={pl} />
              </a>
            </div>
            <div className="column">
              <a
                className="logout-button"
                style={{ cursor: "pointer" }}
                onClick={() => setLeague(78)}
              >
                <img src={bundesliga} />
              </a>
            </div>
            <div className="column">
              <a
                className="logout-button"
                style={{ cursor: "pointer" }}
                onClick={() => setLeague(140)}
              >
                <img src={liga} />
              </a>
            </div>
            <div className="column">
              <a
                className="logout-button"
                style={{ cursor: "pointer" }}
                onClick={() => setLeague(135)}
              >
                <img src={seriea} />
              </a>
            </div>
            <div className="column">
              <a
                className="logout-button"
                style={{ cursor: "pointer" }}
                onClick={() => setLeague(61)}
              >
                <img src={ligue1} />
              </a>
            </div>
          </div>
        </li>
      </li>
    </div>
  );
};

export default Match;
