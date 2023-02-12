import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ game }) => {
  const [data, setData] = useState([]);
  const [data_cpy, setData_cpy] = useState([]);
  const [data_cpy2, setData_cpy2] = useState([]);
  let live = 0;
  let currentDate = new Date().toJSON().slice(0, 10);
  let pastDate = new Date(new Date().setDate(new Date().getDate() - 14))
    .toJSON()
    .slice(0, 10);
  let futurDate = new Date(new Date().setDate(new Date().getDate() + 14))
    .toJSON()
    .slice(0, 10);
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
        "https://v3.football.api-sports.io/fixtures?league=" +
          sessionStorage.getItem("id") +
          "&season=2022&from=" +
          pastDate +
          "&to=" +
          futurDate,
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "d490c55c9cb07033c8dfd9868c8f848d",
          },
        }
      )
      .then(function (res) {
        setData_cpy2(res.data);
        setData_cpy(res.data.response?.slice(0, 4));
      });
  }, []);

  return (
    <div>
      {data_cpy2.response?.map((game, index) =>
        // conditions.some((el) => game.fixture.status.short.includes(el)) ? (
        //   <div className="texta">{(live = 1)}</div>
        // ) : null
        game.fixture.date.slice(0, 10).includes(currentDate)
      ) ? (
        <div className="texta">{(live = 1)}</div>
      ) : null}
      {live === 1 ? (
        <li className="football-live-mini-card4" style={{ marginTop: 50 }}>
          <h1>Today Fixtures</h1>
        </li>
      ) : null}
      {live === 1 ? (
        <li className="football-live-big-card4">
          {/* {console.log(data_cpy)} */}
          {data_cpy2.response
            ?.filter((game) =>
              game.fixture.date.slice(0, 10).includes(currentDate)
            )
            ?.map((game, index) => (
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
          {data_cpy2.response
            ?.filter((game) =>
              game.fixture.date.slice(0, 10).includes(currentDate)
            )
            ?.map((game, index) => (
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
      ) : null}
      <div class="grid-container">
        <div className="grid1">
          <li className="football-live-mini-card4" style={{ marginTop: 50 }}>
            <h1>Last Results</h1>
          </li>
          <li className="football-live-big-card4">
            {/* {console.log(data_cpy)} */}
            {data_cpy2.response
              ?.filter(
                (game) =>
                  new Date(game.fixture.date) >=
                    new Date(new Date().setDate(new Date().getDate() - 14)) &&
                  new Date(game.fixture.date) < new Date()
              )
              ?.map((game, index) => (
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
            {data_cpy2.response
              ?.filter(
                (game) =>
                  new Date(game.fixture.date) >=
                    new Date(new Date().setDate(new Date().getDate() - 14)) &&
                  new Date(game.fixture.date) < new Date()
              )
              ?.map((game, index) => (
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
        </div>
        <div className="grid2">
          <li className="football-live-mini-card4" style={{ marginTop: 50 }}>
            <h1>Planned</h1>
          </li>
          <li className="football-live-big-card4">
            {/* {console.log(data_cpy)} */}
            {data_cpy2.response
              ?.filter(
                (game) =>
                  new Date(game.fixture.date) <=
                    new Date(new Date().setDate(new Date().getDate() + 14)) &&
                  new Date(game.fixture.date) > new Date()
              )
              ?.map((game, index) => (
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
            {data_cpy2.response
              ?.filter(
                (game) =>
                  new Date(game.fixture.date) <=
                    new Date(new Date().setDate(new Date().getDate() + 14)) &&
                  new Date(game.fixture.date) > new Date()
              )
              ?.map((game, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default Card;
