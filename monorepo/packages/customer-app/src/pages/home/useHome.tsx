import { useEffect, useState } from "react";
import { getAllProducts, getCategories } from "@finand-edi/shared-logic";
import {
  capitalizeFirstLetterInArray,
  sortItemsByPrice,
} from "../../utils/functions";
import { Item } from "../../types/Items";

const useHome = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [categories, setCategories] = useState<{ label: string; id: string }[]>(
    []
  );

  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, []);

  useEffect(() => {
    const newOrder = sortItemsByPrice(items, isAscending);
    setItems(newOrder);
  }, [isAscending]);

  async function getAllItems() {
    const products = await getAllProducts();
    if (products) {
      const newOrder = sortItemsByPrice(products, isAscending);
      setItems(newOrder);
    }
  }

  async function getAllCategories() {
    const categories = await getCategories();
    if (categories) {
      const newCategories = capitalizeFirstLetterInArray(categories) || [];
      setCategories(newCategories);
    }
  }

  async function getByCategory(category: string) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const products = await response.json();
      const newOrder = sortItemsByPrice(products, isAscending);
      setItems(newOrder);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOnClickCategory(category: string) {
    if (category === "all") {
      getAllItems();
    } else {
      getByCategory(category);
    }
  }

  function handleSort() {
    setIsAscending(!isAscending);
  }
  return {
    items,
    categories,
    isAscending,
    handleSort,
    handleOnClickCategory,
  };
};

export default useHome;
