// import shipFactory from "./ship-factory";

const gameboardFactory = (gameboardLength) => {
  // CREATE A TWO DIMENSION ARRAY WHICH REPRESENTS THE BOARD
  // "o" stands for empty spots
  // "x" stands for empty, atacked spots
  // "[numberOfShip, shipSpot]" stands for a spot with a healthy ship
  // "[numberOfShip, shipSpot, 'x']" stands for a spot with an attacked ship
  const gameboardArray = Array(gameboardLength);
  for (let i = 0; i < gameboardArray.length; i += 1) {
    gameboardArray[i] = Array(gameboardLength).fill('o');
  }
  // ATTACK A SPECIFIC SPOT IN THE GAMEBOARD
  const atackSpot = (coordinates) => {
    // If the spot has already been selected => return undefined
    if (gameboardArray[coordinates[0]][coordinates[1]].includes('x')) return;
    // If the spot has a ship => Mark ship as attacked (0x)
    // and call the hit() function for the correct ship
    if (Array.isArray(gameboardArray[coordinates[0]][coordinates[1]])) {
      gameboardArray[coordinates[0]][coordinates[1]].push('x');
      // call hit function
      // If there is an empty spot => marked spot as missed (x)
    } else if (gameboardArray[coordinates[0]][coordinates[1]] === 'o') {
      gameboardArray[coordinates[0]][coordinates[1]] = 'x';
    }
  };
  // PLACE SHIPS IN THE BOARD
  const placeShip = (shipNumber, shipLength, direction, coordinates) => {
    // Placing ships in the y axis
    if (direction === 'vertical') {
      // Check if there is enough space for the ship
      const verticalSpacesLength = gameboardArray.slice(coordinates[0]).length;
      if (verticalSpacesLength < shipLength) return;
      // Check if all spots are empty
      const selectedSpots = [];
      for (let i = 0; i < shipLength; i++) {
        selectedSpots.push(gameboardArray[coordinates[0] + i][coordinates[1]]);
      }
      if (!selectedSpots.every(element => element === 'o')) return;
      // Place ship
      for (let i = 0; i < shipLength; i += 1) {
        gameboardArray[coordinates[0] + i][coordinates[1]] = [shipNumber, i];
      }
    }
    // Placing ships in the x axis
    if (direction === 'horizontal') {
      // Check if there is enough space for the ship
      const horizontalSpacesLength = gameboardArray.slice(coordinates[1]).length;
      if (horizontalSpacesLength < shipLength) return;
      // Check if all spots are empty
      const selectedSpots = [];
      for (let i = 0; i < shipLength; i++) {
        selectedSpots.push(gameboardArray[coordinates[0]][coordinates[1] + i]);
      }
      if (!selectedSpots.every(element => element === 'o')) return;
      // Place ship
      for (let i = 0; i < shipLength; i += 1) {
        gameboardArray[coordinates[0]][coordinates[1] + i] = [shipNumber, i];
      }
    }
  };
  return { gameboardArray, atackSpot, placeShip };
};

export default gameboardFactory;
