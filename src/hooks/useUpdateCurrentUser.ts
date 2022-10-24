import { useCallback } from 'react'
import {
    ref,
    query,
    get,
    child,
} from 'firebase/database'
import { eabyRealTimeFirebase, eabyRealTimeFirebasePath } from 'shared/getFirebaseApp'
import { useDispatch } from 'react-redux'
import { updateCurrentUser } from 'store/actions/auth'

const useUpdateCurrentUser = () => {
    const dispatch = useDispatch()

    return useCallback(async (id: string) => {
        const refToCollection = ref(eabyRealTimeFirebase, `${eabyRealTimeFirebasePath}/APP_Admins`)
        const dataSnapshotVal = (await get(query(child(refToCollection, id)))).val()

        if (!dataSnapshotVal) {
            throw new Error('Admin not found')
        }
        console.log({ dataSnapshotVal })
        dispatch(updateCurrentUser(dataSnapshotVal))
    }, [dispatch])
}

export default useUpdateCurrentUser
