import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 16px;
    padding: 16px 16px 0 16px;
    box-sizing: border-box;

    .add-to-cart-button {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #F3E5AB;
        color: white;
        padding: 9px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: black;
        font-family: Avenir-Roman;
        font-weight: 800;
    }

    &:hover {
        -webkit-box-shadow: 8px 8px 23px 1px rgba(0,0,0,0.39); 
        box-shadow: 8px 8px 23px 1px rgba(0,0,0,0.39);
        transition: transform 0.3s;
        transform: rotate(3deg); 
        .add-to-cart-button {
            display: block;
        }
    }

    
    > p {
        display: flex;
        flex-grow: 1;
        margin: 0;
        line-height: 18px;
        font-size: 14px;
        color: #000;
        font-family: Avenir-Roman;
        font-weight: 400;
    }
`;

