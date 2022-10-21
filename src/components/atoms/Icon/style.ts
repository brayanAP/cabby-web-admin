import styled, { FlattenSimpleInterpolation } from 'styled-components/macro'

export const Frame = styled.svg<{
    fill?: string;
    width?: string;
    height?: string;
    styleIcon?: FlattenSimpleInterpolation;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) => props.styleIcon};
    fill: ${(props) => props.fill};
    transition: fill 0.3s ease;
`
