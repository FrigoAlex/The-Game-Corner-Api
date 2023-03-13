import "../assets/styles/gamesSection.css";
import GameCard from "../components/GameCard";
import useGames from "../hooks/useGames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NoContent from "../components/NoContent";
const GamesSection = ({ navigateTo }) => {
  const {
    games,
    page,
    totalPages,
    goOnePageBack,
    goOnePageForward,
    updateFilter
  } = useGames();

  return (
    <main className="games-section">
      <h2 className="games-section-title">Games</h2>
      <div className="search-container">
        <div className="input-group">
          <input
            onInput={(e) => updateFilter(e.target.value.trim())}
            name="search"
            className="form-input"
            autoComplete="off"
            type="text"
            id="input-search"
            placeholder=" "
          />
          <label className="form-label" htmlFor="search">
            Search
          </label>
        </div>
      </div>
      <div className="games-section-container">
        <div className="games-section-row">
          {games.map((game) => (
            <GameCard
              key={game.id}
              {...game}
              redirect={() => navigateTo(`/game/${game.id}`)}
            />
          ))}
          {games.length === 0
            ? (
              <NoContent text="We apologize, but we were unable to find what you were looking for 😢" />
            )
            : null}
        </div>
      </div>
      {games.length > 0
        ? (
          <div className="pagination-container">
            <ul className="pagination-ul">
              <li className="pagination-li">
                <button
                  className="pagination-btn"
                  disabled={page === 1}
                  onClick={goOnePageBack}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </li>
              <li className="pagination-li">
                <span className="pagination-btn">{page}</span>
              </li>
              <li className="pagination-li">
                <button
                  className="pagination-btn"
                  disabled={page === totalPages}
                  onClick={goOnePageForward}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </li>
            </ul>
          </div>
        )
        : null}
    </main>
  );
};
export default GamesSection;
