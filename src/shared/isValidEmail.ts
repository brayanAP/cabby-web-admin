import valueIsString from 'typeAssertions/valueIsString'

export default (value: unknown) => valueIsString(value) && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
