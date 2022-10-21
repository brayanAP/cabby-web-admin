const getNumberFromUnknown = (original: unknown) => {
    if (typeof original === 'number') {
        return original
    }
    if (typeof original === 'string') {
        const formatedOriginal = original.trim()
        if (/^-?[0-9]+(.[0-9]+)?$/.test(formatedOriginal)) {
            return Number(formatedOriginal)
        }
    }

    throw new Error(`Cannot convert [${original}] to number`)
}

export default getNumberFromUnknown
