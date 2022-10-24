import React, { useEffect } from 'react'
import Button from 'components/atoms/Button'
import ScreenMenuPleasures from 'components/molecules/ScreenMenuPleasures'
import usePaginationConductores from 'hooks/usePaginationConductores'
import { Frame, Card } from './style'

export default () => {
    const { gettingConductores, arrConductores, getConductores } = usePaginationConductores()

    useEffect(() => console.log(arrConductores), [arrConductores])

    return (
        <ScreenMenuPleasures>
            <Frame>
                <Card>
                    <Button
                        variant="outlined"
                        disabled={gettingConductores}
                        onClick={getConductores}
                    >
                        Get conductores
                    </Button>
                </Card>
            </Frame>
        </ScreenMenuPleasures>
    )
}
