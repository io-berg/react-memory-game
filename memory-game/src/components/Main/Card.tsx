import { FC } from "react";
import { CardProps } from "../../types";

const Card: FC<CardProps> = ({ img, clickHandler }) => {
    return (<div className="grid-item" >
        <img src={img} alt="card image" onClick={clickHandler} />
    </div>)
}

export default Card;