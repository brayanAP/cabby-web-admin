import React from 'react'
import type { RouteCheckerComponent } from 'types'

type Props = {
    checkers: RouteCheckerComponent[];
    element: JSX.Element;
    loadingElement?: JSX.Element;
}

const RouteCheckers: React.VFC<Props> = ({
    checkers,
    element,
    loadingElement,
}) => {
    if (checkers.length < 1) {
        throw new Error('Invalid checkers list, should always have at least one element')
    }

    const Checker = checkers[0]

    if (checkers.length === 1) {
        return (
            <Checker element={element} loadingElement={loadingElement} />
        )
    }

    const restOfCheckers = checkers.slice(1, checkers.length)

    return (
        <Checker
            loadingElement={loadingElement}
            element={(
                <RouteCheckers
                    loadingElement={loadingElement}
                    checkers={restOfCheckers}
                    element={element}
                />
            )}
        />
    )
}

export default RouteCheckers
