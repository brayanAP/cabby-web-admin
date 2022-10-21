import styled from 'styled-components/macro'
import BaseCard from 'components/atoms/BaseCard'

export const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled(BaseCard)`
    width: 460px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        box-shadow: none;
    }
`

export const InfoFrame = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
        gap: 0px;
    }
`
