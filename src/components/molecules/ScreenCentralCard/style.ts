import styled from 'styled-components/macro'
import BaseScreen from 'components/atoms/BaseScreen'
import BaseCard from 'components/atoms/BaseCard'

export const Screen = styled(BaseScreen)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled(BaseCard)`
    width: 460px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        box-shadow: none;
    }
`
