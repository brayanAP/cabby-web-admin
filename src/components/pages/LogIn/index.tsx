import React from 'react'
import TextField from 'components/atoms/TextField'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import ScreenCentralCard from 'components/molecules/ScreenCentralCard'
import useControlledForm from 'hooks/useControlledForm'
import useLogIn from 'hooks/useLogIn'
import { FormFrame, Form } from './style'

const LogIn = () => {
    const { handleOnChange, handleOnSubmit } = useControlledForm({ email: '', password: '' })
    const { loggingIn, handleOnLogIn } = useLogIn()

    return (
        <ScreenCentralCard>
            <FormFrame>
                <Form onSubmit={handleOnSubmit(handleOnLogIn)}>
                    <Text variant="h3">Log in</Text>
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
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={loggingIn}
                    >
                        Enter
                    </Button>
                </Form>
            </FormFrame>
        </ScreenCentralCard>
    )
}

export default LogIn
