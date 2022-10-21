import valueIsString from 'typeAssertions/valueIsString'

export default (value: unknown) => valueIsString(value) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)
