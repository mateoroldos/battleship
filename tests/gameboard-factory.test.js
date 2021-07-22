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
  gameboardOne.atackSpot(1, 2);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o'],
    ['o', 'o', 'x'],
    ['o', 'o', 'o'],
  ]);
});

test('attacked spot 2', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.atackSpot(1, 2);
  gameboardOne.atackSpot(3, 0);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', 'o'],
    ['o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o'],
    ['x', 'o', 'o', 'o'],
  ]);
});

test('attacked already attacked spot', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.atackSpot(1, 2);
  expect(gameboardOne.atackSpot(1, 2)).toBe(undefined);
});

test('place ship 1', () => {
  const gameboardOne = gameboardFactory(3);
  gameboardOne.placeShip(2, 'horizontal', 0, 0);
  expect(gameboardOne.gameboardArray).toEqual([
    ['s', 's', 'o'],
    ['o', 'o', 'o'],
    ['o', 'o', 'o'],
  ]);
});

test('place ship 2', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(4, 'vertical', 0, 3);
  expect(gameboardOne.gameboardArray).toEqual([
    ['o', 'o', 'o', 's'],
    ['o', 'o', 'o', 's'],
    ['o', 'o', 'o', 's'],
    ['o', 'o', 'o', 's'],
  ]);
});

test('place ship error', () => {
  const gameboardOne = gameboardFactory(4);
  gameboardOne.placeShip(4, 'horizontal', 0, 3);
  expect(gameboardOne.placeShip(2, 'vertical', 0, 3)).toBe(undefined);
});

test('attack placed ship', () => {
  const gameboardOne = gameboardFactory(3);
  gameboardOne.placeShip(2, 'horizontal', 0, 0);
  gameboardOne.atackSpot(0, 0);
  gameboardOne.atackSpot(1, 2);
  expect(gameboardOne.gameboardArray).toEqual([
    ['sx', 's', 'o'],
    ['o', 'o', 'x'],
    ['o', 'o', 'o'],
  ]);
});
