import React from "react";
import * as Styled from "./products-table.styled";
import useProducts from "./useProducts";
import { Item } from "../../types/Items";

interface IProps {
  items: Item[];
  itemsPerPage: number;
}

const ProductTable: React.FC<IProps> = ({ items, itemsPerPage }) => {
  const {
    toggleSort,
    handleSort,
    visibleItems,
    handlePageChange,
    currentPage,
    endIndex,
    sortedItems,
  } = useProducts(items, itemsPerPage);

  return (
    <div>
      <Styled.Table>
        <thead>
          <tr>
            <th className="title" onClick={() => toggleSort("title")}>
              Title
            </th>
            <th className="category" onClick={() => toggleSort("category")}>
              Category
            </th>
            <th className="price" onClick={() => handleSort("price")}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {visibleItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
      <Styled.Pagination>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= sortedItems.length}
        >
          Next
        </button>
      </Styled.Pagination>
    </div>
  );
};

export default ProductTable;
