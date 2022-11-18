import Logo from "./logo.jpg";
import FotterStyle from "./Fotter.module.css";
const Fotter = () => {
  return (
    <>
      <div className={FotterStyle.fotter}>
        <div className={FotterStyle.flex}>
          <div className={FotterStyle.brand__logo}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={FotterStyle.brand__name}>The WebSeries Wala</div>
          <p>© 2021</p>
        </div>
      </div>
    </>
  );
};

export default Fotter;
