import axios from 'axios'

type Args = {
    path: string;
    firebaseRealtimeDbUrl: string;
}

const firebaseRealtimeDatabaseRestShallowQuery = async ({
    path,
    firebaseRealtimeDbUrl,
}: Args) => {
    const response = await axios({
        method: 'GET',
        url: `${firebaseRealtimeDbUrl}/${path.replace(/^\//g, '')}.json`,
        params: {
            shallow: true,
        },
    })

    return response.data as unknown
}

export default firebaseRealtimeDatabaseRestShallowQuery
