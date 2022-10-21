import { TypeAssertion } from './valueIsShapeAssertion'

const valueIsNumber = ((value: unknown): value is number => {
    if (typeof value !== 'number') {
        return false
    }
    if (Number.isNaN(value)) {
        return false
    }
    return true
}) as TypeAssertion<number>

export default valueIsNumber
