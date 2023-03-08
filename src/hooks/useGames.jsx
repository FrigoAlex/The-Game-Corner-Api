import getGames from "../utils/dbSocket";
import { useState, useEffect } from "react";

const GAMES_PER_PAGE = 10;

const useGamePagination = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const { games, totalPages } = getGames(page, GAMES_PER_PAGE, filter);
    if (page < 1 && games.length > 0) {
      return setPage(1);
    }
    setGames(games);
    setTotalPages(totalPages);
    if (page > totalPages) {
      return setPage(totalPages);
    }
  }, [page, filter]);

  const goOnePageBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goOnePageForward = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
    setPage(1);
  };

  return {
    games,
    page,
    totalPages,
    goOnePageBack,
    goOnePageForward,
    updateFilter,
    filter
  };
};

export default useGamePagination;
