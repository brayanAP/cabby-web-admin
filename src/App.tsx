import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RouteCheckers from 'components/organisms/RouteCheckers'
import RouteCheckerUnauthenticated from 'components/organisms/RouteCheckerUnauthenticated'
import RouteCheckerAuthendicated from 'components/organisms/RouteCheckerAuthendicated'
import LogIn from 'components/pages/LogIn'
import SignUp from 'components/pages/SignUp'
import Home from 'components/pages/Home'
import Music from 'components/pages/Music'
import NotFound from 'components/pages/NotFound'

const App = () => (
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
            path="/music"
            element={(
                <RouteCheckers
                    checkers={[RouteCheckerAuthendicated]}
                    element={<Music />}
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
            path="/signup"
            element={(
                <RouteCheckerUnauthenticated
                    element={<SignUp />}
                />
            )}
        />
        <Route
            path="*"
            element={<NotFound />}
        />
    </Routes>
)

export default App
