import { TypeAssertion } from './valueIsShapeAssertion'

const valueIsNull = ((value): value is null => value === null) as TypeAssertion<null>

export default valueIsNull
