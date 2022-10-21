import { useState } from 'react'
import valueIsNumber from 'typeAssertions/valueIsNumber'
import valueIsString from 'typeAssertions/valueIsString'

type HandleOnChange = (event: { target: { value: unknown, name: unknown }}) => void;
type BaseInitialValues = Record<string, unknown>;
type HandleOnSubmit<InitialValues extends BaseInitialValues> = (
    func: (values: InitialValues) => void,
) => (event: React.FormEvent<HTMLFormElement>) => void;

const useControlledForm = <InitialValues extends BaseInitialValues>(
    initialValues: InitialValues,
) => {
    const [formValues, setValues] = useState({ ...initialValues })

    const handleOnChange: HandleOnChange = (event) => {
        const { name, value } = event.target
        if (valueIsString(name) && (valueIsString(value) || valueIsNumber(value))) {
            setValues((prevFormValues) => ({
                ...prevFormValues,
                [name]: value,
            }))
        }
    }

    const handleOnSubmit: HandleOnSubmit<InitialValues> = (func) => (event) => {
        event.preventDefault()
        func(formValues)
        setValues(initialValues)
    }

    return {
        formValues,
        handleOnChange,
        handleOnSubmit,
    }
}

export default useControlledForm
