import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Category = styled.div`
    letter-spacing: -.5px;
    padding: 0 8px;
    font-size: 18px;
    color: #000;
    text-overflow: ellipsis;
    cursor: pointer;
    font-family: Avenir-Heavy;
    font-weight: 800;
    
    &.selected {
        background-color: gray;
    }
`