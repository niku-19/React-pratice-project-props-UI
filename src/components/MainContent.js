import MainContentStyle from "./MainContent.module.css";
import Card from "./Card";
import Datas from "../Data/Data";

const MainContent = () => {
  return (
    <>
      <div className={MainContentStyle.main}>
        <Card
          imgsrc={Datas[0].image}
          rating={Datas[0].rating}
          genre={Datas[0].genre}
          description={Datas[0].description}
          name={Datas[0].name}
        />
        <Card
          imgsrc={Datas[1].image}
          rating={Datas[1].rating}
          genre={Datas[1].genre}
          description={Datas[1].description}
          name={Datas[1].name}
        />
        <Card
          imgsrc={Datas[2].image}
          rating={Datas[2].rating}
          genre={Datas[2].genre}
          description={Datas[2].description}
          name={Datas[2].name}
        />
        <Card
          imgsrc={Datas[3].image}
          rating={Datas[3].rating}
          genre={Datas[3].genre}
          description={Datas[3].description}
          name={Datas[3].name}
        />
        <Card
          imgsrc={Datas[4].image}
          rating={Datas[4].rating}
          genre={Datas[4].genre}
          description={Datas[4].description}
          name={Datas[4].name}
        />
      </div>
    </>
  );
};

export default MainContent;
