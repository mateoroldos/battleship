import playerFactory from '../src/objects-factories/player-factory';

test('player creation', () => {
  const playerOne = playerFactory('Mateo', 'human', 1);
  expect(playerOne.playerName).toBe('Mateo');
  expect(playerOne.playerType).toBe('human');
  expect(playerOne.playerNumber).toBe(1);
});
