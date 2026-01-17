export const isRomanUrdu = (text) => {
  const words = ["kia","hai","kyun","kaise","tum","mai"];
  return words.some(w => text.toLowerCase().includes(w));
};
