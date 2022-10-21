import valueIsString from 'typeAssertions/valueIsString'

export default (value: unknown) => valueIsString(value) && /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(value)
