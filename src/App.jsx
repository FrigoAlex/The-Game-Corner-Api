import "./assets/styles/App.css";
import useNavigate from "./hooks/useNavigate";
import Navbar from "./components/navbar";
import GamesSection from "./pages/gamesSection";
import GameDescription from "./pages/gameDescription";
import Footer from "./components/footer";
import NoPage from "./components/noPage";
function App () {
  const { path, navigateTo } = useNavigate();
  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} />
      {path === "/" ? <GamesSection navigateTo={navigateTo} /> : null}
      {path.match(/\/game\/\d+/) ? <GameDescription /> : null}
      {path !== "/" && !path.match(/\/game\/\d+/) ? <NoPage /> : null}
      <Footer />
    </div>
  );
}

export default App;
