import styled from 'styled-components/macro'

export const FormFrame = styled.div`
    display: flex; 
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
    }
`

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 20px;
    
`

export const FormInputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
