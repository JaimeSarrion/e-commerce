import { Item } from "../types/Items";

export function capitalizeFirstLetterInArray(inputArray: string[]): { label: string; id: string }[] {
    const resultArray = inputArray.map((item) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      id: item,
    }));
  
    return resultArray;
  }

  export function sortItemsByPrice(items: Item[], isAscending: boolean): Item[] {
    return items.slice().sort((a, b) => {
      if (isAscending) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }