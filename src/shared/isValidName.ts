import valueIsString from 'typeAssertions/valueIsString'

export default (value: unknown) => valueIsString(value) && /^[A-Za-zÁÉÍÓÚñáéíóúÑ]+(([',. -][A-Za-zÁÉÍÓÚñáéíóúÑ\s])?[A-Za-zÁÉÍÓÚñáéíóúÑ]*)*$/.test(value)
