import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import useAlertDialog from 'hooks/useAlertDialog'
import useUpdateCurrentUser from 'hooks/useUpdateCurrentUser'
import isValidEmail from 'shared/isValidEmail'
import isValidPassword from 'shared/isValidPassword'
import { eabyAuthFirebase } from 'shared/getFirebaseApp'
import getValueByPathFromUnknown from 'shared/getValueByPathFromUnknown'

type FormLogIn = {
    email: string;
    password: string;
}

const useLogIn = () => {
    const [loggingIn, setLoggingIn] = useState(false)
    const navigate = useNavigate()
    const updateCurrentUser = useUpdateCurrentUser()
    const alert = useAlertDialog()

    const handleOnLogIn = useCallback(async (credentials: FormLogIn) => {
        setLoggingIn(true)
        try {
            const credentialsTrim = Object.entries(credentials).reduce((accum, [key, value]) => ({
                ...accum,
                [key]: value.trim(),
            }), {}) as FormLogIn

            if (!isValidEmail(credentialsTrim.email)) {
                throw new Error('Invalid email')
            }

            if (!isValidPassword(credentialsTrim.password)) {
                throw new Error('Invalid password')
            }

            const { user } = await signInWithEmailAndPassword(
                eabyAuthFirebase,
                credentials.email,
                credentials.password,
            )

            await updateCurrentUser(user.uid)
            navigate('/', { replace: true })
        } catch (error) {
            const errorMessage = getValueByPathFromUnknown(error, ['message'])
            alert({
                title: `${errorMessage}`,
                message: 'Please enter a valid one',
            })
        } finally {
            setLoggingIn(false)
        }
    }, [navigate, alert, updateCurrentUser])

    return { loggingIn, handleOnLogIn }
}

export default useLogIn
