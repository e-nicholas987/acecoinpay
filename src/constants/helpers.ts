export const isValidNumber = (inputValue: string):boolean => {
  return inputValue === "" || /^\d+$/.test(inputValue);
};
