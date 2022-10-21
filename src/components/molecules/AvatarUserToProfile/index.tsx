import React from 'react'
import AvatarComponent from 'components/atoms/Avatar'
import { Frame } from './style'

type Props = {
    width?: string | number;
    height?: string | number;
}

const AvatarUserToProfile: React.FC<Props> = ({ width = 30, height = 30 }) => (
    <Frame>
        <AvatarComponent
            src="../../../assets/images/user.png"
            sx={{ width, height }}
        />
    </Frame>
)

export default AvatarUserToProfile
