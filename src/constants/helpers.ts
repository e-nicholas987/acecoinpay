export const isValidNumber = (inputValue: string) => {
  return inputValue === "" || /^\d+$/.test(inputValue);
};
