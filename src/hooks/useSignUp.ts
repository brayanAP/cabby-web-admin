import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { User } from 'types'
import { updateCurrentUser } from 'store/actions/auth'
import useAlertDialog from 'hooks/useAlertDialog'
import titleCase from 'shared/titleCase'
import isValidEmail from 'shared/isValidEmail'
import isValidPassword from 'shared/isValidPassword'
import isValidName from 'shared/isValidName'
import isValidPhone from 'shared/isValidPhone'

type FormSignUp = Omit<User, 'id'> & { password: string }

const useSignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlertDialog()

    return useCallback((user: FormSignUp) => {
        const userTrim = Object.entries(user).reduce((accum, [key, value]) => ({
            ...accum,
            [key]: value.trim(),
        }), {}) as FormSignUp

        if (!isValidName(userTrim.name)) {
            alert({
                title: 'Invalid name',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!isValidName(userTrim.paternalSurname)) {
            alert({
                title: 'Invalid paternal surname',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!isValidName(userTrim.maternalSurname)) {
            alert({
                title: 'Invalid maternal surname',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!isValidPhone(userTrim.phone)) {
            alert({
                title: 'Invalid phone',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!userTrim.gender) {
            alert({
                title: 'Invalid gender',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!isValidEmail(userTrim.email)) {
            alert({
                title: 'Invalid email',
                message: 'Please enter a valid one',
            })
            return
        }

        if (!isValidPassword(userTrim.password)) {
            alert({
                title: 'Invalid password',
                message: 'Must be uppercase, lowercase, numerous, and special character',
            })
            return
        }

        dispatch(updateCurrentUser({
            id: 'USER001',
            ...userTrim,
            name: titleCase(userTrim.name),
            paternalSurname: titleCase(userTrim.paternalSurname),
            maternalSurname: titleCase(userTrim.maternalSurname),
        }))
        navigate('/', { replace: true })
    }, [dispatch, navigate, alert])
}

export default useSignUp
