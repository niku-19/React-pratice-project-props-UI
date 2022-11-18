import Logo from "./logo.jpg";
import NavBarStyles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className={NavBarStyles.nav}>
          <div className={NavBarStyles.flex__nav}>
            <div className={NavBarStyles.brand__logo}>
              <img src={Logo} />
              <div className={NavBarStyles.brand__name}>The WebSeries Wala</div>
            </div>
            <ul>
              <li>Home</li>
              <li>Top Web Series</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
