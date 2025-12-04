import { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import { Square } from './components/Square.jsx';
import { TURNS } from './constants/constants.js';
import { checkWinner, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null no hay ganador, false es empate
  //revisamos todas las combinaciones ganadoras para ver si alguien ganó

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    // If the square is already filled or there is a winner, do nothing
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);
    // Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      //the game is over with no winners
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    } //empate
  };

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Reinicia el juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
