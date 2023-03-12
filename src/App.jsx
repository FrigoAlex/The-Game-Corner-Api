import "./assets/styles/App.css";
import useNavigate from "./hooks/useNavigate";
import Navbar from "./components/navbar";
import GamesSection from "./pages/gamesSection";
import GameDescription from "./pages/gameDescription";
import Footer from "./components/footer";
import NoPage from "./components/noPage";
import Login from "./components/Login";
import Register from "./components/Register";
import { HOME, GAME, LOGIN, REGISTER } from "./constants/pageRoutes";

function App () {
  const { path, navigateTo } = useNavigate();
  return (
    <div className="App">
      <Navbar navigateTo={navigateTo} />
      {
        [{ url: HOME, page: <GamesSection key={0} navigateTo={navigateTo} /> },
          { url: GAME, page: <GameDescription key={1} /> },
          { url: LOGIN, page: <Login key={2} /> },
          { url: REGISTER, page: <Register key={3} /> }
        ].find((x) => path.match(new RegExp(x.url)))?.page || <NoPage/>
      }
      <Footer />
    </div>
  );
}

export default App;
