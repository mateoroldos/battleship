import shipFactory from './objects-factories/ship-factory';
import playerFactory from './objects-factories/player-factory';
import { displayMyBoard, displayEnemyBoard, displayShips } from './interface';

// Create players and assign them a board
const playerOne = playerFactory('Mateo', 'human', 1, 10);
const playerTwo = playerFactory('PC', 'computer', 1, 10);

// Array indicating the number of ships and sizes
const shipsArray = [3, 5, 3, 2];

// async function getCoordinates() {
//   const coordinates = [];

//   const x = await prompt('x?');
//   const y = await prompt('y?');
//   coordinates.push(x);
//   coordinates.push(y);
//   return coordinates;
// }

function placeShipsLoop(array) {
  for (let i = 1; i <= array.length; i++) {
    // Player One Ships
    // Ask user for coordinates
    // const coordinatesOne = getCoordinates();
    // const x = prompt('x?');
    // const y = prompt('y?');
    const coordinatesOne = [i, i];

    const shipOne = shipFactory(i, array[i - 1]);
    playerOne.playerBoard.placeShip(i, shipOne.shipLength, 'vertical', coordinatesOne);
    displayMyBoard(playerOne.playerBoard.gameboardArray);

    // Player Two Ships
    // Random coordinates
    const coordinatesTwo = [i, i];
    const shipTwo = shipFactory(i, array[i - 1]);
    playerTwo.playerBoard.placeShip(i, shipTwo.shipLength, 'vertical', coordinatesTwo);
    displayEnemyBoard(playerOne.playerBoard.gameboardArray);
  }
}
placeShipsLoop(shipsArray);
displayShips(shipsArray);

// // Display player one board
// displayMyBoard(playerOne.playerBoard.gameboardArray);

// // PLACE SHIPS
// // Ship 1 Player 1
// const battleshipOne = shipFactory('Battleship 1', 3);
// playerOne.playerBoard.placeShip(1, battleshipOne.shipLength, 'vertical', [0, 0]);
// displayMyBoard(playerOne.playerBoard.gameboardArray);

// // Ship 1 Player 2
// const battleshipTwo = shipFactory('Battleship 1', 3);
// playerTwo.playerBoard.placeShip(1, battleshipTwo.shipLength, 'vertical', [4, 2]);

// // ATTACKS
// // Player one attack
// playerTwo.playerBoard.attackSpot([0, 0]);
// playerTwo.playerBoard.attackSpot([4, 2]);
// displayEnemyBoard(playerTwo.playerBoard.gameboardArray);

// // Player two attack
// playerOne.playerBoard.attackSpot([0, 0]);
// displayMyBoard(playerOne.playerBoard.gameboardArray);
