import React, { useState } from "react";
import * as Styled from "./categories-menu.styled";

interface IProps {
  categories: { label: string; id: string }[];
  onSelect: (category: string) => void;
}

const CategoriesMenu: React.FC<IProps> = ({ categories, onSelect }) => {
  const [selected, setSelected] = useState<string>("all");

  function handleSelect(category: string) {
    setSelected(category);
    onSelect(category);
  }

  return (
    <Styled.Container>
      <Styled.Category
        className={selected === "all" ? "selected" : ""}
        key={"all"}
        onClick={() => handleSelect("all")}
      >
        All
      </Styled.Category>
      {categories.map((category) => (
        <Styled.Category
          key={category.id}
          onClick={() => handleSelect(category.id)}
          className={selected === category.id ? "selected" : ""}
        >
          {category.label}
        </Styled.Category>
      ))}
    </Styled.Container>
  );
};

export default CategoriesMenu;
