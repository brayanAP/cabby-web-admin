import short from 'short-uuid'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import type { Music } from 'types'
import { addMusic } from 'store/actions/pleasures'
import useCurrentUser from 'hooks/useCurrentUser'
import isValidMusicName from 'shared/isValidMusicName'
import isValidMusicAuthor from 'shared/isValidMusicAuthor'

type FormAddMusic = Pick<Music, 'name' | 'author'>

const useAddMusic = () => {
    const dispatch = useDispatch()
    const currentUser = useCurrentUser()

    return useCallback((music: FormAddMusic) => {
        if (!currentUser) {
            throw new Error('Invalid current user')
        }

        const musicTrim = Object.entries(music).reduce((accum, [key, value]) => ({
            ...accum,
            [key]: value.trim(),
        }), {}) as FormAddMusic

        if (!isValidMusicName(musicTrim.name)) {
            throw new Error('Invalid name')
        }

        if (!isValidMusicAuthor(musicTrim.author)) {
            throw new Error('Invalid author')
        }

        dispatch(addMusic({
            id: short.generate(),
            personId: currentUser.id,
            ...musicTrim,
        }))
    }, [dispatch, currentUser])
}

export default useAddMusic
