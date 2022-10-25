import valueIsShapeAssertion from 'typeAssertions/valueIsShapeAssertion'
import valueIsString from 'typeAssertions/valueIsString'
import clientConfig from 'client.config.json'

type FirebaseConnection = {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const valueIsFirebaseConnection = valueIsShapeAssertion<FirebaseConnection>({
    apiKey: valueIsString,
    appId: valueIsString,
    authDomain: valueIsString,
    databaseURL: valueIsString,
    messagingSenderId: valueIsString,
    projectId: valueIsString,
    storageBucket: valueIsString,
})

export const getFirebaseConnection = () => {
    if (!valueIsFirebaseConnection(clientConfig.firebase)) {
        throw new Error('A firebase connection is required')
    }
    return clientConfig.firebase
}

type ApphiveConfig = {
    projectId: string;
}

const valueIsApphiveConfig = valueIsShapeAssertion<ApphiveConfig>({
    projectId: valueIsString,
})

export const getApphive = () => {
    if (!valueIsApphiveConfig(clientConfig.apphive)) {
        throw new Error('A firebase connection is required')
    }
    return clientConfig.apphive
}
