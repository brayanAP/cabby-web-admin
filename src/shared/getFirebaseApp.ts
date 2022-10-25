import { initializeApp, getApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getFirebaseConnection, getApphive } from './getClientConfig'

export const getFirebaseApp = (appName: string) => {
    try {
        return getApp(appName)
    } catch {
        const firebaseConfig = getFirebaseConnection()
        return initializeApp(firebaseConfig, appName)
    }
}

const { projectId } = getApphive()

export const realTimeFirebasePaths = {
    admins: `/projects/${projectId}/data/APP_Admins`,
    conductores: `/projects/${projectId}/data/TAXI_Conductor`,
    pasajeros: `/projects/${projectId}/data/TAXI_Cliente`,
}

export const eabyFirebaseApp = getFirebaseApp('main')
export const eabyRealTimeFirebase = getDatabase(eabyFirebaseApp)
export const eabyAuthFirebase = getAuth(eabyFirebaseApp)
