import valueIsArray from './valueIsArray'
import valueIsNullOrUndef from './valueIsNullOrUndef'
import { TypeAssertion } from './valueIsShapeAssertion'

const valueIsRecord = ((value: unknown): value is Record<string | number, unknown> => {
    if (typeof value !== 'object') {
        return false
    }

    if (valueIsNullOrUndef(value)) {
        return false
    }

    if (valueIsArray(value)) {
        return false
    }

    return true
}) as TypeAssertion<Record<string | number, unknown>>

export default valueIsRecord
