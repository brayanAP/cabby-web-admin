import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateCurrentUser } from 'store/actions/auth'
import useAlertDialog from 'hooks/useAlertDialog'
import isValidEmail from 'shared/isValidEmail'
import isValidPassword from 'shared/isValidPassword'

type FormLogIn = {
    email: string;
    password: string;
}

const useLogIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlertDialog()

    return useCallback(({ email, password }: FormLogIn) => {
        if (!isValidEmail(email.trim())) {
            alert({
                title: 'Invalid email',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!isValidPassword(password.trim())) {
            alert({
                title: 'Invalid password',
                message: 'Must be uppercase, lowercase, numerous, and special character',
            })
            return
        }

        dispatch(updateCurrentUser({
            id: 'USER001',
            phone: '6692530436',
            name: 'Brayan Ulisses',
            paternalSurname: 'Arias',
            maternalSurname: 'Perez',
            dateOfBirth: '',
            gender: 'Man',
            email: 'brulariaspe@gmail.com',
        }))
        navigate('/', { replace: true })
    }, [dispatch, navigate, alert])
}

export default useLogIn
