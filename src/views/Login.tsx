import { Grid, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import Form, { InputField } from '../components/Form';
import { FormFieldWrapper } from './Home';

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <div style={{ width: '100%', marginTop: '10%' }}>
            <Grid container spacing={2}>
                <Grid item sm={3}></Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">Sign in to your account</Typography>
                    <Form initialValues={{ form: { username: '', state: '', county: '' } }} buttonText="sign in" buttonSize="medium" submit={() => { }}>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" fullWidth={true} name="name" type="text" variant="outlined" label="Username" />
                        </FormFieldWrapper>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" fullWidth={true} name="name" type="password" variant="outlined" label="Confirm Password" />
                        </FormFieldWrapper>
                    </Form>
                </Grid>
                <Grid item sm={3}></Grid>
            </Grid>
        </div>
    );
}

export default Login;