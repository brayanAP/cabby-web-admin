import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateCurrentUser } from 'store/actions/auth'

const useLogOut = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(updateCurrentUser(undefined))
        navigate('/login', { replace: true })
    }, [dispatch, navigate])
}

export default useLogOut
