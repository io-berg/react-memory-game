import Card from "./Card";
import { FC, } from "react";
import { MainProps } from "../../types";


const Main: FC<MainProps> = ({cards, showWin, handleImgClick, resetGame}) => {
    return (
        <div className="main">
            {showWin ? 
                <div className="victory-screen">
                    <h1>You win!</h1>  
                    <button onClick={resetGame}>Play Again</button>
                </div> :
                <div className="game-board">
                    {cards.map(card => (
                        <Card key={card.id} id={card.id} img={card.img} clickHandler={() => handleImgClick(card.id)} />
                    ))}
                </div>}
        </div>
    )
}


export default Main;