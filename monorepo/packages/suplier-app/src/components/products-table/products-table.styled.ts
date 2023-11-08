import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    cursor: pointer;
  }
  tr:hover {
    background-color: #f5f5f5;
  }

  .title {
    display: flex;
    flex-grow: 1;
  }

  .category, .price {
    flex-shrink: 0;
    width: 200px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 8px 16px;
    margin: 0 4px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: #0056b3;
    }
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;