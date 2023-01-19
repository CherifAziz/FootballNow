import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Match = () => {
  const [data, setData] = useState([]);
  let currentDate = new Date().toJSON().slice(0, 10);

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
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <li className="big-card">
        <li className="football-live">
          <li className="football-live-mini-card">
            <h1>TIME</h1>
            <h1 className="liga">LIGA</h1>
          </li>
          <li
            className="football-live-big-card"
            style={{ height: 130 + 100 * (data.results - 2) }}
          >
            <hr
              class="vertical"
              style={{
                top: 100,
                left: 180,
                height: 130 + 100 * (data.results - 2),
              }}
            />
            {data.response?.map((game, index) => (
              <Card key={index} game={game} />
            ))}
            {/* <hr class="style7" />
            <img
              className="logo-liga"
              src="https://media-2.api-sports.io/football/leagues/135.png"
            />
            <img
              className="logo-club1"
              src="https://media.api-sports.io/football/teams/499.png"
            />
            <img
              className="logo-club2"
              src="https://media-2.api-sports.io/football/teams/514.png"
            />
            <h1>19:30</h1>
            <h1 className="ligue">Serie A</h1>
            <h1 className="name-club1">Atlanta</h1>
            <h1 className="name-club2">Salernitana</h1>
            <h1 className="score">0:1</h1>
            <h1 className="date">22 apr</h1> */}
            {/* <hr class="style7" />
            <img
              className="logo-liga"
              src="https://media-2.api-sports.io/football/leagues/135.png"
            />
            <img
              className="logo-club1"
              src="https://media.api-sports.io/football/teams/499.png"
            />
            <img
              className="logo-club2"
              src="https://media-2.api-sports.io/football/teams/514.png"
            />
            <h1>19:30</h1>
            <h1 className="ligue">Serie A</h1>
            <h1 className="name-club1">Atlanta</h1>
            <h1 className="name-club2">Salernitana</h1>
            <h1 className="score">0:1</h1>
            <h1 className="date">22 apr</h1> */}
            <hr
              class="vertical"
              style={{
                top: 100,
                left: 420,
                height: 130 + 100 * (data.results - 2),
              }}
            />
          </li>
        </li>
      </li>
    </div>
  );
};

export default Match;
