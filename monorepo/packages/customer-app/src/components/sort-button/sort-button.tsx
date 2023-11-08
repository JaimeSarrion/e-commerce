import React from "react";
import * as Styled from "./sort-button.styled";

interface IProps {
  onSort: () => void;
  isAscending: boolean;
}

const SortButton: React.FC<IProps> = ({ isAscending, onSort }) => {
  return (
    <Styled.Container onClick={onSort}>
      <Styled.SortButton>
        Price
        <Styled.SortArrow>{isAscending ? "↑" : "↓"}</Styled.SortArrow>
      </Styled.SortButton>
    </Styled.Container>
  );
};

export default SortButton;
