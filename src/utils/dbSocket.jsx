import db from "../../db.json";
import dataFetcher from "../utils/dataFetcher";

const getGame = (id) => {
  return db.games.find((game) => game.id === id);
};

const getGames = async (page = 1, limit = 10, filter = "") => {
  const { paginas, data } = await dataFetcher(page, limit, filter);
  return {
    totalPages: paginas,
    games: data
  };
};
const getComments = (gameId) => {
  return db.comments.filter((x) => x.gameId === Number(gameId));
};

export { getGames, getGame, getComments };

export default getGames;
