import { API_URL, API_KEY } from "../constants/constants.jsx";

const dataFetcher = async (actualPage = 1, pageSize = 10, search = "") => {
  try {
    const response = await fetch(
      `${API_URL}page=${actualPage}&page_size=${pageSize}&search=${search}&key=${API_KEY}`
    );
    const data = await response.json();
    return {
      paginas: Math.ceil(data.count / pageSize),
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

export default dataFetcher;
