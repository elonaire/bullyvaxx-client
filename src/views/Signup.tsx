import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { FunctionComponent } from "react";
import Form, { InputField } from "../components/Form";
import { FormFieldWrapper } from "./Home";

interface SignupProps {

}

const Signup: FunctionComponent<SignupProps> = () => {
    return (
        <div style={{ width: '100%', marginTop: '10%' }}>
            <Grid container spacing={2}>
                <Grid item sm={3}></Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">Report a Bully or threat</Typography>
                    <Form initialValues={{ username: '', state: '', county: '' }} buttonText="sign up" buttonSize="medium" submit={() => { }}>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" isSelect={true} fullWidth={true} name="state" selectOptions={['Penn']} variant="outlined" label="Select your state" />
                        </FormFieldWrapper>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" isSelect={true} fullWidth={true} name="county" selectOptions={['Penn']} variant="outlined" label="Select your county" />
                        </FormFieldWrapper>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" fullWidth={true} name="name" type="text" variant="outlined" label="Username" />
                        </FormFieldWrapper>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" fullWidth={true} name="email" type="email" variant="outlined" label="Email" />
                        </FormFieldWrapper>
                        <FormFieldWrapper>
                            <InputField size="small" color="secondary" fullWidth={true} name="email" type="password" variant="outlined" label="Password" />
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

export default Signup;