import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import type { Music } from 'types'
import { deleteMusic } from 'store/actions/pleasures'

const useDeleteMusic = () => {
    const dispatch = useDispatch()

    return useCallback((music: Music) => {
        dispatch(deleteMusic(music))
    }, [dispatch])
}

export default useDeleteMusic
