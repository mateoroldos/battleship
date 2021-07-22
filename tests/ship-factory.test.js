import shipFactory from '../src/objects-factories/ship-factory';

test('ship has x name 1', () => {
  const fireship = shipFactory('fireship', 2);
  expect(fireship.name).toBe('fireship');
});

test('ship has x name 2', () => {
  const fireship = shipFactory('bombarder', 3);
  expect(fireship.name).toBe('bombarder');
});

test('ship has x length 1', () => {
  const fireship = shipFactory('fireship', 2);
  expect(fireship.shipLength).toEqual(2);
});

test('ship has x length 2', () => {
  const fireship = shipFactory('bombarder', 3);
  expect(fireship.shipLength).toEqual(3);
});

test('ship with 0 shot is no sinked', () => {
  const fireship = shipFactory('fireship', 2);
  expect(fireship.isSunk()).toBe(false);
});

test('ship with 1 shot is no sinked', () => {
  const fireship = shipFactory('fireship', 2);
  fireship.hit(0);
  expect(fireship.isSunk()).toBe(false);
});

test('ship with 1 shot is no sinked', () => {
  const fireship = shipFactory('fireship', 2);
  fireship.hit(1);
  expect(fireship.isSunk()).toBe(false);
});

test('ship recives a shot in an already shoted spot', () => {
  const fireship = shipFactory('fireship', 2);
  fireship.hit(1);
  expect(fireship.hit(1)).toBe(undefined);
});

test('ship is sinked', () => {
  const fireship = shipFactory('fireship', 2);
  fireship.hit(0);
  fireship.hit(1);
  expect(fireship.isSunk()).toBe(true);
});
