import dataFetcher, { getGameById, getCommentsBygameId, newComment } from "../utils/dataFetcher";

const getGame = async (id) => {
  return await getGameById(id);
};

const getGames = async (page = 1, limit = 10, filter = "") => {
  const { paginas, data } = await dataFetcher(page, limit, filter);
  return {
    totalPages: paginas,
    games: data
  };
};
const getComments = async (gameId) => {
  return await getCommentsBygameId(gameId);
};

const addComment = async (comment) => {
  await newComment(comment);
};

export { getGames, getGame, getComments, addComment };

export default getGames;
