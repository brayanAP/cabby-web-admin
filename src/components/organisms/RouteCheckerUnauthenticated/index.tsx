import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteCheckerComponent } from 'types'
import useCurrentUser from 'hooks/useCurrentUser'

const RouteCheckerUnauthenticated: RouteCheckerComponent = ({ element }) => {
    const currentUser = useCurrentUser()

    if (currentUser) {
        return <Navigate replace to="/" />
    }

    return element
}

export default RouteCheckerUnauthenticated
