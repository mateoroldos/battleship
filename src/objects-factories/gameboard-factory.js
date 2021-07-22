const gameboardFactory = (gameboardLength) => {
  // CREATE A TWO DIMENSION ARRAY WHICH REPRESENTS THE BOARD
  // "o" stands for empty spots
  // "x" stands for empty, atacked spots
  // "s" stands for a spot with a healthy ship
  // "sx" stands for a spot with an attacked ship
  const gameboardArray = Array(gameboardLength);
  for (let i = 0; i < gameboardArray.length; i += 1) {
    gameboardArray[i] = Array(gameboardLength).fill('o');
  }
  // ATTACK A SPECIFIC SPOT IN THE GAMEBOARD
  const atackSpot = (x, y) => {
    // If the spot has already been selected => return undefined
    if (gameboardArray[x][y] === 'x' || gameboardArray[x][y] === 'sx') return;
    // If the spot has a ship => Mark ship as attacked (xs) and call the hit() function
    if (gameboardArray[x][y] === 's') {
      gameboardArray[x][y] = 'sx';
      // call hit function
      // If there is an empty spot => marked spote as missed (x)
    } else if (gameboardArray[x][y] === 'o') {
      gameboardArray[x][y] = 'x';
    }
  };
  // PLACE SHIPS IN THE BOARD
  const placeShip = (shipLength, direction, x, y) => {
    // If the spot already has a ship, return undefined
    // CORRECTION IF THE SELECTED SHIP TOUCHES ANOTHER SHIP
    if (gameboardArray[x][y] === 'x') return;
    // Placing ships in the y axis
    if (direction === 'vertical') {
      for (let i = 0; i < shipLength; i += 1) {
        gameboardArray[x + i][y] = 's';
      }
      // Placing ships in the x axis
    } else if (direction === 'horizontal') {
      for (let i = 0; i < shipLength; i += 1) {
        gameboardArray[x][y + i] = 's';
      }
    }
  };
  return { gameboardArray, atackSpot, placeShip };
};

export default gameboardFactory;
