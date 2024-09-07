import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#F0F0F0, #AAAFFF);

    display: flex;
    align-itens: center;
    justify-content: center;
`

export const Content = styled.div`

    width: 50%;
    height: 50%;
    @media(max-width: 800px){
        width: 100%;
        height: 50%;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aligh-items: center;
`