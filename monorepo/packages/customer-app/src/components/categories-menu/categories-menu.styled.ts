import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #000;
    padding-bottom: 16px;
`;

export const Category = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    font-size: 18px;
    color: #000;
    text-overflow: ellipsis;
    cursor: pointer;
    font-family: Avenir-Heavy;
    font-weight: 800;
    
    > span {

    }

    &.selected {
        > span {
            display: inline-block;
            height: 100%;
            position: relative;
            background-color: #000;
            height: 3px;
        }
    }
`

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
`;
export const ButtonContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    margin-right: 20px;
`;
