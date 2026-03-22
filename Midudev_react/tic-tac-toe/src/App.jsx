import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

const TURNS = {
  x: "x",
  o: "o",
};

const ARRAYS = { 1: [0, 3, 6], 2: [2], 3: [0, 1, 2], 4: [0] };
//Mis arrays base para generar todas las filas, columnas y diagonales
//Sigue la siguiente estructura: keys=steps (Partiendo de los indices de los squares filas=step1, columnas=step3, diagonal1=step2, diagonal2=step4)

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);
  const [winner, setWinner] = useState(null);
  //Null representa que no hay ganador y false un empate

  //Con esta función, se compara combinaciones ganadoras contra estado actual del tablero
  const checkWinner = (boardToCheck) => {
    let winnerTurn = null;
    for (const step in ARRAYS) {
      const numericStep = Number(step);
      ARRAYS[step].forEach((index) => {
        if (
          boardToCheck[index] &&
          boardToCheck[index] === boardToCheck[index + numericStep] &&
          boardToCheck[index] === boardToCheck[index + 2 * numericStep]
        ) {
          winnerTurn = boardToCheck[index];
        }
      });
      if (winnerTurn) break;
    }
    // si no hay ganador
    return winnerTurn;
  };

  //Resetea el tablero a su estado inicial
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  //Actualiza el estado del tablero en cada turno
  const updateBoard = (index) => {
    //Esta linea bloquea la actualización de una casilla que este previamente marcada por un turno
    //También evita continuar jugando una vez que se ha encontrado un ganador
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //Cambiar turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti(); //Dependencia importada para animación de confetti
      setWinner(newWinner);
    } else if (newBoard.every((square) => square !== null)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reinicar Juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      {
        /*Diferente a null = x, o ó false(empate)
        /* OJO: El operador "!==" tiene precedencia sobre "&&" */
        /* Al usar && de esta forma, se retorna el operando del lado derecho si ambos son truthy */
        /* En este caso usamos algo llamado: "Renderizado condicional"  */
        /* Lo que quiere decir, que renderizaremos lo que está dentro del paréntis, si y sólo si, winner es diferente a null */
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>{winner === false ? "Empate" : `Ganó ${winner}`}</h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Reinicar Juego</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  );
}

export default App;
