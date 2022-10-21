import styled from 'styled-components/macro'

export const Frame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        justify-content: center;
    }
`

export const Image = styled.img`
    width: 250px;
    height: 250px;

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
`
