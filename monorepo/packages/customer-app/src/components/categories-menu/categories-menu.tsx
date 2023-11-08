import React, { useState } from "react";
import * as Styled from "./categories-menu.styled";
import SortButton from "../sort-button/sort-button";

interface IProps {
  categories: { label: string; id: string }[];
  isAscending: boolean;
  onSelect: (category: string) => void;
  onSort: () => void;
}

const CategoriesMenu: React.FC<IProps> = ({
  categories,
  onSelect,
  isAscending,
  onSort,
}) => {
  const [selected, setSelected] = useState<string>("all");

  function handleSelect(category: string) {
    setSelected(category);
    onSelect(category);
  }

  return (
    <Styled.Container>
      <Styled.CategoriesContainer>
        <Styled.Category
          className={selected === "all" ? "selected" : ""}
          key={"all"}
          onClick={() => handleSelect("all")}
        >
          All
          <span />
        </Styled.Category>
        {categories.map((category) => (
          <Styled.Category
            key={category.id}
            onClick={() => handleSelect(category.id)}
            className={selected === category.id ? "selected" : ""}
          >
            {category.label}
            <span />
          </Styled.Category>
        ))}
      </Styled.CategoriesContainer>
      <Styled.ButtonContainer>
        <SortButton onSort={onSort} isAscending={isAscending} />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default CategoriesMenu;
