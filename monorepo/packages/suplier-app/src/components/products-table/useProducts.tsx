import { useMemo, useState } from "react";
import { Item } from "../../types/Items";

const useProducts = (items: Item[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedItems = useMemo(() => {
    let sorted = [...items];

    if (sortField === "title" || sortField === "category") {
      sorted = sorted.sort((a, b) => {
        if (sortDirection === "asc") {
          return a[sortField].localeCompare(b[sortField]);
        } else {
          return b[sortField].localeCompare(a[sortField]);
        }
      });
    } else if (sortField === "price") {
      sorted = sorted.sort((a, b) => {
        if (sortDirection === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    return sorted;
  }, [items, sortField, sortDirection]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const toggleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = sortedItems.slice(startIndex, endIndex);

  return {
    toggleSort,
    handleSort,
    handlePageChange,
    visibleItems,
    currentPage,
    endIndex,
    sortedItems,
  };
};

export default useProducts;
