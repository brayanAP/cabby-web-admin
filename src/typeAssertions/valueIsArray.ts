const valueIsArray = (value: unknown): value is unknown[] => {
    if (Array.isArray(value)) {
        return true
    }
    return false
}

export default valueIsArray
