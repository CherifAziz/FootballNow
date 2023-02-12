import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ game }) => {
  const [data, setData] = useState([]);
  const [data_cpy, setData_cpy] = useState([]);
  let currentDate = new Date().toJSON().slice(0, 10);
  const conditions = ["1H", "HT", "2H", "ET", "BT"];
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
      });
  }, []);

  return (
    <div>
      <li className="big-card">
        {/* {data_cpy2.response?.map((game, index) =>
        // conditions.some((el) => game.fixture.status.short.includes(el)) ? (
        //   <div className="texta">{(live = 1)}</div>
        // ) : null
        game.fixture.date.slice(0, 10).includes(currentDate)
      ) ? (
        <div className="texta">{(live = 1)}</div>
      ) : null} */}
        <li className="football-live-mini-card4" style={{ marginTop: -50 }}>
          <h1>Live Fixtures</h1>
        </li>
        <li className="football-live-big-card4">
          {/* {console.log(data_cpy)} */}
          {data.response?.map((game, index) => (
            <div className="Date2">
              <div className="Time">
                <h1 className="time">{game.fixture.date.slice(11, 16)}</h1>
                <h1 className="date">
                  {/* {console.log(game.fixture.status.short)} */}
                  {game.fixture.date.slice(8, 10)}{" "}
                  {months[parseInt(game.fixture.date.slice(5, 6))]}
                </h1>
              </div>
            </div>
          ))}
          {data.response?.map((game, index) => (
            <div className="match2">
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
      </li>
    </div>
  );
};

export default Card;
