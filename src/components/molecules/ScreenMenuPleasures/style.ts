import styled from 'styled-components/macro'
import BaseHeader from 'components/atoms/BaseHeader'

export const Header = styled(BaseHeader)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding 0px 15px;
`

export const Content = styled.div`
    height: calc(100vh - 55px);
    box-sizing: border-box;
    overflow: hidden;
`
export const Home = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`

export const HomeWithMenuPleasures = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
