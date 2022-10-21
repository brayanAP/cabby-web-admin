export default (value: string) => value.replace(/(^|\s)\S/g, (value) => value.toUpperCase())
