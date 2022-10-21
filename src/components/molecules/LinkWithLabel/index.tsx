import React from 'react'
import { Link } from 'react-router-dom'
import Text from 'components/atoms/Text'
import { LinkFrame } from './style'

type Props = {
    to: string;
    replace: boolean;
    labelText: string;
    linkText: string;
}

const LinkWithLabel: React.FC<Props> = ({
    to,
    replace,
    labelText,
    linkText,
}) => (
    <LinkFrame>
        <Text variant="body1">{labelText}</Text>
        <Link to={to} replace={replace}>{linkText}</Link>
    </LinkFrame>
)

export default LinkWithLabel
