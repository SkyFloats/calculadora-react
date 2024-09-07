import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 30px 20px;
    border: 1px solid #C0C0C0;
    background-color: #00AAF0;
    border-radius: 15px;
    margin: 5px;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
        border: 2px solid #A0A0F0
    }
    @media(max-width: 800px){
        padding: 40px 0px;
    }
`
