export const objectToArray = (obj: any) => {
  return Object.entries(obj).map(([key, value]) => {
    if (value) {
      return { size: key, quantity: value };
    }
  });
};
