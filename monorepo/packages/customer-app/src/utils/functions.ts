export function capitalizeFirstLetterInArray(inputArray: string[]): { label: string; id: string }[] {
    const resultArray = inputArray.map((item) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      id: item,
    }));
  
    return resultArray;
  }