import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Ranking = () => {
  const [data, setData] = useState([]);
  const [data_cpy, setData_cpy] = useState([]);
  const [data_cpy2, setData_cpy2] = useState([]);
  let currentDate = new Date().toJSON().slice(0, 10);
  let pastDate = new Date(new Date().setDate(new Date().getDate() - 14))
    .toJSON()
    .slice(0, 10);
  let futurDate = new Date(new Date().setDate(new Date().getDate() + 14))
    .toJSON()
    .slice(0, 10);
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
        "https://v3.football.api-sports.io/standings?league=" +
          sessionStorage.getItem("id") +
          "&season=2022",
        {
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "d490c55c9cb07033c8dfd9868c8f848d",
          },
        }
      )
      .then(function (res) {
        setData(
          res.data.response
            .slice(0, 1)
            .shift()
            .league.standings.slice(0, 1)
            .shift()
        );
        // setData_cpy(data?.response?.first());
        // setData_cpy2(data_cpy.league.standings.first());
        // data?.response?.map((league, index) => setData_cpy(league));
        // data_cpy?.league?.standings?.map((club, index) => setData_cpy2(club));
      });
  }, []);

  //   axios
  //     .get(
  //       "https://v3.football.api-sports.io/fixtures?league=" +
  //         sessionStorage.getItem("id") +
  //         "&season=2022&from=" +
  //         pastDate +
  //         "&to=" +
  //         futurDate,
  //       {
  //         headers: {
  //           "x-rapidapi-host": "v3.football.api-sports.io",
  //           "x-rapidapi-key": "d490c55c9cb07033c8dfd9868c8f848d",
  //         },
  //       }
  //     )
  //     .then(function (res) {
  //       setData_cpy2(res.data);
  //       setData_cpy(res.data.response?.slice(0, 4));
  //     });
  // }, []);

  return (
    <div>
      <li className="big-card">
        <li className="football-live">
          <li className="league-mini-card">
            <h1 className="stats">#</h1>
            <h1 className="stats">CLUB</h1>
            <h1 className="stats">MJ</h1>
            <h1 className="stats">V</h1>
            <h1 className="stats">N</h1>
            <h1 className="stats">D</h1>
            <h1 className="stats">B</h1>
            <h1 className="stats" style={{ fontWeight: "bold" }}>
              PTS
            </h1>
          </li>
          <li className="league-ranking">
            {data.map((club, index) => (
              <div className="rank">
                <h1>{club.rank}</h1>
              </div>
            ))}

            {data.map((club, index) => (
              <div className="Club">
                <img className="club-logo" src={club.team.logo} />
                <span className="club-name">{club.team.name}</span>
              </div>
            ))}
            {data.map((club, index) => (
              <div className="mj">
                <h1 style={{ fontWeight: "lighter" }}>{club.all.played}</h1>
              </div>
            ))}
            {data.map((club, index) => (
              <div className="mj">
                <h1 style={{ fontWeight: "lighter" }}>{club.all.win}</h1>
              </div>
            ))}
            {data.map((club, index) => (
              <div className="mj">
                <h1 style={{ fontWeight: "lighter" }}>{club.all.draw}</h1>
              </div>
            ))}
            {data.map((club, index) => (
              <div className="mj">
                <h1 style={{ fontWeight: "lighter" }}>{club.all.lose}</h1>
              </div>
            ))}
            {data.map((club, index) => (
              <div className="mj">
                <h1 style={{ fontWeight: "lighter" }}>
                  {club.all.goals.for}:{club.all.goals.against}
                </h1>
              </div>
            ))}
            {data.map((club, index) => (
              <div className="mj">
                <h1 style={{ fontWeight: "bold" }}>{club.points}</h1>
              </div>
            ))}
          </li>
          <Card />
        </li>
      </li>
    </div>
  );
};

export default Ranking;
