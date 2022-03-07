import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

// card Images
const cardImages = [
	{ src: '/img/helmet-1.png', matched: false },
	{ src: '/img/potion-1.png', matched: false },
	{ src: '/img/ring-1.png', matched: false },
	{ src: '/img/scroll-1.png', matched: false },
	{ src: '/img/shield-1.png', matched: false },
	{ src: '/img/sword-1.png', matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setchoiceOne] = useState(null);
	const [choiceTwo, setchoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	// duplicate
	// radnomized
	// radnom id for every img

	// start Game automatically
	useEffect(() => {
		shuffleCards();
	}, []);

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.round(Math.random() * 1000) }));

		// reset
		setchoiceOne(null);
		setchoiceTwo(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	// hadnleChoice

	const handleChoice = (card) => {
		choiceOne ? setchoiceTwo(card) : setchoiceOne(card);
	};

	// comapre Cards
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCard) => {
					return prevCard.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});

				restTurn();
			} else {
				setTimeout(() => {
					restTurn();
				}, 1000);
			}
		}
	}, [choiceOne, choiceTwo]);

	const restTurn = () => {
		setchoiceOne(null);
		setchoiceTwo(null);
		setTurns((prevTurns) => prevTurns + 1);
		setDisabled(false);
	};

	return (
		<div className='App'>
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Games</button>
			{turns ? <p className='turns'>turns : {turns}</p> : ''}

			<div className='card-grid'>
				{cards.map((card) => (
					<SingleCard
						handleChoice={handleChoice}
						key={card.key}
						card={card}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
