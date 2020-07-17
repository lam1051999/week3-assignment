export const findChoice = (choices, yourChoice) => {
  return choices.find((item) => item.name === yourChoice);
};
