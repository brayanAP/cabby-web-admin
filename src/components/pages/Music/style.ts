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
    max-height: 80%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-height: 100%;
        box-shadow: none;
    }
`

export const AddFrame = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ListFrame = styled.div`
    width: 100%;
    margin-top: 20px;
`
