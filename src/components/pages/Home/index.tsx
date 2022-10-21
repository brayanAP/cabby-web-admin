import React from 'react'
import Text from 'components/atoms/Text'
import Button from 'components/atoms/Button'
import ScreenMenuPleasures from 'components/molecules/ScreenMenuPleasures'
import AvatarUserToProfile from 'components/molecules/AvatarUserToProfile'
import useLogOut from 'hooks/useLogOut'
import useCurrentUser from 'hooks/useCurrentUser'
import { Frame, Card, InfoFrame } from './style'

export default () => {
    const currentUser = useCurrentUser()
    const logout = useLogOut()

    return (
        <ScreenMenuPleasures>
            <Frame>
                <Card>
                    <AvatarUserToProfile width={100} height={100} />
                    <Text variant="h3" align="center">{`${currentUser?.name} ${currentUser?.paternalSurname}`}</Text>
                    <InfoFrame>
                        <Text variant="body1">Phone:</Text>
                        <Text variant="body1">{currentUser?.phone}</Text>
                    </InfoFrame>
                    <InfoFrame>
                        <Text variant="body1">Email:</Text>
                        <Text variant="body1">{currentUser?.email}</Text>
                    </InfoFrame>
                    <InfoFrame>
                        <Text variant="body1">Gender:</Text>
                        <Text variant="body1">{currentUser?.gender}</Text>
                    </InfoFrame>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={logout}
                    >
                        Delete my account
                    </Button>
                </Card>
            </Frame>
        </ScreenMenuPleasures>
    )
}
