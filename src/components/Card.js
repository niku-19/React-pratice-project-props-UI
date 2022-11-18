import Datas from "../Data/Data";
import CardStyle from "./Card.module.css";
const Card = (props) => {
  return (
    <>
      <div className={CardStyle.card}>
        <div className={CardStyle.hero__image}>
          <img src={props.imgsrc}></img>
          <span>{props.name}</span>
        </div>
        <div>
          <p>Rating : {props.rating}</p>
        </div>
        <div>
          <p className={CardStyle.gen}>{props.genre}</p>
        </div>
        <div>
          <p className={CardStyle.des}>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
