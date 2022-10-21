import valueIsArray from 'typeAssertions/valueIsArray'
import valueIsRecord from 'typeAssertions/valueIsRecord'
import valueIsString from 'typeAssertions/valueIsString'
import getNumberFromUnknown from 'shared/getNumberFromUnknown'

const getValueByPathFromUnknown = (
    value: unknown,
    path: (string | number)[],
): unknown => {
    if (path.length < 1) {
        return value
    }

    const [link, ...restOfPath] = path

    if (valueIsArray(value) || valueIsString(value)) {
        if (link === 'length') {
            return value.length
        }

        try {
            const index = getNumberFromUnknown(link)
            return getValueByPathFromUnknown(value[index], restOfPath)
        } catch {
            return undefined
        }
    }

    if (!valueIsRecord(value)) {
        return undefined
    }

    return getValueByPathFromUnknown(value[link], restOfPath)
}

export default getValueByPathFromUnknown
