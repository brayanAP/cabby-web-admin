import { TypeAssertion } from './valueIsShapeAssertion'

const valueIsString = ((value): value is string => typeof value === 'string') as TypeAssertion<string>

export default valueIsString
