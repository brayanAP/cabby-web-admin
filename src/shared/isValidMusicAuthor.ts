import valueIsString from 'typeAssertions/valueIsString'

export default (value: unknown) => valueIsString(value) && /^[\w\sÁÉÍÓÚñáéíóúÑ0-9'.-]{2,32}$/.test(value)
