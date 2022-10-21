import valueIsRecord from './valueIsRecord'

const assertionSymbol = Symbol('assertionSymbol')

export type TypeAssertion<T> = {
    (value: unknown): value is T;
    [assertionSymbol]: (args: T) => T;
}

export type TypeAssertionMap<T> = { [K in keyof Required<T>]: TypeAssertion<T[K]> }

const valueIsShapeAssertion = <T>(
    validationMap: TypeAssertionMap<T>,
) => ((value: unknown): value is T => {
    if (!valueIsRecord(value)) {
        return false
    }

    const notMatched = Object.entries(validationMap).find(([propName, propValidator]) => {
        const propValue = value[propName]

        const assertion = propValidator as TypeAssertion<unknown>

        return !assertion(propValue)
    })

    return !notMatched
}) as TypeAssertion<T>

export default valueIsShapeAssertion
