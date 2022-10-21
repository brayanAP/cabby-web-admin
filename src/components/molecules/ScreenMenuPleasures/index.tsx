import React from 'react'
import BaseScreen from 'components/atoms/BaseScreen'
import MenuPleasures from 'components/molecules/MenuPleasures'
import AvatarUserToProfile from 'components/molecules/AvatarUserToProfile'
import {
    Header,
    Content,
} from './style'

type Props = {
    children: React.ReactElement;
}

const ScreenMenuPleasures: React.FC<Props> = ({ children }) => (
    <BaseScreen>
        <Header>
            <MenuPleasures />
            <AvatarUserToProfile />
        </Header>
        <Content>
            {children}
        </Content>
    </BaseScreen>
)

export default ScreenMenuPleasures
