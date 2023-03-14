import getDBGames from "../utils/dbSocket";
import { debounceTimer } from "../constants/constants";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
const GAMES_PER_PAGE = 10;

const useGamePagination = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const getGames = async () => {
    const { games, totalPages: total } = await getDBGames(page, GAMES_PER_PAGE, filter);
    if (page < 1 && games.length > 0) {
      return setPage(1);
    }
    setGames(games);

    setTotalPages(total);
    if (page > total) {
      return setPage(total);
    }
  };

  useEffect(() => {
    getGames();
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

  const updateFilter = useCallback(
    debounce((newFilter) => {
      setFilter(newFilter);
      setPage(1);
    }, debounceTimer),
    []
  );

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
