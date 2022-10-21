import React from 'react'
import Text from 'components/atoms/Text'
import TextField from 'components/atoms/TextField'
import Button from 'components/atoms/Button'
import SelectOutlined from 'components/molecules/SelectOutlined'
import DateFieldOutlined from 'components/molecules/DateFieldOutlined'
import ScreenCentralCard from 'components/molecules/ScreenCentralCard'
import LinkWithLabel from 'components/molecules/LinkWithLabel'
import useControlledForm from 'hooks/useControlledForm'
import useSignUp from 'hooks/useSignUp'
import { FormFrame, Form, FormInputs } from './style'

const SignUp = () => {
    const { handleOnChange, handleOnSubmit } = useControlledForm({
        name: '',
        paternalSurname: '',
        maternalSurname: '',
        dateOfBirth: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
    })
    const signup = useSignUp()

    return (
        <ScreenCentralCard>
            <FormFrame>
                <Form onSubmit={handleOnSubmit(signup)}>
                    <Text variant="h3">Sign up</Text>
                    <FormInputs>
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <TextField
                            name="paternalSurname"
                            label="Paternal Surname"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <TextField
                            name="maternalSurname"
                            label="Maternal Surname"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <DateFieldOutlined
                            name="dateOfBirth"
                            variant="outlined"
                            label="Date Of Birth"
                            onChange={handleOnChange}
                        />
                        <TextField
                            name="phone"
                            label="Phone"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <SelectOutlined
                            name="gender"
                            label="Gender"
                            items={[
                                { label: 'Man', value: 'Man' },
                                { label: 'Woman', value: 'Woman' },
                            ]}
                            onChange={handleOnChange}
                        />
                        <TextField
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <TextField
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                    </FormInputs>
                    <LinkWithLabel
                        to="/login"
                        replace
                        labelText="Already have an account?"
                        linkText="Log in now"
                    />
                    <Button variant="contained" type="submit">Create Account</Button>
                </Form>
            </FormFrame>
        </ScreenCentralCard>
    )
}

export default SignUp
