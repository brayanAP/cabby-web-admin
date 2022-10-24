import { useCallback, useState } from 'react'
import {
    ref,
    query,
    get,
    orderByChild,
    startAt,
    limitToFirst,
} from 'firebase/database'
import type { Conductor } from 'types'
import { eabyRealTimeFirebase, eabyRealTimeFirebasePath } from 'shared/getFirebaseApp'
import valueIsRecord from 'typeAssertions/valueIsRecord'
import orderByAccessor from 'shared/orderByAccessor'

const useOnceDrivers = () => {
    const [arrConductores, setArrConductores] = useState<Array<Conductor>>([])
    const [objConductores, setObjConductores] = useState<Record<string, Conductor>>({})
    const [endNombreCompleto, setEndNombreCompleto] = useState<string>('')
    const [gettingConductores, seGettingConductores] = useState(false)

    const getConductores = useCallback(async () => {
        seGettingConductores(true)
        const refToCollection = ref(eabyRealTimeFirebase, `${eabyRealTimeFirebasePath}/TAXI_Conductor`)
        try {
            const queryToCollection = endNombreCompleto ? query(
                refToCollection,
                orderByChild('nombreCompleto'),
                startAt(endNombreCompleto),
                limitToFirst(5),
            ) : query(
                refToCollection,
                orderByChild('nombreCompleto'),
                limitToFirst(5),
            )

            const dataSnapshotVal = (await get(queryToCollection)).val()
            if (dataSnapshotVal) {
                const newObjConductores = { ...objConductores, ...dataSnapshotVal }
                const newArrConductores = orderByAccessor(
                    Object.values(newObjConductores),
                    (recordValue: Conductor) => {
                        if (valueIsRecord(recordValue)) {
                            return recordValue.nombreCompleto
                        }
                        return undefined
                    },
                ) as Array<Conductor>
                setArrConductores(newArrConductores)
                setObjConductores(newObjConductores)
                setEndNombreCompleto(newArrConductores[newArrConductores.length - 1].nombreCompleto)
            }
        } catch {
            // no action
        } finally {
            seGettingConductores(false)
        }
    }, [endNombreCompleto, objConductores])

    return {
        gettingConductores,
        arrConductores,
        objConductores,
        getConductores,
    }
}

export default useOnceDrivers
