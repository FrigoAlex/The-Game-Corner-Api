import db from "../../db.json";

const getGame = (id) => {
  return db.games.find((game) => game.id === id);
};

const getGames = (page = 1, limit = 10, filter = "") => {
  const games =
    filter !== ""
      ? db.games.filter((game) =>
        game.name.toLowerCase().includes(filter.toLowerCase())
      )
      : db.games;
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    totalPages: Math.ceil(games.length / limit),
    games: games.slice(start, end)
  };
};
const getComments = (gameId) => {
  return db.comments.filter((x) => x.gameId === Number(gameId));
};

export { getGames, getGame, getComments };

export default getGames;
