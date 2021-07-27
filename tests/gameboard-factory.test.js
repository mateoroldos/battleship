import gameboardFactory from '../src/objects-factories/gameboard-factory';

test('blank gameboard 1', () => {
  const gameboardOne = gameboardFactory(2);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o'],
    ['o', 'o'],
  ]);
});

test('blank gameboard 2', () => {
  const gameboardOne = gameboardFactory(3);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
  ]);
});

test('attacked spot 1', () => {
  const gameboardOne = gameboardFactory(3);
  gameboardOne.atackSpot([1, 2]);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o'],
    ['o', 'o', 'x'],
    ['o', 'o', 'o'],
  ]);
});

test('attacked spot 2', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.atackSpot([1, 2]);
  gameboardOne.atackSpot([3, 0]);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o'],
    ['x', 'o', 'o', 'o'],
  ]);
});

test('attacked already attacked spot', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.atackSpot([1, 2]);
  expect(gameboardOne.atackSpot([1, 2])).toBe(undefined);
});

test('place ship 1', () => {
  const gameboardOne = gameboardFactory(3);
  gameboardOne.placeShip(1, 2, 'horizontal', [0, 0]);
  expect(gameboardOne.gameboardArray).toEqual([
    [[1, 0], [1, 1], 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
  ]);
});

test('place ship 2', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(2, 4, 'vertical', [0, 3]);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', [2, 0]],
    ['o', 'o', 'o', [2, 1]],
    ['o', 'o', 'o', [2, 2]],
    ['o', 'o', 'o', [2, 3]],
  ]);
});

test('place ship error - ship touches other ship', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(2, 2, 'vertical', [0, 3]);
  gameboardOne.placeShip(1, 4, 'horizontal', [0, 3]);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', [2, 0]],
    ['o', 'o', 'o', [2, 1]],
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
  ]);
});

test('place ship error 2 - ship touches other ship', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(2, 3, 'vertical', [0, 0]);
  gameboardOne.placeShip(1, 3), 'horizontal', [0, 0];
  expect(gameboardOne.gameboardArray).toEqual([
    [[2, 0], 'o', 'o', 'o'],
    [[2, 1], 'o', 'o', 'o'],
    [[2, 2], 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
  ]);
});

test('place ship error 3 - ship too long', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(2, 5, 'vertical', [0, 0]);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
  ]);
});

test('place ship error 4 - ship too long', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(2, 5, 'horizontal', [0, 0]);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o'],
  ]);
});

test('attack placed ship', () => {
  const gameboardOne = gameboardFactory(3);
  gameboardOne.placeShip(2, 2, 'horizontal', [0, 0]);
  gameboardOne.atackSpot([0, 0]);
  gameboardOne.atackSpot([1, 2]);
  expect(gameboardOne.gameboardArray).toEqual([
    [[2, 0, 'x'], [2, 1], 'o'],
    ['o', 'o', 'x'],
    ['o', 'o', 'o'],
  ]);
});

test('attack already attacked ship returns undefined', () => {
  const gameboardOne = gameboardFactory(3);
  gameboardOne.placeShip(2, 2, 'horizontal', [0, 0]);
  gameboardOne.atackSpot([0, 0]);
  gameboardOne.atackSpot([1, 2]);
  gameboardOne.atackSpot([0, 0]);
  expect(gameboardOne.gameboardArray).toEqual([
    [[2, 0, 'x'], [2, 1], 'o'],
    ['o', 'o', 'x'],
    ['o', 'o', 'o'],
  ]);
});
