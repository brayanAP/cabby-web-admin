import React from 'react'
import type { RouteCheckerComponent } from 'types'
import { Navigate } from 'react-router-dom'
import useCurrentUser from 'hooks/useCurrentUser'

const RouteCheckerAuthendicated: RouteCheckerComponent = ({ element }) => {
    const currentUser = useCurrentUser()

    if (!currentUser) {
        return <Navigate replace to="login" />
    }

    return element
}

export default RouteCheckerAuthendicated
