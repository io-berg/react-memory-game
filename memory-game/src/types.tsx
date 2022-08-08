interface CardProps {
    img: string;
    id: number;
    clickHandler: () => void;
}

interface CardInPlay {
    img: string;
    id: number;
}

interface MainProps {
    cards: CardInPlay[];
    handleImgClick: (id: number) => void;
    showWin: boolean;
    resetGame: () => void;
}

interface HeaderProps {
    highScore: number;
    score: number;
}

export type { CardProps, CardInPlay, MainProps, HeaderProps };