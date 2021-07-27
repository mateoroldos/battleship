const playerFactory = (name, type, number) => {
  const playerName = name;
  const playerType = type;
  const playerNumber = number;

  return { playerName, playerType, playerNumber };
};

export default playerFactory;
