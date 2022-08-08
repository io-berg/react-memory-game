import { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { CardInPlay } from './types';
import images from "./services/asset-service";

function App() {
    const [highscore, setHighscore] = useState(0);
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState<CardInPlay[]>([]);
    const [clickedImages, setClickedImages] = useState<number[]>([]);
    const [displayWin, setDisplayWin] = useState(false);

    function shuffleDeck(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const resetGame = () => {
        setScore(0);
        setClickedImages([]);
        setDisplayWin(false);
        setCards(shuffleDeck(images));
    }

    const handleClick = (id: number) => {
        console.log(id);
        if(clickedImages.includes(id)) {
            if(score > highscore) {
                setHighscore(score);
            }
            setScore(0);
            setClickedImages([]);
        }
        else {
            if(score + 1 >= 12) setDisplayWin(true);
            setScore(score + 1);
            setClickedImages([...clickedImages, id]);  
        }
        shuffleDeck(cards); 
        
    }

    useEffect(() => {
        const shuffledImages = shuffleDeck(images);
        setCards(shuffledImages.map((img, id) => ({ img, id })));
    }, []);

  return (
    <div className="App">
      <Header highScore={highscore} score={score}/>
      <Main cards={cards} showWin={displayWin} handleImgClick={handleClick} resetGame={resetGame} />
    </div>
  )
}

export default App
