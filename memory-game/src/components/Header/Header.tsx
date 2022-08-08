import { FC } from "react";
import { HeaderProps } from "../../types";


const Header: FC<HeaderProps> = ({score, highScore}) => {
    return (
        <header>
        <h1>Memory Game</h1>
        <div>
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
        </div>
        </header>
    )
}

export default Header;