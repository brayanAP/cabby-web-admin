import { initializeApp, getApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCXfNRxgcKRVOlb-Zp8w-zaX_lVVerhB7o',
    authDomain: 'decompras-7c974.firebaseapp.com',
    databaseURL: 'https://decompras-7c974-default-rtdb.firebaseio.com',
    projectId: 'decompras-7c974',
    storageBucket: 'decompras-7c974.appspot.com',
    messagingSenderId: '309573545396',
    appId: '1:309573545396:web:470216517f6720997656e1',
    measurementId: 'G-7NV7KPLN5S',
}

export const getFirebaseApp = (appName: string) => {
    try {
        return getApp(appName)
    } catch {
        if (!firebaseConfig) {
            throw new Error('Should always have a firebase config')
        }
        return initializeApp(firebaseConfig, appName)
    }
}

export const eabyFirebaseApp = getFirebaseApp('main')
export const eabyRealTimeFirebase = getDatabase(eabyFirebaseApp)
export const eabyAuthFirebase = getAuth(eabyFirebaseApp)
const projectId = 'proj_4AuAkzt8nRox2UKARFJ6Yz'
export const eabyRealTimeFirebasePath = `/projects/${projectId}/data`
