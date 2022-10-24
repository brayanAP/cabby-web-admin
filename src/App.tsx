import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { eabyAuthFirebase } from 'shared/getFirebaseApp'
import RootRoutes from 'components/organisms/RootRoutes'
import useUpdateCurrentUser from 'hooks/useUpdateCurrentUser'

const App = () => {
    const updateCurrentUser = useUpdateCurrentUser()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(eabyAuthFirebase, async (user) => {
            if (user) {
                try {
                    await updateCurrentUser(user.uid)
                } catch {
                    // no action
                }
            }
        })

        return () => {
            unsubscribe()
        }
    }, [updateCurrentUser])

    return (<RootRoutes />)
}

export default App
