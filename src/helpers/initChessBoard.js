import Bishop from '../pieces/Bishop.js';
import King from '../pieces/King.js';
import Knight from '../pieces/Knight.js';
import Pawn from '../pieces/Pawn.js';
import Queen from '../pieces/Queen.js';
import Rook from '../pieces/Rook.js';

export default function initChessBoard() {
  const squares = Array(64).fill(null);

  // pawns
  for (let i = 8; i < 16; i++) {
    squares[i] = new Pawn(2);
    squares[i + 40] = new Pawn(1);
  }

  // rooks
  squares[0] = new Rook(2);
  squares[7] = new Rook(2);
  squares[56] = new Rook(1);
  squares[63] = new Rook(1);

  // knights
  squares[1] = new Knight(2);
  squares[6] = new Knight(2);
  squares[57] = new Knight(1);
  squares[62] = new Knight(1);

  // bishops
  squares[2] = new Bishop(2);
  squares[5] = new Bishop(2);
  squares[58] = new Bishop(1);
  squares[61] = new Bishop(1);

  // queens
  squares[3] = new Queen(2);
  squares[59] = new Queen(1);

  // kings
  squares[4] = new King(2);
  squares[60] = new King(1);

  return squares;
}
