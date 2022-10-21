import React from 'react'
import Text from 'components/atoms/Text'
import ScreenCentralCard from 'components/molecules/ScreenCentralCard'
import { Frame, Image } from './style'

export default () => (
    <ScreenCentralCard>
        <Frame>
            <Image src="/svg/pageNotFound.svg" />
            <Text variant="h4" align="center">Page not found</Text>
        </Frame>
    </ScreenCentralCard>
)
