import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RouteCheckers from 'components/organisms/RouteCheckers'
import RouteCheckerUnauthenticated from 'components/organisms/RouteCheckerUnauthenticated'
import RouteCheckerAuthendicated from 'components/organisms/RouteCheckerAuthendicated'
import LogIn from 'components/pages/LogIn'
import Home from 'components/pages/Home'
import NotFound from 'components/pages/NotFound'

const RootRoutes = () => (
    <Routes>
        <Route
            path="/"
            element={(
                <RouteCheckers
                    checkers={[RouteCheckerAuthendicated]}
                    element={<Home />}
                />
            )}
        />
        <Route
            path="/login"
            element={(
                <RouteCheckerUnauthenticated
                    element={<LogIn />}
                />
            )}
        />
        <Route
            path="*"
            element={<NotFound />}
        />
    </Routes>
)

export default RootRoutes
