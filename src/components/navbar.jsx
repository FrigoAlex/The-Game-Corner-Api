import "../assets/styles/navbar.css";

const Navbar = ({ navigateTo }) => {
  return (
    <header className="navbar">
      <nav className="logo-container" onClick={() => navigateTo("/")}>
        <img className="header-logo" src="/Logo-Gamer.png" />
        <h1 className="header-title">Gamer Corner</h1>
      </nav>
    </header>
  );
};
export default Navbar;
