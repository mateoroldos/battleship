import gameboardFactory from './gameboard-factory';

const playerFactory = (name, type, number, boardLength) => {
  const playerName = name;
  const playerType = type;
  const playerNumber = number;
  const playerBoard = gameboardFactory(boardLength);

  return {
    playerName, playerType, playerNumber, playerBoard,
  };
};

export default playerFactory;
