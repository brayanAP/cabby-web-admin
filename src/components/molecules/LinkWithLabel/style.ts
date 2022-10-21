import styled from 'styled-components/macro'

export const LinkFrame = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
