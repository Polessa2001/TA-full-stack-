// Select all the tiles
const tiles = document.querySelectorAll('td');
// Check if a tile has an empty neighbour
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1)
    || (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1)
    || (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1)
    || (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

const moveTile = (element) => {
  // TOOD: Move the tile
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerHTML = element.innerHTML;
  emptyTile.classList.remove("empty");
  element.innerHTML = '';
  element.classList.add("empty");
};

const checkIfPlayerWins = () => {
  let count = 0;
  let previousNumber = 0;

  tiles.forEach((tile) => {
    const number = parseInt(tile.innerHTML, 10);
    if (number === previousNumber + 1) {
      count += 1;
      previousNumber = number;
    }
  });

  if (count === 15) {
    console.log("Congratulations! You won!");
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
