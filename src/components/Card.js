import React from "react";

const Card = ({ game }) => {
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
  return (
    <div>
      <hr class="style7" />
      <img className="logo-liga" src={game.league.logo} />
      <img className="logo-club1" src={game.teams.home.logo} />
      <img className="logo-club2" src={game.teams.away.logo} />
      <h1>{game.fixture.date.slice(11, 16)}</h1>
      <h1 className="ligue">{game.league.name}</h1>
      <h1 className="name-club1">{game.teams.home.name}</h1>
      <h1 className="name-club2">{game.teams.away.name}</h1>
      <h1 className="score">
        {game.goals.home}:{game.goals.away}
      </h1>
      <h1 className="date">
        {game.fixture.date.slice(8, 10)}{" "}
        {months[parseInt(game.fixture.date.slice(5, 6))]}
      </h1>
      {/* <hr class="style7" /> */}
    </div>
  );
};

export default Card;
