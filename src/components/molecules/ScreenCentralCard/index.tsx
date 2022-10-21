import React from 'react'
import { Screen, Card } from './style'

type Props = {
    children: React.ReactElement;
}

const ScreenCentralCard: React.FC<Props> = ({
    children,
}) => (
    <Screen>
        <Card>
            {children}
        </Card>
    </Screen>
)

export default ScreenCentralCard
