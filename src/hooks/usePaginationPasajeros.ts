import { useCallback, useEffect, useState } from 'react'
import {
    ref,
    query,
    get,
    orderByChild,
    startAt,
    limitToFirst,
} from 'firebase/database'
import type { Pasajero } from 'types'
import { eabyRealTimeFirebase, realTimeFirebasePaths } from 'shared/getFirebaseApp'
import valueIsRecord from 'typeAssertions/valueIsRecord'
import orderByAccessor from 'shared/orderByAccessor'
import firebaseRealtimeDatabaseRestShallowQuery from 'shared/firebaseRealtimeDatabaseRestShallowQuery'
import { getFirebaseConnection } from 'shared/getClientConfig'

const usePaginationPasajeros = () => {
    const [numPasajeros, setNumPasajeros] = useState<number>(0)
    const [arrPasajeros, setArrPasajeros] = useState<Array<Pasajero>>([])
    const [objPasajeros, setObjPasajeros] = useState<Record<string, Pasajero>>({})
    const [endNombreCompleto, setEndNombreCompleto] = useState<string>('')
    const [gettingPasajeros, seGettingPasajeros] = useState(false)

    useEffect(() => {
        const fetch = async () => {
            const result = await firebaseRealtimeDatabaseRestShallowQuery({
                path: realTimeFirebasePaths.pasajeros,
                firebaseRealtimeDbUrl: getFirebaseConnection().databaseURL,
            })
            if (valueIsRecord(result)) {
                setNumPasajeros(Object.keys(result).length)
            }
        }
        fetch()
    }, [])

    const getPasajeros = useCallback(async () => {
        try {
            seGettingPasajeros(true)

            if (arrPasajeros.length >= numPasajeros) {
                throw new Error('Pagination finished')
            }

            const refToCollection = ref(eabyRealTimeFirebase, realTimeFirebasePaths.pasajeros)
            const queryToCollection = endNombreCompleto ? query(
                refToCollection,
                orderByChild('nombreCompleto'),
                startAt(endNombreCompleto),
                limitToFirst(30),
            ) : query(
                refToCollection,
                orderByChild('nombreCompleto'),
                limitToFirst(30),
            )

            const dataSnapshotVal = (await get(queryToCollection)).val()
            if (dataSnapshotVal) {
                const newObjPasajeros = { ...objPasajeros, ...dataSnapshotVal }
                const newArrPasajeros = orderByAccessor(
                    Object.values(newObjPasajeros),
                    (recordValue: Pasajero) => {
                        if (valueIsRecord(recordValue)) {
                            return recordValue.nombreCompleto
                        }
                        return undefined
                    },
                ) as Array<Pasajero>
                setArrPasajeros(newArrPasajeros)
                setObjPasajeros(newObjPasajeros)
                setEndNombreCompleto(newArrPasajeros[newArrPasajeros.length - 1].nombreCompleto)
            }
        } catch {
            // no action
        } finally {
            seGettingPasajeros(false)
        }
    }, [
        endNombreCompleto,
        objPasajeros,
        arrPasajeros,
        numPasajeros,
    ])

    return {
        gettingPasajeros,
        numPasajeros,
        arrPasajeros,
        getPasajeros,
    }
}

export default usePaginationPasajeros
