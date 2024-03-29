import { API_URL, API_KEY, USER_API_URL } from "../constants/constants.jsx";

export const getGameById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
    const data = await response.json();
    return {
      name: data.name,
      image: data.background_image,
      rating: data.rating,
      author: data.developers.map((developer) => developer.name)[0],
      description: data.description_raw,
      platforms: data.parent_platforms.map(
        (platform) => platform.platform.name
      ),
      genres: data.genres.map((genre) => genre.name).slice(0, 2),
      releaseDate: data.released
    };
  } catch (error) {
    return {};
  }
};

const dataFetcher = async (actualPage = 1, pageSize = 10, search = "") => {
  try {
    const response = await fetch(
      `${API_URL}?page=${actualPage}&page_size=${pageSize}&search=${search}&key=${API_KEY}`
    );
    const data = await response.json();
    return {
      pages: Math.ceil(data.count / pageSize),
      data: data.results.map((game) => ({
        id: game.id,
        name: game.name,
        releaseDate: game.released,
        image: game.background_image,
        rating: game.rating,
        platforms: game.platforms.map((platform) => platform.platform.name),
        genres: game.genres.map((genre) => genre.name).slice(0, 2)
      }))
    };
  } catch (error) {
    return [];
  }
};

export const getCommentsBygameId = async (id) => {
  try {
    const response = await fetch(`${USER_API_URL}/comments?gameId=${id}`);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const newComment = async (comment) => {
  try {
    await fetch(`${USER_API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    });
  } catch (error) {
    alert("An error has occurred, please try again later");
  }
};

export const getUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await fetch(`${USER_API_URL}/users?email=${email}&password=${password}`);
    return (await response.json())[0];
  } catch (error) {
  }
};

export const newUser = async (user) => {
  try {
    await fetch(`${USER_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
  } catch (error) {
    alert("An error has occurred, please try again later");
  }
};
export default dataFetcher;
