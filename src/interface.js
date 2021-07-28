export function displayMyBoard(boardArray) {
  // Delete old board
  const boardParent = document.getElementById('board-parent');
  const oldBoardDiv = document.querySelector('.my-board');
  boardParent.removeChild(oldBoardDiv);

  // Generate new div
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('my-board');

  // Add new board structure
  for (let i = 0; i < boardArray.length; i += 1) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('board-line');
    for (let x = 0; x < boardArray[i].length; x += 1) {
      const boardSpot = document.createElement('div');
      boardSpot.classList.add('board-spot');
      boardSpot.textContent = boardArray[i][x];
      boardLine.appendChild(boardSpot);
    }
    boardDiv.appendChild(boardLine);
  }
  // Append new board
  boardParent.appendChild(boardDiv);
}

export function displayEnemyBoard(boardArray) {
  // Delete old board
  const boardParent = document.getElementById('board-parent');
  const oldBoardDiv = document.querySelector('.enemy-board');
  boardParent.removeChild(oldBoardDiv);

  // Generate new div
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('enemy-board');

  // Add new board structure
  for (let i = 0; i < boardArray.length; i += 1) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('board-line');
    for (let x = 0; x < boardArray[i].length; x += 1) {
      const boardSpot = document.createElement('div');
      boardSpot.classList.add('board-spot');
      switch (true) {
        case boardArray[i][x] === 'x':
          boardSpot.textContent = boardArray[i][x];
          break;
        case Array.isArray(boardArray[i][x]) && boardArray[i][x].includes('x'):
          boardSpot.textContent = boardArray[i][x];
          break;

        default:
          break;
      }
      boardLine.appendChild(boardSpot);
    }
    boardDiv.appendChild(boardLine);
  }
  // Append new board
  boardParent.appendChild(boardDiv);
}

export function displayShips(playerShips) {
  const shipsDiv = document.getElementById('ships');
  for (let i = 0; i < playerShips.length; i += 1) {
    const ship = document.createElement('div');
    ship.classList.add('ship');
    for (let x = 0; x < playerShips[i]; x += 1) {
      const shipSpot = document.createElement('div');
      shipSpot.classList.add('ship-spot');
      ship.appendChild(shipSpot);
    }
    shipsDiv.appendChild(ship);
  }
}
