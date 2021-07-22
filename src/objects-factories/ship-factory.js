const shipFactory = (name, shipLength) => {
  // ARRAY WHICH REPRESENTS THE HEALTH OF A SHIP.
  // 'o' stands for healthy spots
  // 'x' stands for attacked spots
  const health = Array(shipLength).fill('o');
  // HIT A SPOT FUNCTION
  const hit = (spot) => {
    if (health[spot] === 'x') return;
    health[spot] = 'x';
  };
  // WHEN ALL SPOTS OF A SHIP AR ATTACKED => SUNKED = TRUE
  const isSunk = () => {
    let sunked = true;
    for (let i = 0; i < health.length; i += 1) {
      if (health[i] === 'o') {
        sunked = false;
        return sunked;
      }
    }
    return sunked;
  };
  return {
    name,
    shipLength,
    isSunk,
    hit,
  };
};

export default shipFactory;
