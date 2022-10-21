import React from 'react'
import { FlattenSimpleInterpolation } from 'styled-components/macro'
import Icons from 'assets/icons'
import { Frame } from './style'

type Props = {
    fill?: string;
    name: string;
    tooltip?: string;
    styleIcon?: FlattenSimpleInterpolation;
    className?: string;
    viewBox?: string;
    width?: string;
    height?: string;
    onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
}

const Icon: React.FC<Props> = ({
    fill,
    name,
    tooltip,
    viewBox,
    width,
    height,
    className,
    styleIcon,
    onClick,
}) => {
    const IconInfo = Icons[name] ? Icons[name] : () => null

    return (
        <Frame
            fill={fill}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox || '0 0 180 180'}
            className={className}
            styleIcon={styleIcon}
            onClick={onClick}
        >
            <title>{ tooltip || name }</title>
            <IconInfo />
        </Frame>
    )
}

export default Icon
