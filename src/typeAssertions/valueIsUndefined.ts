import { TypeAssertion } from './valueIsShapeAssertion'

const valueIsUndefined = ((
    value: unknown,
): value is undefined => value === undefined) as TypeAssertion<undefined>

export default valueIsUndefined
