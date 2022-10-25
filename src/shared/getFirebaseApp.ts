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

export const eabyFirebaseApp = getFirebaseApp('main')
export const eabyRealTimeFirebase = getDatabase(eabyFirebaseApp)
export const eabyAuthFirebase = getAuth(eabyFirebaseApp)
export const eabyRealTimeFirebasePath = `/projects/${getApphive().projectId}/data`
