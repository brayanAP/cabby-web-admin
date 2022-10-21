import styled from 'styled-components/macro'
import BaseCard from 'components/atoms/BaseCard'

export const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormFrame = styled(BaseCard)`
    width: 400px;
    display: flex; 
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    background-color: white;

    @media screen and (max-width: 768px) {
        width: 90%;
        justify-content: center;
    }
`

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 10px;
`

export const ButtonsFrame = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`
