import "../assets/styles/navbar.css";

const Navbar = ({ navigateTo }) => {
  return (
    <header className="navbar">
      <div className="logo-container" onClick={() => navigateTo("/")}>
        <img className="header-logo" src="/Logo-Gamer.png" />
        <h1 className="header-title">Gamer Corner</h1>
      </div>
      <nav className="nav-section">
        <ul className="nav-list">
          <li className="nav-elements" onClick={() => navigateTo("/")}>
            <a className="nav-elements-a">Home</a>
          </li>
          <li className="nav-elements" onClick={() => navigateTo("/login")}>
            <a className="nav-elements-a">Login</a>
          </li>
          <li className="nav-elements" onClick={() => navigateTo("/register")}>
            <a className="nav-elements-a">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
