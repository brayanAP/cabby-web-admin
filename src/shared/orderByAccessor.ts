import valueIsNumber from 'typeAssertions/valueIsNumber'

const orderByAccessor = <T>(
    data: Array<T>,
    accessor: (record: T) => unknown,
) => data.sort((a, b) => {
        const aValue = accessor(a)
        const bValue = accessor(b)
        const compareA = valueIsNumber(aValue) ? aValue : `${aValue}`.toUpperCase()
        const compareB = valueIsNumber(bValue) ? bValue : `${bValue}`.toUpperCase()

        if (compareA < compareB) {
            return -1
        }

        if (compareA > compareB) {
            return 1
        }
        return 0
    })

export default orderByAccessor
