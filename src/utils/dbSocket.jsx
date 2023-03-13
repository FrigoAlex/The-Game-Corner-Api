import dataFetcher, { getGameById, getCommentsBygameId, newComment, getUserByEmailAndPassword } from "../utils/dataFetcher";

const getGame = async (id) => {
  return await getGameById(id);
};

const getGames = async (page = 1, limit = 10, filter = "") => {
  const { pages, data } = await dataFetcher(page, limit, filter);
  return {
    totalPages: pages,
    games: data
  };
};
const getComments = async (gameId) => {
  return await getCommentsBygameId(gameId);
};

const addComment = async (comment) => {
  await newComment(comment);
};

const getSession = async () => {
  return JSON.parse(localStorage.getItem("session"));
};
const loginSession = async (email, password) => {
  const user = await getUserByEmailAndPassword(email, password);
  if (user) localStorage.setItem("session", JSON.stringify(user));
  return user;
};
export { getGames, getGame, getComments, addComment, getSession, loginSession };

export default getGames;
