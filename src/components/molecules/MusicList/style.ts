import styled from 'styled-components/macro'

export const List = styled.ul`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
`

export const Item = styled.li`
    list-style: none;
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;

    &:hover {
        background-color: #f5f5f5;
    }
`
