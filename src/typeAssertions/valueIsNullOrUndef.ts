import valueIsNull from './valueIsNull'
import valueIsUndefined from './valueIsUndefined'

const valueIsNullOrUndef = (
    value: unknown,
): value is (null | undefined
) => valueIsNull(value) || valueIsUndefined(value)

export default valueIsNullOrUndef
