import { useState } from "react";
import "./Tictoctoe.css"; // Optional CSS for styling

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 Board
  const [isXNext, setIsXNext] = useState(true); // Track player turn

  // Function to check for a winner
  function checkWinner(board) {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner (X or O)
      }
    }
    return null;
  }

  // Handle cell click
  function handleClick(index) {
    if (board[index] || checkWinner(board)) return; // Ignore if already clicked or game over

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  // Reset the game
  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  const winner = checkWinner(board);
  const isDraw = board.every(cell => cell !== null) && !winner;
  const status = winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" :"";

  return (
    <div className="game-container">
      <h2>Tic-Tac-Toe</h2>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      <h3>{status}</h3>
      <button className="reset-btn" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default TicTacToe;

