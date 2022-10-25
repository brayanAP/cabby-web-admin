import { useCallback } from 'react'
import {
    ref,
    query,
    get,
    child,
} from 'firebase/database'
import { eabyRealTimeFirebase, realTimeFirebasePaths } from 'shared/getFirebaseApp'
import { useDispatch } from 'react-redux'
import { updateCurrentUser } from 'store/actions/auth'

const useUpdateCurrentUser = () => {
    const dispatch = useDispatch()

    return useCallback(async (id: string) => {
        const refToCollection = ref(eabyRealTimeFirebase, realTimeFirebasePaths.admins)
        const dataSnapshotVal = (await get(query(child(refToCollection, id)))).val()

        if (!dataSnapshotVal) {
            throw new Error('Admin not found')
        }
        dispatch(updateCurrentUser(dataSnapshotVal))
    }, [dispatch])
}

export default useUpdateCurrentUser
