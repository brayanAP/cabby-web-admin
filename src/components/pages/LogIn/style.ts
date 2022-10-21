import styled from 'styled-components/macro'

export const FormFrame = styled.div`
    display: flex; 
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 100vh;
        justify-content: center;
    }
`

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    gap: 20px;
    
`
