import { useCallback } from 'react'

type AlertDialog = {
    title: string;
    message: string;
}

const useAlertDialog = () => useCallback(({ title, message }: AlertDialog) => {
    // eslint-disable-next-line no-alert
    window.alert(`
    ${title}
    ${message}
`)
}, [])

export default useAlertDialog
